---
name: veilink-toolkit
description: "The real scrypt + AES-256-GCM steganography CLI (veilink.py) behind Veil, with setup, exact crypto parameters, usage one-liners, and four inks - including `robust`, the X-proof ink that survives JPEG recompression and resizing so a hidden message still decodes after an image is posted to X and downloaded back. Also decodes images made by stegpy (Fernet + PBKDF2) with no extra install. Use when hiding or extracting so the crypto claims are literally true; plain `decode` tries every supported format (and auto-tries `robust`)."
---

# veilink toolkit

The actual hide/extract tool behind Veil. Use it to make your crypto claims literally true: scrypt into AES-256-GCM, with four "inks" for where the ciphertext is stashed. One of them, **`robust`, is X-proof**: it survives JPEG recompression and downscaling, so a message hidden in a PNG still decodes after the image is posted to X (or any social platform) and saved back. It can also **read images made by stegpy** (`stegpy -p`, the popular Fernet/PBKDF2 LSB tool), so a carrier someone made elsewhere still decodes.

> **Posting to X / social? ALWAYS hide with `--ink robust`.** The `lsb` ink (and stegpy's pixel LSBs) are wiped by X's re-encode to JPEG; `robust` is the only ink built to come back. See "The `robust` ink (X-proof)" below.

## Setup

Save `veilink.py` (below) into a working folder of your choice, then make a venv and install the dependencies:

```bash
mkdir -p veil-work && cd veil-work
python3 -m venv .venv && source .venv/bin/activate
pip install cryptography pillow numpy reedsolo   # numpy: lsb/stegpy/robust; reedsolo: the robust ink
# optional: pip install jpeglib         # only for stegpy's JPEG (DCT-coefficient) mode
```

The stegpy package itself is NOT needed: veilink re-implements stegpy 0.2.0's decoder in pure Python. (If you ever need to cross-check, `pip install stegpy` and run `printf 'PASS\n' | stegpy -p FILE`.)

## Decoding rules (follow these every time)

1. **Default to plain `decode` (auto).** Do not pass `--ink` unless you know the format. Auto tries, in order: VEIL1 `lsb`, `trailing`, `metadata`, `robust`, then `stegpy` (pixel LSBs; JPEG DCT; GIF palette indices; WAV). Because `robust` is in the auto order, **plain `decode` automatically tries the X-proof ink** - a JPEG downloaded from X will still decode with no special flag.
2. **When a decode fails, try every supported format before saying the format is unknown.** If you used a specific `--ink`, rerun with no `--ink` (auto). Only report "unrecognized format" after auto has tried all of them, and say which ones were tried (the CLI prints them).
3. **Read the failure carefully:**
   - exit 2, "recognized as X but the passphrase did not authenticate" -> the format is known; the passphrase is wrong (or the file was altered). Ask the user to double-check the passphrase (case, spaces, punctuation). Never claim the format is unsupported in this case.
   - exit 3, "no supported hidden format found" -> nothing recognizable is there.
4. **JPEGs and social-media downloads.** Always run auto `decode` on the JPEG first. If the message was hidden with the **`robust`** ink (the correct choice for anything posted to X/social), it will decode straight from the downloaded JPEG - that is the whole point of the ink. Only if that fails do the LSB caveats apply: `lsb` and stegpy pixel LSBs live in the least significant bits of each pixel, which lossy re-encoding rewrites, so a JPEG/screenshot/social download usually destroys them. In that case ask for the **original PNG file**, sent as a file/document attachment rather than as a photo. (stegpy's own JPEG DCT mode and the VEIL1 `trailing`/`metadata` inks can also survive in an *untouched* JPEG, but not through X's re-encode.)
5. **Never print a recovered message you were not asked for to a third party, and never guess passphrases beyond what the user gave you.**

## Crypto core (VEIL1, exact parameters)

- Key derivation: `scrypt(passphrase_utf8, salt, N=2**14 (16384), r=8, p=1, dklen=32)` with a fresh random 16-byte salt per message.
- Cipher: AES-256-GCM (AEAD) with a fresh random 12-byte nonce.
- Payload layout: `MAGIC("VEIL1\0", 6B) + salt(16B) + nonce(12B) + ciphertext + tag(16B)`. The 16-byte GCM tag is appended to the ciphertext by the AEAD. Salt and nonce travel inside the payload so extraction can re-derive the key.
- Wrong passphrase -> wrong scrypt key -> GCM tag fails -> `InvalidTag` is raised and no plaintext is returned. The CLI exits non-zero and prints nothing to stdout.

## stegpy compatibility (decode only)

Images made with stegpy 0.2.0 are readable with `decode` (auto) or `decode --ink stegpy`:

- Embedded block with a password: `salt(16B) + Fernet token`; key = `urlsafe_b64(PBKDF2-HMAC-SHA256(passphrase_utf8, salt, 100000 iterations, 32 bytes))`. The token decrypts to `"stegv3" + length(4B BE) + filename_len(1B) + filename + data`. Without a password the same plain layout is embedded directly (veilink reports it as UNENCRYPTED).
- Bit layout: host bytes flattened (RGB, alpha dropped); bits per byte = `2 ** ((byte0 & 0b110000) >> 4)` (1, 2 or 4; default 2); each message byte is spread over `8/bits` host bytes, low-order chunk first.
- JPEG mode stores bits in the AC DCT coefficients (needs the optional `jpeglib`).
- A wrong passphrase fails the Fernet HMAC check: exit 2, no plaintext.

## The `robust` ink (X-proof)

Use `--ink robust` for **anything that will be posted to X or any social platform.** It is designed to survive X's upload pipeline (re-encode to progressive JPEG ~quality 85, 4:2:0 chroma subsampling, widths up to 2048 with 1200/680-wide variants) as well as generic lossy handling, double recompression, and downscaling.

**How it works**

- The payload rides in the **mean luminance of a coarse grid of cells** (not in LSBs). A region's average brightness is essentially its DC term, which JPEG preserves and which downscaling (pixel averaging) preserves - exactly where LSBs die.
- The grid is defined in **normalized (fractional) image coordinates**, recomputed identically at decode from the aspect ratio, so cells line up at any resolution (2048 / 1200 / 680 ...) with no pixel registration.
- Each cell carries one bit by **dither quantization-index modulation (QIM)**: the cell mean is nudged onto an even/odd lattice of spacing `DELTA/2`. Decode reads each bit from whichever lattice the (noisy) mean is closest to, with a soft distance confidence.
- **Error control:** a 16-bit sync header + **Reed-Solomon** (`nsym=40`, corrects up to 20 byte errors) over a fixed-size container, and the whole frame is **repeated ~3-4x** across the grid. Decode soft-combines every repeat of each bit position before Reed-Solomon, so scattered cell errors average away (observed worst case ~5-6 of 20 correctable at q60 + 680px).
- Only the **Y (luminance)** channel is modulated (the delta is added equally to R, G, B), so 4:2:0 chroma subsampling is irrelevant.

**Payload & crypto.** Same VEIL1 seal as every other ink (scrypt + AES-256-GCM). The 6-byte `VEIL1` MAGIC is dropped on the wire to save bits (the sync header + Reed-Solomon identify/validate the frame) and re-attached before unseal, so a **wrong passphrase still fails cleanly on the GCM tag with no plaintext.** Plaintext up to **48 bytes**.

**Carrier & output.** `robust encode` always writes a **PNG** - post *that* file. The visible change is subtle: **PSNR ~38.8-38.9 dB** on the blobs wallpaper and other test images (PSNR depends only on `DELTA`, so it is stable across carriers). Decode works on the PNG *or* on the JPEG that X hands back.

**Extra dependency:** `reedsolo` (`pip install reedsolo`). numpy + Pillow as for the other inks.

**Tested envelope (pass):** JPEG q95/q85/q75/q65/q60, baseline and progressive, 4:2:0, at full width / 1200px / 680px; double recompression; wrong-passphrase rejected (exit 2, no plaintext). **Limitation:** a very small source image (e.g. <~1000px wide) or a pathological pure-high-frequency image can fail at the most aggressive 680px downscale - give `robust` a reasonably large carrier (the giveaway wallpaper at 2048px is ideal).

### PNG-on-X: lossless fallback (unreliable)

Sometimes X keeps a PNG lossless, which would let plain `lsb` survive. What is actually documented:

- **PNG-8 (indexed, <=256 colors) is always kept as PNG** - this is the one reliable case, from X's own announced policy. But PNG-8 is palette-indexed, which breaks RGB-LSB anyway, so it does not help `lsb`.
- **PNG-24/PNG-32 are tested**: X compares the PNG size to the JPEG it would produce and keeps the PNG only if it is "small enough." High-color-depth PNGs are **almost always converted to JPEG**.
- Popular third-party rules of thumb ("PNG stays lossless under ~900 KB" or "under ~900 px wide") are **unofficial heuristics, not reliable** - behavior varies by client (mobile apps often force JPEG), by timeline-preview vs "Load in 4K"/original, and over time. If converted, transparency is flattened to white.

**Bottom line:** do not rely on X preserving a full-color PNG. For a giveaway where strangers on arbitrary clients download the image, **use `--ink robust`** and treat PNG-lossless as a lucky bonus, not a plan.

## Usage (one-liners)

```bash
# Encode for X / social media: ALWAYS use the robust ink (survives JPEG + resize)
python veilink.py encode --ink robust --in carrier.png --out stego.png --message "secret text" --pass "your passphrase"

# Encode: hide a message in a carrier (any ink)
python veilink.py encode --ink lsb --in carrier.png --out stego.png --message "secret text" --pass "your passphrase"

# Decode: auto-detect (VEIL1 inks first, then stegpy)
python veilink.py decode --in stego.png --pass "your passphrase"

# Decode a specific format
python veilink.py decode --ink stegpy --in image.png --pass "your passphrase"

# Write recovered bytes to a file (binary payloads, stegpy file payloads)
python veilink.py decode --in stego.png --pass "your passphrase" --out recovered.bin
```

- `--message` takes literal text, or `@path/to/file` to read raw bytes from a file.
- Encode inks: `robust` (use for X/social), `lsb`, `trailing`, `metadata`. Decode inks: `auto` (default, tries `robust` too), `lsb`, `trailing`, `metadata`, `robust`, `stegpy`.
- **Rule: anything meant to be posted on X or social media MUST be hidden with `--ink robust`.** Plain `decode` auto-tries `robust`, so recipients never need a special flag.
- Decoded plaintext goes to stdout (or `--out`); status lines go to stderr.
- Exit codes: 0 ok, 1 input file missing, 2 format recognized but wrong passphrase / tampered, 3 no supported format found.

## The inks

| ink | carrier | where it hides | survives |
|---|---|---|---|
| `robust` | PNG in, PNG out | payload in the **mean luminance of a normalized block grid** (QIM) + Reed-Solomon + repetition; Y channel only. Up to 48 bytes. | **X / social: survives JPEG re-encode (q>=60, baseline/progressive, 4:2:0) and downscaling to 1200/680px, plus double recompression.** PSNR ~38.8 dB |
| `lsb` | PNG only | least-significant bits of RGB channels, with a 4-byte big-endian length prefix. Capacity ~= `W*H*3/8` bytes. | lossless copies only; JPEG re-encode destroys it |
| `trailing` | any file | appended past logical EOF as `VEILTRL1 + len(4B BE) + payload`. | file copy; dies if the file is rewritten/normalized |
| `metadata` | PNG or JPEG | base64 payload in a PNG `tEXt` chunk (`veilink`) or JPEG EXIF `UserComment`. | naive re-save; dies to `exiftool -all=` or a real re-encode |
| `stegpy` (decode only) | PNG/BMP/WebP, JPEG, GIF, WAV | stegpy 0.2.0 layout: 1/2/4-bit LSBs (pixels, GIF indices, WAV bytes) or JPEG AC coefficients | lossless copies only; any recompression destroys it |

## Source: veilink.py

```python
#!/usr/bin/env python3
"""veilink.py - a small, reliable steganography toolkit.

Three "inks" (encode/decode strategies):
  - lsb       : hide an encrypted payload in the LSBs of a PNG's RGB channels
  - trailing  : append an encrypted payload past a file's logical EOF (any file)
  - metadata  : stash the encrypted payload (base64) in PNG tEXt / JPEG EXIF UserComment
  - robust    : X-proof ink. QIM on normalized block-mean luminance + Reed-Solomon;
                survives JPEG recompression (q>=60, baseline/progressive, 4:2:0) and
                downscaling to 1200/680px. Use this for anything posted to X / social.

Crypto core (identical for every ink):
  - key  = scrypt(passphrase_utf8, salt=16 random bytes, N=2**14, r=8, p=1, dklen=32)
  - seal = AES-256-GCM with a random 12-byte nonce
  - payload = MAGIC + salt(16) + nonce(12) + ciphertext + tag(16)
              (the 16-byte GCM tag is appended to the ciphertext by the AEAD)
  - a wrong passphrase fails on the GCM auth tag (InvalidTag); no plaintext is ever
    returned on failure.

Read-only compatibility "ink":
  - stegpy    : decode images made by stegpy 0.2.0 (`stegpy -p`). Pure-Python
                re-implementation of its format: "stegv3" header, 1/2/4-bit LSB
                layout (pixels; JPEG DCT coefficients; GIF palette indices; WAV),
                salt(16) + Fernet token, key = PBKDF2-HMAC-SHA256(100000 iters).
                The stegpy package itself is NOT required.

`decode` without --ink (or --ink auto) tries every supported format: the VEIL1
inks first (lsb, trailing, metadata, robust), then stegpy. On a JPEG or any
social-media download, `robust` is the one designed to still decode.
"""
from __future__ import annotations

import argparse
import base64
import os
import struct
import sys

from cryptography.exceptions import InvalidTag
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.kdf.scrypt import Scrypt

# ---------------------------------------------------------------------------
# Crypto core
# ---------------------------------------------------------------------------

PAYLOAD_MAGIC = b"VEIL1\x00"   # 6-byte header identifying a veilink payload
SCRYPT_N = 2 ** 14            # 16384
SCRYPT_R = 8
SCRYPT_P = 1
KEY_LEN = 32                 # AES-256
SALT_LEN = 16
NONCE_LEN = 12
TAG_LEN = 16                 # informational; GCM appends this to the ciphertext


def _derive_key(passphrase: str, salt: bytes) -> bytes:
    kdf = Scrypt(salt=salt, length=KEY_LEN, n=SCRYPT_N, r=SCRYPT_R, p=SCRYPT_P)
    return kdf.derive(passphrase.encode("utf-8"))


def seal(plaintext: bytes, passphrase: str) -> bytes:
    """Encrypt + authenticate -> MAGIC + salt + nonce + ciphertext+tag."""
    salt = os.urandom(SALT_LEN)
    nonce = os.urandom(NONCE_LEN)
    key = _derive_key(passphrase, salt)
    ct = AESGCM(key).encrypt(nonce, plaintext, None)  # ct == ciphertext || tag
    return PAYLOAD_MAGIC + salt + nonce + ct


def unseal(payload: bytes, passphrase: str) -> bytes:
    """Re-derive the key and verify+decrypt. Raises InvalidTag on wrong pass."""
    if not payload.startswith(PAYLOAD_MAGIC):
        raise ValueError("payload magic not found / not a veilink payload")
    body = payload[len(PAYLOAD_MAGIC):]
    if len(body) < SALT_LEN + NONCE_LEN + TAG_LEN:
        raise ValueError("payload too short / truncated")
    salt = body[:SALT_LEN]
    nonce = body[SALT_LEN:SALT_LEN + NONCE_LEN]
    ct = body[SALT_LEN + NONCE_LEN:]
    key = _derive_key(passphrase, salt)
    # AESGCM.decrypt raises cryptography.exceptions.InvalidTag and returns
    # nothing if the tag does not verify -> no plaintext is leaked.
    return AESGCM(key).decrypt(nonce, ct, None)


# ---------------------------------------------------------------------------
# Ink 1: LSB (PNG only)
# ---------------------------------------------------------------------------

def _lsb_capacity_bytes(width: int, height: int) -> int:
    return (width * height * 3) // 8


def lsb_encode(carrier_path: str, out_path: str, payload: bytes) -> None:
    import numpy as np
    from PIL import Image

    img = Image.open(carrier_path)
    if (img.format or "").upper() != "PNG":
        raise ValueError("lsb ink requires a PNG carrier (lossy formats destroy LSBs)")
    img = img.convert("RGB")
    arr = np.array(img, dtype=np.uint8)
    h, w, _ = arr.shape

    # 4-byte big-endian length prefix so decode knows how much to read.
    data = struct.pack(">I", len(payload)) + payload
    capacity = _lsb_capacity_bytes(w, h)
    if len(data) > capacity:
        raise ValueError(
            f"payload too large for carrier: need {len(data)} bytes, "
            f"capacity ~{capacity} bytes ({w}x{h}x3/8)"
        )

    bits = np.unpackbits(np.frombuffer(data, dtype=np.uint8))
    flat = arr.reshape(-1)
    flat[: bits.size] = (flat[: bits.size] & 0xFE) | bits
    out = flat.reshape(arr.shape)
    Image.fromarray(out, "RGB").save(out_path, format="PNG")


def lsb_decode(stego_path: str) -> bytes:
    import numpy as np
    from PIL import Image

    img = Image.open(stego_path)
    if (img.format or "").upper() != "PNG":
        raise ValueError("lsb decode requires a PNG (the carrier must be lossless)")
    arr = np.array(img.convert("RGB"), dtype=np.uint8).reshape(-1)
    lsbs = arr & 1

    # First 32 bits = big-endian payload length.
    header_bits = lsbs[:32]
    length = int.from_bytes(np.packbits(header_bits).tobytes(), "big")
    total_bits = 32 + length * 8
    if total_bits > lsbs.size:
        raise ValueError("declared length exceeds carrier capacity (not a veil carrier?)")
    payload_bits = lsbs[32:total_bits]
    return np.packbits(payload_bits).tobytes()


# ---------------------------------------------------------------------------
# Ink 2: trailing (any file)
# ---------------------------------------------------------------------------

TRAILER_MAGIC = b"VEILTRL1"   # recognizable marker before the appended block


def trailing_encode(carrier_path: str, out_path: str, payload: bytes) -> None:
    with open(carrier_path, "rb") as f:
        base = f.read()
    # original bytes, then marker + 4-byte BE length + payload, all past EOF.
    block = TRAILER_MAGIC + struct.pack(">I", len(payload)) + payload
    with open(out_path, "wb") as f:
        f.write(base + block)


def trailing_decode(stego_path: str) -> bytes:
    with open(stego_path, "rb") as f:
        data = f.read()
    idx = data.rfind(TRAILER_MAGIC)
    if idx < 0:
        raise ValueError("trailing marker not found (no hidden payload?)")
    p = idx + len(TRAILER_MAGIC)
    (length,) = struct.unpack(">I", data[p:p + 4])
    p += 4
    payload = data[p:p + length]
    if len(payload) != length:
        raise ValueError("trailing payload truncated")
    return payload


# ---------------------------------------------------------------------------
# Ink 3: metadata (PNG tEXt / JPEG EXIF UserComment)
# ---------------------------------------------------------------------------

META_KEY = "veilink"  # PNG tEXt keyword


def metadata_encode(carrier_path: str, out_path: str, payload: bytes) -> None:
    from PIL import Image

    img = Image.open(carrier_path)
    fmt = (img.format or "").upper()
    b64 = base64.b64encode(payload).decode("ascii")

    if fmt == "PNG":
        from PIL.PngImagePlugin import PngInfo
        meta = PngInfo()
        meta.add_text(META_KEY, b64)
        img.save(out_path, format="PNG", pnginfo=meta)
    elif fmt in ("JPEG", "JPG"):
        exif = img.getexif()
        # 0x9286 = UserComment. Pillow writes it as a plain string here; we
        # tag it with our key so decode can recognize it.
        exif[0x9286] = f"{META_KEY}:{b64}"
        img.save(out_path, format="JPEG", exif=exif, quality=95)
    else:
        raise ValueError(f"metadata ink supports PNG or JPEG carriers, not {fmt!r}")


def metadata_decode(stego_path: str) -> bytes:
    from PIL import Image

    img = Image.open(stego_path)
    fmt = (img.format or "").upper()
    b64 = None

    if fmt == "PNG":
        b64 = (img.text or {}).get(META_KEY)
    elif fmt in ("JPEG", "JPG"):
        exif = img.getexif()
        raw = exif.get(0x9286)
        if isinstance(raw, bytes):
            raw = raw.decode("utf-8", "ignore")
        if raw and raw.startswith(f"{META_KEY}:"):
            b64 = raw[len(META_KEY) + 1:]
    else:
        raise ValueError(f"metadata ink supports PNG or JPEG carriers, not {fmt!r}")

    if not b64:
        raise ValueError("no veilink metadata field found (stripped or wrong carrier?)")
    return base64.b64decode(b64)


# ---------------------------------------------------------------------------
# Read-only ink: stegpy 0.2.0 compatibility (decode only)
# ---------------------------------------------------------------------------
# Faithful port of stegpy 0.2.0 (stegpy/lsb.py + stegpy/crypt.py):
#   embedded = [salt(16) + Fernet token]          if a password was used
#              MAGIC "stegv3" + len(4B BE) + fnlen(1B) + filename + data   (plain)
#   Fernet key = urlsafe_b64encode(PBKDF2-HMAC-SHA256(pw_utf8, salt, 100000, 32))
#   The Fernet token decrypts to the plain layout above.
# Bit layout (pixels / GIF indices / WAV bytes):
#   flatten host bytes; bits = 2 ** ((host[0] & 0b110000) >> 4); divisor = 8 // bits;
#   message byte k = OR over i in range(divisor) of
#                    (host[k*divisor + i] & (2**bits - 1)) << (bits * i)
#   (low-order chunk first). Byte 0's bits 4-5 carry the width; its low bits are
#   still payload.
# JPEG (stegpy's DCT mode, needs the optional `jpeglib` package):
#   carriers = the 63 AC coefficients of every 8x8 block in zigzag order, channel Y
#   then Cb then Cr; the very first carrier holds the bit-width code (|c| & 3:
#   0->1, 1->2, 2->4 bits); value = |coef| & (2**bits - 1), same chunk order.

STEGPY_MAGIC = b"stegv3"
STEGPY_SALT_LEN = 16
STEGPY_PBKDF2_ITERS = 100_000
_JPEG_ZIGZAG = [
    (0, 0), (0, 1), (1, 0), (2, 0), (1, 1), (0, 2), (0, 3), (1, 2),
    (2, 1), (3, 0), (4, 0), (3, 1), (2, 2), (1, 3), (0, 4), (0, 5),
    (1, 4), (2, 3), (3, 2), (4, 1), (5, 0), (6, 0), (5, 1), (4, 2),
    (3, 3), (2, 4), (1, 5), (0, 6), (0, 7), (1, 6), (2, 5), (3, 4),
    (4, 3), (5, 2), (6, 1), (7, 0), (7, 1), (6, 2), (5, 3), (4, 4),
    (3, 5), (2, 6), (1, 7), (2, 7), (3, 6), (4, 5), (5, 4), (6, 3),
    (7, 2), (7, 3), (6, 4), (5, 5), (4, 6), (3, 7), (4, 7), (5, 6),
    (6, 5), (7, 4), (7, 5), (6, 6), (5, 7), (6, 7), (7, 6), (7, 7),
]
_JPEG_CODE_TO_BITS = {0: 1, 1: 2, 2: 4}


class StegpyWrongPassphrase(Exception):
    """A stegpy-style encrypted block was found but the passphrase is wrong."""


def _sniff(path: str) -> str:
    with open(path, "rb") as f:
        head = f.read(16)
    if head.startswith(b"\xff\xd8\xff"):
        return "jpeg"
    if head.startswith(b"\x89PNG\r\n\x1a\n"):
        return "png"
    if head[:6] in (b"GIF87a", b"GIF89a"):
        return "gif"
    if head[:4] == b"RIFF" and head[8:12] == b"WAVE":
        return "wav"
    if head[:4] == b"RIFF" and head[8:12] == b"WEBP":
        return "webp"
    if head[:2] == b"BM":
        return "bmp"
    return "other"


def _stegpy_unpack_lsb(host):
    """stegpy lsb.decode_message: flat uint8 host array -> message bytes."""
    import numpy as np

    host = np.asarray(host, dtype=np.uint8).reshape(-1)
    if host.size == 0:
        return b""
    bits = 2 ** int((int(host[0]) & 48) >> 4)
    divisor = 8 // bits
    if host.size % divisor != 0:
        host = np.resize(host, host.size + (divisor - host.size % divisor))
    msg = np.zeros(host.size // divisor, dtype=np.uint8)
    mask = (2 ** bits - 1) & 0xFF
    for i in range(divisor):
        msg |= ((host[i::divisor] & mask) << (bits * i)).astype(np.uint8)
    return msg.tobytes()


def _stegpy_pixels(path: str) -> bytes:
    import numpy as np
    from PIL import Image

    img = Image.open(path)
    if img.mode != "RGB":          # stegpy drops alpha / expands palettes this way
        img = img.convert("RGB")
    return _stegpy_unpack_lsb(np.array(img))


def _stegpy_gif(path: str) -> bytes:
    import numpy as np
    from PIL import GifImagePlugin, Image

    prev = GifImagePlugin.LOADING_STRATEGY
    GifImagePlugin.LOADING_STRATEGY = (
        GifImagePlugin.LoadingStrategy.RGB_AFTER_DIFFERENT_PALETTE_ONLY)
    try:
        img = Image.open(path)
        palette = img.getpalette() or []
        frames = []
        try:
            while True:
                if img.mode != "P":
                    raise ValueError("GIF frames are not palette-indexed "
                                     "(not a stegpy-written GIF)")
                frames.append(np.array(img))
                img.seek(img.tell() + 1)
        except EOFError:
            pass
    finally:
        GifImagePlugin.LOADING_STRATEGY = prev
    # stegpy normalize_gif_palette: duplicate colors map to their first index
    colors = [tuple(palette[i:i + 3]) for i in range(0, len(palette) - 2, 3)][:256]
    remap = np.arange(256, dtype=np.uint8)
    first = {}
    for idx, c in enumerate(colors):
        if c in first:
            remap[idx] = first[c]
        else:
            first[c] = idx
    return _stegpy_unpack_lsb(remap[np.asarray(frames)])


def _stegpy_wav(path: str) -> bytes:
    import numpy as np

    data = np.fromfile(path, dtype=np.uint8)
    return _stegpy_unpack_lsb(data[10000:])   # stegpy treats 10000 bytes as header


def _stegpy_jpeg_dct(path: str) -> bytes:
    try:
        import jpeglib
    except ImportError as e:
        raise ValueError("stegpy JPEG (DCT) mode needs the optional 'jpeglib' "
                         "package: pip install jpeglib") from e
    import numpy as np

    jpeg = jpeglib.read_dct(path)
    channels = [jpeg.Y]
    if getattr(jpeg, "Cb", None) is not None and getattr(jpeg, "Cr", None) is not None:
        channels += [jpeg.Cb, jpeg.Cr]
    offs = np.asarray([r * 8 + c for r, c in _JPEG_ZIGZAG[1:]], dtype=np.int64)
    carriers = []
    for ch in channels:
        flat = np.asarray(ch).reshape(-1)
        nblocks = ch.shape[0] * ch.shape[1]
        idx = ((np.arange(nblocks, dtype=np.int64) * 64).reshape(-1, 1) + offs).reshape(-1)
        carriers.append(np.abs(flat[idx].astype(np.int32)))
    allc = np.concatenate(carriers) if carriers else np.zeros(0, dtype=np.int32)
    if allc.size == 0:
        return b""
    bits = _JPEG_CODE_TO_BITS.get(int(allc[0]) & 3, 2)
    divisor = 8 // bits
    chunks = (allc[1:] & (2 ** bits - 1)).astype(np.uint8)
    chunks = chunks[: chunks.size - (chunks.size % divisor)]
    msg = np.zeros(chunks.size // divisor, dtype=np.uint8)
    for i in range(divisor):
        msg |= (chunks[i::divisor] << (bits * i)).astype(np.uint8)
    return msg.tobytes()


def _stegpy_raw_candidates(path: str, errors: list):
    """Yield (label, raw_bytes) for each way stegpy could have embedded data."""
    kind = _sniff(path)
    if kind == "jpeg":
        order = [("jpeg-dct", _stegpy_jpeg_dct), ("pixels", _stegpy_pixels)]
    elif kind == "gif":
        order = [("gif-indices", _stegpy_gif), ("pixels", _stegpy_pixels)]
    elif kind == "wav":
        order = [("wav", _stegpy_wav)]
    else:  # png / bmp / webp / anything Pillow can open
        order = [("pixels", _stegpy_pixels)]
    for label, fn in order:
        try:
            raw = fn(path)
        except Exception as e:  # unreadable in this mode -> try the next one
            errors.append(f"{label} mode unavailable ({e})")
            continue
        yield label, raw


def _stegpy_fernet_lengths(token: bytes):
    """stegpy crypt.fernet_token_lengths: plausible token ends in host bytes."""
    valid = set(b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=")
    max_end = 0
    for b in token:
        if b not in valid:
            break
        max_end += 1
    pad = token.find(b"=")
    if pad != -1:
        end = pad + 1
        while end < len(token) and token[end] == ord("="):
            end += 1
        if end <= max_end:
            yield end
    for end in range(4, max_end + 1):
        if end % 4 == 0:
            yield end


def _stegpy_decrypt(raw: bytes, passphrase: str) -> bytes:
    """stegpy crypt.decrypt_embedded_info. Raises StegpyWrongPassphrase."""
    import base64 as _b64
    from cryptography.fernet import Fernet, InvalidToken
    from cryptography.hazmat.primitives import hashes
    from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

    salt = raw[:STEGPY_SALT_LEN]
    token = raw[STEGPY_SALT_LEN:]
    kdf = PBKDF2HMAC(algorithm=hashes.SHA256(), length=32, salt=salt,
                     iterations=STEGPY_PBKDF2_ITERS)
    f = Fernet(_b64.urlsafe_b64encode(kdf.derive(passphrase.encode("utf-8"))))
    for end in dict.fromkeys(_stegpy_fernet_lengths(token)):
        try:
            return f.decrypt(token[:end])
        except (InvalidToken, ValueError):
            continue
    raise StegpyWrongPassphrase("Fernet HMAC check failed")


def _stegpy_parse(msg: bytes):
    """Plain stegpy layout -> (data, embedded_filename_or_None)."""
    if msg[:6] != STEGPY_MAGIC:
        raise ValueError("stegpy magic 'stegv3' missing after decryption")
    length = int.from_bytes(msg[6:10], "big")
    fn_len = msg[10]
    start = 11 + fn_len
    data = msg[start:start + length]
    if len(data) != length:
        raise ValueError("stegpy payload truncated")
    name = msg[11:start].decode("utf-8", "replace") if fn_len else None
    return data, name


def stegpy_decode(stego_path: str, passphrase: str):
    """Decode a stegpy 0.2.0 carrier -> (data, embedded_filename, info).

    Raises StegpyWrongPassphrase if a stegpy-encrypted block is present but the
    passphrase is wrong, ValueError if no stegpy data is recognized at all.
    """
    saw_encrypted = False
    errors: list = []
    for label, raw in _stegpy_raw_candidates(stego_path, errors):
        if raw[:6] == STEGPY_MAGIC:  # stegpy used without -p (no encryption)
            data, name = _stegpy_parse(raw)
            return data, name, f"stegpy {label}, UNENCRYPTED (no password was set)"
        # stegpy -p: 16-byte salt then a Fernet token, which always begins "gAAAAA"
        # (version byte 0x80 + big-endian timestamp, base64url-encoded).
        if len(raw) > 22 and raw[16:18] == b"gA":
            saw_encrypted = True
            try:
                msg = _stegpy_decrypt(raw, passphrase)
            except StegpyWrongPassphrase:
                continue
            data, name = _stegpy_parse(msg)
            return data, name, f"stegpy {label}, Fernet/PBKDF2-SHA256"
    if saw_encrypted:
        raise StegpyWrongPassphrase(
            "stegpy-encrypted data found but the passphrase is wrong")
    raise ValueError("no stegpy data found"
                     + (" [" + "; ".join(errors) + "]" if errors else ""))


# ---------------------------------------------------------------------------
# Ink 4: robust (X-proof) - QIM on normalized block-mean luminance + Reed-Solomon
# ---------------------------------------------------------------------------
# Goal: survive X's upload pipeline (re-encode to progressive JPEG ~q85, chroma
# 4:2:0, widths up to 2048 with 1200/680 variants) and generic lossy handling.
#
# How it survives:
#   * Payload lives in the MEAN LUMINANCE of a coarse grid of cells (not in LSBs).
#     A region's mean is preserved by JPEG (it is essentially the DC term) and by
#     downscaling (which averages pixels), so it is robust where LSBs are not.
#   * The grid is defined in NORMALIZED (fractional) image coordinates, recomputed
#     identically at decode from the image's aspect ratio, so cells line up at any
#     resolution (2048 / 1200 / 680 ...) with no pixel registration.
#   * Each cell carries one bit via dither Quantization-Index Modulation (QIM):
#     the cell mean is nudged onto an even/odd lattice of spacing DELTA/2. Decode
#     reads the bit from whichever lattice the (noisy) mean is closest to, with a
#     soft (distance) confidence.
#   * Error control: a 16-bit SYNC header + Reed-Solomon (nsym=40, corrects up to
#     20 byte errors) over a fixed-size container, then the whole frame is REPEATED
#     across the grid (~3.6x on a 16:9 image). Decode soft-combines every repeat of
#     each bit position before RS, so cell errors are averaged away.
#   * Only the Y channel is touched (the luminance delta is added equally to R,G,B),
#     so 4:2:0 chroma subsampling is irrelevant.
#
# Payload: the standard VEIL1 seal (scrypt + AES-256-GCM). The 6-byte VEIL1 MAGIC
# is dropped on the wire (the SYNC header + RS already identify/validate the frame)
# and re-attached before unseal, so a wrong passphrase still fails cleanly on the
# GCM tag with no plaintext. Plaintext up to ROBUST_MAX_MSG bytes.
#
# Dependency: reedsolo (pip install reedsolo). numpy + Pillow as for the other inks.

ROBUST_SYNC_BITS = (1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1)  # 16-bit frame sync
ROBUST_TARGET_CELLS = 4000   # approx number of grid cells (resolution-independent)
ROBUST_DELTA = 10.0          # QIM lattice spacing on the cell mean (<=~10 keeps PSNR>=38)
ROBUST_RS_NSYM = 40          # Reed-Solomon parity bytes (corrects up to 20 byte errors)
ROBUST_MAX_MSG = 48          # max plaintext bytes
# VEIL1 seal (without MAGIC) = salt(16)+nonce(12)+ct(=msglen)+tag(16). Padded to the
# max so the frame length is constant and decode needs no length negotiation.
ROBUST_BODY_LEN = SALT_LEN + NONCE_LEN + ROBUST_MAX_MSG + TAG_LEN   # 92
ROBUST_DATA_LEN = 1 + ROBUST_BODY_LEN                               # 1 len byte + body = 93
ROBUST_ENC_LEN = ROBUST_DATA_LEN + ROBUST_RS_NSYM                   # RS-encoded = 133
ROBUST_FRAME_BITS = len(ROBUST_SYNC_BITS) + ROBUST_ENC_LEN * 8      # 1080


def _robust_grid(w: int, h: int):
    """Grid (gx, gy) of ~square cells, derived only from the aspect ratio so it is
    identical at encode and at any decode resolution."""
    aspect = w / h
    gx = max(1, round((ROBUST_TARGET_CELLS * aspect) ** 0.5))
    gy = max(1, round((ROBUST_TARGET_CELLS / aspect) ** 0.5))
    return gx, gy


def _robust_edges(n: int, g: int):
    import numpy as np
    return np.array([round(i * n / g) for i in range(g + 1)], dtype=np.int64)


def _robust_luma(arr):
    import numpy as np
    r = arr[..., 0].astype(np.float64)
    g = arr[..., 1].astype(np.float64)
    b = arr[..., 2].astype(np.float64)
    return 0.299 * r + 0.587 * g + 0.114 * b


def _robust_cell_means(Y, xe, ye):
    """Mean luminance of every grid cell -> (gy, gx) float array, plus the per-cell
    pixel counts (for expanding a per-cell delta back to full resolution)."""
    import numpy as np
    rowsum = np.add.reduceat(Y, ye[:-1], axis=0)          # (gy, W)
    blocksum = np.add.reduceat(rowsum, xe[:-1], axis=1)   # (gy, gx)
    yc = np.diff(ye)
    xc = np.diff(xe)
    counts = np.outer(yc, xc).astype(np.float64)
    return blocksum / counts, yc, xc


def _robust_rscodec():
    try:
        import reedsolo
    except ImportError as e:
        raise ValueError("robust ink needs the 'reedsolo' package: pip install reedsolo") from e
    return reedsolo.RSCodec(ROBUST_RS_NSYM), reedsolo


def _robust_frame_bits_from_enc(enc: bytes):
    import numpy as np
    sync = np.array(ROBUST_SYNC_BITS, dtype=np.uint8)
    data = np.unpackbits(np.frombuffer(enc, dtype=np.uint8))
    return np.concatenate([sync, data])


def robust_encode(carrier_path: str, out_path: str, payload: bytes) -> None:
    """Embed a VEIL1 payload into block-mean luminance (QIM + Reed-Solomon).

    `payload` is the full VEIL1 seal (MAGIC+salt+nonce+ct+tag). The MAGIC is
    stripped for transport; the real plaintext length is stored in a 1-byte header
    so decode can rebuild the exact seal. Always writes a PNG (post THIS file)."""
    import numpy as np
    from PIL import Image

    if not payload.startswith(PAYLOAD_MAGIC):
        raise ValueError("robust ink expects a VEIL1 payload")
    body = payload[len(PAYLOAD_MAGIC):]              # salt+nonce+ct+tag
    msglen = len(body) - (SALT_LEN + NONCE_LEN + TAG_LEN)
    if msglen < 0:
        raise ValueError("payload too short / not a VEIL1 payload")
    if msglen > ROBUST_MAX_MSG:
        raise ValueError(
            f"robust ink message too long: {msglen} bytes > {ROBUST_MAX_MSG} max")
    body_padded = body + b"\x00" * (ROBUST_BODY_LEN - len(body))
    data = bytes([msglen]) + body_padded             # ROBUST_DATA_LEN bytes
    rs, _ = _robust_rscodec()
    enc = bytes(rs.encode(bytearray(data)))          # ROBUST_ENC_LEN bytes
    frame = _robust_frame_bits_from_enc(enc)         # ROBUST_FRAME_BITS bits
    flen = frame.size

    img = Image.open(carrier_path).convert("RGB")
    arr = np.array(img, dtype=np.float64)
    h, w, _ = arr.shape
    gx, gy = _robust_grid(w, h)
    n = gx * gy
    if n < flen:
        raise ValueError(
            f"carrier too small for robust ink: {n} cells < {flen} frame bits "
            f"(need a larger image)")
    xe = _robust_edges(w, gx)
    ye = _robust_edges(h, gy)
    Y = _robust_luma(arr)
    means, yc, xc = _robust_cell_means(Y, xe, ye)
    means_flat = means.reshape(-1)

    # frame bit assigned to each cell (row-major), cyclically repeated
    cell_bits = np.resize(frame, n).astype(np.float64)

    half = ROBUST_DELTA / 2.0
    k = np.round(means_flat / half)
    parity = (k.astype(np.int64) & 1).astype(np.float64)
    need = parity != cell_bits
    # move to the nearer neighbouring lattice point with the correct parity
    kup = k + 1.0
    kdn = k - 1.0
    pick_up = np.abs(kup * half - means_flat) <= np.abs(kdn * half - means_flat)
    k_fixed = np.where(pick_up, kup, kdn)
    k = np.where(need, k_fixed, k)
    target = k * half
    delta_cells = (target - means_flat).reshape(gy, gx)

    # expand per-cell delta to full resolution and add equally to R,G,B
    dY = np.repeat(np.repeat(delta_cells, yc, axis=0), xc, axis=1)
    out_arr = np.clip(arr + dY[..., None], 0, 255).astype(np.uint8)
    Image.fromarray(out_arr, "RGB").save(out_path, format="PNG")


def robust_decode(stego_path: str) -> bytes:
    """Recover the VEIL1 payload embedded by robust_encode from any resolution /
    JPEG re-encode. Returns MAGIC+salt+nonce+ct+tag; raises if no frame is found."""
    import numpy as np
    from PIL import Image

    rs, reedsolo = _robust_rscodec()
    img = Image.open(stego_path).convert("RGB")
    arr = np.array(img, dtype=np.float64)
    h, w, _ = arr.shape
    gx, gy = _robust_grid(w, h)
    n = gx * gy
    flen = ROBUST_FRAME_BITS
    if n < flen:
        raise ValueError("image too small to contain a robust frame")
    xe = _robust_edges(w, gx)
    ye = _robust_edges(h, gy)
    Y = _robust_luma(arr)
    means, _, _ = _robust_cell_means(Y, xe, ye)
    means_flat = means.reshape(-1)

    half = ROBUST_DELTA / 2.0
    r = means_flat / half
    nearest_even = 2.0 * np.round(r / 2.0)
    nearest_odd = 2.0 * np.round((r - 1.0) / 2.0) + 1.0
    d0 = np.abs(r - nearest_even)   # distance to a bit-0 (even) lattice point
    d1 = np.abs(r - nearest_odd)    # distance to a bit-1 (odd) lattice point
    soft_cell = d0 - d1             # >0 -> this cell votes bit 1

    # soft-combine every repeat of each frame-bit position
    pos = np.arange(n) % flen
    soft = np.bincount(pos, weights=soft_cell, minlength=flen)[:flen]
    bits = (soft > 0).astype(np.uint8)

    if tuple(int(b) for b in bits[:len(ROBUST_SYNC_BITS)]) != ROBUST_SYNC_BITS:
        raise ValueError("robust sync header not found (not a robust carrier?)")

    data_bits = bits[len(ROBUST_SYNC_BITS):len(ROBUST_SYNC_BITS) + ROBUST_ENC_LEN * 8]
    enc = np.packbits(data_bits).tobytes()
    try:
        data = bytes(rs.decode(bytearray(enc))[0])
    except reedsolo.ReedSolomonError as e:
        raise ValueError(f"robust Reed-Solomon decode failed ({e})") from e
    if len(data) != ROBUST_DATA_LEN:
        raise ValueError("robust frame length mismatch")
    msglen = data[0]
    if msglen > ROBUST_MAX_MSG:
        raise ValueError("robust header reports an impossible message length")
    body = data[1:1 + SALT_LEN + NONCE_LEN + msglen + TAG_LEN]
    return PAYLOAD_MAGIC + body


# ---------------------------------------------------------------------------
# Dispatch + CLI
# ---------------------------------------------------------------------------

ENCODERS = {"lsb": lsb_encode, "trailing": trailing_encode,
            "metadata": metadata_encode, "robust": robust_encode}
DECODERS = {"lsb": lsb_decode, "trailing": trailing_decode,
            "metadata": metadata_decode, "robust": robust_decode}
VEIL1_ORDER = ["lsb", "trailing", "metadata", "robust"]
DECODE_INKS = ["auto"] + VEIL1_ORDER + ["stegpy"]

LOSSY_HINT = (
    "This file is a JPEG. If it was re-saved, screenshotted, or downloaded from X "
    "or another social site, recompression has almost certainly wiped the LSB "
    "data. Ask for the ORIGINAL PNG file, sent as a file/document (not as a photo).")


def _read_message(arg: str) -> bytes:
    if arg.startswith("@"):
        with open(arg[1:], "rb") as f:
            return f.read()
    return arg.encode("utf-8")


def cmd_encode(args: argparse.Namespace) -> int:
    message = _read_message(args.message)
    payload = seal(message, getattr(args, "pass"))
    ENCODERS[args.ink](args.in_path, args.out, payload)
    print(f"[ok] encoded {len(message)} byte message ({len(payload)} byte payload) "
          f"via '{args.ink}' -> {args.out}")
    return 0


def _try_veil1(ink: str, path: str, passphrase: str):
    """-> ('ok', plaintext) | ('badpass', None) | ('absent', reason)."""
    try:
        payload = DECODERS[ink](path)
        return "ok", unseal(payload, passphrase)
    except InvalidTag:
        return "badpass", None
    except Exception as e:  # not this ink / not a VEIL1 payload
        return "absent", str(e)


def _try_stegpy(path: str, passphrase: str):
    try:
        data, name, info = stegpy_decode(path, passphrase)
        return "ok", (data, name, info)
    except StegpyWrongPassphrase:
        return "badpass", None
    except Exception as e:
        return "absent", str(e)


def _emit(plaintext: bytes, out: str | None) -> None:
    if out:
        with open(out, "wb") as f:
            f.write(plaintext)
        print(f"[ok] wrote {len(plaintext)} bytes -> {out}", file=sys.stderr)
        return
    sys.stdout.buffer.write(plaintext)
    if sys.stdout.isatty() and not plaintext.endswith(b"\n"):
        sys.stdout.buffer.write(b"\n")


def cmd_decode(args: argparse.Namespace) -> int:
    path, pw = args.in_path, getattr(args, "pass")
    if not os.path.isfile(path):
        print(f"[fail] input file not found: {path}", file=sys.stderr)
        return 1
    inks = VEIL1_ORDER + ["stegpy"] if args.ink == "auto" else [args.ink]
    wrong_pass, absent = [], []

    for ink in inks:
        if ink == "stegpy":
            status, result = _try_stegpy(path, pw)
        else:
            status, result = _try_veil1(ink, path, pw)
        if status == "ok":
            if ink == "stegpy":
                data, name, info = result
                note = f" (embedded file name: {name!r})" if name else ""
                print(f"[ok] decoded via '{ink}' [{info}]{note}", file=sys.stderr)
                _emit(data, args.out)
            else:
                print(f"[ok] decoded via '{ink}' [VEIL1 scrypt+AES-256-GCM]",
                      file=sys.stderr)
                _emit(result, args.out)
            return 0
        if status == "badpass":
            wrong_pass.append(ink)
        else:
            absent.append(f"{ink}: {result}")

    lossy = _sniff(path) == "jpeg"
    if wrong_pass:
        print(f"[fail] hidden data recognized as {', '.join(wrong_pass)} but the "
              "passphrase did not authenticate (wrong passphrase or tampered data). "
              "No plaintext recovered.", file=sys.stderr)
        return 2
    print("[fail] no supported hidden format found. Tried: "
          + "; ".join(absent), file=sys.stderr)
    if lossy:
        print("[hint] " + LOSSY_HINT, file=sys.stderr)
    return 3


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(prog="veilink.py", description=__doc__,
                                formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="command", required=True)

    enc = sub.add_parser("encode", help="hide a message in a carrier")
    enc.add_argument("--ink", required=True, choices=sorted(ENCODERS))
    enc.add_argument("--in", dest="in_path", required=True, metavar="CARRIER")
    enc.add_argument("--out", required=True, metavar="FILE")
    enc.add_argument("--message", required=True, metavar="TEXT|@FILE",
                     help="literal text, or @path to read bytes from a file")
    enc.add_argument("--pass", required=True, metavar="PASSPHRASE")
    enc.set_defaults(func=cmd_encode)

    dec = sub.add_parser("decode", help="extract a message from a stego file "
                         "(default: try every supported format)")
    dec.add_argument("--ink", default="auto", choices=DECODE_INKS,
                     help="auto (default) tries lsb, trailing, metadata, robust, then stegpy")
    dec.add_argument("--in", dest="in_path", required=True, metavar="FILE")
    dec.add_argument("--pass", required=True, metavar="PASSPHRASE")
    dec.add_argument("--out", default=None, metavar="FILE",
                     help="write the recovered bytes to FILE instead of stdout")
    dec.set_defaults(func=cmd_decode)
    return p


def main(argv=None) -> int:
    args = build_parser().parse_args(argv)
    return args.func(args)


if __name__ == "__main__":
    raise SystemExit(main())
```

## Limitations
- `robust` is the ink for lossy channels (X/social), but it is not infinite: max 48-byte plaintext, needs a reasonably large carrier (fails on tiny <~1000px sources or pathological pure-noise images at the harshest 680px downscale), adds a subtle ~38.8 dB luminance change, and needs the `reedsolo` package. It is overkill (and lower-capacity) for a file that will never be re-encoded - use `lsb` there.
- `lsb` and stegpy pixel data are brittle by design: any lossy re-encode (JPEG), resize, screenshot, or social-media upload wipes the LSBs. Ask for the original PNG - or, better, hide with `robust` up front.
- `trailing` bytes are plainly visible to anyone who looks past EOF (the data is encrypted, but its presence is detectable) and are stripped by tools that rewrite the file.
- `metadata` is the most fragile at rest: `exiftool -all=`, social-media re-encode pipelines, or a format conversion remove the field entirely.
- stegpy support is decode-only; new carriers should be made with the VEIL1 inks.
- Confidentiality is only as strong as the passphrase; scrypt N=2^14 is a sane interactive cost, not a high-security offline-attack setting.

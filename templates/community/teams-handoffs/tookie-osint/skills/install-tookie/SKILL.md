---
name: install-tookie
description: "Use when the user needs Tookie-OSINT installed or verified on the current machine before username scans."
---

# Install Tookie-OSINT

## Goal

Get a working `tookie-osint` (or `python3 brib.py`) CLI on the machine where scans will run.

## Steps

1. Check if already installed:
   - `command -v tookie-osint && tookie-osint -h`
   - Fallback: look for a local clone with `brib.py`
2. Prefer the lightest path that works:
   - **Kali**: `sudo apt install tookie-osint`
   - **Debian package**: download `.deb` from https://github.com/Alfredredbird/tookie-osint/releases and `sudo dpkg -i tookie-osint.deb`
   - **Source** (most platforms):
     ```bash
     git clone https://github.com/Alfredredbird/tookie-osint.git
     cd tookie-osint
     python3 -m venv venv
     source venv/bin/activate
     pip3 install -r requirements.txt
     python3 brib.py -h
     ```
3. Confirm Python 3.12+ when possible (upstream target).
4. Report the exact invoke command for later skills.
5. Do not redistribute upstream source; install from the official repo or package.

## Done when

- Help text prints without import errors
- You know the invoke command for later skills

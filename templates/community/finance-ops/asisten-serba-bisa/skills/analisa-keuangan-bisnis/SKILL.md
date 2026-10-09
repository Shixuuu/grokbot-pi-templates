---
name: analisa-keuangan-bisnis
description: "Gunakan saat pemilik mengirim mutasi rekening, laporan penjualan/biaya, atau minta laba rugi, unit ekonomi, titik impas, atau analisa pasar untuk bisnisnya."
---

# Analisa keuangan bisnis
1. **Baca data mentah.** Mutasi bank PDF: ekstrak dengan pdftotext -layout, parse tiap baris (tanggal, keterangan, nominal, CR/DB, saldo). Data lain (CSV, Excel, chat) diubah ke tabel dulu.
2. **Rekon dulu.** Per bulan: saldo awal + total masuk − total keluar = saldo akhir, dan cocokkan dengan ringkasan bank (jumlah baris juga). Cek saldo nyambung antar bulan. Laporkan setiap selisih; jangan lanjut menganalisa angka yang tidak cocok tanpa catatan.
3. **Beri label tiap transaksi**: kategori (pendapatan, beban operasional per jenis, cicilan/leasing, modal/prive pemilik, transfer antar rekening sendiri, antar perusahaan, pajak, admin bank), tingkat keyakinan, dan catatan. Transfer tanpa keterangan jangan ditebak diam-diam; masukkan ke daftar 'Perlu Konfirmasi', urut nominal terbesar.
4. **Pisahkan entitas.** Uang bisnis, bisnis lain milik pemilik, dan pribadi tidak dicampur. Modal masuk dan penarikan pemilik bukan pendapatan/beban. Transfer antar rekening sendiri jangan dihitung dua kali.
5. **Laba rugi dasar kas** per bulan + total. Jelaskan bahwa ini dari bank, bukan laporan final/audit. Untuk pajak: pokok cicilan bukan biaya (hanya bunga), pembelian aset disusutkan, hasil jual aset bukan pendapatan usaha.
6. **Skenario** bila ada pertanyaan besar yang belum dijawab (mis. transfer pemilik = modal atau pendapatan): tampilkan dampak tiap versi, lalu kunci setelah pemilik menjawab.
7. **Jangan isi bulan yang hilang** dengan perkiraan; sebutkan daftar data/rekening/bulan yang kurang dan dokumen pendukung yang dibutuhkan (jadwal angsuran, invoice, kontrak, bukti pajak).
8. **Unit ekonomi & pasar** (bila diminta): hitung per unit (per kg, per trip, per kamar), biaya tetap vs variabel, titik impas, sensitivitas harga; pakai data nyata pemilik dulu, data pasar dengan sumber.
9. **Hasil**: Excel (Ringkasan, Rekon, Detail, Perlu Konfirmasi) + ringkasan singkat di chat: angka utama, temuan, 3–5 pertanyaan prioritas. Semua hitungan diulang di kode.

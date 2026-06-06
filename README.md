# K6 Performance Testing

Project ini digunakan untuk melakukan performance testing API menggunakan Grafana K6.

## Prerequisites

Pastikan software berikut sudah terinstall:

* K6 Grafana
* Node.js

Verifikasi instalasi:

```bash
k6 version
node -v
npm -v
```

---

## Project Structure

```text
.
├── tests/
│   └── *.js
├── helpers/
│   └── *.js
├── results/
│   └── *.json
├── node_modules
├── package.json
└── README.md
```

### Folder Description

| Folder    | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| `tests`   | Menyimpan seluruh file test case K6                                  |
| `helpers` | Menyimpan seluruh helper function, request HTTP, dan reusable module |
| `results` | Menyimpan hasil execution test dan summary report                    |

---

## Installation

Clone repository:

```bash
git clone <repository-url>
cd <project-name>
```

Install dependency Node.js:

```bash
npm install
```

---

## Run Test

### Running K6 Test

```bash
k6 run tests/stages.js
```
```bash
k6 run tests/checks.js
```
```bash
k6 run tests/thresholds.js
```
```bash
k6 run tests/schenarios.js
```
---

## Results

Semua hasil execution test disimpan pada folder:

```text
results/
```

Contoh file hasil:

```text
results/stages.json
results/checks.json
results/thresholds.json
results/scenarios.json
```

---

## Best Practice

* Simpan seluruh script test pada folder `tests`.
* Simpan seluruh request API dan helper function pada folder `helpers`.
* Simpan seluruh hasil testing pada folder `results`.
* Pisahkan test berdasarkan fitur atau endpoint API.
* Jalankan satu per satu test pada folder `tests`.

---

## Task Description

### 1. Stages — simulasi traffic realistis
Buat load test dengan 3 stage: ramp-up, sustained load, ramp-down. Jangan flat load.

* Ramp up ke 20 VU dalam 30 detik
* Tahan 20 VU selama 1 menit
* Ramp down ke 0 dalam 20 detik

`stages` `VU ramp`

### 2. Checks — validasi response
Setiap request harus divalidasi, bukan hanya dijalankan. Test dianggap gagal kalau check rate di bawah 95%.

* Status code sesuai (200, 201, dll)
* Response body mengandung field yang diharapkan
* Response time di bawah 2000ms

`check()` `response validation`

### 3. Thresholds — batas kelulusan otomatis
Test harus otomatis FAIL jika performa tidak memenuhi standar berikut.

* p95 response time < 1500ms
* Error rate < 5%
* Check success rate > 95%

`thresholds` `p95` `http_req_failed`

### 4. Multiple scenarios — pisahkan test per endpoint

Buat minimal 2 scenario berbeda yang berjalan bersamaan: satu untuk GET, satu untuk POST.

* Scenario "get_post" → GET /api/users
* Scenario "create_post" → POST /api/users
* Setiap scenario punya executor dan load profile sendiri

`scenarios` `executors`

---

## Author

Fauzi Galih

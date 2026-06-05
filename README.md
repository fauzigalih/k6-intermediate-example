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
results/schenarios.json
```

---

## Best Practice

* Simpan seluruh script test pada folder `tests`.
* Simpan seluruh request API dan helper function pada folder `helpers`.
* Simpan seluruh hasil testing pada folder `results`.
* Pisahkan test berdasarkan fitur atau endpoint API.
* Jalankan satu per satu test pada folder `tests`.

---

## Author

Fauzi Galih

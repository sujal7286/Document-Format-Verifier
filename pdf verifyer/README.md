# PDF Analyzer API

A FastAPI-based PDF analyzer that extracts metadata, checks formatting, and verifies structural compliance for academic documents such as theses or reports. The API returns a **structured JSON report** including metadata, section presence, formatting checks, and suggestions.

---

## Table of Contents

- [Features](#features)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Setup](#setup)  
- [Build](#build)  
- [Run](#run)  
- [Testing](#testing)  
- [Project Structure](#project-structure)  
- [Sample JSON Output](#sample-json-output)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- Extracts metadata: Author, Roll Number, Supervisor, Organization, Date  
- Detects sections: Title, Table of Contents, List of Figures/Tables, Abbreviations, References  
- Checks formatting: Fonts, sizes, margins, line spacing, alignment  
- Verifies figure/table placement and references format  
- Returns results as **strongly-typed JSON** via Pydantic models  
- Provides suggestions for missing or non-compliant fields  

---

## Prerequisites

- Python 3.8+  
- pip package manager  

Dependencies (can also be installed via `requirements.txt`):

```text
fastapi==0.111.0
uvicorn[standard]==0.30.1
python-multipart==0.0.9
pydantic==2.7.4
pdfplumber==0.11.4
pdfminer.six==20231228
python-docx==1.1.2
typer==0.12.3
requests



# project1 — Document Formatting Verifier (Backend)


FastAPI backend that accepts a `.pdf` or `.docx` and returns a JSON report with:
- **Metadata extraction**: author (if available), designation (heuristic), creation date (if available), department (heuristic).
- **Formatting checks**: presence of *Title*, *Table of Contents*, *List of Figures*, *List of Tables*, *Abbreviations* section,
  and layout checks like font face/size, margins, line spacing, text alignment, figure/table captions, references section.

> The checker is intentionally rule‑based (no ML/LLMs), written in Python 3.10+.

## Run locally

```bash
python -m venv .venv && . .venv/bin/activate
pip install -r requirements.txt
uvicorn app:app --reload
```

Open http://127.0.0.1:8000/docs to try the API.

## Endpoints

- `POST /analyze` — multipart upload with a single field `file`. Returns a JSON report.
- `POST /analyze/raw` — same as above but returns the raw extracted text for debugging.
- `GET /health` — health check.

## Project layout

```text
project1/
├─ app.py                 # FastAPI app
├─ core/
│  ├─ extract.py          # Text + metadata extraction per file type
│  ├─ checks.py           # Rule-based formatting checks
│  ├─ docx_utils.py       # Helpers for .docx
│  └─ pdf_utils.py        # Helpers for .pdf
├─ models/schemas.py      # Pydantic models for responses
├─ requirements.txt
└─ README.md
```

## Notes & Limits

- Font/margin/line-spacing checks are **best-effort**. They are reliable for `.docx` (via `python-docx`),
  and *heuristic* for PDFs (since exact style metadata is often not preserved). The report flags `unknown`
  when data isn’t available.
- Add/adjust rules in `core/checks.py` to match your institution's guide exactly.



## after completing all the environment setup in terminal  
## python app.py (to run the program)  ##Enter full path of your PDF file: C:\Users\SUJAL\OneDrive\Desktop\REPORTTT\Online Food Ordering System final report 2.pdf(this is just example of uploading my pdf file )


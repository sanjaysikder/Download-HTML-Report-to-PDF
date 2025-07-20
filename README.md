# Oracle APEX HTML Table Export (Excel & PDF)

This project provides JavaScript code to export an HTML table from Oracle APEX to Excel with a dynamic filename (including date and time). Additionally, it includes setup instructions for exporting PDF and validating file upload formats.

---

## ✅ Features

- Export HTML table to `.xls` with timestamp in filename
- File download uses blob creation and triggers automatically
- Format: `report-YYYY-MM-DD_HH-MMAMPM.xls`
- Integration guide for Oracle APEX
- PDF download and file validation (via PL/SQL)

---

## 🔧 APEX Integration (Excel Export)

### 1. Upload JavaScript File to APEX

- Go to **Shared Components** > **Static Application Files**
- Upload `export-table.js`
- Save the file and copy its **Reference Path**, e.g.  
  `/apex/f?p=APP_ID:1:::NO::FILE:export-table.js`

### 2. Add to Page

In your APEX page:
- Go to **Page Designer**
- **Page Attributes** > **JavaScript File URLs** > Add:
  ```text
  #APP_IMAGES#export-table.js

# 📄 Generate PDF from HTML in Oracle APEX using html2pdf.js

This guide helps you integrate a **"Download PDF"** feature in your Oracle APEX application using `html2pdf.js`.

---

## 📁 1. Upload the JavaScript Library

1. Download the `html2pdf.bundle.min.js` library:
   👉 https://github.com/eKoopmans/html2pdf

2. In Oracle APEX:
   - Go to **Shared Components** → **Static Application Files**
   - Click **Upload File**
   - Upload the file `html2pdf.bundle.min.js`

---

## 🧠 2. Add JavaScript to Page-Level Global Variable Function

1. Go to the page where you want the export feature.
2. Under **Page Attributes**, scroll to **Function and Global Variable Declaration**.
3. Paste the following code:

```javascript
function generatePDF() {
    var element = document.getElementById('printID'); // Replace with your actual container ID

    var currentDate = new Date();

    var day = ('0' + currentDate.getDate()).slice(-2);
    var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    var year = currentDate.getFullYear();

    var hours = currentDate.getHours();
    var minutes = ('0' + currentDate.getMinutes()).slice(-2);
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = ('0' + hours).slice(-2);

    var filename = 'Invoice-' + day + '-' + month + '-' + year + '_' + hours + '-' + minutes + ampm + '.pdf';

    var opt = {
        margin: 0.5,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

----
## 4.**via Dynamic Action (Button)**

  ##Create a Button (e.g., Download PDF).
  ##Create a Dynamic Action:
  ##Event: Click
  ##Selection Type: Button (choose your button)

## **Action: Execute JavaScript Code**
generatePDF();

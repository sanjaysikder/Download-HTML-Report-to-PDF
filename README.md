# 📄 Generate PDF from HTML Report in Oracle APEX using JavaScript Library

This guide helps you integrate a **"Download PDF"** feature in your Oracle APEX application using html2pdf.js.

---

## 📁 1. Upload the JavaScript Library

1. Download the html2pdf.bundle.min.js library:
   👉 https://ekoopmans.github.io/html2pdf.js/

3. In Oracle APEX:
   - Go to **Shared Components** → **Static Application Files**
   - Click **Upload File**
   - Upload the file html2pdf.bundle.min.js
   - #APP_FILES#html2pdf.bundle.min.js

---
## 🧠 2. Add JavaScript to Page-Level Global Variable Function

 - Add This Static File to Page HTML Header.
```HTML Header
<script src="#APP_FILES#html2pdf.bundle.min.js"></script>
```

## 🧠 3. Add JavaScript to Page-Level Global Variable Function

1. Go to the page where you want the export feature.
2. Under **Page Attributes**, scroll to **Function and Global Variable Declaration**.
3. Paste the following code:

javascript

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



## 4. 📥 Download PDF via Dynamic Action (Button)

### ✅ Step-by-Step:

1. **Create a Button**
   - Label it (e.g., `Download PDF`)
   - Position it on the same APEX page as your report (HTML container with `printID`).

2. **Create a Dynamic Action**
   - **Event**: `Click`
   - **Selection Type**: `Button`
   - **Button**: Select the button you just created (e.g., `Download PDF`)

3. **Add a True Action**
   - **Action Type**: `Execute JavaScript Code`
   - **Code**:
     ```javascript
     generatePDF();
     ```

### 💡 Notes:
- Ensure the element you want to print has the ID `printID`.
- `html2pdf.js` must be loaded on the page (see section 2 of the documentation for CDN or static file setup).
- The `generatePDF` function must be declared globally (in Page > JavaScript > Function and Global Variable Declaration).
- Create a Dynamic Action for the button’s click event to call the JavaScript function.

---


# Thank You
## Sanjay Sikder

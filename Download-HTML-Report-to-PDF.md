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

---

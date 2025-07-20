function generatePDF() {
    var element = document.getElementById('printID'); // Replace with your actual container ID

    // Generate timestamp-based filename
    var currentDate = new Date();

    var day = ('0' + currentDate.getDate()).slice(-2);
    var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    var year = currentDate.getFullYear();

    var hours = currentDate.getHours();
    var minutes = ('0' + currentDate.getMinutes()).slice(-2);
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle hour '0' as '12'
    hours = ('0' + hours).slice(-2);

    // Human-readable display format (optional use)
    var displayDate = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ampm;

    // Safe filename format (slashes and colons replaced)
    var filename = 'Invoice-' + day + '-' + month + '-' + year + '_' + hours + '-' + minutes + ampm + '.pdf';

    // PDF generation options
    var opt = {
        margin: 0.5,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    // Generate and trigger download
    html2pdf().set(opt).from(element).save();
}

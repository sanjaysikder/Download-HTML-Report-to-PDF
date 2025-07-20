function calculateDOBFromAge(years, months, days) {
    const today = new Date();
    let dob = new Date(today);

    dob.setFullYear(dob.getFullYear() - parseInt(years || 0));
    dob.setMonth(dob.getMonth() - parseInt(months || 0));
    dob.setDate(dob.getDate() - parseInt(days || 0));

    const yyyy = dob.getFullYear();
    const mm = String(dob.getMonth() + 1).padStart(2, '0');
    const dd = String(dob.getDate()).padStart(2, '0');

    return `${yyyy}-${mm}-${dd}`;
}

// Auto-calculate DOB when year/month/day changes
apex.jQuery(function($) {
    function updateDOB() {
        const y = $v('P1_YEAR');
        const m = $v('P1_MONTH');
        const d = $v('P1_DAY');

        if (y !== '' || m !== '' || d !== '') {
            const dob = calculateDOBFromAge(y, m, d);
            $s('P1_DOB2', dob);
        }
    }

    // Attach change events to each age component
    $('#P1_YEAR, #P1_MONTH, #P1_DAY').on('change', updateDOB);
});

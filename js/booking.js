document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#bookingForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = escapeHTML(document.querySelector('#name').value.trim());
        const email = escapeHTML(document.querySelector('#email').value.trim());
        const tour = escapeHTML(document.querySelector('#tour').value);
        const message = escapeHTML(document.querySelector('#message').value.trim());
        
        let errors = [];

        if (name === '') {
            errors.push('Namn kan inte vara tomt.');
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            errors.push('Namn får endast innehålla bokstäver och mellanslag.');
        }

        if (email === '') {
            errors.push('E-postadress kan inte vara tom.');
        } else if (!validateEmail(email)) {
            errors.push('E-postadress är inte korrekt.');
        }

        if (message === '') {
            errors.push('Meddelande kan inte vara tomt.');
        } else if (/[\<\>\"\'\`]/.test(message)) {
            errors.push('Meddelandet innehåller otillåtna tecken.');
        }

        if (errors.length > 0) {
            alert('Fel:\n' + errors.join('\n'));
            return;
        }

        alert('Tack för din bokningsförfrågan, vi återkommer via mail inom 24 timmar.');

        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function escapeHTML(str) {
        return str.replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#39;');
    }
});

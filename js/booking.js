document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#bookingForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Förhindra att formuläret skickas

        // Hämta värden från formuläret
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const tour = document.querySelector('#tour').value;
        const message = document.querySelector('#message').value.trim();
        
        let errors = [];

        // Validering av namn
        if (name === '') {
            errors.push('Namn kan inte vara tomt.');
        }

        // Validering av e-post
        if (email === '') {
            errors.push('E-postadress kan inte vara tom.');
        } else if (!validateEmail(email)) {
            errors.push('E-postadress är inte korrekt.');
        }

        // Validering av meddelande
        if (message === '') {
            errors.push('Meddelande kan inte vara tomt.');
        }

        // Om det finns några fel, visa dem
        if (errors.length > 0) {
            alert('Fel:\n' + errors.join('\n'));
            return;
        }

        // Om inga fel, visa en alert med tackmeddelandet
        alert('Tack för din bokningsförfrågan, vi återkommer via mail inom 24 timmar.');

        // Återställ formuläret
        form.reset();
    });

    // Funktion för att validera e-postadress
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

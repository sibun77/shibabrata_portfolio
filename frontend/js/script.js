function handleForm(e) {
    e.preventDefault();
    console.log("Form submitted!");
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const userMessage = document.getElementById('message').value;

    console.log({ userName, userEmail, userMessage });

    const responseMessageDiv = document.getElementById('formResponseMessage');


    responseMessageDiv.innerHTML = '';
    responseMessageDiv.className = 'mt-3 text-center'; // Reset classes

    if (!userName || !userEmail || !userMessage) {
        responseMessageDiv.innerHTML = '<p class="text-danger">Please fill in all fields.</p>';
        return;
    }

    const backendurl="https://shibabrata-contactme-backend.onrender.com/api/contact"
    fetch(backendurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName, userEmail, userMessage })
    })
        .then(response => response.json())
        .then(data => {
            responseMessageDiv.innerHTML = `<p class="text-success">${data.message}</p>`;

            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleForm);
    }
});
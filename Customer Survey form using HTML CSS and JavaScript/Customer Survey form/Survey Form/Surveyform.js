const form = document.getElementById('survey-form');
const resetBtn = document.getElementById('reset-btn');
const submitBtn = document.getElementById('submit-btn');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const requiredFieldsError = document.getElementById('required-fields-error');
let popup;

// Filter out non-numeric characters from mobile number
const mobileNumberInput = document.getElementById('mobile-number');
mobileNumberInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
});


resetBtn.addEventListener('click', () => {
    form.reset();
    emailError.textContent = ''; // Clear the email error message
    requiredFieldsError.textContent = '';
});

submitBtn.addEventListener('click', () => {
    // Perform form validation here
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(input => input.value);
    const profession = document.getElementById('profession').value;
    const email = emailInput.value;
    const mobileNumber = document.getElementById('mobile-number').value;

    // Email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email address';
        return;
    }

    emailError.textContent = '';

    // Check if all required fields are filled
    const requiredFields = [
        firstName,
        lastName,
        dob,
        country,
        profession,
        email,
        mobileNumber,
    ];

    if (requiredFields.some(field => !field)) {
        requiredFieldsError.textContent = 'Please fill in all required fields.';
        return;
    }

    requiredFieldsError.textContent = '';


    // Display a popup with the survey responses
    const popupContent = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender.join(', ')}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
    `;

    const popup = window.open('', 'Survey Responses', 'width=400,height=400');
    popup.document.write(`<html><body>${popupContent}</body></html>`);
    popup.addEventListener('beforeunload', () => {
        form.reset();
    });
});
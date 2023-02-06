/**
 * EmailJS
 * Used code from 'Sending Emails Using EmailJS' tutorial by Code Institute
 */
const EMAILJS_KEY = "service_lo01bwk";
const EMAILJS_TEMPLATE = "game-suggestion-template";
let submitButton = document.querySelector('#submit-button');
let formSubmitted = document.querySelector('#form-submit');
let sendIdea = document.querySelector('#send-idea');

/**
 * Function uses information from index.html form to send email.
 * Specifies which EmailJS template to use.
 * Calls onSuccess() and onError() functions.
 */
function sendMail(contactForm) {   
    emailjs.send(EMAILJS_KEY, EMAILJS_TEMPLATE, {
        from_name: contactForm.name.value,
        message: contactForm.message.value,
        from_email: contactForm.emailaddress.value,
    }).then(onSuccess, onError);
    return false; // To block from loading a new page
}

/**
 * Function creates the HTML text 'Idea submitted!', if email is successfully sent.
 */
function onSuccess(response) {
    formSubmitted.textContent = "Idea submitted!";
    sendIdea.reset();
    submitButton.disabled = true;
}

/**
 * Function creates the HTML text 'Submission failed!', if email failed to send.
 */
function onError(error) {
    formSubmitted.textContent = "Submission failed!";
    sendIdea.reset();
    submitButton.disabled = true;
}

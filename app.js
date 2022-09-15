const notifyBtn = document.getElementById('notify-btn');
const emailField = document.getElementById('email-field');

const mainDiv = emailField.parentElement.parentElement;

let emptyEmailError = "Whoops! It looks like you forgot to add your email";
let wrongEmailError = "Please provide a valid email address";



function displayError(input) {
    if (mainDiv.querySelector('p')) {
        if (input.trim()) {
            mainDiv.querySelector('p').textContent = wrongEmailError;
            return;
        } else if (!input.trim()) {
            mainDiv.querySelector('p').textContent = emptyEmailError;
            return;
        } else
            return;

    }

    emailField.classList.add('error');
    const p = document.createElement('p');
    if (input.trim() === '')
        p.textContent = emptyEmailError;
    else
        p.textContent = wrongEmailError;

    p.classList.add("error-text");
    mainDiv.appendChild(p);

}

function removeError() {

    emailField.classList.remove('error');
    if (mainDiv.querySelector('p'))
        mainDiv.removeChild(mainDiv.querySelector('p'));
}

function validateEmail() {
    const inputEmail = emailField.value;
    regEx = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (!regEx.test(inputEmail)) {
        displayError(inputEmail);
    } else
        removeError();
}

function btnHoverHandler(event) {
    event.preventDefault();
    validateEmail();
}

notifyBtn.addEventListener('mouseover', btnHoverHandler);
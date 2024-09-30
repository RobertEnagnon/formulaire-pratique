const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");


const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");



function validateEmail(emailValue) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailValue);
}

function validateForm(e) {
    e.preventDefault()

    if (username.value.length < 3) {
        usernameError.textContent = "Le nom d'utilisateur doit contenir au moins 3 cractères";
        usernameError.style.display = "block";
    } else {
        usernameError.style.display = "none";
    }

    // Validation de l'email
    if (!validateEmail(email.value)) {
        emailError.textContent = "L'adresse e-mail est invalide";
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }

    if (password.value.length < 8 || !/[A-Z]/.test(password.value) || !/[a-z]/.test(password.value)
        || !/[0-9]/.test(password.value)) {
        passwordError.textContent = "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre";
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'block';
    }

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Les mots de passe ne correspondent pas";
        confirmPasswordError.style.display = 'block';
    } else {
        confirmPasswordError.style.display = 'none';
    }

    // si tout es valide, soumettre le formulaire
    if (usernameError.style.display === 'none' && emailError.style.display === 'none' && passwordError.style.display === 'none'
        && confirmPasswordError.style.display === 'none') {
            alert('Inscription réussie !');
        form.submit();
    }


}

// Ecouteur d'événement pour la soumission pour la soummission du formulaire
form.addEventListener('submit', validateForm);
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let email = document.querySelector('#registerForm input[type="email"]').value;
    let password = document.querySelector('#registerForm input[type="password"]').value;
    let name = document.querySelector('#registerForm input[type="text"]').value;

    if (!validateEmail(email)) {
        alert('Por favor ingresa un correo electrónico válido.');
        return;
    }
    
    if (!validatePassword(password)) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return;
    }

    if (!name.trim()) {
        alert('Por favor ingresa tu nombre completo.');
        return;
    }

    alert('Registro completado con éxito!');
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}
s
function showLoginForm() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
}

function showRegisterForm() {
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
}

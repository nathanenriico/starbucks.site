const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true; // Variable to track overall form validation state
    if (!NameValidate()) valid = false;
    if (!EmailValidate()) valid = false;
    if (!mainPasswordValidate()) valid = false;
    if (!comparePassword()) valid = false;

    if (valid) {
        alert("Inscrição bem-sucedida!");
        // Aqui você pode adicionar qualquer outra lógica, como redirecionamento ou limpeza do formulário
    }
})

function setError(index) {
    campos[index].style.border = '2px solid #ff0000';
    spans[index].style.display = 'block';
}

function RemoveError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function NameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
        return false;
    } else {
        RemoveError(0);
        return true;
    }
}

function EmailValidate() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
        return false;
    } else {
        RemoveError(1);
        return true;
    }
}

function mainPasswordValidate() {
    if (campos[2].value.length < 8) {
        setError(2);
        return false;
    } else {
        RemoveError(2);
        return true;
    }
}

function comparePassword() {
    if (campos[2].value == campos[3].value && campos[3].value.length >= 8) {
        RemoveError(3);
        return true;
    } else {
        setError(3);
        return false;
    }
}

function logar() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email == campos[1].value && senha == campos[2].value ){
        alert("Sucesso");
        location.href = "home.html";
    }
    else
    {
        alert("Usuario incorreto")
    }
}

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value; 
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(usernameValue === ""){
        setErrorFor(username, "O nome do usuário é obrigatório.");
    } else{
        setSuccessFor(username);
    }

    if(emailValue === ""){
        setErrorFor(email, "A senha é obrigatória!");
    } else if(!checkEmail(emailValue)){
        setErrorFor(email, "Por favor, digirtar um email válido.");
    } else{
        setSuccessFor(email);
    }

    if(passwordValue === ""){
        setErrorFor(password, "Senha é obrigatória.");
    } else if(passwordValue.length < 6){
        setErrorFor(password, "Senha precisa ter o mínimo de 6 caracteres.");
    } else{
        setSuccessFor(password);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "Obrigatório repetir a senha.");
      } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "Senhas diferentes.");
      } else {
        setSuccessFor(passwordConfirmation);
      }
    
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
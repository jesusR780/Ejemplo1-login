let emailValido = "root@cbtis258.edu.mx";
let passValido = "Admin123"

const chequeLogin = (Event) => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("LoginMensaje").value;

    if(email === emailValido && password === passValido){
        mensaje.textContent = "Inicio de sesion correcto";
        mensaje.style.color = "green";

        setInterval(() => {
            window.location.href = "dashboard.html";

        }, 1000);
    }
    else {
        mensaje.textContent = "Email o contraseña incorrecta";
        mensaje.style.color = "red";
    }
    
}
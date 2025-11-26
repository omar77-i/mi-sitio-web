//id del formulario de registro
const registro = document.getElementById("form");
//Evento cuando se envia el formulario
registro.addEventListener("submit", function(event){
    event.preventDefault();
    //Validacion
    if(!registro.checkValidity()){
        event.stopPropagation();
        registro.classList.add("was-validated");//Para mostrar estilos de validacion
        return;//Sale de la funcion
    }
    //Optenemos los valores ingresados
    const password = document.getElementById("password").value;
    const passwordV = document.getElementById("passwordV").value;
    const terminos = document.getElementById("validaciones").checked;
    const error = document.getElementById("mensaje");


    //Verificar si las contraseñas son iguales
    if(password !== passwordV){
        error.textContent = "La contraseña no coinciden";//Mostrar menseja de error
        return;
    }
    //Verificar si se aceptan los terminos
    if(!terminos){
        error.textContent = "Debe aceptar los terminos";
        return;
    }
    //Si todo esta bien lo manda a incio
     window.location.href= "inicio.html";//pagina de incio despues de que valide
    
});
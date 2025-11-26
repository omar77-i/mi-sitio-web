//id del formulario de inicio de sesion
const login = document.getElementById("login");
//id dek boton registro que llevara a la pagina de registro 
const botonregistro = document.getElementById("registro"); 


login.addEventListener("submit",function(event){
    event.preventDefault();//Evita que el formulario envie y recargue la pagina
    //Verificacion si el formulario es valido
    if(!login.checkValidity()){
        event.stopPropagation();//Frena la propagacion del un evento  ya paso por lo demas
        login.classList.add("was-validated");//Para hacer validaciones clase
        return;
    }
    //Datos para iniciar sesion
    const correoV = "tonito@gmail.com";
    const contraseñaV = "1234";
    //Los datos ingresados por el usuario
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("password").value;
    const error = document.getElementById("mensaje");
    //Comprobar si los datos coinciden
    if(correo === correoV && contraseña === contraseñaV ){
        //Si coinciden lo manda a la pagina de inicio del sitio
        window.location.href= "registro.html";//pagina de incio despues de que valide
    } else{
        //Mostrara un mensaje de error
        error.textContent = "Correo o contraseña incorrectos";
    }

});
//Evento para el boton de registro
botonregistro.addEventListener("click", function(){
    //Si de click lo mandara a la pagina de registro
     window.location.href= "registro.html";
});


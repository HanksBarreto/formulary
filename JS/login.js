function Login(usuario, contraseña) {
    this.usuario = usuario;
    this.contraseña = contraseña;
}



var usu1 = new Login("Denis" , "barreto123");
var usu2 = new Login("hanks","12345678");
  usu1.document.getElementById(`usuario`).value;
   usu1.document.getElementById(`password`).value;
function entra() {
    

    if (usu1 == true) {
        alert("correcto");

    } else {
        alert("vuelva ingresar los datos");
    }
}





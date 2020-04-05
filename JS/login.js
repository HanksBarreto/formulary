
class Login {
    construtor(user, password){
        this.user = user;
        this.password = password;
    }
    
}


class Gui{

    entrar( user, password){
       
      //  document.getElementById('login').addEventListener('click', function () {
          
           if (user1 === user && user1=== password) {
            /*    alert(' Bienvenido')
             const element = document.createElement('div');
             element.innerHTML = `
                        <p class = 'text-center bg-success text-light'>Bienvenido:${user}</p>            
             `;*/
             console.log('Correcto');
             

           } else {
              /* Swal.fire({
                    title:'INCORRECTO'
               });*/
               console.log('Incorreto');
               
            }    
           //});
    }
}

document.getElementById('btn').addEventListener('submit', function (e) {
    const user =  document.getElementById('user').value;
    const password = document.getElementById('password').value;
        const user1 = new Login('denis', 'denis');
         const ui = new Gui();
         ui.entrar(user, password)
         console.log(user1.user);
            
         
           
             e.preventDefault();
});







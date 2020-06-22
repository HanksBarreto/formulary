

class clienteRadius{
    constructor(codigo, nombre, direccion, correo, marca, megas, facturaccion,precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.direccion = direccion;
        this.correo = correo;
        this.marca = marca;
        this.megas = megas;
        this.facturaccion = facturaccion;
        this.precio = precio;
        
      
    }
}

class GUI{

    addCliente(cliente){
        const listClient = document.getElementById('list-client');
        const element = document.createElement('tr');
        element.innerHTML = `
                 <td scope="row" class="text-danger">${cliente.codigo}</td>   
                 <td scope="row" class="td">${cliente.nombre}</td>  
                 <td scope="row" class="td">${cliente.direccion}</td>  
                 <td scope="row" class="td">${cliente.correo}  </td> 
                 <td scope="row" class="td">${cliente.marca}</td>
                 <td scope="row" class="td ">${cliente.megas} </td>  
                 <td scope="row" class="td">${cliente.facturaccion}</td> 
                 <td scope="row" class="td precio text-info">${cliente.precio} </td>   
                  
               <td> <a href="#" class="btn btn-danger text-light" name="delete">Eliminar</a></td>
        `;
        listClient.appendChild(element);
   
    }
    resetForm(){
        document.getElementById('form-cliente').reset();

    }
    deleteCliente(element){
        if (element.name === 'delete') {
          element.parentElement.parentElement.remove()
            
        }
        
            
        }
        showMessage(message, cssClass){
            const div = document.createElement('div');
            div.className = `alert alert -${cssClass}`;
            div.appendChild (document.createTextNode(message));
            // show msg

        }

}
    
    

/*----- Caturando todos los elementos ---- */
document.getElementById('form-cliente')
.addEventListener('submit', function (e) {
const codigo = document.getElementById('codigo').value;
const nombre = document.getElementById('nombre').value;
const direccion = document.getElementById('direccion').value;
const correo = document.getElementById('correo').value;
const marca = document.getElementById('marca').value;
const megas = document.getElementById('megas').value;
const facturacion = document.getElementById('facturacion').value;
const precio = document.getElementById('precio').value;
const cliente = new clienteRadius(codigo, nombre, direccion, correo,  marca, megas, facturacion, precio);
    const ui = new GUI();
    //instanciando Metodos
    ui.addCliente(cliente);
    ui.resetForm();
  //  ui.showMessage('alemento creado satifatoriamente','success');
    e.preventDefault();
})

document.getElementById('list-client')
.addEventListener('click', function (e) {
    const ui = new GUI();
    ui.deleteCliente(e.target);
   
    
})






const contrasenasLista = JSON.parse(localStorage.getItem("contrasenasLista")) || [];

const signUp = document.getElementById(`signUp`) ;



//console.log(signUp)
// console.log(email)
// console.log(contra)



signUp.addEventListener(`submit`,(evento)=>{
    evento.preventDefault(); //no se recarga

    const email = document.getElementById(`mail`).value;
    const contra = document.getElementById(`contrasena`).value;
    
    contrasenasLista.push({mail:email, contra:contra});
    localStorage.setItem("contrasenasLista",JSON.stringify(contrasenasLista));
    
    alert("Usuario guardado correctamente ");
        
        
    document.getElementById(`mail`).value="";
    document.getElementById(`contrasena`).value="";
    ///quiero que al terminar de cargar me mande al html de ingresar(logIn)

    

})

///bueno pude hacer algo , disculpas la demora ahora proximo paso haxer el login , me gustaria que cuando uno ingrese se active el carrito, me podrias tirar un centro con eso=?


// otra consulta esto :  
                        //const contrasenasLista = JSON.parse(localStorage.getItem("contrasenasLista")) || [];
                        //lo tendria que poner tambien en el login? o se puede poner en un .js principal y vinvular los .js de de signup y login al principal y trabajarlos asi, en scss se puede hacer algo por el estilo po reso pregunto.
                        //Gracias




        
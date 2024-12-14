const contrasenasLista = JSON.parse(localStorage.getItem("contrasenasLista")) || [];

const logIn = document.getElementById("login");


logIn.addEventListener("submit",(evento)=>{
    evento.preventDefault();

    const email = document.getElementById("mail").value;
    const contra = document.getElementById("contrasena").value;
    
    
    
    const usuarioIngresado = contrasenasLista.find((e)=>e.mail===email && e.contra === contra);

     if (usuarioIngresado) {
         alert("BIENVENIDO");
     } else {
         alert("Mail o ontraesña invalido");
     }

})





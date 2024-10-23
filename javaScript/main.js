let usuarios = ["Ruben",  "Marcos", "Carlos"];

function inicio() {
    let usuario = prompt(" usuario:");

    if (usuarios.includes(usuario)) {
        alert(`Bienvenido, ${usuario}`);
    } else {
        let crearUsuario = prompt("Ingrese nuevo usuario");
        
        if (crearUsuario) {
            usuarios.push(crearUsuario);
            if (usuarios.includes(crearUsuario)) {
                alert(`Bienvenido, ${crearUsuario}`);}
                console.log(usuarios);
        } 
    }
}


inicio();




//NOTA: ESta re verde todo, la proxima entrega va a a estar mas completa y entendible de que va el proyecto, pero creo q cumple con lo minimo, gracias.
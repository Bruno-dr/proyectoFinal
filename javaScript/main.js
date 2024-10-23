let usuarios = ["Ruben",  "Marcos", "Carlos"];

function inicio() {
    let usuario = prompt("Ingrese su nombre de usuario:");

    if (usuarios.includes(usuario)) {
        alert(`Bienvenido, ${usuario}!`);
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




// function ingreso() {
//     let nombre = prompt("ingrese usuario:");
//     let contraseña = prompt("ingrese usuario:");

//     let edad = prompt("ingrese su edad:");

//     if (edad >= 18) {
//         alert(`Bienvenido, ${nombre}!`);
//         carritoCompras();
//     } else {
//         alert("No puedes hacear compras.");
//     }
// }

// function carritoCompras(){
//     alert("la idea es que se pueda usar la funcion del carrito")
//     console.log( "esta re verde todo , el proximo va  aestar mas completo")
    
// }

// ingreso();
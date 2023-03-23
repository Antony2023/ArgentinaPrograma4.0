function gotoLink(link){
    console.log(link,value);
    window.open(link.value);
}

/*Contacto*/

document.getElementById('enviar').addEventListener('click', function(){
    let nombres=document.getElementById('nombres').value;
    console.log('Nombre: '+nombres);

    let apellidos=document.getElementById('apellidos').value;
    console.log('Apellido: '+apellidos);

    let correo=document.getElementById('correo').value;
    console.log('Correo: '+correo);

    let mensaje=document.getElementById('mensaje').value;
    console.log('Mensaje: '+mensaje);
    formulario.reset();

    let resultado=enviar(nombres, apellidos, correo, mensaje);

    document.getElementById('resultado').innerHTML=resultado;
})
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    if(localStorage.getItem(`perfil`)!=null){
        let usuario={};
        usuario=JSON.parse(localStorage.getItem(`perfil`));
        document.getElementById("nombre").value=usuario.nombre;
        document.getElementById("email").value=usuario.email;
        document.getElementById("edad").value=usuario.edad;
        document.getElementById("telefono").value=usuario.telefono; 
    }
});
function guardar(){
    let usuario={};
    usuario.nombre=document.getElementById("nombre").value;
    usuario.email=document.getElementById("email").value;
    usuario.edad=document.getElementById("edad").value;
    usuario.telefono=document.getElementById("telefono").value;
    usuario=JSON.stringify(usuario);
    localStorage.setItem(`perfil`,usuario);
}
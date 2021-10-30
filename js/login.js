//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});
document.getElementById("submitBtn").addEventListener("click",function(){
    let a=document.getElementById("usuario");
    let b=document.getElementById("contraseña");
    if(a.value!="" && b.value!=""){
        localStorage.setItem(`user`,a.value);
        window.location = `inicio.html`;
    }else{
        alert("Debe completar los campos");
    }
 });
 
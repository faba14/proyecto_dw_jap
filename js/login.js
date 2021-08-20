//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});
document.getElementById("submitBtn").addEventListener("click",function(){
    let a=document.getElementById("email");
    let b=document.getElementById("contraseña");
    if(a.value!="" && b.value!=""){
     window.location = `index.html`;
    }else{
        alert("Debe completar los campos");
    }
 });
 
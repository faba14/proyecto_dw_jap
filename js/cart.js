//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const CART_2_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json";
var cart=[];
var subtotales=[];

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_2_INFO_URL).then(function(resultObj){
        if(resultObj.status === "ok"){
            cart=resultObj.data.articles;
            showCart();
            subtotal();
            total();
        }
    })
})

function showCart(){
    let cont="";
    let art={};
    for(let i=0;i<cart.length;i++){
        art=cart[i];
        cont+=`
        <div class="border rounded" id="item`+i+`">
            <div class="row m-2 " >
                <div class="col-lg-4">
                    <img src=" ` +art.src+ ` " class="img-thumbnail" >
                </div>
                <div class="col-lg-3">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ art.name +`</h4>
                            <small class="text-muted"><i class="fas fa-trash" onclick="killDiv('item`+i+`',`+i+`) "></i></small>
                        </div>
                        <input class="input" id="cantItem`+i+`" style="width:60px" type="number" onchange="subtotalArt(`+i+`)" min="0" value="`+art.count+`"></input>
                        <div>Precio unitario:  <p id="precioUnit`+i+`">`+precioUnit(i)+`</p></div>
                        <div>Subtotal artículo:$ <p id="subTotArt`+i+`"></p></div>
                    </div>
            </div>
            </div>
            <br>
        `
    };
    cont+=`<div>Subtotal:<p id="subtotal"></p>`;
    document.getElementById("cart-container").innerHTML=cont;
    subtotalArt(0);
    subtotalArt(1);
}

function subtotal(){
    let subtotal;
    subtotal=subtotales[0] + subtotales[1];
    document.getElementById("subtotal").innerHTML=subtotal;
}

function precioUnit(id){
    if(cart[id].currency==="UYU"){
        return cart[id].unitCost;
    }else{
        return parseInt(cart[id].unitCost)*40;
    }
}

function killDiv(n,b){
    document.getElementById(n).remove();
    subtotales[b]=0;
    subtotal();
    total();
}

function subtotalArt(id){
    let result;
    result=parseInt(document.getElementById("cantItem"+id).value)*precioUnit(id);
    subtotales[id]=result;
    document.getElementById("subTotArt"+id).innerHTML=result;
    subtotal();
    total();
}

function total(){
    let porcentaje,total,subtotal;
    let envio=document.getElementsByName("tipo-de-envio");
    for(let i=0;i<envio.length;i++){
        if(envio[i].checked){
            porcentaje=parseInt(envio[i].value)/100;
        }
    }
    subtotal=parseInt(document.getElementById("subtotal").innerText);
    total= subtotal + (subtotal*porcentaje);
    document.getElementById("total").innerHTML="UYU$ "+ total;
}

function compra(){
    alert("Compra realizada con exito");
    window.location=`products.html`;
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var product={};
var comentsArray=[];

document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
            if (resultObj.status === "ok"){
                product=resultObj.data;
                let productCont="";
    productCont+= `
    <div class="row">
                    <div class="col-3">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src= `+product.images[0]+ ` alt="First slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src= `+product.images[1]+ ` alt="Second slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src= `+product.images[2] +` alt="Third slide">
                                </div>    
                                <div class="carousel-item">
                                    <img class="d-block w-100" src= `+product.images[3]+ ` alt="Third slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src= `+product.images[4]+ ` alt="Third slide">
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>  
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ product.name +`</h4>
                            <small class="text-muted">` + product.soldCount + ` vendidos</small>
                            <small class="text-muted">Precio: ` + product.cost + product.currency+ ` </small>
                        </div>
                        <p class="mb-1">` + product.description + `</p>
                    </div>
                </div>
            </a>
            
    `;
    document.getElementById("prod-container").innerHTML = productCont;
            }
        })
 .then(getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
            if (resultObj.status === "ok"){
               comentsArray=resultObj.data;
               showComents();
            }
    })
        );

});

function estrellas(n){
    let stars="";
    for(let i=0;i<5;i++){
        if(n>i){
            stars+=`<span class="fa fa-star checked"></span>`
        }else{
            stars+=`<span class="fa fa-star"></span>`
        }
     }
     return stars;
}

function showComents(){
    let comentsCont="";
    for(let i=0;i<comentsArray.length;i++){
        let coment=comentsArray[i];
        comentsCont+=`
        <hr>
                 <div id="coment`+i+`">
                    <p>Puntuación:`+estrellas(coment.score)+` </p>
                    <p>`+coment.description+`</p>
                    <h6>`+coment.user+` , `+coment.dateTime+` </h6>
                </div>
                <hr>
        `
    }
    document.getElementById("coments-container").innerHTML=comentsCont;
}

function addComent(){
    let newComent={};
    newComent.description=document.getElementById("coment.description").value;
    newComent.score=parseInt(document.getElementById("coment.score").value);
    newComent.user=localStorage.getItem(`user`);
    newComent.dateTime= ` ${new Date().getFullYear()}-${(new Date().getMonth() +1)}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} `
    comentsArray.push(newComent);
    showComents();
    document.getElementById("coment.description").value="";
    document.getElementById("coment.score").value="";
    
}
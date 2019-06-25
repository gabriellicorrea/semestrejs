function teste(){
    var texto  = document.querySelector("#t1");
    if(texto.value==""){
        alert("vazio");
        texto.style.backgroundColor="pink";
    }else{
        alert("preenchido")
    }
}
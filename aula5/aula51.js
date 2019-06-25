function teste(){
    var lis = document.querySelectorAll("div, span");
    for(var i=0 ; i < lis.length; i++){
        lis[i].style.display = "none";
    }
}

function validar(){
    var obj = document.querySelector("#n1");
    if(obj.value > 0)
        obj.style.backgroundColor = "green";
    else 
        obj.style.backgroundColor = "red";
}

function pintar(obj){
    obj.style.backgroundColor = "yellow";
}

function teste2(){
    var obj = document.getElementsByClassName("classe");
    var aux = ""
    for(var v in obj){
        aux = aux + v + " -> " + obj[v] + "<br>";
    }
    document.write(aux);
}
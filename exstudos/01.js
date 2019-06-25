function verPropriedades(obj){
    var aux = "";
    for(var prop in obj){
        aux = aux + prop + " -> " + obj[prop] + "<br>";
    }
    document.write(aux);
}
function ex1(){
    var li  = document.querySelector(".class1");
    li.style.display =  "none";
}
function sumir(obj){
    obj.style.display = "none";
}

function ex2(){
    var p = document.querySelector("p");
    var li = document.querySelector("li");
    
    p.style.backgroundColor = "yellow";
    li.style.backgroundColor = "yellow"
    
}
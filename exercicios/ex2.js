function ex2(){
    var p = prompt("Digite peso: ");
    var a = prompt("Digite altura: ");
    var imc = p/(a*a);
    if(imc < 18){
        alert("Abaixo do peso");
    }else if (imc < 25){
        alert("Saudavel");
    }else{
        alert("Acima do peso");
    }
}

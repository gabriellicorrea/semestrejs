                                                                                                                          //01012
function teste(){
    //0 e 1
    var n1 = prompt("Digite um número: ");
    var n2 = prompt("Digite outro número: ");
    maior(n1,n2);
}


//11322
function maior(n1,n2){
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    if(n1 > n2){
        alert("O maior eh " + n1);
    }else{
        alert("O maior eh " + n2);
    }
}


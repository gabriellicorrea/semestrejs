
function ehPar(n){
    return n % 2 == 0
}

function ex1(){
    var n = parseInt(prompt("Digite um n: "));
    if(ehPar(n)){
        alert("alert eh par");
    }else{
        alert("alert eh ímpar");
    }
}

/*1) Verifique se um número vindo
da entrada de dados é par ou
ímpar.
*/
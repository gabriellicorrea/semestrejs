function validarEmail(str){
    var padrao = /[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,}(\.[a-z0-9]{2,})?/;
    return padrao.test(str);
}

function eliminarVogais(str){
    var aux = "";
    var padrao = /[AEIOUaeiou]/
    for(var i=0; i < str.length; i++){
        if(!(padrao.test(str[i]))){
            aux = aux + str[i];
        }
    }
    return aux;
}

function somarVetor(v){
    var soma = 0;
    for(var i=0; i < v.length; i++){
        soma = soma + v[i];
    }
    return soma
}

function teste(){
    document.write(validarEmail(".@fateccom.jp"));
}

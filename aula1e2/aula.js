function percorrer(obj){
    var aux ="";
    for (var k in obj){
        aux = aux + k + "->" + obj[k] + "<br>";
    }
    document.write(aux);
}
//percorrer estrutura
function testeObj(){
    percorrer({"nome":"TESTE","idade":19, "salario": 2000})
}
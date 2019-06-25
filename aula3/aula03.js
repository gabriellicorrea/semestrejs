function quadroGeral(vetObj){
    var aux = "";
    for(var i=0; i < vetObj.length; i++){
        var media = 0.5*(vetObj[i].p1 + vetObj[i].p2);
            if(media >= 6 ){
                aux = aux + vetObj[i].nome + " APROVADO! <br>";
            }else{
                aux = aux + vetObj[i].nome + "SUB! <br>";
            }
    }
    document.write(aux);
}

function teste(){
        quadroGeral([{"nome":"Aluno1","p1":2,"p2":7},
                    {"nome":"Aluno2","p1":10,"p2":10},
                    {"nome":"Aluno3","p1":4,"p2":4},
                    {"nome":"Aluno4","p1":9,"p2":9}])
}

   
function percorrer(obj){
    var aux ="";
    for (var k in obj){
        aux = aux + k + "->" + obj[k] + "<br>";
    }
    document.write(aux);
}
//percorrer estrutura
function testeObj(){
    //percorrer({"nome":"TESTE","idade":19, "salario": 2000})
    percorrer(document);
}

alert("hello");
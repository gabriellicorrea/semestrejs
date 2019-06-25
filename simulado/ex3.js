function palavras(){
   var vetor= ["amor", "sentimento", "carinho", "paz"];
   
   for(var i=0; i<vetor.length; i++){
       var li = li + i;
       
       
   }

    document.write(li)
    
}
    

var ex3 = function(palavras){
    var ul = document.createElement("ul");
    for(var p in palavras){
        var li = document.createElement("li");
        li.innerHTML = p;
        if(p.length % 2 ==0 ){
            palavras.style.backgroundColor = "green";
        } else {
            palavras.style.backgroundColor = "yellow";
        }
        ul.appendChild(li);
     }
    
}
/*Faca uma funcao que receba um vetor de palavras e monte uma pagina que contenha uma ul e varias li’s contendo
cada palavra desse vetor. As palavras de tamanho par devem aparecer com cor de fundo verde e as de tamanho
ımpar amarelo.*/
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
    
    
    
    
    Considere o formul ́ario:
<form name=”form” > Nome: <input type=”number” name=”numero” >< br > </form><button onclick=”rolar()”>
Implemente a fun ̧c ̃ao rolar() que cria uma lista n ̃ao ordenada (ul-li) contendo n ́umeros de 0 a n-1, onde n vem
do formul ́ario em quest ̃ao. Os n ́umeros pares deve ter cor de fonte azul e os  ́ımpares vermelho. Para montar a
lista, use apenas fun ̧c ̃oes de inser ̧c ̃ao do DOM (se sua lista for montada via string a quest ̃ao valer ́a
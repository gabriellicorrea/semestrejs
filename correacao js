// https://developer.mozilla.org

var f = function(e){
    return (e+1);
}
/*
[]          <- map f [1,2,3,4,5]
[2]         <- map f   [2,3,4,5]
[2,3]       <- map f     [3,4,5]    
[2,3,4]     <- map f       [4,5]
[2,3,4,5]   <- map f         [5]
[2,3,4,5,6] <- map f          []
*/

[1,2,3,4,5].map(f);

//Ex1. Deixe invisível todas as tags [que] contenham a classe
//`classe3` e todos os parágrafos [tag `p`].

document.querySelectorAll('p, .classe3').forEach(function(e) {
    e.style.display="none";
});

//Ex2. Ao digitar uma string em uma caixa de texto `type=number`
//de id `t1`, esta [o texto] deve aparecer em uma `div` criada via 
//javascript, em ordem reversa. Suponha que o evento `oninput` já
//esteja feito no HTML, para facilitar.

// <input oninput="ex2">

var ex2 = function(e) {
    var input = document.getElementById("t1");
              //e.currentTarget;
              //this.currentTarget;
    var div = document.createElement("div");
    // "ola mundo"
    div.innerHTML = Array.from(input.value).reverse();
    // ['o','l','a',' '...,'d','o']
    document.body.appendChild(div);
}

//Ex3. Faça uma função que receba um vetor de palavras e monte uma
//página que contenha uma `ul` e várias `li`s contendo cada palavra
//desse vetor. As palavras de tamanho par devem aparecer com cor
//de fundo verde e as de tamanho ímpar, amarelo.

var ex3 = function(palavras) {
    var ul = document.createElement("ul");
    //["ola","mundo"]
    for (p in palavras) {
        var li = document.createElement("li");
        li.innerHTML = p;
        if (p.length % 2 == 0) {
            li.style.backgroundColor = "green";
        } else {
            li.style.backgroundColor = "yellow";
        }
        ul.appendChild(li);
    }
    return ul;
}

//Ex4. Considere a seguinte página:
/*
<html><head><script>
    function swap(v,i,j) {
        var aux = v[i];
        v[i] = v[j];
        v[j] = aux;
    }
    function exibir(v) {
        for (i in v) {
            document.write(v[i] + "<br>");
        }
    }
    function doSomething(v) {
        for (var i = 0; i < v.length; i++) {
            for (var j = i; j < v.length; j++) {
                if (v[j] <= v[i]) {
                    swap(v, i, j);
                }
            }
        }
        exibir(v);
    }
</script></head><body>
<script>doSomething([2,-3,6,-9,4]);</script>
</body></html>
*/
//a. Quais serão as saídas no HTML?
/*
-9
-3
2
4
6
*/
//b. O que faz o script? Descreva sucintamente.
// Ordena a lista em ordem crescente e a escreve na página.
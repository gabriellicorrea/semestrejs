function teste(){
    var Gato = function(nome,raca){
        this.nome = nome;
        this.raca = raca;
        this.miar = function(){
            alert(this.nome + " : MIAU");
        }
    };
    var g = new Gato("Loki","Persa");
    var branco = new Gato("Branco","SRD");
    branco.miar();
    g.miar();
    Gato.prototype.mostrarRaca = function(){
        alert(this.raca);  
    };
    branco.mostrarRaca();
    g.mostrarRaca();
}

function criarEvento(){
    document.querySelector("button").addEventListener("click",function(){
        teste();
    })
}

window.onload = criarEvento;
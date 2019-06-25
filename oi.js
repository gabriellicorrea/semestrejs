function produto(nome, tipo, preco, descricao){
    this.nome = nome;
    this.tipo = tipo;
    this.preco = preco;
    this.desc = descricao;

}

const myproduct = new produto("Biquini", "rendinha", 140, "ideal para praia")

const body = document.querySelector('body');
const list1 = document.querySelector('ul');
const item = document.createElement('li')
const escreverinnerHTML = "Meu produto: " + " " + myproduct.nome;
const nomeProduto = myproduct.nome;
body.appendChild(list1);
body.appendChild(item);
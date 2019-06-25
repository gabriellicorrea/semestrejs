
    

    

function teste() {
    
     var div = document.createElement('div');
    div.id = 'block';
    document.getElementsByTagName('body')[0].appendChild(div);
    div.style.backgroundColor ="pink";
    div.style.width = "100px";
    div.style.height = "100px";
    div = document.querySelector("#t1");
    
    
    var nome =  document.querySelector("#t1").value;
    
   
    var invert = "";
    
    for(var i = nome.length -1 ; i >= 0; i--){
    invert = invert + nome[i];
    }
    
 
  
  
    document.getElementById('block').innerHTML = invert;
 
  
  
}
   


/*Ao digitar uma string em uma caixa de texto type=number de id t1, esta deve
aparecer, em uma div criada via
javascript, em ordem reversa. Suponha que o evento oninput j´a esteja feito 
no html para facilitar.*/
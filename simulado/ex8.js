function teste(){
  
  //TROCAMOS OS INDICES PELOS ELEMENTOS
  
  var aux = Array.from(document.querySelectorAll("li"));
  
  aux.filter(function(x){
      
  return x.innerHTML != "TRES";
   
 }).forEach(function(elem){
       
 elem.style.backgroundColor = "yellow";   
  
  });

}


function criarEvento(){
    document.querySelector("button")
        .addEventListener("click",teste);
    document.querySelectorAll("li").forEach(function(li){
        li.addEventListener("click",function(evt){
            alert(evt.target.innerHTML);
        })
        
     
        
    });
    /*ex 1*/
    document.querySelectorAll("div").forEach(function(div){
        div.addEventListener("click",function(sumir){
        div.style.display = "none";
        
        })
    });
}

window.onload = criarEvento; 





function evento() {
    document.querySelector("button")
        .addEventListener("click",evento);
        
        
        /*ex2*/
        
     document.querySelectorAll("div").forEach(function(div){
        
        div.style.backgroundColor =  "blue";
        
        
    });
    
    document.querySelectorAll("p").forEach(function(p){
       
        p.style.color =  "red";
        
        
    });
      
        
        
}

window.onload = evento; 






/* 1) Ao clicar em qualquer div, faça-a sumir; ok

2) Pinte de vermelho todas as p's e de azul todas
as divs.

3) Concantene todos os conteúdos html dos elementos
li. */
$(evento)

function evento(){
//$("p, div").click(function(){
    //    $(this).hide();
    //});
     /*$("p").dblclick(function(){
        $("p").html("Paragrafo duplo-clicado");
    })
      $("p").click(function(){
        $("p").html("Paragrafo clicado");
    });
    
     $("#b2").click(function(){
        $(".hideMe").hide();
    })*/
    
     /*$("p").c(function(){
       var conteudo = $(this).text();
       if(conteudo != "NAO")
            $(this).css("backgroundColor","yellow");
    });
    
     $("input:text").blur(function(){
        var texto = $(this).val();
        if(texto != "")
            $(this).css("backgroundColor","yellow");
    });*/
    
    $("input:text, #texto1").blur(function(){
        var texto = $(this).val();
        if(texto == "sumir")
            $("p").hide();
    });
    
    $("input:text").blur(function(){
        var texto = $(this).val();
        if(texto == "voltar")
            $("p").show();
    });
    
     $("#b1, input:text").blur(function(){
        var texto = $(this).val();
        if(texto == "preto")
            $("input:text").css("backgroundColor","red");
    })
    
     $("input:text").blur(function(){
        var texto = $(this).val();
        if(texto == "ola")
        $("p").html("Ola");
    })
    
     $("input:text").blur(function(){
        var texto = $(this).val();
        if(texto == "bye")
        $("#texto1,#btn1, #p1 ,#p2, #p3").hide();
    })
    
  

     
    $("input:text").click(function(){
    var texto = $(this).val();
    if(texto == "preto")
       $("p").css("backgroundColor","green");
    });
    
}


/*Em um formulario ha uma caixa de texto de id texto1. Ha tambem um elemento button, fora do formulario, de
id btn1. Considere tres paragrafos com id p1, p2 e p3. Voce deve implementar uma funcao usando jQuery que
capture uma acao digitada pelo usuario na caixa. Se o usuario digitar
• sumir: todos os paragrafos devem sumir;
• voltar: todos os paragrafos devem aparecer;
• verde: todos os paragrafos deveram ter seu fundo pintado de verde;
• ola: todos os paragrafos possuiram o conteudo ola;
• bye: todos os elementos (botao, caixa e paragrafos) deveram sumir.
Caso o usuario digite algo fora dessas 5 acoes, os paragrafos deveram ter seu fundo pintado de vermelho e ter
seu conteudo mudado para erro.*/



/*1 - (a) (1.5) Ao clicar duas vezes (duplo-clique) em qualquer paragrafo, seu conteudo deve mudar para: ”Paragrafo
duplo-clicado”. Ao clicar uma vez em qualquer paragrafo o conteudo deve mudar para: ”Paragrafo clicado”.
(b) (1.0) Supondo que ha um botao de id b2 ao clicar todo elemento que possui classe hideMe deve sumir.*/
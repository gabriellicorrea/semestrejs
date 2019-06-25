/*
SEM JQUERY

function evento(){
    document.querySelectorAll("p").forEach(function(p){
        p.addEventListener("click",function(evt){
            evt.target.style.backgroundColor = "yellow";
        });
    })
}

//quando clicar no p o backgroud fica amarelo


window.onload = evento;
*/


//COM JQUERY

$(evento)

function evento(){
    //$("p").click(function(){
    //    $(this).html("clicado");
    //});
    $("#p1").click(function(){
        $(this).html(1+parseInt($(this).html()));
    });
}


/* $(evento)

function evento(){
    $("p").click(function(){
        $(this).html("clicado");
    });
     $("#p1").click(function(){
        $(this).html(1+parseInt($(this).html()));
    });
    $(".classe1").dblclick(function(){
        alert($(this).html());
    });
    $("p").click(function(){
        $(this).css("backgroundColor","yellow");
    });
     $("button").dblclick(function(){
        $("p").hide();
    })
      $("button").click(function(){
        $(".classe").hide();
    });
}
*/









//DSL 
// $(seletor).evento(acao);
// string "p", "div"
// evento = funcao de alta ordem ex. funcao: click, dblclick...
// acao = funcao representar o que deve ser feito apos o evento.
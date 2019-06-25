function salarioFunc(vetFunc){
    var total = "";
    var func = "";
    var aux = "";
    var aux1 = "";
    var max = "";
    var min = vetFunc[0].salarioHora*vetFunc[0].qtHoras;
    var contH = 0;
    var contS = 0;
    var mediaH = ""; 
    var mediaS = "";
    
    
    for(var i=0;  i<vetFunc.length; i++){
       total  = (vetFunc[i].salarioHora * vetFunc[i].qtHoras);
       func = vetFunc[i].nome  + total;
       var salario = parseFloat(total.toFixed(2));
       document.write(func  + "<br>");
       contH = contH + vetFunc[i].qtHoras;
       contS = contS + total;
     
        
             
       if(max<total){
           max = total;
           aux = vetFunc[i].nome;
       }
       if(min>total){
           min = total;
           aux1 = vetFunc[i].nome;
       }
       
       
    }
    
    document.write("<br>");
    document.write(aux+" tem o maior salario que eh R$:"+max+ "<br>");
    document.write(aux1+" tem o menor salario que eh R$:"+min+"<br>");
    
    mediaH = contH/vetFunc.length;
    mediaS = contS/vetFunc.length;
    
    document.write(" <br> A media das horas eh: "+mediaH+ " <br> ");
    document.write(" Media salarial: "+mediaS.toFixed(2));
    
    
}

        
function teste(){
      salarioFunc([{"nome":"FUNC0: ","salarioHora":25.60,
                "qtHoras":25}
                ,{"nome":"FUNC1: ","salarioHora":15.99,
                "qtHoras":80}
                ,{"nome":"FUNC2: ","salarioHora":5.60,
                "qtHoras":100}
                ,{"nome":"FUNC3: ","salarioHora":78.50,
                "qtHoras":50}
                ,{"nome":"FUNC4: ","salarioHora":25.60,
                "qtHoras":70}
                ,{"nome":"FUNC5: ","salarioHora":58.44,
                "qtHoras":20}
                ,{"nome":"FUNC6: ","salarioHora":17,
                "qtHoras":80}
                ,{"nome":"FUNC7: ","salarioHora":9.90,
                "qtHoras":70}
                ,{"nome":"FUNC8: ","salarioHora":40,
                "qtHoras":100}])
}



$(contatp )

function contatp(){
    var teste1 = $("p");
    var aux = Array.from(teste1);
   
    var res = aux.reduce(function(x,y){
        return x + y.innerHTML;
    });
     //var aux2 = res.slice(1,res.length)
     console.log(aux);
    //console.log(res);
    //console.log(aux2);
    document.write(res);
    //document.write(aux2);
    
}

function main(){
    $("#btn1").click(foo);
}
function foo(){
 
    bar([10,20,30,40,50,60,70,80,90,100]);
}

function bar(v){
    var arrf=[];
    arrf[0]= function(x) {return 2*x;};
    arrf[1]= function(x) {return x-20;};
    arrf[2]= function(x) {if(x%3==0) return true; else return false;};
    arrf[3]= function(x,y) {return x+y+1;};
    arrf[4]= function(x) {return x+10;};
    alert(v.map(arrf[0]).map(arrf[1]).filter(arrf[2]).map(arrf[4]).reduce(arrf[3],0));
    console.log(v.map(arrf[0]).map(arrf[1]).filter(arrf[2]).map(arrf[4]).reduce(arrf[3],0));
}

function teste(){
    var dobro = function(x){
        return 2*x;
    };
    
    alert(dobro(5));
}

/*function(x){
        return 2*x;
    };*/
    
    
    
/*function teste(){
    // \x. 2*x
    var dobro = x => 2*x;
    
    alert(dobro(5));
} */   






/*function teste(){
    var dobro = function(x){
        return 2*x;
    };
    
    var triplo = x => 3*x;
    
    alert(dobro(5));
    alert(triplo(9));
}*/




/*function mult(x,y){
    return x*y;
}


    alert(mult);*/

/*
function mult(x,y){
    return x*y;
}*/
/*
function teste(){
    var dobro = (function(x){
        return 2*x;
    })(5);
    
    
    alert(dobro);
    */
    
    
    
    
    
    
    
    
    function somar(x){
    return function(y){
        return x+y;
    }
}

function foo(f,g){
    return f(5) + g(3);
}

function teste(){
    var s = somar(1);
    alert(s(3));
    //var res = foo(function(x){
    //    return x+2;
    //},function(x){
    //    return 3*x
    //});
    //alert(res);
}



function somar(x){
    return function(y){
        return x+y;
    }
}

function foo(f,g){
    return f(5) + g(3);
}

function teste(){
    var s = somar(1);
    alert(s(3));
    alert(s(5));
    var z = somar(7)(5);
    alert(z);
    //var res = foo(function(x){
    //    return x+2;
    //},function(x){
    //    return 3*x
    //});
    
}




function head(v){
    return v[0];
}

function tail(v){
    return v.slice(1);
}

function insere(x,v){
    var aux = v.unshift(x);
    return aux;
}

function teste(){

}

function head(v){
    return v[0];
}

function tail(v){
    return v.slice(1);
}

function insere(x,v){
    v.unshift(x);
    return v;
}

function map(f,v){
    if(v.length == 0)
        return [];
    else
        return insere(f(head(v)),map(f,tail(v)));
}

function teste(){

}
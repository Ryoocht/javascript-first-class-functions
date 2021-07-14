function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    function returnsANamedFunction(){
        console.log("This is a named function");
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("This is a anonymous function");
    }
}
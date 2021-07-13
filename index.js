function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    function anotherfunction(){
        console.log("This is a named function");
        return "Hello World";
    }
  return anotherfunction;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("This is a anonymous function");
    }
}

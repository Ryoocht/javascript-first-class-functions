<<<<<<< HEAD
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
=======
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
>>>>>>> 10afc4f1c41280d9b215c8675cfcf942be0a9521

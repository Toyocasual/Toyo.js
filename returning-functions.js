// Don't do this
//var myvariable = 'i am at the global scope';

//This either
/*var myfunction = function() {
    console.log('me too')
}*/

//function one() {
   // return 'one';
//}
//let value = one();
//console.log(value);
//console.log(one());

function two() {
    return function ()  {
        console.log('two');
    }
}

let myfunction = two();
myfunction();

function three() {
    return function() {
        return 'three';
    }
}
console.log(three()());
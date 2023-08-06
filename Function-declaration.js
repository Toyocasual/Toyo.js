/*function sayHello() {
    console.log('............')
    console.log('Hello')
    console.log('.............')
}

sayHello()
let a = sayHello
a();
a();
a();*/

function sayHello(name) {
    console.log('............')
    console.log('Hello ' + name + '!')
    console.log('.............')
}
    sayHello("Toyo");
    sayHello("gi");

function calculatetax(amount) {
    let result = amount * 0.0825;
    return result;
}
let tax = calculatetax(100);
console.log(tax);
function multuply(num) {
    return num * 5;
}


multuply.power = 2;

console.log(multuply(5));
console.log(multuply.power);
console.log(multuply.prototype);

function createUser(userName, score){
    this.userName = userName;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.print = function() {
    console.log(`this is ${this.score}`);
}

const chai = new createUser("chai", 25)
chai.print();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
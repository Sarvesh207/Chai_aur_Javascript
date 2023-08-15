//ES6

class User{
    constructor(username, email, passward){
        this.username = username;
        this.email = email;
        this.passward = email;
    }

    encryptPassward(){
        return `${this.passward}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com","123")

console.log(chai.encryptPassward());
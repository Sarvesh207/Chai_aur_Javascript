//ES6

// class User{
//     constructor(username, email, passward){
//         this.username = username;
//         this.email = email;
//         this.passward = email;
//     }

//     encryptPassward(){
//         return `${this.passward}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com","123")

// // console.log(chai.encryptPassward());
// console.log(chai.changeUsername());

//behind the see

function User(username, email, passward){
    this.username = username;
    this.email = email;
    this.passward = passward;

}

    
User.prototype.encryptPassward = function(){
    return `${this.passward}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")
console.log(tea.changeUsername())
console.log(tea.encryptPassward())


function setUserName(userName){
    this.userName = userName
    console.log("called");
}

function createUser(userName, email, passward){
    setUserName.call(this, userName)
    this.email = email;
    this.passward = passward;
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
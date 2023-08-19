class User{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`USERNAME is ${this.userName}`)
    }
}

class Teacher extends User{
    constructor(userName, email, passward){
        super(userName)
        this.email = email;
        this.passward = passward;
    }

    addCourse(){
        console.log(`   A new course was added by ${this.userName}`)
    }

}

const chai = new Teacher("cahi", "cahi@gmail.com", "123");
// chai.addCourse();
const masalaChai = new User("masalaChai")
// masalaChai.logMe()
console.log(chai instanceof Teacher)

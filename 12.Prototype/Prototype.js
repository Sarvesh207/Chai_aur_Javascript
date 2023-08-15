let myName = "Sarvesh     "



let myHeros = ["thor", "spiderman"]

let heroPwer = {
    thor:"Hamer",
    spiderMan:"Sling",

    getSpiderManPower:function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.sarvesh = function(){
    console.log(`sarvesh is present in all object`)
}

Array.prototype.heySarvesh = function(){
    console.log(`Sarvesh says hello`)
}
heroPwer.sarvesh();
myHeros.sarvesh();
// heroPwer.heySarvesh();

//inhertance 

const user = {
    name:"chai",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo:true

}

const TeachingSupport = {
    isAvailabel:false
}

const TASupport = {
    makeAssignment : 'js assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = user;

// modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`)
      
    console.log(`True length ${this.trim().length}`)
}
 anotherUserName.trueLength();
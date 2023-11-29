const sarvesh = {
    name:"Sarvesh Gaynar",
    sayName: function (){
        console.log(this.name);
    }
}

const devesh = {
    name:"Devesh Gyanar",
    sayName:function (){
        console.log(this.name);
    }
}

function sayMyName() {
    console.log(this);
}

devesh.sayName.call(sarvesh)

sayMyName.call(devesh)
sayMyName.call(sarvesh)
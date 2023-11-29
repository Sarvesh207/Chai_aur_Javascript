const sarvesh = {
    name:"Sarvesh Gaynar",
    sayName: function () {
        console.log(this.name);
    }
}

setTimeout(() => sarvesh.sayName(), 1000);
setTimeout(sarvesh.sayName, 1000)

// const myFun = sarvesh.sayName.bind(sarvesh);
// setTimeout(myFun, 3*1000)


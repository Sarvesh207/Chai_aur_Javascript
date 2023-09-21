const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(Math.PI)
// Math.PI = 5;
// console.log(Math.PI)

// console.log(descriptor);


const chai = {
    name:"Ginger chai",
    price:250,
    isAvilable :true,
    orderChai: function(){
        console.log("code fat jayega")
    }

}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, 'name', {
    // writable:true,
    enumerable:false,
    
})
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// console.log(Object.entries(chai));
for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);

    }
}

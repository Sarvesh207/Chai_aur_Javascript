const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value!!")
    },10000)
    
})


// Handling Promise using async & await 




// before async and await how we use to handle promises in js 
// Promise.then/catch way 
// function getData() {
//     // Js Engine will not wait Promise to get resolved
//     promise1.then((res) => console.log(res));
//     console.log("Namste Javascript")
// }

// getData();

 // First `Hello There!` would be printed and then after 3 secs 'Promise resolved value!!' will be printed.
// Above happened as Javascript wait for none, so it will register this promise and take this callback function and register separately then js will move on and execute the following console and later once promise is resolved, following console will be printed.

//❓ Problem: Normally one used to get confused that JS will wait for promise to be resolved before executing following lines.

//  Note  await can only be used inside async function


// async function handlePromise() {
//     const res = await promise1;
//     console.log(res)
// }
// handlePromise();

// This time `Hello There!` won't be printed immediately instead after 3 secs `Hello There!` will be printed followed by 'Promise resolved value!!'
// 💡 So basically code was waiting at `await` line to get the promise resolve before moving on to next line.

// Above is the major difference between Promise.then/.catch vs async-await

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promised 1  resolved ")
    }, 20000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promised 2  resolved ")
    }, 40000)
})

async function handlePromise() {
    console.log("Hello world");
    const val1 = await p1;
    console.log("Namste Javascript 1")
    console.log(val1);
    const val2 = await p2;
    console.log("Namste Javascript 2")
    console.log(val2)


}

handlePromise();
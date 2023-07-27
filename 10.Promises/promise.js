// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('async opration completed');
//     },1000)
// })

/*
promiseOne.then(() => {
    console.log("promise consumed")
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async task 2');
        resolve();
    },1000)
}).then(() => {
    console.log('promise consumed');
})
*/

/** 
 * const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "sarvesh", passward: "sarvesh@207" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user);
});

*/

/**
 


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({ userName: "sarvesh", passward: "sarvesh@207" })
        } else {
            reject("something went wrong")
        }
    },1000)
})

promiseFour.
then((user) => {
    console.log(user);
    return user.userName;
}).
then((username) => {
    console.log(username);
}).
catch((error) => {
    console.log(error);
}).
finally(() => {
    console.log('i am finally run regardless of either resolved or rejected');
})

 */

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "sarvesh", email: "sarvesh@gmail.com" });
    } else {
      reject("oops something went wrong");
    }
  }, 1000);
});

async function consumePromise() {
  try {
    const res = await promiseFive;
    console.log(res);
  } catch (errr) {
    console.log(errr);
  }
}

consumePromise();

// using async and await 

// const getUserInfo = async () => {
//     const res = await fetch("https://api.github.com/users/hiteshchoudhary");
//     const  info = await res.json();
//     console.log(info);
// }

// getUserInfo();

// lets do same thing  with fetch

fetch("https://api.github.com/users/hiteshchoudhary")
.then((res) => res.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))
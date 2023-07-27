// const user = {
//     username:"sarvesh",
//     logincount:1,
//     signedIn:true,
//     getUserDetails: function () {
//         console.log("hey i am",user.username);
//         console.log(this);
//     }
// }

// user.getUserDetails()

// console.log(this);

function user(userName, isLoggedIn, password) {
  this.userName = userName;
  this.isLoggedIn = isLoggedIn;
  this.password = password;
}

const user1 = new user("sarvesh", true, "sarvesh@207");
const user2 = new user("sarvesh2", false, "sarvesh@123");

console.log(user1);
console.log(user2);



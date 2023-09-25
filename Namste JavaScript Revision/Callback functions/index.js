// console.log("Hello Callback")

// setTimeout(() => {
//   console.log("Timer");
// }, 5000);

// function x(y) {
//   console.log("X");
//   y();
// }

// x(function y() {
//   console.log("Y");
// });

const btn = document.getElementById("clickMe");
console.log(btn);

function attachEventListners() {
  let count = 0;

  btn.addEventListener("click", function xyz() {
    console.log("Button Clicked", count++);
  });
}
attachEventListners();

/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let a =time.split(':')[0];
if (a.parseInt()<12)
console.log("Good Morning");
else if ((a.parseInt()>12)&&(a.parseInt()<5))
console.log("Good Afternoon");
else if (a.parseInt()>5)
console.log("Good Evening")
}
/* Write your implementation of displayMessage() */

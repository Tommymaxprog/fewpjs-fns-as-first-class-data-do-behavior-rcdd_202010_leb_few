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
if (parseInt(a,10)<12)
console.log("Good Morning");
else if ((parseInt(a,10)>12)&&(parseInt(a,10)<17))
console.log("Good Afternoon");
else if (parseInt(a,10)>5)
console.log("Good Evening")
}
/* Write your implementation of displayMessage() */

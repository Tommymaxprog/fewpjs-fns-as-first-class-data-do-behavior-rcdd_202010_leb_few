/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
if (time.split(':')[0].parseInt()<12)
console.log("Good Morning");
else if ((time.split(':')[0].parseInt()>12)&&(time.split(':')[0].parseInt()<5))
console.log("Good Afternoon");
else if (time.split(':')[0].parseInt()>5)
console.log("Good Evening";)
}
/* Write your implementation of displayMessage() */

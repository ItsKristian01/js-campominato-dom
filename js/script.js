// Numbers generator
for (let i = 1; i <= 100; i++) {
  const divCol = document.createElement("div");   // Element Creation
  divCol.classList.add("col"); // Added class
  divCol.innerHTML = i;
  console.log(divCol);
  const element = document.getElementById("numbers"); 
  element.append(divCol); // Added element to HTML
  
// Cell click activation
  divCol.addEventListener("click", function(){
    this.classList.toggle("color");
    console.log(divCol);
  })

  const bombs = generateBombs(100);
  const maxClicks = 100 - bombs.length;
  console.log(bombs, maxClicks);
}

// Button Click
let buttonPlay = document.getElementById("button-play");
buttonPlay.addEventListener("click", function() {   //Added Click to Button Play
   const element = document.getElementById("numbers");
   element.classList.remove("remove");
})




/**
 * Description placeholder
 * @date 10/30/2023 - 3:42:12 PM
 *
 * @param {*} max
 */
function generateBombs(max) {
  const numbers = [];
  while (numbers.length < 16) {
    const rndNumber = Math.floor(Math.random() * 16) + 1;
    if(!numbers.includes(rndNumber)) {
      numbers.push(rndNumber);
    }
  }
  return numbers;
}









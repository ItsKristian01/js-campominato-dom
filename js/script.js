
// Numbers generator
for (let i = 1; i <= 100; i++) {
  const divCol = document.createElement("div"); // Element Creation
  divCol.classList.add("col"); // Added class
  divCol.innerHTML = i;
  console.log(divCol);
  const element = document.getElementById("numbers");
  element.append(divCol); // Added element to HTML

  // Cell click activation
  divCol.addEventListener("click", function () {
    const bombs = generateBombs(100);
    const maxClicks = 100 - bombs.length;
    console.log(maxClicks);
   
    console.log(divCol);

    if (divCol === bombs) {
      divCol.classList.ada("red");
      console.log("Hai perso");
    } else {
      divCol.classList.toggle("color");
    }
  });
}

// Button Click
let buttonPlay = document.getElementById("button-play");
buttonPlay.addEventListener("click", function () {
  //Added Click to Button Play
  const element = document.getElementById("numbers");
  element.classList.remove("remove");
});




/**
 * Description placeholder
 * @date 10/30/2023 - 4:34:58 PM
 *
 * @param {*} min
 * @param {*} max
 * @returns {*}
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Description placeholder
 * @date 10/30/2023 - 3:42:12 PM
 *
 * @param {*} max
 */
function generateBombs(max) {
  const numbers = [];
  while (numbers.length < 16) {
    const rndNumber = getRndInteger(1, max);
    if (!numbers.includes(rndNumber)) {
      numbers.push(rndNumber);
    }
  }
  return numbers;
}

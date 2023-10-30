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
}

// Button Click
let buttonPlay = document.getElementById("button-play");
buttonPlay.addEventListener("click", function() {   //Added Click to Button Play
   const element = document.getElementById("numbers");
   element.classList.remove("remove");
})












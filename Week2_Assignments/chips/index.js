var selectedFruits = ["Lemon"];
var allFruits = ["Apple", "Lemon", "Lime", "Orange", "Strawberry"];
for (var i = 0; i < selectedFruits.length; i++) {
    let span= document.createElement('span');
    span.innerHTML=selectedFruits[0]+" <i class=\"fas fa-times\"></i>";
    document.getElementById("fruitValue").appendChild(span);
}
console.log("selected fruits length"+ selectedFruits.length);
const textArea = document.getElementById("nextFruit");
textArea.addEventListener("click", (event) => {
    document.getElementById("fruits").style.display='block';

  console.log("All fruits length " + allFruits.length);
  popUpDropDown();
  allFruits = [];
});

function popUpDropDown() {
  for (var i = 0; i < allFruits.length; i++) {
    document.getElementById("fruits").innerHTML +=
      '<option onclick="selectedFruit()">' +
      allFruits[i] +
      '<i class="fas fa-times"></i>' +
      "</option>";
  }
}


function selectedFruit() {
    console.log("selected Fruit");
    var selectedOption = document.getElementById("fruits");
    console.log("selected fruits length before push"+selectedFruits.length);
    let span= document.createElement('span');
    span.innerHTML=selectedOption.options[selectedOption.selectedIndex].value+" <i class=\"fas fa-times\"></i>";
    document.getElementById("fruitValue").appendChild(span);
    var displayDropDown=document.getElementById("fruits").style.display;
  console.log(" display drop down style "+displayDropDown);
  if (displayDropDown == 'block') {
    console.log("display none");  
    document.getElementById("fruits").style.display = 'none';
  }
  else if(displayDropDown == ''){
    console.log("display block");
    document.getElementById("fruits").style.display='block';
  }
  }
  
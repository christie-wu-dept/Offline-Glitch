var character = document.getElementById("character");
var block = document.getElementById("block");
function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  console.log("jump");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}

var checkDead = setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  //blockleft < width of the red 130 is less than 40 pixel 150 - height of block
  if (blockLeft < 40 && blockLeft > 0 && characterTop >= 120) { 
    block.style.animation = "none";
    block.style.display = "none";
    alert("you are dead:(");
  }
}, 10);

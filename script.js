let gamer = new game()
let ost = new Audio("images/seq9.2.wav")
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    document.querySelector(".intro").style.display="none"
    startGame();
    
  };

  function startGame() {
    gamer.initGame()
    ost.play()

  }
 

};
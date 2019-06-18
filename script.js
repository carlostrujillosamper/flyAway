let gamer = new game()
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    
  };

  function startGame() {
    gamer.initGame()


  }
 

};
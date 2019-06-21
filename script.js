let gamer = new game()
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    document.querySelector(".intro").style.display="none"
    startGame();
    
  };

  function startGame() {
    gamer.initGame()
    

  }
 

};
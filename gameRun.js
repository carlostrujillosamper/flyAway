// const w = window.innerWidth
// const h = window.innerHeight
let background = new gameBackGround()

let effect = new Effect()


class game {
  constructor() {
    this.canvas=""
    this.ctx =""
    this.w = w
    this.h = h
    this.frameCounter=0
    this.key_right = 39;
    this.key_left = 37;
    this.powerUps = []
    this.playerBalloon = new Player()
    this.effect = new Effect()
    this.intervalId = ''

  }

  initGame= ()=>{
    /** @type HTMLCanvasElement */
    this.canvas = document.querySelector("#gameCanvas");
    /** @type CanvasRenderingContext2D */
    this.ctx= this.canvas.getContext("2d");
    // this.start();
    this.canvas.setAttribute("width", w)
    this.canvas.setAttribute("height", h)
    this.intervalId = setInterval (()=>{
      this.frameCounter++
      this.clear()
      if (this.frameCounter % 120 === 0) {
        this.generatePowerUps();
      }
      this.checkForPowerUps()
      
      
      this.clearPowerUps()

      
      
      if (this.frameCounter < 1500){
        
        background.draw()
        this.playerBalloon.drawBird()
        
        
       
        
        
        
      }else {
        
        background.drawNight()
        this.playerBalloon.drawBird()
        
      }
          this.powerUps.forEach(powerUp =>  {
            powerUp.drawPowerUp();
          });
     
     
   

    },1000/60)
  }
  clear = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  generatePowerUps = () => {
    
    this.powerUps.push(new PowerUp(this))
      
    
  }
  clearPowerUps = () => {
    this.powerUps = this.powerUps.filter((powerUp) =>{
      return powerUp.yBalloon <= this.h;
    
    });
    
  }

  checkForPowerUps = () => {
    this.powerUps.forEach ((powerUp, index)=>{
      if (this.playerBalloon.xBalloon + 20 >= powerUp.xBalloon &&
        powerUp.xBalloon + 20 >= this.playerBalloon.xBalloon &&
        this.playerBalloon.yBalloon + 40 >= powerUp.yBalloon &&
        powerUp.yBalloon + 40 >= this.playerBalloon.yBalloon) {
          
          delete this.powerUps[index]
          // setTimeout(() =>{
          //   this.effect.drawEffect()
          // },800)
          
         

        }
    })
  }
 
}
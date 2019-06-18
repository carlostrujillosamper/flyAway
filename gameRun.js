// const w = window.innerWidth
// const h = window.innerHeight
let background = new gameBackGround()
let powerUps = new PowerUps()


class game {
  constructor() {
    this.canvas=""
    this.ctx =""
    this.w = w
    this.h = h
    this.frameCounter=0
    this.key_right = 39;
    this.key_left = 37;
    
  }

  initGame= ()=>{
    /** @type HTMLCanvasElement */
    this.canvas = document.querySelector("#gameCanvas");
    /** @type CanvasRenderingContext2D */
    this.ctx= this.canvas.getContext("2d");
    // this.start();
    this.canvas.setAttribute("width", w)
    this.canvas.setAttribute("height", h)
    setInterval (()=>{
      this.frameCounter++
      this.clear()
      if (this.frameCounter < 1500){

        background.draw()
        // powerUps.drawPowerUps()
        
      }else {

        background.drawNight()
        // powerUps.drawPowerUps()
        
      }
      // playerBalloon.drawBird()

      
      
     
   

    },1000/60)
  }
  clear = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
 
}
let w = window.innerWidth
let h = window.innerHeight

class PowerUp {
  constructor(game) {
    this.canvas= game.canvas
    this.ctx = game.ctx
  
    this.xBalloon = w-(Math.random()*1600)
    this.yBalloon = h-800 
    this.imgBird2 = new Image()
    this.imgBird2.src = "images/output-onlinepngtools01.png"
    this.imgBird3 = new Image()
    this.imgBird3.src = "images/output-onlinepngtools02.png"
    this.imgBird3 = new Image()
    this.imgBird3.src = "images/output-onlinepngtools03.png"
    this.imgBird4 = new Image()
    this.imgBird4.src = "images/output-onlinepngtools04.png"
    this.allBirds = [this.imgBird2,this.imgBird,this.imgBird3,this.imgBird4]
    // this.randomBird = this.allBirds[Math.floor(Math.random()*4)]
    this.randomBird = this.allBirds[this.randomInt(0,4)]
   
    this.w = w
    this.h = h
    this.imgBird = new Image()
    this.imgBird.src = "images/output-onlinepngtools.png"
    this.imgBirdFrames = 14;
    this.imgBirdFrameIndex = 0;
    this.birdX = w
    this.birdY = 0
    this.imgBirdSheetWidth= 543;
    this.imgBirdSheetHeight=211;
    this.imgBirdWidth = this.imgBirdSheetWidth/14
    this.imgBirdHeight = this.imgBirdSheetHeight/2
    this.imgBirdSrcX;
    this.imgBirdSrcY;
    this.currentFrame = 0 
    this.frameCounter=0
    this.birdOrigin = this.w-(this.frameCounter*8)
    this.powerUpSpeed = 5 
  }

  drawPowerUp() {

     this.updateFramesPowerUp();
     this.movePowerUp();
     this.ctx.drawImage(
      this.randomBird,
      this.imgBirdSrcX,
      this.imgBirdSrcY,
      this.imgBirdWidth,
      this.imgBirdHeight,
      this.xBalloon ,  
     this.yBalloon ,
      100,
      200
     )
  }
  updateFramesPowerUp = () =>{
    if (this.frameCounter%800===0){
      this.currentFrame= ++this.currentFrame%5
      this.imgBirdSrcX=this.currentFrame*this.imgBirdWidth
      this.imgBirdSrcY=0

    }
  }

  movePowerUp() {
    this.yBalloon += this.powerUpSpeed;
  }
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
}
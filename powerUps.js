let w = window.innerWidth
let h = window.innerHeight

class PowerUps {
  constructor() {
    this.canvas=""
    this.ctx =""
  
    this.xBalloon = w/2
    this.yBalloon = h-250
   
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
    this.powerUpSpeed = 4
  }

  drawPowerUps() {
      /** @type HTMLCanvasElement */
      this.canvas = document.querySelector("#gameCanvas");
      /** @type CanvasRenderingContext2D */
      this.ctx= this.canvas.getContext("2d");
     this.updateFramesPowerUps();
     
     this.movePowerUps();
     this.ctx.drawImage(
       this.imgBird,
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
  updateFramesPowerUps = () =>{
    if (this.frameCounter%2===0){
      this.currentFrame= ++this.currentFrame%5
      this.imgBirdSrcX=this.currentFrame*this.imgBirdWidth
      this.imgBirdSrcY=0

    }
  }

  movePowerUps() {
    this.imgBirdSrcY -= this.powerUpSpeed;
  }
}
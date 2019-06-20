// let w = window.innerWidth
// let h = window.innerHeight

class Enemy {
  constructor(game) {
    this.canvas= game.canvas
    this.ctx = game.ctx
    
  
    this.xBirds = w-(Math.random()*1600)
    this.yBirds = h-800 
    this.imgBird2 = new Image()
    this.imgBird2.src = "images/output-onlinepngtools01.png"
    this.imgBird3 = new Image()
    this.imgBird3.src = "images/output-onlinepngtools02.png"
    this.imgBird3 = new Image()
    this.imgBird3.src = "images/output-onlinepngtools03.png"
    this.imgBird4 = new Image()
    this.imgBird4.src = "images/output-onlinepngtools04.png"
    this.allBirds = [this.imgBird2,this.imgBird,this.imgBird3,this.imgBird4]
    this.randomBird = this.allBirds[Math.floor(Math.random()*4)]
   
    this.w = w
    this.h = h
    this.imgBird = new Image()
    this.imgBird.src = "images/kisspng-bird-sprite-animation-3d-computer-graphics-sprite-5acc1525c37106.1600777115233241978005.png"
    this.imgBirdFrames = 14;
    this.imgBirdFrameIndex = 0;
    this.birdX = w
    this.birdY = 0
    this.imgBirdSheetWidth= 920;
    this.imgBirdSheetHeight=920;
    this.imgBirdWidth = this.imgBirdSheetWidth/5
    this.imgBirdHeight = this.imgBirdSheetHeight/5
    this.imgBirdSrcX;
    this.imgBirdSrcY;
    this.currentFrame = 0 
    this.frameCounter=0
    this.birdOrigin = this.w-(this.frameCounter*8)
    this.EnemySpeed = 10

  }

  drawEnemy() {
      // this.ctx.save()
      // this.ctx.scale(1,-1)
     this.updateFramesEnemy();
     this.moveEnemy();
     this.ctx.drawImage(
      
      this.imgBird,
      this.imgBirdSrcX,
      this.imgBirdSrcY,
      this.imgBirdWidth,
      this.imgBirdHeight,
      this.xBirds ,  
     this.yBirds ,
      100,
      200
     )
    //  this.ctx.restore()
  }
  updateFramesEnemy = () =>{
    if (this.frameCounter%800===0){
      this.currentFrame= ++this.currentFrame%5
      this.imgBirdSrcX=this.currentFrame*this.imgBirdWidth
      this.imgBirdSrcY=0

    }
  }

  moveEnemy() {
    this.yBirds += this.EnemySpeed;
  }
  
}
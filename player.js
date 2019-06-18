// let w = window.innerWidth
// let h = window.innerHeight

class player {
  constructor(){
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
    this.key_right = 39;
    this.key_left = 37;
   

  }
  drawBird = () =>{
     /** @type HTMLCanvasElement */
     this.canvas = document.querySelector("#gameCanvas");
     /** @type CanvasRenderingContext2D */
     this.ctx= this.canvas.getContext("2d");
    this.updateFrames();
    this.listener()
    this.moveBird();
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
  updateFrames = () =>{
    if (this.frameCounter%2===0){
      this.currentFrame= ++this.currentFrame%5
      this.imgBirdSrcX=this.currentFrame*this.imgBirdWidth
      this.imgBirdSrcY=0

    }
  }
  moveBird = () =>{
    
    if (this.h-(this.frameCounter*8)===0){
      this.h-(this.frameCounter*8)+ h
    }
    
  }
  listener = ()=>{
    document.onkeydown = (e) => {
      e.preventDefault();
      switch (e.keyCode) {
        case this.key_left:
          if (this.xBalloon >= 10) {
            this.xBalloon -= 30;
            break;
          }
          

        case this.key_right:
          if (this.xBalloon <= w) {
            this.xBalloon += 30;
            break;
          }
         
      }
    }
  }
    
}
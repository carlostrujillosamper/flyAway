class Title {
  constructor() {
    this.w = w
    this.h = h
    this.canvas=""
    this.ctx =""
    this.imgTitle = new Image()
    this.imgTitle.src = "images/New Piskel.png"
    this.imgTitleFrames = 7;
    this.imgTitleFrameIndex = 0;
    this.TitleX = w
    this.TitleY = 0
    this.imgTitleSheetWidth= 224;
    this.imgTitleSheetHeight=32
    this.imgTitleWidth = this.imgTitleSheetWidth/7
    this.imgTitleHeight = this.imgTitleSheetHeight
    this.imgTitleSrcX;
    this.imgTitleSrcY;
    this.currentFrame = 0 
    this.currentRow = 0
    this.frameCounter=0
    this.TitleOrigin = this.w-(this.frameCounter*8)
    this.round = 0
    // this.posX = posicionX + 50
    // this.posY = posicionY 
  }
  drawTitles() {

    this.canvas = document.querySelector("#gameCanvas");
    
    this.ctx= this.canvas.getContext("2d");
       this.ctx.drawImage(
        this.imgTitle, 
        this.imgTitleWidth * this.currentFrame, 
        this.imgTitleHeight * this.currentRow, 
        this.imgTitleWidth, 
        this.imgTitleHeight,
        550, 
        300, 
        600, 
        400);
      
        this.currentFrame++
      
      if (this.currentFrame > 7) {
      
        this.currentFrame = 0
       
        
      }
     
  }
}
class Effect {
  constructor(posicionX,posicionY){
    this.w = w
    this.h = h
    this.canvas=""
    this.ctx =""
    this.imgEffect = new Image()
    this.imgEffect.src = "images/pngfind.com-rpg-png-887284.png"
    this.imgEffectFrames = 5;
    this.imgEffectFrameIndex = 0;
    this.effectX = w
    this.effectY = 0
    this.imgEffectSheetWidth= 944;
    this.imgEffectSheetHeight=944;
    this.imgEffectWidth = this.imgEffectSheetWidth/5
    this.imgEffectHeight = this.imgEffectSheetHeight/5
    this.imgEffectSrcX;
    this.imgEffectSrcY;
    this.currentFrame = 0 
    this.currentRow = 0
    this.frameCounter=0
    this.effectOrigin = this.w-(this.frameCounter*8)
    this.round = 0
    this.posX = posicionX + 50
    this.posY = posicionY 
    
  }
  drawEffect() {

    this.canvas = document.querySelector("#gameCanvas");
    
    this.ctx= this.canvas.getContext("2d");
       var erase = this.ctx.drawImage(
        this.imgEffect, 
        this.imgEffectWidth * this.currentFrame, 
        this.imgEffectHeight * this.currentRow, 
        this.imgEffectWidth, 
        this.imgEffectHeight,
        this.posX, 
        this.posY, 
        this.imgEffectWidth, 
        this.imgEffectHeight);
      
        this.currentFrame++
      
      if (this.currentFrame > 5) {
      
        erase = ""
       
        
      }
     
  }
}
    

  
  

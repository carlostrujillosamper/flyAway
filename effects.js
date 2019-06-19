class Effect {
  constructor(){
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
    this.frameCounter=0
    this.effectOrigin = this.w-(this.frameCounter*8)
    
  }
  drawEffect() {
    this.canvas = document.querySelector("#gameCanvas");
     
     this.ctx= this.canvas.getContext("2d");

    // this.updateFramesEffect();
    
    // this.ctx.drawImage(
    //  this.imgEffect,
    //  this.imgEffectSrcX,
    //  this.imgEffectSrcY,
    //  this.imgEffectWidth,
    //  this.imgEffectHeight,
    //  this.xBalloon ,  
    // this.yBalloon ,
    //  100,
    //  200
    // )
    this.ctx.drawImage(this.imgEffect, 500  , 500, this.imgEffectWidth, this.imgEffectHeight);
 }
//  updateFramesEffect = () =>{
//   if (this.frameCounter%2===0){
//     this.currentFrame= ++this.currentFrame%5
//     this.imgEffectSrcX=this.currentFrame*this.imgEffectWidth
//     this.imgEffectSrcY=0

//   }
// }
}
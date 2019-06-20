// let w = window.innerWidth
// let h = window.innerHeight
// let playerBalloon = new player()

class gameBackGround {
  constructor(){
    this.w = w
    this.h = h
    this.imgSkyFixed = new Image()
    this.imgSkyFixed.src = "images/Sky1.png"
    this.canvas=""
    this.ctx =""
    this.imgCloudsDay = new Image()
    this.imgCloudsDay.src = "images/Whitecloud.png"
    this.imgCloudsBack = new Image()
    this.imgCloudsBack.src = "images/Cloud9.png"
    this.imgNight = new Image()
    this.imgNight.src = "images/Sky3.png"
    this.imgNightClouds = new Image()
    this.imgNightClouds.src = "images/Yellow cloud.png"
    this.imgCloudsDayX = 0
    this.imgCloudsDayY = 0
    this.imgBackCloudsX = 0
    this.imgBackCloudsY = 0
    this.dayCloudDx = 10
    this.backCloudDx = 0.2
    this.imgRain = new Image()
    this.imgRain.src = "images/space-forground.png"

  }
  draw = () => {
    
    this.drawSky()
    this.drawBackGroundClouds()
    this.drawBackGroundClouds2()
    this.drawBackGroundClouds3()
    this.drawBackGroundClouds4()
    // playerBalloon.drawBird()
    this.drawFrontClouds()
    
    this.moveCloudDay()
    this.moveBackCloud()
  }
  drawNight = () => {
    this.drawSkyNight()
    this.drawBackGroundClouds()
    this.drawBackGroundClouds2()
    this.drawBackGroundClouds3()
    this.drawBackGroundClouds4()
    // playerBalloon.drawBird()
    this.drawNightClouds()
    this.moveCloudDay()
    // this.moveStars()
    this.moveBackCloud()
  }

  drawSky = () => {
    /** @type HTMLCanvasElement */
    this.canvas = document.querySelector("#gameCanvas");
     /** @type CanvasRenderingContext2D */
     this.ctx= this.canvas.getContext("2d");
    this.ctx.drawImage(this.imgSkyFixed, 0, 0, w, h);
  
  }
  drawFrontClouds = ()=>{
    this.ctx.drawImage(this.imgCloudsDay, this.imgCloudsDayX, this.imgCloudsDayY, w, h);
    this.ctx.drawImage(this.imgCloudsDay, this.imgCloudsDayX, this.imgCloudsDayY+this.h, w, h);
  }
  drawBackGroundClouds = ()=>{
    this.ctx.drawImage(this.imgCloudsBack, this.imgBackCloudsX, this.imgBackCloudsY, 100, 50);
    this.ctx.drawImage(this.imgCloudsBack, this.imgBackCloudsX, this.imgBackCloudsY+this.h, 100, 50);
  }
  drawBackGroundClouds2 = ()=>{
    this.ctx.drawImage(this.imgCloudsBack, this.imgBackCloudsX+1300, this.imgBackCloudsY, 200, 100);
    this.ctx.drawImage(this.imgCloudsBack, this.imgBackCloudsX+1300, this.imgBackCloudsY+this.h, 200, 100);
  }
  drawBackGroundClouds3 = ()=>{
    this.ctx.drawImage(this.imgCloudsBack, this.imgBackCloudsX, this.imgBackCloudsY, 800, 400);
    this.ctx.drawImage(this.imgCloudsBack, this.imgBackCloudsX, this.imgBackCloudsY+this.h, 800, 400);
  }
  drawBackGroundClouds4 = ()=>{
    this.ctx.drawImage(this.imgCloudsBack, this.imgBackCloudsX-500, this.imgBackCloudsY, w, h);
    this.ctx.drawImage(this.imgCloudsBack, this.imgBackCloudsX-500, this.imgBackCloudsY+this.h, w, h);
  }


  moveCloudDay = ()=> {
    this.imgCloudsDayY += this.dayCloudDx;

    if (this.imgCloudsDayY > this.h) this.imgCloudsDayY = -500;
  }
  moveBackCloud = ()=> {
    this.imgBackCloudsY += this.backCloudDx;

    if (this.imgBackCloudsY > this.h) this.imgBackCloudsY = -500;
  }
  drawSkyNight = () => {
    /** @type HTMLCanvasElement */
    this.canvas = document.querySelector("#gameCanvas");
     /** @type CanvasRenderingContext2D */
     this.ctx= this.canvas.getContext("2d");
   
    this.ctx.drawImage(this.imgNight, 0, 0, w, h);
  
  }
  drawNightClouds = ()=>{
    this.ctx.drawImage(this.imgNightClouds, this.imgCloudsDayX, this.imgCloudsDayY, w, h);
    this.ctx.drawImage(this.imgNightClouds, this.imgCloudsDayX, this.imgCloudsDayY+this.h, w, h);
  }

  drawRain = ()=> {
    this.ctx.drawImage(this.imgRain, this.imgCloudsDayX, this.imgCloudsDayY, w, h);
    this.ctx.drawImage(this.imgRain, this.imgCloudsDayX, this.imgCloudsDayY+h, w, h);
  }
  
}
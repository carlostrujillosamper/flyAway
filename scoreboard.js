
class scoreBoard {
  constructor(){
    this.canvas=""
    this.ctx =""
    this.score = 0 
  }
  increaseScore=()=>{
 this.score += 1
  }
  drawScoreBoard = () => {
    /** @type HTMLCanvasElement */
    this.canvas = document.querySelector("#gameCanvas");
     /** @type CanvasRenderingContext2D */
     this.ctx= this.canvas.getContext("2d");
    this.ctx.font = '80px Comic Sans MS';
    // this.ctx.font-weight = bolder
    this.ctx.fillStyle = "yellow";
    // this.ctx.strokeStyle = 'rgba(220,21,40,1)'
      this.ctx.fillText(`${this.score}mts`  , 50, 300);
  }
  getScore = () => {
    return this.score

  }
}
class GameOverTitle {
  constructor(){
    this.canvas=""
    this.ctx =""
    
    
  }
  
  drawScoreBoard = () => {
    /** @type HTMLCanvasElement */
    this.canvas = document.querySelector("#gameCanvas");
     /** @type CanvasRenderingContext2D */
     this.ctx= this.canvas.getContext("2d");
    this.ctx.font = '80px Comic Sans MS';
    // this.ctx.font-weight = bolder
    this.ctx.fillStyle = "yellow";
    // this.ctx.strokeStyle = 'rgba(220,21,40,1)'
      this.ctx.fillText(`FLy Away `, 500,500);

  }


  
  
}


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
    this.ctx.font = '80px myFirstFont';
    // this.ctx.font-weight = bolder
    this.ctx.fillStyle = "yellow";
    // this.ctx.strokeStyle = 'rgba(220,21,40,1)'
      this.ctx.fillText(`${this.score}mts`  , 1200, 100);
     
  }
  drawScoreMssg = () => {
    // /** @type HTMLCanvasElement */
    // this.canvas = document.querySelector("#gameCanvas");
    //  /** @type CanvasRenderingContext2D */
    //  this.ctx= this.canvas.getContext("2d");
    

       this.ctx.font = '20px myFirstFont';
       
       this.ctx.fillStyle = "yellow";
       
       
         this.ctx.fillText(`Life must be lived forwards `, 50,500);
     

  getScore = () => {
    return this.score

  }
}
// class GameOverTitle {
//   constructor(){
//     this.canvas=""
//     this.ctx =""
    
    
//   }
  
//   drawScoreMssg = () => {
//     /** @type HTMLCanvasElement */
//     this.canvas = document.querySelector("#gameCanvas");
//      /** @type CanvasRenderingContext2D */
//      this.ctx= this.canvas.getContext("2d");
//      if (this.score == 200){

//        this.ctx.font = '80px Comic Sans MS';
       
//        this.ctx.fillStyle = "yellow";
       
       
//          this.ctx.fillText(`Life must be lived forwards `, 50,500);
//      }

//   }


  
  
}

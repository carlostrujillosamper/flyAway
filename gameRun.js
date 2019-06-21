// const w = window.innerWidth
// const h = window.innerHeight
let background = new gameBackGround()

let effect = new Effect()


class game {
  constructor() {
    this.canvas=""
    this.ctx =""
    this.w = w
    this.h = h
    this.frameCounter=0
    this.key_right = 39;
    this.key_left = 37;
    this.powerUps = []
    this.effect = new Effect()
    this.intervalId = ''
    this.imgBird = new Image()
    this.imgBird.src = "images/Globitos.png"
    this.imgBird2 = new Image()
    this.imgBird2.src = "images/output-onlinepngtools02.png"
    this.playerBalloon = new Player(this.imgBird)
    // this.playerBalloon2 = new Player(this.imgBird2)
    this.balloons = []
    this.effects = []
    this.title = new Title()
    this.score = new scoreBoard()
    this.enemies = []
    this.gameOver = new GameOverTitle()
  }

  initGame= ()=>{
    /** @type HTMLCanvasElement */
    this.canvas = document.querySelector("#gameCanvas");
    /** @type CanvasRenderingContext2D */
    this.ctx= this.canvas.getContext("2d");
    // this.start();
    this.canvas.setAttribute("width", w)
    this.canvas.setAttribute("height", h)
    this.intervalId = setInterval (()=>{
      this.frameCounter++
      this.clear()
      
      if (this.frameCounter % 300 === 0) {
        this.generatePowerUps();
      }
      // if (this.frameCounter % 200 === 0) {
      //   this.generateEnemies();
      // }
      if (this.score.score< 100){
        if (this.frameCounter % 200 === 0) {
          this.generateEnemies();
        }
      }
      if (this.score.score> 100 && this.score.score<400){
        if (this.frameCounter % 150 === 0) {
          this.generateEnemies();
        }
      }
      if (this.score.score> 400 && this.score.score<800){
        if (this.frameCounter % 100 === 0) {
          this.generateEnemies();
        }
      }
      if (this.score.score> 800 ){
        if (this.frameCounter % 60 === 0) {
          this.generateEnemies();
        }
      }
      
      this.checkForPowerUps()
      this.checkForEnemies()
      this.chasePlayer()
      
      
      this.clearPowerUps()
      this.clearEnemies()

      if (this.frameCounter % 10 === 0){
        this.score.increaseScore()
      }

      // if (this.frameCounter %  60 === 0){
      //   background.drawRain()
      // }

      console.log(this.score.score)
      
       if (this.frameCounter < 1500){
        
        background.draw()
        
        this.playerBalloon.drawBird()
        
        
        
       
        this.score.drawScoreBoard()
        
        
        
        
      }else {
        
        background.drawNight()
        this.playerBalloon.drawBird()

        this.score.drawScoreBoard()
      }
          this.powerUps.forEach(powerUp =>  {
            powerUp.drawPowerUp();
          });
     
      if (this.frameCounter > 3000){
        this.frameCounter = 0
      }
      
      this.effects.forEach(effect =>  {
        effect.drawEffect();
      });
      this.balloons.forEach(balloon =>  {
        balloon.drawBird();
      });
      this.enemies.forEach(enemy =>  {
        enemy.drawEnemy();
        
      });
      
      
      

    },1000/60)
  }
  clear = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  generatePowerUps = () => {
    
    this.powerUps.push(new PowerUp(this))
      
    
  }
  generateEnemies = () => {
    
    this.enemies.push(new Enemy(this))
      
    
  }
  clearPowerUps = () => {
    this.powerUps = this.powerUps.filter((powerUp) =>{
      return powerUp.yBalloon <= this.h;
    
    });
    
  }
  clearEnemies = () => {
    this.enemies = this.enemies.filter((enemy) =>{
      return enemy.yBirds <= this.h;
    
    });
    
  }

  checkForPowerUps = () => {
     this.powerUps.forEach ((powerUp, index)=>{
      if (this.playerBalloon.xBalloon + 40 >= powerUp.xBalloon &&
        powerUp.xBalloon + 40 >= this.playerBalloon.xBalloon &&
        this.playerBalloon.yBalloon + 80 >= powerUp.yBalloon &&
        powerUp.yBalloon + 80 >= this.playerBalloon.yBalloon) {
          
          delete this.powerUps[index]

          this.effects.push(new Effect(powerUp.xBalloon,powerUp.yBalloon))
          
          this.playerBalloon.balloonqty += 1
         

        }
    })
  }
  checkForEnemies = () => {
    this.enemies.forEach ((enemy, index)=>{
     if (this.playerBalloon.xBalloon + 40 >= enemy.xBirds &&
       enemy.xBirds + 40 >= this.playerBalloon.xBalloon &&
       this.playerBalloon.yBalloon + 20>= enemy.yBirds &&
       enemy.yBirds + 20>= this.playerBalloon.yBalloon) {
         
         delete this.enemies[index]

         this.effects.push(new Effect(enemy.xBalloon,enemy.yBalloon))
         
         
        this.playerBalloon.balloonqty -= 1
      
       if (this.playerBalloon.balloonqty<0){
         this.stop()
       }

       }
   })
 }
 chasePlayer =()=>{
  this.enemies.forEach ((enemy)=>{
    // if (enemy.yBirds < this.playerBalloon.yBalloon) {
    //   enemy.yBirds += enemy.EnemySpeed
    // }
    // if (enemy.yBirds > this.playerBalloon.yBalloon){
    //   enemy.yBirds -= enemy.EnemySpeed
    // }
    enemy.yBirds += enemy.EnemySpeed;
    if (enemy.xBirds < this.playerBalloon.xBalloon) {
      enemy.xBirds += enemy.EnemySpeed
    }
    if (enemy.xBirds > this.playerBalloon.xBalloon) {
      enemy.xBirds -= enemy.EnemySpeed
    }
  })

 
 }
  
  stop = () => {
    alert("like Icarus ,you flew too close to the sun");
    document.location.reload()
    clearInterval(this.intervalId);
    
    
    
  }



  
}
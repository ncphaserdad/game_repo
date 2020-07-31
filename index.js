import Phaser from "phaser";

const gameState = {
  onColor: 0xaaffaa,
  offColor: 0xffaaaa,
  grid_x_value: 10,
  grid_y_value: 10,
  cell_size: 50,
  rect: []
};

function hide_jewels()
{

  
  //Loops through every x and y value in the grid
  for (var x = 0; x < gameState.grid_x_value; x++) {
    for (var y = 0; y < gameState.grid_y_value; y++) {

    
    
    }
  }
}

function preload()
{
  this.load.image('amber', 'jewels/amber.png');
}

function create() {

  //Max X size
  for (var x = 0; x < gameState.grid_x_value; x++) {
    gameState.rect.push([]);
    gameState.rect[x] = new Array();
    //Max Y size
    for (var y = 0; y < gameState.grid_y_value; y++) {

      //Log x and y to the console
      console.log("x="+x+", y=" + y);

      //create a rectangle at the given x and y with width of 50 and height of 50
      //draw it to the screen
      //store the created rectangle state in a 2 dimensional array at position x, y

      gameState.rect[x][y] = this.add.rectangle(
        (x * gameState.cell_size) + gameState.cell_size/2,
        (y * gameState.cell_size) + gameState.cell_size/2,
        gameState.cell_size,
        gameState.cell_size,
        gameState.onColor
      );

      //set the outline of the rectangle to a green color
      gameState.rect[x][y].setStrokeStyle(2, 0x1a65ac);

      // set gameState.rect2 as interactive here so we can listen for mouse clicks
      gameState.rect[x][y].setInteractive();

//When the mouse pointer is released up change the color of the rectangle that is clicked 
//on to the opposite color
      	//of the one it is currently set to. 
      
      gameState.rect[x][y].on("pointerup", function() {
        if (this.fillColor === gameState.onColor)
          this.fillColor = gameState.offColor;
        else this.fillColor = gameState.onColor;
      });
    }
  }
}

const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 500,
  backgroundColor: 0x333333,
  scene: {
    create, preload
  }
};

const game = new Phaser.Game(config);

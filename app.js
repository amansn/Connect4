//Create game-bard (X is empty, R is red pieces, B is black pieces)
//Game will be played sideways in JS and adjusted when displayed/played
var grid = [["X","X","X","X","X","X"],
            ["X","X","X","X","X","X"],
            ["X","X","X","X","X","X"],
            ["X","X","X","X","X","X"],
            ["X","X","X","X","X","X"],
            ["X","X","X","X","X","X"]
            ["X","X","X","X","X","X"]];

//Create players
var player1 = {
  name: "",
  numWins: 0
};
var player2 = {
  name: "",
  numWins: 0
};

//onload functions
//Ask player's names

window.onload = function() {
  askNames();
};

//Is the game currently being played?
var gameRunning = false;

//Who's turn is it?
var turn = player1.name;

//Starts game
var start = function() {
  gameRunning = true;

};

//Asks the players their names
var askNames = function() {
  player1.name = prompt("What's Player 1's name?");
  player2.name = prompt("What's Player 2's name?");
  //Checks if player2's name is different
  while (player2.name === player1.name) {
    alert("You can't have the same name! Choose again.");
    player2.name = prompt("What's Player 2's name?");
  }
};

//Make a move
var makeAMove = function() {
  //****Insert move by click here

};

//Check where piece will land in column
var placementChecker = function() {
  for (i = grid[move].length - 1; i >= 0; i++) {
    if (grid[move][i] === "X") {
      return i;
    } else {
      console.log("Can't move here! It's full!");
    }
  }
};

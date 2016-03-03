//Create game-bard (X is empty, R is red pieces, B is black pieces)
//Game will be played sideways in JS and adjusted when displayed/played
var grid = [["X","X","X","X","X","X"],
            ["X","X","X","X","X","X"],
            ["X","X","X","X","X","X"],
            ["X","X","X","X","X","X"],
            ["X","X","X","X","X","X"],
            ["X","X","X","X","X","X"],
            ["X","X","X","X","X","X"]];

//Create players
var player1 = {
  name: "",
  playerMark: "R",
  numWins: 0
};
var player2 = {
  name: "",
  playerMark: "B",
  numWins: 0
};
//Who's turn is it?
var turn;

//onload functions
//Ask player's names

window.onload = function() {
  askNames();
  turn = player1.name;
};

//Is the game currently being played?
var gameRunning = false;


//Variable for the move being made
var move;

//Starts game
var start = function() {
  console.log("Running start");
  gameRunning = true;
  playGame();
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

//Function for gameplay
var playGame = function() {
  console.log("Running playGame");
  while (gameRunning) {
    console.log("Running while loop");
    console.log("turn", turn);
    if (turn === player1.name) {
      console.log("running p1 turn");
      askMove();
      makeAMove(player1);
    } else if (turn === player2.name) {
      console.log("running p2 turn");
      askMove();
      makeAMove(player2);
      gameRunning = false;
    }
  };
};

//Ask player for move
var askMove = function() {
  //Figure out event listeners and return player's 'move'
  return move = grid[2];
};

//Make a move
var makeAMove = function(currentPlayer) {
  //****Insert move by click here
  placementChecker(move, currentPlayer);
};

//Check where piece will land in column
var placementChecker = function(move, currentPlayer) {
  for (i = move.length - 1; i >= 0; i--) {
    if (move[i] === "X") {
      turn = player2.name;
      return move[i] = currentPlayer.playerMark;
    }
  }
      console.log("Can't move here! Column's full!");
      askMove();
      makeAMove(move, currentPlayer);
};

//Check if anyone won
var checkIfWinner = function() {

};

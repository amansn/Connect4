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
var selectedTile;

//onload functions
//Ask player's names

window.onload = function() {
  askNames();
  turn = player1;
};

//Is the game currently being played?
var gameRunning = false;


//Variable for the move being made
var move;

//Starts game
var start = function() {
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
  while (gameRunning) {
    if (turn === player1) {
      console.log(grid);
      console.log("running p1 turn");
      askMove();
      makeAMove(player1);
      if (checkIfWinner(player1)) {
        console.log("Player 1 won!");
        player1.numWins++;
        gameRunning = false;
      };
    } else if (turn === player2) {
      console.log(grid);
      console.log("running p1 turn");
      askMove();
      makeAMove(player2);
      if (checkIfWinner(player2)) {
        console.log("Player 2 won!");
        player2.numWins++;
        gameRunning = false;
      };
    }
  };
};

//Ask player for move
var askMove = function() {
  //Figure out event listeners and return player's 'move'
  move = parseInt(prompt("Pick a column"));
};

//Make a move
var makeAMove = function(currentPlayer) {
  //****Insert move by click here
  placementChecker(move, currentPlayer);
};

//Check where piece will land in column
var placementChecker = function(move, currentPlayer) {
  for (i = grid[move].length - 1; i >= 0; i--) {
    if (grid[move][i] === "X") {
      selectedTile = i;
      if (turn === player1) {
      turn = player2;
    } else {
      turn = player1;
    }
      return grid[move][i] = currentPlayer.playerMark;
    }
  }
  console.log("Can't move here! Column's full!");
};

//Check if anyone won
var checkIfWinner = function(currentPlayer) {
//Run column check
if (colCheck(selectedTile)) {
  return true;
};
//Run row check
if (rowCheck(selectedTile)) {
  return true;
};
//Run diagonal check
if (diagCheck(selectedTile, turn.playerMark)) {
  return true;
};
};

//Function for column check
var colCheck = function(selectedTile) {
  console.log("Move is:", move);
  console.log("This is colCheck running and logging selectedTile:", selectedTile);
  for (i = -3; i <= 0; i++) {
  //Check if selectedTile is position 1
    if (grid[move][selectedTile] !== undefined &&
        grid[move][selectedTile + i] === grid[move][selectedTile + (i + 1)] &&
        grid[move][selectedTile + (i + 1)] === grid[move][selectedTile + (i + 2)] &&
        grid[move][selectedTile + (i + 2)] === grid[move][selectedTile + (i + 3)]) {
          console.log("Option", (i + 4));
          return true;
    }
  }
  return false;
};

//Function for row check
var rowCheck = function(selectedTile) {
  for (i = -3; i <= 0; i++) {
  console.log("move is", move);
  console.log("i is", i);
    if (((move + i) >= 0) && (move + (i + 3) <= 6)) {
      console.log("since " + move + " - " + i + " is > 0, running it");
      if (grid[move][selectedTile] !== undefined &&
          grid[move + i][selectedTile] === grid[move + (i + 1)][selectedTile] &&
          grid[move + (i + 1)][selectedTile] === grid[move + (i + 2)][selectedTile] &&
          grid[move + (i + 2)][selectedTile] === grid[move + (i + 3)][selectedTile]) {
            console.log("Option", (i + 4));
            return true;
      }
    }
  }
  return false;
};

//Function for diagonal check
var diagCheck = function(selectedTile, currentPlayerX) {
  for (i = -3; i <= 0; i++) {
  console.log("move is", move);
  console.log("i is", i);
    if (((move + i) >= 0) && (move + (i + 3) <= 6)) {
      console.log("since " + move + " - " + i + " is >= 0, running it");
      if (grid[move][selectedTile] !== undefined &&
          grid[move + i][selectedTile + i] === currentPlayerX &&
          grid[move + (i + 1)][selectedTile + (i + 1)] === currentPlayerX &&
          grid[move + (i + 2)][selectedTile + (i + 2)] === currentPlayerX &&
          grid[move + (i + 3)][selectedTile + (i + 3)] === currentPlayerX) {
            console.log("Option", (i + 4));
            return true;
      } else if (grid[move][selectedTile] !== undefined &&
          grid[move + i][selectedTile + i] === currentPlayerX &&
          grid[move + (i + 1)][selectedTile + (i - 1)] === currentPlayerX &&
          grid[move + (i + 2)][selectedTile + (i - 2)] === currentPlayerX &&
          grid[move + (i + 3)][selectedTile + (i - 3)] === currentPlayerX) {
            return true;
      }
    }
  }
  return false;
};

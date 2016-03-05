//Create game-bard (X is empty, R is red pieces, B is black pieces)
//Game will be played sideways in JS and adjusted when displayed/played
var grid = [["X","X","X","X","X","X"],
            ["X","X","X","X","X","X"],
            ["X","X","X","X","X","X"],
            ["X","X","X","X","X","X"],
            ["X","X","X","X","X","X"],
            ["X","X","X","X","X","X"],
            ["X","X","X","X","X","X"]];

//Create variables for the divs
//Select each individual column
var column1 = document.querySelector("#game_column_container_1");
var column2 = document.querySelector("#game_column_container_2");
var column3 = document.querySelector("#game_column_container_3");
var column4 = document.querySelector("#game_column_container_4");
var column5 = document.querySelector("#game_column_container_5");
var column6 = document.querySelector("#game_column_container_6");
var column7 = document.querySelector("#game_column_container_7");

//Select all of the tile divs
var columnArray1 = document.querySelectorAll(".game_column_1");
var columnArray2 = document.querySelectorAll(".game_column_2");
var columnArray3 = document.querySelectorAll(".game_column_3");
var columnArray4 = document.querySelectorAll(".game_column_4");
var columnArray5 = document.querySelectorAll(".game_column_5");
var columnArray6 = document.querySelectorAll(".game_column_6");
var columnArray7 = document.querySelectorAll(".game_column_7");

//Create an array with all of the columns
var columnArrayMain = [columnArray1, columnArray2, columnArray3, columnArray4, columnArray5, columnArray6, columnArray7];

//Create players
var player1 = {
  name: "Player 1",
  playerMark: "R",
  numWins: 0,
  color: "white"
};
var player2 = {
  name: "Player 2",
  playerMark: "B",
  numWins: 0,
  color: "#044c62"
};
//Who's turn is it?
var turn;

//The actual tile that is selected
var selectedTile;

//Is there a winner for the current game?
var isThereAWinner = false;

//onload functions
//Ask player's names
window.onload = function() {
  turn = player1;
  // askNames();
};

//Is the game currently being played?
var gameRunning = false;


//Variable for the move being made
var move;

//Starts game
var start = function() {
  gameRunning = true;
  clearBoard();
  playButton.innerText = "Game in session";
  playButton.setAttribute("id","play_button_B");
  playButton.removeEventListener("click", start);
  return playGame();
};

//Function to clear the gameboard
var clearBoard = function() {
  for (i = 0; i < columnArrayMain.length; i++) {
    for (j = 0; j < columnArrayMain[i].length; j++) {
      columnArrayMain[i][j].style.background = "#0ca7d3";
    }
  }
  grid = [["X","X","X","X","X","X"],
          ["X","X","X","X","X","X"],
          ["X","X","X","X","X","X"],
          ["X","X","X","X","X","X"],
          ["X","X","X","X","X","X"],
          ["X","X","X","X","X","X"],
          ["X","X","X","X","X","X"]];
}

//Get play button to start game
var playButton = document.querySelector("#play_button");
playButton.addEventListener("click", start);

//Asks the players their names
var askNames = function() {
  player1.name = prompt("What's Player 1's name?");
  document.querySelector("#player1_name").innerText = player1.name;
  player2.name = prompt("What's Player 2's name?");
  document.querySelector("#player2_name").innerText = player2.name;

  //Checks if player2's name is different
  while (player2.name === player1.name) {
    alert("You can't have the same name! Choose again.");
    player2.name = prompt("What's Player 2's name?");
  }
};

//Function for gameplay
var playGame = function() {
  buildEventListeners(turn);
};

//Needed to name function to allow event listener
var col1Click = function(){
    console.log("adding listener for player", turn);
    return askMove(0, turn);
}
var col2Click = function(){
    console.log("adding listener for player", turn);
    return askMove(1, turn);
}
var col3Click = function(){
    console.log("adding listener for player", turn);
    return askMove(2, turn);
}
var col4Click = function(){
    console.log("adding listener for player", turn);
    return askMove(3, turn);
}
var col5Click = function(){
    console.log("adding listener for player", turn);
    return askMove(4, turn);
}
var col6Click = function(){
    console.log("adding listener for player", turn);
    return askMove(5, turn);
}
var col7Click = function(){
    console.log("adding listener for player", turn);
    return askMove(6, turn);
}
//Build the event listeners
var buildEventListeners = function(currentPlayer) {
  column1.addEventListener("click", col1Click);
  column2.addEventListener("click", col2Click);
  column3.addEventListener("click", col3Click);
  column4.addEventListener("click", col4Click);
  column5.addEventListener("click", col5Click);
  column6.addEventListener("click", col6Click);
  column7.addEventListener("click", col7Click);
};

//Ask player for move
var askMove = function(clickedCol, currentPlayer) {
  //Figure out event listeners and return player's 'move'
  move = clickedCol;
  console.log("Move is", move);
  return makeAMove(currentPlayer)
};

//Make a move
var makeAMove = function(currentPlayer) {
  placementChecker(move, currentPlayer);
  return declareWinner();
};

//Check where piece will land in column
var placementChecker = function(move, currentPlayer) {
  for (i = grid[move].length - 1; i >= 0; i--) {
    if (grid[move][i] === "X") {
      selectedTile = i;
      columnArrayMain[move][i].style.background = currentPlayer.color;
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
  for (i = -3; i <= 0; i++) {
  //Check if selectedTile is position 1
    if (grid[move][selectedTile] !== undefined &&
        grid[move][selectedTile + i] === grid[move][selectedTile + (i + 1)] &&
        grid[move][selectedTile + (i + 1)] === grid[move][selectedTile + (i + 2)] &&
        grid[move][selectedTile + (i + 2)] === grid[move][selectedTile + (i + 3)]) {
          return true;
    }
  }
  return false;
};

//Function for row check
var rowCheck = function(selectedTile) {
  for (i = -3; i <= 0; i++) {
    if (((move + i) >= 0) && (move + (i + 3) <= 6)) {
      if (grid[move][selectedTile] !== undefined &&
          grid[move + i][selectedTile] === grid[move + (i + 1)][selectedTile] &&
          grid[move + (i + 1)][selectedTile] === grid[move + (i + 2)][selectedTile] &&
          grid[move + (i + 2)][selectedTile] === grid[move + (i + 3)][selectedTile]) {
            return true;
      }
    }
  }
  return false;
};

//Function for diagonal check
var diagCheck = function(selectedTile, currentPlayerX) {
  for (i = -3; i <= 0; i++) {
    if (((move + i) >= 0) && (move + (i + 3) <= 6)) {
      if (grid[move][selectedTile] !== undefined &&
          grid[move + i][selectedTile + i] === currentPlayerX &&
          grid[move + (i + 1)][selectedTile + (i + 1)] === currentPlayerX &&
          grid[move + (i + 2)][selectedTile + (i + 2)] === currentPlayerX &&
          grid[move + (i + 3)][selectedTile + (i + 3)] === currentPlayerX) {
            return true;
      } else if (grid[move][selectedTile] !== undefined &&
          grid[move + i][selectedTile - i] === currentPlayerX &&
          grid[move + (i + 1)][selectedTile + -1*(i + 1)] === currentPlayerX &&
          grid[move + (i + 2)][selectedTile + -1*(i + 2)] === currentPlayerX &&
          grid[move + (i + 3)][selectedTile + -1*(i + 3)] === currentPlayerX) {
            return true;
      }
    }
  }
  return false;
};
var declareWinner = function() {
  if (checkIfWinner(player1) && turn === player1) {
    loadModal(player1, player2);
    console.log("Player 1 won!");
    player1.numWins++;
    endClick();
    gameInfoChanges();
    playButton.innerText = "Play again";
    playButton.addEventListener("click", start);
    playButton.setAttribute("id","play_button");
    return gameRunning = false;
  } else if (checkIfWinner(player2) && turn === player2) {
    loadModal(player2, player1);
    console.log("Player 2 won!");
    player2.numWins++;
    endClick();
    gameInfoChanges();
    playButton.innerText = "Play again";
    playButton.addEventListener("click", start);
    playButton.setAttribute("id","play_button");
    return gameRunning = false;
  } else {
    changeTurns();
  }
}

//Function to alternate turns
var changeTurns = function() {
    if (turn === player1) {
    turn = player2;
  } else {
    turn = player1;
  }
};


//Function to end the event listeners on the gameboard
var endClick = function() {
  column1.removeEventListener("click", col1Click);
  column2.removeEventListener("click", col2Click);
  column3.removeEventListener("click", col3Click);
  column4.removeEventListener("click", col4Click);
  column5.removeEventListener("click", col5Click);
  column6.removeEventListener("click", col6Click);
  column7.removeEventListener("click", col7Click);
}

//Makes changes to the game info once game ends, i.e. score, buttons, etc.
var gameInfoChanges = function() {
  document.querySelector("#player1_wins").innerText = player1.numWins;
  document.querySelector("#player2_wins").innerText = player2.numWins;
}

//Loads the modal on game end
var loadModal = function(winningPlayer, losingPlayer) {
  document.querySelector(".modal_overlay").style.display = "flex";
  document.querySelector(".modal_box").style.display = "block";
  document.querySelector("#modal_headline_span").innerText = winningPlayer.name;
  document.querySelector("#modal_headline_span2").innerText = losingPlayer.name;
}

//Functionality for the modal's close button
document.querySelector("#modal_close_button").addEventListener("click", function(){
  document.querySelector(".modal_overlay").style.display = "none";
  document.querySelector(".modal_box").style.display = "none";
});

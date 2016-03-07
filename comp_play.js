//Computer variable

var compPlayer = {
  name: "Computer",
  playerMark: "B",
  numWins: 0,
  color: "#044c62"
};

//Playing 2 player or playing versus computer?
var gameType;

//Function for the computer's move
var runComputerMove = function() {
move = Math.ceil(Math.random()*6);
return askMove(move, turn);
};

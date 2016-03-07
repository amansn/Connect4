Connect 4
by Aman Nagpal

- For my project, I built a game of Connect 4.
- I initially built a game that would be played between two human players, but I tried adding in a single player version that is played against the computer.
- Both game types work correctly, but I wasn't able to complete a way for the computer to determine the next best possible move. As of right now, the computer randomly selects a place for the next piece to be placed.

- I used nested arrays to serve as the game grid. It was simpler to run the game "horizontally" in JavaScript and then visually turn it in the DOM to play the game with the pieces falling downwards.
- To translate the user's clicks into a correct move, I used event listeners on the game columns. Once a user clicks on the column, the script checks if the move is valid (i.e. there is an empty slot), and then changes the background color of the div where the piece is to be placed.
- The most difficult part of this was to check when a player had actually won. I had to create individual functions to check whether a player had won vertically, horizontally, or diagonally.

/*
// This section comes from: https://www.youtube.com/watch?v=Z_IaJQojun8&ab_channel=JustinKim
//
//If we use a table instead of divs we can use these for targeting
var tableRow = document.getElementsByTagName('tr');
var tableData = document.getElementsByTagName('td');
var playerTurn = document.querySelector('.player-turn');
//All cell had the class of "slot" put on them
const slots = document.querySelectorAll('.slot');
const resetBtn = document.querySelector('.reset');
// Log cell coordinates when clicked
for (i = 0; i < tableData.length; i ++){
    tableData[i].addEventListener('click', (e) =>{
        console.log(`${e.target.parentElement.rowIndex},${e.target.cellIndex}`)
    }
//The actual change color bit that works with the concepts logged above
function changeColor(e){
    // Get clicked column index
    let column = e.target.cellIndex;
    let row = [];
    for (i = 5; i > -1; i--){
        //Changing everything to be coin images that drop down may cause errors here
        if (tableRow[i].children[column].style.backgroundColor == 'white'){
            row.push(tableRow[i].children[column]);
            if (currentPlayer === 1){
                row[0].style.backgroundColor = 'red';
                if (horizontalCheck() || verticalCheck() || diagonalCheck() || diagonalCheck2()){
                    playerTurn.textContent = `${player1} WINS!!`;
                    playerTurn.style.color = player1Color;
                    return alert(`${player1} WINS!!`);
                }else if (drawCheck()){
                    playerTurn.textContent = 'DRAW!';
                    return alert('DRAW!');
                }else{
                    playerTurn.textContent = `${player2}'s turn`
                    return currentPlayer = 2;
                }
            }else{
                row[0].style.backgroundColor = 'yellow';
                if (horizontalCheck() || verticalCheck() || diagonalCheck() || diagonalCheck2()){
                    playerTurn.textContent = `${player2} WINS!!`;
                    playerTurn.style.color = player2Color;
                    return alert(`${player2} WINS!!`);
                }else if (drawCheck()){
                    playerTurn.textContent = 'DRAW!';
                    return alert('DRAW!');
                }else{
                    playerTurn.textContent = `${player1}'s turn`;
                    return currentPlayer = 1;
                }
                
            }
        }
    }
   
}
//Example of childNodes
var index = 1; // second element
var child = document.getElementById('id33322010100167').childNodes[index]
*/

/*
//These sections come from https://www.youtube.com/watch?v=Hi5hEH1KNEc&ab_channel=JustinKim
const getCellLocation = (cell) => {
  const classList = getClassListArray(cell);
  const rowClass = classList.find(className => className.includes('row'));
  const colClass = classList.find(className => className.includes('col'));
  const rowIndex = rowClass[4];
  const colIndex = colClass[4];
  const rowNumber = parseInt(rowIndex, 10);
  const colNumber = parseInt(colIndex, 10);
  return [rowNumber, colNumber];
};
This one seems more complicated and I would prefer to use the table method of the section above for the table pre-built functions
*/

//==============================Global Variable Setup==============================

//Setup, might need to find a way to not select top row of locations for hover arrow to appear, try making them th instead of tr elements?
let tableRows = document.getElementsByTagName('tr');
let tableDataCells = document.getElementsByTagName('td');
//This needs a div setup with this class
let activePlayer = document.getElementById('activePlayer');

//LOOKHERE: change later to something that reads out of memory
let player1Name = 'Bob';
let player2Name = 'Jeff';
let player1Color = 'dogecoin1';
let player2Color = 'dogecoin2';



/*
//Add some sort of event listener here that will call dropToken when triggered
//This one chould just log the click location
for (i = 0; i < tableDataCells.length; i ++){
  tableDataCells[i].addEventListener('click', (e) =>{
      console.log(`${e.target.parentElement.rowIndex},${e.target.cellIndex}`)
      dropToken(e);
  });
};
*/

//event listener v2
const arrows = document.getElementsByClassName('arrow');

for(let arrow of arrows){
  arrow.addEventListener('click', (e) =>{
    dropToken(e);
  });
}

//==============================Token Placing==============================

//If column clicked look through and replace "highest" index, which is at bottom of board, with new color
//In the future the background color change might need to be replaced with adding an <img> element within the target cell location instead of changing background color
function dropToken (clickEvent){

  let columnIndex = null;
  let yIndex = null;

  //Look through all the down arrows
  for (let i = 0; i < arrows.length; i++){
    
    //If the event arrow is the same as that index array
    if(clickEvent.target === arrows[i].children[0].children[0]){

      //that is your column
      columnIndex = i;
    }
  }

  //Get column index from click event
  //let columnIndex = clickEvent.target.cellIndex;
  let target = null;

  //Look through column from bottom to top
  for (i = 5; i > -1; i--){
    
    //check for "white" background or whatever empty is
    if (tableRows[i].children[columnIndex].className === 'white'){
      
      //Put all target cells in that column with the white background or whatever into an array
      target = tableRows[i].children[columnIndex];

      //Store Y value for later use in winning check
      yIndex = i;

      //After finding the lowest empty slot break out of the for loop by changing i
      i = -5;
    }
  }

  //Check to see who is the active player making this move
  if(activePlayer.textContent === player1Name){

    //change target background color to active player color
    target.className = player1Color;

    //Check for win, will implement after board can be setup
    console.log(columnIndex);
    console.log(yIndex);
    checkLocation(columnIndex, yIndex, player1Color);

    //Change active player
    activePlayer.textContent = player2Name;

  }else if(activePlayer.textContent === player2Name){

    //change target background color to active player color
    target.className = player2Color;

    //Check for win, will implement after board can be setup
    checkLocation(columnIndex, yIndex, player2Color);
    
    //Change active player
    activePlayer.textContent = player1Name;

  }else{
    console.log("Invalid player name")
  }

}

//==============================Winning Move Check Logic==============================

//Larger calling function
//If this is called after the token has been placed we can remove colorTarget variable and compute that in this function
//Maybe have it so in the running you call it after placing token and look up that target location for the color target, and later in predictive testing we feed it the color to keep the board state where it is
function checkLocation (xCord, yCord, colorTarget){
  
  //Setup local variables and data holders
  checkResultsArray = [0,0,0,0,0,0,0,0];
  winningState = false;
  
  //Run the recursive function in each direction
  for(let i = 0; i < 8; i ++){
    checkResultsArray[i] = checkDirection(xCord, yCord, i, colorTarget);
  }

  //Look through each ray and see if any are long enough to win without the opposong direction
  for(let result of checkResultsArray){
    if (result > 3){
      winningState = true;
    }
  }
  
  //Add together opposing directions to see total length
  let ray1 = checkResultsArray[0] + checkResultsArray[4];
  let ray2 = checkResultsArray[1] + checkResultsArray[5];
  let ray3 = checkResultsArray[2] + checkResultsArray[6];
  let ray4 = checkResultsArray[3] + checkResultsArray[7];

  //If any length large enough of opposing pairs enter win state. Need 5 because center point will be counted on each ray so you get one additional increment of the length
  if(ray1 > 4 || ray2 > 4 || ray3 > 4 || ray4 > 4){
    //This is a winning move
    winningState = true;
  }
  
  
  if(winningState){
    console.log('You Win');
    //LOOKHERE this is where win logic should go
  }

}

//Single Recursive Bit
function checkDirection (xCord, yCord, direction, colorTarget){

  //Setup local variables for this call of the function
  let depth = 0;
  let validNextTarget = true;

  //Check if this cell is correct color
  target = tableRows[yCord].children[xCord];
  console.log(target);

  if(target.className === colorTarget){
    depth++;

    console.log('old cords' + xCord + yCord);
  
    //Moved updating of peak location into it's own function
    let newCords = updateCords(xCord, yCord, direction);
    xCord = newCords[0];
    yCord = newCords[1];
  
    console.log('new cords' +newCords);
  
    //Check if next calculated location is valid, and if not change gating boolean
    if(xCord < 0 || xCord > 6 || yCord < 0 || yCord > 5 || xCord == null || yCord == null){
      validNextTarget = false;
    }

  }


  //If we found the correct token to increment depth and the next target is valid run it again
  if(validNextTarget && depth){
    depth += checkDirection (xCord, yCord, direction, colorTarget);
  }

  //Kick this functions amount of checking up to the parent call of it
  return depth;

}

function updateCords (xCord, yCord, direction){
  //Based on direction value modify target location
  //0 = north, 1 = northeast, 2 = east, 3 = southeast etc.
  switch(direction) {
    case 0:
      // N
      yCord --;
      break;

    case 1:
      // NE
      xCord++;
      yCord--;
      break;

    case 2:
      // E
      xCord++;
      break;

    case 3:
      // SE
      xCord++;
      yCord++;
      break;

    case 4:
      // S
      yCord++;
      break;

    case 5:
      // SW
      xCord--;
      yCord++;
      break;

    case 6:
      // W
      xCord--;
      break;

    case 7:
      // NW
      xCord--;
      yCord++;
      break;

    default:
      // No matches gives error message and stops further iterations
      console.log("Invalid Direction Given");
      return [null, null];
  }

  //Return the computed value in an array with xCord then yCord
  return [xCord, yCord];

}
// ========================Reset Button For Board ============================
 
function resetBoard() {
  for(let coinArea of tableDataCells) {
    coinArea.className = 'white';
  }
  activePlayer.textContent = player1Name;
}


resetButton.addEventListener('click',resetBoard)
//==============================Computer Logic Area==============================

  //Is any available move a win

  //Is the move above what I would do a win for the oponent

  //If I move here how many future moves let me win

  //Which move returns the largest ray value

  //Something that lets us control the search depth for recursive function calling. This will need to be careful though because a search depth of n means 8^n computations. What is the result of these 8 moves, of those 8 moves what would the opponent response be out of the 8 possibles, for each of those 8 possibles what are my 8 responding moves going to accomplish, and so on
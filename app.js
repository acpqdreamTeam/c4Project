//Larger calling function
//If this is called after the token has been placed we can remove colorTarget variable and compute that in this function
function checkLocation (xCord, yCord, colorTarget){
  
  //Setup local variables and data holders
  checkResultsArray = [0,0,0,0,0,0,0,0];
  
  for(let i = 0; i < 8; i ++){
    checkResultsArray[i] = checkDirection(xCord, yCord, i, colorTarget);
  }

  //Add together opposing directions to see total length
  let ray1 = checkResultsArray[0] + checkResultsArray[4];
  let ray2 = checkResultsArray[1] + checkResultsArray[5];
  let ray3 = checkResultsArray[2] + checkResultsArray[6];
  let ray4 = checkResultsArray[3] + checkResultsArray[7];

  //If any length large enough found you win. Searching for a length of 3 because we assume target location will either already have or will soon get the target color
  if(ray1 > 2 || ray2 > 2 || ray3 > 2 || ray4 > 2){
    //This is a winning move
  }

}

//Single Recursive Bit
function checkDirection (xCord, yCord, direction, colorTarget){

  //Setup local variables for this call of the function
  let depth = 0;
  let validNextTarget = true;

  //Check if this cell is correct color
  if(gameBoard[xCord][yCord] == colorTarget){
    depth ++;
  }

  //Based on direction value modify target location
  //0 = north, 1 = northeast, 2 = east, 3 = southeast etc.
  switch(direction) {
    case 0:
      // N
      yCord ++;
      break;

    case 1:
      // NE
      xCord++;
      yCord++;
      break;

    case 2:
      // E
      xCord++;
      break;

    case 3:
      // SE
      xCord++;
      yCord--;
      break;

    case 4:
      // S
      yCord--;
      break;

    case 5:
      // SW
      xCord--;
      yCord--;
      break;

    case 6:
      // W
      xCord--;
      break;

    case 7:
      // NW
      xCord++;
      yCord--;
      break;

    default:
      // No matches gives error message and stops further iterations
      console.log("Invalid Direction Given");
      validNextTarget = false;
  }

  //Check if next calculated location is valid, and if not change gating boolean
  if(xCord < 0 || xCord > 7 || yCord < 0 || yCord > 6){
    validNextTarget = false;
  }

  //If we found the correct token to increment depth and the next target is valid run it again
  if(validNextTarget && depth){
    depth += checkDirection (xCord, yCord, direction, colorTarget);
  }

  //Kick this functions amount of checking up to the parent call of it
  return depth;

}
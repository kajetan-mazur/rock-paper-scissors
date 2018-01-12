let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;
let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

const setPlayerMoves = (playerName,pMoveOne,pMoveOneValue,pMoveTwo,pMoveTwoValue,pMoveThree,pMoveThreeValue) => {
 if(!playerName||!pMoveOne||!pMoveOneValue||!pMoveTwo||!pMoveTwoValue||!pMoveThree||!pMoveThreeValue){
   return;
 }

 function isValidMoveValue(moveValue){
   return (moveValue>=1) && (moveValue<=97);
 }

 function isValidMoveType(moveType){
   return (moveType==='scissors')||(moveType==='rock')||(moveType==='paper');
 }

 if(!isValidMoveType(pMoveOne)||!isValidMoveType(pMoveTwo)||!isValidMoveType(pMoveThree)){
   return;
 }

 if(!isValidMoveValue(pMoveOneValue)||!isValidMoveValue(pMoveTwoValue)||!isValidMoveValue(pMoveThreeValue)){
   return;
 }

 if((pMoveOneValue + pMoveTwoValue + pMoveThreeValue) > 99){
   return;
 }

if(playerName==='Player One'){
   playerOneMoveOneType = pMoveOne;
   playerOneMoveOneValue = pMoveOneValue;
   playerOneMoveTwoType = pMoveTwo;
   playerOneMoveTwoValue = pMoveTwoValue;
   playerOneMoveThreeType = pMoveThree;
   playerOneMoveThreeValue = pMoveThreeValue;
 } else if (playerName==='Player Two'){
    playerTwoMoveOneType = pMoveOne;
    playerTwoMoveOneValue = pMoveOneValue;
    playerTwoMoveTwoType = pMoveTwo;
    playerTwoMoveTwoValue = pMoveTwoValue;
    playerTwoMoveThreeType = pMoveThree;
    playerTwoMoveThreeValue = pMoveThreeValue;
 }
}

const getMoveWinner = (playerOneMoveType,playerOneMoveValue,playerTwoMoveType,playerTwoMoveValue) => {
  if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType ||
      !playerTwoMoveValue) {
    return null;
  }
      if(playerOneMoveType==='rock'){
        if(playerTwoMoveType==='scissors'){
          return `Player One`;
        } else if(playerTwoMoveType==='paper'){
          return `Player Two`;
        } else if(playerTwoMoveType==='rock'){
            if(playerOneMoveValue>playerTwoMoveValue){
            return `Player One`;
          } else if(playerOneMoveValue<playerTwoMoveValue){
            return `Player Two`;
          } else if(playerOneMoveValue===playerTwoMoveValue) {
            return `Tie`;
          } else { return null;}
        }
      } else if(playerOneMoveType==='scissors'){
          if(playerTwoMoveType==='rock'){
            return `Player Two`;
          } else if(playerTwoMoveType==='paper'){
            return `Player One`;
          } else if(playerTwoMoveType==='scissors') {
            if(playerOneMoveValue>playerTwoMoveValue){
              return `Player One`;
            } else if(playerOneMoveValue<playerTwoMoveValue){
              return `Player Two`;
            } else if(playerOneMoveValue===playerTwoMoveValue){
              return `Tie`;
            } else { return null;}
          }
      } else if(playerOneMoveType==='paper'){
          if(playerTwoMoveType==='rock'){
          return `Player One`;
        } else if(playerTwoMoveType==='scissors'){
          return `Player Two`;
        } else if(playerTwoMoveType==='paper') {
          if(playerOneMoveValue>playerTwoMoveValue){
            return `Player One`;
          } else if(playerOneMoveValue<playerTwoMoveValue){
            return `Player Two`;
          } else if(playerOneMoveValue===playerTwoMoveValue){
            return `Tie`;
          } else { return null;}
        }
      } else { return null;}
  }

  const getRoundWinner = (roundNumber) => {
    switch(roundNumber){
      case 1:
        return getMoveWinner(playerOneMoveOneType,playerOneMoveOneValue,playerTwoMoveOneType,playerTwoMoveOneValue);
      case 2:
        return getMoveWinner(playerOneMoveTwoType,playerOneMoveTwoValue,playerTwoMoveTwoType,playerTwoMoveTwoValue);
      case 3:
        return getMoveWinner(playerOneMoveThreeType,playerOneMoveThreeValue,playerTwoMoveThreeType,playerTwoMoveThreeValue);
      default:
        return null;
    }
 }

 const getGameWinner = () => {
    let arrayOfRoundWinners = [getRoundWinner(1),getRoundWinner(2),getRoundWinner(3)];
    let playerOneWins=0;
    let playerTwoWins=0;
    let tieWins=0;
    for(let i = 0;i<3;i++){
        if(arrayOfRoundWinners[i]==='Player One'){
        playerOneWins++;
      } else if(arrayOfRoundWinners[i]==='Player Two'){
        playerTwoWins++;
      } else if(arrayOfRoundWinners[i]==='Tie'){
        tieWins++;
      } else {return null;}
    }
    if(playerOneWins>playerTwoWins && playerOneWins>tieWins){
      return 'Player One';
    } else if(playerTwoWins>playerOneWins && playerTwoWins>tieWins){
      return 'Player Two';
    } else { return 'Tie';}
 }

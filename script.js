var maxScore = 11; // Maximum score to win the match
var servingPlayer = "player1"; // Starting player to serve the ball
var player1Serves = 2; // Number of serves remaining for Player 1
var player2Serves = 2; // Number of serves remaining for Player 2
var player1Wins = 0; // Number of times Player 1 wins
var player2Wins = 0; // Number of times Player 2 wins

// Function to increase the score of the specified player
function increaseScore(player) {
  var scoreElement = document.getElementById(player + "-score");
  var currentScore = parseInt(scoreElement.innerHTML);
  var updatedScore = currentScore + 1;
  scoreElement.innerHTML = updatedScore;

  var e1 = document.getElementById("player1-score");
  var p1Score = parseInt(e1.innerHTML);

  var e2 = document.getElementById("player2-score");
  var p2Score = parseInt(e2.innerHTML);

  var sum =p1Score+p2Score;
  var sum2 = Math.floor(sum/2);

  if (sum2==1 | sum2==3 | sum2==5){
    toggleServingPlayer('player2')
  }
  else {
    toggleServingPlayer('player1')
  }
 
  // Check if a player has reached the maximum score
  if (updatedScore === maxScore) {
    if (player === "player1") {
      player1Wins++;
      document.getElementById("player1-wins").innerHTML = player1Wins;
    } else {
      player2Wins++;
      document.getElementById("player2-wins").innerHTML = player2Wins;
    }
    alert("Player " + player.slice(-1) + " wins the match!");
    resetScores();
  }

  // Check serving rules when the score is 10-10
  if (currentScore === 10 && updatedScore === 10) {
    player1Serves = 1;
    player2Serves = 1;
  } else {
    if (player === "player1") {
      player1Serves--;
    } else {
      player2Serves--;
    }
  }
}

// Function to reset the scores to zero
function resetScores() {
  var scoreElements = document.querySelectorAll(".player span");
  scoreElements.forEach(function (scoreElement) {
    scoreElement.innerHTML = "0";
  });

  player1Serves = 2;
  player2Serves = 2;
}

// Function to toggle serving player
function toggleServingPlayer(player) {
  var player1Button = document.getElementById("player1-button");
  var player2Button = document.getElementById("player2-button");

  if (player === "player1") {
    player1Button.classList.add("serving");
    player2Button.classList.remove("serving");
    servingPlayer = "player1";
  } else {
    player1Button.classList.remove("serving");
    player2Button.classList.add("serving");
    servingPlayer = "player2";
  }

  // Update serving indicator
  var servingIndicator = document.getElementById("serving-indicator");
  servingIndicator.innerHTML = "Serving: Player " + servingPlayer.slice(-1);
}

// Function to reset the match
function resetMatch() {
  resetScores();
  player1Wins = 0;
  player2Wins = 0;
  document.getElementById("player1-wins").innerHTML = player1Wins;
  document.getElementById("player2-wins").innerHTML = player2Wins;
}

// Initial serving player indication
toggleServingPlayer(servingPlayer);

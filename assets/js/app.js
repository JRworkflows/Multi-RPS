// * Only two users can play at the same time.

// all properties that have to do with game

// * Both players pick either `rock`, `paper` or `scissors`. After the players make their selection, the game will tell them whether a tie occurred or if one player defeated the other.

// * The game will track each player's wins and losses.

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA5eYKsB8T2q6rMGdKSvac6eQsWTzsZEjE",
    authDomain: "fir-recent-user.firebaseapp.com",
    databaseURL: "https://fir-recent-user.firebaseio.com",
    storageBucket: "fir-recent-user.appspot.com"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial Values

playerOneName = $("#p1Name").text().trim();
playerOneScore = $("#p1Score").val().trim();
playerOneWins = $("#p1Wins").val().trim();
playerOneLosses = $("#p1Losses").val().trim();

playerTwoName = $("#p1Name").text().trim();
playerTwoScore = $("#p1Score").val().trim();
playerTwoWins = $("#p1Wins").val().trim();
playerTwoLosses = $("#p1Losses").val().trim();

chatInput = $("#chatInput").text().trim();
chatButton = ("#chatButton");
chatDisplay = $("#chatDisplay").chatInput

//  chat button submit
$("#chatButton").on("click", function(event) {

})



// * Throw some chat functionality in there! No online multiplayer game is complete without having to endure endless taunts and insults from your jerk opponent.

// * Styling and theme are completely up to you. Get Creative!

// * Deploy your assignment to Github Pages.
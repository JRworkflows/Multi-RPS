// * Only two users can play at the same time.

// all properties that have to do with game

// * Both players pick either `rock`, `paper` or `scissors`. After the players make their selection, the game will tell them whether a tie occurred or if one player defeated the other.

// * The game will track each player's wins and losses.

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA5eYKsB8T2q6rMGdKSvac6eQsWTzsZEjE",
    authDomain: "multi-rps-a7b5a.firebaseapp.com",
    databaseURL: "https://multi-rps-a7b5a.firebaseio.com",
    storageBucket: "multi-rps-a7b5a.appspot.com"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial Values

var chat = "";
chat = $("#displayed-data").appendchild();
//  chat button submit
$("#chatButton").on("click", function(event) {
    // Prevent the page from refreshing
    event.preventDefault();
    //  get input
    chat = $("#displayed-data").text().trim();
    // change firebase info

    database.ref().set({
        chat: chat
    });
});

// When changes occurs it will print them to console and html
database.ref().on("value", function(snapshot) {

    // Print the initial data to the console.
    console.log(snapshot.val());

    // Log the value of the various properties
    console.log(snapshot.val().name);
    console.log(snapshot.val().age);
    console.log(snapshot.val().phone);

    // Change the HTML
    $("#displayed-data").text(snapshot.val().chat
        //     // If any errors are experienced, log them to console.
        // },
        // function(errorObject) {
        //     console.log("The read failed: " + errorObject.code);
    )
});



// * Throw some chat functionality in there! No online multiplayer game is complete without having to endure endless taunts and insults from your jerk opponent.

// * Styling and theme are completely up to you. Get Creative!

// * Deploy your assignment to Github Pages.
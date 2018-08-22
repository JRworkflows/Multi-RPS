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
var liveChat = [];

// Initial Values

//  chat button submit
$("#chatButton").on("click", function(event) {
    // Prevent the page from refreshing
    event.preventDefault();
    //  get input
    var chatInput = $("#name-input").val().trim();
    // change firebase info
    console.log(chatInput)
    database.ref().set({
        liveChat: chatInput
    })

    //after sending, clear the chat bar
    $("#name-input").val("");


});

// When changes occurs it will print them to console and html
// database.ref().on("value", function(snapshot) {
//     /*
//     the value contains the current move 
//     */
//     // Print the initial data to the console.
//     console.log(snapshot.val());


//     // Change the HTML
//     //append the snapshot value to the output
//     $("#displayed-data").html($("#displayed-data").html() + "<br>" + snapshot.val().chat);
//     //     // If any errors are experienced, log them to console.
//     // },
//     // function(errorObject) {
//     //     console.log("The read failed: " + errorObject.code);
// });



// // * Throw some chat functionality in there! No online multiplayer game is complete without having to endure endless taunts and insults from your jerk opponent.

// // * Styling and theme are completely up to you. Get Creative!

// var rock = "r";
// var paper = "p";
// var scissors = "s";

// // first user picks then must have picked to let player two pick



// //three buttons, one for each symbol (imgaes can get click events too!)
// //when clicked, update the DB with your move


// // * Deploy your assignment to Github Pages.$("#displayed-data").text(
$(document).ready(function () {

//pseudocode time

//variables needed: 

var wins = 0;
console.log(wins)
var losses = 0;
var crystalRand = [];
console.log(crystalRand)
var yourScore = 0;
console.log(yourScore)
var randNum = Math.floor(Math.random() * 102) + 19;
console.log(randNum)
var ruby = Math.floor(Math.random() * 12) + 1;
console.log(ruby)
var diamond = Math.floor(Math.random() * 12) + 1;
console.log(diamond)
var amethyst = Math.floor(Math.random() * 12) + 1;
console.log(amethyst)
var quartz = Math.floor(Math.random() * 12) + 1;
console.log(quartz)
$("#randomNum").text(randNum)

function reset() {
yourScore = 0;
console.log(yourScore)
randNum = Math.floor(Math.random() * 102) + 19;
console.log(randNum)
ruby = Math.floor(Math.random() * 12) + 1;
console.log(ruby)
diamond = Math.floor(Math.random() * 12) + 1;
console.log(diamond)
amethyst = Math.floor(Math.random() * 12) + 1;
console.log(amethyst)
quartz = Math.floor(Math.random() * 12) + 1;
console.log(quartz)
$("#randomNum").text(randNum)

}

$(".ruby").on("click", function() {
    yourScore += ruby
    console.log(yourScore)
    $("#score").text(yourScore)

    if (yourScore == randNum) {
        reset();
        wins++
        console.log(wins)
        $("#wins").text("Wins: " + wins)

}

if (yourScore >= randNum) {
    reset();
    losses++
    $("#losses").text("Losses: " + losses)
}
});

$(".diamond").on("click", function() {
    yourScore += diamond
    console.log(yourScore)
    $("#score").text(yourScore)

    if (yourScore == randNum) {
        reset();
        wins++
        console.log(wins)
        $("#wins").text("Wins: " + wins)

}

if (yourScore >= randNum) {
    reset();
    losses++
    $("#losses").text("Losses: " + losses)
}
});

$(".quartz").on("click", function() {
    yourScore += quartz
    console.log(yourScore)
    $("#score").text(yourScore)

    if (yourScore == randNum) {
        reset();
        wins++
        console.log(wins)
        $("#wins").text("Wins: " + wins)

}

if (yourScore >= randNum) {
    reset();
    losses++
    $("#losses").text("Losses: " + losses)
}
});

$(".amethyst").on("click", function() {
    yourScore += amethyst
    console.log(yourScore)
    $("#score").text(yourScore)

    if (yourScore == randNum) {
        reset();
        wins++
        console.log(wins)
        $("#wins").text("Wins: " + wins)

}

if (yourScore >= randNum) {
    reset();
    losses++
    $("#losses").text("Losses: " + losses)
}
    
});



// $(".crystal").on("click", function() {
//     for (i = 0; i < crystalRand.length; i++) {
//        crystalRand = parseInt(crystalRand);
//         yourScore = crystalRand[i];
//     }
//     console.log(yourScore)
// });


//Create a function that assigns all crystals a random number between 1 and 12

});

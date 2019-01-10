/* Rayna Carter
 * Hangman Project
 * Dec 28, 2018
 */
var state =  document.getElementById("category");
var STATES = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana",
    "Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
    "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];

//var inputLetter = document.getElementById("guessbox").value;
var word = "";
var letterArray = [];
var guessedetters = [];
function underlines(){
    document.getElementById("word").innerHTML = word;
}
function categoryChosen(x){
    var choice = document.getElementById("category").value;
    if (choice == 1){
         word = STATES[Math.floor(Math.random()* STATES.length)];
    }
    console.log(word);
}
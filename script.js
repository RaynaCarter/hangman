/* Rayna Carter
 * Hangman Project
 * Dec 28, 2018
 */
var state =  document.getElementById("category");
var STATES = ["alabama","alaska","arizona","arkansas","california","colorado","connecticut","delaware","florida","georgia","hawaii","idaho","illinois","indiana","iowa","kansas","kentucky","louisiana",
    "maine","maryland","massachusetts","michigan","minnesota","mississippi","missouri","montana","nebraska","nevada","new hampshire","new jersey","new mexico","new york","north carolina","north dakota","ohio",
    "oklahoma","oregon","pennsylvania","rhode island","south carolina","south dakota","tennessee","texas","utah","vermont","virginia","washington","west virginia","wisconsin","wyoming"];


var word = "";
var guessedLetters = [];


function categoryChosen(){
    choice = document.getElementById("category").value;
    if (choice == 1){
         word = STATES[Math.floor(Math.random()* STATES.length)];
    }
    console.log(word);
}

function printWord(x){
    guessedLetters += document.getElementById("guessbox").value;
    var answer= " ";
    for(var i=0;i< word.length;i++){
        if(guessedLetters.indexOf(word[i]) >=0){
            answer+= word[i];
        }else {
            answer += "_ ";
        }
    }
    console.log(answer);
    console.log(guessedLetters);
    document.getElementById("underline").innerHTML= answer;
}
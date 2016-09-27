// behaviors for the first section of the trivia game
//used both eventListener and .onclick
document.getElementById("button1").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("answer1").innerHTML = "Captain Christopher Pike";
}
document.getElementById("button2").onclick = function() {myFunction2()};

function myFunction2() {
    document.getElementById("answer2").innerHTML = "Martin Luther King Junior!";
}
document.getElementById("button3").onclick = function() {myFunction3()};

function myFunction3() {
    document.getElementById("answer3").innerHTML = "Lucille Ball from I Love Lucy";
}
//behaviors for the second portion of the trivia game
//**Try to make these functions accept more than one element**
document.getElementById("buttona").addEventListener("click", function(){
    alert("Incorrect! Try Again.");
});
document.getElementById("buttonb").addEventListener("click", function(){
    alert("Correct!");
});
document.getElementById("buttonc").addEventListener("click", function(){
    alert("Incorrect! Try Again.");
});
document.getElementById("buttond").addEventListener("click", function(){
    alert("Incorrect! Try Again.");
});
document.getElementById("buttone").addEventListener("click", function(){
    alert("Incorrect! Try Again.");
});
document.getElementById("buttonf").addEventListener("click", function(){
    alert("Correct!");
});
document.getElementById("buttong").addEventListener("click", function(){
    alert("Correct!");
});
document.getElementById("buttoni").addEventListener("click", function(){
    alert("Incorrect! Try Again.");
});
document.getElementById("buttonh").addEventListener("click", function(){
    alert("Incorrect! Try Again.");
});
let randomNumber1 = Math.floor(Math.random() * 6 )+ 1;
let randomNumber2 = Math.floor(Math.random() * 6 )+ 1;

if(randomNumber1 === 1){
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}
else if(randomNumber1 === 2){
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if(randomNumber1 === 3){
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if(randomNumber1 === 4){
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if(randomNumber1 === 5){
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else if(randomNumber1 === 6){
    document.querySelector(".img1").setAttribute("src" , "images/dice6.png");
}
//Player 2
if(randomNumber2 === 1){
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
else if(randomNumber2 === 2){
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if(randomNumber2 === 3){
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if(randomNumber2 === 4){
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if(randomNumber2 === 5){
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else if(randomNumber2 === 6){
    document.querySelector(".img2").setAttribute("src" , "images/dice6.png");
}

//winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Won!! ❌"
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "DRAW ❌"
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Won!📛"
}

//console
console.log("N1: " + randomNumber1 + "N2: "+ randomNumber2)
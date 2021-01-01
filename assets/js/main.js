//Game section is referred from https://marina-ferreira.github.io/tutorials/js/memory-game/ 
// variable to select card on game
const cards = document.querySelectorAll('.memory-card');
// variable for card status and stop cards being flipped again once matched
let hasFlippedCard = false;
let lockBoard = false;
// card variables
let firstCard,
    secondCard;
//moves and count variables
let moves = 0;
let count = 0;
let counter = document.querySelector(".moves-counter");
let counter2 = document.querySelector(".count-counter");
// Star variables defined
const stars = document.querySelectorAll(".fa-star");
let starlist = document.querySelectorAll(".stars li");
//Variable for Modal when game is complete
let closeicon = document.querySelector(".close");
let modal = document.getElementById("popup1");
//store in local storage variables to pull back information when required
const getMoves = localStorage.getItem('moves') + 1;
//Sound variable
var music = document.getElementById("myAudio");
//Timer variable
let timerOn = true;
let musicOff = false;
//Function when the card is flipped, checks to see if the card has already been flipped, if its the first card and adds the class flip.
//then runs the match againest the second card flip and increase the move counter which are both separate function that are called

function flipCard(){
     if (timerOn === true) {
  startTimer();
  timerOn = false;
}
if (musicOff === false){  
music.play();
    music.loop = true;
}
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip')
    if (!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;
    checkForMatch();
    moveCounter();
}

//check both cards for match
function checkForMatch(){
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards(); //cards can not be flip again
}
function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    countCounter(); //increase the match counter
    
    resetBoard(); //disable both cards
    localStorage.setItem = ('moves')+1 //sets stored in local storage
    congrats(); //when 8 matches have been completed bring up congrats modal
}
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    },1200);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
(function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 16); //math for shuffling the card
        card.style.order = ramdomPos;
    });
})();
cards.forEach(card => card.addEventListener('click', flipCard));



//music function
function pauseAudio(){
    music.pause();
    musicOff = true;
   
}

//moves counter by one for each match
//star ratings
function moveCounter(){ 
    moves++;
    counter.innerHTML = moves;
    if (moves > 14 && moves < 22){   
        for (i = 0; i < 3; i++){
            if (i > 1){
                stars[i].style.visibility = "collapse";
            }
        }
     }else if (moves > 23){
         for (i =0; i < 3; i++){
             if(i > 0){
                 stars[i].style.visibility = "collapse";
             }
         }
     }
}

//count the matches
function countCounter(){ 
      count++;
      counter2.innerHTML = count;
}

//count the time with timer
let time = 0;
let timer;
function startTimer() {
  timer = setInterval(function () {
    time++;
    minutes = ("0" + Math.floor(time / 60)).slice(-2);
    seconds = ("0" + (time % 60)).slice(-2);
    document.querySelector(".timer").innerHTML = minutes + ":" + seconds;
  }, 1000);
}



// congrats modal displays when matches = 8



function congrats(){
    if (count == 8){
        modal.classList.add("show");
       

 var starRating = document.querySelector(".stars").innerHTML;
 var timerDisplay = document.querySelector(".timer").innerHTML;

 document.getElementById("finalMove").innerHTML = moves+1;
 document.getElementById("starRating").innerHTML = starRating;
 alert(timerDisplay);
 //document.getElementsById("timerDisplay").innerHTML = timerDisplay;

   closeModal();
    };
}

// close modal button
function closeModal(){
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        restart();
    });
}

//reloads the page to reset every thing
function restart(){
    location.reload();
    return false;
}
cards.forEach(card => {
    return card.addEventListener('click', flipCard);
});
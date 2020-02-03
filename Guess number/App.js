var num = 0;
var guess = 0;
var tries = 0;

var input = document.getElementById('input');
var hint = document.getElementById('hint');
var btn = document.getElementById('guessbtn')

function init(){
    input.value = "0";
    tries = 0;
    hint.innerHTML = "Hint - It is between 1 and 100";
    num = Math.floor(Math.random()*100) + 1;
    //hint.innerHTML = num;

}



btn.addEventListener('click',function(){
    checkguess();
  
});
// function guess(e){
    // checkguess();


function checkguess(){
    tries += 1;
    if(parseInt(input.value) > num){
        hint.innerHTML = "Hint - Number is Smaller than" + input.value + "<br>" + tries;
    } else if(parseInt(input.value) < num){
        hint.innerHTML = "Hint - Number is Larger than" + input.value + "<br>" + tries;
    } else{
        displayMessage();
    }
}

function playAgain(){
    var parent = document.querySelector('.won').parentNode;
    parent.removeChild(document.querySelector('.won'));
    init();
    btn.style.pointerEvents = "auto";
    //btn.innerHTML="Guess";
    
}


function displayMessage(){
    var won = document.createElement("div");
    won.classList.add("won");
    var message = document.createElement("h2");
    message.classList.add("message");
    message.innerHTML = input.value + ", thats the number </br>Tries:"+tries;
     
     won.appendChild(message);

      var playAgainbtn = document.createElement("button");
      playAgainbtn.classList.add("play");
      playAgainbtn.innerHTML = "Play Again";
      playAgainbtn.addEventListener('click', playAgain);
     won.appendChild(playAgainbtn);

     document.body.appendChild(won);
    btn.style.pointerEvents = "none";
}
init();
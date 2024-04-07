// Wait for dom to finish loading before running the game.
// get button elements and add eventlisteners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute("data-type") === "submit"){
                alert("You clicked submit!")
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

function runGame(){

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWromngAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

function displayDivideQuestion(){

}
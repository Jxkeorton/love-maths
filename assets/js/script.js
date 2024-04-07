// Wait for dom to finish loading before running the game.
// get button elements and add eventlisteners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute("data-type") === "submit"){
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType)
            }
        })
    }

    runGame("addition")
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame(gameType) {

    // creates two random numbers
    let num1 = Math.floor(Math.random() * 25 ) + 1;
    let num2 = Math.floor(Math.random() * 25 ) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "subtract"){
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "division"){
        displayDivideQuestion(num1, num2);
    } else if (gameType === "multiply"){
        displayMultiplyQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`)
        throw `Unknown game type: ${gameType}. Aborting!`
    }
}

/**
 * checks the answer against the first element in
 * the returned calculateCorrect Answer array
 */
function checkAnswer(){

    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect) {
        incrementScore();
    } else {
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (numbers) and the operator
 * directly from the dom, and returns the answer.
 */
function calculateCorrectAnswer(){

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if(operator === '+') {
        return [operand1 + operand2, "addition"];
    } else if(operator === '-') {
        return [operand1 - operand2, "subtract"];
    } else if(operator === 'x') {
        return [operand1 * operand2, "multiply"];
    } else if(operator === '/') {
        return [operand1 / operand2, "division"];
    }else {
        alert(`unknown operator: ${operator}`);
        throw `unknown operator: ${operator}. Aborting!`;
    }

}

/**
 * Gets the current score from the DOM and increments it by 1
 * 
 */
function incrementScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

/**
 * Gets the current incorrect answer score from the DOM and increments it by 1
 * 
 */
function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

function displayDivideQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
}
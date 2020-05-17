let levelDifficulty = 1;
let gamesWon = 0;
let randomNumber1, randomNumber2, ranodmNumber3, productRandomNumbers, sumRandomNumbers;
let restartDetermination;

const continuebutton = document.getElementById("continue-btn");
const enterNumbersButton = document.getElementById("enterNumbers-btn");
const restartButton = document.getElementById("restart-btn");
const exitButton = document.getElementById("exit");
const gameManuelButton = document.getElementById("gameManual-btn")


gameManuelButton.addEventListener("click", () =>{
    
    const backdrop = document.querySelector("#backdrop");
    backdrop.classList.add("visible");

    exitButton.addEventListener("click", ()=>{
        backdrop.classList.remove("visible");   
    })
})

continuebutton.addEventListener("click", () =>{
        
    const userInstructions = document.querySelector(".user-instructions");
    const firstNumberInput = document.querySelector("#first-number-input");
    const secondNumberInput = document.querySelector("#second-number-input");
    const thirdNumberInput = document.querySelector("#third-number-input");
    const html = document.querySelector("html");

    restartButton.style["box-shadow"] = "none";
    restartButton.style["border"] = "none";
    html.style["background-color"] = "#1d1d11";
    enterNumbersButton.style["border"] = "2px solid black";
    enterNumbersButton.style["box-shadow"] =  "1.5px 1.5px 1.5px 1.5px rgba(0,0,0,.5)";
    continuebutton.style["box-shadow"] = "none";
    continuebutton.style["border"] = "none";
    firstNumberInput.value = "";
    secondNumberInput.value = "";
    thirdNumberInput.value = "";
    userInstructions.textContent = "";
    userInstructions.innerHTML = "<br>**************Now commencing level " + levelDifficulty + " **************<br><br>Enter the correct numbers that add up to the values in the blue box and multiply to the ones in the red box<br><br>Press \"Continue\" once you have entered the 3 numbers "

    restartButton.disabled = true;
    continuebutton.disabled = true;
    createRandomNumbers();
    verifyUserInput();
})
    
function createRandomNumbers(){

    randomNumber1 = Math.round(Math.random() % levelDifficulty + levelDifficulty);
    randomNumber2 = Math.round(Math.random() % levelDifficulty + levelDifficulty);
    randomNumber3 = Math.round(Math.random() % levelDifficulty + levelDifficulty);
    
    productRandomNumbers = randomNumber1 * randomNumber2 * randomNumber3;
    sumRandomNumbers = randomNumber1 + randomNumber2 + randomNumber3;

    const sumBox = document.querySelector(".just-the-sum");
    const productBox = document.querySelector(".just-the-product");
    const sum = document.querySelector(".sum");
    const product = document.querySelector(".product");

    sumBox.style.visibility = "visible";
    productBox.style.visibility = "visible";
    sum.textContent = sumRandomNumbers;
    product.textContent = productRandomNumbers;
}

function verifyUserInput(){

    restartButton.addEventListener("click", () =>{
        
        validatingUserInputsReusableCode();

        const html = document.querySelector("html");
        const userInstructions = document.querySelector(".user-instructions");

        html.style["background-color"] = "purple";
        userInstructions.innerHTML = "<br>You have decided to restart this game in shame because you didn't have the brainpower nor the determination to think of the correct numbers during level " + levelDifficulty + "<br><br>Hopefully you can do better next time<br>Press \"continue\" to go back to level 1";

        levelDifficulty = 1;
        restartButton.style["box-shadow"] = "none";
        restartButton.style["border"] = "none";
        restartButton.disabled = true;
        continuebutton.disabled = false;
    })
    
    enterNumbersButton.addEventListener("click", () =>{

        let firstUserInput = document.querySelector("#first-number-input");
        let secondUserInput = document.querySelector("#second-number-input");
        let thirdUserInput = document.querySelector("#third-number-input");

        let sumUserInputs = parseInt(firstUserInput.value) + parseInt(secondUserInput.value) + parseInt(thirdUserInput.value);
        
        let productUserInputs = parseInt(firstUserInput.value) * parseInt(secondUserInput.value) * parseInt(thirdUserInput.value);

        if(sumUserInputs === sumRandomNumbers && productUserInputs === productRandomNumbers &&levelDifficulty !== 5){
            const html = document.querySelector("html");
            const instructionsForUser = document.querySelector(".user-instructions");
                
            levelDifficulty++;
            instructionsForUser.textContent = "";
            html.style["background-color"] = "green";
            instructionsForUser.innerHTML = "<br>Well done, agent! You have successfully passed level " + (levelDifficulty - 1) + "<br><br>Press \"Continue\" to move on to the next level";
                
            validatingUserInputsReusableCode();
            continuebutton.disabled = false;
        }
        if(sumUserInputs === sumRandomNumbers && productUserInputs === productRandomNumbers &&levelDifficulty === 5){

            validatingUserInputsReusableCode();

            const html = document.querySelector("html");
            const instructionsForUser = document.querySelector(".user-instructions");
            const gameArea = document.querySelector(".game-area");
            const gamesWon = document.querySelector("games-won");

            gamesWon++;
            gamesWon.textContent = "";
            gamesWon.textContent = "Games Won: " + gamesWon;
            restartButton.style["box-shadow"] = "1.5px 1.5px 1.5px 1.5px rgba(0,0,0,.5)";
            restartButton.style["border"] = "2px solid black";
            levelDifficulty = 1;
            gameArea.style["background-color"] = "green";
            html.style["background-color"] = "blue";
            instructionsForUser.textContent = "";
            instructionsForUser.innerHTML = "<br>Congratulations, agent!<br><br>You have successfully broken into the level 5 safe, and have beat this game! You can now restart the game by pressing \"Restart\" or \"Continue\"<br><br>"
        }
        if((sumUserInputs !== sumRandomNumbers) && (productUserInputs !== productRandomNumbers)){

            const html = document.querySelector("html");
            const instructionsForUser = document.querySelector(".user-instructions");

            instructionsForUser.textContent = "";
            restartButton.style["box-shadow"] = "1.5px 1.5px 1.5px 1.5px rgba(0,0,0,.5)";
            restartButton.style["border"] = "2px solid black";
            html.style["background-color"] = "red";
            instructionsForUser.innerHTML = "<br>You have failed miserably, agent, and entered the incorrect values<br><br>You can choose to repeat level " + levelDifficulty + " in shame (by pressing \"Continue\"), or simply restart the game in its entirety by first pressing \"Restart\". Keep in mind that you can only restart this game once you have entered incorrect values.";

            validatingUserInputsReusableCode();
            restartDetermination = true;
            continuebutton.disabled = false;
            restartButton.disabled = false;
        }
    })
}

function validatingUserInputsReusableCode(){
    
    const sumBox = document.querySelector(".just-the-sum");
    const productBox = document.querySelector(".just-the-product");
    const sum = document.querySelector(".sum");
    const product = document.querySelector(".product");
    const userInputOne = document.querySelector("#first-number-input");
    const userInputTwo = document.querySelector("#second-number-input");
    const userInputthree = document.querySelector("#third-number-input");

    continuebutton.style["box-shadow"] = "1.5px 1.5px 1.5px 1.5px rgba(0,0,0,.5)";
    continuebutton.style["border"] = "2px solid black";
    enterNumbersButton.style["border"] = "none";
    enterNumbersButton.style["box-shadow"] = "none";
    userInputOne.value = "";
    userInputTwo.value = "";
    userInputthree.value = "";
    sum.textContent = "";
    product.textContent = "";
    sumBox.style["visibility"] = "hidden";
    productBox.style["visibility"] = "hidden";
}



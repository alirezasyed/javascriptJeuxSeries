/****************************
 * Jeu de pile ou face
 ****************************/

// const coinArray = ["Heads", "Tails"];

// const score = [0,0];

// const message = document.querySelector('.message');

// const buttons = document.querySelectorAll("button");

// // console.log(buttons);

// for(let i = 0; i < buttons.length; i++)
// {
//     console.log(buttons[i]);
//     buttons[i].addEventListener("click", tossCoin);
// }

// function tossCoin(e)
// {
//     let playerGuess = e.target.innerText;
//     // console.log("joueur: " + e.target.innerText);
//     let computerToss = Math.floor(Math.random() * 2);
//     // console.log("ordinateur: " + coinArray[computerToss]);
//     let computerGuess = coinArray[computerToss];
//     message.innerHTML = "l'ordinateur a selectionne " + computerGuess;

//     let outPut;

//     if(playerGuess === computerGuess)
//     {
//         outPut = " Le joueur gagne .";
//         score[0]++;
//     }
//     else
//     {
//         outPut = " L'ordinateur gagne .";
//         score[1]++;
//     }
//     message.innerHTML+= outPut + "<br /> Joueur : " + score[0] + " L'ordinateur : " + score[1];
// }


/****************************
 * Petit projet de demander et obtenir des réponses
 ****************************/

// const answerArray = ["It will work", "Maybe maybe not", "Probably Not", "I Dont know"];

// const message = document.querySelector(".message");
// const question = document.querySelector("input");
// const button = document.querySelector("button");

// button.addEventListener("click", function () {

//     let res = Math.floor(Math.random() * answerArray.length);
//     message.innerText = question.value + " " + answerArray[res];
//     question.value = "";

// });


/****************************
 * Jeux de deviner des nombres
 ****************************/

const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message = document.querySelector(".message");

let gamePlay = false;
let score = 0;
button.addEventListener("click", function () {
    if (! gamePlay) {
        gamePlay = true;
        score = 0;
        maker();
        button.innerHTML = "Check Combo";
    } else { // console.log("Checker");

        const numbers = document.querySelectorAll(".numb");
        // console.log(numbers);
        score++;
        message.innerHTML = "les suppositions/Guesses " + score;
        let winCondition = 0;
        for (let i = 0; i < numbers.length; i++) {
            // console.log(numbers[i].value);
            // console.log(numbers[i].correct);
            if (numbers[i].value == numbers[i].correct) { 
                // console.log("Match");
                numbers[i].style.backgroundColor = "green";
                numbers[i].style.color = "white";
                winCondition++;

            } else {
                // console.log("No Match");
                let color = (numbers[i].value < numbers[i].correct) ? "blue" : "red";
                numbers[i].style.backgroundColor = color;
                numbers[i].style.color = "black";
            }
            
            if(winCondition == numbers.length)
                {
                    console.log("Game Over");
                    
                }


        }

    }
});

function maker() {
    for (let x = 0; x < 6; x++) {
        let el = document.createElement("input");
        el.setAttribute("type", "number");
        el.max = 9;
        el.min = 0;
        el.size = 1;
        el.style.width = "50px";
        el.classList.add("numb");
        el.correct = Math.floor(Math.random() * 10);
        el.value = 0;
        el.order = x;
        // console.log(el);
        gameArea.appendChild(el);
    }

}

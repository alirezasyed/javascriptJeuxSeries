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


/******************************************************
 * Petit projet de demander et obtenir des réponses
 ******************************************************/

// const answerArray = ["It will work", "Maybe maybe not", "Probably Not", "I Dont know"];

// const message = document.querySelector(".message");
// const question = document.querySelector("input");
// const button = document.querySelector("button");

// button.addEventListener("click", function () {

//     let res = Math.floor(Math.random() * answerArray.length);
//     message.innerText = question.value + " " + answerArray[res];
//     question.value = "";

// });


/******************************************************
 * Jeux de deviner des nombres
 ******************************************************/

// const gameArea = document.querySelector(".game");
// const button = document.querySelector("button");
// const message = document.querySelector(".message");

// let gamePlay = false;
// let score = 0;
// button.addEventListener("click", function () {
//     if (! gamePlay) {
//         gamePlay = true;
//         gameArea.innerHTML = "";
//         score = 0;
//         maker(5);
//         button.innerHTML = "Check Combo";
//         message.innerHTML="Guess The Combo"
//     } else { // console.log("Checker");

//         const numbers = document.querySelectorAll(".numb");
//         // console.log(numbers);
//         score++;
//         message.innerHTML = "les suppositions/Guesses " + score;
//         let winCondition = 0;
//         for (let i = 0; i < numbers.length; i++) {
//             // console.log(numbers[i].value);
//             // console.log(numbers[i].correct);
//             if (numbers[i].value == numbers[i].correct) { // console.log("Match");
//                 numbers[i].style.backgroundColor = "green";
//                 numbers[i].style.color = "white";
//                 winCondition++;

//             } else { // console.log("No Match");
//                 let color = (numbers[i].value < numbers[i].correct) ? "blue" : "red";
//                 numbers[i].style.backgroundColor = color;
//                 numbers[i].style.color = "black";
//             }

//             if (winCondition == numbers.length) { // console.log("Game Over");
//                 gameEnd();

//             }


//         }

//     }
// });

// function gameEnd() {
//     message.innerHTML = "You Solved the Combo in " + score + " Guesses";
//     gamePlay = false;
//     button.innerHTML = "Restart Game";
// }

// function maker(numb) {
//     for (let x = 0; x < numb; x++) {
//         let el = document.createElement("input");
//         el.setAttribute("type", "number");
//         el.max = 9;
//         el.min = 0;
//         el.size = 1;
//         el.style.width = "50px";
//         el.classList.add("numb");
//         el.correct = Math.floor(Math.random() * 10);
//         el.value = el.correct;
//         el.order = x;
//         // console.log(el);
//         gameArea.appendChild(el);
//     }

// }


/******************************************************
 * laisser un message
 ******************************************************/

// const message = document.querySelector('.message');
// const text = document.getElementById('text');
// const send = document.getElementById('send');
// const clear = document.getElementById('clear');


// send.document.addEventListener('click', deliverMessage);


// function deliverMessage() {
//     let textValue = text.value;
//     message.innerHTML = textValue;
// }


// clear.document.addEventListener('click', clearField);


// function clearField() {
//     message.innerHTML = '';
//     text.value = '';
// }


/******************************************************
 * deviner les lettre d'un mot
 ******************************************************/

// const message = document.querySelector(".message");
// const guess = document.querySelector("input");
// const button = document.querySelector("button");
// const myArray = [
//     "jack",
//     "sara",
//     "elisa",
//     "chair",
//     "mots"
// ];
// let inPlay = false;
// let scramble = "";
// let scrambled = "";
// let score = 0;
// button.addEventListener("click", function () {
//     console.log("Clicked");
//     if (!inPlay) {
//         inPlay = true;
//         button.innerHTML = "Guess";
//         guess.classList.toggle("hidden");
//         guess.value = "";
//         // console.log(createWord());
//         scramble = createWord();
//         scrambled = randomArray(scramble.split("")).join("");
//         // message.innerHTML = scrambled + " " + scramble;
//         message.innerHTML = scrambled;
//     } else {
//         let tempGuess = guess.value;
//         score++;
//         if (tempGuess === scramble) {
//             inPlay = false;
//             message.innerHTML = "Correct it was " + scramble + " it look " + score + " guesses";
//             button.innerHTML = "Start";
//             guess.classList.toggle("hidden");
//         }
//         else {
//             message.innerHTML = "Wrong " + scrambled;
//         }
//     }
// });


// function createWord() {
//     let randomIndex = Math.floor(Math.random() * myArray.length);
//     let tempWord = myArray[randomIndex];
    /* // console.log(tempWord);
    // console.log(tempWord.split(""));
    // console.log(rand.join("")); */
//     let rand = randomArray(tempWord.split(""));
//     message.innerHTML = rand.join("");
//     return tempWord;

// }


// function randomArray(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         let temp = arr[i];
//         // console.log(temp);
        
//         let j = Math.floor(Math.random() * (i + 1));
        /* / console.log(j);
        // console.log(i); */
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     return arr;
// }
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

// const answerArray = ["It will work", "Maybe maybe not", "Probably Not", "I Dont Now"];

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

 let gamePlay = false;
 button.addEventListener("click", function () {
     if (!gamePlay) {
         gamePlay = true;
         maker();
         button.innerHTML = "Check Combo";
     } else {
         console.log("Checker");
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
         el.value = 0;
         el.order = x;
         console.log(el);
         gameArea.appendChild(el);
     }

 }
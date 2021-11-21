document.querySelector('.name_player').innerHTML = prompt("Enter your name: ","Guest");
if(!document.querySelector('.name_player').innerHTML){
  document.querySelector('.name_player').innerHTML = "Guest";
}

let suit = ["Spades","Hearts","Clubs","Diamonds"];
let cards = [
  {
    card: "6",
    value: 6,
  },
  {
    card: "7",
    value: 7,
  },
  {
    card: "8",
    value: 8,
  },
  {
    card: "9",
    value: 9,
  },
  {
    card: "10",
    value: 10,
  },
  {
    card: "Jack",
    value: 2,
  },
  {
    card: "Qeen",
    value: 3,
  },
  {
    card: "King",
    value: 4,
  },
  {
    card: "Ace",
    value: 11,
  },
];

let valuePlayer = 0;
let valueOpponent = 0;

let countRound = 0;
document.querySelector('.count').innerHTML = `Round ${countRound} of 3`;

document.querySelector('.count_player').innerHTML = valuePlayer;
document.querySelector('.count_opponent').innerHTML = valueOpponent;

document.querySelector('.restart_button').onclick = function restart(){
  document.querySelector('.modal').style.display = "none";
  valueOpponent = 0;
  valuePlayer = 0;
  document.querySelector('.count_player').innerHTML = valuePlayer;
  document.querySelector('.count_opponent').innerHTML = valueOpponent;
  countRound = 0;
  document.querySelector('.count').innerHTML = `Round ${countRound} of 3`;
  document.querySelector('.img_player').src = "img/start.svg";
  document.querySelector('.opponent_player').src = "img/start.svg";
}

document.querySelector('.game_button').onclick = function game() {
document.querySelector('.game_button').setAttribute("disabled","disabled");
let clear = setTimeout(function() {
  document.querySelector('.game_button').removeAttribute("disabled");
}, 400) 

let randomSuitPlayer = suit[Math.floor(Math.random() * suit.length)];
let randomSuitOp = suit[Math.floor(Math.random() * suit.length)];

let randomCardPlayer = Math.floor(Math.random() * cards.length);
let randomCardOp = Math.floor(Math.random() * cards.length);

document.querySelector('.img_player').src = `img/${randomSuitPlayer}/${cards[randomCardPlayer].card}.svg`;
document.querySelector('.opponent_player').src = `img/${randomSuitOp}/${cards[randomCardOp].card}.svg`;
document.querySelector('.count_player').innerHTML = valuePlayer += cards[randomCardPlayer].value;
document.querySelector('.count_opponent').innerHTML = valueOpponent += cards[randomCardOp].value;

countRound++;
document.querySelector('.count').innerHTML = `Round ${countRound} of 3`;

if(countRound === 3){
  if(valuePlayer > valueOpponent){
      let add = setTimeout(function() {
        document.querySelector('.modal').style.display= "flex";
        document.querySelector('.result_game').innerHTML = "Win";
        document.querySelector('.result_game').style.color = "#28B463";
      }, 400)
  }else if(valueOpponent > valuePlayer){
    let add = setTimeout(function() {
      document.querySelector('.modal').style.display= "flex";
      document.querySelector('.result_game').innerHTML = "Defeat";
      document.querySelector('.result_game').style.color = "#B03A2E";
    }, 400)
  }else{
    let add = setTimeout(function() {
      document.querySelector('.modal').style.display= "flex";
      document.querySelector('.result_game').innerHTML = "Draw";
      document.querySelector('.result_game').style.color = "#D7DBDD";
    }, 400)
  }
}

}

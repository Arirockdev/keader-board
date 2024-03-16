const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const countryInput = document  .querySelector('#country');
const playerScoreInput = document.querySelector('#player-score');



const btn = document.querySelector('#btn');



const containerGral = document.querySelector('.container__gral');
function render(){
 
  containerGral.innerHTML = ''
  for(let i = 0; i < players.length; i++){
   let acum = players[i].PlayerScore
  
   let fecha = new Date();

  let nuevaFecha = fecha.toLocaleDateString('en-US', {year:'numeric', month: 'short', day:'numeric'})
let hora = new Date().getHours()
let minutos = new Date().getMinutes()


let horaFinal = (hora <= 0 ) ? `0${hora}` : hora 
let minutosFinal = (minutos <= 0) ? `0${minutos}` : minutos


let horaNueva = `${horaFinal}:${minutosFinal}`

  containerGral.innerHTML += `<div class="data__player">
    <div class="name__date">
    <p class="name">${players[i].FirstName} ${players[i].LastName}</p>
    <p class="date">${nuevaFecha} ${horaNueva}</p>
    </div>
    <p class="country">${players[i].Country}</p>
    <p class="score">${acum}</p>
      <div class="data__player--status">
      <button class="btn-bin btn-round">
      <img width="24" height="24" src="https://img.icons8.com/material/24/000000/full-trash--v1.png" alt="full-trash--v1"/>
        </button>
        <button class="btn-add btn-round">+5</button>
        <button class="btn-remove btn-round">-5</button>
      </div>
    </div>`;
   
  }

  addEventListener()
}


const players = [];

function createPlayers (firstName, lastName, country, playerScore){
  
  players.push({
    FirstName: firstName,
    LastName: lastName,
    Country: country,
    PlayerScore: Number(playerScore)
  })
  render() 
}
function addEventListener(){
  const btnBin = document.querySelectorAll('.btn-bin');
  const btnAdd = document.querySelectorAll('.btn-add');
  const btnRemove = document.querySelectorAll('.btn-remove');

  for(let i = 0; i < btnBin.length; i++){
    btnBin[i].addEventListener('click', () => {
      players.splice(i, 1)
      render()
    })
  
    btnAdd[i].addEventListener('click', () => {
      players[i].PlayerScore += 5;
      render()
    })
 
    btnRemove[i].addEventListener('click', () => {
      players[i].PlayerScore -= 5;
      render()
    })
  }

}



function checkingPlayers(){

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const country = countryInput.value;
  const score = playerScoreInput.value;



  
  const alert = document.querySelector('.alert');
  alert.classList.add('alert__p');

if(firstName === '' || lastName === '' || country === '' || score === 0){
  
  alert.innerHTML = `<p>todos los campos tienen que estar completos</p>`
}else {
  createPlayers(firstName, lastName, country, score)
  alert.innerHTML = ''
}
console.log(players);

render()
}
  

btn.addEventListener('click', checkingPlayers)


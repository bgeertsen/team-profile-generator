const cardArr = require('../index');

let cardBox = document.querySelector('#card-container')

for (let i = 0; i < cardArr.length; i++) {
    let employeeCard = document.createElement('div');
    employeeCard.innerHTML = cardArr[i];

    cardBox.appendChild(employeeCard);
    console.log(cardBox)
}


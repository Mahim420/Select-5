// ALL COMMON FUNCTION
function getName(name) {
  const allName = document.getElementById(name);
  const playerName = allName.innerText;
  return playerName;
}

function setList(idName) {
  const playerName = getName(idName);
  const ol = document.getElementById("list-item");
  const li = document.createElement("li");
  li.classList.add("white");
  li.innerText = playerName;
  const maximum = document.getElementsByTagName("li");
  const totalList = maximum.length;
  if (totalList === 5) {
    alert("please Select Only V player");
    return;
  }

  ol.appendChild(li);
}
// ALL COMMON FUNCTION

// ALL-BUTTON
document.getElementById("messi-btn").addEventListener("click", function () {
  document.getElementById("messi-btn").disabled = true;
  setList("messi");
});

document.getElementById("neymer-btn").addEventListener("click", function () {
  document.getElementById("neymer-btn").disabled = true;
  setList("neymer");
});

document.getElementById("mbappe-btn").addEventListener("click", function () {
  document.getElementById("mbappe-btn").disabled = true;
  setList("mbappe");
});

document.getElementById("lewan-btn").addEventListener("click", function () {
  document.getElementById("lewan-btn").disabled = true;
  setList("lewan");
});

document.getElementById("salah-btn").addEventListener("click", function () {
  document.getElementById("salah-btn").disabled = true;
  setList("salah");
});

document.getElementById("luka-btn").addEventListener("click", function () {
  document.getElementById("luka-btn").disabled = true;
  setList("luka");
});

document.getElementById("becker-btn").addEventListener("click", function () {
  document.getElementById("becker-btn").disabled = true;
  setList("becker");
});

document.getElementById("lautaro-btn").addEventListener("click", function () {
  document.getElementById("lautaro-btn").disabled = true;
  setList("lautaro");
});

document.getElementById("vini-btn").addEventListener("click", function () {
  document.getElementById("vini-btn").disabled = true;
  setList("vini");
});
// ALL-BUTTON

// CALColATE FUNCTION
function getInputValue(value) {
  const inputValue = document.getElementById(value);
  const inputValueString = inputValue.value;
  const inputValueInt = parseFloat(inputValueString);
  inputValue.value = '';
  return inputValueInt;
}

function setCalcValue(idName, number) {
  const Price = document.getElementById(idName);
  const priceString = Price.innerText;
  Price.innerText = number;
}

function playerNumber() {
  const playerCount = document.getElementsByTagName("li");
  const selectPlayerString = playerCount.length;
  const selectPlayer = parseInt(selectPlayerString);
  return selectPlayer;
}

document.getElementById("calc").addEventListener("click", function () {
  const inputNumber = getInputValue("player-input");
  if (isNaN(inputNumber)) {
    alert("Please enter A value");
    return;
  }
  const playerNumbers = playerNumber();
  const totalPlayerPrice = inputNumber * playerNumbers;
  setCalcValue("player-price", totalPlayerPrice);
});

document.getElementById("calc-total").addEventListener("click", function () {
    const previousPriceString = getName("player-price");
    const previousPrice = parseFloat(previousPriceString);
    const managerInput = getInputValue("manager-input");
    const coachInput = getInputValue('cosch-input');

    if(isNaN(managerInput) || isNaN(coachInput)){
        alert("Please Type A Value");
        return;
    }

    const total = previousPrice + managerInput + coachInput;
    setCalcValue('total', total);
});

// CALColATE FUNCTION

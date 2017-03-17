var output = document.getElementsByClassName(`screen__output`)[0]
var numberButtons = document.getElementsByClassName(`calculator__button__number`)
var cancel = document.getElementById(`clear`)
var invert = document.getElementById(`invert`)
var percent = document.getElementById(`percent`)
var equals = document.getElementById(`equals`)
var divide = document.getElementById(`divide`)
var multiply = document.getElementById(`multiply`)
var minus = document.getElementById(`minus`)
var add = document.getElementById(`add`)
var operators = {
  '+': function(a, b) { return a + b },
  '-': function(a, b) { return a - b },
  '*': function(a, b) { return a * b },
  '/': function(a, b) { return a / b },
}

var calculationNumberOne;
var calculationNumberTwo;
var operator;

for(let i = 0; i < numberButtons.length; i++) { // assign click event listener to buttons used for numbers
  numberButtons[i].addEventListener(`click`, function () {
    var value = numberButtons[i].innerText;
    if(output.classList.contains(`answer`)) {
      output.innerText = value;
      output.classList.remove(`answer`)
    } else {
      output.innerText += value;
    }

  })
}

cancel.addEventListener(`click`, function () {
  console.log(this.innerText)
  output.innerText = ``
  calculationNumberOne = ``
  calculationNumberTwo = ``;
})

invert.addEventListener(`click`, function () {
  if(output.innerText[0] === `-`) {
    output.innerText = parseFloat(output.innerText.replace(/-/, ``))
  } else {
    output.innerText = parseFloat(`-` + output.innerText)
  }
  console.log(calculationNumberOne)
})

percent.addEventListener(`click`, function () {
  if(calculationNumberOne) {
    calculationNumberTwo = (calculationNumberOne / 100) * (parseInt(output.innerText))
    console.log(calculationNumberTwo)
    output.innerText = operators[operator](calculationNumberOne, calculationNumberTwo)
    output.classList.add(`answer`)
    calculationNumberOne = ``
    calculationNumberTwo = ``
  }
})

equals.addEventListener(`click`, function () {
  if(calculationNumberOne) {
    calculationNumberTwo = parseInt(output.innerText)
    output.innerText = operators[operator](calculationNumberOne, calculationNumberTwo)
    output.classList.add(`answer`)
    calculationNumberOne = ``
    calculationNumberTwo = ``
  }
})

divide.addEventListener(`click`, function () {
  operator = `/`
  calculationNumberOne = parseFloat(output.innerText);
  output.innerText = ``
  console.log(calculationNumberOne)
})

multiply.addEventListener(`click`, function () {
  operator = `*`
  calculationNumberOne = parseFloat(output.innerText);
  output.innerText = ``
  console.log(calculationNumberOne)
})

minus.addEventListener(`click`, function () {
  operator = this.innerText
  calculationNumberOne = parseFloat(output.innerText);
  output.innerText = ``
  console.log(calculationNumberOne)
})

add.addEventListener(`click`, function () {
  operator = this.innerText
  calculationNumberOne = parseFloat(output.innerText);
  output.innerText = ``
  console.log(calculationNumberOne)
})

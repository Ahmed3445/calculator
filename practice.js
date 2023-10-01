 

let sumEl = document.getElementById("sum-el");

function add() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) + Number(num2);
    sumEl.textContent = "Sum: " + result;
  }

  function subtract() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) - Number(num2);
    sumEl.textContent = "Difference: " + result;
  }

  function multiply() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) * Number(num2);
    sumEl.textContent = "Product: " + result;
  }

  function divide() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (Number(num2) === 0) {
      sumEl.textContent = "Cannot divide by zero";
      return;
    }

    let result = Number(num1) / Number(num2);
    sumEl.textContent = "Quotient: " + result;
  }


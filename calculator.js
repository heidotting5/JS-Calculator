// Arrays containing number and operator choices
const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const opers = ["*", "-", "+", "/"];

// Variables to track user inputs
var displayValue = "";
var firstNumber = "";
var operators = "";
var secondNumber = "";
var answer = "";

// Call main function
userSelection();

// Main function that will capture all user inputs and call the correct operation functions (add, subtract, multiply, divide)
function userSelection() {
  document.querySelectorAll(".button").forEach((item) => {
    item.addEventListener("click", () => {
      // Captures the first number entered by the user
      if (
        operators === "" &&
        nums.includes(item.innerHTML) &&
        answer.length === 0
      ) {
        if (firstNumber.length === 0 && answer.length === 0) {
          firstNumber = item.innerHTML;
        } else {
          firstNumber = firstNumber + item.innerHTML;
        }
        document.querySelector(".calc-display").innerHTML = firstNumber;
      }

      // Captures the operator the user selects, overwrites previous selection if they choose multiple in a row
      else if (
        firstNumber.length != 0 &&
        secondNumber.length === 0 &&
        opers.includes(item.innerHTML)
      ) {
        operators = item.innerHTML;
      }

      // Captures the second number entered by the user
      else if (
        operators != "" &&
        firstNumber != "" &&
        nums.includes(item.innerHTML)
      ) {
        if (secondNumber === "") {
          secondNumber = item.innerHTML;
        } else {
          secondNumber = secondNumber + item.innerHTML;
        }
        document.querySelector(".calc-display").innerHTML = secondNumber;
      }

      // Captures the next operator or equals sign and displays the answer
      else if (
        operators.length === 1 &&
        secondNumber.length > 0 &&
        answer === "" &&
        (opers.includes(item.innerHTML) || item.innerHTML === "=")
      ) {
        answer = operate(firstNumber, secondNumber, operators);
        document.querySelector(".calc-display").innerHTML = answer;
        secondNumber = "";
        operators = item.innerHTML;
        firstNumber = answer;
        answer = "";
      }

      // Refreshes the page and clears the calculator inputs when All Clear (AC) is selected
      else if (item.innerHTML === "AC") {
        location.reload();
      }
    });
  });
}

// Performs the math operation based on what the user has selected
function operate(num1, num2, operator) {
  if (operator == "+") {
    return parseInt(num1) + parseInt(num2);
  } else if (operator == "-") {
    return parseInt(num1) - parseInt(num2);
  } else if (operator == "/") {
    return parseInt(num1) / parseInt(num2);
  } else {
    return parseInt(num1) * parseInt(num2);
  }
}

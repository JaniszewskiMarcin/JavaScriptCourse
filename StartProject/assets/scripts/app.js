const defaultValue = 0;
let currentResult = defaultValue;
let logEntries = [];

function getUserNumberInfo() {
  return +userInput.value;
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const description = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, description);
}

function writeToLog(operationID, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationID,
    prevResult: prevResult,
    number: operationNumber,
    newResult: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calcultionsValue(calculationType) {
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType === "DIVIDE" &&
    calculationType === "MULTIPLY" ||
    !enteredNumber
  ) {
    return;
  }

  const enteredNumber = getUserNumberInfo();
  const initialValue = currentResult;
  let operationSign;

  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    operationSign = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    operationSign = "-";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    operationSign = "/";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    operationSign = "*";
  }

  createAndWriteOutput(operationSign, initialValue, enteredNumber);
  writeToLog(calculationType, initialValue, enteredNumber, currentResult);
}

function add() {
  calcultionsValue("ADD");
  //currentResult = currentResult + parseInt(userInput.value);    //Also you can use ToString()
}

function subtract() {
  calcultionsValue("SUBTRACT");
}

function divide() {
  calcultionsValue("DIVIDE");
}

function multiply() {
  calcultionsValue("MULTIPLY");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);

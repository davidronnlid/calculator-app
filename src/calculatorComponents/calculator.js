import { useState } from "react";
import NumberButton from "./numberButtons";
import ManipulateNumbersButton from "./buttonsThatManipulateNumbers";
import ErrorToast from "./errorToast";

const Calculator = () => {
  const [digitList, setDigitList] = useState([]);
  const operators = ["+", "-", "X", "/"];

  const [calculatorError, setCalculatorError] = useState("");
  const resetError = () => {
    setCalculatorError("");
  };

  const addToDisplayArray = (newDigit) => {
    if (digitList.length === 0) {
      // Above if statement is executed when the user clicks on an operator or number and the digitList is empty

      if (operators.includes(newDigit)) {
        setCalculatorError(
          "No number to operate on. Please select number(s) before clicking an operator."
        );
        return digitList;
        // Return empty digitList and alert user if first digit is an operator
      } else {
        return setDigitList(() => [newDigit.toString()]);
        // Update digitList if first digit is not an operator (then it is a number)
      }
    }

    const newDigitIsOperator = () => {
      let isOperator = false;
      isOperator = operators.includes(newDigit);
      return isOperator; // Returns true if newDigit is an operator. False if a number
    };

    const digitListIncludesOperator = () => {
      let hasOperator = false;

      for (let i = 0; i < operators.length; i++) {
        digitList.indexOf(operators[i]) === -1
          ? (hasOperator = false)
          : (hasOperator = true);
        if (hasOperator) {
          break;
        }
      }

      return hasOperator; // hasOperator is expected to be true if digitList has an operator since before but false if no operators have previously been added to digitList
    };

    if (newDigitIsOperator() && digitListIncludesOperator()) {
      // If the new digit is an operator and if the digitList already has an operator, then alert the user that this calculator only handles single-operator operations and return digitList unchanged so that the calc. display doesn't change at all if user clicks an operator after previously clicking an operator without evaluating operation.
      setCalculatorError("This calculator allows max. one operation at a time");
      return digitList;
    } else {
      return setDigitList((digitList) => [...digitList, newDigit.toString()]);
    }
  };

  const removeLastNumberFromDisplayArray = () => {
    digitList.pop();

    setDigitList((digitList) => [...digitList]);
  };
  const removeAllNumbersFromDisplayArray = () => {
    setDigitList((digitList) => {
      while (digitList.length > 0) {
        digitList.pop();
      }
      return [...digitList];
    });
  };

  const onePercentOfCurrentlyDisplayedVal = () => {
    setDigitList((digitList) => {
      let digitArr = [...digitList];
      let digitVar = digitArr.join("");

      let onePercent = digitVar / 100;

      onePercent = onePercent.toString().split("");
      return onePercent;
    });
  };

  const evaluateDisplayVal = () => {
    //Takes numbers before/after a possible user-selected arithmetic operator and carries out the operation on these

    setDigitList((digitList) => {
      let operator, operatorIndex;

      for (let i = 0; i < digitList.length; i++) {
        switch (digitList[i]) {
          case "+":
            operator = "+";
            operatorIndex = i;
            break;
          case "/":
            operator = "/";
            operatorIndex = i;
            break;
          case "-":
            operator = "-";
            operatorIndex = i;
            break;
          case "X":
            operator = "X";
            operatorIndex = i;
            break;

          default:
            break;
        }
      }
      //Find possible operator and their index in digitList

      const firstVar = parseFloat(digitList.join("").slice(0, operatorIndex));
      const secondVar = parseFloat(digitList.join("").slice(operatorIndex + 1));
      //Assign all numbers before/after the operator to separate variables and turn these numbers into type float

      let result;
      if (operator === "+") {
        result = firstVar + secondVar;
      } else if (operator === "/") {
        result = firstVar / secondVar;
      } else if (operator === "-") {
        result = firstVar - secondVar;
      } else if (operator === "X") {
        result = firstVar * secondVar;
      }
      //Carry out the user-selected operation and assign it to a new variable "result"

      if (
        !digitList.find((elm) => elm === operator) ||
        !secondVar ||
        !digitList.length
      ) {
        console.log("1 ", calculatorError);
        setCalculatorError("No operations to evaluate.");
        console.log(
          setCalculatorError("No operations to evaluate."),
          calculatorError
        );
        console.log("2 ", calculatorError);

        return digitList;
        // If there are no operators, or if there are no numbers after an operator, or if there are no numbers at all to evaluate, then return unmanipulated digitList
      } else {
        result = [...result.toString()];
        //Set result to be an array so that the user can continue to add and manipulate numbers in interaction with display (would not be possible if result was still of type number)
      }

      if (result.length > 8) {
        setCalculatorError(
          "Operations that return more than 8 digits are not allowed."
        );
        return ["ERROR"];
      }

      return result;
    });
  };

  return (
    <div className="calcContainer">
      <ErrorToast errorMessage={calculatorError} resetError={resetError} />
      <h2 className="calculatorDisplay">
        {Array.isArray(digitList)
          ? digitList.filter((elm, indx) => indx <= 7 && elm)
          : // If digitList is arr, then return first 8 items of this arr
            digitList}
      </h2>
      <div className="calculatorButtons">
        <ManipulateNumbersButton
          onClick={() => removeLastNumberFromDisplayArray()}
        >
          C
        </ManipulateNumbersButton>
        <ManipulateNumbersButton
          onClick={() => removeAllNumbersFromDisplayArray()}
        >
          AC
        </ManipulateNumbersButton>
        <ManipulateNumbersButton
          onClick={() => onePercentOfCurrentlyDisplayedVal()}
        >
          %
        </ManipulateNumbersButton>
        <ManipulateNumbersButton onClick={() => addToDisplayArray("/")}>
          /
        </ManipulateNumbersButton>
        <NumberButton onClick={() => addToDisplayArray(7)}>7</NumberButton>
        <NumberButton onClick={() => addToDisplayArray(8)}>8</NumberButton>
        <NumberButton onClick={() => addToDisplayArray(9)}>9</NumberButton>
        <ManipulateNumbersButton onClick={() => addToDisplayArray("X")}>
          X
        </ManipulateNumbersButton>{" "}
        <NumberButton onClick={() => addToDisplayArray(4)}>4</NumberButton>
        <NumberButton onClick={() => addToDisplayArray(5)}>5</NumberButton>
        <NumberButton onClick={() => addToDisplayArray(6)}>6</NumberButton>
        <ManipulateNumbersButton onClick={() => addToDisplayArray("-")}>
          -
        </ManipulateNumbersButton>{" "}
        <NumberButton onClick={() => addToDisplayArray(1)}>1</NumberButton>
        <NumberButton onClick={() => addToDisplayArray(2)}>2</NumberButton>
        <NumberButton onClick={() => addToDisplayArray(3)}>3</NumberButton>
        <ManipulateNumbersButton onClick={() => addToDisplayArray("+")}>
          +
        </ManipulateNumbersButton>
        <NumberButton onClick={() => addToDisplayArray(0)}>0</NumberButton>
        <NumberButton onClick={() => addToDisplayArray(".")}>.</NumberButton>
        <ManipulateNumbersButton onClick={() => evaluateDisplayVal()}>
          =
        </ManipulateNumbersButton>
      </div>
    </div>
  );
};

export default Calculator;

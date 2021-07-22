{
  /* <ManipulateNumbersButton
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
          </ManipulateNumbersButton> */
}

const ManipulateNumbersButton = (props) => {
  return (
    <button onClick={props.onClick} className="calculatorButton">
      {props.children}
    </button>
  );
};

export default ManipulateNumbersButton;

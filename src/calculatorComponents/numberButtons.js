const NumberButton = (props) => {
  return (
    <button onClick={props.onClick} className="calculatorButton">
      {props.children}
    </button>
  );
};

export default NumberButton;

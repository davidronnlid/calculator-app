const ManipulateNumbersButton = (props) => {
  const conditionalClassName = `${
    props.children === "=" ? "calculatorButton equalTo" : "calculatorButton"
  }`;

  return (
    <button onClick={props.onClick} className={conditionalClassName}>
      {props.children}
    </button>
  );
};

export default ManipulateNumbersButton;

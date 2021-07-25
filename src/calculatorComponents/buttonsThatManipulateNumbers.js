const ManipulateNumbersButton = (props) => {
  const conditionalClassName = `${
    props.children === "=" ? "calculatorButton equalTo" : "calculatorButton"
  }`;
  //Only add class "equalTo" to component with display text "=" (in order for the equal sign to span two grid columns)

  return (
    <button onClick={props.onClick} className={conditionalClassName}>
      {props.children}
    </button>
  );
};

export default ManipulateNumbersButton;

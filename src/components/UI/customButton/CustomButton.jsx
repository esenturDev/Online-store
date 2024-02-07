const CustomButton = ({ onClick, buttonText, id }) => {
  return (
    <div>
      <button id={id} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default CustomButton;

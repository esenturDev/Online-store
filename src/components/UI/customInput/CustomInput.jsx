const CustomInput = ({ onChange, value }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </div>
  );
};

export default CustomInput;

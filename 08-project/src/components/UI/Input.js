const Input = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        type={props.type}
        id={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
    </div>
  );
};

export default Input;

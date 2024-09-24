function Input({
  type = 'text',
  onChange,
  value = '',
  maxLength = '40',
  required = true,
  name = '',
}) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        onChange={onChange}
        maxLength={maxLength}
        required={required}
        id={name}
        value={value}
      />
    </>
  );
}

export default Input;

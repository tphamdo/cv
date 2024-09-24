import { PropTypes } from 'prop-types';

function Input({
  type = 'text',
  onChange,
  value = '',
  maxLength = '50',
  required = true,
  name = '',
}) {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        onChange={onChange}
        maxLength={maxLength}
        required={required}
        id={name}
        value={value}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  maxLength: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
};

export default Input;

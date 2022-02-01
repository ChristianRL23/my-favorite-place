import './Input.scss';

const Input = ({ icon, placeholder, textarea }) => {
  if (textarea) {
    return (
      <div className="textarea">
        <img className="textarea__icon" src={icon} alt="Input icon" />
        <textarea
          className="textarea__textarea-element"
          placeholder={placeholder}
        />
      </div>
    );
  } else {
    return (
      <div className="input">
        <img className="input__icon" src={icon} alt="Input icon" />
        <input className="input__input-element" placeholder={placeholder} />
      </div>
    );
  }
};

export default Input;

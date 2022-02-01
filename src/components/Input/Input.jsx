import { useContext } from 'react';
import AppContext from '../../context/appContext';
import './Input.scss';

const Input = ({ icon, placeholder, textarea, fieldName }) => {
  const appCtx = useContext(AppContext);

  const onTyping = (e) => {
    appCtx.setPlaceFormData((lastState) => {
      return {
        ...lastState,
        [e.target.name]: e.target.value,
      };
    });
  };

  if (textarea) {
    return (
      <div className="textarea">
        <img className="textarea__icon" src={icon} alt="Input icon" />
        <textarea
          name={fieldName}
          onChange={onTyping}
          className="textarea__textarea-element"
          placeholder={placeholder}
        />
      </div>
    );
  } else {
    return (
      <div className="input">
        <img className="input__icon" src={icon} alt="Input icon" />
        <input
          name={fieldName}
          onChange={onTyping}
          className="input__input-element"
          placeholder={placeholder}
        />
      </div>
    );
  }
};

export default Input;

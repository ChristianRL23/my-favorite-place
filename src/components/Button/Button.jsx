import './Button.scss';

const Button = ({ textContent, color, clickFn }) => {
  return (
    <button onClick={clickFn} className={`button--${color}`}>
      {textContent}
    </button>
  );
};

export default Button;

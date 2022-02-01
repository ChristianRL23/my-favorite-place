import './Header.scss';
import logo from './logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="App logo" />
    </header>
  );
};

export default Header;

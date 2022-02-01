import './Sidebar.scss';
import logo from './logo.svg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img className="logo" src={logo} alt="App logo" />
    </aside>
  );
};

export default Sidebar;

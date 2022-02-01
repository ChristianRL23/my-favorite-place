import './Sidebar.scss';
import logo from './logo.svg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img className="logo" src={logo} alt="App logo" />
      <div className="sidebar__welcome">
        <h2 className="sidebar__welcome__title">¡Bienvenid@!</h2>
        <p className="sidebar__welcome__paragraph">
          my favorite place es una aplicación que puedes usar para registar tus
          lugares favoritos, tales como restaurantes, plazas, parques, etc.
        </p>
        <p className="sidebar__welcome__paragraph">
          ¡Comienza usando el mapa para colocar un marcador en uno de tus
          lugares favoritos!
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

import './Sidebar.scss';
import logo from './logo.svg';
import category from './category.svg';
import favorite from './favorite.svg';
import description from './description.svg';
import name from './name.svg';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useContext } from 'react';
import AppContext from '../../context/appContext';

const Sidebar = () => {
  const appCtx = useContext(AppContext);

  const sidebarWelcome = (
    <div className="sidebar__welcome">
      <h2 className="sidebar__welcome__title">¡Bienvenid@!</h2>
      <p className="sidebar__welcome__paragraph">
        my favorite place es una aplicación que puedes usar para registar tus
        lugares favoritos, tales como restaurantes, plazas, parques, etc.
      </p>
      <p className="sidebar__welcome__paragraph">
        ¡Comienza usando el mapa para colocar un marcador en uno de tus lugares
        favoritos!
      </p>
    </div>
  );

  const sidebarAdd = (
    <div className="sidebar__add-place">
      <h2 className="sidebar__add-place__title">Agregar un lugar</h2>
      <form className="sidebar__add-place__form">
        <Input icon={name} placeholder="Nombre del lugar" />
        <Input icon={category} placeholder="Categoría" />
        <Input icon={favorite} placeholder="¿Por qué es un lugar favorito?" />
        <Input icon={description} placeholder="Descripción" textarea />
        <Button textContent="Agregar" />
      </form>
    </div>
  );

  return (
    <aside className="sidebar">
      <img className="logo" src={logo} alt="App logo" />
      {appCtx.placedMarker === false ? sidebarWelcome : sidebarAdd}
    </aside>
  );
};

export default Sidebar;

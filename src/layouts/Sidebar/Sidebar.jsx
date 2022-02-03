import './Sidebar.scss';
import logo from './logo.svg';
import category from './category.svg';
import description from './description.svg';
import name from './name.svg';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useContext, useState, useEffect } from 'react';
import AppContext from '../../context/appContext';
import Place from '../../components/Place/Place';

const Sidebar = () => {
  const [error, setError] = useState(null);
  const appCtx = useContext(AppContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 2000);
    return () => clearTimeout(timer);
  }, [error]);

  const addPlace = (e) => {
    e.preventDefault();
    setError(null);
    if (
      appCtx.placeFormData.category === '' ||
      appCtx.placeFormData.description === '' ||
      appCtx.placeFormData.name === ''
    ) {
      setError(true);
      return;
    }
    appCtx.setMarkerPosition(null);
    appCtx.setMarkers([
      ...appCtx.markers,
      {
        name: appCtx.placeFormData.name,
        category: appCtx.placeFormData.category,
        description: appCtx.placeFormData.description,
        lat: appCtx.markerPosition.lat,
        lng: appCtx.markerPosition.lng,
      },
    ]);
    appCtx.setPlacedMarker(false);
  };

  const cancelAddPlace = (e) => {
    e.preventDefault();
    setError(null);
    appCtx.setPlacedMarker(false);
    appCtx.setMarkerPosition(null);
  };

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
      <form onSubmit={addPlace} className="sidebar__add-place__form">
        <div className="sidebar__add-place__form__inputs">
          <Input fieldName="name" icon={name} placeholder="Nombre del lugar" />
          <Input fieldName="category" icon={category} placeholder="Categoría" />
          <Input
            fieldName="description"
            icon={description}
            placeholder="Descripción"
            textarea
          />
          {error && (
            <p className="sidebar__add-place__error-message">
              Ningún campo debe estar vacío.
            </p>
          )}
        </div>

        <div className="sidebar__add-place__buttons">
          <Button clickFn={addPlace} textContent="Agregar" color="green" />
          <Button clickFn={cancelAddPlace} textContent="Cancelar" color="red" />
        </div>
      </form>
    </div>
  );

  const allPlaces = (
    <div className="sidebar__all-places">
      <h2 className="sidebar__all-places__title">Lugares favoritos</h2>
      <div className="sidebar__all-places__places">
        {appCtx.markers.map((marker) => (
          <Place
            name={marker.name}
            category={marker.category}
            description={marker.description}
          />
        ))}
      </div>
    </div>
  );

  let sidebarContent;

  //If there are no markers and the main marker is not placed.
  if (appCtx.markers.length === 0 && appCtx.placedMarker === false) {
    sidebarContent = sidebarWelcome;
    //When the main marker is placed.
  } else if (appCtx.placedMarker) {
    sidebarContent = sidebarAdd;
    //When the main marker is not placed and there are one or more places added.
  } else if (appCtx.placedMarker === false && appCtx.markers.length > 0) {
    sidebarContent = allPlaces;
  }

  return (
    <aside className="sidebar">
      <img className="logo" src={logo} alt="App logo" />
      {sidebarContent}
    </aside>
  );
};

export default Sidebar;

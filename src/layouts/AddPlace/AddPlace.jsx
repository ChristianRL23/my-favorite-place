import './AddPlace.scss';
import category from './category.svg';
import description from './description.svg';
import name from './name.svg';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useContext } from 'react';
import AppContext from '../../context/appContext';

const AddPlace = ({ error, setError }) => {
  const appCtx = useContext(AppContext);

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
    appCtx.cleanForm();
  };

  const cancelAddPlace = (e) => {
    e.preventDefault();
    setError(null);
    appCtx.setPlacedMarker(false);
    appCtx.setMarkerPosition(null);
    appCtx.cleanForm();
  };

  return (
    <div className="add-place">
      <h2 className="add-place__title">Agregar un lugar</h2>
      <form onSubmit={addPlace} className="add-place__form">
        <div className="add-place__form__inputs">
          <Input fieldName="name" icon={name} placeholder="Nombre del lugar" />
          <Input fieldName="category" icon={category} placeholder="Categoría" />
          <Input
            fieldName="description"
            icon={description}
            placeholder="Descripción"
            textarea
          />
          {error && (
            <p className="add-place__error-message">
              Ningún campo debe estar vacío.
            </p>
          )}
        </div>

        <div className="add-place__buttons">
          <Button clickFn={addPlace} textContent="Agregar" color="green" />
          <Button clickFn={cancelAddPlace} textContent="Cancelar" color="red" />
        </div>
      </form>
    </div>
  );
};

export default AddPlace;

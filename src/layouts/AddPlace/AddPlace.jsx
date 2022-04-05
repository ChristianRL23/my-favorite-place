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
      <h2 className="add-place__title">Add a place</h2>
      <form onSubmit={addPlace} className="add-place__form">
        <div className="add-place__form__inputs">
          <Input fieldName="name" icon={name} placeholder="Name of the place" />
          <Input fieldName="category" icon={category} placeholder="Category" />
          <Input
            fieldName="description"
            icon={description}
            placeholder="Description"
            textarea
          />
          {error && (
            <p className="add-place__error-message">
              All fields must be filled.
            </p>
          )}
        </div>

        <div className="add-place__buttons">
          <Button clickFn={addPlace} textContent="Add" color="green" />
          <Button clickFn={cancelAddPlace} textContent="Cancel" color="red" />
        </div>
      </form>
    </div>
  );
};

export default AddPlace;

import './Place.scss';

const Place = ({ name, category, description, clickFn }) => {
  return (
    <div onClick={clickFn} className="place">
      <h6 className="place__name">{name}</h6>
      <h6 className="place__category">{category}</h6>
      <p className="place__description">{description}</p>
    </div>
  );
};

export default Place;

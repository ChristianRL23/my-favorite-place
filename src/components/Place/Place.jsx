import './Place.scss';

const Place = ({ name, category, description }) => {
  return (
    <div className="place">
      <h6 className="place__name">{name}</h6>
      <h6 className="place__category">{category}</h6>
      <p>{description}</p>
    </div>
  );
};

export default Place;
import './Welcome.scss';

const Welcome = () => {
  return (
    <div className="welcome">
      <h2 className="welcome__title">Welcome!</h2>
      <p className="welcome__paragraph">
        my favorite place is an application that you can use to register your
        favorite places, such as restaurants, squares, parks, etc.
      </p>
      <p className="welcome__paragraph">
        Start by using the map to place a marker on one of your favorite places!
      </p>
    </div>
  );
};

export default Welcome;

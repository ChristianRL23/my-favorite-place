import './Welcome.scss';

const Welcome = () => {
  return (
    <div className="welcome">
      <h2 className="welcome__title">¡Bienvenid@!</h2>
      <p className="welcome__paragraph">
        my favorite place es una aplicación que puedes usar para registar tus
        lugares favoritos, tales como restaurantes, plazas, parques, etc.
      </p>
      <p className="welcome__paragraph">
        ¡Comienza usando el mapa para colocar un marcador en uno de tus lugares
        favoritos!
      </p>
    </div>
  );
};

export default Welcome;

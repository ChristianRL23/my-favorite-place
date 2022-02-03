import './Place.scss';

const Place = ({ name, category }) => {
  return (
    <div className="place">
      <h6 className="place__name">Place name</h6>
      <h6 className="place__category">Category</h6>
      <p>
        Esta es una descripcion larga jajajajadjfasdjf adsjf kdsfj
        asdfjsdajfldsf jds fdsfhds fh sdfhsdhfjasdhfjsfgsd
      </p>
    </div>
  );
};

export default Place;

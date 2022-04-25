const Gentleman = ({ gentleman }) => {
  const { name, status, profession, twitter, picture, alternativeText } =
    gentleman;
  const firstNameLetterCapitalize = name[0].toUpperCase();

  return (
    <>
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={`./img/${picture}`}
          alt={alternativeText}
        />
        <span className="gentleman__initial">{firstNameLetterCapitalize}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span> {status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span> {twitter}
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </>
  );
};

export default Gentleman;

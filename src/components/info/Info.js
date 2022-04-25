const Info = ({ nameClass, numOfGentlemen }) => {
  return (
    <p className={nameClass}>{numOfGentlemen} gentlemen pointing at you</p>
  );
};

export default Info;

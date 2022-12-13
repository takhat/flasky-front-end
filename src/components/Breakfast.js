import "./Breakfast.css";
import propTypes from "prop-types";

const Breakfast = ({ name, description, prepTime, rating }) => {
  // const name = props.name;
  // const description = props.description;
  // const prepTime = props.prepTime;
  // const rating = props.rating;

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="emphasizedText">Prep time: {prepTime} minutes</p>
      <p className="emphasizedText">Rating: {rating} stars</p>
    </div>
  );
};

Breakfast.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  prepTime: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
};
export default Breakfast;

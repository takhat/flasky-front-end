import "./Breakfast.css";
import propTypes from "prop-types";
import { useState } from "react";

const Breakfast = ({ name, description, prepTime }) => {
  // const name = props.name;
  // const description = props.description;
  // const prepTime = props.prepTime;
  // const rating = props.rating;

  const [rating, setRating] = useState(0);
  // const rating = useState[0];
  // const setRating = useState[1];

  const [breakfastName, setBreakfastName] = useState("");

  const increaseRating = () => setRating(rating + 1);

  const handleClick = () => {
    increaseRating();
    console.log("rating", rating);
  };
  const handleChange = (event) => {
    setBreakfastName(event.target.value);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="emphasizedText">Prep time: {prepTime} minutes</p>
      <p className="emphasizedText">Rating: {rating} stars</p>
      <p>Your {breakfastName} is cool.</p>
      <form>
        <input onChange={handleChange}></input>
      </form>
      <button onClick={handleClick}>Update Rating</button>
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

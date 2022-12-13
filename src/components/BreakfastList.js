import Breakfast from "./Breakfast";
import PropTypes from "prop-types";

const BreakfastList = ({ breakfastData }) => {
  //const breakfastData = props.breakfastData;

  const breakfastComponents = breakfastData.map((breakfast) => {
    return (
      <li key={breakfast.id}>
        <Breakfast
          name={breakfast.name}
          description={breakfast.description}
          prepTime={breakfast.prepTime}
          rating={breakfast.rating}
        />
      </li>
    );
  });
  //rating={breakfast.rating}
  return <ul>{breakfastComponents}</ul>;
};

BreakfastList.propTypes = {
  breakfastData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BreakfastList;

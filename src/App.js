import "./App.css";
import BreakfastList from "./components/BreakfastList";

function App() {
  const name = "Cheetahs";
  const breakfastData1 = [
    {
      id: 1,
      name: "Sandwich",
      description: "Everyone's fav in the house",
      prepTime: 50,
      rating: 5,
    },
    {
      id: 2,
      name: "Paratha",
      description: "yumm",
      prepTime: 60,
      rating: 4,
    },
    {
      id: 3,
      name: "Yogurt and granola",
      description: "pretty good",
      prepTime: 5,
      rating: 3,
    },
  ];
  const breakfastData2 = [
    {
      id: 2,
      name: "Paratha",
      description: "yumm",
      prepTime: 60,
      rating: 4,
    },
    {
      id: 3,
      name: "Yogurt and granola",
      description: "pretty good",
      prepTime: 5,
      rating: 3,
    },
  ];
  return (
    <div>
      <h1>{name} Breakfast App</h1>
      <h2>Breakfast List 1</h2>
      <BreakfastList breakfastData={breakfastData1} />
      <h2>Breakfast List 2</h2>
      <BreakfastList breakfastData={breakfastData2} />
    </div>
  );
}

export default App;

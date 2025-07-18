import PersonCard from "./components/PersonCard.jsx";
import "./App.css";
import Button from "./components/Button.jsx";
import images from "./assets/images/patrickstar.jpeg";
function App() {
  function handleClick() {
    console.log("Button clicked!");
  }

  return (
    <>
      <img src={images} />
      <h1>Components-Practice</h1>
      <PersonCard name="Patrick Star" age={30} />
      <Button onClick={handleClick} text="Click for console message" />
    </>
  );
}

export default App;

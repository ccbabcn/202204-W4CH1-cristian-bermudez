import "./App.css";
import Button from "../src/components/button/Button";
import Info from "./components/info/Info";
import Gentleman from "./components/gentleman/Gentleman";
import gentlemen from "./gentlemenlist";

function App() {
  return (
    <div className="App">
      <Info nameClass={"info"} numOfGentlemen={0} />
      <Button nameClass={"button button--select"} text={"Select all"} />
      <Gentleman gentlemen={gentlemen[0]} />
    </div>
  );
}

export default App;

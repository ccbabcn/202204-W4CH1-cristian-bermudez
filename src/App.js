import Button from "../src/components/button/Button";
import Info from "./components/info/Info";
import Gentleman from "./components/gentleman/Gentleman";
import gentlemen from "./gentlemenlist";

function App() {
  const numberGentlemanPoiting = (allGentlemen) => {
    const totalSelected = allGentlemen.filter((gentleman) => {
      return gentleman.selected;
    });
    return totalSelected.length;
  };

  function createGentlemanCard(allGentlemen) {
    return allGentlemen.map((gentleman) => (
      <li key={gentleman.id} className={"gentleman"}>
        {<Gentleman gentleman={gentleman} />}
      </li>
    ));
  }

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info
          nameClass={"info"}
          numOfGentlemen={numberGentlemanPoiting(gentlemen)}
        />
        <Button nameClass={"button button--select"} text={"Select all"} />
      </section>
      <main className="main">
        <ul className="gentlemen">{createGentlemanCard(gentlemen)}</ul>
      </main>
    </div>
  );
}

export default App;

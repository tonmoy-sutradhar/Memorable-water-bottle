import reactLogo from "./assets/react.svg";
import "./App.css";
import Bottles from "./assets/Component/Header/Bottles";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Memorable Water Bottle</h2>
      <Bottles></Bottles>
    </>
  );
}

export default App;

import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <h1 className="">Rick and Morty</h1>
      <Outlet />
    </main>
  );
}

export default App;

import "./App.css";

import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Rick and Morty</h1>
      <nav>
        <ul>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CharactersPage } from "./CharactersPage.tsx";
import { CharacterDetails } from "./CharacterDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // TODO
    // action: async () => {
    //   console.log("dziala?");

    //   return redirect("/characters");
    // },
    children: [
      {
        path: "/characters",
        element: <CharactersPage />,
        children: [
          // {
          //   path: ":characterId",
          //   element: <CharacterDetails />,
          // },
        ],
      },
      // {
      //   path: "/test",
      //   element: <p>uwaga</p>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  // <App />
  <RouterProvider router={router} />
  // </React.StrictMode>
);

import { Fragment } from "react";
import "./App.css";
import { ThemeProvider } from "./ThemeProvider";
import { FallBackPage } from "@/pages";
import { Router } from "@/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Fragment>
        <RouterProvider router={Router} fallbackElement={<FallBackPage />} />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;

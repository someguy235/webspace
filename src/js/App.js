import { StrictMode, useState } from "react";
import { render } from "react-dom";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Sections from "./Sections";

const App = () => {
  const [section, setSection] = useState("about");
  return (
    // <BrowserRouter>
    // <Switch>
    // <Route path="/">
    <div id="content">
      <Header />

      <div id="main">
        <div id="main-content">
          <div id="main-columns">
            <Menu section={section} setSection={setSection} />
            <Sections section={section} />
          </div>
        </div>
      </div>
    </div>
    // </Route>
    // </Switch>
    // </BrowserRouter>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

import Menu from "../components/Menu";
import { BrowserRouter as Router } from "react-router-dom";

import InputMain from "../components/InputMain";
import ButtonMain from "../components/ButtonMain";

import "../styles/app.css";
import TitleMain from "../components/TitleMain";

function App() {
  return (
    <div className="menu">
      <Router>
        <Menu />
        <div className="main">
          <TitleMain />
          <InputMain />
          <ButtonMain />
        </div>
      </Router>
    </div>
  );
}

export default App;

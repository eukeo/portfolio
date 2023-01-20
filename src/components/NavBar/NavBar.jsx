import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [modeChange, setModeChange] = useState(false);
  const [modeName, setModeName] = useState("Light Mode");

  const modeChangeHandler = () => {
    if (modeChange === true) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setModeName("Light Mode");
    } else if (modeChange === false) {
      document.body.style.backgroundColor = "#222";
      document.body.style.color = "white";
      setModeName("Dark Mode");
    }
    setModeChange(!modeChange);
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="projects">Projects</Link>
      <Link to="contact">Contact</Link>
      <a onClick={modeChangeHandler}>{modeName}</a>
    </nav>
  );
}

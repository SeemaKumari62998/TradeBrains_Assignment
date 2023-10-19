import React from "react";
import Logo from "../../assets/back.png";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const navigator = () => {
    navigate("/");
  };

  return (
    <div className="header">
      {/* <div className="logo__container">
        {" "}
        <img className="logo" src={Logo} alt="Logo" onClick={navigator} />
      </div> */}
      <div>
        <Link to="/" className="home">
          Home
        </Link>
      </div>
    </div>
  );
}

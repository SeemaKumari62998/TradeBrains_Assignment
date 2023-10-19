import React from "react";

import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const navigator = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <div>
        <Link to="/" className="home">
          Home
        </Link>
      </div>
    </div>
  );
}

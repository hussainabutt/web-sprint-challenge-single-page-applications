import React from "react";

export default function Header(props) {
  return (
    <header>
      <h1 className="logo">LAMBDA EATS</h1>
      <ul className="links">
        <a href="/">
          <li>Home</li>
        </a>
      </ul>
    </header>
  );
}

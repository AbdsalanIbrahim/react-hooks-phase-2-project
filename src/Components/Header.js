import React from "react";
import NavBar from "./NavBar";

const Header = ({ setSearch }) => {
  return (
    <header>
      <div className="header-title">
        Emoji
        <img
          className="app-logo"
          alt="thinker"
          src="https://cdn-icons-png.flaticon.com/512/1161/1161186.png?w=1380&t=st=1680227639~exp=1680228239~hmac=1cc789fc3420c4f745543041d6de54e59505b003bb81ba59c93853cce2688e2f"
        />
        World
      </div>
      {/* passing in {setSearch} to pass into NavBar because that's where our search input is located */}
      <NavBar setSearch={setSearch} />
    </header>
  );
};

export default Header;
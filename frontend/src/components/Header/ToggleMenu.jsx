import PropTypes from "prop-types";
import "./styles.css";
import { useState } from "react";

function ToggleMenu({ toggleMenu }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="flex items-center md:hidden">
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none no-highlight"
      >
        <svg
          className={`ham hamRotate ham4 no-highlight ${isActive ? "active" : ""}`}
          viewBox="0 0 50 50"
          width="50"
          height="50"
          onClick={handleClick}
        >
          <path
            className="line top"
            d="m 35,16.5 h -20 c 0,0 -4.25,-0.074898 -4.25,4.25 0,4.324898 4.25,4.25 4.25,4.25 h 10 v -10"
          />
          <path className="line middle" d="m 35,25 h -20" />
          <path
            className="line bottom"
            d="m 15,33.5 h 20 c 0,0 4.25,0.074898 4.25,-4.25 0,-4.324898 -4.25,-4.25 -4.25,-4.25 h -10 v 10"
          />
        </svg>
      </button>
    </div>
  );
}

ToggleMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default ToggleMenu;

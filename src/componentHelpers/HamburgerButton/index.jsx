import React from "react";
import PropTypes from "prop-types";
import "./HamburgerButton.scss";

const HamburgerButton = ({
  className,
  height,
  width,
  isActive,
  clickHandler,
}) => {
  return (
    <button
      type="button"
      onClick={clickHandler}
      className={`button-hamburger ${className} ${isActive ? "active" : ""}`}
    >
      <svg
        className="button-hamburger-svg"
        style={{ height, width }}
        viewBox="0 0 120 120"
      >
        <g>
          <path
            className="button-hamburger-line top"
            d="M35,35h50c14.1,0,50.6,13,20.5,53.5s-121.9,21.6-94.4-40.3S111.6,8.4,85,35L35,85"
          />
          <path
            className="button-hamburger-line bottom"
            d="M35,85h50c14.1,0,50.6-13,20.5-53.5S-16.4,9.9,11.1,71.8S111.6,111.6,85,85L35,35"
          />
          <line
            className="button-hamburger-line cross"
            x1="35"
            y1="60"
            x2="85"
            y2="60"
          />
        </g>
      </svg>
    </button>
  );
};

HamburgerButton.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  isActive: PropTypes.bool,
  clickHandler: PropTypes.func,
};

HamburgerButton.defaultProps = {
  className: "hamburger-class",
  height: "100px",
  width: "100px",
  isActive: false,
  clickHandler: () => {},
};

export default HamburgerButton;

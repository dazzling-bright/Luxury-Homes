import React, { useState } from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  onClick,
  backgroundColor,
  textColor,
  className = "",
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? textColor : backgroundColor,
    color: isHovered ? backgroundColor : textColor,
    borderRadius: "0.375rem",
    padding: "0.25rem 1rem",
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`max-w-fit ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  backgroundColor: "rgba(251,133,0,1)",
  textColor: "rgb(255, 255, 255)",
};

export default Button;

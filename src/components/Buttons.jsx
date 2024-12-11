import React from 'react';
import Icons from '../components/Icons';
import '../assets/styles/common.css';

function Buttons({
  buttonClass,
  backgroundColor,
  borderColor,
  borderRadius,
  textContent,
  textColor,
  iconName,
  iconSize,
  iconClass,
}) {

  return (
    <button
      className={`p-3 ${buttonClass} flex justify-center items-center bg-${backgroundColor || "colorB"} ${borderRadius || "rounded-lg"} border-${borderColor || "colorB"} border`}
    >
      <Icons
        iconName={iconName || ""}
        iconClass={iconClass + " mr-2 fill-white" || ""}
        iconSize={iconSize || "20px"}
      />
      <p className={`text-base text-${textColor || "white"}`}>{textContent || "Content"}</p>
    </button>
  );
}

export default Buttons;
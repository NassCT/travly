import React from 'react';
import Icons from '../components/Icons';
import '../assets/styles/common.css';

function Buttons({
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
      className={`px-3 py-3 flex justify-center items-center ${backgroundColor || "bg-colorB"} ${borderRadius || "rounded-lg"} ${borderColor} border`}
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
import React from "react";

function Popup({
  message = "Message envoyé avec succès",
  position = "top-20 left-2",
  backgroundColor = "bg-green-500",
  textColor = "text-white",
  borderRadius = "rounded-md",
  animation = "fadein 0.5s",
}) {
  const popupStyle = {
    animation,
  };

  const fadeinKeyframes = `
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;

  return (
    <>
      <style>{fadeinKeyframes}</style>
      <div
        className={`fixed ${position} p-4 z-50 ${backgroundColor} ${textColor} ${borderRadius}`}
        style={popupStyle}
      >
        <p>{message}</p>
      </div>
    </>
  );
}

export default Popup;

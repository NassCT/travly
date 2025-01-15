import React from "react";
import Conditions from "../components/Conditions";
import Buttons from "../components/Buttons";

function PageConditions() {
  return (
    <>
      <div className="flex gap-2 p-10 pb-4">
        <Buttons
          onClick={() => window.history.back()}
          textContent="Retour"
          buttonClass={"px-10 border-1 border-colorW hover:bg-colorG"}
        />
      </div>
      <Conditions />
    </>
  );
}

export default PageConditions;

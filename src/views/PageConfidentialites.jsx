import React from "react";
import Confidentialites from "../components/Confidentialites";
import Buttons from "../components/Buttons";

function PageConfidentialites() {
  return (
    <>
      <div className="flex gap-2 p-10 pb-4">
        <Buttons
          onClick={() => window.history.back()}
          textContent="Retour"
          buttonClass={"px-10 border-1 border-colorW hover:bg-colorG"}
        />
      </div>
      <Confidentialites />
    </>
  );
}

export default PageConfidentialites;

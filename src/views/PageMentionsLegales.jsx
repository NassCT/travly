import React from "react";
import MentionsLegales from "../components/MentionsLegales";
import Buttons from "../components/Buttons";

function PageMentionsLegales() {
  return (
    <>
      <div className="flex gap-2 p-10 pb-4">
        <Buttons
          onClick={() => window.history.back()}
          textContent="Retour"
          buttonClass={"px-10 border-1 border-colorW hover:bg-colorG"}
        />
      </div>
      <MentionsLegales />
    </>
  );
}

export default PageMentionsLegales;

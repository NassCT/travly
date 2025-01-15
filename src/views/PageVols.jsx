import React from "react";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";
import FetchFlights from "../components/FetchFlights";

function PageVols() {
  return (
    <>
      <div className="flex gap-2 pl-20 py-6 bg-colorB">
        <Link to="/Vols">
          <Buttons
            textContent="Vols"
            iconName={"plane"}
            buttonClass={"px-10 border-1 border-colorW bg-colorG"}
          />
        </Link>
        <Link to="/Hotels">
          <Buttons
            textContent="Hôtels"
            iconName={"hotel"}
            buttonClass={"px-10 border-1 border-colorW hover:bg-colorG"}
          />
        </Link>
      </div>

      <FetchFlights />
    </>
  );
}

export default PageVols;

import React from "react";
import Buttons from "../components/Buttons";
import Formulaire from "../components/Formulaire";

function pageContact() {
  return (
    <div>
      <section className="relative p-10">
        <Buttons
          onClick={() => window.history.back()}
          textContent="Retour"
          buttonClass={"px-10 border-1 border-colorW hover:bg-colorG"}
        />

        <Formulaire
          inputTextColor="text-colorB"
          inputBgColor="bg-colorW"
          inputBorder="text-colorB"
          inputBorderRadius="rounded-lg"
          inputNomText="Nom"
          inputPrenomText="Prénom"
          inputMailText="Email"
          inputSujetText="Sujet"
          inputMessageText="Message"
        />
      </section>
    </div>
  );
}

export default pageContact;

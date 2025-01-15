import React from "react";

function Banniere() {
  return (
    <section className="relative p-6">
      <div className="relative max-w-6xl mx-auto">
        <img
          src="./src/assets/images/viewPlane.webp"
          alt="Image avec une vue d'un avion au-dessus des nuages, symbolisant un voyage"
          className="w-full h-60 md:h-80 object-cover rounded-xl"
        />

        <div
          className="absolute inset-0 bg-colorB opacity-50 rounded-xl z-0"
          aria-hidden="true"
        ></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start text-start text-white px-4 md:ml-10">
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            Allez plus loin, rapprochez-vous
          </h2>
          <p className="text-sm md:text-lg mb-6">
            Envolez-vous vers votre destination de rêve à des prix qui vous
            surprendront.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banniere;

import React from 'react';

function Banniere() {
  return (
    <section className="relative py-28">

    <div className="relative max-w-6xl mx-auto">

        <img 
          src="./src/assets/images/viewPlane.webp" 
          alt="Bannière de voyage"
          className="w-full h-80 object-cover rounded-xl" 
        />

        <div className="absolute inset-0 bg-colorB opacity-50 rounded-xl z-0"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start text-start text-white ml-10">
          <h2 className="text-3xl font-bold mb-4">Allez plus loin, rapprochez-vous</h2>
          <p className="text-lg mb-6">Éclipsez-vous pour un séjour romantique à l'hôtel avec des prix que vous allez adorer.</p>
          <button className="bg-colorB text-white py-2 px-6 rounded-lg">
            Rechercher
          </button>
        </div>

    </div>

    </section>
  )
}

export default Banniere;
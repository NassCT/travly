import React from "react";
import Icons from "./Icons";

function HotelPays() {
    return (
        <section className="hidden md:block p-20">

        <h1 className="text-3xl font-bold mb-4">
            Hôtels dans votre pays
        </h1>
        <p className="text-gray-600 mb-8">
            Pas besoin d’aller très loin pour vivre votre prochaine aventure. Découvrez des hôtels juste à côté de chez vous.
        </p>

      <div className="flex flex-wrap md:gap-20 lg:gap-32 justify-start">

        <div>
          <Icons iconName="hotel"
          aria-label="Icône représentant un hôtel" />
          <p className="text-gray-600 font-bold mt-2">Plusieurs enseignes hôtelières au choix</p>
          <p className="text-gray-800 text-lg font-bold">+ de 60</p>
        </div>

        <div>
          <Icons iconName="location" 
          aria-label="Icône de localisation"/>
          <p className="text-gray-600 font-bold mt-2">Des hôtels à découvrir</p>
          <p className="text-gray-800 text-lg font-bold">+ de 5 000</p>
        </div>

        {/* <div>
          <Icons iconName="location" />
          <p className="text-gray-600 font-bold mt-2">Des hôtels à découvrir</p>
          <p className="text-gray-800 text-lg font-bold mt-[-5px]">+ de 5 000</p>
        </div> */}

      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mt-12 px-20">

        <div className="flex flex-col items-center">
          <img
            src="/src/assets/images/etiquette.png"
            alt=""
            aria-hidden="true"
            className="w-40 h-40 md:w-56 md:h-56 object-contain"
          />
          <h2 className="md:text-xl text-center font-bold mt-4 lg:text-2xl">Offres d’hôtel avantageuses</h2>
          <p className="text-gray-600 text-center mt-6">
            Nous recherchons les offres des principaux hôtels du monde entier et mettons les résultats à votre disposition.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/src/assets/images/cloche.png"
            alt=""
            aria-hidden="true"
            className="w-40 h-40 md:w-56 md:h-56 object-contain"
          />
          <h2 className="md:text-xl text-center font-bold mt-4 lg:text-2xl">Prix actualisés</h2>
          <p className="text-gray-600 text-center mt-6">
            Nous vous montrons toujours les prix les plus récents que nous pouvons trouver, afin que vous sachiez exactement à quoi vous attendre.
          </p>
        </div>

        <div className="flex flex-col items-center mt-8 lg:mt-0">
          <img
            src="/src/assets/images/globe.png"
            alt=""
            aria-hidden="true"
            className="w-40 h-40 md:w-56 md:h-56 object-contain"
          />
          <h2 className="md:text-xl text-center font-bold mt-4 lg:text-2xl">Recherche précise</h2>
          <p className="text-gray-600 text-center mt-6">
            Trouvez des hôtels avec piscine, annulation gratuite et réservation flexible. Ou ce qui compte le plus pour vous.
          </p>
        </div>

      </div>

    </section>
    );
  }

  export default HotelPays;
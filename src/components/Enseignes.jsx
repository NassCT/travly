import React from 'react';

function Enseignes() {
  return (
    <section className="hidden md:block text-left px-4 sm:px-6 md:px-16 lg:px-32 xl:px-96 py-10 sm:py-12 md:py-16">

        <h1 className="text-2xl font-bold mb-8 text-center sm:text-left">
            Comparez les hôtels de vos enseignes préférées
        </h1>

        <div className="flex flex-wrap lg:flex-nowrap justify-start gap-8">
            <img src="/src/assets/images/booking.png" 
            alt="Logo de Booking.com, plateforme de réservation d'hôtels" 
            className="w-24 h-auto object-contain sm:w-20 md:w-22 lg:w-24" />
            <img src="/src/assets/images/trip.png" 
            alt="Logo de Trip.com, plateforme de réservation de voyages" 
            className="w-24 h-auto object-contain sm:w-20 md:w-22 lg:w-24" />
            <img src="/src/assets/images/hotels.png" 
            alt="Logo d'Hotels.com, site de comparaison d'hôtels" 
            className="w-24 h-auto object-contain sm:w-20 md:w-22 lg:w-24" />
            <img src="/src/assets/images/hyatt.png" 
            alt="Logo de Hyatt, chaîne d'hôtels de luxe" 
            className="w-24 h-auto object-contain sm:w-20 md:w-22 lg:w-24" />
            <img src="/src/assets/images/expedia.jpg" 
            alt="Logo d'Expedia, agence de voyages en ligne" 
            className="w-24 h-auto object-contain sm:w-20 md:w-22 lg:w-24" />
            <img src="/src/assets/images/intercontinental.png" 
            alt="Logo de Intercontinental, chaîne hôtelière internationale" 
            className="w-24 h-auto object-contain sm:w-20 md:w-22 lg:w-24" />
        </div>

        <h1 className="text-2xl font-bold mb-4 mt-10 text-center sm:text-left">
            Hôtels dans votre pays
        </h1>
        <p className="text-gray-600 text-sm text-center sm:text-left">
            Pas besoin d’aller très loin pour vivre votre prochaine aventure. Découvrez des hôtels juste à côté de chez vous.
        </p>

    </section>
  );
}

export default Enseignes;
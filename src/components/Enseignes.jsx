import React from 'react';

function Enseignes() {
  return (
    <section className="hidden md:block text-left px-4 sm:px-6 md:px-16 lg:px-32 xl:px-96 py-10 sm:py-12 md:py-16">

        <h1 className="text-2xl font-bold mb-8 text-center sm:text-left">
            Comparez les hôtels de vos enseignes préférées
        </h1>

        <div className="flex flex-wrap lg:flex-nowrap justify-start gap-8">
            <img src="/src/assets/images/booking.png" alt="Booking" className="w-24 h-auto object-contain sm:w-20 md:w-22 lg:w-24" />
            <img src="/src/assets/images/trip.png" alt="Trip" className="w-24 h-auto object-contain sm:w-20 md:w-22 lg:w-24" />
            <img src="/src/assets/images/hotels.png" alt="Hotels" className="w-24 h-auto object-contain sm:w-20 md:w-22 lg:w-24" />
            <img src="/src/assets/images/hyatt.png" alt="Hyatt" className="w-24 h-auto object-contain sm:w-20 md:w-22 lg:w-24" />
            <img src="/src/assets/images/expedia.jpg" alt="Expedia" className="w-24 h-auto object-contain sm:w-20 md:w-22 lg:w-24" />
            <img src="/src/assets/images/intercontinental.png" alt="Intercontinental" className="w-24 h-auto object-contain sm:w-20 md:w-22 lg:w-24" />
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
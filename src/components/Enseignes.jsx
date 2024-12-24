import React from 'react';

function Enseignes() {
  return (
    <section className="text-left px-96 py-20">

        <h1 className="text-2xl font-bold mb-8">
            Comparez les hôtels de vos enseignes préférées
        </h1>

        <div className="flex justify-start gap-10">
            <img src="/src/assets/images/booking.png" alt="Booking" className="w-24 h-auto object-contain" />
            <img src="/src/assets/images/trip.png" alt="Trip" className="w-24 h-auto object-contain" />
            <img src="/src/assets/images/hotels.png" alt="Hotels" className="w-24 h-auto object-contain" />
            <img src="/src/assets/images/hyatt.png" alt="Hyatt" className="w-24 h-auto object-contain" />
            <img src="/src/assets/images/expedia.jpg" alt="Expedia" className="w-24 h-auto object-contain" />
            <img src="/src/assets/images/intercontinental.png" alt="Intercontinental" className="w-24 h-auto object-contain" />
        </div>

        <h1 className="text-2xl font-bold mb-4 mt-10">
            Hôtels dans votre pays
        </h1>
        <p className="text-gray-600 text-sm">
            Pas besoin d’aller très loin pour vivre votre prochaine aventure. Découvrez des hôtels juste à côté de chez vous.
        </p>

    </section>
  );
}

export default Enseignes;
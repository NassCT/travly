import React from 'react'
import Buttons from './Buttons'

function BannierReservHotel() {
  return (
    <section className='relative p-6 m-10'>

        <div className='bg-colorB text-white p-8 rounded-lg w-full mx-auto'>
            <h1 className='text-5xl font-semibold mb-4'>
                Économisez sur votre prochaine réservation d'hôtel
            </h1>
            <div className='max-w-lg mb-4'>

            <p className='text-sm mb-6'>
            Nous avons soigneusement sélectionné pour vous les offres 
            d'hôtels les plus intéressantes. Trouvez la chambre parfaite 
            à un prix encore plus avantageux.
            </p>
            </div>
            <Buttons textContent="Rechercher" 
          aria-label="Bouton de recherche"/>
        </div>

    </section>
  )
}

export default BannierReservHotel

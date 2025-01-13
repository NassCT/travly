import React from 'react'
import Buttons from './Buttons'

function BannierReservHotel({
  classSectionBannier ="relative p-6 m-10",
  classBannier = "bg-colorB text-white p-8 rounded-lg w-full mx-auto",
  classBannierHeading = "text-4xl font-bold pb-4",
  classBannierContent = "w-8/12 mb-4",

}) {
  return (
    <section className={classSectionBannier}>

        <div className={classBannier}>
            <h1 className={classBannierHeading}>
                Économisez sur votre prochaine réservation d'hôtel
            </h1>
            <div className={classBannierContent}>

              <p className='text-xl mb-6'>
              Nous avons soigneusement sélectionné pour vous les offres 
              d'hôtels les plus intéressantes. Trouvez la chambre parfaite 
              à un prix encore plus avantageux.
              </p>
            </div>
            <Buttons textContent="Rechercher" 
          aria-label="Bouton de recherche"
          buttonClass="opacity-100 hover:opacity-50"/>
        </div>

    </section>
  )
}

export default BannierReservHotel
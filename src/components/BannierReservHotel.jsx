import React from 'react'

function BannierReservHotel({
  classSectionBannier ="relative p-6 m-10",
  classBannier = "bg-colorB text-white pt-10 pb-10 px-10 md:pb-24 md:px-20 rounded-lg w-full mx-auto",
  classBannierHeading = "text-2xl md:text-3xl lg:text-4xl font-bold pb-4",
  classBannierContent = "w-full mb-4",

}) {
  return (
    <section className={classSectionBannier}>

        <div className={classBannier}>
            <h1 className={classBannierHeading}>
                Économisez sur votre prochaine réservation d'hôtel
            </h1>
            <div className={classBannierContent}>

              <p className='text-sm md:text-base mb-6'>
              Nous avons soigneusement sélectionné pour vous les offres d'hôtels les plus intéressantes. Trouvez la chambre parfaite à un prix encore plus avantageux.
              <br />
              Offrez-vous un séjour agréable à des prix compétitifs, pour une expérience de voyage à la fois confortable et abordable.
              </p>
            </div>
        </div>

    </section>
  )
}

export default BannierReservHotel;
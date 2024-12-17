import React from 'react'
import Icons from './Icons'
import Buttons from './Buttons'

function CardHotel({
  mainDiv = 'flex flex-wrap p-2 justify-center gap-6',
  cardClass = "w-full sm:w-[48%] lg:w-[48%] rounded-lg shadow-lg flex bg-colorW",
  imgUrl = "../src/assets/images/pool-hotel.jpg",
  imgClass = "object-cover rounded-lg w-1/3",
  contentClass = "p-4 flex flex-col justify-between w-2/3",
  cardTitle = "Comfort Aparthotel Marseille Prado",
  classCardTitle = "text-xl font-bold",
  distance = "2.7",
  rating = "4",
  iconStar = "star",
  iconClassStar = "fill-colorG",
  iconStarEmpty = "starempty",
  iconClassStarEmpty = "fill-colorG",
  comments = 515,
  priceDiv = 'flex flex-col items-end justify-between w-full',
  price = "250",
  iconHeartEmpty = "heartempty",
  iconClassHeartEmpty = "fill-colorG pl-1",

}) {
  return (
    <> 
      <div className={mainDiv}>

    
        <div className={cardClass}>

          <img 
          src={imgUrl} 
          alt={cardTitle} 
          className={imgClass}
          />

          <div className={contentClass}>
            <div >
              <h3 className={classCardTitle}>{cardTitle}</h3>
              <p className='mt-5 text-lg text-colorGr'>
                <span>{distance}</span> km du centre ville
              </p>
              <div className='flex mt-5'>
                {[...Array(5)].map((_, index) => (
                    index < rating ? (
                    <Icons 
                    key={`star-${index}`}
                      iconName={iconStar}
                      iconClass={iconClassStar}
                    />
                  ) : (
                      <Icons 
                        key={`empty-${index}`}
                        iconName={iconStarEmpty}
                        iconClass={iconClassStarEmpty}
                      />
                    )
                ))}

                <p className='text-sm text-colorGr'>
                  <span>{comments}</span> Commentaire
                </p>
              </div>
            </div>

            <div className={priceDiv}>
              <div className='flex justify-between'>
                <p className='flex p-1 justify-between'>
                  <span>{price}</span> /Nuit
                </p>
                <Icons 
                  iconName={iconHeartEmpty}
                  iconClass={iconClassHeartEmpty}
                />
              </div>
              <div className="">
                <Buttons
                  backgroundColor="colorB"
                  textContent="Voir l'offre"
                  textColor="colorW"
                />
              </div>
            </div>
          </div>

        </div>  
        <div className={cardClass}>

          <img 
          src={imgUrl} 
          alt={cardTitle} 
          className={imgClass}
          />

          <div className={contentClass}>
            <div >
              <h3 className={classCardTitle}>{cardTitle}</h3>
              <p className='mt-5 text-lg text-colorGr'>
                <span>{distance}</span> km du centre ville
              </p>
              <div className='flex mt-5'>
                {[...Array(5)].map((_, index) => (
                    index < rating ? (
                    <Icons 
                    key={`star-${index}`}
                      iconName={iconStar}
                      iconClass={iconClassStar}
                    />
                  ) : (
                      <Icons 
                        key={`empty-${index}`}
                        iconName={iconStarEmpty}
                        iconClass={iconClassStarEmpty}
                      />
                    )
                ))}

                <p className='text-sm text-colorGr'>
                  <span>{comments}</span> Commentaire
                </p>
              </div>
            </div>

            <div className='flex flex-col items-end justify-between p-4 w-full'>
              <div className='flex justify-between'>
                <p className='flex p-1 justify-between'>
                  <span>{price}</span> /Nuit
                </p>
                <Icons 
                  iconName={iconHeartEmpty}
                  iconClass={iconClassHeartEmpty}
                />
              </div>
              <div className="">
                <Buttons
                  backgroundColor="colorB"
                  textContent="Voir l'offre"
                  textColor="colorW"
                />
              </div>
            </div>
          </div>

        </div>  
        
        
      </div>
    </>
  )
}

export default CardHotel

import { useState } from 'react'
import React from 'react'
import Icons from './Icons'
import Buttons from './Buttons'


function Gallery({
    nomHotel = "Hôtel Dieu Intercontiental",
    iconLocation = "location",
    adresseHotel = "1 Place Daviel, 2e Arrondissement, Marseille, 13002, France",
    iconEquipement1 = "wifi",
    nomEqipement1 = "Wifi",
    iconEquipement2 = "parking",
    nomEqipement2 = "Parking",
    iconEquipement3 = "pool",
    nomEqipement3 = "Piscine",
    iconEquipement4 = "gym",
    nomEqipement4 = "Salle de sport",
    rating = "4",
    iconStar = "star",
    iconClassStar = "fill-colorG",
    iconStarEmpty = "starempty",
    iconClassStarEmpty = "fill-colorG",
    mainDiv = "container mx-auto px-4 py-8",
    galleryDiv = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4",
    imageDiv = "aspect-square",
    images = [
        "../src/assets/images/pool-hotel.jpg",
        "../src/assets/images/chambre-hotel.png",
        "../src/assets/images/hotelBain.png",
        "../src/assets/images/hotelInterieur.png",
        "../src/assets/images/hotelSalle.png",
        "../src/assets/images/pool-hotel.jpg",
        "../src/assets/images/hotelVue.png",
        "../src/assets/images/pool-hotel.jpg",
    ],
    imgClass =" w-full h-full object-cover hover:scale-105 rounded-lg shadow-lg cursor-pointer ease-in duration-300",
    iconRight = "fill-colorW cursor-pointer hover:scale-105 absolute right-10 top-1/2 transform -translate-y-1/2",
    iconLeft = "fill-colorW cursor-pointer hover:scale-105 absolute left-10 top-1/2 transform -translate-y-1/2",
    IconCross = "fill-colorW cursor-pointer absolute top-5 right-5",
    lighthBoxImg = "w-10/12 rounded-lg h-4/5 object-contain",
    lightBoxClass = " inset-0  flex bg-black/70 fixed justify-center items-center z-50", 
}) {


    const [lightBox, setLightBox] = useState(false);
    const [currentImg, setCurrentImg] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightBox = (imgUrl, index) => {
        setCurrentImg(imgUrl);
        setCurrentIndex(index);
        setLightBox(true);
    };

    const closeLightBox = () => {
        setLightBox(false);
        setCurrentImg('');
    };

    const nextImg = () =>  {
        if(currentIndex < images.length -1) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            setCurrentImg(images[newIndex]);
        }
    };

    const prevImg = () => {
        if(currentIndex > 0) {
            const newIndex = currentIndex -1;
            setCurrentIndex(newIndex);
            setCurrentImg(images[newIndex])
        }
    };
  return (
    <>
        <div className='container mx-auto px-4 py-8'>
            <div className="flex justify-between items-center mt-5 px-4">
    
                <div className="flex items-center space-x-2">
                    <h3 className="text-2xl md:text-5xl font-bold">{nomHotel}</h3>
                    <div className="flex pl-2">
                        {[...Array(5)].map((__, index) => (
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
                    </div>
                </div>

                <div className='pl-5'>
                    <Icons 
                        iconName="heart" 
                        iconClass="fill-colorG text-lg md:text-2xl"
                    />
                </div>
            </div>


            <div className='flex gap-2 items-center mt-5 px-4'>
                <Icons iconName={iconLocation}/>
                <p>{adresseHotel}</p>
            </div>
            <div className='mt-5 px-4 grid grid-cols-1 sm:grid-cols-1 gap-4'>
                <span className='text-colorGr'>Equipement</span>
                <div className='flex gap-4'>
                    <div className='flex gap-2 items-center'>
                        <Icons
                            iconName={iconEquipement1} 
                        />
                        <p>{nomEqipement1}</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <Icons 
                            iconName={iconEquipement2}
                        />
                        <p>{nomEqipement2}</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <Icons 
                            iconName={iconEquipement3}
                        />
                        <p>{nomEqipement3}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Icons 
                            iconName={iconEquipement4}
                        />
                        <p>{nomEqipement4}</p>
                    </div>

        
                    
                </div>
            </div>

            <div className={mainDiv}>
                <div className={galleryDiv}>

                    {images.map((imgUrl, index) => {

                        return (
                            <div 
                                className={imageDiv}
                                key={index}>
                                    <img 
                                    className={imgClass}
                                    src={imgUrl} alt=""
                                    onClick={() => openLightBox(imgUrl, index)} 
                                    />
                            </div>
                        );
                    })}
                    {lightBox && (


                    <div className={lightBoxClass}
                       >
                        <div onClick={() => closeLightBox()}>
                            <Icons iconName={'xmark'} 
                            iconClass={IconCross}
                            />
                        </div>

                        <div  onClick={() => nextImg()}>
                            <Icons iconName={'arrowright'}
                            iconClass={iconRight}
                        />
                        </div>

                        <img className={lighthBoxImg} src={currentImg} alt="" id='lightBoxImg'/>

                        <div onClick={() => prevImg()}>
                            <Icons iconName={'arrowleft'}
                                iconClass={iconLeft}
                            />
                        </div>
                    </div>
                )}
                </div>
            </div> 
        </div>
    </>
  )
}

export default Gallery

import React, { useState } from "react";
import Icons from "./Icons";

function CardFavoris({
  rating = "4",
  image1Url = "../src/assets/images/pool-hotel.jpg",
  iconHeartFilled = "heart",
  iconClassHeartFilled = "fill-colorG pl-1 cursor-pointer",
  iconHeartEmpty = "heartempty",
  iconClassHeartEmpty = "fill-colorG pl-1 cursor-pointer",
  iconNameStar = "star",
  iconSizeStar = "20px",
  iconClassStar = "",
  iconNameEmpty = "starempty",
  iconSizeStarEmpty = "20px",
  iconClassStarEmpty = "",
  cardTitle = "Hôtel Contenental",
  distance = "0.17 km",
  comments = 252,
  stayDates = "10 déc. - 29 décembre 2024",
  nbAdults = 2,
  adults = "Adults",
  nbRooms = 1,
  rooms = "Chambre",
  price = "",
  perNight = "",
}) {

  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
  }
  return (
    <div className="flex flex-wrap g justify-between px-12 py-6">

        <div

          className="bg-colorW shadow-md mb-5 pb-4 rounded-lg overflow-hidden w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
        >
          <img
            src={image1Url}
            alt={cardTitle}
            className="w-full h-50 object-cover rounded-md"/>
          <div className="flex justify-between items-center mt-4 px-4">
            <h3 className="text-xl font-bold">{cardTitle}</h3>
            <div onClick={toggleFavorite}>
              <Icons
                iconName={isFavorite ? iconHeartFilled : iconHeartEmpty}
                iconClass={isFavorite ? iconClassHeartFilled : iconClassHeartEmpty}
              />
            </div>
          </div>
          <p className=" text-colorGr px-4">
            <span>{distance} du centre ville</span>
          </p>
          <div className="flex items-center mt-2 px-4">
            {[...Array(5)].map((_, index) =>
              index < rating ? (
                <Icons
                  key={`star-${index}`}
                  iconName={iconNameStar}
                  iconClass={`${iconClassStar} fill-colorG`}
                  iconSize={iconSizeStar}
                />
              ) : (
                <Icons
                  key={`empty-${index}`}
                  iconName={iconNameEmpty}
                  iconClass={`${iconClassStarEmpty} fill-colorG`}
                  iconSize={iconSizeStarEmpty}
                />
              )
            )}

            <p className="ml-2">
              <span>{comments}</span> Comments
            </p>
          </div>
          <p className="text-colorGr mt-2 px-4">{stayDates}</p>
          <div className="flex justify-between mt-2 mb-2 px-4">
            <p>
              <span>{nbAdults}</span> {adults}
            </p>
            <p>
              <span>{nbRooms}</span> {rooms}
            </p>
          </div>
          <p className="text-right  right-4 bottom-4 pr-2">
            <span className="font-bold">{price}</span> {perNight}
          </p>
        </div>

    </div>
  );
}

export default CardFavoris;
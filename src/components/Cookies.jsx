import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";

function CookiesComponent() {
  const [showCookies, setShowCookies] = useState(false);

  const locationCookies = useLocation();

  useEffect(() => {
    // Verifier si l'utilisateur a accepté les cookies
    const cookiesConsent = Cookies.get("cookiesConsent");

    setShowCookies(!cookiesConsent);
  }, [locationCookies]);

  const acceptCookies = () => {
    // Les cookies seront conservés pendant 30 jours
    Cookies.set("cookiesConsent", "accepted", { expires: 30 });
    setShowCookies(false);
  };

  const refuseCookies = () => {
    setShowCookies(false);
  };

  const essentialCookies = () => {
    Cookies.set("cookiesConsent", "essential", { expires: 30 });
    setShowCookies(false);
  };

  const closeCookiesPopup = () => {
    setShowCookies(false);
  };

  return (
    <section>
      {showCookies && (
        <div className="fixed bottom-5 left-4 right-4 md:left-1/4 md:right-1/4 bg-white border border-gray-300 shadow-lg p-4 md:p-5 rounded-lg z-50">
          <div className="flex justify-center text-center gap-4 mt-4">
            <p className="text-sm md:text-base">
              Nous utilisons des cookies pour améliorer votre expérience.
              Choisissez vos préférences:
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-4 mt-4">
            <div onClick={closeCookiesPopup} className="w-full sm:w-auto">
              <Buttons
                textContent="Accepter les cookies"
                buttonClass="w-full sm:w-auto bg-colorB text-colorW"
                onClick={acceptCookies}
              />
            </div>
            <div onClick={closeCookiesPopup} className="w-full sm:w-auto">
              <Buttons
                textContent="Cookies essentiels"
                buttonClass="w-full sm:w-auto bg-colorB text-colorW"
                onClick={essentialCookies}
              />
            </div>
            <div onClick={closeCookiesPopup} className="w-full sm:w-auto">
              <Buttons
                textContent="Refuser les cookies"
                buttonClass="w-full sm:w-auto bg-colorB text-colorW"
                onClick={refuseCookies}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CookiesComponent;

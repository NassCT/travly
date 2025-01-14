import React, { useEffect, useState } from 'react'
import Buttons from './Buttons'
import { useLocation } from 'react-router-dom';
import { se } from 'date-fns/locale';
// import { set } from 'date-fns';

function Cookies() {


    const [showCookies, setShowCookies] = useState(false);

    const locationCookies = useLocation();

    useEffect(() => {
        if (locationCookies.pathname === '/PageAccueil' ) {
            setShowCookies(true);
        } else {
            setShowCookies(false);
        }
    }, [locationCookies]);

    const acceptCookies = () => {
        localStorage.setItem('cookiesConsent', 'accepted');
        setShowCookies(false);
    }

    const refuseCookies = () => {
        setShowCookies(false);
    };

    const essentialCookies = () => {
        localStorage.setItem('cookiesConsent', 'essential');
        setShowCookies(false);
    }

    const closeCookiesPopup = () => {
        setShowCookies(false);
    }


  return (
    <section>
        {showCookies && ( 
            <div className='fixed bottom-5 left-5 right-5 bg-white border border-gray-300 shadow-lg p-5 rounded-lg z-50'>

                <div className='flex justify-center gap-4 mt-4'>
                    <p>Nous utilisons des cookies pour améliorer votre expérience. Choisissez vos préférences:</p>
                </div>

                <div className='flex justify-center gap-4 mt-4'>
                    <div onClick={closeCookiesPopup}>
                        <Buttons textContent="Accepter les cookies" 
                            buttonClass="bg-colorB text-colorW" 
                            onClick = {acceptCookies} />
                    </div>
                    <div onClick={closeCookiesPopup}>

                        <Buttons textContent="Cookie essentiels" 
                            buttonClass="bg-colorB text-colorW"
                            onClick = {refuseCookies} />
                    </div>

                    <div onClick={closeCookiesPopup}>

                        <Buttons textContent="Refuser les cookies" 
                            buttonClass="bg-colorB text-colorW"
                            onClick = {essentialCookies} />
                    </div>

                </div>
            </div>
        )}
    </section>
  )
}

export default Cookies

import React from 'react';
import Icons from './Icons';
import { Link } from 'react-router-dom';

function Footer({
  iconClass = "fill-colorW w-6",
  iconNameFacebook ="facebook",
  iconNameInsta ="instagram",
  iconNameX = "x",
  facebookLink = "https://facebook.com",
  instaLink = "https://instagram.com",
  xLink = "https://twitter.com",
}) {

  return (
    <footer className='bg-colorB text-colorW py-10 text-center'>

      <nav className='mx-10 justify-center gap-4 md:grid-cols-2 lg:flex' aria-label='Navigation du pied de page'>

    <div className='grid grid-cols-2 justify-center gap-4 md:grid-cols-2 lg:flex'>

 
          <Link
            to="/mentions-legales"
            className='text-sm sm:text-base hover:underline'
            aria-label='Accéder aux mentions légales'
            >
            Mentions légales
          </Link>
          <Link
            to="/confidentialites"
            className='text-sm sm:text-base hover:underline'
            aria-label='Accéder à la politique de confidentialités'
            >
            Politique de confidentialités
          </Link>
          <Link
            to="/conditions"
            className='text-sm sm:text-base hover:underline'
            aria-label="Accéder aux conditions d'utilisation"
            >
            Conditions d'utilisation
          </Link>
          <Link
            to="/gestion-cookies"
            className='text-sm sm:text-base hover:underline'
            aria-label="Accéder à la politique de gestion des cookies"
            >
            Politique de gestion des cookies
          </Link>
          
        </div>

        <div className='mt-4 md:mt-0'>
            <Link
            to="/contact"
            className='text-sm sm:text-base hover:underline'>
            Contact
          </Link>
        </div>


      </nav>


      <div className='flex justify-center mt-6 gap-4 items-center'>
        <div className='flex gap-2'>
          <a href={facebookLink} className="text-xl" aria-label="Accédez à notre page Facebook" target='_blank' rel='noopener noreferrer'>
            <Icons iconName={iconNameFacebook} iconClass={iconClass} />
          </a>
          <a href={instaLink} className="text-xl" aria-label="Accédez à notre page Instagram" target='_blank' rel='noopener noreferrer'>
            <Icons iconName={iconNameInsta} iconClass={iconClass} />
          </a>
          <a href= {xLink} className="text-xl" aria-label="Accédez à notre page Twitter" target='_blank' rel='noopener noreferrer'>
            <Icons iconName={iconNameX} iconClass={iconClass} />
          </a>
        </div>
        <div className='text-xs'>
        © Travely - 2025
        </div>
      </div>
    </footer>
  );
}

export default Footer;
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
      <div className='grid grid-cols-2 justify-center gap-4 md:grid-cols-2 lg:flex'>
        <Link
          to="/MentionsLegales"
          className='text-sm sm:text-base hover:underline'>
          Mentions légales
        </Link>
        <Link
          to="/Confidentialites"
          className='text-sm sm:text-base hover:underline'>
          Politique de confidentialités
        </Link>
        <Link
          to="/Conditions"
          className='text-sm sm:text-base hover:underline'>
          Conditions d'utilisation
        </Link>
        <Link
          to="/Formulaire"
          className='text-sm sm:text-base hover:underline'>
          Contact
        </Link>
      </div>
      <div className='flex justify-center mt-6 gap-4 items-center'>
        <div className='flex gap-2'>
          <a href={facebookLink} className="text-xl" aria-label="Facebook">
            <Icons iconName={iconNameFacebook} iconClass={iconClass} />
          </a>
          <a href={instaLink} className="text-xl" aria-label="Instagram">
            <Icons iconName={iconNameInsta} iconClass={iconClass} />
          </a>
          <a href= {xLink} className="text-xl" aria-label="Twitter">
            <Icons iconName={iconNameX} iconClass={iconClass} />
          </a>
        </div>
        <div className='text-xs'>
        © Travely - 2024
        </div>
      </div>
    </footer>
  );
}

export default Footer;
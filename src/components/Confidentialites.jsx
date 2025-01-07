import React from 'react'
import Icons from './Icons';

function Confidentialites() {
  return (
    <section>

      <h1 className="text-center text-2xl sm:text-3xl font-bold mt-6">
        Politique de Confidentialités
      </h1>

      <p className="text-center max-w-3xl mx-auto text-base sm:text-lg mt-8">
        Chez Travly, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique quelles informations nous collectons, comment nous les utilisons et quels droits vous avez sur vos données.
      </p>

      <div className="py-10 px-5 mb-10">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <div className="border border-gray-300 p-6 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 md:rounded-none md:border-t-0 md:border-l-0 md:border-r-0 md:border-b">
            <div className="flex-shrink-0 w-20 h-20 sm:w-36 sm:h-36 border border-gray-300 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                <Icons iconName={"info"}/>
            </div>
            <div>
              <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800">Informations que nous collectons</h2>
              <p className="mt-2 text-gray-700">
                Nous collectons les informations suivantes pour améliorer votre expérience utilisateur :
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                <li>Informations fournies par l'utilisateur : Nom, email, préférences de recherche (destinations, dates, etc.).</li>
                <li>Données techniques : Adresse IP, type de navigateur, système d'exploitation.</li>
                <li>Données anonymisées : Statistiques d'utilisation du site pour analyse et optimisation.</li>
              </ul>
            </div>
          </div>

          <div className="border border-gray-300 p-6 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 md:rounded-none md:border-t-0 md:border-l-0 md:border-r-0 md:border-b">
            <div className="flex-shrink-0 w-20 h-20 sm:w-36 sm:h-36 border border-gray-300 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-lg">
              <Icons iconName={"repair"}/>
            </div>
            <div>
              <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800">Utilisation de vos données</h2>
              <p className="mt-2 text-gray-700">Nous utilisons vos données pour :</p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                <li>Vous proposer des offres de voyage personnalisées.</li>
                <li>Améliorer nos services et notre site web.</li>
                <li>Vous envoyer des notifications ou des emails, si vous y consentez.</li>
              </ul>
            </div>
          </div>

          <div className="border border-gray-300 p-6 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 md:rounded-none md:border-t-0 md:border-l-0 md:border-r-0 md:border-b">
            <div className="flex-shrink-0 w-20 h-20 sm:w-36 sm:h-36 border border-gray-300 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-lg">
              <Icons iconName={"userlock"}/>
            </div>
            <div>
              <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800">Partage des données</h2>
              <p className="mt-2 text-gray-700">
                Nous utilisons vos données pour :
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                <li>Vous proposer des offres de voyage personnalisées.</li>
                <li>Améliorer nos services et notre site web.</li>
                <li>Vous envoyer des notifications ou des emails, si vous y consentez.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Confidentialites;
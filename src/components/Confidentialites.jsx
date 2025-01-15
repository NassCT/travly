import React from 'react'
import Icons from './Icons';

function Confidentialites() {
  return (
    <section className="mt-10">

      <h1 className="text-center text-2xl sm:text-3xl font-bold mt-6">
        Politique de Confidentialités
      </h1>

      <p className="text-center max-w-4xl mx-auto text-base lg:text-md mt-8">
        Chez Travly, nous attachons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique quelles informations nous collectons lors de l’utilisation de notre site, comment elles sont utilisées, et quels droits vous avez conformément au Règlement Général sur la Protection des Données (RGPD).
      </p>

      <div className="py-10 px-5 mb-10">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <div className="border border-gray-300 p-6 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 md:rounded-none md:border-t-0 md:border-l-0 md:border-r-0 md:border-b">
            <div className="flex-shrink-0 sm:w-[2rem] sm:h-[2rem] border border-gray-300 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                <Icons iconName={"info"}/>
            </div>
            <div>
              <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800">Informations que nous collectons</h2>
              <p className="mt-2 text-gray-700">
                Nous collectons les informations suivantes pour améliorer votre expérience utilisateur :
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                <li>Informations fournies par l'utilisateur : Préférences de recherche ( par exemple, destinations, dates, etc.).</li>
                <li>Données techniques : Adresse IP, type de navigateur, système d'exploitation, et autres informations liées à votre navigation.</li>
                <li>Données anonymisées : Statistiques d'utilisation de notre site pour analyse et optimisation. Ces données ne permettent pas de vous identifier personnellement.</li>
              </ul>
            </div>
          </div>

          <div className="border border-gray-300 p-6 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 md:rounded-none md:border-t-0 md:border-l-0 md:border-r-0 md:border-b">
            <div className="flex-shrink-0 sm:w-[2rem] sm:h-[2rem] border border-gray-300 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-lg">
              <Icons iconName={"repair"}/>
            </div>
            <div>
              <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800">Utilisation de vos données</h2>
              <p className="mt-2 text-gray-700">Vos données personnelles sont utilisées uniquement dans le cadre des finalités suivantes :</p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                <li>Personnalisation des services : Pour vous proposer des offres adaptées à vos préférences.</li>
                <li>Amélioration des services : Afin d'optimiser les fonctionnalités de notre site web et de mieux répondre à vos attentes.</li>
              </ul>
            </div>
          </div>

          <div className="border border-gray-300 p-6 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 md:rounded-none md:border-t-0 md:border-l-0 md:border-r-0 md:border-b">
            <div className="flex-shrink-0 sm:w-[2rem] sm:h-[2rem]  border border-gray-300 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-lg">
              <Icons iconName={"userlock"}/>
            </div>
            <div>
              <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800">Partage des données</h2>
              <p className="mt-2 text-gray-700">
                Nous nous engageons à protéger la confidentialité de vos données personnelles. Cependant, certaines informations peuvent être partagées dans les cas suivants :
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                <li>Vous proposer des offres de voyage personnalisées.</li>
                <li>Améliorer nos services et notre site web.</li>
                <li>Vous envoyer des notifications ou des emails, si vous y consentez.</li>
              </ul>
            </div>
          </div>


          <div className="border border-gray-300 p-6 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 md:rounded-none md:border-t-0 md:border-l-0 md:border-r-0 md:border-b">
            <div className="flex-shrink-0 sm:w-[2rem] sm:h-[2rem]  border border-gray-300 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-lg">
              <Icons iconName={"userlock"}/>
            </div>
            <div>
              <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800">Vos droits</h2>
              <p className="mt-2 text-gray-700">
                Bien que notre site ne collecte que peu de données personnelles, vous avez les droits suivants :
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                <li>Accès : Savoir quelles données sont collectées.</li>
                <li>Effacement : Demander la suppression des données vous concernant, si applicable.</li>
                <li>Opposition : Vous opposer à l'utilisation de vos données dans certains cas.</li>
              </ul>
              <p>
              Pour toute demande, vous pouvez nous écrire par mail.
              </p>
            </div>
          </div>



          <div className="border border-gray-300 p-6 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 md:rounded-none md:border-t-0 md:border-l-0 md:border-r-0 md:border-b">
            <div className="flex-shrink-0 sm:w-[2rem] sm:h-[2rem] border border-gray-300 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-lg">
              <Icons iconName={"userlock"}/>
            </div>
            <div>
              <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800">Cookies</h2>
              <p className="mt-2 text-gray-700">
                Chez Travly, nous utilisons le stockage local de votre navigateur (localStorage) pour optimiser votre expérience de navigation. Ce stockage nous permet de conserver certaines informations sur votre appareil afin de vous offrir un service fluide et personnalisé, sans nécessiter de compte utilisateur.
                <br />
                Données stockées localement :
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                <li>Préférences de recherche : destinations, dates et filtres pour simplifier vos visites.</li>
                <li>Performances : optimisation des temps de chargement.</li>
                <li>Statistiques anonymisées : analyse pour améliorer nos services.</li>
              </ul>
              <p>
              Vous pouvez à tout moment effacer ces données via les paramètres de votre navigateur.
              </p>
            </div>
          </div>


          <div className="border border-gray-300 p-6 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 md:rounded-none md:border-t-0 md:border-l-0 md:border-r-0 md:border-b">
            <div className="flex-shrink-0 sm:w-[2rem] sm:h-[2rem] border border-gray-300 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-lg">
              <Icons iconName={"userlock"}/>
            </div>
            <div>
            <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800">Durée de conservation des données</h2>
            <p className="mt-2 text-gray-700">
              Les données personnelles collectées sont conservées uniquement pendant la durée nécessaire pour atteindre les objectifs décrits dans cette politique ou pour répondre à des obligations légales. Les données stockées dans votre navigateur peuvent être supprimées à tout moment via les paramètres de celui-ci.
            </p>


            </div>
          </div>


            <div className='mt-32'>
            <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800">Contact pour vos droits</h2>
            <p className="mt-2 text-gray-700">
              Pour toute demande relative à vos données personnelles ou à vos droits, vous pouvez nous contacter à : privacy@travly.com.
            </p>
            </div>

        </div>
      </div>
      
    </section>
  );
}

export default Confidentialites;
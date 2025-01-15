import React from "react";
import { Link } from "react-router-dom";

function Conditions() {
  return (
    <section className="mt-10">
      <h1 className="text-center text-xl md:text-3xl font-bold">
        Conditions d'utilisation
      </h1>

      <div className="px-10 lg:px-20 mx-auto max-w-4xl">
        <section className="py-10">
          <h2 className="text-lg font-semibold">Présentation</h2>
          <p>
            Travly propose des services de recherche et de comparaison pour vos
            besoins de voyage, notamment des vols et des hôtels, accessibles via
            notre site.
          </p>

          <h2 className="text-lg font-semibold mt-8">
            Utilisation des services
          </h2>
          <p>
            Les services fournis par Travly sont destinés à un usage personnel et non commercial. 
            Toute utilisation illégale, abusive, ou qui contrevient aux droits d’autrui est strictement interdite.
          </p>

          <h2 className="text-lg font-semibold mt-8">
            Limitation de responsabilité
          </h2>
          <p>
            Travly ne pourra être tenu responsable en cas de dommages directs ou indirects résultant de l'utilisation des services, 
            notamment en ce qui concerne l'accès non autorisé ou l'utilisation abusive des services.
          </p>

          <h2 className="text-lg font-semibold mt-8">Modifications</h2>
          <p>
            Travly se réserve le droit de modifier, suspendre ou interrompre l'accès aux services à tout moment, sans préavis. 
            Il est recommandé de consulter régulièrement ces conditions.
          </p>

          <h2 className="text-lg font-semibold mt-8">Protection des données personnelles</h2>
          <p>
            En utilisant nos services, vous acceptez la collecte et le traitement de
            vos données personnelles conformément à notre Politique de Confidentialité.
            Nous nous engageons à protéger vos données et à respecter vos droits en vertu
            du Règlement Général sur la Protection des Données (RGPD).
          </p>
          <p>
            Vous avez le droit d'accéder à vos données, de les rectifier, de les effacer, 
            ainsi que de demander la portabilité ou la limitation de leur traitement. 
            Pour plus d’informations, veuillez consulter notre{" "}
            <Link to="/confidentialites" className="hover:underline" aria-label="Accéder à la politique de confidentialités">
              Politique de confidentialité
            </Link>.
          </p>

          <h2 className="text-lg font-semibold mt-8">Utilisation de cookies</h2>
          <p>
            Nous utilisons des cookies pour améliorer l’expérience utilisateur, analyser
            le trafic et fournir des contenus personnalisés. Les cookies sont des fichiers
            déposés sur votre appareil lorsque vous naviguez sur notre site.
          </p>
          <p>
            Avant d'utiliser certains cookies, nous vous demandons de donner votre consentement. Vous pouvez à tout moment modifier vos préférences en matière de cookies.
          </p>
          <p>
            Nous utilisons les types de cookies suivants :
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Cookies nécessaires au bon fonctionnement du site</li>
            <li>Cookies analytiques pour mesurer l’audience du site</li>
            <li>Cookies de personnalisation pour offrir une expérience utilisateur optimale</li>
          </ul>
          <p>
            Vous pouvez accepter ou refuser l’utilisation de cookies via les paramètres
            de votre navigateur. Pour plus d’informations, veuillez consulter notre {" "}
            <Link to="/gestion-cookies" className="hover:underline" aria-label="Accéder à la politique de gestion des cookies">
              Politique de gestion des cookies
            </Link>.
          </p>

          <h2 className="text-lg font-semibold mt-8">Contact</h2>
          <p className="mb-10">
            Si vous avez des questions concernant ces conditions d'utilisation ou notre politique de confidentialité,
            n'hésitez pas à nous contacter en utilisant le formulaire de contact sur notre site ou par email.
          </p>
        </section>
      </div>
    </section>
  );
}

export default Conditions;

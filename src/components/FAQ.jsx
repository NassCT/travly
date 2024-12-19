import React, { useState } from "react";
import Icons from "./Icons";

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    { question: "Qu'est-ce que Travly ?", answer: "Travly est une plateforme de voyage innovante." },
    { question: "Travly est-il gratuit ?", answer: "Oui, l'utilisation de Travly est gratuite." },
    { question: "Puis-je enregistrer mes recherches et offres préférées ?", answer: "La création de compte n'étant pas disponible, vous pouvez ajouter vos offres ou recherches aux favoris." },
    { question: "Quels types de voyages puis-je rechercher sur Travly ?", answer: "Vous pouvez rechercher des vols et des hôtels." },
    { question: "Comment effectuer une recherche de voyage sur Travly ?", answer: "Il suffit d'utiliser notre zone de recherche sur la page d'accueil." },
    { question: "Travly propose-t-il des offres spéciales ou des promotions ?", answer: "Cette option n'est pas disponible actuellement." },
  ];

  return (
    <section className="p-20 pb-40">

      <h2 className="text-2xl font-bold mb-6">FAQ</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {questions.map((item, index) => (
          <div 
          key={index} 
          className="relative border-b border-gray-300 pb-2">
            <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleQuestion(index)}
            >
              <p className="font-semibold">{item.question}</p>
              <span
                className={`transform transition-transform ${
                openQuestion === index ? "rotate-180" : ""
                }`}
              >
                <Icons iconName={"down"}/>         
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openQuestion === index ? "max-h-auto opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-2 text-sm text-gray-600">{item.answer}</div>
            </div>

            <div
            className={`absolute bottom-0 left-0 w-full border-b transition-all duration-300 ease-in-out ${
                openQuestion === index ? "border-gray-500" : "border-transparent"
              }`}
            ></div>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
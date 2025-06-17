
const FAQ = () => {
  const faqs = [
    {
      category: "Generale",
      questions: [
        {
          question: "Cos'è Tutela Impresa e come può aiutare la mia azienda?",
          answer: "Tutela Impresa è una piattaforma digitale completa per la gestione della sicurezza aziendale e della conformità normativa. Ti aiutiamo a digitalizzare tutti i processi HSE, gestire documenti, monitorare scadenze, formare il personale e mantenere la conformità alle normative vigenti, tutto in un'unica soluzione integrata."
        },
        {
          question: "Per quale tipo di aziende è adatta la vostra soluzione?",
          answer: "La nostra piattaforma è progettata per aziende di ogni dimensione e settore. Dal piccolo artigiano alla grande multinazionale, da manifatturiero a servizi, edilizia, alimentare e chimico. Il sistema si adatta alle specifiche esigenze di ogni realtà aziendale."
        },
        {
          question: "Quanto tempo serve per implementare il sistema?",
          answer: "L'implementazione base può essere completata in 24-48 ore. Il nostro team ti assiste nell'onboarding con formazione dedicata, migrazione dei dati esistenti e configurazione personalizzata. In una settimana la tua azienda sarà operativa al 100%."
        }
      ]
    },
    {
      category: "Funzionalità",
      questions: [
        {
          question: "Quali documenti posso gestire con la piattaforma?",
          answer: "Puoi gestire tutti i documenti HSE: DVR, POS, certificati di formazione, attestati medici, certificazioni impianti, schede di sicurezza, procedure operative, verbali di riunione, rapporti di audit e molto altro. Il sistema supporta ogni tipo di file e ne facilita la ricerca e l'organizzazione."
        },
        {
          question: "Come funziona il sistema di alert e notifiche?",
          answer: "Il sistema monitora automaticamente tutte le scadenze e ti invia notifiche personalizzabili via email, SMS o attraverso la dashboard. Puoi impostare promemoria con anticipo variabile (30, 60, 90 giorni) per non perdere mai una scadenza importante."
        },
        {
          question: "Posso accedere alla piattaforma da mobile?",
          answer: "Assolutamente sì! La piattaforma è completamente responsive e ottimizzata per tutti i dispositivi. Puoi accedere da smartphone, tablet o computer, sempre con la stessa esperienza utente fluida e tutte le funzionalità disponibili."
        }
      ]
    },
    {
      category: "Sicurezza & Privacy",
      questions: [
        {
          question: "I miei dati sono al sicuro?",
          answer: "La sicurezza è la nostra priorità assoluta. Utilizziamo crittografia SSL 256-bit, server certificati ISO 27001 in Europa, backup ridondanti e accessi controllati. I tuoi dati sono protetti secondo i più alti standard di sicurezza internazionali e rimangono sempre di tua proprietà."
        },
        {
          question: "Siete conformi al GDPR?",
          answer: "Sì, siamo completamente conformi al GDPR e a tutte le normative europee sulla privacy. Abbiamo implementato misure tecniche e organizzative appropriate per garantire la protezione dei dati personali e il rispetto di tutti i diritti degli interessati."
        },
        {
          question: "Dove sono ospitati i dati?",
          answer: "Tutti i dati sono ospitati su server certificati situati nell'Unione Europea, garantendo il rispetto delle normative europee. Utilizziamo data center di livello enterprise con ridondanza geografica e backup automatici."
        }
      ]
    },
    {
      category: "Prezzi & Supporto",
      questions: [
        {
          question: "Quanto costa il servizio?",
          answer: "I nostri piani partono dal costo di un cappuccino al giorno. Offriamo diverse soluzioni scalabili in base alle dimensioni aziendali e alle funzionalità richieste. Contattaci per un preventivo personalizzato e scopri le promozioni attive."
        },
        {
          question: "C'è un periodo di prova gratuito?",
          answer: "Sì! Offriamo 30 giorni di prova gratuita senza impegni. Potrai testare tutte le funzionalità della piattaforma con il supporto completo del nostro team. Nessun vincolo contrattuale, puoi disdire in qualsiasi momento."
        },
        {
          question: "Che tipo di supporto offrite?",
          answer: "Forniamo supporto multicanale: chat online, telefono, email e videochiamate. Il nostro team di esperti HSE è disponibile durante l'orario lavorativo per assistenza tecnica, consulenza normativa e formazione. Per i clienti premium offriamo anche supporto 24/7."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-brand-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-brand-red rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <span>❓ Domande Frequenti</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Tutte le risposte che
              <br />
              <span className="gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
                stavi cercando
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Abbiamo raccolto le domande più frequenti dei nostri clienti per aiutarti a comprendere meglio la nostra soluzione
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-brand-red to-brand-red-light rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">{categoryIndex + 1}</span>
                  </div>
                  {category.category}
                </h2>
                
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <details 
                      key={faqIndex} 
                      className="group bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300"
                    >
                      <summary className="flex justify-between items-center cursor-pointer list-none">
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                          {faq.question}
                        </h3>
                        <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 group-open:rotate-45 transition-transform duration-300">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                      </summary>
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-red to-brand-red-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Non hai trovato la risposta che cercavi?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Il nostro team di esperti è sempre disponibile per aiutarti con qualsiasi domanda
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Contatta il Supporto
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-brand-red transition-all duration-300 transform hover:scale-105">
              Prenota una Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

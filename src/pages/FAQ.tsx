
const FAQ = () => {
  const faqs = [
    {
      category: "Generale",
      icon: "💼",
      questions: [
        {
          question: "Cos'è Tutela Impresa e come può rivoluzionare la mia azienda?",
          answer: "Tutela Impresa è la piattaforma digitale più avanzata per la gestione completa della sicurezza aziendale e conformità normativa. Utilizziamo intelligenza artificiale, automazione e analytics per digitalizzare tutti i processi HSE, gestire documenti con OCR avanzato, monitorare scadenze in tempo reale, erogare formazione interattiva e garantire conformità totale alle normative vigenti, tutto in un'ecosistema integrato e user-friendly."
        },
        {
          question: "Per quale tipo di aziende è progettata la vostra soluzione?",
          answer: "La nostra piattaforma modulare è stata progettata per adattarsi a qualsiasi realtà aziendale: dal piccolo artigiano con 5 dipendenti alla multinazionale con 50.000 persone. Supportiamo tutti i settori (manifatturiero, edilizia, servizi, alimentare, chimico, sanitario) con configurazioni specifiche e workflow personalizzati per ogni industria."
        },
        {
          question: "Quanto tempo serve per essere operativi al 100%?",
          answer: "Il nostro processo di onboarding rapido garantisce operatività in 24-48 ore per la configurazione base. Il nostro team dedicato ti accompagna con formazione personalizzata, migrazione dati automatizzata, configurazione su misura e integrazione con sistemi esistenti. In una settimana la tua azienda sarà completamente trasformata digitalmente."
        }
      ]
    },
    {
      category: "Funzionalità Avanzate",
      icon: "⚡",
      questions: [
        {
          question: "Quali documenti posso gestire e come funziona l'AI integrata?",
          answer: "Gestiamo ogni tipo di documento HSE con AI avanzata: DVR, POS, certificati, attestati medici, schede sicurezza, procedure, verbali, audit report e molto altro. Il nostro sistema OCR con machine learning estrae automaticamente dati, categorizza documenti, rileva scadenze, suggerisce azioni e crea collegamenti intelligenti tra documenti correlati."
        },
        {
          question: "Come funziona il sistema di alert predittivo?",
          answer: "Il nostro sistema di AI predittiva monitora continuamente tutti i dati e invia notifiche intelligenti multicanale (email, SMS, push, dashboard). Prevede criticità future, suggerisce azioni preventive, escalation automatiche personalizzabili e analytics predittivi per ottimizzare la gestione proattiva della sicurezza."
        },
        {
          question: "L'accesso mobile è davvero completo?",
          answer: "Assolutamente! La nostra app nativa offre esperienza completa su ogni dispositivo: smartphone, tablet, desktop. Funzionalità offline, sincronizzazione automatica, fotocamera integrata per documenti, firma digitale, compilazione form touch-friendly e accesso a tutti i dati in tempo reale."
        }
      ]
    },
    {
      category: "Sicurezza & Compliance",
      icon: "🔒",
      questions: [
        {
          question: "Come garantite la massima sicurezza dei nostri dati sensibili?",
          answer: "Implementiamo i più alti standard di sicurezza globali: crittografia AES-256, server certificati ISO 27001/SOC 2 in Europa, backup ridondanti multi-geografici, accessi zero-trust con autenticazione multi-fattore, monitoraggio 24/7 e audit di sicurezza continui. I tuoi dati rimangono sempre di tua esclusiva proprietà."
        },
        {
          question: "Siete completamente conformi al GDPR e altre normative?",
          answer: "Siamo completamente conformi al GDPR, ISO 27001, SOC 2 e tutte le normative europee privacy. Abbiamo implementato privacy by design, data minimization, right to be forgotten automatico, consent management avanzato e DPO dedicato. Forniamo anche consulenza legale per la compliance normativa."
        },
        {
          question: "Dove risiedono fisicamente i nostri dati?",
          answer: "Tutti i dati risiedono esclusivamente in data center tier-4 certificati nell'Unione Europea (Germania, Irlanda) con ridondanza geografica automatica. Garantiamo sovranità digitale europea, backup immutabili, disaster recovery automatico e compliance totale alle normative EU."
        }
      ]
    },
    {
      category: "Investimento & ROI",
      icon: "💰",
      questions: [
        {
          question: "Qual è l'investimento richiesto e quale ROI posso aspettarmi?",
          answer: "I nostri piani partono da €3.50/giorno (meno di un cappuccino!) con ROI medio del 300% nel primo anno. Riduciamo costi operativi del 60%, tempi amministrativi dell'80%, rischi di non conformità del 95%. Offriamo anche analisi ROI personalizzata e garanzia soddisfatti o rimborsati."
        },
        {
          question: "Posso testare tutto senza impegni?",
          answer: "Certamente! 30 giorni di prova completa gratuita con accesso a tutte le funzionalità premium, supporto dedicato, onboarding personalizzato e migrazione dati inclusa. Zero vincoli contrattuali, cancellazione immediata, export completo dei tuoi dati garantito."
        },
        {
          question: "Che livello di supporto posso aspettarmi?",
          answer: "Supporto multicanale premium: chat live, telefono, email, video-consulenza e portal dedicato. Team di esperti HSE certificati disponibili in orario lavorativo, supporto prioritario per clienti enterprise, training continuo, webinar esclusivi e community di utenti attiva."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(196,30,58,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-brand-red to-blue-600 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-xl">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span>❓ FAQ Premium</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-8 text-gray-900 leading-tight">
              Tutte le risposte che
              <br />
              <span className="relative gradient-text bg-gradient-to-r from-brand-red via-purple-600 to-blue-600 bg-clip-text text-transparent">
                stavi cercando
                <div className="absolute -bottom-4 left-0 right-0 h-3 bg-gradient-to-r from-brand-red/30 via-purple-600/30 to-blue-600/30 rounded-full"></div>
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Le domande più frequenti dei nostri clienti con risposte dettagliate per comprendere ogni aspetto della nostra soluzione innovativa
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="group bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red via-purple-600 to-blue-600"></div>
                
                <div className="flex items-center mb-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-blue-600 rounded-2xl flex items-center justify-center mr-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-gray-800 group-hover:text-brand-red transition-colors duration-300">
                      {category.category}
                    </h2>
                    <p className="text-gray-600 mt-2">Scopri tutto quello che devi sapere</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {category.questions.map((faq, faqIndex) => (
                    <details 
                      key={faqIndex} 
                      className="group/item bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:from-blue-50 hover:to-purple-50 transition-all duration-500 border border-gray-200 hover:border-blue-200"
                    >
                      <summary className="flex justify-between items-start cursor-pointer list-none group-open/item:mb-6">
                        <h3 className="text-xl font-bold text-gray-800 pr-6 leading-relaxed group-hover/item:text-brand-red transition-colors duration-300">
                          {faq.question}
                        </h3>
                        <div className="w-10 h-10 bg-gradient-to-br from-brand-red to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-open/item:rotate-45 transition-transform duration-500 shadow-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                      </summary>
                      <div className="border-t border-gray-200 pt-6">
                        <p className="text-gray-700 leading-relaxed text-lg">
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

      {/* Premium Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-red via-purple-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-8 leading-tight">Non hai trovato la risposta che cercavi?</h2>
            <p className="text-2xl mb-12 opacity-95 leading-relaxed font-light">
              Il nostro team di esperti certificati è sempre disponibile per risolvere ogni tua domanda con consulenza personalizzata
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button className="group bg-white text-brand-red px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center justify-center space-x-3">
                  <span>Contatta il Supporto</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </button>
              <button className="group border-3 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-brand-red transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center justify-center space-x-3">
                  <span>Prenota Demo Live</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

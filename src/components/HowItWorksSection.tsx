
const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Ricevi la Consulenza",
      description: "Consulenza personalizzata per identificare le tue esigenze specifiche e definire la strategia migliore per la tua azienda.",
      icon: "💬",
      delay: "animate-delay-100"
    },
    {
      number: "2", 
      title: "Carica i Dati",
      description: "Caricamento semplificato e sicuro di tutti i tuoi documenti aziendali in un ambiente protetto e organizzato.",
      icon: "📊",
      delay: "animate-delay-200"
    },
    {
      number: "3",
      title: "Verifica Conformità", 
      description: "Analisi automatica della conformità normativa con controlli intelligenti e identificazione delle aree di miglioramento.",
      icon: "✅",
      delay: "animate-delay-300"
    },
    {
      number: "4",
      title: "Attivazione Piattaforma",
      description: "Configurazione completa della piattaforma con tutti gli strumenti personalizzati per le tue necessità operative.",
      icon: "🚀",
      delay: "animate-delay-400"
    },
    {
      number: "5",
      title: "Pensiamo a Tutto Noi",
      description: "Non devi più fare nulla. La piattaforma ti avviserà al momento opportuno.",
      icon: "🧘‍♂️",
      delay: "animate-delay-500",
      special: true
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-red-light rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl animate-pulse-glow">
            <span>✨ Processo Innovativo</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8 bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent">
            Come Funziona
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Un processo semplice e automatizzato che trasforma la gestione della sicurezza aziendale in un'esperienza fluida e senza stress.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group animate-slide-in-right ${step.delay} opacity-0`}
            >
              <div className={`
                relative bg-white rounded-3xl p-10 
                shadow-xl shadow-brand-red/10
                border border-gray-100
                hover:shadow-2xl hover:shadow-brand-red/25 
                transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2
                ${step.special ? 'ring-2 ring-brand-red ring-opacity-30' : ''}
              `}>
                
                {/* Base Glow Effect - Always visible */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-red/5 to-brand-red-light/5 opacity-100 transition-opacity duration-500"></div>
                
                {/* Enhanced Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-red/15 to-brand-red-light/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <div className="flex items-center space-x-8 relative z-10">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-brand-red to-brand-red-light text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg group-hover:shadow-brand-red/40 transition-all duration-300 group-hover:scale-110">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0 text-6xl group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-gray-800 mb-4 group-hover:text-brand-red transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Special Badge for Last Step */}
                {step.special && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-brand-red to-brand-red-light text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                    Finale
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center space-y-4 bg-white p-8 rounded-3xl shadow-2xl shadow-brand-red/10 border border-gray-100 hover:shadow-brand-red/20 transition-all duration-500">
            <div className="text-4xl mb-2">🎯</div>
            <h3 className="text-2xl font-black text-brand-red mb-2">Pronto a Iniziare?</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Trasforma la gestione della sicurezza aziendale in un processo automatico e senza stress.
            </p>
            <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-brand-red/40 transition-all duration-300 transform hover:scale-105">
              Inizia Subito →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

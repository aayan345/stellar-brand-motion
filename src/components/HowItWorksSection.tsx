
const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Carica Dati",
      description: "Caricamento semplificato e gestione dei documenti aziendali",
      icon: "📊",
      color: "from-brand-red to-brand-red-light"
    },
    {
      number: "2", 
      title: "Struttura Conformità",
      description: "Organizzazione completa processi e conformità normativa",
      icon: "📋",
      color: "from-brand-red to-brand-red-light"
    },
    {
      number: "3",
      title: "Ricevi Avvisi", 
      description: "Notifiche tempestive e promemoria automatici",
      icon: "⚠️",
      color: "from-brand-red to-brand-red-light"
    },
    {
      number: "4",
      title: "Archivia & Report",
      description: "Documentazione avanzata e reportistica per controlli",
      icon: "📈",
      color: "from-brand-red to-brand-red-light"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <span>🚀 Semplificato Processo</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-brand-red">
            Come Funziona
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tutela Impresa rende semplice ed intuitivo ogni sistema intelligente che semplifica la gestione normativa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 relative group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 text-center"
            >
              {/* Step Number */}
              <div className="w-16 h-16 bg-brand-red text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg mx-auto mb-6">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-black text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {step.description}
              </p>
              <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full">
                Scopri di più →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

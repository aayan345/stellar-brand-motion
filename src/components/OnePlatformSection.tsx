
const OnePlatformSection = () => {
  const features = [
    {
      title: "Documenti",
      description: "Verifica completa, zero rischi. Contraffiliamo ogni documento obbligatorio per la sicurezza sul lavoro. Così tu puoi concentrarti sul far crescere la tua impresa.",
      icon: "📋",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-white",
      warning: true
    },
    {
      title: "Attestati di Formazione", 
      description: "Formazione a norma, team competenti. Ci assicuriamo che ogni tuo collaboratore sia in regola con i corsi obbligatori.",
      icon: "🏆",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-white",
      warning: false
    },
    {
      title: "Scadenze",
      description: "Teniamo sotto controllo per te tutte le scadenze e gli aggiornamenti di documenti e corsi obbligatori. Assicurandoti il rispetto puntuale delle normative vigenti.",
      icon: "⏰", 
      color: "from-green-500 to-green-600",
      bgColor: "bg-white",
      warning: false
    },
    {
      title: "Hotline 24/7",
      description: "La piattaforma ti collega in tempo reale con i nostri esperti, per supportarti su ogni aspetto della sicurezza aziendale.",
      icon: "💬",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      isSpecial: true
    },
    {
      title: "Report operativi",
      description: "Teniamo costantemente sotto controllo la situazione della tua azienda grazie a report dettagliati, per offrirti una gestione proattiva, precisa e sempre aggiornata.",
      icon: "📊", 
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-white",
      warning: false
    },
    {
      title: "Centro Risorse",
      description: "Mettiamo a disposizione webinar, guide pratiche e materiale formativo per aiutarti a costruire e rafforzare una solida cultura della sicurezza all'interno della tua azienda.",
      icon: "👥",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-white",
      warning: false
    },
    {
      title: "Piattaforma Dedicata",
      description: "Una piattaforma su misura per la tua azienda: carichi i tuoi dati, gestisci documenti, segui webinar o organizzi call, tutto in un unico spazio protetto e accessibile.",
      icon: "💻",
      color: "from-indigo-500 to-indigo-600", 
      bgColor: "bg-white",
      warning: false
    },
    {
      title: "100% Cloud",
      description: "Accedi in totale sicurezza dai dati da qualsiasi dispositivo. La nostra piattaforma cloud ti garantisce sicurezza, velocità e piena capacità ovunque ti trovi.",
      icon: "☁️",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-white",
      warning: false
    },
    {
      title: "100% Sicura",
      description: "Tutti i dati sono protetti e crittati utilizzando i più avanzati protocolli di sicurezza SSL, garantendo la massima protezione delle tue informazioni.",
      icon: "🔒", 
      color: "from-green-600 to-green-700",
      bgColor: "bg-white",
      warning: false
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <span>🔒 All-in-One Platform</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Una piattaforma,<br />
            <span className="gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
              Molte funzionalità
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tutela Impresa gestisce ogni aspetto – assolutamente tutto con una soluzione completa per ogni aspetto della sicurezza aziendale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-3xl p-8 group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 relative ${feature.isSpecial ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Warning Icon for Documents */}
              {feature.warning && (
                <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg mx-auto`}>
                {feature.icon}
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-black text-gray-800 mb-4 tracking-tight leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
                <button className={`bg-gradient-to-r ${feature.color} text-white px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full`}>
                  Scopri di più →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnePlatformSection;

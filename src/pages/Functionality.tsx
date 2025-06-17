
const Functionality = () => {
  const mainFeatures = [
    {
      title: "Gestione Documentale Intelligente",
      description: "Sistema avanzato per l'archiviazione, organizzazione e ricerca di tutti i documenti HSE. OCR integrato, versioning automatico e condivisione sicura.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "📄",
      features: ["OCR automatico", "Versioning documenti", "Ricerca avanzata", "Condivisione sicura"]
    },
    {
      title: "Dashboard Real-time",
      description: "Visualizza lo stato di sicurezza della tua azienda in tempo reale con KPI, grafici interattivi e reportistica automatica personalizzabile.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "📊",
      features: ["KPI in tempo reale", "Grafici interattivi", "Report automatici", "Dashboard personalizzabili"]
    },
    {
      title: "Sistema di Alert Avanzato",
      description: "Notifiche intelligenti e proattive per scadenze, non conformità e eventi critici. Multicanale e completamente personalizzabile.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "🔔",
      features: ["Alert multicanale", "Notifiche proattive", "Escalation automatica", "Configurazione flessibile"]
    }
  ];

  const additionalFeatures = [
    { title: "Formazione Online", icon: "🎓", description: "Corsi interattivi e certificazioni digitali" },
    { title: "Audit Digitali", icon: "🔍", description: "Checklist e report di audit automatizzati" },
    { title: "Risk Assessment", icon: "⚠️", description: "Valutazione e mappatura dei rischi" },
    { title: "Mobile App", icon: "📱", description: "Accesso completo da qualsiasi dispositivo" },
    { title: "Integrazione API", icon: "🔗", description: "Connessione con sistemi esistenti" },
    { title: "Multi-sede", icon: "🏢", description: "Gestione centralizzata di più sedi" },
    { title: "Workflow Personalizzati", icon: "⚙️", description: "Processi su misura per la tua azienda" },
    { title: "Backup Automatico", icon: "☁️", description: "Sicurezza e ridondanza dei dati" }
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
              <span>⚡ Funzionalità Avanzate</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Tutto quello che serve per la
              <br />
              <span className="gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
                sicurezza aziendale
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Una piattaforma completa con strumenti avanzati per digitalizzare e ottimizzare ogni aspetto della gestione HSE
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-brand-red to-brand-red-light text-white px-6 py-3 rounded-full">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="font-semibold">Funzionalità Premium</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                    {feature.title}
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Scopri di Più →
                  </button>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-r from-brand-red to-brand-red-light rounded-3xl flex items-center justify-center text-white text-4xl shadow-2xl">
                    {feature.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">E molto altro ancora...</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scopri tutte le funzionalità aggiuntive che rendono Tutela Impresa la soluzione più completa del mercato
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-brand-red transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Integrazioni Senza Limiti</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connetti Tutela Impresa con i tuoi sistemi esistenti attraverso le nostre API avanzate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">ERP Integration</h3>
              <p className="text-gray-600">Sincronizzazione bidirezionale con SAP, Oracle, e altri sistemi ERP</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">API RESTful</h3>
              <p className="text-gray-600">API moderne e documentate per integrazioni custom e sviluppi su misura</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cloud Ready</h3>
              <p className="text-gray-600">Deployment su AWS, Azure, Google Cloud con scalabilità automatica</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-red to-brand-red-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto a trasformare la tua sicurezza aziendale?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Inizia oggi la tua prova gratuita di 30 giorni e scopri come Tutela Impresa può rivoluzionare la tua azienda
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Inizia Prova Gratuita
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-brand-red transition-all duration-300 transform hover:scale-105">
              Prenota Demo Live
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Functionality;

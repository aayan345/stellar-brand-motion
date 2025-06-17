
const Functionality = () => {
  const mainFeatures = [
    {
      title: "Gestione Documentale Intelligente",
      description: "Sistema avanzato con AI per l'archiviazione, organizzazione e ricerca intelligente di tutti i documenti HSE. OCR con machine learning, versioning automatico, categorizzazione intelligente e condivisione sicura con workflow approval.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "📄",
      features: ["OCR con AI", "Versioning automatico", "Ricerca semantica", "Workflow approval", "Categorizzazione smart", "Condivisione sicura"]
    },
    {
      title: "Analytics & Dashboard Real-time",
      description: "Visualizza lo stato di sicurezza della tua azienda in tempo reale con KPI avanzati, analytics predittivi, grafici interattivi e reportistica automatica con machine learning per insights proattivi.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "📊",
      features: ["KPI real-time", "Analytics predittivi", "Report automatici", "Dashboard personalizzabili", "Machine learning", "Insights proattivi"]
    },
    {
      title: "Sistema Alert Predittivo",
      description: "Notifiche intelligenti e proattive powered by AI per scadenze, non conformità e eventi critici. Sistema predittivo multicanale completamente personalizzabile con escalation automatica smart.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "🔔",
      features: ["Alert AI-powered", "Predizione criticità", "Notifiche multicanale", "Escalation smart", "Configurazione avanzata", "Analytics comportamentali"]
    }
  ];

  const additionalFeatures = [
    { title: "Formazione VR/AR", icon: "🎓", description: "Corsi immersivi con realtà virtuale e certificazioni blockchain", color: "from-brand-red to-red-700" },
    { title: "Audit AI-Driven", icon: "🔍", description: "Checklist intelligenti e report automatizzati con machine learning", color: "from-brand-red-light to-red-600" },
    { title: "Risk Assessment 4.0", icon: "⚠️", description: "Valutazione predittiva dei rischi con algoritmi avanzati", color: "from-red-500 to-brand-red" },
    { title: "Mobile App Nativa", icon: "📱", description: "App iOS/Android con funzionalità offline e sync automatica", color: "from-brand-red to-brand-red-light" },
    { title: "API Enterprise", icon: "🔗", description: "Integrazione avanzata con SAP, Oracle e sistemi custom", color: "from-red-600 to-brand-red" },
    { title: "Multi-sede Cloud", icon: "🏢", description: "Gestione centralizzata con architettura multi-tenant", color: "from-brand-red-light to-red-500" },
    { title: "Workflow AI", icon: "⚙️", description: "Processi automatizzati con intelligenza artificiale", color: "from-brand-red to-red-600" },
    { title: "Backup Immutabile", icon: "☁️", description: "Sicurezza enterprise con blockchain e quantum encryption", color: "from-red-700 to-brand-red" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(196,30,58,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(224,53,85,0.1)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-xl">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span>⚡ Funzionalità Next-Gen</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-8 text-gray-900 leading-tight">
              Il futuro della
              <br />
              <span className="relative gradient-text bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent">
                sicurezza aziendale
                <div className="absolute -bottom-4 left-0 right-0 h-3 bg-gradient-to-r from-brand-red/30 to-brand-red-light/30 rounded-full"></div>
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Una piattaforma rivoluzionaria con AI, machine learning e tecnologie avanzate per digitalizzare e ottimizzare ogni aspetto della gestione HSE
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Main Features */}
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
                <div className={`space-y-10 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-full shadow-xl">
                    <span className="text-3xl">{feature.icon}</span>
                    <span className="font-bold text-lg">Tecnologia Premium</span>
                  </div>
                  
                  <h2 className="text-5xl font-black text-gray-900 leading-tight">
                    {feature.title}
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div className="w-3 h-3 bg-gradient-to-r from-brand-red to-brand-red-light rounded-full"></div>
                        <span className="text-gray-700 font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button className="group bg-gradient-to-r from-brand-red to-brand-red-light text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <span className="relative flex items-center space-x-3">
                      <span>Scopri di Più</span>
                      <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-3xl transform hover:scale-105 transition-all duration-700 border-4 border-white">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-brand-red to-brand-red-light rounded-3xl flex items-center justify-center text-white text-4xl shadow-2xl border-4 border-white">
                    {feature.icon}
                  </div>
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-brand-red/20 to-brand-red-light/20 rounded-full blur-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Additional Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-800 mb-8 leading-tight">E molto altro ancora...</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Scopri l'ecosistema completo di funzionalità avanzate che rendono Tutela Impresa la soluzione più innovativa del mercato
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-gray-100 hover:border-brand-red/20 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-brand-red-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-black text-gray-800 mb-4 group-hover:text-brand-red transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Integration Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-800 mb-8 leading-tight">Integrazioni Enterprise</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Connetti Tutela Impresa con qualsiasi sistema attraverso le nostre API di nuova generazione e integrazioni pre-costruite
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="group bg-white rounded-3xl p-10 shadow-2xl text-center hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-2 border-transparent hover:border-brand-red/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-red to-brand-red-light rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-6 group-hover:text-brand-red transition-colors duration-300">ERP Integration</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Sincronizzazione bidirezionale avanzata con SAP, Oracle, Microsoft Dynamics e sistemi ERP custom</p>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-10 shadow-2xl text-center hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-2 border-transparent hover:border-brand-red/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-red to-brand-red-light rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-6 group-hover:text-brand-red transition-colors duration-300">API Next-Gen</h3>
                <p className="text-gray-600 text-lg leading-relaxed">API RESTful e GraphQL con rate limiting, webhooks real-time e SDK per sviluppi custom</p>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-10 shadow-2xl text-center hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-2 border-transparent hover:border-brand-red/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-red to-brand-red-light rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-6 group-hover:text-brand-red transition-colors duration-300">Cloud Hybrid</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Deployment multi-cloud su AWS, Azure, Google Cloud con auto-scaling e disaster recovery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-red to-brand-red-light text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-8 leading-tight">Pronto per il futuro della sicurezza?</h2>
            <p className="text-2xl mb-12 opacity-95 leading-relaxed font-light">
              Inizia oggi la tua trasformazione digitale con 30 giorni di prova gratuita e scopri come l'AI può rivoluzionare la tua azienda
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button className="group bg-white text-brand-red px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-brand-red-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center justify-center space-x-3">
                  <span>Inizia Prova Gratuita</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="group border-3 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-brand-red transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center justify-center space-x-3">
                  <span>Demo Personalizzata</span>
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

export default Functionality;

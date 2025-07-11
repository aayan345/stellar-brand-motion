
const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(196,30,58,0.08)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(224,53,85,0.06)_0%,transparent_50%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-red/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-brand-red-light/5 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-brand-red to-brand-red-light text-white px-10 py-5 rounded-full text-lg font-bold mb-10 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              <span>📞 Contattaci Ora</span>
            </div>
            <h1 className="text-7xl lg:text-9xl font-black mb-10 text-gray-900 leading-tight">
              Parliamo della tua
              <br />
              <span className="relative gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
                sicurezza aziendale
                <div className="absolute -bottom-6 left-0 right-0 h-4 bg-gradient-to-r from-brand-red/20 via-brand-red-light/30 to-brand-red/20 rounded-full blur-sm"></div>
              </span>
            </h1>
            <p className="text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
              Il nostro team di esperti è pronto ad aiutarti a trasformare la gestione della sicurezza nella tua azienda con soluzioni innovative e personalizzate
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="group bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 text-center border-2 border-transparent hover:border-brand-red/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-red to-brand-red-light rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-brand-red transition-colors duration-300">Telefono</h3>
                <p className="text-gray-600 mb-6 text-lg">Chiamaci per una consulenza immediata e personalizzata</p>
                <a href="tel:+390123456789" className="text-brand-red font-bold text-xl hover:underline group-hover:text-brand-red-light transition-colors duration-300">
                  +39 012 345 6789
                </a>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 text-center border-2 border-transparent hover:border-brand-red/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-red to-brand-red-light rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-brand-red transition-colors duration-300">Email</h3>
                <p className="text-gray-600 mb-6 text-lg">Scrivici per informazioni dettagliate e preventivi</p>
                <a href="mailto:info@tutelaimpresa.it" className="text-brand-red font-bold text-xl hover:underline group-hover:text-brand-red-light transition-colors duration-300">
                  info@tutelaimpresa.it
                </a>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 text-center border-2 border-transparent hover:border-brand-red/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-red to-brand-red-light rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-brand-red transition-colors duration-300">Ufficio</h3>
                <p className="text-gray-600 mb-6 text-lg">Vieni a trovarci nella nostra sede moderna</p>
                <p className="text-brand-red font-bold text-xl group-hover:text-brand-red-light transition-colors duration-300">
                  Via della Sicurezza, 123<br />
                  20100 Milano, MI
                </p>
              </div>
            </div>
          </div>

          {/* Premium Contact Form */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-16 shadow-3xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red to-brand-red-light"></div>
              
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-3 rounded-full mb-8">
                  <div className="w-3 h-3 bg-gradient-to-r from-brand-red to-brand-red-light rounded-full animate-pulse"></div>
                  <span className="font-bold text-gray-700">Richiesta Demo Gratuita</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
                  Scopri come trasformare la tua azienda
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Compila il form e ti contatteremo entro 24 ore con una demo personalizzata
                </p>
              </div>

              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-gray-700 font-bold text-lg">Nome *</label>
                    <input 
                      type="text" 
                      className="w-full p-6 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-brand-red/20 focus:border-brand-red transition-all duration-300 text-lg"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-gray-700 font-bold text-lg">Cognome *</label>
                    <input 
                      type="text" 
                      className="w-full p-6 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-brand-red/20 focus:border-brand-red transition-all duration-300 text-lg"
                      placeholder="Il tuo cognome"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-gray-700 font-bold text-lg">Email *</label>
                    <input 
                      type="email" 
                      className="w-full p-6 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-brand-red/20 focus:border-brand-red transition-all duration-300 text-lg"
                      placeholder="la-tua-email@azienda.it"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-gray-700 font-bold text-lg">Telefono</label>
                    <input 
                      type="tel" 
                      className="w-full p-6 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-brand-red/20 focus:border-brand-red transition-all duration-300 text-lg"
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-700 font-bold text-lg">Azienda *</label>
                  <input 
                    type="text" 
                    className="w-full p-6 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-brand-red/20 focus:border-brand-red transition-all duration-300 text-lg"
                    placeholder="Nome della tua azienda"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-700 font-bold text-lg">Settore</label>
                  <select className="w-full p-6 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-brand-red/20 focus:border-brand-red transition-all duration-300 text-lg bg-white">
                    <option>Seleziona il tuo settore</option>
                    <option>Manifatturiero</option>
                    <option>Edilizia</option>
                    <option>Servizi</option>
                    <option>Alimentare</option>
                    <option>Chimico</option>
                    <option>Altro</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-700 font-bold text-lg">Messaggio</label>
                  <textarea 
                    rows={6}
                    className="w-full p-6 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-brand-red/20 focus:border-brand-red transition-all duration-300 text-lg resize-none"
                    placeholder="Raccontaci le tue esigenze di sicurezza aziendale e come possiamo aiutarti..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button className="group relative bg-gradient-to-r from-brand-red to-brand-red-light text-white px-16 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <span className="relative flex items-center space-x-3">
                      <span>Richiedi Demo Gratuita</span>
                      <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                  <p className="text-gray-500 text-lg mt-6 leading-relaxed">
                    * Campi obbligatori. I tuoi dati sono protetti secondo il GDPR<br />
                    e non verranno mai condivisi con terze parti.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


const Contact = () => {
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
              <span>📞 Contattaci</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Parliamo della tua
              <br />
              <span className="gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
                sicurezza aziendale
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Il nostro team di esperti è pronto ad aiutarti a trasformare la gestione della sicurezza nella tua azienda
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Telefono</h3>
              <p className="text-gray-600 mb-4">Chiamaci per una consulenza immediata</p>
              <a href="tel:+390123456789" className="text-brand-red font-semibold hover:underline">
                +39 012 345 6789
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Email</h3>
              <p className="text-gray-600 mb-4">Scrivici per informazioni dettagliate</p>
              <a href="mailto:info@tutelaimpresa.it" className="text-brand-red font-semibold hover:underline">
                info@tutelaimpresa.it
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ufficio</h3>
              <p className="text-gray-600 mb-4">Vieni a trovarci nella nostra sede</p>
              <p className="text-brand-red font-semibold">
                Via della Sicurezza, 123<br />
                20100 Milano, MI
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Richiedi una Demo Gratuita</h2>
                <p className="text-gray-600">Compila il form e ti contatteremo entro 24 ore</p>
              </div>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Nome *</label>
                    <input 
                      type="text" 
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Cognome *</label>
                    <input 
                      type="text" 
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"
                      placeholder="Il tuo cognome"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Email *</label>
                    <input 
                      type="email" 
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"
                      placeholder="la-tua-email@azienda.it"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Telefono</label>
                    <input 
                      type="tel" 
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Azienda *</label>
                  <input 
                    type="text" 
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"
                    placeholder="Nome della tua azienda"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Settore</label>
                  <select className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300">
                    <option>Seleziona il tuo settore</option>
                    <option>Manifatturiero</option>
                    <option>Edilizia</option>
                    <option>Servizi</option>
                    <option>Alimentare</option>
                    <option>Chimico</option>
                    <option>Altro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Messaggio</label>
                  <textarea 
                    rows={5}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"
                    placeholder="Raccontaci le tue esigenze di sicurezza aziendale..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-12 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    Richiedi Demo Gratuita
                  </button>
                  <p className="text-gray-500 text-sm mt-4">
                    * Campi obbligatori. I tuoi dati sono protetti e non verranno mai condivisi con terze parti.
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

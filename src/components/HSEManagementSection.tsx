
const HSEManagementSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-red via-brand-red-light to-brand-red text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-60 h-60 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              Gestionale HSE<br />
              <span className="text-yellow-300">smart</span>
            </h2>
            
            <h3 className="text-2xl font-bold">
              Semplice, sempre aggiornato
            </h3>
            
            <p className="text-xl leading-relaxed opacity-95">
              Tutto integrato in un unico sistema: formazione, scadenze, controlli, 
              documentazione dei processi e valutazione degli indicatori con audit 
              esterni per la certificazione della conformità.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Scopri di più
              </button>
            </div>
          </div>

          {/* Right Content - Icons */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-8">
              {/* Document Icon */}
              <div className="bg-white bg-opacity-20 rounded-2xl p-8 text-center backdrop-blur-sm">
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Warning Icon */}
              <div className="bg-white bg-opacity-20 rounded-2xl p-8 text-center backdrop-blur-sm">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>

              {/* Central Logo */}
              <div className="col-span-2 flex justify-center">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="text-brand-red text-4xl font-black">
                    FERRARI
                  </div>
                </div>
              </div>

              {/* Hand Icon */}
              <div className="bg-white bg-opacity-20 rounded-2xl p-8 text-center backdrop-blur-sm">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </div>
              </div>

              {/* Shield Icon */}
              <div className="bg-white bg-opacity-20 rounded-2xl p-8 text-center backdrop-blur-sm">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HSEManagementSection;

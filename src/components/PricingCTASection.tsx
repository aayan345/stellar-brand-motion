
const PricingCTASection = () => {
  const pastries = [
    {
      url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      name: 'Donut Premium',
      price: '€2.50'
    },
    {
      url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      name: 'Croissant Classico',
      price: '€3.20'
    },
    {
      url: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      name: 'Pastry Deluxe',
      price: '€4.10'
    },
    {
      url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      name: 'Danish Special',
      price: '€3.80'
    },
    {
      url: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      name: 'Pastry Gourmet',
      price: '€4.50'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-brand-red via-brand-red-light to-red-600 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08)_0%,transparent_50%)]"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Premium Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full mb-8">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="font-bold text-lg">Prezzo Incredibile</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              Protezione aziendale al prezzo di un 
              <br />
              <span className="relative">
                cappuccino
                <div className="absolute -bottom-4 left-0 right-0 h-2 bg-yellow-400/30 rounded-full"></div>
              </span>
            </h2>
            
            <p className="text-2xl lg:text-3xl mb-16 leading-relaxed opacity-95 max-w-5xl mx-auto font-light">
              Protezione completa che fa la differenza, a un prezzo che sorprende.
            </p>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <button className="group relative bg-white text-brand-red px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <span className="relative flex items-center justify-center space-x-3">
                <span>Parti Ora</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button className="group border-3 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-brand-red transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative">Scopri i Prezzi</span>
            </button>
          </div>

          {/* Premium Features List */}
          <div className="grid md:grid-cols-3 gap-8 justify-center mb-20">
            <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xl font-semibold">Prova gratuita di 30 giorni</span>
            </div>
            <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xl font-semibold">Senza vincoli</span>
            </div>
            <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xl font-semibold">Supporto 24/7</span>
            </div>
          </div>

          {/* Revolutionary Cappuccino Price Comparison */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central Coffee Cup with Glow Effect */}
            <div className="flex justify-center mb-16">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="text-6xl relative z-10">☕</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-600/50 to-transparent rounded-full"></div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
              </div>
            </div>

            {/* Sophisticated Pastry Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
              {pastries.map((pastry, index) => (
                <div 
                  key={index} 
                  className="group relative"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {/* Pastry Card */}
                  <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl mb-4">
                      <img 
                        src={pastry.url} 
                        alt={pastry.name}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Floating Price Badge */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-brand-red rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                        €
                      </div>
                    </div>
                    
                    {/* Pastry Info */}
                    <div className="text-center">
                      <h4 className="text-white font-semibold text-sm mb-1">{pastry.name}</h4>
                      <p className="text-yellow-300 font-bold text-lg">{pastry.price}</p>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  </div>
                  
                  {/* Connection Line to Center */}
                  <div 
                    className="absolute top-1/2 left-1/2 w-px h-12 bg-gradient-to-b from-white/40 to-transparent transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{
                      transformOrigin: 'bottom center'
                    }}
                  ></div>
                </div>
              ))}
            </div>

            {/* Enhanced Bottom Message */}
            <div className="text-center bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
              <p className="text-2xl font-bold mb-2">
                Il costo di un cappuccino al giorno per proteggere la tua azienda
              </p>
              <p className="text-lg opacity-90">
                Da soli <span className="text-yellow-300 font-bold">€3.50/giorno</span> per una sicurezza senza compromessi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTASection;

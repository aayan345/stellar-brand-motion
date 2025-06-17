
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
    <section className="py-16 bg-gradient-to-br from-brand-red to-brand-red-light text-white relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.03)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Compact Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="font-semibold text-sm">Prezzo Incredibile</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Protezione aziendale al prezzo di un
              <span className="relative text-yellow-300 ml-2">cappuccino</span>
            </h2>
            
            <p className="text-lg mb-8 leading-relaxed opacity-95 max-w-2xl mx-auto">
              Sicurezza completa che fa la differenza, a un prezzo che sorprende.
            </p>
          </div>

          {/* Streamlined Layout with Images */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            
            {/* Left: Main Value Prop */}
            <div className="space-y-6">
              {/* Coffee vs Security Comparison */}
              <div className="flex items-center justify-center space-x-8 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-3 shadow-xl">
                    <span className="text-2xl">☕</span>
                  </div>
                  <p className="text-yellow-300 text-xl font-bold">€3.50</p>
                  <p className="text-sm opacity-80">Cappuccino</p>
                </div>
                
                <div className="text-2xl opacity-60">=</div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-3 border-2 border-white/30 shadow-xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-white text-xl font-bold">€3.50<span className="text-sm">/giorno</span></p>
                  <p className="text-sm opacity-80">Protezione</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative bg-white text-brand-red px-8 py-3 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <span className="relative flex items-center justify-center space-x-2">
                    <span>Inizia Ora</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                
                <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-brand-red transition-all duration-300">
                  Scopri i Prezzi
                </button>
              </div>
            </div>

            {/* Right: Smart Image Grid */}
            <div className="relative">
              <p className="text-center text-sm mb-4 opacity-90">
                Lo stesso prezzo di uno di questi dolci...
              </p>
              <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
                {pastries.slice(0, 6).map((pastry, index) => (
                  <div 
                    key={index} 
                    className="group relative"
                  >
                    <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
                      <div className="relative overflow-hidden rounded-lg mb-2">
                        <img 
                          src={pastry.url} 
                          alt={pastry.name}
                          className="w-full h-16 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <p className="text-yellow-300 font-bold text-xs text-center">{pastry.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Compact Features */}
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg p-3">
              <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-semibold text-sm">30 giorni gratis</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg p-3">
              <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-semibold text-sm">Senza vincoli</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg p-3">
              <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-semibold text-sm">Supporto 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTASection;

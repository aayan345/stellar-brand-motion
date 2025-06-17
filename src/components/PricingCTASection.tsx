
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
    <section className="py-20 bg-gradient-to-br from-brand-red to-brand-red-light text-white relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.03)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Clean Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-8">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="font-semibold">Prezzo Incredibile</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Protezione aziendale al prezzo di un
              <br />
              <span className="relative text-yellow-300">
                cappuccino
              </span>
            </h2>
            
            <p className="text-xl mb-12 leading-relaxed opacity-95 max-w-3xl mx-auto">
              Sicurezza completa che fa la differenza, a un prezzo che sorprende.
            </p>
          </div>

          {/* Minimal Comparison Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Coffee Cup */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mb-6 shadow-xl">
                <span className="text-4xl">☕</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Un cappuccino al giorno</h3>
              <p className="text-yellow-300 text-3xl font-bold">€3.50</p>
            </div>

            {/* Right: Security Shield */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-md rounded-full mb-6 border-2 border-white/30 shadow-xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Protezione completa</h3>
              <p className="text-white text-3xl font-bold">€3.50<span className="text-lg">/giorno</span></p>
            </div>
          </div>

          {/* Compact Pastry Gallery */}
          <div className="mb-16">
            <p className="text-center text-lg mb-8 opacity-90">
              Lo stesso prezzo di uno di questi dolci...
            </p>
            <div className="flex justify-center">
              <div className="grid grid-cols-5 gap-4 max-w-2xl">
                {pastries.map((pastry, index) => (
                  <div 
                    key={index} 
                    className="group relative"
                  >
                    <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
                      <div className="relative overflow-hidden rounded-xl mb-2">
                        <img 
                          src={pastry.url} 
                          alt={pastry.name}
                          className="w-full h-20 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <p className="text-yellow-300 font-bold text-sm text-center">{pastry.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="group relative bg-white text-brand-red px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <span className="relative flex items-center justify-center space-x-2">
                <span>Inizia Ora</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-brand-red transition-all duration-300 transform hover:scale-105">
              Scopri i Prezzi
            </button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-semibold">30 giorni gratis</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-semibold">Senza vincoli</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-semibold">Supporto 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTASection;

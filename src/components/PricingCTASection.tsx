
const PricingCTASection = () => {
  const pastries = [
    'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', // donut
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', // croissant
    'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', // pastry
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', // danish
    'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'  // pastry
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-red via-brand-red-light to-brand-red text-white relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-60 h-60 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
            Protezione aziendale al prezzo di un 
            <br />cappuccino
          </h2>
          
          <p className="text-xl lg:text-2xl mb-12 leading-relaxed opacity-95 max-w-4xl mx-auto">
            Protezione completa che fa la differenza, a un prezzo incredibile.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Parti Ora
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-brand-red transition-all duration-300 transform hover:scale-105">
              Scopri i Prezzi
            </button>
          </div>

          {/* Features List */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-lg mb-16">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>Prova gratuita di 30 giorni</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>Senza vincoli</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>Supporto 24/7</span>
            </div>
          </div>

          {/* Creative Pastries Display */}
          <div className="relative">
            {/* Central Coffee Cup Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white border-opacity-30">
                <div className="text-4xl">☕</div>
              </div>
            </div>

            {/* Orbiting Pastries */}
            <div className="relative w-80 h-80 mx-auto">
              {pastries.map((pastry, index) => {
                const angle = (index * 72) - 90; // 360/5 = 72 degrees between each
                const radius = 140;
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;
                
                return (
                  <div 
                    key={index} 
                    className="absolute w-16 h-16 rounded-full overflow-hidden shadow-xl border-4 border-white border-opacity-50 hover:scale-110 transition-all duration-300 cursor-pointer group"
                    style={{
                      left: `calc(50% + ${x}px - 2rem)`,
                      top: `calc(50% + ${y}px - 2rem)`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <img 
                      src={pastry} 
                      alt={`Pastry ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Floating Price Tag */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 text-brand-red rounded-full flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      €
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Text */}
            <div className="mt-8">
              <p className="text-lg opacity-90 font-medium">
                Il costo di un cappuccino al giorno per proteggere la tua azienda
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTASection;

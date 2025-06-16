
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
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-lg mb-12">
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

          {/* Pastries Images */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            {pastries.map((pastry, index) => (
              <div key={index} className="transform hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={pastry} 
                    alt={`Pastry ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTASection;

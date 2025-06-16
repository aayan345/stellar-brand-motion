
const PricingCTASection = () => {
  const pastries = [
    { name: 'Donut', image: '🍩' },
    { name: 'Croissant', image: '🥐' },
    { name: 'Muffin', image: '🧁' },
    { name: 'Danish', image: '🥞' },
    { name: 'Bagel', image: '🥯' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-red via-brand-red-light to-brand-red text-white relative overflow-hidden">
      {/* Background Elements */}
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
            <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50 flex items-center justify-center space-x-2">
              <span>Parti Ora</span>
              <span>↗</span>
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
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl hover:bg-opacity-30 transition-all duration-300">
                  {pastry.image}
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


import React from 'react';

const SocialMediaSection = () => {
  const socialCards = [
    {
      id: 'facebook',
      platform: 'Facebook',
      title: 'Ferrari Service',
      subtitle: 'Pagina ufficiale',
      description: '15.2K seguaci',
      buttonText: 'Segui la Pagina',
      backgroundImage: '/lovable-uploads/e476c61b-3dd1-4dee-b91a-5ca0f652ae11.png',
      logoImage: '/lovable-uploads/15927675-1698-4038-9e4d-706c43f2c0cd.png',
      buttonColor: 'bg-[#1877F2] hover:bg-[#166FE5]'
    },
    {
      id: 'instagram',
      platform: 'Instagram',
      title: 'Ferrari Service',
      subtitle: 'Profilo aziendale',
      description: '8.7K follower',
      buttonText: 'Segui su Instagram',
      backgroundImage: '/lovable-uploads/2f7981eb-7c40-4b63-a8a5-edf9d6dcf17a.png',
      logoImage: '/lovable-uploads/15927675-1698-4038-9e4d-706c43f2c0cd.png',
      buttonColor: 'bg-gradient-to-r from-[#E4405F] to-[#F56040] hover:from-[#D73552] hover:to-[#E55A3C]'
    },
    {
      id: 'linkedin',
      platform: 'LinkedIn',
      title: 'Ferrari Service',
      subtitle: 'Profilo aziendale',
      description: '3.4K collegamenti',
      buttonText: 'Scopri su LinkedIn',
      backgroundImage: '/lovable-uploads/d9462a72-a597-4c2a-8039-45fb7bee4eb3.png',
      logoImage: '/lovable-uploads/15927675-1698-4038-9e4d-706c43f2c0cd.png',
      buttonColor: 'bg-[#0A66C2] hover:bg-[#095296]'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-red bg-opacity-10 text-brand-red px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
            <span>Seguici sui Social</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-6">
            Resta sempre aggiornato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Segui i nostri canali social per rimanere sempre informato su novità, 
            aggiornamenti e contenuti esclusivi di Tutela Impresa.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialCards.map((card, index) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Background Image */}
              <div 
                className="relative h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`
                }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                
                {/* Logo */}
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white rounded-2xl p-3 shadow-lg">
                    <img 
                      src={card.logoImage} 
                      alt="Ferrari Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Platform Badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-800">{card.platform}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-1 font-medium">
                  {card.subtitle}
                </p>
                <p className="text-gray-500 text-sm mb-6">
                  {card.description}
                </p>

                {/* CTA Button */}
                <button className={`
                  w-full ${card.buttonColor} text-white py-3 px-6 rounded-xl font-bold 
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                  flex items-center justify-center space-x-2
                `}>
                  <span>{card.buttonText}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-red rounded-3xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Vuoi rimanere sempre aggiornato sulle nostre novità?
          </p>
          <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Iscriviti alla Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;

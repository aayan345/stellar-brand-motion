
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
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-brand-red bg-opacity-10 text-brand-red px-4 py-2 rounded-full text-sm font-semibold mb-3">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
            <span>Seguici sui Social</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-black text-gray-800 mb-2">
            Resta sempre aggiornato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Segui i nostri canali social per rimanere sempre informato su novità, 
            aggiornamenti e contenuti esclusivi di Tutela Impresa.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {socialCards.map((card, index) => (
            <div
              key={card.id}
              className="group relative h-36 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              style={{
                backgroundImage: `url(${card.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div>
              
              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-between p-4">
                {/* Top Section - Logo + Text Horizontal Layout */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    {/* Logo */}
                    <div className="w-12 h-12 bg-white bg-opacity-95 rounded-lg p-1.5 shadow-md border border-white border-opacity-30 flex-shrink-0">
                      <img 
                        src={card.logoImage} 
                        alt="Ferrari Logo" 
                        className="w-full h-full object-contain"
                        style={{ backgroundColor: 'transparent' }}
                      />
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-white mb-0.5 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-gray-200 text-xs mb-0.5 font-medium">
                        {card.subtitle}
                      </p>
                      <p className="text-gray-300 text-xs">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Platform Badge */}
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full flex-shrink-0">
                    <span className="text-xs font-semibold text-gray-800">{card.platform}</span>
                  </div>
                </div>

                {/* Bottom Section - CTA Button */}
                <div className="flex justify-start">
                  <button className={`
                    ${card.buttonColor} text-white py-2 px-4 rounded-lg font-semibold text-xs
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                    inline-flex items-center space-x-1.5
                  `}>
                    <span>{card.buttonText}</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-red rounded-xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-3 text-sm">
            Vuoi rimanere sempre aggiornato sulle nostre novità?
          </p>
          <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Iscriviti alla Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;


import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden pt-20">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-red rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-brand-red-light rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-brand-red rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-24 h-24 bg-brand-red-light rounded-full blur-lg animate-float" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10 max-w-7xl">
        {/* Left Content */}
        <div className={`space-y-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="space-y-8">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-brand-red/10 to-brand-red-light/10 backdrop-blur-sm border border-brand-red/20 text-brand-red px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
              <div className="w-3 h-3 bg-brand-red rounded-full animate-pulse"></div>
              <span>🔒 Soluzione Completa per la Sicurezza Aziendale</span>
            </div>
            
            {/* Updated Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                <span className="block">
                  Tutela impresa <span className="text-brand-red">100%</span>
                </span>
                <span className="block">
                  <span className="gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
                    SICUREZZA
                  </span>
                </span>
                <span className="block text-gray-800">AZIENDALE</span>
                <span className="block text-lg font-normal text-gray-600 mt-4">sempre sotto controllo</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl font-medium">
              Gestisci tutti gli aspetti della sicurezza aziendale con una 
              piattaforma moderna, intuitiva e conforme alle normative 
              vigenti. <span className="text-brand-red font-semibold">Protezione totale garantita.</span>
            </p>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="group relative bg-gradient-to-r from-brand-red to-brand-red-light text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-red-light to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center space-x-2">
                <span>Richiedi Demo</span>
              </span>
            </button>
            
            <button className="group border-3 border-brand-red text-brand-red px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-red hover:text-white transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <span className="relative z-10 flex items-center space-x-2">
                <span>Accesso Cliente</span>
              </span>
            </button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12">
            <div className="text-center group">
              <div className="text-4xl font-black text-brand-red mb-2 group-hover:scale-110 transition-transform duration-300">1K</div>
              <div className="text-gray-600 text-sm font-semibold">Clienti</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black text-brand-red mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-gray-600 text-sm font-semibold">disponibile sicurezza garantita</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black text-brand-red mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-gray-600 text-sm font-semibold">Conformità garantita</div>
            </div>
          </div>
        </div>

        {/* Right Content - Enhanced Dashboard */}
        <div className={`relative ${isVisible ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'}`}>
          <div className="relative">
            {/* Main Dashboard Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-700 border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Dashboard Sicurezza Aziendale" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              
              {/* Floating Security Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-brand-red to-brand-red-light text-white p-6 rounded-2xl shadow-2xl animate-pulse-glow">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              {/* Compliance Badge */}
              <div className="absolute -bottom-6 -left-6 bg-green-500 text-white p-4 rounded-xl shadow-lg animate-bounce">
                <div className="text-sm font-bold">✅ 98% Conformità</div>
              </div>

              {/* Real-time Indicator */}
              <div className="absolute top-6 left-6 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Live</span>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-brand-red/20 to-brand-red-light/20 rounded-3xl blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import CustomCursor from '../components/CustomCursor';
import { Link } from 'react-router-dom';

const Sectors = () => {
  const sectors = [
    {
      name: "Costruzioni",
      description: "Gestione completa della sicurezza nei cantieri, DPI, formazione specializzata e conformità normativa per il settore edile.",
      icon: "🏗️",
      features: ["Gestione cantieri", "DPI specializzati", "Formazione RSPP", "Piani di sicurezza"],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=400&fit=crop"
    },
    {
      name: "Manifatturiero",
      description: "Sicurezza industriale, gestione macchinari, controllo qualità e prevenzione incidenti per aziende manifatturiere.",
      icon: "🏭",
      features: ["Sicurezza macchinari", "Controllo qualità", "Manutenzione predittiva", "Audit di sicurezza"],
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=400&fit=crop"
    },
    {
      name: "Sanità",
      description: "Protocolli sanitari, gestione rifiuti speciali, sicurezza biologica e conformità alle normative sanitarie.",
      icon: "🏥",
      features: ["Protocolli sanitari", "Rifiuti speciali", "Sicurezza biologica", "Sterilizzazione"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop"
    },
    {
      name: "Alimentare",
      description: "HACCP, tracciabilità alimentare, igiene del lavoro e conformità alle normative del settore alimentare.",
      icon: "🍎",
      features: ["HACCP completo", "Tracciabilità", "Igiene del lavoro", "Controlli qualità"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop"
    },
    {
      name: "Logistica",
      description: "Sicurezza magazzini, movimentazione merci, gestione flotte e prevenzione infortuni nel trasporto.",
      icon: "📦",
      features: ["Sicurezza magazzini", "Movimentazione", "Gestione flotte", "Tracking veicoli"],
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=400&fit=crop"
    },
    {
      name: "Servizi",
      description: "Sicurezza uffici, smart working, stress lavoro-correlato e benessere organizzativo per aziende di servizi.",
      icon: "💼",
      features: ["Sicurezza uffici", "Smart working", "Stress lavoro", "Benessere organizzativo"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">TI</span>
              </div>
              <div className="text-left">
                <span className="font-black text-2xl text-gray-800 block leading-none">TUTELA</span>
                <span className="font-black text-xl text-brand-red block leading-none">IMPRESA</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/functionality" className="text-gray-700 hover:text-brand-red transition-colors font-semibold">Funzionalità</Link>
              <Link to="/sectors" className="text-brand-red font-semibold">Settori</Link>
              <Link to="/blog" className="text-gray-700 hover:text-brand-red transition-colors font-semibold">Blog</Link>
              <Link to="/faq" className="text-gray-700 hover:text-brand-red transition-colors font-semibold">FAQ</Link>
              <Link to="/contact" className="text-gray-700 hover:text-brand-red transition-colors font-semibold">Contatti</Link>
              <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Richiedi la Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <span>🏢 Settori di Applicazione</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              Soluzioni su misura per ogni 
              <br />
              <span className="gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
                settore industriale
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tutela Impresa si adatta alle specifiche esigenze del tuo settore, offrendo soluzioni personalizzate per ogni tipo di attività produttiva.
            </p>
          </div>

          {/* Sectors Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={sector.image} 
                    alt={sector.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white bg-opacity-90 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    {sector.icon}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-brand-red transition-colors duration-300">
                    {sector.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {sector.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {sector.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-brand-red to-brand-red-light text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Scopri le Soluzioni →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-br from-brand-red to-brand-red-light rounded-3xl p-12 text-white text-center mb-20">
            <h3 className="text-3xl font-black mb-8">I numeri della nostra esperienza</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-black mb-2">500+</div>
                <div className="text-lg opacity-90">Aziende Costruzioni</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">300+</div>
                <div className="text-lg opacity-90">Aziende Manifatturiere</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">150+</div>
                <div className="text-lg opacity-90">Strutture Sanitarie</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">200+</div>
                <div className="text-lg opacity-90">Aziende Servizi</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-black text-gray-800 mb-6">
              Non vedi il tuo settore? Nessun problema!
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Tutela Impresa è flessibile e si adatta a qualsiasi tipo di attività. Contattaci per una consulenza personalizzata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Consulenza Gratuita →
              </Link>
              <button className="border-2 border-brand-red text-brand-red px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-red hover:text-white transition-all duration-300 transform hover:scale-105">
                Richiedi Demo
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sectors;

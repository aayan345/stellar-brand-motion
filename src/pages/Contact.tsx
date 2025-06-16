
import CustomCursor from '../components/CustomCursor';
import { Link } from 'react-router-dom';

const Contact = () => {
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
              <Link to="/sectors" className="text-gray-700 hover:text-brand-red transition-colors font-semibold">Settori</Link>
              <Link to="/blog" className="text-gray-700 hover:text-brand-red transition-colors font-semibold">Blog</Link>
              <Link to="/faq" className="text-gray-700 hover:text-brand-red transition-colors font-semibold">FAQ</Link>
              <Link to="/contact" className="text-brand-red font-semibold">Contatti</Link>
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
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
                <span>📞 Contattaci</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black mb-6">
                Pronto per trasformare 
                <br />
                <span className="gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
                  la tua azienda?
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Compila il form e il nostro team personalizzato di Tutela Impresa ti ricontatterà per creare un piano di sicurezza aziendale.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-black text-gray-800 mb-6">Informazioni di Contatto</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center">
                        <span className="text-white text-xl">📧</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Email</h4>
                        <p className="text-gray-600">info@tutelaimpresa.it</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center">
                        <span className="text-white text-xl">📞</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Telefono</h4>
                        <p className="text-gray-600">+39 02 1234 5678</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center">
                        <span className="text-white text-xl">🏢</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Sede Legale</h4>
                        <p className="text-gray-600">Via della Sicurezza, 123<br />20100 Milano, Italia</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center">
                        <span className="text-white text-xl">⏰</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Orari</h4>
                        <p className="text-gray-600">Lun-Ven: 9:00 - 18:00<br />Supporto 24/7 disponibile</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-red to-brand-red-light rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-black mb-4">Richiedi Demo Gratuita</h3>
                  <p className="mb-6 opacity-90">
                    Scopri come Tutela Impresa può rivoluzionare la sicurezza della tua azienda con una demo personalizzata.
                  </p>
                  <button className="bg-white text-brand-red px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Pianifica Demo →
                  </button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-black text-gray-800 mb-6">Richiedi Demo Gratuita</h3>
                <p className="text-gray-600 mb-8">
                  Compila tutti i campi per ricevere una demo personalizzata
                </p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Nome*</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Cognome*</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"
                        placeholder="Il tuo cognome"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email*</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"
                      placeholder="la.tua.email@azienda.it"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Telefono</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Azienda*</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"
                      placeholder="Nome della tua azienda"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Settore*</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300">
                      <option value="">Seleziona settore</option>
                      <option value="costruzioni">Costruzioni</option>
                      <option value="manifatturiero">Manifatturiero</option>
                      <option value="servizi">Servizi</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Numero Dipendenti</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300">
                      <option value="">Seleziona range</option>
                      <option value="1-10">1-10 dipendenti</option>
                      <option value="11-50">11-50 dipendenti</option>
                      <option value="51-200">51-200 dipendenti</option>
                      <option value="200+">200+ dipendenti</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Messaggio</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"
                      placeholder="Descrici le tue esigenze specifiche..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-red to-brand-red-light text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Invia Richiesta Demo →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

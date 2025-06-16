
import CustomCursor from '../components/CustomCursor';
import { Link } from 'react-router-dom';

const Functionality = () => {
  const features = [
    {
      title: "Gestione Documentale Avanzata",
      description: "Centralizza, organizza e controlla tutti i documenti di sicurezza aziendale in un'unica piattaforma cloud sicura.",
      icon: "📁",
      details: [
        "Caricamento automatico documenti",
        "Versioning e controllo revisioni", 
        "Ricerca intelligente full-text",
        "Categorizzazione automatica",
        "Backup automatico e sicurezza"
      ],
      image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=800&h=400&fit=crop"
    },
    {
      title: "Sistema di Alert e Scadenze",
      description: "Non perdere mai una scadenza importante con il nostro sistema di notifiche intelligenti e promemoria automatici.",
      icon: "⏰",
      details: [
        "Notifiche email e SMS personalizzate",
        "Calendario integrato delle scadenze",
        "Alert progressivi (30, 15, 7 giorni)",
        "Dashboard riassuntiva scadenze",
        "Integrazione con calendar esterni"
      ],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop"
    },
    {
      title: "Gestione Formazione Personale",
      description: "Pianifica, traccia e gestisci tutti i corsi di formazione obbligatori e specialistici per il tuo team.",
      icon: "🎓",
      details: [
        "Catalogo corsi integrato",
        "Tracciamento attestati e certificazioni",
        "Pianificazione automatica rinnovi",
        "Report competenze per dipendente",
        "Integrazione con enti formativi"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
    },
    {
      title: "Dashboard Analytics Avanzata",
      description: "Monitora in tempo reale lo stato della sicurezza aziendale con dashboard personalizzabili e report dettagliati.",
      icon: "📊",
      details: [
        "KPI sicurezza in tempo reale",
        "Report conformità automatici",
        "Grafici e statistiche avanzate",
        "Export dati in vari formati",
        "Dashboard personalizzabili per ruolo"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    },
    {
      title: "Audit e Controlli di Conformità",
      description: "Gestisci audit interni ed esterni con checklist personalizzabili e tracciamento delle non conformità.",
      icon: "✅",
      details: [
        "Checklist audit personalizzabili",
        "Tracciamento non conformità",
        "Piano azioni correttive",
        "Storico audit e miglioramenti",
        "Report automatici per enti"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop"
    },
    {
      title: "Gestione Incidenti e Near Miss",
      description: "Registra, analizza e previeni incidenti con un sistema completo di gestione della sicurezza proattiva.",
      icon: "🚨",
      details: [
        "Registrazione incidenti in tempo reale",
        "Analisi cause radice",
        "Tracking azioni preventive",
        "Statistiche e trend analysis",
        "Alert automatici per situazioni critiche"
      ],
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=800&h=400&fit=crop"
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
              <Link to="/functionality" className="text-brand-red font-semibold">Funzionalità</Link>
              <Link to="/sectors" className="text-gray-700 hover:text-brand-red transition-colors font-semibold">Settori</Link>
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
              <span>⚡ Funzionalità Avanzate</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              Tutto quello di cui hai bisogno per la 
              <br />
              <span className="gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
                sicurezza aziendale
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Una piattaforma completa con tutte le funzionalità necessarie per gestire ogni aspetto della sicurezza e conformità normativa.
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-gray-800">{feature.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-700 font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Scopri di più →
                  </button>
                </div>
                
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-80 object-cover rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                    />
                    <div className="absolute -inset-4 bg-gradient-to-r from-brand-red/20 to-brand-red-light/20 rounded-3xl blur-2xl -z-10"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Integration Section */}
          <div className="mt-32 bg-gradient-to-br from-brand-red to-brand-red-light rounded-3xl p-12 text-white text-center">
            <h3 className="text-4xl font-black mb-6">Integrazioni Native</h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Tutela Impresa si integra perfettamente con i tuoi sistemi esistenti per un flusso di lavoro ottimizzato.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                <div className="text-3xl mb-3">💼</div>
                <div className="font-bold">ERP Systems</div>
                <div className="text-sm opacity-75">SAP, Oracle, NetSuite</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                <div className="text-3xl mb-3">👥</div>
                <div className="font-bold">HR Platforms</div>
                <div className="text-sm opacity-75">Workday, BambooHR</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                <div className="text-3xl mb-3">📧</div>
                <div className="font-bold">Email & Calendar</div>
                <div className="text-sm opacity-75">Outlook, Google Workspace</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                <div className="text-3xl mb-3">📊</div>
                <div className="font-bold">BI Tools</div>
                <div className="text-sm opacity-75">Power BI, Tableau</div>
              </div>
            </div>
            
            <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Esplora Integrazioni →
            </button>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-black text-gray-800 mb-6">
              Pronto a trasformare la sicurezza della tua azienda?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Inizia la tua prova gratuita di 30 giorni e scopri come Tutela Impresa può semplificare la gestione della sicurezza aziendale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Inizia Prova Gratuita →
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

export default Functionality;

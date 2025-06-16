
import CustomCursor from '../components/CustomCursor';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "Cos'è Tutela Impresa e come funziona?",
      answer: "Tutela Impresa è una piattaforma digitale completa per la gestione della sicurezza aziendale. Centralizza tutti i documenti, le scadenze, la formazione del personale e i report di conformità in un'unica soluzione cloud-based accessibile 24/7."
    },
    {
      question: "Quanto tempo ci vuole per implementare la piattaforma?",
      answer: "L'implementazione di base richiede solo 24-48 ore. Il nostro team di esperti ti assiste nella configurazione iniziale, nel caricamento dei documenti esistenti e nella formazione del tuo team. Puoi iniziare a utilizzare le funzionalità principali immediatamente."
    },
    {
      question: "La piattaforma è conforme al GDPR e alle normative italiane?",
      answer: "Assolutamente sì. Tutela Impresa è progettata per essere completamente conforme al GDPR, alle normative italiane sulla sicurezza sul lavoro (D.Lgs. 81/08) e agli standard internazionali ISO 27001. Tutti i dati sono crittografati e ospitati su server sicuri in Europa."
    },
    {
      question: "Posso integrare Tutela Impresa con i miei sistemi esistenti?",
      answer: "Sì, la piattaforma offre API aperte e integrazioni native con i principali software HR, ERP e di gestione aziendale. Il nostro team tecnico può assistere nell'integrazione con i tuoi sistemi esistenti per garantire un flusso di lavoro fluido."
    },
    {
      question: "Che tipo di supporto è disponibile?",
      answer: "Offriamo supporto multicanale 24/7 tramite chat, email e telefono. Ogni cliente ha accesso a un Customer Success Manager dedicato, webinar di formazione regolari e una libreria completa di risorse e guide."
    },
    {
      question: "Quali sono i costi e i piani disponibili?",
      answer: "Offriamo piani flessibili basati sul numero di dipendenti e sulle funzionalità richieste. Tutti i piani includono una prova gratuita di 30 giorni, setup gratuito e supporto completo. Contattaci per un preventivo personalizzato."
    },
    {
      question: "Come viene garantita la sicurezza dei dati?",
      answer: "Utilizziamo crittografia AES-256, autenticazione a due fattori, backup automatici giornalieri e monitoraggio continuo della sicurezza. I nostri data center sono certificati ISO 27001 e SOC 2 Type II."
    },
    {
      question: "Posso accedere alla piattaforma da dispositivi mobili?",
      answer: "Sì, Tutela Impresa è completamente responsive e ottimizzata per tutti i dispositivi. Inoltre, stiamo sviluppando app native iOS e Android che saranno disponibili nel 2024."
    },
    {
      question: "Cosa succede se ho bisogno di funzionalità personalizzate?",
      answer: "La nostra piattaforma è altamente personalizzabile. Possiamo sviluppare funzionalità su misura per le tue esigenze specifiche, integrazioni custom e workflow personalizzati. Contatta il nostro team per discutere le tue necessità."
    },
    {
      question: "Come posso migrare i miei dati esistenti?",
      answer: "Il nostro team di onboarding ti assiste gratuitamente nella migrazione di tutti i tuoi dati esistenti. Supportiamo l'importazione da Excel, sistemi legacy e altri software di gestione. Il processo è sicuro e senza interruzioni operative."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

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
              <Link to="/faq" className="text-brand-red font-semibold">FAQ</Link>
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
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
                <span>❓ Domande Frequenti</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black mb-6">
                Tutto quello che devi sapere su 
                <br />
                <span className="gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
                  Tutela Impresa
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Trova risposte alle domande più comuni sulla nostra piattaforma di sicurezza aziendale.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <div className={`w-8 h-8 bg-brand-red rounded-full flex items-center justify-center text-white font-bold transform transition-transform duration-300 ${openItem === index ? 'rotate-45' : ''}`}>
                      +
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-gradient-to-br from-brand-red to-brand-red-light rounded-3xl p-12 text-white text-center">
              <h3 className="text-3xl font-black mb-4">Non trovi la risposta che cerchi?</h3>
              <p className="text-xl mb-8 opacity-90">
                Il nostro team di esperti è sempre disponibile per rispondere alle tue domande specifiche.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
                >
                  Contattaci →
                </Link>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-brand-red transition-all duration-300 transform hover:scale-105">
                  Richiedi Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;

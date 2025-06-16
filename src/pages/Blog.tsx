
import CustomCursor from '../components/CustomCursor';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Le nuove normative sulla sicurezza sul lavoro 2024",
      excerpt: "Tutto quello che devi sapere sui nuovi aggiornamenti normativi e come adeguare la tua azienda.",
      date: "15 Marzo 2024",
      category: "Normative",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Come implementare un sistema di gestione HSE efficace",
      excerpt: "Guida completa per strutturare un sistema di Health, Safety & Environment nella tua organizzazione.",
      date: "12 Marzo 2024",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
      readTime: "8 min"
    },
    {
      id: 3,
      title: "L'importanza della formazione continua in azienda",
      excerpt: "Perché investire nella formazione del personale è fondamentale per la sicurezza aziendale.",
      date: "10 Marzo 2024",
      category: "Formazione",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Digitalizzazione dei processi di sicurezza",
      excerpt: "Come la tecnologia sta rivoluzionando la gestione della sicurezza nelle aziende moderne.",
      date: "8 Marzo 2024",
      category: "Tecnologia",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      readTime: "7 min"
    },
    {
      id: 5,
      title: "Audit di sicurezza: best practices e checklist",
      excerpt: "Una guida pratica per condurre audit di sicurezza efficaci e conformi alle normative.",
      date: "5 Marzo 2024",
      category: "Audit",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
      readTime: "10 min"
    },
    {
      id: 6,
      title: "Gestione documentale: organizza la sicurezza",
      excerpt: "Come strutturare e gestire efficacemente tutta la documentazione relativa alla sicurezza aziendale.",
      date: "1 Marzo 2024",
      category: "Documenti",
      image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=800&h=400&fit=crop",
      readTime: "4 min"
    }
  ];

  const categories = ["Tutti", "Normative", "Guide", "Formazione", "Tecnologia", "Audit", "Documenti"];

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
              <Link to="/blog" className="text-brand-red font-semibold">Blog</Link>
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
              <span>📖 Il nostro Blog</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              Insights e Guide per la 
              <br />
              <span className="gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
                Sicurezza Aziendale
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Rimani aggiornato sulle ultime normative, best practices e innovazioni nel mondo della sicurezza sul lavoro.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  category === "Tutti" 
                    ? "bg-brand-red text-white shadow-lg" 
                    : "bg-white text-gray-700 border border-gray-200 hover:border-brand-red hover:text-brand-red"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.readTime}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-3">{post.date}</div>
                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-brand-red transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-brand-red font-semibold hover:underline flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300">
                    <span>Leggi tutto</span>
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Carica Altri Articoli
            </button>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-20 bg-gradient-to-br from-brand-red to-brand-red-light rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-black mb-4">Rimani sempre aggiornato</h3>
            <p className="text-xl mb-8 opacity-90">
              Iscriviti alla nostra newsletter per ricevere i migliori contenuti sulla sicurezza aziendale direttamente nella tua inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="La tua email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-800 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-brand-red px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Iscriviti
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;

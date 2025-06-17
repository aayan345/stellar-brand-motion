const Blog = () => {
  const featuredPost = {
    title: "Le nuove normative ISO 45001:2023 - Guida completa per la conformità",
    excerpt: "Scopri tutto quello che devi sapere sui recenti aggiornamenti alle normative ISO 45001 e come prepararti per garantire la conformità della tua azienda.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Normative",
    readTime: "8 min di lettura",
    date: "15 Gennaio 2024",
    author: "Marco Rossi"
  };

  const posts = [
    {
      title: "Come implementare un sistema di gestione della sicurezza efficace",
      excerpt: "Una guida pratica per implementare un SGSL che funzioni davvero nella tua azienda.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Gestione",
      readTime: "6 min",
      date: "12 Gennaio 2024"
    },
    {
      title: "DVR digitale vs cartaceo: vantaggi e svantaggi",
      excerpt: "Confronto dettagliato tra i sistemi tradizionali e le soluzioni digitali per la valutazione dei rischi.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Tecnologia",
      readTime: "5 min",
      date: "10 Gennaio 2024"
    },
    {
      title: "Formazione sulla sicurezza: le migliori pratiche",
      excerpt: "Come rendere la formazione sulla sicurezza più efficace e coinvolgente per i dipendenti.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Formazione",
      readTime: "7 min",
      date: "8 Gennaio 2024"
    },
    {
      title: "Controlli e audit interni: una checklist completa",
      excerpt: "Gli elementi essenziali da verificare durante i controlli interni per la sicurezza aziendale.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Audit",
      readTime: "9 min",
      date: "5 Gennaio 2024"
    },
    {
      title: "Industria 4.0 e sicurezza: le nuove sfide",
      excerpt: "Come l'evoluzione tecnologica sta cambiando l'approccio alla sicurezza sul lavoro.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Innovation",
      readTime: "6 min",
      date: "3 Gennaio 2024"
    },
    {
      title: "Gestione delle emergenze: protocolli e procedure",
      excerpt: "Come preparare la tua azienda ad affrontare situazioni di emergenza in modo efficace.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Emergenze",
      readTime: "8 min",
      date: "1 Gennaio 2024"
    }
  ];

  const categories = ["Tutti", "Normative", "Gestione", "Tecnologia", "Formazione", "Audit", "Innovation", "Emergenze"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(196,30,58,0.06)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(224,53,85,0.04)_0%,transparent_50%)]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-red/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-brand-red-light/5 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-brand-red to-brand-red-light text-white px-10 py-5 rounded-full text-lg font-bold mb-10 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              <span>📚 Blog & Risorse</span>
            </div>
            <h1 className="text-7xl lg:text-9xl font-black mb-10 text-gray-900 leading-tight">
              Insights e aggiornamenti
              <br />
              <span className="relative gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
                sulla sicurezza
                <div className="absolute -bottom-6 left-0 right-0 h-4 bg-gradient-to-r from-brand-red/20 via-brand-red-light/30 to-brand-red/20 rounded-full blur-sm"></div>
              </span>
            </h1>
            <p className="text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Rimani aggiornato con le ultime novità, best practices e guide pratiche per la sicurezza aziendale
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Categories Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  index === 0 
                    ? 'bg-gradient-to-r from-brand-red to-brand-red-light text-white shadow-lg' 
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-brand-red hover:text-brand-red'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl overflow-hidden shadow-3xl border border-gray-100 mb-20 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red to-brand-red-light"></div>
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-80 lg:h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-8 left-8">
                  <span className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl">
                    ⭐ In Evidenza
                  </span>
                </div>
                <div className="absolute bottom-8 left-8">
                  <div className="flex items-center space-x-3 text-white">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">👨‍💼</span>
                    </div>
                    <span className="font-semibold">{featuredPost.author}</span>
                  </div>
                </div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-8">
                  <span className="bg-gradient-to-r from-brand-red/10 to-brand-red-light/10 text-brand-red px-4 py-2 rounded-full text-sm font-bold border border-brand-red/20">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 font-medium">{featuredPost.date}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500 font-medium">{featuredPost.readTime}</span>
                </div>
                <h2 className="text-4xl font-black text-gray-800 mb-8 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed mb-10">
                  {featuredPost.excerpt}
                </p>
                <button className="group bg-gradient-to-r from-brand-red to-brand-red-light text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 self-start relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <span className="relative flex items-center space-x-3">
                    <span>Leggi l'articolo</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <article 
                key={index} 
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 relative"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm text-brand-red px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between text-gray-500 text-sm mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium">{post.date}</span>
                      <span>•</span>
                      <span className="font-medium">{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-brand-red transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-brand-red to-brand-red-light rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">👨‍💼</span>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{post.author}</span>
                    </div>
                    
                    <button className="text-brand-red font-bold group-hover:text-brand-red-light hover:underline group-hover:translate-x-2 transition-all duration-300 flex items-center space-x-2">
                      <span>Leggi</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <div className="text-center mt-16">
        <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          Carica Altri Articoli
        </button>
      </div>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-brand-red to-brand-red-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Rimani sempre aggiornato</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Iscriviti alla nostra newsletter per ricevere i migliori contenuti sulla sicurezza aziendale direttamente nella tua casella email
          </p>
          
          <div className="max-w-lg mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="La tua email aziendale"
              className="flex-1 px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Iscriviti
            </button>
          </div>
          
          <p className="text-sm opacity-80 mt-4">
            Niente spam, solo contenuti di qualità. Cancellati quando vuoi.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;

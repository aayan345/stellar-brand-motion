
const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Le nuove normative sulla sicurezza sul lavoro 2024",
      excerpt: "Scopri tutte le novità legislative che entreranno in vigore quest'anno e come prepararsi per essere conformi alle nuove disposizioni europee.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Normative",
      date: "15 Marzo 2024",
      readTime: "5 min",
      featured: true,
      author: "Dr. Marco Rossi"
    },
    {
      id: 2,
      title: "Come implementare un sistema HSE efficace",
      excerpt: "Guida completa per implementare un sistema di gestione HSE che funzioni davvero nella tua azienda con metodologie innovative.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Best Practices",
      date: "12 Marzo 2024",
      readTime: "8 min",
      featured: false,
      author: "Ing. Laura Bianchi"
    },
    {
      id: 3,
      title: "Digitalizzazione della sicurezza: vantaggi e sfide",
      excerpt: "Perché la digitalizzazione è fondamentale per la moderna gestione della sicurezza aziendale nell'era dell'Industria 4.0.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Tecnologia",
      date: "8 Marzo 2024",
      readTime: "6 min",
      featured: false,
      author: "Dr. Alessandro Verdi"
    },
    {
      id: 4,
      title: "Formazione del personale: metodologie innovative",
      excerpt: "Le nuove frontiere della formazione aziendale per la sicurezza sul lavoro nell'era digitale con realtà virtuale e AI.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Formazione",
      date: "5 Marzo 2024",
      readTime: "7 min",
      featured: false,
      author: "Prof.ssa Maria Neri"
    },
    {
      id: 5,
      title: "Risk Assessment: dalla teoria alla pratica",
      excerpt: "Come condurre una valutazione dei rischi efficace e conforme alle normative vigenti con strumenti digitali avanzati.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Risk Management",
      date: "2 Marzo 2024",
      readTime: "10 min",
      featured: false,
      author: "Ing. Paolo Gialli"
    },
    {
      id: 6,
      title: "Industria 4.0 e sicurezza: il futuro è oggi",
      excerpt: "Come l'Industria 4.0 sta rivoluzionando l'approccio alla sicurezza nei luoghi di lavoro con IoT e intelligenza artificiale.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Innovazione",
      date: "28 Febbraio 2024",
      readTime: "9 min",
      featured: false,
      author: "Dr. Francesco Viola"
    }
  ];

  const categories = ["Tutti", "Normative", "Best Practices", "Tecnologia", "Formazione", "Risk Management", "Innovazione"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(196,30,58,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(224,53,85,0.1)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-xl">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span>📚 Blog & Insights Premium</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-8 text-gray-900 leading-tight">
              Resta aggiornato sulla
              <br />
              <span className="relative gradient-text bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent">
                sicurezza aziendale
                <div className="absolute -bottom-4 left-0 right-0 h-3 bg-gradient-to-r from-brand-red/30 to-brand-red-light/30 rounded-full"></div>
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Guide esclusive, approfondimenti di esperti e le ultime novità dal mondo della sicurezza sul lavoro per tenere la tua azienda sempre all'avanguardia
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Categories Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`group px-8 py-4 rounded-full font-bold transition-all duration-500 transform hover:scale-105 shadow-lg relative overflow-hidden ${
                  index === 0 
                    ? 'bg-gradient-to-r from-brand-red to-brand-red-light text-white shadow-xl' 
                    : 'bg-white text-gray-600 hover:bg-gradient-to-r hover:from-brand-red hover:to-brand-red-light hover:text-white border-2 border-gray-200 hover:border-transparent'
                }`}
              >
                <span className="relative z-10">{category}</span>
                {index !== 0 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-brand-red-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Featured Post */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl overflow-hidden shadow-3xl border border-gray-100 mb-20 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red to-brand-red-light"></div>
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
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
                    <span className="font-semibold">{blogPosts[0].author}</span>
                  </div>
                </div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-8">
                  <span className="bg-gradient-to-r from-brand-red/10 to-brand-red-light/10 text-brand-red px-4 py-2 rounded-full text-sm font-bold border border-brand-red/20">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-500 font-medium">{blogPosts[0].date}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500 font-medium">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-4xl font-black text-gray-800 mb-8 leading-tight">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed mb-10">
                  {blogPosts[0].excerpt}
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

      {/* Enhanced Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.slice(1).map((post) => (
              <article 
                key={post.id} 
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 border border-gray-100 relative"
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

      {/* Premium Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-red to-brand-red-light text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-8 leading-tight">Non perdere mai un aggiornamento</h2>
            <p className="text-2xl mb-12 opacity-95 leading-relaxed font-light">
              Iscriviti alla nostra newsletter esclusiva per ricevere articoli premium, guide approfondite e novità direttamente nella tua inbox
            </p>
            
            <div className="max-w-lg mx-auto">
              <div className="flex bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 shadow-2xl">
                <input 
                  type="email" 
                  placeholder="La tua email aziendale"
                  className="flex-1 bg-transparent text-white placeholder-white/70 p-4 focus:outline-none text-lg"
                />
                <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Iscriviti Ora
                </button>
              </div>
              <p className="text-white/80 text-sm mt-4">
                Oltre 10.000 professionisti si fidano dei nostri contenuti
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

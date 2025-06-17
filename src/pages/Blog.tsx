
const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Le nuove normative sulla sicurezza sul lavoro 2024",
      excerpt: "Scopri tutte le novità legislative che entreranno in vigore quest'anno e come prepararsi per essere conformi.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Normative",
      date: "15 Marzo 2024",
      readTime: "5 min",
      featured: true
    },
    {
      id: 2,
      title: "Come implementare un sistema HSE efficace",
      excerpt: "Guida completa per implementare un sistema di gestione HSE che funzioni davvero nella tua azienda.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Best Practices",
      date: "12 Marzo 2024",
      readTime: "8 min",
      featured: false
    },
    {
      id: 3,
      title: "Digitalizzazione della sicurezza: vantaggi e sfide",
      excerpt: "Perché la digitalizzazione è fondamentale per la moderna gestione della sicurezza aziendale.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Tecnologia",
      date: "8 Marzo 2024",
      readTime: "6 min",
      featured: false
    },
    {
      id: 4,
      title: "Formazione del personale: metodologie innovative",
      excerpt: "Le nuove frontiere della formazione aziendale per la sicurezza sul lavoro nell'era digitale.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Formazione",
      date: "5 Marzo 2024",
      readTime: "7 min",
      featured: false
    },
    {
      id: 5,
      title: "Risk Assessment: dalla teoria alla pratica",
      excerpt: "Come condurre una valutazione dei rischi efficace e conforme alle normative vigenti.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Risk Management",
      date: "2 Marzo 2024",
      readTime: "10 min",
      featured: false
    },
    {
      id: 6,
      title: "Industria 4.0 e sicurezza: il futuro è oggi",
      excerpt: "Come l'Industria 4.0 sta rivoluzionando l'approccio alla sicurezza nei luoghi di lavoro.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Innovazione",
      date: "28 Febbraio 2024",
      readTime: "9 min",
      featured: false
    }
  ];

  const categories = ["Tutti", "Normative", "Best Practices", "Tecnologia", "Formazione", "Risk Management", "Innovazione"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-brand-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-brand-red rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <span>📚 Blog & Insights</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Resta aggiornato sulla
              <br />
              <span className="gradient-text bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent">
                sicurezza aziendale
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Guide, approfondimenti e novità dal mondo della sicurezza sul lavoro per tenere la tua azienda sempre al passo
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  index === 0 
                    ? 'bg-brand-red text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-brand-red hover:text-white shadow-md'
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
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 mb-20">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-80 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-brand-red text-white px-4 py-2 rounded-full text-sm font-semibold">
                    In Evidenza
                  </span>
                </div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-brand-red bg-opacity-10 text-brand-red px-3 py-1 rounded-full text-sm font-semibold">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                  <span className="text-gray-500 text-sm">• {blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {blogPosts[0].excerpt}
                </p>
                <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 self-start">
                  Leggi l'articolo →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-brand-red px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-brand-red transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <button className="text-brand-red font-semibold hover:underline group-hover:translate-x-2 transition-transform duration-300">
                    Leggi di più →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-red to-brand-red-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Non perdere mai un aggiornamento</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Iscriviti alla nostra newsletter per ricevere articoli, guide e novità direttamente nella tua inbox
          </p>
          
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="La tua email"
              className="flex-1 p-4 rounded-l-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-brand-red px-8 py-4 rounded-r-xl font-bold hover:bg-gray-100 transition-all duration-300">
              Iscriviti
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

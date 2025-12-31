import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50 border-b border-purple-700">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/logo.png"
              alt="Thanexxx Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <h1 className="text-xl md:text-2xl font-bold text-white font-bauhaus">THANEXXX</h1>
          </div>
          <div className="hidden md:flex gap-4">
            <a href="#beneficios" className="hover:text-purple-400 transition-all duration-300 hover:scale-110">Beneficios</a>
            <a href="#producto" className="hover:text-purple-400 transition-all duration-300 hover:scale-110">Producto</a>
            <a href="#contacto" className="hover:text-purple-400 transition-all duration-300 hover:scale-110">Contacto</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        {/* Círculos flotantes decorativos */}
        <div className="floating-circle" style={{width: '300px', height: '300px', top: '20%', left: '10%', animation: 'float-1 8s ease-in-out infinite'}}></div>
        <div className="floating-circle" style={{width: '250px', height: '250px', top: '40%', right: '15%', animation: 'float-2 10s ease-in-out infinite'}}></div>
        <div className="floating-circle" style={{width: '200px', height: '200px', bottom: '10%', left: '20%', animation: 'float-3 6s ease-in-out infinite'}}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white font-bauhaus">
              THANE<span className="glitch" data-text="XXX">XXX</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-300 mb-4">
              Potenciador Sexual Natural
            </p>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
              Fórmula única con hierbas africanas, peruanas e indias para mejorar tu rendimiento sexual de forma natural y segura
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
              >
                Ordenar Ahora
              </a>
              <a
                href="https://www.instagram.com/thanexx.corp/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
              >
                Síguenos en Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section id="beneficios" className="py-8 px-4 bg-black/30 relative overflow-hidden">
        {/* Imagen de fondo a la izquierda */}
        <div className="absolute left-0 top-0 bottom-0 w-full opacity-70 pointer-events-none" style={{filter: 'blur(2px)'}}>
          <Image
            src="/images/fondo-beneficios.jpg"
            alt="Fondo"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <h3 className="text-4xl font-bold text-center mb-16 text-white font-bauhaus">Beneficios</h3>
          <div className="relative w-full max-w-4xl mx-auto aspect-square">
            {/* SVG Hexágono con líneas y beneficios integrados */}
            <svg className="w-full h-full" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
              {/* Líneas del hexágono */}
              <line x1="250" y1="80" x2="400" y2="165" stroke="#fbbf24" strokeWidth="2" />
              <line x1="400" y1="165" x2="400" y2="335" stroke="#fbbf24" strokeWidth="2" />
              <line x1="400" y1="335" x2="250" y2="420" stroke="#fbbf24" strokeWidth="2" />
              <line x1="250" y1="420" x2="100" y2="335" stroke="#fbbf24" strokeWidth="2" />
              <line x1="100" y1="335" x2="100" y2="165" stroke="#fbbf24" strokeWidth="2" />
              <line x1="100" y1="165" x2="250" y2="80" stroke="#fbbf24" strokeWidth="2" />
              
              {/* Centro - Imagen del producto */}
              <image href="/images/producto.png" x="175" y="175" width="150" height="150" preserveAspectRatio="xMidYMid meet"/>
            </svg>
            
            {/* Beneficio 1 - Superior (250, 80) */}
            <div className="absolute flex flex-col items-center transition-transform duration-300 hover:scale-110" style={{left: '50%', top: '16%', transform: 'translate(-50%, -50%)'}}>
              <div className="bg-black/30 hover:bg-purple-600 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg shadow-yellow-500/30 transition-all duration-300 hover:shadow-purple-500/50 cursor-pointer">
                🔥
              </div>
              <p className="text-white font-semibold mt-2 text-xs md:text-sm text-center whitespace-nowrap">Mayor Libido</p>
            </div>
            
            {/* Beneficio 2 - Superior Derecha (400, 165) */}
            <div className="absolute flex flex-col items-center transition-transform duration-300 hover:scale-110" style={{left: '80%', top: '33%', transform: 'translate(-50%, -50%)'}}>
              <div className="bg-black/30 hover:bg-purple-600 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg shadow-yellow-500/30 transition-all duration-300 hover:shadow-purple-500/50 cursor-pointer">
                💘
              </div>
              <p className="text-white font-semibold mt-2 text-xs md:text-sm text-center whitespace-nowrap">Deseo Sexual</p>
            </div>
            
            {/* Beneficio 3 - Inferior Derecha (400, 335) */}
            <div className="absolute flex flex-col items-center transition-transform duration-300 hover:scale-110" style={{left: '80%', top: '67%', transform: 'translate(-50%, -50%)'}}>
              <div className="bg-black/30 hover:bg-purple-600 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg shadow-yellow-500/30 transition-all duration-300 hover:shadow-purple-500/50 cursor-pointer">
                💪
              </div>
              <p className="text-white font-semibold mt-2 text-xs md:text-sm text-center whitespace-nowrap">Fuerza y Resistencia</p>
            </div>
            
            {/* Beneficio 4 - Inferior (250, 420) */}
            <div className="absolute flex flex-col items-center transition-transform duration-300 hover:scale-110" style={{left: '50%', top: '84%', transform: 'translate(-50%, -50%)'}}>
              <div className="bg-black/30 hover:bg-purple-600 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg shadow-yellow-500/30 transition-all duration-300 hover:shadow-purple-500/50 cursor-pointer">
                ⏱️
              </div>
              <p className="text-white font-semibold mt-2 text-xs md:text-sm text-center whitespace-nowrap">Control de Eyaculación</p>
            </div>
            
            {/* Beneficio 5 - Inferior Izquierda (100, 335) */}
            <div className="absolute flex flex-col items-center transition-transform duration-300 hover:scale-110" style={{left: '20%', top: '67%', transform: 'translate(-50%, -50%)'}}>
              <div className="bg-black/30 hover:bg-purple-600 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg shadow-yellow-500/30 transition-all duration-300 hover:shadow-purple-500/50 cursor-pointer">
                📈
              </div>
              <p className="text-white font-semibold mt-2 text-xs md:text-sm text-center whitespace-nowrap">Sin Bajones</p>
            </div>
            
            {/* Beneficio 6 - Superior Izquierda (100, 165) */}
            <div className="absolute flex flex-col items-center transition-transform duration-300 hover:scale-110" style={{left: '20%', top: '33%', transform: 'translate(-50%, -50%)'}}>
              <div className="bg-black/30 hover:bg-purple-600 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg shadow-yellow-500/30 transition-all duration-300 hover:shadow-purple-500/50 cursor-pointer">
                ⚡
              </div>
              <p className="text-white font-semibold mt-2 text-xs md:text-sm text-center whitespace-nowrap">Erección Prolongada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Producto Section */}
      <section id="producto" className="py-20 px-4 relative">
        {/* Círculos flotantes decorativos */}
        <div className="floating-circle" style={{width: '350px', height: '350px', top: '10%', left: '5%', animation: 'float-2 12s ease-in-out infinite'}}></div>
        <div className="floating-circle" style={{width: '280px', height: '280px', bottom: '5%', right: '8%', animation: 'float-3 7s ease-in-out infinite'}}></div>
        <div className="floating-circle" style={{width: '220px', height: '220px', top: '50%', right: '10%', animation: 'float-1 10s ease-in-out infinite 1s'}}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <h3 className="text-4xl font-bold text-center mb-12 text-white hover:text-purple-300 transition-colors duration-300 font-bauhaus">¿Por Qué THANEXXX?</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-purple-600 via-violet-600 to-purple-800 p-12 rounded-2xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-400/60 transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <h4 className="text-3xl font-bold mb-4">THANEXXX</h4>
                  <p className="text-xl mb-2">Fórmula Premium</p>
                  <p className="text-sm opacity-90">Hierbas Africanas + Peruanas + Indias</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="text-2xl text-purple-400">✓</div>
                <div>
                  <h5 className="font-semibold text-lg mb-2 text-purple-300">Hierbas Africanas</h5>
                  <p className="text-zinc-400">Ingredientes ancestrales conocidos por sus propiedades afrodisíacas.</p>
                </div>
              </div>
              <div className="flex gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="text-2xl text-purple-400">✓</div>
                <div>
                  <h5 className="font-semibold text-lg mb-2 text-purple-300">Plantas Peruanas</h5>
                  <p className="text-zinc-400">Maca y otras hierbas andinas que potencian la energía vital.</p>
                </div>
              </div>
              <div className="flex gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="text-2xl text-purple-400">✓</div>
                <div>
                  <h5 className="font-semibold text-lg mb-2 text-purple-300">Medicina India</h5>
                  <p className="text-zinc-400">Ashwagandha y otras plantas ayurvédicas para el bienestar integral.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 px-4 bg-purple-950/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-center mb-12 text-white hover:text-purple-300 transition-colors duration-300 font-bauhaus">Contacto</h3>
          <p className="text-center text-zinc-300 mb-12 text-lg">¿Listo para mejorar tu vida? Contáctanos</p>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* WhatsApp 1 */}
            <a
              href="https://wa.me/51912274816"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
            >
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/50 transition-all">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">+51 912 274 816</span>
            </a>
            
            {/* WhatsApp 2 */}
            <a
              href="https://wa.me/51920708635"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
            >
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/50 transition-all">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">+51 920 708 635</span>
            </a>
            
            {/* Instagram */}
            <a
              href="https://www.instagram.com/thanexx.corp/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-pink-500/50 transition-all">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">@thanexx.corp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-800">
        <div className="container mx-auto max-w-6xl text-center text-zinc-500">
          <p>&copy; 2025 THANEXXX. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Potenciador sexual natural de hierbas africanas, peruanas e indias.</p>
        </div>
      </footer>
    </div>
  );
}

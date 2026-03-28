import './App.css'
import { SiNike, SiOpenai } from 'react-icons/si'
import { FaMicrosoft } from 'react-icons/fa6'

function App() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* SVG filters: exact-cream → #e0d6b6, exact-orange → #f28c5a, exact-teal → #1a3b40 */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="exact-cream" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="
              0 0 0 0 0.878
              0 0 0 0 0.839
              0 0 0 0 0.714
              0 0 0 1 0" />
          </filter>
          <filter id="exact-orange" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="
              0 0 0 0 0.949
              0 0 0 0 0.549
              0 0 0 0 0.353
              0 0 0 1 0" />
          </filter>
          <filter id="exact-teal" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="
              0 0 0 0 0.102
              0 0 0 0 0.231
              0 0 0 0 0.251
              0 0 0 1 0" />
          </filter>
        </defs>
      </svg>

      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-[#1a3b40]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(245,241,228,0.05)]">
        <div className="grid-container items-center h-20">
          <div className="col-span-6 flex items-center gap-3">
            <div className="relative h-20 w-20 shrink-0">
              <img src="/octo_circuit.png" alt="" className="absolute inset-0 h-full w-full object-contain" style={{ filter: 'url(#exact-orange)' }} />
              <img src="/octo_body.png" alt="Octosync" className="absolute inset-0 h-full w-full object-contain" style={{ filter: 'url(#exact-cream)' }} />
            </div>
            <span className="text-2xl font-bold text-[#e0d6b6]">Octosync</span>
          </div>
          <div className="col-span-6 justify-self-end flex items-center">
            <button
              onClick={scrollToContact}
              className="bg-[#f28c5a] text-[#2d1a10] px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#f28c5a]/80 transition-all active:scale-95"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </header>

      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#f28c5a] rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#2a626a] rounded-full blur-[100px]"></div>
          </div>
          <div className="grid-container relative z-10 items-center">
            <div className="col-span-12 md:col-span-8 md:col-start-3">
              <span className="inline-block mb-6 px-4 py-1 border border-[#f28c5a]/20 bg-[#f28c5a]/5 rounded-full text-[#f28c5a] text-xs tracking-[0.2em] uppercase">
                Tech & AI Consulting
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#e0d6b6] leading-[1.1] mb-8">
                Elevate your business through <span className="italic text-[#f28c5a]">smarter technology.</span>
              </h1>
              <p className="text-[#e0d6b6]/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                From establishing digital basics for family-owned shops to building advanced AI workflows for enterprises, we unlock the next level of growth for your business.
              </p>
              <div className="mt-12">
                <p className="text-[#e0d6b6]/40 text-xs tracking-[0.15em] uppercase font-medium mb-6">
                  Our team brings experience from:
                </p>
                <div className="flex items-center gap-10 opacity-70">
                  <SiNike className="text-[#e0d6b6]" size={140} />
                  <FaMicrosoft className="text-[#e0d6b6]" size={113} />
                  <SiOpenai className="text-[#e0d6b6]" size={113} />
                  <span className="text-[#e0d6b6] text-6xl font-bold tracking-wide">Kroger</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-[#1d4147] py-16" id="services">
          <div className="grid-container">
            <div className="col-span-12 md:col-start-3 md:col-span-8 mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#e0d6b6]">Core Architecture</h2>
              <p className="text-[#e0d6b6]/60">We don't just build scripts; we design intelligent ecosystems that eliminate friction and maximize technical throughput.</p>
            </div>
            <div className="col-span-12 md:col-start-3 md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="p-8 rounded-xl bg-[#20464d] border border-[#4a747a]/10 hover:border-[#f28c5a]/30 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 text-[#e0d6b6]">Business Automations</h3>
                <p className="text-[#e0d6b6]/70 leading-relaxed">End-to-end workflow synthesis. We identify high-latency manual operations and replace them with self-healing digital pipelines.</p>
              </div>
              {/* Card 2 */}
              <div className="p-8 rounded-xl bg-[#20464d] border border-[#4a747a]/10 hover:border-[#f28c5a]/30 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 text-[#e0d6b6]">AI Strategy Consulting</h3>
                <p className="text-[#e0d6b6]/70 leading-relaxed">High-level advisory on integrating Large Language Models and custom neural architectures into existing corporate frameworks.</p>
              </div>
              {/* Card 3 */}
              <div className="p-8 rounded-xl bg-[#20464d] border border-[#4a747a]/10 hover:border-[#f28c5a]/30 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 text-[#e0d6b6]">Custom Software</h3>
                <p className="text-[#e0d6b6]/70 leading-relaxed">Bespoke engineering solutions designed for scale. We build the specialized tooling that off-the-shelf platforms cannot provide.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-[#1a3b40]" id="founders">
          <div className="grid-container">
            <div className="col-span-12 md:col-start-3 md:col-span-8 mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#e0d6b6]">The Minds Behind Octosync</h2>
              <p className="text-[#e0d6b6]/60 max-w-2xl">Engineering precision met with strategic vision. Our founders bring decades of experience from the forefront of the AI revolution.</p>
            </div>
            <div className="col-span-12 md:col-start-3 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Founder 1 */}
              <div className="flex flex-col items-start text-left">
                <div className="relative mb-8 w-80 h-96 rounded-2xl overflow-hidden">
                  <img
                    alt="Sean Pichardo"
                    className="w-full h-full object-cover"
                    src="/sean_pichardo_headshot_2026_clean.png"
                  />
                  <div className="absolute inset-0 border-2 border-[#f28c5a]/20 rounded-2xl pointer-events-none"></div>
                </div>
                <h3 className="text-2xl font-bold mb-1 text-[#e0d6b6]">Sean Pichardo</h3>
                <p className="text-[#f28c5a] text-sm uppercase tracking-widest mb-4">Co-Founder &amp; Chief Architect</p>
                <p className="text-[#e0d6b6]/70 leading-relaxed max-w-xs">Lead Architect specializing in high-throughput and enterprise generative systems,
                  having engineered critical solutions for one of the largest AI companies in the world, and scaled enterprise platforms for global brands like Nike and Kroger.</p>
              </div>
              {/* Founder 2 */}
              <div className="flex flex-col items-start text-left">
                <div className="relative mb-8 w-80 h-96 rounded-2xl overflow-hidden">
                  <img
                    alt="LeSean Johnson"
                    className="w-full h-full object-cover"
                    src="/lesean_johnson_headshot_2026_clean.png"
                  />
                  <div className="absolute inset-0 border-2 border-[#f28c5a]/20 rounded-2xl pointer-events-none"></div>
                </div>
                <h3 className="text-2xl font-bold mb-1 text-[#e0d6b6]">LeSean Johnson</h3>
                <p className="text-[#f28c5a] text-sm uppercase tracking-widest mb-4">Co-Founder &amp; Strategy Lead</p>
                <p className="text-[#e0d6b6]/70 leading-relaxed max-w-xs">Combines a foundational career at Microsoft with expertise in sophisticated frontend architecture.
                  Aligns technical rigor with strategic goals to drive enterprise-grade digital transformation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-[#122a2e]" id="contact">
          <div className="grid-container">
            <div className="col-span-12 md:col-start-3 md:col-span-8 text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#e0d6b6]">Process Discussion and Systems Audit</h2>
              <p className="text-[#e0d6b6]/60">Ready to optimize your internal throughput? Let's discuss your current systems architecture.</p>
            </div>
            <div className="col-span-12 md:col-start-3 md:col-span-8 glass-card p-10 rounded-2xl border border-[#4a747a]/10 shadow-2xl">
              <form action="https://formspree.io/f/xreogany" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[#a3dce3]">Full Name</label>
                    <input
                      name="name"
                      className="w-full bg-[#2a545a] border-none rounded-lg p-4 text-[#e0d6b6] placeholder:text-[#e0d6b6]/30 focus:ring-2 focus:ring-[#f28c5a]/50 focus:outline-none transition-all"
                      placeholder="John Doe"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[#a3dce3]">Work Email</label>
                    <input
                      name="email"
                      className="w-full bg-[#2a545a] border-none rounded-lg p-4 text-[#e0d6b6] placeholder:text-[#e0d6b6]/30 focus:ring-2 focus:ring-[#f28c5a]/50 focus:outline-none transition-all"
                      placeholder="john@enterprise.com"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[#a3dce3]">Primary Objective</label>
                  <select name="objective" className="w-full bg-[#2a545a] border-none rounded-lg p-4 text-[#e0d6b6] focus:ring-2 focus:ring-[#f28c5a]/50 focus:outline-none transition-all">
                    <option>Workflow Automation</option>
                    <option>AI Integration Strategy</option>
                    <option>Custom Software Development</option>
                    <option>Full Systems Audit</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[#a3dce3]">Project Details</label>
                  <textarea
                    name="details"
                    className="w-full bg-[#2a545a] border-none rounded-lg p-4 text-[#e0d6b6] placeholder:text-[#e0d6b6]/30 focus:ring-2 focus:ring-[#f28c5a]/50 focus:outline-none transition-all"
                    placeholder="Briefly describe your current bottlenecks..."
                    rows={4}
                  ></textarea>
                </div>
                <button
                  className="w-full bg-[#f28c5a] hover:bg-[#f28c5a]/80 text-[#2d1a10] font-bold py-4 rounded-lg transition-all shadow-lg shadow-[#f28c5a]/20 active:scale-95"
                  type="submit"
                >
                  Let's talk systems.
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a3b40] w-full py-12 border-t border-[#e0d6b6]/10">
        <div className="grid-container items-center">
          <div className="col-span-12 md:col-start-3 md:col-span-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="relative h-14 w-14 shrink-0">
                <img src="/octo_circuit.png" alt="" className="absolute inset-0 h-full w-full object-contain" style={{ filter: 'url(#exact-orange)' }} />
                <img src="/octo_body.png" alt="Octosync" className="absolute inset-0 h-full w-full object-contain" style={{ filter: 'url(#exact-cream)' }} />
              </div>
              <span className="text-[#e0d6b6] text-xl font-bold">Octosync</span>
            </div>
            <div className="flex gap-8">
              <a className="text-[#e0d6b6]/60 hover:text-[#f28c5a] transition-colors text-sm tracking-wide" href="#services">Services</a>
              <a className="text-[#e0d6b6]/60 hover:text-[#f28c5a] transition-colors text-sm tracking-wide" href="#founders">Founders</a>
              <a className="text-[#e0d6b6]/60 hover:text-[#f28c5a] transition-colors text-sm tracking-wide" href="#contact">Contact</a>
            </div>
            <p className="text-sm tracking-wide text-[#e0d6b6]/60 text-center md:text-right">
              © {new Date().getFullYear()} Octosync. Intelligent automation, naturally.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

import ContactForm from './components/ContactForm'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import ProjectList from './components/sections/ProjectList'

function App() {

  return (
    <div className="page">
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <Header />

      <main id="main-content" className="page-main">
        <Hero />

        <ProjectList />

        <section id="iletisim" className="section-card">
          <h2>İletişim</h2>
          <p className="section-subtitle">Aşağıdaki formdan bana kısa bir mesaj bırakabilirsin.</p>
          <ContactForm />
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Sıla Kozik. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}

export default App

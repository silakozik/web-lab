import { useState, useEffect } from 'react'
import type { Project, FilterState } from './types/project'
import { fetchProjects } from './services/projectService'
import { filterProjects, sortProjects } from './utils/projectHelpers'
import ContactForm from './components/ContactForm'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'

function App() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "all",
    sortField: "year",
    sortOrder: "desc"
  })


  useEffect(() => {
    fetchProjects()
      .then((data: Project[]) => {
        setProjects(data)
        setLoading(false)
      })
      .catch((err: Error) => {
        console.error('Projeler yüklenemedi:', err)
        setLoading(false)
      })
  }, [])

  const filteredProjects = filterProjects(projects, filters)
  const sortedProjects = sortProjects(filteredProjects, filters)


  if (loading) {
    return <div className="loading">Yükleniyor...</div>
  }

  return (
    <div className="page">
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <Header />

      <main id="main-content" className="page-main">
        <Hero />

        <section id="projeler" className="section-card">
          <h2>Projelerim</h2>
          <div className="project-grid">
            {sortedProjects.map(project => (
              <article key={project.id} className="project-card">
                <img src={project.image} alt={project.title} />
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="skill-tags" role="list" aria-label="Projede kullanılan teknolojiler">
                    {project.tech.map(t => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

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

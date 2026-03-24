import { useState, useEffect } from 'react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
}

function App() {
  const [projects, setProjects] = useState<Project[]>([])
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState('')

  useEffect(() => {
    fetch('/data/projects.json')
      .then(res => res.json())
      .then((data: Project[]) => setProjects(data))
      .catch(err => console.error('Projeler yüklenemedi:', err))
  }, [])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setErr('')

    if (!email || !msg) {
      setErr('Lütfen tüm alanları doldurun.')
      return
    }

    if (msg.length < 10) {
      setErr('Mesaj en az 10 karakter olmalıdır.')
      return
    }

    alert('Mesajınız gönderildi!')
    setEmail('')
    setMsg('')
  }

  return (
    <div className="page">
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header className="site-header">
        <nav aria-label="Ana navigasyon" className="site-nav">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-name">Sıla Kozik</span>
          </div>
          <ul className="nav-list">
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" className="page-main">
        <section id="hakkimda" className="section-card">
          <h1>Merhaba, ben Sıla.</h1>
          <p>Modern web arayüzleri ve kullanıcı odaklı deneyimler tasarlamayı seven bir yazılım geliştiricisiyim.</p>
          <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Git</li>
          </ul>
        </section>

        <section id="projeler" className="section-card">
          <h2>Projelerim</h2>
          <div className="project-grid">
            {projects.map(project => (
              <article key={project.id} className="project-card">
                <img src={project.image} alt={project.imageAlt} />
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="skill-tags" role="list" aria-label="Projede kullanılan teknolojiler">
                    {project.tags.map(tag => (
                      <li key={tag}>{tag}</li>
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
          <form onSubmit={submit} noValidate className="contact-form">
            <div className="form-field">
              <label htmlFor="mail">E-posta</label>
              <input
                type="email"
                id="mail"
                required
                placeholder="ornek@mail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="txt">Mesaj</label>
              <textarea
                id="txt"
                required
                minLength={10}
                placeholder="Kısa bir not bırak..."
                value={msg}
                onChange={e => setMsg(e.target.value)}
              />
            </div>
            {err && <small role="alert">{err}</small>}
            <div className="form-actions">
              <button type="submit">Gönder</button>
            </div>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Sıla Kozik. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}

export default App

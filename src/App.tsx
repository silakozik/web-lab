import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState('')

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
        </section>

        <section id="projeler" className="section-card section-grid">
          <div>
            <h2>Projelerim</h2>
            <p>Web uygulamaları, küçük deneysel projeler ve arayüz odaklı çalışmalar üzerinde uğraşıyorum.</p>
          </div>
          <ul className="project-list">
            <li className="project-pill">Kişisel portfolyo</li>
            <li className="project-pill">Form doğrulama denemeleri</li>
            <li className="project-pill">Erişilebilirlik alıştırmaları</li>
          </ul>
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

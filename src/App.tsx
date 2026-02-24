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
    
    // Form gönderimi başarılı
    alert('Mesajınız gönderildi!')
    setEmail('')
    setMsg('')
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>
      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <p>Merhaba! Ben bir yazılım geliştiricisiyim. Projeler geliştirmeyi seviyorum.</p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <p>Şu anda üzerinde çalıştığım birkaç proje var. Bunlar arasında bir web uygulaması ve bir mobil uygulama bulunuyor.</p>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form onSubmit={submit} noValidate>
            <div>
              <label htmlFor="mail">E-posta:</label>
              <input type="email" id="mail" required value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="txt">Mesaj:</label>
              <textarea id="txt" required minLength={10} value={msg} onChange={e => setMsg(e.target.value)} />
            </div>
            {err && <small role="alert">{err}</small>}
            <button type="submit">Gönder</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Sıla Kozik. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App 

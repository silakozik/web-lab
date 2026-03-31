import { useState } from 'react'

const ContactForm = () => {
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
  )
}

export default ContactForm

const Header = () => {
  return (
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
  )
}

export default Header

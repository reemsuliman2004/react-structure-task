type NavbarProps = {
  currentPage: 'home' | 'about'
  onNavigate: (page: 'home' | 'about') => void
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <nav className="navbar">
      <h2>Simple App</h2>

      <div className="nav-links">
        <button
          type="button"
          className={currentPage === 'home' ? 'nav-button active' : 'nav-button'}
          onClick={() => onNavigate('home')}
        >
          Home
        </button>

        <button
          type="button"
          className={currentPage === 'about' ? 'nav-button active' : 'nav-button'}
          onClick={() => onNavigate('about')}
        >
          About
        </button>
      </div>
    </nav>
  )
}

import { useState } from 'react'
import { AppProvider } from './components/providers/AppProvider'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import './App.css'

function App() {
  const [page, setPage] = useState<'home' | 'about'>('home')

  return (
    <AppProvider>
      <div className="app-shell">
        <Navbar currentPage={page} onNavigate={setPage} />
        <main className="page-content">
          {page === 'home' ? <Home /> : <About />}
        </main>
        <Footer />
      </div>
    </AppProvider>
  )
}

export default App

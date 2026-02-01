import { Link, Outlet, useLocation } from 'react-router-dom'

function MainLayout() {
  const { pathname } = useLocation()

  const linkClass = (path) =>
    `hover:text-fuchsia-400 transition ${
      pathname === path ? 'text-fuchsia-400 font-semibold' : ''
    }`

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 text-white relative">
      
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-fuchsia-500/30 rounded-full blur-3xl top-20 left-1/2 -translate-x-1/2 -z-10 animate-pulse" />

      {/* Navbar */}
      <nav className="sticky top-0 z-20 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center gap-8 text-sm">
          <Link to="/" className={linkClass('/')}>Generator</Link>
          <Link to="/about" className={linkClass('/about')}>About</Link>
          <Link to="/tips" className={linkClass('/tips')}>Tips</Link>
          <Link to="/settings" className={linkClass('/settings')}>Settings</Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex items-center justify-center px-4 py-16">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout

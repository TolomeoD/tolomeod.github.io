import { useEffect, useState } from 'react'
import './App.css'
import { Home } from './pages/Home.jsx'
import { ProjectExplanation } from './pages/ProjectExplanation.jsx'

const normalizePath = (value) => {
  if (!value) return '/'
  if (value.length > 1 && value.endsWith('/')) {
    return value.slice(0, -1)
  }
  return value
}

const getSafePath = () => {
  if (typeof window === 'undefined') {
    return '/'
  }
  return normalizePath(window.location.pathname || '/')
}

function App() {
  const [path, setPath] = useState(getSafePath)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handlePopState = () => {
      setPath(getSafePath())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (nextPath) => {
    if (typeof window === 'undefined') return
    const target = normalizePath(nextPath)
    if (!target || target === window.location.pathname) return

    window.history.pushState({}, '', target)
    setPath(target)
  }

  if (path === '/') {
    return <Home onNavigate={navigate} />
  }

  if (path.startsWith('/projects/')) {
    const projectId = path.slice('/projects/'.length)
    return <ProjectExplanation projectId={projectId} onNavigate={navigate} />
  }

  return <ProjectExplanation projectId={''} onNavigate={navigate} />
}

export default App

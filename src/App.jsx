import routes from '@/router/'
import { useRoutes } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import useScrollTop from './hooks/useScrollTop'
import { Suspense } from 'react'

function App() {
  useScrollTop()

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Suspense fallback={"Loading..."}>
          {useRoutes(routes)}
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default App

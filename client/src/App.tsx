import { Suspense } from "react"
import { useRoutes } from "react-router"
import routes from '~react-pages'
import AppContainer from "./assets/styles/global"
import './index.css'

function App() {
  return (
    <AppContainer>
      <Suspense fallback={<p>Loading...</p>}>
        {useRoutes(routes)}
      </Suspense>
    </AppContainer>
  )
}

export default App
import './App.css'
import Auth from './components/Guards/Auth'
import Routes from './Routes'

function App() {
  return (
    <Auth>
      <Routes />
    </Auth>
  )
}

export default App

import React from 'react'
import './App.css'
import Auth from './components/Guards/Auth'
import RoutesRender from './RoutesRender'
import useLocalStorageCleanup from './utils/hooks/useLocalStorageCleanUp'

const App = () => {
  useLocalStorageCleanup('auth')

  return (
    <Auth>
      <RoutesRender />
    </Auth>
  )
}

export default App

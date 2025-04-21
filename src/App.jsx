import React from 'react'
import './App.css'
import Auth from './components/Guards/Auth'
import RoutesRender from './RoutesRender'

const App = () => {
  return (
    <Auth>
      <RoutesRender />
    </Auth>
  )
}

export default App

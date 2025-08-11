import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import routesConfig from './routesConfig'
import LoadingScreen from './components/LoadingScreen'

const RoutesRender = () => {
  const compose = (route, node) => {
    const withLayout = route.layout ? <route.layout>{node}</route.layout> : node
    return route.guard ? <route.guard>{withLayout}</route.guard> : withLayout
  }

  return (
    <Routes>
      {routesConfig.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          element={compose(
            route,
            <Suspense fallback={<LoadingScreen />}>
              <route.component />
            </Suspense>,
          )}
          exact={route.exact}
        />
      ))}
    </Routes>
  )
}

export default RoutesRender

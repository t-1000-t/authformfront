import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import routesConfig from './routesConfig'
import LoadingScreen from './components/LoadingScreen'

function RoutesRender() {
  return (
    <Routes>
      {routesConfig.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          element={
            <Suspense fallback={<LoadingScreen />}>
              {route.guard && ( // Apply guard if present
                <route.guard>
                  {route.layout ? ( // Apply layout if present
                    <route.layout>
                      <route.component />
                    </route.layout>
                  ) : (
                    <route.component />
                  )}
                </route.guard>
              )}
            </Suspense>
          }
          exact={route.exact}
        />
      ))}
    </Routes>
  )
}

export default RoutesRender

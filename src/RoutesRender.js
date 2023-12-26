import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import routesConfig from './routesConfig'
import LoadingScreen from 'components/LoadingScreen'

function RoutesRender() {
  return (
    <Routes>
      {routesConfig.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={(
            <Suspense fallback={<LoadingScreen />}>
              {route.guard ? ( // Apply guard if present
                <route.guard>
                  {route.layout ? ( // Apply layout if present
                    <route.layout>
                      <route.component />
                    </route.layout>
                  ) : (
                    <route.component />
                  )}
                </route.guard>
              ) : (
                <route.layout>
                  <route.component />
                </route.layout>
              )}
            </Suspense>
          )}
          exact={route.exact}
        />
      ))}
    </Routes>
  )
}

export default RoutesRender
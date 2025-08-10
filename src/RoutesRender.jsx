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
          // element={
          //   <Suspense fallback={<LoadingScreen />}>
          //     {route.guard && ( // Apply guard if present
          //       <route.guard>
          //         {route.layout ? ( // Apply layout if present
          //           <route.layout>
          //             <route.component />
          //           </route.layout>
          //         ) : (
          //           <route.component />
          //         )}
          //       </route.guard>
          //     )}
          //   </Suspense>
          // }
        />
      ))}
    </Routes>
  )
}

export default RoutesRender

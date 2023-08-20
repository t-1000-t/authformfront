import { Suspense, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from './routesConfig'
import LoadingScreen from 'components/LoadingScreen'

const renderRoutes = (routes) => (
  <Switch>
    {routes.map((route, i) => {
      const Guard = route.guard || Fragment
      const Layout = route.layout || Fragment
      const Component = route.component

      return (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <Suspense fallback={<LoadingScreen showPiece={route.loader} />}>
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>
              </Guard>
            </Suspense>
          )}
        />
      )
    })}
  </Switch>
)

function Routes() {
  return renderRoutes(routes)
}

export default Routes

import { lazy } from 'react'

import HomePage from './pages/Home'
import GuestLayout from './layouts/GuestLayout'
import GuestGuard from 'components/Guards/GuestGuard'

const routesConfig = [
  {
    exact: true,
    layout: GuestLayout,
    path: '/',
    guard: GuestGuard,
    component: HomePage,
  },
  {
    exact: true,
    layout: GuestLayout,
    path: '/contact',
    guard: GuestGuard,
    component: lazy(() => import('pages/Contact')),
  },
  {
    exact: true,
    layout: GuestLayout,
    path: '/about',
    guard: GuestGuard,
    component: lazy(() => import('pages/About')),
  },
  {
    exact: true,
    path: '/login',
    guard: GuestGuard,
    component: lazy(() => import('pages/Login')),
  },
  {
    exact: true,
    path: '/signup',
    guard: GuestGuard,
    component: lazy(() => import('pages/Signup')),
  },
  {
    exact: false,
    path: '/success',
    layout: GuestLayout,
    guard: GuestGuard,
    component: lazy(() => import('pages/Success')),
  },
]

export default routesConfig

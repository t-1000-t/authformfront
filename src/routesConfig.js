import { lazy } from 'react'

import HomeDefault from './pages/Home'
import GuestLayout from './layouts/GuestLayout'
import GuestGuard from 'components/Guards/GuestGuard'

const routesConfig = [
  {
    exact: true,
    layout: GuestLayout,
    path: '/',
    guard: GuestGuard,
    component: HomeDefault,
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
    path: '/notes',
    guard: GuestGuard,
    component: lazy(() => import('pages/Notes')),
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
    layout: GuestLayout,
    path: '/call',
    guard: GuestGuard,
    component: lazy(() => import('pages/Call')),
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

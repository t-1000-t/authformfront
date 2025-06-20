import { lazy } from 'react'

import GuestGuard from './components/Guards/GuestGuard'
import HomeDefault from './pages/Home'
import GuestLayout from './layouts/GuestLayout'

const routesConfig = [
  {
    exact: true,
    layout: GuestLayout,
    path: '/',
    guard: GuestGuard,
    component: HomeDefault,
    id: '0x0',
  },
  {
    exact: true,
    layout: GuestLayout,
    path: '/contact',
    guard: GuestGuard,
    component: lazy(() => import('./pages/Contact')),
    id: '0x1',
  },
  {
    exact: true,
    layout: GuestLayout,
    path: '/check',
    guard: GuestGuard,
    component: lazy(() => import('./pages/Check')),
    id: '0x2',
  },
  {
    exact: true,
    layout: GuestLayout,
    path: '/notes',
    guard: GuestGuard,
    component: lazy(() => import('./pages/Notes')),
    id: '0x3',
  },
  {
    exact: true,
    layout: GuestLayout,
    path: '/about',
    guard: GuestGuard,
    component: lazy(() => import('./pages/About')),
    id: '0x4',
  },
  {
    exact: true,
    layout: GuestLayout,
    path: '/call',
    guard: GuestGuard,
    component: lazy(() => import('./pages/Call')),
    id: '0x5',
  },
  {
    exact: true,
    path: '/login',
    guard: GuestGuard,
    component: lazy(() => import('./pages/Login')),
    id: '0x6',
  },
  {
    exact: true,
    path: '/signup',
    guard: GuestGuard,
    component: lazy(() => import('./pages/Signup')),
    id: '0x7',
  },
  {
    exact: false,
    path: '/success',
    layout: GuestLayout,
    guard: GuestGuard,
    component: lazy(() => import('./pages/Success')),
    id: '0x8',
  },
  {
    exact: false,
    path: '/p5',
    layout: GuestLayout,
    guard: GuestGuard,
    component: lazy(() => import('./pages/Game/P5')),
    id: '0x9',
  },
  {
    exact: false,
    path: '/phas',
    layout: GuestLayout,
    guard: GuestGuard,
    component: lazy(() => import('./pages/Game/Phaser')),
    id: '0x01',
  },
  {
    exact: false,
    path: '/mysql_db',
    layout: GuestLayout,
    guard: GuestGuard,
    component: lazy(() => import('./pages/Mysql')),
    id: '0x01',
  },
]

export default routesConfig

import { Redirect } from 'react-router-dom'
import useAuthStore from 'store/useAuthStore'

function GuestGuard({ children }) {
  const user = useAuthStore((state) => state.user)
  const redirect = useAuthStore((state) => state.redirect)

  console.log('user', user)

  if (!user) {
    return <Redirect to={redirect ? redirect : '/puzzles/quiz'} />
  }

  return children
}

export default GuestGuard

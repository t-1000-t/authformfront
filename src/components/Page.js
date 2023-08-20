import { useEffect } from 'react'

function Page({ children, title }) {
  useEffect(() => {
    document.title = title || 'Page with Content!'
    window.scrollTo(0, 0)
  }, [title])

  return children
}

export default Page

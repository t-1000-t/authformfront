import { useCallback, useState } from 'react'

const useModalEdit = (initialText) => {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState(initialText)

  const onOpen = useCallback(() => {
    setIsOpen(true)
    setText(text)
  }, [])
  const onClose = useCallback(() => {
    setText(initialText)
    setIsOpen(false)
  }, [initialText])

  const onChange = useCallback((e) => {
    const { name, value } = e.target
    setText((prev) => ({ ...prev, [name]: value }))
  }, [])

  return {
    isOpen,
    text,
    setText,
    onOpen,
    onClose,
    onChange,
  }
}

export default useModalEdit

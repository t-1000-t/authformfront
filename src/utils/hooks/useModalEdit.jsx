import { useCallback, useState } from 'react'

const useModalEdit = (initialText) => {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState(initialText)

  const onOpen = useCallback(() => {
    setText(initialText)
    setIsOpen(true)
  }, [initialText])

  const onClose = useCallback(() => {
    setIsOpen(false)
    setText(initialText)
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

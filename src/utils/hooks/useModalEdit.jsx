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

  const onChange = useCallback((e, activeIndex) => {
    const { name, value } = e.target
    console.log('activeIndex', activeIndex)
    setText((prev) =>
      !Array.isArray(prev)
        ? { ...prev, [name]: value }
        : prev.map((elem, idx) => (activeIndex === idx ? { ...elem, [name]: value } : elem)),
    )
  }, [])

  return {
    isOpen,
    text,
    onOpen,
    onClose,
    onChange,
  }
}

export default useModalEdit

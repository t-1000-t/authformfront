import React, { useEffect, useRef } from 'react'
import { useOutsideClick } from '@chakra-ui/icons'
import { Button, VStack, Box } from '@chakra-ui/react'
import STATUSES from './STATUSES'

const NoteContextMenu = ({ x, y, onOpen, onClose, onSelect }) => {
  const ref = useRef(null)

  useOutsideClick({ ref, handler: onClose })

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <Box top={x} left={y} ref={ref} onClick={(e) => onOpen(e)}>
      <VStack>
        {STATUSES.map((s) => (
          <Button key={s.key} onClick={onSelect}>
            {s.label}
          </Button>
        ))}
        <Button onClick={() => onClose()}>Close</Button>
      </VStack>
    </Box>
  )
}

export default NoteContextMenu

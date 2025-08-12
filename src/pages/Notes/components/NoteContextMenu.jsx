import React, { useEffect, useRef } from 'react'
import { useOutsideClick } from '@chakra-ui/icons'
import { Button, VStack, Box } from '@chakra-ui/react'
import STATUSES from './STATUSES'

const NoteContextMenu = ({ x, y, openMenu, closeMenu, onSelect }) => {
  const ref = useRef(null)

  useOutsideClick({ ref, handler: closeMenu })

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeMenu()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeMenu])

  return (
    <Box top={x} left={y} ref={ref} onClick={(e) => openMenu(e)}>
      <VStack>
        {STATUSES.map((s) => (
          <Button key={s.key} onClick={onSelect}>
            {s.label}
          </Button>
        ))}
        <Button onClick={(e) => closeMenu(e)}>Close</Button>
      </VStack>
    </Box>
  )
}

export default NoteContextMenu

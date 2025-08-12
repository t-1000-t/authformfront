import React, { useEffect, useRef } from 'react'
import { Box, Button, VStack, useOutsideClick } from '@chakra-ui/react'
import STATUSES from './STATUSES'

const NoteContextMenu = ({ x, y, closeMenu, onSelect }) => {
  const ref = useRef(null)

  useOutsideClick({ ref, handler: closeMenu })

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeMenu()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeMenu])

  return (
    <Box
      ref={ref}
      position="fixed"
      top={y}
      left={x}
      zIndex="popover"
      bg="white"
      borderWidth="1px"
      rounded="md"
      shadow="lg"
      p={2}
      minW="180px"
    >
      <VStack align="stretch" spacing={1}>
        {STATUSES.map((s) => (
          <Button key={s.key} variant="ghost" justifyContent="flex-start" onClick={() => onSelect?.(s.key)}>
            {s.label}
          </Button>
        ))}
        <Button variant="ghost" justifyContent="flex-start" onClick={closeMenu}>
          Cancel
        </Button>
      </VStack>
    </Box>
  )
}

export default NoteContextMenu

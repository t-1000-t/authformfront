import React, { useEffect, useRef, useState } from 'react'
import { Button, Text, Box } from '@chakra-ui/react'

const SkipEffectOnTheFirstRender = () => {
  const [state, setState] = useState < Number > 0
  const isRendered = useRef(true)

  useEffect(() => {
    if (isRendered.current) {
      console.log('First render pass 1')
      isRendered.current = false
      return () => {}
    }

    console.log('After first render only do render any time')
  }, [state])

  return (
    <Box>
      <Text>Do next render, click the button</Text>
      <Button type="button" onClick={setState((s) => s + 1)}>
        Click
      </Button>
    </Box>
  )
}

export default SkipEffectOnTheFirstRender

import React from 'react'
import { Box } from '@chakra-ui/react'
import Draggable from 'react-draggable'

function VideoBox({ streamRef, isOpponent }) {
  return (
    <Draggable>
      <Box h="136px" w="136px" rounded="full" position="relative" flexShrink={0} overflow="hidden" bg="black" mx={2}>
        <video
          ref={streamRef}
          playsInline
          muted={!isOpponent}
          autoPlay
          style={{
            maxWidth: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
            transform: 'translate3d(0, 0, 0)',
            width: '136px',
            height: '136px',
          }}
        />
      </Box>
    </Draggable>
  )
}

export default VideoBox

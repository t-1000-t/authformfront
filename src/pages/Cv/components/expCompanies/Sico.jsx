import React from 'react'
import { Text } from '@chakra-ui/react'

const Sico = () => {
  return (
    <Text>
      <Text as="samp" fontSize="larger">
        Company
      </Text>
      :&nbsp;&quot;
      <Text as="u" fontSize="larger">
        Sico
      </Text>
      &quot; Apr 2023 – Jun 2023 (Full time)
      <br />
      <Text as="samp" fontSize="larger">
        Position
      </Text>
      :&nbsp;Junior Software Developer
      <br />
      <Text as="samp" fontSize="larger">
        Projects
      </Text>
      : &apos;Online Chess Challenge&apos;
      <br />
      <Text as="samp" fontSize="larger">
        Game Platform
      </Text>
      : &apos;Chess with Knarik&apos;
      <br />
      <Text as="samp" fontSize="larger">
        Tasks:
      </Text>
      &nbsp;
      <br />
      &nbsp;- make a video stream between players during the challenge, embed it in an existing project,
      <br />
      &nbsp;- make a permissions toggle button for each user to allow or deny access to call the stream
      <br />
      &nbsp;- make a circle-style timer with an expiration indicator,
      <br />
      &nbsp;- the ability to independently close the stream, as well as mute the sound or video during the stream
      without disconnecting from the stream
      <br />- perform mathematical counting of chess pieces with an animated view of the caught pieces
      <br />
      <Text as="samp" fontSize="larger">
        Languages:
      </Text>
      &nbsp;JavaScript
      <br />
      <Text as="samp" fontSize="larger">
        Technologies:
      </Text>
      &nbsp;React hooks, Socket.io, Redis, MySQL Workbench 8.0, Chakra UI, Simple-peer.
      <br />
      <Text as="samp" fontSize="larger">
        Responsibilities:
      </Text>
      &nbsp;Fixing any bugs and some Develop Task (CRUD, Filter, Sort, Create a new components, functions and custom
      hooks).
    </Text>
  )
}

export default Sico

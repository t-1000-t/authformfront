import React from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

const About = ({ newData }) => {
  const { email, linked, lang, local } = newData.info
  // const [objAbout, setObjAbout] = useState({})
  //
  // useEffect(() => {
  //   setObjAbout({
  //     email,
  //     linked,
  //     lang,
  //     local,
  //   })
  // }, [email, linked, lang, local])
  //
  // console.log('objAbout', objAbout)

  return (
    <Flex mb="20px" justifyContent="space-around" alignItems="flex-start">
      {/* Left Column - Text */}
      <Box>
        <Text mb="5px">
          <Text as="span" textDecoration="underline">
            Email
          </Text>
          :&nbsp;{email}
        </Text>
        <Text mb="5px">
          <Text as="span" textDecoration="underline">
            LinkedIn
          </Text>
          :&nbsp;{linked}
        </Text>
        <Text mb="5px">
          <Text as="span" textDecoration="underline">
            Location
          </Text>
          :&nbsp;{local}
        </Text>

        <Heading as="h3" fontWeight="bold" fontSize="18px" my="15px">
          Languages:
        </Heading>
        <Text>{lang}</Text>
      </Box>

      {/* Right Column - Image */}
      <Box>
        <Image
          src="/images/I_19.jpg"
          alt="Vlad"
          maxWidth="280px"
          height="auto"
          border="1px solid"
          borderColor="gray.200"
        />
      </Box>
    </Flex>
  )
}

export default About

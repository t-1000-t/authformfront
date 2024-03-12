import { Box, Image, Flex, Text } from '@chakra-ui/react'
import Page from 'components/Page'

export default function SuccessDefault() {
  return (
    <Page>
      <Flex bg="white" minH="75vh" justify="center" align="center">
        <Box>
          <Image h={{ base: 48, md: 64 }} src="/images/mail_sent.svg" />
          <Text mt={4}>Your message has been received. Thank you. </Text>
        </Box>
      </Flex>
    </Page>
  )
}

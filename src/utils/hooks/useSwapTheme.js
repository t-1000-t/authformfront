import { useColorMode } from '@chakra-ui/react'

const useSwapTheme = () => {
  const { colorMode, toggleColorMode, setColorMode } = useColorMode()
  return {
    theme: colorMode === 'light' ? 'dark' : 'light',
    isDark: colorMode === 'dark',
    toggleTheme: toggleColorMode, // swap modes
    setTheme: setColorMode, // setTheme('light' | 'dark')
  }
}

export default useSwapTheme

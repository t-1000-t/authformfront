import { IconButton, Tooltip } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import useSwapTheme from './hooks/useSwapTheme'

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useSwapTheme()
  const label = theme === 'dark' ? 'Switch to light' : 'Switch to dark'

  return (
    <Tooltip label={label} hasArrow>
      <IconButton
        aria-label={label}
        onClick={toggleTheme}
        icon={theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        variant="ghost"
        size="sm"
      />
    </Tooltip>
  )
}

export default ThemeToggleButton

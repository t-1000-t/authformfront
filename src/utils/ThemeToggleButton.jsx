import React from 'react'
import { IconButton, Tooltip } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ThemeToggleButton = ({ theme, toggleTheme }) => {
  const label = theme === 'dark' ? 'Switch to light' : 'Switch to dark'

  return (
    <Tooltip label={label} hasArrow>
      <IconButton
        aria-label={label}
        onClick={toggleTheme}
        icon={theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        variant="ghost"
        size="sm"
        background={theme === 'dark' ? 'teal.200' : 'teal.500'}
      />
    </Tooltip>
  )
}

export default ThemeToggleButton

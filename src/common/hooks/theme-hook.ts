import { ThemeContext } from '../../providers/theme-provider/theme-provider.tsx'
import React from 'react'

export const useTheme = () => React.useContext(ThemeContext)

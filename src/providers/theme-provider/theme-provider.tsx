import { Context, createContext, ReactNode, useEffect } from 'react'
import { useLocalStorage } from 'primereact/hooks'

export interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const [theme, setTheme] = useLocalStorage('light', 'theme')

    useEffect(() => {
        // If a theme is set, save it to localStorage and apply the theme
        if (theme) {
            const existingLink: HTMLLinkElement | null = document.getElementById('theme-link') as HTMLLinkElement
            if (existingLink) {
                existingLink.href =
                    theme === 'dark' ? '/themes/lara-dark-cyan/theme.css' : '/themes/lara-light-cyan/theme.css'
            } else {
                const link = document.createElement('link')
                link.id = 'theme-link'
                link.rel = 'stylesheet'
                link.href = theme === 'dark' ? '/themes/lara-dark-cyan/theme.css' : '/themes/lara-light-cyan/theme.css'

                document.head.appendChild(link)
            }
        }
    }, [theme])

    const changeTheme = () => {
        console.log('changing theme')
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    const getTheme = () => theme

    return <ThemeContext.Provider value={{ changeTheme, getTheme }}>{props.children}</ThemeContext.Provider>
}

export interface _ThemeContext {
    changeTheme: () => void
    getTheme: () => string
}

const defaultBehavior: _ThemeContext = {
    changeTheme: () => {},
    getTheme: () => 'light',
}

export const ThemeContext: Context<_ThemeContext> = createContext<_ThemeContext>(defaultBehavior)

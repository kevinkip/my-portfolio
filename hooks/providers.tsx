"use client"

import { ThemeProvider } from 'next-themes'

const Providers = ({ children }: any) => {
    return <ThemeProvider defaultTheme='light' attribute='class'>{children}</ThemeProvider>
}

export default Providers
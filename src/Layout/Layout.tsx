import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lato',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});


const Layout = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default Layout
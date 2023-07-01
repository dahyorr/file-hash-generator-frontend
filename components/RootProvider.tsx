import React, { PropsWithChildren, useEffect, useMemo } from 'react'
import { useAppSelector } from 'hooks';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeFactory } from 'helpers/theme';
import { ThemeMode } from 'types';
import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';

const RootProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const themeMode = useAppSelector((state) => state.theme.mode) as ThemeMode
  const theme = useMemo(() => createTheme(themeFactory(themeMode)), [themeMode])

  useEffect(() => { // store theme on change
    localStorage.setItem('themeMode', themeMode)
  }, [themeMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default RootProvider
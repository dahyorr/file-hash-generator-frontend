import React, {useEffect, useMemo} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/system/Box'
import localforage from 'localforage';
import Header from '@/components/Header';
import SideBarNav from '@/components/SideBarNav';
import Home from '@/pages/Home';
import { themeFactory } from '@/helpers/theme';
import { ThemeMode } from '@/types';
import { useAppSelector } from '@/hooks';
import Toolbar from '@mui/material/Toolbar';
import Test from './pages/Test';

const App: React.FC = () => {

  const themeMode = useAppSelector((state) => state.theme.mode) as ThemeMode
  const theme = useMemo(() => createTheme(themeFactory(themeMode)), [themeMode])
  
  useEffect(() => { // store theme on change
    localforage.setItem('themeMode', themeMode)
  }, [themeMode])

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Box sx={{
        bgcolor: 'background.paper',
        height: '100vh',
        }}>
        <Header/>

        <Box sx={{display: 'flex', height: '100%'}}>
          <SideBarNav/>
          <Box component="main" sx={{ 
              flexGrow: 1, 
              p: 1.5, 
            }}> {/*ViewPort */}
            <Toolbar/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/test' element={<Test/>}/>
              </Routes>

          </Box>
        </Box>
      </Box>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

import 'styles/index.scss'
import type { AppProps } from 'next/app'
import React from 'react';
import Box from '@mui/system/Box'
import Header from '@/components/Header';
import SideBarNav from '@/components/SideBarNav';
import Toolbar from '@mui/material/Toolbar';
import MainSpinner from 'components/loaders/MainSpinner';
import RootProvider from 'components/RootProvider';
import { Provider as StoreProvider } from 'react-redux'
import { store } from 'helpers/store';
import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import pathConfig from '@/utils/pathConfig';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from 'helpers/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}
export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  const router = useRouter()
  const pageConfig = pathConfig.find(p => p.path === router.pathname)
  console.log(pageConfig, router.pathname)
  const ContainerComponent = pageConfig?.disableContainer ? React.Fragment : Container
  const containerProps = {
    sx: {
      height: '100%'
    }
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>DevUtils</title>
      </Head>
      <StoreProvider store={store}>
        <RootProvider>
          <Header />
          <Box sx={{ display: 'flex' }}>
            <SideBarNav />
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              height: '100vh'
            }}>
              <Toolbar />
              <Box sx={{ flexGrow: 1 }}>

                <ContainerComponent maxWidth='xl' {...containerProps}>
                  <Component {...pageProps} />
                </ContainerComponent>
              </Box>
            </Box>
          </Box>

          <MainSpinner />
        </RootProvider>
      </StoreProvider>
    </CacheProvider>
  )
}

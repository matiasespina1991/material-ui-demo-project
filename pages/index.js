import Head from 'next/head'
import Header from '../components/Header'
import HeaderAsIs from '../components/HeaderAsIs'
import DemoMainBody from '../components/DemoMainBody'
import DemoFooter from '../components/DemoFooter'
import ButtonGroups from '../components/muicomponents/ButtonGroups'

import { createTheme, ThemeProvider } from '@mui/material/styles';

import styles from '../styles/Home.module.css'


export default function Home() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#212121',
      },
      secondary: {
        main: '#c5cae9',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        {/* Header */}
        <Header />
        {/* <HeaderAsIs /> */}
        
        {/* Body */}
        <DemoMainBody />

        <ButtonGroups />

        
        {/* Footer */}
        <DemoFooter />
        
      </div>
    </ThemeProvider>
  )
}

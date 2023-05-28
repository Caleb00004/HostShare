import '../styles/globals.css'
import { MapsContextProvider } from '../context/googleMapsContext'
import { AppContextProvider } from '../context/appContext'

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <MapsContextProvider >
        <Component {...pageProps} />
      </MapsContextProvider>
    </AppContextProvider>
  )
}

export default MyApp

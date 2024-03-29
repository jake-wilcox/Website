import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/prism-dracula.css'

export default function App({ Component, pageProps }: AppProps) {
    return (<>
        <Component {...pageProps} />
        <ToastContainer />
    </>

    )
}

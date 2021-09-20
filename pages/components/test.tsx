import type { AppProps } from 'next/app'

import '../styles.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
        <Component {...pageProps} />
        <h1>simple</h1>
        <div>max</div>
</>
    )
}

import '@assets/main.css'
import '@assets/chrome-bug.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { Head } from '@components/common'

const Noop: FC = ({ children }) => <>{children}</>

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ThemeProvider enableColorScheme={false} attribute="class">
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp

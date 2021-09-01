import { FC } from 'react'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from '@config/seo.json'

const Head: FC = () => {
  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link id="favicon" rel="icon" href="/favicon/dark/favicon.ico" />
        <link
          id="icon"
          rel="icon"
          href="/favicon/dark/icon.svg"
          type="image/svg+xml"
        />
        <link
          id="apple-touch"
          rel="apple-touch-icon"
          href="/favicon/dark/apple-touch-icon.png"
        />
        <link
          id="manifest"
          rel="manifest"
          href="/favicon/dark/manifest.webmanifest"
        />
      </NextHead>
    </>
  )
}

export default Head

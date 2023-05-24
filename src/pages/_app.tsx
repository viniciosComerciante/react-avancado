import type { AppProps } from 'next/app'
import StyledComponentsRegistry from '../styled-components/lib/registry'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <Component {...pageProps} />
    </StyledComponentsRegistry>
  )
}

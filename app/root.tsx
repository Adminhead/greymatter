import { withEmotionCache } from "@emotion/react"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
// import type { LinksFunction } from "@remix-run/node"
import { ThemeProvider } from "next-themes"
import { ChakraProvider } from "@/components/chakra-provider"
import { withSentry } from "@sentry/remix"
// import "./tailwind.css";


interface LayoutProps extends React.PropsWithChildren {}

export const Layout = withEmotionCache((props: LayoutProps, cache: any) => {
  const { children } = props

  return (
    <html lang="en">
      <head suppressHydrationWarning>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <meta
          name="emotion-insertion-point"
          content="emotion-insertion-point"
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
})

function App() {
  return (
    <ChakraProvider>
      <ThemeProvider disableTransitionOnChange attribute="class">
        <Outlet />
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default withSentry(App)

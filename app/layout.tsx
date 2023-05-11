/* eslint-disable @next/next/no-head-element */
import("../styles/globals.css").then(result => result.default)
import("../styles/custom.css").then(result => result.default)
import("../config/metadata").then(result => result.metadata)


import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"



interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <title>{`${siteConfig.name} | DXVIL`}</title>
          <meta name="description" content="There is description"/>
          <meta name="theme-color" content="#030711"></meta>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="icon/png" href="/images/icons-192.png" />
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
          suppressHydrationWarning={true}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

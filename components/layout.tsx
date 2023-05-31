import { SiteHeader } from "@/components/site-header"
import { Toaster } from "./ui/toaster"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
    </>
  )
}

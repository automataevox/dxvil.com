import { siteConfig } from "@/config/site";

import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    icons: {
      icon: "/favicon.ico"
    },
  }
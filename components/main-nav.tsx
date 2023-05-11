'use client'

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [gitData, setGitData] = React.useState<undefined | any>(undefined)

  if(!gitData) {
    fetch(`https://api.github.com/repos/suishounohibiki/dxvil.com/commits`).then(async res => {
      setGitData(await res.json())
    }).catch(e => console.log(e));
  }

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <TooltipProvider>
            <Tooltip >
                <TooltipTrigger asChild>
                  <span className="inline-block font-bold">{siteConfig.name}</span>
                </TooltipTrigger> 
                <TooltipContent>
                    <p className="capitalize">build <span className="font-mono lowercase">{gitData !== undefined ? gitData[0]?.sha.slice(0, 7) : "unknown"}</span></p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-semibold text-muted-foreground sm:text-sm",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}

import * as React from "react"
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

interface MainNavProps {
  items?: NavItem[]
  gitData: any
}

export function MainNav({ items, gitData }: MainNavProps) {


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
                    "text-muted-foreground flex items-center text-sm font-semibold sm:text-sm",
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

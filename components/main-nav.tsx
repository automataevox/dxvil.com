import * as React from "react"
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

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
      
      <NavigationMenu>
        <NavigationMenuList>
          <div className="flex gap-6">
            {
              items?.map((item) => {
                if(!item.paging) {
                  return(
                    <NavigationMenuItem key={item.href} className={cn(
                      "text-muted-foreground flex items-center text-sm font-semibold sm:text-sm",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}>
                      <Link
                        key={item.href}
                        href={item.href ? item.href : ''}
                        
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuItem>
                  )
                }  
              })
            }
          </div>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-muted-foreground">
              {items?.map(item => {
                if(item.paging){
                  return (item.title)
                }
              })}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[15rem] gap-3 p-4 md:w-[15rem] md:grid-cols-1 lg:w-[20rem] ">
                {items?.map((item) => {
                  if (item.paging) {
                    return item.paging.map((page) => (
                      <ListItem
                        key={page?.title}
                        title={page?.title}
                        href={page?.href}
                      >
                        {page?.description}
                      </ListItem>
                    ));
                  }
                  return null;
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> 
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
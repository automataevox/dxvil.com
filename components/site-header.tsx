'use client'
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import React from "react"
import { useToast } from "./ui/use-toast"
import { Toaster } from "./ui/toaster"



export function SiteHeader() {
  const { toast } = useToast()
  const [gitCommits, setGitCommits] = React.useState<undefined | any>(undefined)
  const [processedCommits, setProcessedCommits] = React.useState(false)
  React.useEffect(() => {
    if (!gitCommits) {
      fetch(`https://api.github.com/repos/suishounohibiki/dxvil.com/commits`).then(async res => {
        setGitCommits(await res.json())
      })
    }
  })

  React.useEffect(() => {
    if (gitCommits && !processedCommits) {
      console.log("run")
      const latestCommit = gitCommits[0].sha
      const storedCommit = localStorage.getItem('latestCommit')

      if (latestCommit !== storedCommit) {
        localStorage.setItem('latestCommit', latestCommit)
        localStorage.setItem('newCommit', 'yes')
        toast({
          title: "New updates!",
          description: "Check out the lastest updates in announcements!",
        })
      } else {
        localStorage.setItem('newCommit', 'no')
      }
      setProcessedCommits(true)
    }
  }, [gitCommits, processedCommits, toast])

  var oldCD: any;

  return (

    <header className="bg-background sticky top-0 z-40 w-full border-b">

      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} gitData={gitCommits} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant={"ghost"} size={"sm"} onClick={() => {
                  localStorage.setItem("newCommit", "no")
                }}>
                  <Icons.announceDot className="h-5 w-5" />
                  <span className="sr-only">Changelog</span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Changelog</AlertDialogTitle>
                  <AlertDialogDescription className="max-h-[88vh] overflow-auto text-left capitalize">
                    {gitCommits?.map(({ commit }: any) => {
                      const c = commit;

                      if (new Date(c.committer.date).toDateString() !== oldCD) {
                        oldCD = new Date(c.committer.date).toDateString();
                        return (
                          <>
                            <span className="text-md block font-bold">{new Date(c.committer.date).toDateString()}</span>
                            <span>- {c?.message}</span>
                          </>
                        )
                      } else {
                        oldCD = new Date(c.committer.date).toDateString();
                        return (
                          <span className="block">- {c?.message}</span>
                        )
                      }

                    })
                    }

                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Ok</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Link
              href={siteConfig.profile.links.github.url}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Toaster />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

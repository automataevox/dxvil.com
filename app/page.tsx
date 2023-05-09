'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"

{/* <span className="bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent ">NodeJS. </span>
<span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent ">HTML. </span>
<span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent ">CSS </span> */}
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import React from "react"
 
const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export default function IndexPage() {
  return (
      <section className="container grid items-center gap-48 pb-8 pt-6 md:py-10">
        {/* ---=== HEADING ===--- */}
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">Developer.</span><br className="hidden sm:inline" />
            Its more than passion.
          </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Coded with ❤️ and built with 👻 bringing in next-gen UI where every line of code meets innovation and creativity.
            </p>
        </div>

        {/* ---=== LANGUAGES PT.1 ===--- */}
        <div className="flex max-w-[100%] flex-col items-end gap-2">
        
          <h1 className="text-right text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-blue-500  to-indigo-600 bg-clip-text text-transparent"> TypeScript. </span>
          

            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> JavaScript. </span>
            <br className="hidden sm:inline" />

          Not just a language.
          </h1>
        <p className="max-w-[700px] text-right text-lg text-muted-foreground sm:text-xl">
        The pure ❤️ of 
        <span className="bg-gradient-to-r from-blue-500  to-indigo-600 bg-clip-text font-bold text-transparent"> front-end</span> and 
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text font-bold text-transparent"> back-end </span>
        in an endless loop of capabilities of creativity.
        </p>
        </div>

        {/* ---=== PROJECTS ===--- */}
        <div className="flex max-w-[100%] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent">Projects. </span>
            <br className="hidden sm:inline" />
            I have been working on.
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Projects where expectations meets reality.
          </p>
          <div>
            <Card>
              <div className="h-[236px] w-[420px]">
                <Image src="/cyberpunk1.jpg" width={420} height={200} alt="cyberpunk" className="rounded-t-lg"/>
              </div>
              <Separator />
              <CardDescription className="flex items-center justify-between p-4">
                  dxvil.com
                  <Button>Visit</Button>
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>
  )
}

'use client'
{/* <span className="bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent ">NodeJS. </span>
<span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent ">HTML. </span>
<span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent ">CSS </span> */}
import React from "react"
import HeadingTitle from "../components/headingTitle"
import LanguagesTitle from "../components/languagesTitle"
import ProjectsTitle from "../components/projectsTitle"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

export default function IndexPage() {
  const { toast } = useToast()


  return (
      <section className="container grid items-center gap-24 pb-8 pt-6 sm:gap-48 md:py-10">
        {/* ---=== HEADING ===--- */}
        <HeadingTitle />

        {/* ---=== LANGUAGES PT.1 ===--- */}
        <LanguagesTitle />

        {/* ---=== PROJECTS ===--- */}
        <ProjectsTitle />
      </section>
  )
}

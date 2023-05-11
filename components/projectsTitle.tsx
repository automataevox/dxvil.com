import { siteConfig } from "@/config/site"
import ProjectTile from "./projectTile"

export default function ProjectsTitle() {
    return(
      <div className="flex max-w-[100%] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        <span className="bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent">Projects. </span>
          <br className="inline" />
          I have been working on.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Projects where imagination meets reality.
        </p>

        <div className="flex flex-row flex-wrap gap-5">
        {
          siteConfig.projects.map(p => {
              console.log()
              return(
              <ProjectTile
                  key={p.name}
                  imageSrc={p.img_src}
                  alt={p.img_alt}
                  projectName={p.name}
                  visitUrl={p.url}
              />
              )
          })
          }
        </div>
      </div>
    )
}
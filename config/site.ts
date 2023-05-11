export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: ".DEV",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Profile",
      href: "/profile",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ],
 
  profile: {
    info: {
      name: "Jaroslav Maša",
      description: "Frontend developer, musician and entrepreneur.",
      skills: [
        "JavaScript", "TypeScript", "PHP", "HTML", "Java", "CSS", "Redux", "React", "Node.js", "ExpressJS", "Docker"
      ],
    },
    alert: {
      description: 'After some time there is whole new page for me. So if you are interested in work with me, just contact me though this webpage!'
    },
    discordUserId: "681885446455689216",
    links: {
      github: {
        name: "Github",
        username: "suishounohibiki",
        url: "https://github.com/suishounohibiki"
      },
      instagram: {
        name: "Instagram",
        username: "@dxvilmusic",
        url: "https://instagram.com/dxvilmusic"
      },
      discord: {
        name: "Discord",
        username: "DXVIL デビル#6666",
        url: "https://discord.com/users/681885446455689216"
      },
      spotify: {
        name: "Spotify",
        username: "DXVIL",
        url: ""
      },
      steam: {
        name: "Steam",
        username: "DXVIL デビル",
        url: "https://steamcommunity.com/id/blkkdout/"
      },
      twitter: {
        name: "Twitter",
        username: "@dxvil_music",
        url: "https://twitter.com/dxvil_music"
      }
    },
  },
  projects: [
    {
      img_src: "/assets/images/dark_dev.dxvil.com.png",
      img_alt: "Cyberpunk",
      name: "dxvil",
      url: "https://dev.dxvil.com/"
    },
  ],
  discord: {
    discord_status: [
      {
        name: "online",
        value: "bg-green-500"
      },
      {
        name: "offline",
        value: "border-2 border border-gray-500"
      },
      {
        name: "idle",
        value: "bg-yellow-500"
      },
      {
        name: "dnd",
        value: "bg-red-500"
      }
    ]
  }
}


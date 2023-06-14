'use client'

import { siteConfig } from "@/config/site"
import MusicTile from "./musicTile"
import { Key, useState } from "react"
import { getTopTracks } from "@/app/spotify"

interface SpotifyData {
  items: any
}

export default function MusicTitle() {
  
  const [spotifyData, setSpotifyData] = useState<SpotifyData>()
    if(!spotifyData){
      getTopTracks().then((tracks) => setSpotifyData(tracks))
    }
    return(
      <div className="flex max-w-[100%] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        <span className="bg-gradient-to-r from-red-700 to-red-600 bg-clip-text text-transparent">Music. </span>
          <br className="inline" />
          I released on <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Spotify.</span>
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Projects where imagination meets reality.
        </p>

        <div className="flex flex-row flex-wrap gap-5 justify-center md:justify-normal">
        {
          spotifyData?.items?.map((song :any) => {
              return(
                <MusicTile
                  key={song.name}
                  imageSrc={song.images[1].url}
                  alt={song.name}
                  artistName={song.artists.map((a: { name: any }) => a.name)}
                  releaseName={song.name}
                  streamUrl={song.external_urls.spotify}
                />
              )
          }) 
          }
        </div>
      </div>
    )
}
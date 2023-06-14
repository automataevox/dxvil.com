'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "../../music.dxvil.com/components/ui/skeleton";

interface ProjectTileProps {
  releaseName:string
  imageSrc:string
  alt:string
  artistName: any
  streamUrl:string
}

export default function MusicTile({
  releaseName,
  imageSrc,
  alt,
  artistName,
  streamUrl
}: ProjectTileProps) {
  return(
      <Card className="max-w-[300px]">
        <div>
          <Image src={imageSrc} width={300} height={300} alt={alt} className="rounded-t-lg" draggable="false" />
        </div>
        <Separator />
        <CardContent className="font-boldS flex items-center justify-between p-4 overflow-hidden whitespace-nowrap">
          <p className="overflow-hidden text-ellipsis">{artistName.join(', ')} - {releaseName}</p>
          <Button onClick={() => window.open(streamUrl)}>Listen</Button>
        </CardContent>
      </Card>
    )
}

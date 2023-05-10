'use client'

import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface projectTileProps {
    imageSrc: string;
    alt: string;
    projectName: string;
    visitUrl: string;
}

export default function ProjectTile({imageSrc, alt, projectName, visitUrl} : projectTileProps){
    return(
        <Card>
            <div>
                <Image src={imageSrc} width={420} height={200} alt={alt} className="rounded-t-lg"/>
            </div>
            <Separator />
            <CardDescription className="font-boldS flex items-center justify-between p-4">
                {projectName}
                <div className="flex gap-2">
                    <Button>More info</Button>
                    <Button onClick={() => window.open(visitUrl)}>Visit</Button>
                </div>
            </CardDescription>
        </Card>
    )
}
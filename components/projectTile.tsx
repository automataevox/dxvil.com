'use client'

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { metadata } from "../config/metadata";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

interface ProjectTileProps {
  imageSrc: string;
  alt: string;
  projectName: string;
  visitUrl: string;
}

export default function ProjectTile({
  imageSrc,
  alt,
  projectName,
  visitUrl,
}: ProjectTileProps) {

  const router = useRouter();

  const handleMoreInfoClick = () => {
    router.push(`/projects/${projectName}`);
  };

  return (
    <Card>
      <div>
        <Image src={imageSrc} width={420} height={200} alt={alt} className="rounded-t-lg"/>
      </div>
      <Separator />
      <CardContent className="font-boldS flex items-center justify-between p-4">
        <p>{projectName}</p>
        <div className="flex gap-2">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button>Show more</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Coming soon...</AlertDialogTitle>
                        <AlertDialogDescription>
                            We are sorry but this function is still under development and we will release it as soon as possible. 
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Okey</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            {/*<Button onClick={handleMoreInfoClick}>More info</Button>*/}
            <Button onClick={() => window.open(visitUrl)}>Visit</Button>
        </div>
      </CardContent>
    </Card>
  );
}

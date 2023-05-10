import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { metadata } from "./metadata";

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
          <Button onClick={handleMoreInfoClick}>More info</Button>
          <Button onClick={() => window.open(visitUrl)}>Visit</Button>
        </div>
      </CardContent>
    </Card>
  );
}

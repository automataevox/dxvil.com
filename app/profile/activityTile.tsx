import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect } from "react";


interface ActivityTileProps {
  isLoading: boolean;
  discordData: any;
  setDiscordData: any;
  setIsLoading: any;
}

export default function ActivityTile({isLoading, discordData, setDiscordData, setIsLoading}: ActivityTileProps) {
  useEffect(() => {
    if(!discordData){
      fetch(`https://api.lanyard.rest/v1/users/${siteConfig.profile.discordUserId}`).then(async res => {
        await setDiscordData(await res.json())
        res ? setIsLoading(false) : setIsLoading(true)
    
      })
    }  
  })
  return (
    <Card className="pt-6">
      <CardContent className="flex flex-wrap gap-5">
        {
            isLoading ? 
            <>
                <Skeleton className="h-16 w-16 rounded-md" />
                <div className="space-y-2">
                    <Skeleton className="h-7 w-[200px]" />
                    <Skeleton className="h-7 w-[250px]" />
                </div>
            </>
            :
            discordData.data?.activities.length !== 0 ?
            discordData.data?.activities.map((activity: {
              session_id: any;
              application_id: any;
              assets: {
                large_image: any;
                large_text: string;
              };
              name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
              details: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
            }) => {
              return(
                <div key={activity.application_id} className="flex gap-5">
                  <Image src={activity.assets.large_image.startsWith('mp:external/') ? `https://${activity.assets.large_image.slice(62)}` : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}`} alt={activity.assets.large_text} width={250} height={250} className="h-16 w-16 rounded-md"/>
                  <div className="flex flex-col justify-center overflow-hidden whitespace-nowrap">
                    <p className="sm:text-md overflow-hidden text-ellipsis text-sm font-bold">{activity.name}</p>
                    <p className="sm:text-md overflow-hidden text-ellipsis text-sm text-muted-foreground">{activity.details}</p>
                  </div>
                </div>

              )
            })          
            :
            <>
              <Image src={`https://media.tenor.com/dky9QWq39XAAAAAi/yes-happy.gif`} alt={`Z z z`} width={250} height={250} className="h-16 w-16 rounded-md" />
                <div className="flex flex-col justify-center">
                  <p className="text-md font-bold">Nothing to show here...</p>
                  <p className="text-md text-muted-foreground">I am doing nothing probably</p>
                </div>
            </>
        }
      </CardContent>
    </Card>
  );
}

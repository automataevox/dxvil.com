import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton";
import { siteConfig } from "@/config/site";
import Image from "next/image";

interface ActivityTileProps {
  isLoading: boolean;
  discordData: any;
  setDiscordData?: any;
  setIsLoading?: any;
}

export function fetchData({setIsLoading, setDiscordData}: ActivityTileProps){
  fetch(`https://api.lanyard.rest/v1/users/${siteConfig.profile.discordUserId}`).then(async res => {
    await setDiscordData(await res.json())
    res ? setIsLoading(false) : setIsLoading(true)

  })
}

export default function ActivityTile({isLoading, discordData}: ActivityTileProps) {
  return (
    <>
    
      <h1 className="my-2 scroll-m-20 text-2xl font-semibold tracking-tight">Current activity <span className="text-sm text-gray-400">(according to discord)</span></h1>
      <Card className="pt-6">
        <CardContent className="flex flex-wrap gap-14">
          {
              isLoading ? 
              <div className="flex flex-1 gap-5">
                  <Skeleton className="h-16 w-16 rounded-md" />
                  <div className="space-y-2">
                      <Skeleton className="h-7 w-[100px] sm:w-[200px]" />
                      <Skeleton className="h-7 w-[150px] sm:w-[250px]" />
                  </div>
              </div>
              :
              discordData.data?.activities.length !== 0 ?
              discordData.data?.activities.map((activity: {
                state: string | undefined;
                session_id: string | number;
                application_id: string | number;
                assets: {
                  large_image: any;
                  large_text: string;
                };
                name: string;
                details: string | undefined;
              }) => {
                return(
                  <div key={activity?.application_id} className="flex max-w-[250px] md:max-w-xs flex-1 gap-5">
                    <Image 
                      src={activity?.assets?.large_image.startsWith('mp:external/') ?
                      `https://${activity?.assets?.large_image.slice(62)}` 
                      : activity?.assets?.large_image.startsWith('spotify:') ?
                        `https://i.scdn.co/image/${activity?.assets?.large_image.slice(8)}`
                        : activity?.assets?.large_image == undefined ?
                        `/fallback_activity.jpg` 
                        : `https://cdn.discordapp.com/app-assets/${activity?.application_id}/${activity?.assets?.large_image}`}
                      alt={activity?.assets?.large_text} width={250} height={250} className="h-16 w-16 rounded-md"/>
                    <div className="flex flex-col justify-center overflow-hidden whitespace-nowrap">
                      <p className="sm:text-md overflow-hidden text-ellipsis text-sm font-bold">{activity?.name}</p>
                      <p className="sm:text-md overflow-hidden text-ellipsis text-sm text-muted-foreground">{activity?.details}</p>
                      <p className="sm:text-md overflow-hidden text-ellipsis text-sm text-muted-foreground">{activity?.state}</p>
                    </div>
                  </div>

                )
              })          
              :
              <div className="flex max-w-xs flex-1 gap-5">
                <Image src={`https://media.tenor.com/dky9QWq39XAAAAAi/yes-happy.gif`} alt={`nothing...`} width={250} height={250} className="h-16 w-16 rounded-md" />
                  <div className="flex flex-col justify-center overflow-hidden whitespace-nowrap">
                    <p className="text-md overflow-hidden text-ellipsis font-bold">Nothing to show here...</p>
                    <p className="text-md overflow-hidden text-ellipsis text-muted-foreground">I am doing nothing probably</p>
                  </div>
              </div>
          }
        </CardContent>
      </Card>
    </>
  );
}

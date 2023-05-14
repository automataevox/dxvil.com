import { siteConfig } from "@/config/site"
import { Badge } from "./ui/badge"
import { CardDescription, CardTitle } from "./ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

interface ProfileInfoProps {
    discordData: any;
}

export default function ProfileInfo({discordData}:ProfileInfoProps){

    const ACTIVE_DEVICES = [
        {name: "Desktop", value: discordData?.data?.active_on_discord_desktop},
        {name: "Mobile", value: discordData?.data?.active_on_discord_mobile},
        {name: "Web", value: discordData?.data?.active_on_discord_web}
    ]

    const DEVICE_ACTIVE_COLORS = [
        { name: "online", value: "bg-green-500" },
        { name: "offline", value: "border-2 border border-gray-500" },
        { name: "idle", value: "bg-yellow-500" },
        { name: "dnd", value: "bg-red-500" }
      ]

    return(
        <div className="grid justify-items-center gap-2 sm:justify-items-start">
            <div className="flex items-center gap-2">
                <CardTitle className="mb-[-5px] text-xl">{siteConfig.profile.info?.name}</CardTitle>
                <TooltipProvider>
                    <Tooltip >
                        <TooltipTrigger asChild>
                            <div className={`mt-1 h-2 w-2 rounded-full ${DEVICE_ACTIVE_COLORS?.find(status => status.name === discordData?.data.discord_status)?.value}`} />
                        </TooltipTrigger> 
                        <TooltipContent>
                            <p className="capitalize">{discordData?.data?.discord_status} ({ACTIVE_DEVICES.filter(device => device.value === true).map(dev => dev.name).join(", ")})</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <CardDescription className="text-center sm:text-left">
                {siteConfig.profile.info?.description}
            </CardDescription>
            <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                {siteConfig?.profile?.info?.skills?.sort((a:string, b:string) => a.localeCompare(b)).map((skill:string) => {
                    return(
                        <Badge key={skill} variant={"secondary"}>{skill}</Badge>
                    )
                })}
            </div>
        </div>
    )
}
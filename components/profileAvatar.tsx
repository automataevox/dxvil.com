import { siteConfig } from "@/config/site"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Skeleton } from "./ui/skeleton"

interface ProfileAvatarProps {
    isLoading:boolean
    discordData:any
}

export default function ProfileAvatar({isLoading, discordData}:ProfileAvatarProps) {
    return(
        !isLoading ?
        <div>
            <Avatar className="h-24 w-24">
                <AvatarImage src={`https://cdn.discordapp.com/avatars/${siteConfig.profile?.discordUserId}/${discordData?.data?.discord_user?.avatar}`} alt="discord_avatar" />
            </Avatar>
        </div>
        :
        <div>
            <Skeleton className="h-24 w-24 rounded-full" />
        </div>
    )
}
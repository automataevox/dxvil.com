/* eslint-disable react/no-unescaped-entities */
'use client'
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

import ActivityTile, { fetchData } from '../../components/activityTile';
import { useEffect, useState } from 'react';
import SocialsGrid from "@/components/socialsGrid";
import EmailComponent from "@/components/emailComponent";
import ProfileAvatar from "@/components/profileAvatar";
import ProfileInfo from "@/components/profileInfo";

interface DiscordData {
    data: {
        discord_user: {
            avatar: string
        },
        discord_status: string
        active_on_discord_desktop: boolean
        active_on_discord_mobile: boolean
        active_on_discord_web: boolean
    }
}

export default function ProfilePage() {
    const [isLoading, setIsLoading] = useState(true)
    const [discordData, setDiscordData] = useState<DiscordData | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData({setDiscordData, setIsLoading, discordData, isLoading});
        }, 2000);
        return () => clearInterval(interval);
    });    

    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <Card>
                <CardHeader className="flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-5">
                    <ProfileAvatar isLoading={isLoading} discordData={discordData}/>
                    <ProfileInfo discordData={discordData} />
                </CardHeader>
                <CardContent>
                    <SocialsGrid />
                    <ActivityTile discordData={discordData} isLoading={isLoading}/>
                    <EmailComponent />
                </CardContent>
            </Card>
        </section>
    )
}

/* eslint-disable react/no-unescaped-entities */
'use client'

import { FaDiscord, FaGithubAlt, FaInstagram, FaQuestion, FaSpotify, FaSteamSymbol, FaTwitch, FaTwitter } from 'react-icons/fa';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from "@/components/ui/badge";
 
import { siteConfig } from "@/config/site" 
import ActivityTile, { fetchData } from './activityTile';
import { SocialTile } from './socialTile';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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

    function handleEmailSend(): void{
        const subject = (document.getElementById('subject') as HTMLInputElement)?.value;
        const message = (document.getElementById('message') as HTMLTextAreaElement)?.value;
        let email = "musicbyblakk@gmail.com"
        window.open(`mailto:${email}?subject=${subject}&body=${message}`)
    }

    const DISCORD_STATUSES = [
        {name: "online", value: "bg-green-500"},
        {name: "offline", value: "border-2 border border-gray-500"},
        {name: "idle", value: "bg-yellow-500"},
        {name: "dnd", value: "bg-red-500"}
    ]
    

    const ACTIVE_DEVICES = [
        {name: "Desktop", value: discordData?.data?.active_on_discord_desktop},
        {name: "Mobile", value: discordData?.data?.active_on_discord_mobile},
        {name: "Web", value: discordData?.data?.active_on_discord_web}
    ]

    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <Card>
                <CardHeader className="flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-5">
                    {
                        !isLoading ?
                        <div>
                            <Avatar className="h-24 w-24">
                                <AvatarImage src={`https://cdn.discordapp.com/avatars/${siteConfig.profile.discordUserId}/${discordData?.data?.discord_user?.avatar}`} alt="@suishou" />
                            </Avatar>
                        </div> 
                        :
                        <div>
                            <Skeleton className="h-24 w-24 rounded-full" />
                        </div>
                    }
                    <div className="grid justify-items-center gap-2 sm:justify-items-start">
                        <div className="flex items-center gap-2">
                            <CardTitle className="mb-[-5px] text-xl">Jaroslav Maša</CardTitle>
                            <TooltipProvider>
                                <Tooltip >
                                    <TooltipTrigger asChild>
                                        <div className={`mt-1 h-2 w-2 rounded-full ${DISCORD_STATUSES.find(status => status.name === discordData?.data.discord_status)?.value}`} />
                                    </TooltipTrigger> 
                                    <TooltipContent>
                                        <p className="capitalize">{discordData?.data?.discord_status} ({ACTIVE_DEVICES.filter(device => device.value === true).map(dev => dev.name).join(", ")})</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <CardDescription className="text-center sm:text-left">
                            Frontend developer, musician and entrepreneur.
                        </CardDescription>
                        <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                            {siteConfig.skills.sort((a, b) => a.localeCompare(b)).map((skill) => {
                                return(
                                    <Badge key={skill} variant={"secondary"}>{skill}</Badge>
                                )
                            })}
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <>
                        <h1 className="my-2 scroll-m-20 text-2xl font-semibold tracking-tight">Socials</h1>
                        <div className='xs:grid-rows-6 grid-auto-cols: 1fr grid grid-flow-col grid-rows-6 gap-4 sm:grid-rows-3 md:grid-rows-3 lg:grid-rows-2'>
                        {Object.entries(siteConfig.links).sort((a, b) => a[0].localeCompare(b[0])).map(([key, link]) => {
                            let icon = <FaQuestion size={35}/>;
                    
                            switch (key) {
                                case 'discord':
                                    icon = <FaDiscord size={35} />
                                    break;
                                case 'github':
                                    icon = <FaGithubAlt size={35} />
                                    break;
                                case 'instagram':
                                    icon = <FaInstagram size={35} />
                                    break;
                                case 'spotify':
                                    icon = <FaSpotify size={35} />
                                    break;
                                case 'steam':
                                    icon = <FaSteamSymbol size={35} />
                                    break;
                                case 'twitter':
                                    icon = <FaTwitter size={35} />
                                    break;
                                case 'twitch':
                                    icon = <FaTwitch size={35} />
                                    break;
                                default:
                                    icon = <FaQuestion size={35}/>
                                    break;
                            }

                            return (
                                <SocialTile
                                    key={key}
                                    name={link.name}
                                    username={link.username}
                                    url={link.url}
                                    disabled={link.url == "" ? true : false}
                                    icon={icon}
                                />
                            )
                        })}
                        </div>
                    </>
                    <>
                        <h1 className="my-2 scroll-m-20 text-2xl font-semibold tracking-tight">Current activity <span className="text-sm text-gray-500">(according to discord)</span></h1>
                        <ActivityTile discordData={discordData} isLoading={isLoading}/>
                    </>
                    <div className={"mt-5"}>
                        <h1 className="my-2 scroll-m-20 text-2xl font-semibold tracking-tight">Get in touch</h1>
                        <Card className={"pt-6"}>
                            <CardContent className={"grid gap-5"}>
                                <Input type="text" id="subject" placeholder="Subject" />
                                <Textarea id="message" placeholder="Type your message here." />
                                <Button type="submit" className="w-24" onClick={() => (handleEmailSend())}>Send</Button>
                            </CardContent>
                        </Card>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

'use client'
/* eslint-disable react/no-unescaped-entities */
import { FaDiscord, FaGithubAlt, FaInstagram, FaQuestion, FaSpotify, FaSteamSymbol, FaTwitch, FaTwitter } from 'react-icons/fa';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from "@/components/ui/badge";
 
import { siteConfig } from "@/config/site" 

import { SocialTile } from './socialTile';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function IndexPage() {

    function handleEmailSend(): void{
        const subject = (document.getElementById('subject') as HTMLInputElement)?.value;
        const message = (document.getElementById('message') as HTMLTextAreaElement)?.value;
        let email = "musicbyblakk@gmail.com"
        window.open(`mailto:${email}?subject=${subject}&body=${message}`)
    }
    

    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <Card>
                <CardHeader className="flex-row gap-5">
                    {
                        <Avatar className="h-[100px] w-[100px]">
                            <AvatarImage src="https://cdn.discordapp.com/avatars/681885446455689216/a_1cb9c8369043e20c7866c20c20d17aeb.gif" alt="@suishou" />
                            <AvatarFallback>JM</AvatarFallback>
                        </Avatar>
                    }
                    <div className="grid gap-1">
                        <CardTitle className="text-xl">Jaroslav Maša</CardTitle>
                        <CardDescription>
                            Frontend developer, musician and entrepreneur.
                        </CardDescription>
                        <div className="flex flex-wrap gap-2">
                            {siteConfig.skills.sort((a, b) => a.localeCompare(b)).map((skill) => {
                                return(
                                    <Badge key={skill} variant={"secondary"}>{skill}</Badge>
                                )
                            })}
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
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
                    
                    <div className={"mt-5"}>
                        <h1 className="my-2 scroll-m-20 text-2xl font-semibold tracking-tight">Get in touch</h1>
                        <Card className={"pt-6"}>
                            <CardContent className={"flex flex-col gap-5"}>
                                <div className={"flex flex-row gap-5"}>
                                    {/*<Input type="email" id="email" autoComplete='email' placeholder="Email from..." />*/}
                                    <Input type="text" id="subject" placeholder="Subject" />
                                </div>
                                <Textarea id="message" className="h-40 resize-none" placeholder="Type your message here." />
                                <Button type="submit" className="w-24" onClick={() => (handleEmailSend())}>Send</Button>
                            </CardContent>
                        </Card>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

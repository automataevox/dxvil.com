import { siteConfig } from "@/config/site";
import { useState } from "react";

export default async function DiscordConnect(setIsLoading:any, setDiscordData:any) {
    const discordID = siteConfig.profile.discordUserId
    const WS = new WebSocket('wss://api.lanyard.rest/socket')
    const request = {
        op: 2,
        d: {
            subscribe_to_ids: [discordID]
        }
    }
    
    WS.onopen = () => {
        console.log("WS Connected")
        WS.send(JSON.stringify(request))

    }
    WS.onmessage = function (e) {
        const json = JSON.parse(e?.data)
        if(Object.entries(json.d)[0][1]) {
            try {
                if(json){
                    setIsLoading(false)
                    setDiscordData(Object.entries(json.d)[0][1])
                }
            } catch (err) {
                console.log(err)
            }
        } else {
            try {
                if(json){
                    setIsLoading(false)
                    setDiscordData(json.d)
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

}
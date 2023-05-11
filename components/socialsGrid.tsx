import { SocialTile } from "./socialTile";
import { siteConfig } from "@/config/site";
import { FaDiscord, FaGithubAlt, FaInstagram, FaQuestion, FaSpotify, FaSteamSymbol, FaTwitch, FaTwitter } from 'react-icons/fa';

export default function SocialsGrid(){
    return(
        <>
        <h1 className="my-2 scroll-m-20 text-2xl font-semibold tracking-tight">Socials</h1>
        <div className='xs:grid-rows-6 grid-auto-cols: 1fr grid grid-flow-col grid-rows-6 gap-4 sm:grid-rows-3 md:grid-rows-3 lg:grid-rows-2'>
        {Object.entries(siteConfig?.profile?.links).sort((a, b) => a[0].localeCompare(b[0])).map(([key, link]) => {
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
    )
}
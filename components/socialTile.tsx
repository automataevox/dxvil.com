'use client';
import { SocialLink } from "@/components/ui/socialLink";

interface LinkButtonContent {
    name: string;
    username: string;
    icon?: JSX.Element;
    url: string;
    disabled?: boolean;
}

function SocialTile({name, username, icon, url, disabled}: LinkButtonContent) {
    return(
        <SocialLink variant={"secondary"} disabled={disabled} className="h-[4rem] flex-row gap-4" onClick={() => window.open(url)}>
            {icon}
            <div className='flex flex-col items-start gap-1'>
                <small className="text-sm font-semibold leading-none">{name}</small>
                <p className="text-xs text-muted-foreground">{username}</p>
            </div>
        </SocialLink>
    )
}

export { SocialTile }
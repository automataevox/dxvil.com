import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

function handleEmailSend(): void{
    const subject = (document.getElementById('subject') as HTMLInputElement)?.value;
    const message = (document.getElementById('message') as HTMLTextAreaElement)?.value;
    let email = "musicbyblakk@gmail.com"
    window.open(`mailto:${email}?subject=${subject}&body=${message}`)
}

export default function EmailComponent(){
    return(
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
    )
}
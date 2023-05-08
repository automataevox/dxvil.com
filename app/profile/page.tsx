/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AlertDialog,  AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
 
export default function IndexPage() {
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <Card>
                <CardHeader className="flex-row gap-3">
                    <Avatar className="h-[75px] w-[75px]">
                        <AvatarImage src="https://github.com/suishounohibiki.png" alt="@suishou" />
                        <AvatarFallback>JM</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <CardTitle>Jaroslav Maša</CardTitle>
                        <CardDescription>Frontend developer, musician and entrepreneur. Learning web development since 2016 until today. Javascript, </CardDescription>
                        <div className="flex gap-2">
                            <Badge variant={"secondary"}>JavaScript</Badge>
                            <Badge variant={"secondary"}>TypeScript</Badge>
                            <Badge variant={"secondary"}>HTML</Badge>
                            <Badge variant={"secondary"}>CSS</Badge>
                            <Badge variant={"secondary"}>PHP</Badge>
                            <Badge variant={"secondary"}>React</Badge>
                            <Badge variant={"secondary"}>Next.js</Badge>
                            <Badge variant={"secondary"}>Node.js</Badge>
                            <Badge variant={"secondary"}>Vite</Badge>
                            <Badge variant={"secondary"}>Express</Badge>
                            <Badge variant={"secondary"}>Docker</Badge>
                        </div>
                    </div>
                </CardHeader>

                <AlertDialog>
                    <AlertDialogTrigger asChild className={"m-4 w-[300px]"}>
                        <Button variant="outline">What's new!</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>What's new!</AlertDialogTitle>
                            <AlertDialogDescription>
                                After some time there is whole new page for me. So if you are interested in work with me, just contact me though this webpage!
                                <br/>
                                <br/>
                                Built with:<br/>
                                - <u><b><a href={"https://nextjs.org/"} rel="noreferrer" target={"_blank"}>Next.js</a></b></u><br/>
                                - <u><b><a href={"https://ui.shadcn.com//"} rel="noreferrer" target={"_blank"}>ShadcnUI</a></b></u>
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Okey!</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </Card>
        </section>
    )
}

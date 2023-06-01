'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { siteConfig } from "@/config/site";
import React from "react";

interface componentStructure {
    setting: {
        variation: {
            name: string
            palceholder: string
        } | any
    } | any
}

export default function CGen() {
    const [currentComponent, setCurrentComponent] = React.useState<any | null>(null)
    function findComponent(component: any) {
        return component == currentComponent
    }
    function getComponent(): any {
        return siteConfig.cgen.components.find(findComponent)
    }
    return (
        <section className="container grid h-[40vw] grid-flow-col gap-6 pb-8 pt-6 md:py-10">
            <h2 className="scroll-m-20 pb-2 text-2xl font-semibold first:mt-0">
                <Card className="flex p-2">
                    <Card className="flex max-h-[40rem] w-48 flex-col overflow-auto">
                        {siteConfig.cgen.components.map((component) => {
                            if (currentComponent == undefined) {
                                setCurrentComponent(component)
                            }
                            return (
                                <Button variant={"ghost"} onClick={() => setCurrentComponent(component)}>
                                    {component.name}
                                </Button>
                            )
                        })}
                    </Card>
                    <Card className="border-0">
                        <CardHeader>
                            {currentComponent?.name}
                        </CardHeader>
                        <CardContent>
                            {currentComponent?.settings ? Object.entries(currentComponent?.settings).map((setting):any => {
                                /*setting[1]?.variation.map((value:any) =>{
                                    //console.log(value)
                                    return(
                                        <Input id={value.name} key={value.name} type="text" placeholder={value.placeholder}>
                                            
                                        </Input>
                                    )
                                })*/
                            })
                            : <p>No input...</p>}
                        </CardContent>
                    </Card>
                </Card>
            </h2>
        </section>
    )
}
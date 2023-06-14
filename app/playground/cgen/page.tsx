'use client'
import ComponentRenderer from "@/components/componentRenderer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import React from "react";

export default function CGen() {
    const [currentComponent, setCurrentComponent] = React.useState<any | null>(null)
    const [componentSettings, setComponentSettings] = React.useState<any | null>({});
    
    function handleComponentChange(component:any){
        setCurrentComponent(component)
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        setComponentSettings((prevSettings: any) => {
          const newSettings = {...prevSettings};
          newSettings[name] = value;
          return newSettings;
        });
      }
      console.log(componentSettings);
    return (
        <section className="container flex flex-col gap-6 pb-8 pt-6 md:py-10">
            <Card className="flex p-2">
                <Card className="flex max-h-[40rem] w-48 flex-col overflow-auto">
                    {siteConfig.cgen.components.map((component) => {
                        return (
                            <Button variant={"ghost"} onClick={() => handleComponentChange(component)}>
                                {component.name}
                            </Button>
                        )
                    })}
                </Card>
                <Card className="border-0">
                    <CardHeader>
                        {currentComponent?.name || "Choose component"}
                    </CardHeader>
                    <CardContent className={"flex flex-col gap-5"}>
                        {currentComponent && (
                            <>
                                <ComponentRenderer componentName={currentComponent?.name} componentSettings={componentSettings} /><Separator /><Card className="flex flex-auto gap-5 border-0">
                                    {currentComponent?.settings ? currentComponent?.settings.map((setting: { placeholder: any; name: any; variations: any; }): any => {
                                        if (setting.variations) {
                                            return (
                                                <Select>
                                                    <SelectTrigger className="min-w-[180px]">
                                                        <SelectValue placeholder="Select style" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            {setting?.variations?.map((value: any) => {
                                                                return (
                                                                    <SelectItem key={value} id={value} value={""}>{value}</SelectItem>
                                                                );
                                                            })}
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            );
                                        } else {
                                            return (
                                                <Input
                                                    type="text"
                                                    placeholder={setting.placeholder}
                                                    value={componentSettings[setting.name] || null}
                                                    name={setting.name}
                                                    key={setting.name}
                                                    onChange={handleInputChange} />
                                            );
                                        }
                                    })
                                        : null}
                                </Card>
                            </>
                            )
                        }
                    </CardContent>
                </Card>
            </Card>
            <Card className="p-5">
                
            </Card>
        </section>
    )
}
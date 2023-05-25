'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function DataPlayground(){
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0); // Variable to store the offset
    
    const splitArray = (array:any, subArrayLength:any) => {
      const result = [];
      for (let i = 0; i < array.length; i += subArrayLength) {
        result?.push(array.slice(i, i + subArrayLength));
      }
      return result;
    };
    
    function generateArray() {
      setData([]);
      const input = (document.getElementById("textData") as HTMLInputElement).value;
      let bin:any = '';
      for (let i = 0; i < input.length; i++) {
        bin += input[i].charCodeAt(0).toString(2) + " ";
      }
      setData(bin);

      // Calculate the offset
      const dataLength = bin.split(" ").length;
      const sideLength = Math.ceil(Math.sqrt(dataLength));
      const paddedDataLength = sideLength * sideLength;
      const offset = paddedDataLength - dataLength;
      setOffset(Math.ceil(paddedDataLength/Math.sqrt(dataLength)*offset)%8);
    }

    const dataLength:number = data.length;
    const sideLength = Math.ceil(Math.sqrt(dataLength)); // Calculate the side length of the square
    const paddedDataLength :number = sideLength * sideLength;
    const paddedData:any = (data as any[]).concat(Array(paddedDataLength - dataLength).fill(0));
    
    const subArrays = splitArray(paddedData, sideLength);
    return(
        <section className="container grid grid-flow-col items-center gap-6 pb-8 pt-6 md:py-10">
            <Card>
                <CardHeader className="flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-5">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Data Visualizer
                    </h3>
                </CardHeader>

                <CardContent>
                    <div className="flex">
                        <div className="space-y-5">
                            <Textarea id="textData" onChange={() => (generateArray())} placeholder="" draggable/>
                            <Label>Key: {offset}</Label>
                        </div>
                        <Separator orientation="vertical" className="mx-4 h-auto" />
                        <div className="grid place-items-center">
                            <div className="flex">
                                {subArrays.map(dataChunk => {
                                    const data = Object.entries(dataChunk).map(data => data[1])
                                    return (
                                        <div>
                                        {data.map(dataPoint => {
                                            return(
                                                <div className={`h-2 w-2 ${dataPoint == 0 ? "bg-sky-500" : "bg-blue-800" }`}/>
                                            )
                                        })}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
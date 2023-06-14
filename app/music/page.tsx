import MusicTitle from "@/components/musicTitle"
import { getTopTracks } from "../spotify";
import { useState } from "react";

export default function MusicPage(){

    return(
        <section className="container grid items-center gap-24 pb-8 pt-6 sm:gap-48 md:py-10">
            <MusicTitle />
        </section>
    )
}
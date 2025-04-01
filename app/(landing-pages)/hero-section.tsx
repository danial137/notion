"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion"
import { useRef } from "react";
import { useMediaQuery } from "react-responsive"
import { useState } from "react";

import {
    PiArrowRight,
    PiBookOpenTextLight,
    PiFileThin,
    PiSparkleLight,
    PiTargetLight,
} from "react-icons/pi"

import Link from "next/link";


const tabs = [
    {
        icons: (<PiSparkleLight className="text-3xl mr-2 text-purple-600 bg-purple-100 p-1 rounded-full" />),
        name: "AI",
        features: "now with Q & A",
        description: "ask literally anything . bird will answer ",
        more: (<div className="text-purple-600 flex items-center ">
            learn more <PiArrowRight className="text-sm ml-1" />
        </div>
        ),
        image: "/assets/GroovyDoodle.svg"
    },
    {
        icons: (<PiBookOpenTextLight className="text-3xl mr-2 text-red-600 bg-red-100 p-1 rounded-full" />),
        name: "WIKI",
        features: "centerlaiez your knowledge make it accessible  ",
        description: "ask literally anything . bird will answer ",
        more: (<div className="text-purple-600 flex items-center ">
            learn more <PiArrowRight className="text-sm ml-1" />
        </div>
        ),
        image: "/assets/PlantDoodle.svg"
    },
    {
        icons: (<PiTargetLight className="text-3xl mr-2 text-blue-600 bg-blue-100 p-1 rounded-full" />),
        name: "project",
        features: "now with Q & A",
        description: "ask literally anything . bird will answer ",
        more: (<div className="text-purple-600 flex items-center ">
            learn more <PiArrowRight className="text-sm ml-1" />
        </div>
        ),
        image: "/assets/CoffeeDoddle.svg"
    },
    {
        icons: (<PiSparkleLight className="text-3xl mr-2 text-yellow-600 bg-yellow-100 p-1 rounded-full" />),
        name: "AI",
        features: "now with Q & A",
        description: "ask literally anything . bird will answer ",
        more: (<div className="text-purple-600 flex items-center ">
            learn more <PiArrowRight className="text-sm ml-1" />
        </div>
        ),
        image: "/assets/FloatDoodle.svg"
    },

]
const HeroSection = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const isSmallscreen = useMediaQuery({ maxWidth: 767 })
    return (
        <div className="md:items-center flex flex-col ">
            <div className="font-medium 2xl:w-1/3 xl:w-1/2 md:w-2/3 lg:px-0 text-5xl xl:text-6xl flex justify-center xl:pt-14 text-center pt-6">
                write, plan , share <br /> with AI at your side
            </div>
            <p className="text-2xl pt-4 text-center w-2/3 mx-auto ">
                Bird is the connected workspace where better, faster work happens.
            </p>
            <div className="flex gap-4 pt-6 items-center justify-center">
                <Link href={"/"} >
                    <Button className="py-1">
                        <div className="flex items-center justify-center">
                            <div className="text-lg">Get Bird Free</div>
                            <div><PiArrowRight className="ml-2" /></div>
                        </div>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection;
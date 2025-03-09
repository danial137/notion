"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X } from "lucide-react"

const ActionButton = () => {
    const [isdropdown, setisdropdown] = useState(false)
    const toggleDropdown = () => setisdropdown(!isdropdown)
    const closedropdown = () => setisdropdown(!isdropdown)
    return (
        <div className="pr-2">
            <div className="items-center justify-center flex">
                <div className="flex xl:space-x-4">
                    <Link href="/contact-sales" className="hidden lg:flex items-center">
                        <div>request a demo</div>
                    </Link>
                    <div className="font-thin lg-flex items-flex hidden">|</div>
                    <div className="flex lg:space-x-4 items-center pr-4">
                        <div>
                            <Button variant={"outline"} className="hidden lg:flex items-center border-none text-md"> LogIn </Button>
                        </div>
                    </div>
                    <div className="flex lg:space-x-4 items-center pr-4">
                        <div>
                            <Button  className="hidden lg:flex items-center border-none text-md"> Get Bird  Free </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActionButton
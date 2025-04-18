"use client"
import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlignJustify, X, Moon } from "lucide-react"
import DropDownMenu from "./drop-down-menu"

const ActionButton = () => {
    const [isDropdown, setisDropdown] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDropdown = () => setisDropdown(!isDropdown)
    const closeDropdown = () => setisDropdown(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        if (!isDarkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }

    useEffect(() => {
        // Ensure the dark mode state persists on page reload
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        }
    }, [])

    return (
        <div className="pr-2">
            <div className="items-center justify-center flex">
                <div className="flex xl:space-x-4">
                    <Link href="/contact-sales" className="hidden lg:flex items-center">
                        <div>request a demo</div>
                    </Link>
                    <div className="font-thin lg:flex items-center hidden">|</div>
                    <div className="flex lg:space-x-4 items-center pr-4">
                        <div>
                            <Button variant={"outline"} className="hidden lg:flex items-center border-none text-md"> LogIn </Button>
                        </div>
                    </div>
                    <div className="flex lg:space-x-4 items-center pr-4">
                        <div>
                            <Button className="hidden lg:flex items-center border-none text-md"> Get Bird Free </Button>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Button
                            onClick={toggleDarkMode}
                            className="flex items-center border-none text-md"
                        >
                            <Moon className="h-5 w-5 mr-2" />
                            {isDarkMode ? "Dark Mode" : "Light Mode"}
                        </Button>
                    </div>
                    {isDropdown && (
                        <div onClick={toggleDropdown} className="rounded-full xl:hidden">
                            <X className="h-5 w-5 items-center justify-center" />
                        </div>
                    )}
                    {!isDropdown && (
                        <div onClick={toggleDropdown} className="flex lg:hidden">
                            <AlignJustify className="h-5 w-5 items-center justify-center mr-2" />
                        </div>
                    )}
                    {isDropdown && <DropDownMenu onClose={closeDropdown} />}
                </div>
            </div>
        </div>
    )
}

export default ActionButton
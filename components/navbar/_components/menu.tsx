"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
    PiBookOpenTextLight,
    PiFileThin,
    PiSparkleLight,
    PiTargetLight,
} from "react-icons/pi"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export function Menu() {
    return (
        <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="flex">
                            <ul className="grid p-2 md:w-[400px] lg:w-[250px] hover:cursor-pointer border-r">
                                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm ">
                                    <PiBookOpenTextLight className="text-2xl mr-2 text-red-600" />
                                    <div>
                                        <a href="">Wikis</a>
                                        <p className="text-gray-400 text-sm font-light"> centraliaz your knowledg </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm ">
                                    <PiBookOpenTextLight className="text-2xl mr-2 text-blue-600" />
                                    <div>
                                        <a href="">projects</a>
                                        <p className="text-gray-400 text-sm font-light"> for every teame and prson </p>
                                    </div>

                                </div>
                                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm ">
                                    <PiFileThin className="text-2xl mr-2 text-yellow-600" />
                                    <div>
                                        <a href="">Docs</a>
                                        <p className="text-gray-400 text-sm font-light"> powerfull & simple  </p>
                                    </div>

                                </div>
                                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm ">
                                    <PiSparkleLight className="text-2xl mr-2 text-purple-600" />
                                    <div>
                                        <a href=""> Bird Assistant </a>
                                        <p className="text-gray-400 text-sm font-light">Intregated Ai Assistant</p>
                                    </div>

                                </div>
                            </ul>
                            <div>
                                <ul className="grid p-2 md:w-[400px] lg:w-[250px] hover:cursor-pointer border-r">
                                    <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm ">
                                        <div>
                                            <a href=""> Bird Assistant </a>
                                            <p className="text-gray-400 text-sm font-light">Intregated Ai Assistant</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm ">
                                        <div>
                                            <a href=""> Bird Assistant </a>
                                            <p className="text-gray-400 text-sm font-light">Intregated Ai Assistant</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm ">
                                        <div>
                                            <a href=""> Bird Assistant </a>
                                            <p className="text-gray-400 text-sm font-light">Intregated Ai Assistant</p>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Download</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>solutions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            pricing
                        </NavigationMenuLink>
                    </Link>

                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

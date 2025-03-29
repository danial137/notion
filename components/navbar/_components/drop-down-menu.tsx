import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
    BarChart,
    Code,
    DollarSign,
    Headphones,
    PaintBucket,
    Settings,
    UserPlus
} from "lucide-react"

interface DropDownMenuProps {
    onClose: () => void;
}
const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {

    const handleLinkClick = () => {
        onClose()
    }

    return (
        <div className=" mt-10 w-screen h-screen bg-white px-4 items-center justify-center absolute right-0 xl:hidden">
            <Accordion
                defaultValue={'item-1'}
                className="pl-2"
                type="single"
                collapsible
            >
                <AccordionItem className="mt-6 border-b" value="item-1">
                    <AccordionTrigger> Use Cases  </AccordionTrigger>
                    <AccordionContent defaultValue={"item-1"}
                        className="space-y-2">
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <BarChart className="h-6 w-6 mr-2 text-orange-400"/>
                            </div>
                            <div>BarChart</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <Code className="h-6 w-6 mr-2 text-orange-400" />
                            </div>
                            <div>Code</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <DollarSign className="h-6 w-6 mr-2 text-green-400" />
                            </div>
                            <div>DollarSign</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <Headphones className="h-6 w-6 mr-2 text-blue-400" />
                            </div>
                            <div>Headphones</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <PaintBucket className="h-5 w-5 mr-2 text-orange-400" />
                            </div>
                            <div>PaintBucket</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <Settings className="h-5 w-5 mr-2 text-orange-400" />
                            </div>
                            <div>Setting</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <UserPlus className="h-5 w-5 mr-2 text-orange-400" />
                            </div>
                            <div>UserPlus</div>
                        </Link>
                    </AccordionContent>

                </AccordionItem>

                <AccordionItem className="mt-6 border-b" value="item-2">
                    <AccordionTrigger> For Bussines  </AccordionTrigger>
                    <AccordionContent
                        className="space-y-2">
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <BarChart className="h-6 w-6 mr-2 text-orange-400" />
                            </div>
                            <div>BarChart</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <Code className="h-6 w-6 mr-2 text-orange-400" />
                            </div>
                            <div>Code</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <DollarSign className="h-6 w-6 mr-2 text-green-400" />
                            </div>
                            <div>DollarSign</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <Headphones className="h-6 w-6 mr-2 text-blue-400" />
                            </div>
                            <div>Headphones</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <PaintBucket className="h-5 w-5 mr-2 text-orange-400" />
                            </div>
                            <div>PaintBucket</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <Settings className="h-5 w-5 mr-2 text-orange-400" />
                            </div>
                            <div>Setting</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <UserPlus className="h-5 w-5 mr-2 text-orange-400" />
                            </div>
                            <div>UserPlus</div>
                        </Link>
                    </AccordionContent>

                </AccordionItem>

                <AccordionItem className="mt-6 border-b" value="item-3">
                    <AccordionTrigger> For Customers  </AccordionTrigger>
                    <AccordionContent
                        className="space-y-2">
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <BarChart className="h-6 w-6 mr-2 text-orange-400" />
                            </div>
                            <div>BarChart</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <Code className="h-6 w-6 mr-2 text-orange-400" />
                            </div>
                            <div>Code</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <DollarSign className="h-6 w-6 mr-2 text-green-400" />
                            </div>
                            <div>DollarSign</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <Headphones className="h-6 w-6 mr-2 text-blue-400" />
                            </div>
                            <div>Headphones</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <PaintBucket className="h-5 w-5 mr-2 text-orange-400" />
                            </div>
                            <div>PaintBucket</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <Settings className="h-5 w-5 mr-2 text-orange-400" />
                            </div>
                            <div>Setting</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <UserPlus className="h-5 w-5 mr-2 text-orange-400" />
                            </div>
                            <div>UserPlus</div>
                        </Link>
                    </AccordionContent>

                </AccordionItem>
                <AccordionItem className="mt-6 border-b" value="item-4">
                    <AccordionTrigger> For EveryBody  </AccordionTrigger>
                    <AccordionContent
                        className="space-y-2">
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <BarChart className="h-6 w-6 mr-2 text-orange-400" />
                            </div>
                            <div>BarChart</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <Code className="h-6 w-6 mr-2 text-orange-400" />
                            </div>
                            <div>Code</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <DollarSign className="h-6 w-6 mr-2 text-green-400" />
                            </div>
                            <div>DollarSign</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <Headphones className="h-6 w-6 mr-2 text-blue-400" />
                            </div>
                            <div>Headphones</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <PaintBucket className="h-5 w-5 mr-2 text-orange-400" />
                            </div>
                            <div>PaintBucket</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <Settings className="h-5 w-5 mr-2 text-orange-400" />
                            </div>
                            <div>Setting</div>
                        </Link>
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <UserPlus className="h-5 w-5 mr-2 text-orange-400" />
                            </div>
                            <div>UserPlus</div>
                        </Link>
                    </AccordionContent>

                </AccordionItem>

                <Link href={"/"}
                    className="flex flex-1 justify-between items-center border-b py-4"
                >
                    pricing 
                </Link>

                <Link href={"/"}
                    className="flex flex-1 justify-between items-center border-b py-4"
                >
                    request a demo 
                </Link>

            </Accordion>
        </div>
    )
}


export default DropDownMenu
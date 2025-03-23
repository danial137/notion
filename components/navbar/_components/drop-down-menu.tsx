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
                    <AccordionTrigger>use cases  </AccordionTrigger>
                    <AccordionContent defaultValue={"item-1"}
                        className="space-y-2">
                        <Link href="/eccomerce" className="flex" onClick={handleLinkClick}>
                            <div>
                                <BarChart className="h-5 w-5 mr-2 text-orange-400"/>
                            </div>
                            <div>Sales</div>
                        </Link>
                    </AccordionContent>

                </AccordionItem>

            </Accordion>
        </div>
    )
}


export default DropDownMenu
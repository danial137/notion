interface DropDownMenuProps {
    onClose: () => void;
}
const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
    
    const handleLinkClick = () => {
        onClose()
    }
    
    return (
        <div className="w-screen h-screen bg-white px-4 items-center justify-center absolute right-0 xl:hidden">
            this is drop down menu
        </div>
    )
}


export default DropDownMenu
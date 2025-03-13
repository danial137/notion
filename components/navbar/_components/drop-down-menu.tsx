interface DropDownMenuProps {
    onClose: () => void;
}
const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
    
    const handleLinkClick = () => {
        onClose()
    }
    
    return (
        <div className="lg:hidden">
            this is drop down menu
        </div>
    )
}


export default DropDownMenu
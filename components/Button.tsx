import Image from "next/image"
import { FC } from "react"
interface ButtonProps {
    label: string;
    style: string;
    icon?: string; // Make icon optional with "?"
}
const Button: FC<ButtonProps> = ({ label, style, icon }) => {
    return (
        <button className={style}>
            {label}
            {icon && <Image src={icon} width={20} height={20} alt={icon} />}
        </button>
    )
}

export default Button
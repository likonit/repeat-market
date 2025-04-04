import { useEffect } from "react";
import Link from "./LinkElement";
import * as style from "@/styles/header.module.css";

export default function MenuElement({
    name,
    link,
    index,
    activeLink,
    setActiveLink,
}: {
    name: string;
    link: string;
    index: number;
    activeLink: number;
    setActiveLink: React.Dispatch<React.SetStateAction<number>>;
}) {
    useEffect(() => {
        const linkedElement = document.getElementById(link.split("#")[1]);
        function checkPosition() {
            if (linkedElement) {
                const currY = linkedElement.getBoundingClientRect().top;
                if (Math.abs(currY) <= 300) {
                    setActiveLink(index);
                }
            }
        }

        document.addEventListener("scroll", checkPosition);
    }, []);
    return (
        <span
            className={
                activeLink == index
                    ? style.header_block__activeLink
                    : style.header_block__no_activeLink
            }
        >
            <Link name={name} link={link}></Link>
        </span>
    );
}

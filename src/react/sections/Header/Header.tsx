import { useState } from "react";
import MenuElement from "./components/MenuElement";
import * as style from "@/styles/header.module.css";

const links = [
    {
        name: "О сервисе",
        link: "#about",
    },
    {
        name: "Принципы",
        link: "#principles",
    },
    {
        name: "Составить портфель",
        link: "#struct",
    },
];

export default function Header() {
    const [activeLink, setActiveLink] = useState(0);

    return (
        <header className={style.header_block}>
            <div className={style.header_block__logo}>
                <span>Repeat</span>
                <span>Market</span>
            </div>
            <nav>
                {links.map((item, i) => {
                    return (
                        <MenuElement
                            key={i}
                            name={item.name}
                            link={item.link}
                            index={i}
                            activeLink={activeLink}
                            setActiveLink={setActiveLink}
                        ></MenuElement>
                    );
                })}
            </nav>
        </header>
    );
}

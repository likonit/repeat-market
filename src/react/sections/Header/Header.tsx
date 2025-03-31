import MenuElement from "./components/MenuElement";
import * as style from "@/styles/header.module.css";

export default function Header() {
    const links = [
        {
            name: "О сервисе",
            link: "#links",
        },
        {
            name: "Принципы",
            link: "#links",
        },
        {
            name: "Используемые монеты",
            link: "#links",
        },
        {
            name: "Составить портфель",
            link: "#links",
        },
    ];

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
                        ></MenuElement>
                    );
                })}
            </nav>
        </header>
    );
}

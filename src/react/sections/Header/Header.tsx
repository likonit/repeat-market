import MenuElement from "./components/MenuElement";

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
        <header>
            <div>
                <span>RepeatMarket</span>
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

import PrinciplesCard from "./components/Card";
import { PrinciplesCardInfo } from "@/react/types";
import * as style from "@/styles/Principles/principles.module.css";
import logo_btc from "@/assets/icons/btc.svg";
import logo_safe from "@/assets/icons/safe.svg";
import logo_start from "@/assets/icons/start.svg";
import logo_copy from "@/assets/icons/copy.svg";

export default function Principles() {
    const cardsInfo: PrinciplesCardInfo[] = [
        {
            header: "Диверсификация",
            text: "Распределяем ваши активы по различным монетам для максимального повторения рынка.",
            icon: logo_start,
        },
        {
            header: "Свобода",
            text: "Даём пользователю гибкие фильтры основных критериев: мемкоины, стейблкоины, стейкинг.",
            icon: logo_copy,
        },
        {
            header: "Безопасность",
            text: "Мы берём только монеты из топа капитализации: 200 лучших монет. Так мы отбросываем сомнительные проекты.",
            icon: logo_safe,
        },
        {
            header: "Заработок",
            text: "Рассчитываем максимальный заработок пользователя через систему Bybit earn.",
            icon: logo_btc,
        },
    ];
    return (
        <section className={style.principles}>
            <h1>Наши принципы</h1>
            <div className={style.principles__cardsContainer}>
                <div className={style.principles__cardsContainer__grid}>
                    {cardsInfo.map((item, i) => {
                        return (
                            <PrinciplesCard
                                info={item}
                                key={i}
                            ></PrinciplesCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

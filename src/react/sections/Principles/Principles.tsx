import PrinciplesCard from "./components/Card";
import { PrinciplesCardInfo } from "@/react/types";

export default function Principles() {
    const cardsInfo: PrinciplesCardInfo[] = [
        {
            header: "Диверсификация",
            text: "Бла бла бла бла бла",
            icon: <p>s</p>,
        },
        {
            header: "Стейкинг",
            text: "что-то там блаблабла",
            icon: <p>alsl</p>,
        },
    ];
    return (
        <section>
            <h1>Наши принципы</h1>
            <div>
                {cardsInfo.map((item, i) => {
                    return (
                        <PrinciplesCard info={item} key={i}></PrinciplesCard>
                    );
                })}
            </div>
        </section>
    );
}

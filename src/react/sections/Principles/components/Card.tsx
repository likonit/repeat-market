import { PrinciplesCardInfo } from "@/react/types";
import * as style from "@/styles/Principles/principles.module.css";

export default function PrinciplesCard({ info }: { info: PrinciplesCardInfo }) {
    return (
        <div className={style.principles__cardsContainer__grid__card}>
            <div
                className={
                    style.principles__cardsContainer__grid__card__container
                }
            >
                <div>
                    <img src={info.icon} alt="No image" />
                </div>
                <h3>{info.header}</h3>
            </div>
            <p>{info.text}</p>
        </div>
    );
}

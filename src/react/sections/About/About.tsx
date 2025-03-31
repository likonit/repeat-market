import Button from "./Button";
import * as style from "@/styles/About/about.module.css";

export default function About() {
    return (
        <section className={style.about}>
            <h1>Составьте прибыльный портфель своей мечты</h1>
            <div className={style.about__text}>
                <p>
                    RepeatMarket поможет составить диверсифицированный портфель,
                    повторяющий 99% рынка даже с капиталом в 100$.
                </p>
            </div>
            <Button></Button>
        </section>
    );
}

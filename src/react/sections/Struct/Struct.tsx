import { useDispatch, useSelector } from "react-redux";
import StructInputBlock from "./components/Input";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { fetchCurrencies } from "@/store/currenciesSlice";
import MarketVisualization from "./components/Visualization/MarketVisualization";
import StockDescription from "./components/StockDescription/StockDescription";
import Download from "./components/Download/Download";
import PartAnalyze from "./components/PartAnalyze";
import * as style from "@/styles/Struct/struct.module.css";
import { setErrorText, setErrorVisibility } from "@/store/modalSlice";
import Instruction from "./components/Instruction/Instruction";

export default function Struct() {
    const [visualizationVisible, setVisualizationVisible] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const { inError } = useSelector(
        (store: RootState) => store.currenciesSlice
    );

    useEffect(() => {
        (async function () {
            dispatch(fetchCurrencies());
        })();
    }, []);

    useEffect(() => {
        if (inError) {
            dispatch(setErrorVisibility(true));
            dispatch(
                setErrorText(
                    "Ошибка загрузки данных о монетах. Попробуйте позже"
                )
            );
        }
    }, [visualizationVisible, inError]);

    let visalizedBlock =
        visualizationVisible && !inError ? (
            <div>
                <MarketVisualization></MarketVisualization>
                <StockDescription></StockDescription>
                <PartAnalyze></PartAnalyze>
                <Download></Download>
            </div>
        ) : (
            <></>
        );

    return (
        <section className={style.struct} id="struct">
            <h1>Давайте составим портфель</h1>
            <Instruction></Instruction>
            <StructInputBlock
                setVisualizationVisible={setVisualizationVisible}
            ></StructInputBlock>
            {visalizedBlock}
        </section>
    );
}

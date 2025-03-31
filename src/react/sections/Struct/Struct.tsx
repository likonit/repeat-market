import { useDispatch } from "react-redux";
import StructInputBlock from "./components/Input";
import { AppDispatch } from "@/store/store";
import { useEffect, useState } from "react";
import { fetchCurrencies } from "@/store/currenciesSlice";
import MarketVisualization from "./components/Visualization/MarketVisualization";
import StockDescription from "./components/StockDescription/StockDescription";
import Download from "./components/Download/Download";
import PartAnalyze from "./components/PartAnalyze";

export default function Struct() {
    const [visualizationVisible, setVisualizationVisible] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        (async function () {
            dispatch(fetchCurrencies());
        })();
    }, []);

    let visalizedBlock = visualizationVisible ? (
        <div>
            <MarketVisualization></MarketVisualization>
            <PartAnalyze></PartAnalyze>
            <StockDescription></StockDescription>
            <Download></Download>
        </div>
    ) : (
        <></>
    );

    return (
        <section>
            <h1>Составить диверсифицированный портфель</h1>
            <StructInputBlock
                setVisualizationVisible={setVisualizationVisible}
            ></StructInputBlock>
            {visalizedBlock}
        </section>
    );
}

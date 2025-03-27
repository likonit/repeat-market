import { useDispatch } from "react-redux";
import StructInputBlock from "./components/Input";
import { AppDispatch } from "@/store/store";
import { useEffect, useState } from "react";
import { fetchCurrencies } from "@/store/currenciesSlice";
import MarketVisualization from "./components/Visualization/MarketVisualization";
import StockDescription from "./components/StockDescription/StockDescription";

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
            <StockDescription></StockDescription>
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

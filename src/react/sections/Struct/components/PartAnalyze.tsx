import { goodLevels } from "@/scripts/constants/cssConstants";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as style from "@/styles/Struct/Stock/part.module.css";

export default function PartAnalyze() {
    const { stockList, totalMarketCap } = useSelector(
        (store: RootState) => store.currenciesSlice
    );
    const [stockMarketCap, setStockMarketCap] = useState(0);
    const [color, setColor] = useState<string>("#fff");

    useEffect(() => {
        const stockMarketCap = stockList.reduce(
            (sum, item) => (sum += item.marketCap),
            0
        );

        const part = stockMarketCap / totalMarketCap;
        let colorToSet = goodLevels.good;
        if (part < 0.95) colorToSet = goodLevels.ok;
        if (part < 0.925) colorToSet = goodLevels.middle;
        if (part < 0.9) colorToSet = goodLevels.bad;

        setColor(colorToSet);
        setStockMarketCap(stockMarketCap);
    }, [stockList]);
    return (
        <article className={style.partBlock}>
            <p>
                Ваш портфель покрывает{" "}
                <span style={{ color }}>
                    {((stockMarketCap / totalMarketCap) * 100).toFixed(2)}%{" "}
                    <span>рынка</span>
                </span>
            </p>
        </article>
    );
}

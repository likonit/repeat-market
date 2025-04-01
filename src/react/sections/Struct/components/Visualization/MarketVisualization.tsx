import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import * as style from "@/styles/Struct/Visualization/marketCapBlock.module.css";
import VisualizationGridBlock from "./GridBlock";
import limitStock from "@/scripts/stock/limitStock";

export default function MarketVisualization() {
    const limitedStockList = useSelector((store: RootState) =>
        limitStock(store.currenciesSlice.stockList, 12)
    );
    return (
        <div className={style.marketCap}>
            <div className={style.marketCapBlock}>
                <VisualizationGridBlock
                    type={true}
                    info={{
                        index: 0,
                        coins: limitedStockList,
                        marketCap: limitedStockList.reduce(
                            (sum, item) => (sum += item.marketCap),
                            0
                        ),
                    }}
                ></VisualizationGridBlock>
            </div>
        </div>
    );
}

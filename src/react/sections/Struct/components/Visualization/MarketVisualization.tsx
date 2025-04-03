import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import * as style from "@/styles/Struct/Visualization/marketCapBlock.module.css";
import VisualizationGridBlock from "./GridBlock";
import limitStock from "@/scripts/stock/limitStock";
import ActiveBlockProvider from "./providers/activeBlocks";

export default function MarketVisualization() {
    const limitedStockList = useSelector((store: RootState) =>
        limitStock(store.currenciesSlice.stockList, 12)
    );

    return (
        <div className={style.marketCap} id="visualization">
            <div className={style.marketCapBlock}>
                <ActiveBlockProvider>
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
                </ActiveBlockProvider>
            </div>
        </div>
    );
}

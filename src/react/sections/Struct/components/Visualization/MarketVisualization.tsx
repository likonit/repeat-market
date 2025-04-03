import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import * as style from "@/styles/Struct/Visualization/marketCapBlock.module.css";
import VisualizationGridBlock from "./GridBlock";
import limitStock from "@/scripts/stock/limitStock";
import ActiveBlockProvider from "./providers/activeBlocks";
import { VISUALIZATION_RESTRUCT } from "@/scripts/constants/cssConstants";

export default function MarketVisualization() {
    const limitedStockList = useSelector((store: RootState) =>
        limitStock(
            store.currenciesSlice.stockList,
            window.innerWidth > VISUALIZATION_RESTRUCT ? 12 : 9
        )
    );

    return (
        <div className={style.marketCap} id="visualization">
            <div className={style.marketCapBlock}>
                <ActiveBlockProvider>
                    <VisualizationGridBlock
                        type={window.innerWidth > VISUALIZATION_RESTRUCT}
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

import { VisualizationBlocksInfo } from "@/react/types";
import MarketVisualizationCoin from "./CoinBlock";

export default function VisualizationGridBlock({
    info,
    type,
}: {
    info: VisualizationBlocksInfo;
    type: boolean; // true = расположение слева-направа; false = сверху-вниз
}) {
    // блок визуализации в ширину/длину
    // считаем пропорции двух монет - это будет ширина/длина двух блоков.
    // если index == limit, то отображать не нужно.

    const currentCoin = info.coins[info.index];
    const firstFR =
        info.index + 1 == info.coins.length
            ? 100
            : Math.floor((currentCoin.marketCap / info.marketCap) * 100);

    const styling: any = {
        display: "grid",
    };

    if (!type) styling.gridTemplateRows = `${firstFR}fr ${100 - firstFR}fr`;
    else styling.gridTemplateColumns = `${firstFR}fr ${100 - firstFR}fr`;

    return (
        <div style={firstFR < 100 ? styling : {}}>
            <MarketVisualizationCoin
                coin={currentCoin}
            ></MarketVisualizationCoin>
            {info.index + 1 != info.coins.length ? (
                <div>
                    <VisualizationGridBlock
                        type={!type}
                        info={{
                            ...info,
                            index: info.index + 1,
                            marketCap:
                                info.marketCap -
                                info.coins[info.index].marketCap,
                        }}
                    ></VisualizationGridBlock>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

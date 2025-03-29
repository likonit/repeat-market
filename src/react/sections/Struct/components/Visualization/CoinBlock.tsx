import { StockCoinInfo } from "@/scripts/stock/createStock";
import * as style from "@/styles/Struct/Visualization/marketCapBlock.module.css";
import { useEffect, useState } from "react";
import CoinTip from "./CoinTip";
import { useDispatch } from "react-redux";
import { setCorrection } from "@/store/tooltipSlice";
import TooltipPotral from "@/react/sections/Tooltip/TooltipPortal";
import TooltipContainer from "@/react/sections/Tooltip/TooltipContainer";

export default function MarketVisualizationCoin({
    coin,
}: {
    coin: StockCoinInfo;
}) {
    const [inblock, setInblock] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        // заранее кешируем
        if (coin.imageLink.length > 0) {
            const image = new Image();
            image.src = coin.imageLink;
        }
    }, []);

    return (
        <div className={style.marketCapBlock__info_element}>
            <TooltipContainer
                zIndex={-3}
                mouseInAction={() => {
                    dispatch(setCorrection({ x: -25, y: -60 }));
                    setInblock(true);
                }}
                mouseOutAction={() => {
                    setInblock(false);
                }}
            >
                <>
                    {inblock ? (
                        <TooltipPotral>
                            <CoinTip coin={coin}></CoinTip>
                        </TooltipPotral>
                    ) : (
                        <></>
                    )}
                    <div>
                        <span>{coin.symbol}</span>
                    </div>
                </>
            </TooltipContainer>
        </div>
    );
}

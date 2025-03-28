import TooltipContainer from "@/react/sections/Tooltip/TooltipContainer";
import TooltipPotral from "@/react/sections/Tooltip/TooltipPortal";
import { StockCoinInfo } from "@/scripts/stock/createStock";
import { useState } from "react";

export default function CoinCardAPR({ coin }: { coin: StockCoinInfo }) {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <TooltipContainer
                stylesInfo={{
                    x: -75,
                    y: -60,
                    zIndex: 2,
                }}
                mouseInAction={() => {
                    setVisible(true);
                }}
                mouseOutAction={() => {
                    setVisible(false);
                }}
            >
                <a>{coin.APR.value?.toFixed(2) + "%"}</a>
            </TooltipContainer>
            {visible && (
                <TooltipPotral>
                    <div style={{ width: 150, height: 50 }}>
                        <p>
                            Мин. сумма {coin.symbol}: {coin.APR.minValue}
                        </p>
                        <p>
                            {(coin.price * (coin.APR.minValue || 0)).toFixed(2)}{" "}
                            USD
                        </p>
                    </div>
                </TooltipPotral>
            )}
        </>
    );
}

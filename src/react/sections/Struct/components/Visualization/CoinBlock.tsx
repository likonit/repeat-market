import { StockCoinInfo } from "@/scripts/stock/createStock";
import * as style from "@/styles/Struct/Visualization/marketCapBlock.module.css";
import { useEffect, useRef, useState } from "react";
import CoinTip from "./CoinTip";
import { useDispatch } from "react-redux";
import { setCorrection, setTooltipVisibility } from "@/store/tooltipSlice";
import TooltipPotral from "@/react/sections/Tooltip/TooltipPortal";

export default function MarketVisualizationCoin({
    coin,
}: {
    coin: StockCoinInfo;
}) {
    const [inblock, setInblock] = useState(false);
    const hoverTarget = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    // что-то типа троттлинга.
    const FPS = 1000 / 90;

    let lastTimeUpdated = new Date().getTime();

    useEffect(() => {
        dispatch(setCorrection({ x: -25, y: -60 }));

        function handleMouseMove() {
            const currTime = new Date().getTime();
            if (currTime - lastTimeUpdated > FPS) {
                lastTimeUpdated = currTime;
                dispatch(setTooltipVisibility(true));
                setInblock(true);
                console.log("set true ", coin.symbol);
            }
        }

        function handleMouseLeave() {
            dispatch(setTooltipVisibility(false));
            setInblock(false);
            console.log("set false ", coin.symbol);
        }

        if (coin.imageLink.length > 0) {
            const hoverImage = new Image();
            hoverImage.src = coin.imageLink;
        }

        hoverTarget.current?.addEventListener("mousemove", handleMouseMove);
        hoverTarget.current?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            hoverTarget.current?.removeEventListener(
                "mousemove",
                handleMouseMove
            );
            hoverTarget.current?.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );
        };
    }, []);

    return (
        <div className={style.marketCapBlock__info_element} ref={hoverTarget}>
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
        </div>
    );
}

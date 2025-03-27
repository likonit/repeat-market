import { StockCoinInfo } from "@/scripts/stock/createStock";
import * as style from "@/styles/Struct/Visualization/marketCapBlock.module.css";
import { useEffect, useRef, useState } from "react";
import CoinTip from "./CoinTip";

export default function MarketVisualizationCoin({
    coin,
}: {
    coin: StockCoinInfo;
}) {
    const hoverTarget = useRef<HTMLDivElement>(null);
    const [tooltip, setTooltip] = useState({
        visible: false,
        x: 0,
        y: 0,
    });

    // что-то типа троттлинга.
    const FPS = 1000 / 120;

    let lastTimeUpdated = new Date().getTime();

    function handleMouseMove(event: MouseEvent) {
        const currTime = new Date().getTime();
        if (currTime - lastTimeUpdated > FPS) {
            lastTimeUpdated = currTime;
            setTooltip({
                visible: true,
                x: event.clientX,
                y: event.clientY,
            });
        }
    }

    function handleMouseLeave() {
        setTooltip({
            visible: false,
            x: tooltip.x,
            y: tooltip.y,
        });
    }

    useEffect(() => {
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
    });
    return (
        <div className={style.marketCapBlock__info_element} ref={hoverTarget}>
            {tooltip.visible ? (
                <CoinTip coin={coin} x={tooltip.x} y={tooltip.y}></CoinTip>
            ) : (
                <></>
            )}
            <div>
                <span>{coin.symbol}</span>
            </div>
        </div>
    );
}

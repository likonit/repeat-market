import { StockCoinInfo } from "@/scripts/stock/createStock";
import * as style from "@/styles/Struct/Visualization/marketCapBlock.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import CoinTip from "./CoinTip";
import { useDispatch } from "react-redux";
import { setCorrection } from "@/store/tooltipSlice";
import TooltipPotral from "@/react/sections/Tooltip/TooltipPortal";
import TooltipContainer from "@/react/sections/Tooltip/TooltipContainer";
import { ActiveBlockContext } from "./providers/activeBlocks";
import { MOBILE_START_WIDTH } from "@/scripts/constants/cssConstants";
import useThrottle from "@/react/hooks/useThrottle";

export default function MarketVisualizationCoin({
    coin,
    index,
}: {
    coin: StockCoinInfo;
    index: number;
}) {
    const [inblock, setInblock] = useState(false);
    const dispatch = useDispatch();
    const activeBlocks = useContext(ActiveBlockContext);
    const block = useRef<HTMLDivElement>(null);

    const throttle = useThrottle();

    useEffect(() => {
        // заранее кешируем
        if (coin.imageLink.length > 0) {
            const image = new Image();
            image.src = coin.imageLink;
        }

        function handleClick(event: MouseEvent) {
            if (block.current && block.current.contains(event.target as Node)) {
                handleMouseIn();
            }
        }

        function handleScroll() {
            // троттлинг
            throttle(handleMouseOut);
        }

        function handleMouseIn() {
            activeBlocks?.setIndex(index);
        }

        function handleMouseOut() {
            activeBlocks?.setIndex(-1);
        }

        if (window.innerWidth <= MOBILE_START_WIDTH) {
            document.addEventListener("scroll", handleScroll);
            document.addEventListener("click", handleClick);
        } else {
            block.current?.addEventListener("mouseenter", handleMouseIn);
            block.current?.addEventListener("mouseleave", handleMouseOut);
        }

        return () => {
            if (window.innerWidth <= MOBILE_START_WIDTH) {
                document.removeEventListener("scroll", handleScroll);
                document.removeEventListener("click", handleClick);
            } else {
                block.current?.removeEventListener("mouseenter", handleMouseIn);
                block.current?.removeEventListener(
                    "mouseleave",
                    handleMouseOut
                );
            }
        };
    }, []);

    return (
        <div className={style.marketCapBlock__info_element}>
            <TooltipContainer
                zIndex={0}
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
                    <div
                        ref={block}
                        className={style.marketCapBlock__info_element__text}
                        style={{
                            background: `rgba(${15},${194},${116}, ${
                                activeBlocks?.index == -1
                                    ? 1
                                    : activeBlocks?.index == index
                                    ? 1
                                    : 0.8
                            })`,
                            transition: ".3s",
                        }}
                    >
                        <span>{coin.symbol}</span>
                    </div>
                </>
            </TooltipContainer>
        </div>
    );
}

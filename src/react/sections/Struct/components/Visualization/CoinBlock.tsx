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

    useEffect(() => {
        // заранее кешируем
        if (coin.imageLink.length > 0) {
            const image = new Image();
            image.src = coin.imageLink;
        }

        function handleMouseIn() {
            activeBlocks?.setIndex(index);
        }

        function handleMouseOut() {
            activeBlocks?.setIndex(-1);
        }

        block.current?.addEventListener("mouseenter", handleMouseIn);
        block.current?.addEventListener("mouseleave", handleMouseOut);

        if (window.innerWidth <= MOBILE_START_WIDTH) {
            document.addEventListener("scroll", handleMouseOut);
        }

        return () => {
            block.current?.removeEventListener("mouseenter", handleMouseIn);
            block.current?.removeEventListener("mouseleave", handleMouseOut);

            if (window.innerWidth <= MOBILE_START_WIDTH) {
                document.removeEventListener("scroll", handleMouseOut);
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

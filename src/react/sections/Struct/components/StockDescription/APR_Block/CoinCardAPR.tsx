import TooltipContainer from "@/react/sections/Tooltip/TooltipContainer";
import TooltipPotral from "@/react/sections/Tooltip/TooltipPortal";
import countYearEarn from "@/scripts/helpers/countYearEarn";
import { StockCoinInfo } from "@/scripts/stock/createStock";
import { useEffect, useState } from "react";
import CoinCardAPRHoverBlock from "./HoverBlock/HoverBlock";
import { useDispatch } from "react-redux";
import { setCorrection } from "@/store/tooltipSlice";
import { MOBILE_START_WIDTH } from "@/scripts/constants/cssConstants";

export default function CoinCardAPR({ coin }: { coin: StockCoinInfo }) {
    const [visible, setVisible] = useState(false);
    const [yearEarnings, setYearEarnings] = useState<number>(0);

    const dispatch = useDispatch();
    // расчёт годовой доходности
    useEffect(() => {
        const rootElement = document.documentElement;
        const width = parseInt(
            getComputedStyle(rootElement).getPropertyValue(
                "--hoverblockAPRInfo-width"
            )
        );

        const height = parseInt(
            getComputedStyle(rootElement).getPropertyValue(
                "--hoverblockAPRInfo-height"
            )
        );

        dispatch(
            setCorrection({
                x:
                    window.innerWidth > MOBILE_START_WIDTH
                        ? -width / 2
                        : -width * 0.85,
                y: -height - 30,
            })
        );

        setYearEarnings(countYearEarn(coin));
    }, []);

    return (
        <>
            <TooltipContainer
                zIndex={2}
                mouseInAction={() => {
                    setVisible(true);
                }}
                mouseOutAction={() => {
                    setVisible(false);
                }}
            >
                <span>{yearEarnings.toFixed(3) + "%"}</span>
            </TooltipContainer>
            {visible && (
                <TooltipPotral>
                    <CoinCardAPRHoverBlock
                        coin={coin}
                        earnPercent={yearEarnings}
                    ></CoinCardAPRHoverBlock>
                </TooltipPotral>
            )}
        </>
    );
}

import TooltipContainer from "@/react/sections/Tooltip/TooltipContainer";
import TooltipPotral from "@/react/sections/Tooltip/TooltipPortal";
import countYearEarn from "@/scripts/helpers/countYearEarn";
import { StockCoinInfo } from "@/scripts/stock/createStock";
import { useEffect, useState } from "react";
import CoinCardAPRHoverBlock from "./HoverBlock/HoverBlock";
import { useDispatch } from "react-redux";
import { setCorrection } from "@/store/tooltipSlice";

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

        console.log(height);

        dispatch(
            setCorrection({
                x: -width / 2,
                y: -height - 20,
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
                <a>{yearEarnings.toFixed(3) + "%"}</a>
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

import { StockCoinInfo } from "@/scripts/stock/createStock";
import CoinCardAPRHoverBlockRow from "./HoverBlockRow";
import * as style from "@/styles/Struct/Stock/hoverblock.module.css";

export default function CoinCardAPRHoverBlock({
    coin,
    earnPercent,
}: {
    coin: StockCoinInfo;
    earnPercent: number;
}) {
    const lines: {
        needRender: boolean;
        paragraphName?: string;
        paragraphText: string;
        mini?: boolean;
    }[] = [
        {
            paragraphName: "APR",
            needRender: true,
            paragraphText: coin.APR.value?.toFixed(3) ?? "",
        },
        {
            needRender: earnPercent !== 0,
            paragraphName: "Доход сложного процента",
            mini: true,
            paragraphText:
                "+" +
                Math.abs(earnPercent - (coin.APR.value || 0)).toFixed(3) +
                "%",
        },
        {
            paragraphName: `Мин. сумма ${coin.symbol}`,
            needRender: true,
            paragraphText: coin.APR.minValue?.toString() ?? "",
        },
        {
            needRender: true,
            paragraphText:
                (coin.price * (coin.APR.minValue || 0)).toFixed(2) + "$",
            mini: true,
        },
        {
            paragraphName: `Дней заморозки`,
            needRender: true,
            paragraphText: coin.APR.dayToTake?.toString() ?? "",
        },
        {
            paragraphName: `Бонус`,
            needRender: true,
            paragraphText: coin.APR.bonus ? "да" : "нет",
        },
        {
            needRender: !!coin.APR.bonus,
            paragraphText: `${coin.APR.bonus?.APR}% до ${coin.APR.bonus?.to} ${coin.symbol}`,
            mini: true,
        },
    ];

    return (
        <div>
            <div className={style.hoverblockAPRInfo}>
                <div>
                    {lines
                        .filter((item) => item.needRender)
                        .map((item, i) => {
                            return (
                                <CoinCardAPRHoverBlockRow
                                    isMini={!!item.mini}
                                    key={i}
                                    paragraphName={item.paragraphName}
                                    paragraphText={item.paragraphText}
                                ></CoinCardAPRHoverBlockRow>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

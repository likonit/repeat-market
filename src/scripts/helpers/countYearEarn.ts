import { APRInfo } from "@/react/types";
import { StockCoinInfo } from "../stock/createStock";

// указываем, что если монету можно положить в стейкинг, то другие параметры доступны
function isStakable(coin: APRInfo): coin is {
    value: number;
    canStake: boolean;
    minValue: number;
    dayToTake: number;
    bonus?: {
        to: number;
        APR: number;
    };
} {
    return coin.canStake === true;
}
export default function countYearEarn(coin: StockCoinInfo): number {
    let currentValue = coin.usdValue;
    if (isStakable(coin.APR)) {
        if (coin.APR.minValue > currentValue) return 0;

        let plusValue = 0;
        for (let i = 0; i < 365; i += coin.APR.dayToTake) {
            if (plusValue >= coin.APR.minValue) {
                currentValue += plusValue;
                plusValue = 0;
            }

            let coinBodyValue = currentValue;
            const stakingDays = Math.min(coin.APR.dayToTake, 365 - i);

            if (coin.APR.bonus) {
                const bonusBody = Math.min(coin.APR.bonus.to, coinBodyValue);
                plusValue +=
                    bonusBody *
                    (coin.APR.bonus.APR / 100 / (365 / stakingDays));
                coinBodyValue -= bonusBody;
            }

            plusValue +=
                coinBodyValue * (coin.APR.value / 100 / (365 / stakingDays));
        }

        currentValue += plusValue;

        return (currentValue / coin.usdValue - 1) * 100;
    } else return 0;
}

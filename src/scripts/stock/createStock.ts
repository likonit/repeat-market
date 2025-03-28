import { APRInfo } from "@/react/types";
import { CoinRowInfoAdvanced } from "./createWeights";
import { StakeInfo, stakeBybit } from "@/store/constants";

export interface StockCoinInfo extends CoinRowInfoAdvanced {
    APR: APRInfo;
    coinValue: number;
    usdValue: number;
}

export default function createStock(
    coins: CoinRowInfoAdvanced[],
    budget: number
): StockCoinInfo[] {
    const minBuyUSDValue = 1;
    let i = 0;
    const initialBudget = budget;
    const stockResult: StockCoinInfo[] = [];

    let limitedMarketCap = 0;

    while (budget > 0) {
        const currentCoin = coins[i];
        let coinUSDvalue = initialBudget * currentCoin.weight;
        budget -= coinUSDvalue;
        limitedMarketCap += currentCoin.marketCap;

        if (
            budget < minBuyUSDValue ||
            i + 1 == coins.length ||
            coinUSDvalue < minBuyUSDValue
        ) {
            budget = 0;
        }
        i++;
    }

    budget = initialBudget;
    i = 0;

    while (budget > 0) {
        const currentCoin = coins[i];
        const currWeight = currentCoin.marketCap / limitedMarketCap;
        let coinUSDvalue = initialBudget * currWeight;

        let coinValue = coinUSDvalue / currentCoin.price;
        budget -= coinUSDvalue;

        if (budget < minBuyUSDValue || i + 1 == coins.length) {
            break;
        }

        const stakeInfo: StakeInfo | undefined = stakeBybit.get(
            currentCoin.symbol
        );

        stockResult.push({
            ...currentCoin,
            weight: currWeight,
            coinValue,
            usdValue: coinUSDvalue,
            APR: !stakeInfo
                ? { canStake: false }
                : {
                      canStake: true,
                      minValue: stakeInfo.minStakeValue,
                      value: stakeInfo.APR,
                      dayToTake: stakeInfo.daysToTake,
                      bonus: stakeInfo.bonus,
                  },
        });
        i++;
    }

    return stockResult;
}

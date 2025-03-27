import { CoinRowInfoAdvanced } from "./createWeights";
import { stakeBybit } from "@/store/constants";

export interface StockCoinInfo extends CoinRowInfoAdvanced {
    APR: number;
    coinValue: number;
    usdValue: number;
}

export default function createStock(
    coins: CoinRowInfoAdvanced[],
    budget: number
): StockCoinInfo[] {
    let i = 0;
    const initialBudget = budget;
    const stockResult: StockCoinInfo[] = [];

    while (budget > 0) {
        const currentCoin = coins[i];
        let coinUSDvalue = initialBudget * currentCoin.weight;
        let coinValue = coinUSDvalue / currentCoin.price;
        budget -= coinUSDvalue;

        if (budget < 2 || i + 1 == coins.length) {
            coinUSDvalue += budget;
            coinValue += budget / currentCoin.price;
            budget = 0;
        }

        const stakeInfo = stakeBybit.get(currentCoin.name);
        stockResult.push({
            ...currentCoin,
            weight: coinUSDvalue / initialBudget,
            coinValue,
            usdValue: coinUSDvalue,
            APR: stakeInfo
                ? coinValue < stakeInfo.minStakeValue
                    ? 0
                    : stakeInfo.APR
                : 0,
        });
        i++;
    }

    return stockResult;
}

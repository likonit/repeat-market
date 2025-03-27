import { CoinRowInfo } from "@/react/types";

export interface CoinRowInfoAdvanced extends CoinRowInfo {
    weight: number;
}

export default function createWeights(
    coins: CoinRowInfo[]
): CoinRowInfoAdvanced[] {
    let totalMarketCap = 0;
    coins.forEach((item) => (totalMarketCap += item.marketCap));
    return coins.map((item) => {
        return { ...item, weight: item.marketCap / totalMarketCap };
    });
}

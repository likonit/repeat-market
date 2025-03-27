import { StockCoinInfo } from "./createStock";

// заменяет оставшийся набор монет на одну монету "Другое"
export default function limitStock(coins: StockCoinInfo[], limit: number) {
    const result: StockCoinInfo[] = [];
    let otherWeight = 1,
        totalMarketCap = coins.reduce(
            (sum, item) => (sum += item.marketCap),
            0
        );

    for (let i = 0; i < Math.min(coins.length - 1, limit - 1); i++) {
        const currentCoin = coins[i];
        otherWeight -= currentCoin.weight;
        totalMarketCap -= currentCoin.marketCap;
        result.push(currentCoin);
    }

    result.push({
        weight: otherWeight,
        name: "Другие",
        symbol: "Другие",
        imageLink: "",
        APR: 0,
        id: -1,
        coinValue: -1,
        usdValue: -1,
        price: -1,
        marketCap: totalMarketCap,
        changePercent: -1,
    });

    result.sort((a, b) => b.weight - a.weight);

    return result;
}

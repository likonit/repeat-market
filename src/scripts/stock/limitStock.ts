import { StockCoinInfo } from "./createStock";

// заменяет оставшийся набор монет на одну монету "Другое"
export default function limitStock(coins: StockCoinInfo[], limit: number) {
    const result: StockCoinInfo[] = [];
    let totalMarketCap = coins.reduce(
        (sum, item) => (sum += item.marketCap),
        0
    );

    const initMarketCap = totalMarketCap;
    let minus = 0;
    if (coins.length > limit) minus = 1;

    for (let i = 0; i < Math.min(coins.length - minus, limit - minus); i++) {
        const currentCoin = coins[i];
        totalMarketCap -= currentCoin.marketCap;
        result.push(currentCoin);
    }

    if (minus === 1)
        result.push({
            weight: totalMarketCap / initMarketCap,
            name: "Другие",
            symbol: "Другие",
            imageLink: "",
            APR: { canStake: false },
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

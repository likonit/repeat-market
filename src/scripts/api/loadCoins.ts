import { CoinRowInfo } from "@/react/types";

export default async function loadCoins(
    limit: number = 120
): Promise<CoinRowInfo[]> {
    try {
        const fetchResult = await fetch(
            `http://127.0.0.1:5132/crypto?limit=${limit}`
        );
        const jsonData: { status: any; data: any[] } = await fetchResult.json();
        const rows: CoinRowInfo[] = jsonData.data.map((item, i) => {
            return {
                imageLink: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`,
                id: i,
                name: item.name,
                symbol: item.symbol,
                price: item.quote.USD.price,
                changePercent: item.quote.USD.percent_change_24h,
                marketCap: item.quote.USD.market_cap,
            };
        });
        return rows;
    } catch (e) {
        return [];
    }
}

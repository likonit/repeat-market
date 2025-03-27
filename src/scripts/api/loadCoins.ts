import { CoinRowInfo } from "@/react/types";

export default async function loadCoins(
    limit: number = 120
): Promise<CoinRowInfo[]> {
    try {
        const fetchResult = await fetch(
            `http://45.155.207.9:5132/crypto?limit=${limit}`
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
        console.log(jsonData.data);
        return rows;
    } catch (e) {
        console.log(e);
        return [];
    }
}

export const stableCoins = [
    "USDT",
    "USDC",
    "USDe",
    "DAI",
    "FDUSD",
    "PYUSD",
    "TUSD",
    "USD0",
    "USDY",
];

export const memeCoins = [
    "DOGE",
    "SHIB",
    "PEPE",
    "TRUMP",
    "BONK",
    "FLOKI",
    "SPX",
    "FARTCOIN",
    "WIF",
    "PENGU",
    "CHEEMS",
    "BRETT",
    "MELANIA",
    "NOT",
    "POPCAT",
];

export interface StakeInfo {
    APR: number;
    minStakeValue: number;
}

export const stakeBybit = new Map<string, StakeInfo>();
stakeBybit
    .set("BTC", {
        APR: 0.4,
        minStakeValue: 0.001,
    })
    .set("ETH", {
        APR: 1,
        minStakeValue: 0.001,
    });

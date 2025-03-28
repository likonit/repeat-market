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
    daysToTake: number;
    bonus:
        | {
              to: number;
              APR: number;
          }
        | undefined;
}

const defaultStake: (min: number, APR?: number) => StakeInfo = (
    min: number,
    APR?: number
) => {
    return {
        APR: APR ?? 1,
        minStakeValue: min,
        daysToTake: 1,
        bonus: undefined,
    };
};

export const stakeBybit = new Map<string, StakeInfo>();
stakeBybit
    .set("BTC", {
        APR: 0.3,
        minStakeValue: 0.001,
        daysToTake: 1,
        bonus: {
            to: 0.005,
            APR: 2.3,
        },
    })
    .set("ETH", {
        APR: 1,
        minStakeValue: 0.001,
        daysToTake: 1,
        bonus: {
            to: 0.2,
            APR: 3,
        },
    })
    .set("USDT", {
        APR: 1.05,
        minStakeValue: 1,
        daysToTake: 1,
        bonus: {
            to: 500,
            APR: 6.05,
        },
    })
    .set("USDC", {
        APR: 1.27,
        minStakeValue: 1,
        daysToTake: 1,
        bonus: {
            to: 500,
            APR: 6.27,
        },
    })
    .set("MNT", {
        APR: 0.88,
        minStakeValue: 20,
        daysToTake: 1,
        bonus: {
            to: 300,
            APR: 1.88,
        },
    })
    .set("MOVE", {
        APR: 27.36,
        minStakeValue: 1,
        daysToTake: 1,
        bonus: undefined,
    })
    .set("MNT", {
        APR: 0.88,
        minStakeValue: 20,
        daysToTake: 1,
        bonus: {
            to: 300,
            APR: 1.88,
        },
    })
    .set("ATOM", {
        APR: 19.13,
        minStakeValue: 1,
        daysToTake: 1,
        bonus: undefined,
    })
    .set("NEAR", {
        APR: 9.03,
        minStakeValue: 1,
        daysToTake: 1,
        bonus: undefined,
    })
    .set("DAI", {
        APR: 7.94,
        minStakeValue: 2,
        daysToTake: 1,
        bonus: {
            to: 1000,
            APR: 7.94,
        },
    })
    .set("SOL", {
        APR: 5.4,
        minStakeValue: 0.1,
        daysToTake: 3,
        bonus: undefined,
    })
    .set("XRP", {
        APR: 0.7,
        minStakeValue: 600,
        daysToTake: 1,
        bonus: undefined,
    })
    .set("BNB", {
        APR: 1.81,
        minStakeValue: 0.05,
        daysToTake: 1,
        bonus: undefined,
    })
    .set("TON", {
        APR: 4.31,
        minStakeValue: 1.5,
        daysToTake: 3,
        bonus: undefined,
    })
    .set("ADA", {
        APR: 3.93,
        minStakeValue: 1.5,
        daysToTake: 20,
        bonus: undefined,
    })
    .set("LTC", defaultStake(0.05))
    .set("SHIB", defaultStake(100000))
    .set("TRX", defaultStake(50))
    .set("AVAX", defaultStake(0.2, 0.8))
    .set("LINK", defaultStake(6, 0.8))
    .set("XLM", defaultStake(100, 1.14))
    .set("SUI", defaultStake(2, 0.7))
    .set("HBAR", defaultStake(100, 0.8))
    .set("DOT", defaultStake(2, 0.8))
    .set("BCH", defaultStake(0.1, 1.42))
    .set("UNI", defaultStake(5, 1.38))
    .set("DOGE", defaultStake(500, 6.9));

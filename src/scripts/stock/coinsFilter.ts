import { CoinRowInfo } from "@/react/types";
import {
    memeCoins,
    stableCoins,
    stakeBybit,
} from "@/scripts/constants/constants";

// функция фильтрации монет по заданым чекбоксам.
export default function coinsFilter(
    coins: CoinRowInfo[],
    fields: [boolean, boolean, boolean]
): CoinRowInfo[] {
    const memesSetted = new Set(memeCoins);
    const stableSetted = new Set(stableCoins);
    return coins.filter((item) => {
        if (fields[0] && memesSetted.has(item.symbol)) return false;
        if (fields[1] && stableSetted.has(item.symbol)) return false;
        if (fields[2]) return stakeBybit.has(item.symbol);
        return true;
    });
}

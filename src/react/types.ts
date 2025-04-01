import { StockCoinInfo } from "@/scripts/stock/createStock";

export interface PrinciplesCardInfo {
    header: string;
    text: string;
    icon: string;
}

export interface CoinRowInfo {
    imageLink: string;
    id: number;
    name: string;
    symbol: string;
    price: number;
    changePercent: number;
    marketCap: number;
}

export interface CheckBoxInfo {
    checked: boolean;
    name: string;
}

export interface VisualizationBlocksInfo {
    index: number;
    coins: StockCoinInfo[];
    marketCap: number;
}

export interface APRInfo {
    value?: number;
    canStake: boolean;
    minValue?: number;
    dayToTake?: number;
    bonus?:
        | {
              to: number;
              APR: number;
          }
        | undefined;
}

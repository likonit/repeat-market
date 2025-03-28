import TooltipPotral from "@/react/sections/Tooltip/TooltipPortal";
import { StockCoinInfo } from "@/scripts/stock/createStock";
import * as style from "@/styles/Struct/Stock/stocklist.module.css";
import CoinCardAPR from "./CoinCardAPR";

export default function StockCoinCard({ coin }: { coin: StockCoinInfo }) {
    return (
        <div className={style.stocklist__coinCard}>
            <div>
                <img
                    alt={coin.symbol}
                    width={50}
                    height={50}
                    src={coin.imageLink}
                ></img>
            </div>
            <div>
                <p>{coin.name}</p>
                <p>{coin.symbol}</p>
                <p>{coin.usdValue.toFixed(2)} $</p>
                <p>
                    {coin.coinValue.toFixed(10)} {coin.symbol}
                </p>
            </div>
            <div>
                <p>{(coin.weight * 100).toFixed(2)}%</p>
            </div>
            <div>
                {coin.APR.canStake ? (
                    <CoinCardAPR coin={coin}></CoinCardAPR>
                ) : (
                    "—"
                )}{" "}
            </div>
        </div>
    );
}

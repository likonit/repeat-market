import { StockCoinInfo } from "@/scripts/stock/createStock";
import * as style from "@/styles/Struct/Stock/stocklist.module.css";
import CoinCardAPR from "./APR_Block/CoinCardAPR";

export default function StockCoinCard({ coin }: { coin: StockCoinInfo }) {
    return (
        <div className={style.stocklist__coinCard}>
            <div className={style.stocklist__coinCard__imageBlock}>
                <img
                    alt={coin.symbol}
                    width={50}
                    height={50}
                    src={coin.imageLink}
                ></img>
            </div>
            <div className={style.stocklist__coinCard__mainInfo}>
                <div>
                    <p className={style.stocklist__coinCard__mainInfo__name}>
                        {`${coin.name} `}
                        <span color="#403A3A">|</span>
                        {` ${coin.symbol}`}
                    </p>
                    <p
                        className={
                            style.stocklist__coinCard__mainInfo__usdValue
                        }
                    >
                        {coin.usdValue.toFixed(2)} $
                    </p>
                    <p className={style.stocklist__coinCard__mainInfo__value}>
                        {coin.coinValue.toFixed(12)} {coin.symbol}
                    </p>
                </div>
            </div>
            <div className={style.stocklist__coinCard__weight}>
                <p>{(coin.weight * 100).toFixed(2)}%</p>
            </div>
            <div className={style.stocklist__coinCard__APR}>
                {coin.APR.canStake ? (
                    <CoinCardAPR coin={coin}></CoinCardAPR>
                ) : (
                    "—"
                )}{" "}
            </div>
        </div>
    );
}

import { StockCoinInfo } from "@/scripts/stock/createStock";
import * as style from "@/styles/Struct/Visualization/marketCapBlock.module.css";

export default function CoinTip({ coin }: { coin: StockCoinInfo }) {
    return (
        <div className={style.marketCapTooltip}>
            {coin.imageLink.length > 0 ? (
                <p>
                    <img src={coin.imageLink} width={30} height={30}></img>
                </p>
            ) : (
                <></>
            )}
            <p>{(coin.weight * 100).toFixed(2)}%</p>
        </div>
    );
}

import TooltipPotral from "@/react/sections/Tooltip/TooltipPortal";
import { StockCoinInfo } from "@/scripts/stock/createStock";
import * as style from "@/styles/Struct/Stock/stocklist.module.css";

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
                <p>
                    {coin.APR.canStake ? (
                        <>
                            <p>{coin.APR.value?.toFixed(2) + "%"}</p>
                            <TooltipPotral>
                                <div style={{ width: 30, height: 30 }}>
                                    min stake value: {coin.APR.minValue}
                                </div>
                            </TooltipPotral>
                        </>
                    ) : (
                        "—"
                    )}{" "}
                </p>
            </div>
        </div>
    );
}

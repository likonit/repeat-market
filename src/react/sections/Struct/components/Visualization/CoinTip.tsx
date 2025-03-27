import { StockCoinInfo } from "@/scripts/stock/createStock";

export default function CoinTip({
    coin,
    x,
    y,
}: {
    coin: StockCoinInfo;
    x: number;
    y: number;
}) {
    return (
        <div
            style={{
                position: "fixed",
                width: "50px",
                height: "50px",
                background: "#6F9CF6",
                opacity: 0.9,
                top: y - 60 + "px",
                left: x - 25 + "px",
            }}
        >
            {coin.imageLink.length > 0 ? (
                <p>
                    <img src={coin.imageLink} width={30} height={30}></img>
                </p>
            ) : (
                <></>
            )}
            <p style={{ color: "white" }}>{(coin.weight * 100).toFixed(2)}%</p>
        </div>
    );
}

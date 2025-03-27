import { StockCoinInfo } from "@/scripts/stock/createStock";

export default function CoinTip({ coin }: { coin: StockCoinInfo }) {
    return (
        <div
            style={{
                width: "50px",
                height: "50px",
                background: "#6F9CF6",
                opacity: 0.9,
                zIndex: -2,
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

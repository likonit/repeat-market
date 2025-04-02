import { StockCoinInfo } from "@/scripts/stock/createStock";
import { saveAs } from "file-saver";

export default function DonwloadJson({ coins }: { coins: StockCoinInfo[] }) {
    return (
        <div>
            <a
                onClick={() => {
                    const jsonData: {
                        name: string;
                        usdValue: number;
                        coinValue: number;
                        weight: number;
                    }[] = coins.map((item) => {
                        return {
                            name: item.name,
                            usdValue: item.usdValue,
                            coinValue: item.coinValue,
                            weight: +(item.weight * 100).toFixed(2),
                        };
                    });
                    const blob = new Blob([JSON.stringify(jsonData)], {
                        type: "application/json",
                    });

                    saveAs(blob, "stock.json");
                }}
            >
                Скачать портфель в{" "}
                <span style={{ color: "#4BABD8" }}>JSON</span>
            </a>
        </div>
    );
}

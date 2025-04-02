import { StockCoinInfo } from "@/scripts/stock/createStock";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
export default function DonwloadExcel({ coins }: { coins: StockCoinInfo[] }) {
    return (
        <div>
            <a
                onClick={() => {
                    const headers = [
                        {
                            name: "Монета",
                            coinValue: "Количество",
                            usdValue: "Количество (USD)",
                            weight: "Доля портфеля",
                        },
                    ];

                    const worksheetData = [
                        ...headers,
                        ...coins.map((item) => ({
                            name: item.name,
                            coinValue: item.coinValue,
                            usdValue: item.usdValue,
                            weight: item.weight,
                        })),
                    ];

                    const worksheet = XLSX.utils.json_to_sheet(worksheetData, {
                        skipHeader: true,
                    });

                    const workbook = XLSX.utils.book_new();
                    XLSX.utils.book_append_sheet(workbook, worksheet, "Coins");

                    const excelBuffer = XLSX.write(workbook, {
                        bookType: "xlsx",
                        type: "array",
                    });

                    const blob = new Blob([excelBuffer], {
                        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    });

                    saveAs(blob, "stock.xlsx");
                }}
            >
                Скачать портфель в{" "}
                <span style={{ color: "#209E62" }}>Excel</span>
            </a>
        </div>
    );
}

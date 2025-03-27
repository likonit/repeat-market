import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import StockCoinCard from "./CoinCard";

export default function StockDescription() {
    const { stockList } = useSelector(
        (store: RootState) => store.currenciesSlice
    );

    return (
        <div>
            {stockList.map((item, i) => {
                return <StockCoinCard key={i} coin={item}></StockCoinCard>;
            })}
        </div>
    );
}

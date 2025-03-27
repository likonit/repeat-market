import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function StockDescription() {
    const { stockList } = useSelector(
        (store: RootState) => store.currenciesSlice
    );

    return <div></div>;
}

import DonwloadExcel from "./DonwloadOptions/Excel";
import DonwloadJson from "./DonwloadOptions/Json";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Download() {
    const coins = useSelector(
        (store: RootState) => store.currenciesSlice.stockList
    );
    return (
        <article>
            <DonwloadExcel coins={coins}></DonwloadExcel>
            <DonwloadJson coins={coins}></DonwloadJson>
        </article>
    );
}

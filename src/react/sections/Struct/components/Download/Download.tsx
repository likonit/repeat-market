import DonwloadExcel from "./DonwloadOptions/Excel";
import DonwloadJson from "./DonwloadOptions/Json";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import * as style from "@/styles/Struct/Stock/download.module.css";

export default function Download() {
    const coins = useSelector(
        (store: RootState) => store.currenciesSlice.stockList
    );
    return (
        <article className={style.downloadBlock}>
            <DonwloadExcel coins={coins}></DonwloadExcel>
            <DonwloadJson coins={coins}></DonwloadJson>
        </article>
    );
}

import { fetchCurrencies } from "../../../store/currenciesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { CoinRowInfo } from "@/react/types";
import CoinColumn from "./components/Column/Column";

export default function Coins() {
    const dispatch = useDispatch<AppDispatch>();
    const coins: CoinRowInfo[] = useSelector(
        (store: RootState) => store.currenciesSlice.coinsList
    );
    useEffect(() => {
        (async function () {
            dispatch(fetchCurrencies());
        })();
    }, []);
    return (
        <section>
            <h1>Что будет входить в портфель</h1>
            {coins.map((item, i) => {
                return <CoinColumn info={item} key={i}></CoinColumn>;
            })}
        </section>
    );
}

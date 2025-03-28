import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import StockCoinCard from "./CoinCard";
import { changeModalVisibility } from "@/store/modalSlice";
import * as style from "@/styles/Struct/Stock/stocklist.module.css";
import ModalWindowPotral from "@/react/sections/Modal/ModalWindowPortal";
import { setTooltipZindex } from "@/store/tooltipSlice";

export default function StockDescription() {
    const { stockList } = useSelector(
        (store: RootState) => store.currenciesSlice
    );
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        dispatch(setTooltipZindex(2));
                        dispatch(changeModalVisibility());
                    }}
                >
                    Показать портфель
                </button>
            </div>
            <ModalWindowPotral>
                <div className={style.stocklist}>
                    {stockList.map((item, i) => {
                        return (
                            <StockCoinCard key={i} coin={item}></StockCoinCard>
                        );
                    })}
                </div>
            </ModalWindowPotral>
        </div>
    );
}

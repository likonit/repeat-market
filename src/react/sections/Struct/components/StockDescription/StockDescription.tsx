import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import StockCoinCard from "./CoinCard";
import { changeModalVisibility } from "@/store/modalSlice";
import * as style from "@/styles/Struct/Stock/stocklist.module.css";
import * as globalStyle from "@/styles/index.module.css";
import ModalWindowPotral from "@/react/sections/Modal/ModalWindowPortal";
import { setTooltipZindex } from "@/store/tooltipSlice";

export default function StockDescription() {
    const { stockList } = useSelector(
        (store: RootState) => store.currenciesSlice
    );
    const dispatch = useDispatch();

    return (
        <div>
            <div className={style.button_block}>
                <button
                    className={globalStyle.blueButton}
                    onClick={() => {
                        dispatch(setTooltipZindex(2));
                        dispatch(changeModalVisibility());
                    }}
                >
                    Посмотреть составленный портфель
                </button>
            </div>
            <ModalWindowPotral>
                <div className={style.stocklist}>
                    <div className={style.stocklist__headers}>
                        <h3>Лого</h3>
                        <h3>Информация</h3>
                        <h3>Доля</h3>
                        <h3>Доходность</h3>
                    </div>
                    <div>
                        {stockList.map((item, i) => {
                            return (
                                <StockCoinCard
                                    key={i}
                                    coin={item}
                                ></StockCoinCard>
                            );
                        })}
                    </div>
                </div>
            </ModalWindowPotral>
        </div>
    );
}

import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import StockCoinCard from "./CoinCard";
import { setModalVisibility } from "@/store/modalSlice";
import * as style from "@/styles/Struct/Stock/stocklist.module.css";
import * as globalStyle from "@/styles/index.module.css";
import ModalWindowPotral from "@/react/sections/Modal/ModalWindowPortal";
import { setTooltipVisibility, setTooltipZindex } from "@/store/tooltipSlice";
import { useEffect, useRef } from "react";

export default function StockDescription() {
    const { stockList } = useSelector(
        (store: RootState) => store.currenciesSlice
    );
    const scrollItem = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        function handleScroll() {
            dispatch(setTooltipVisibility(false));
        }

        scrollItem.current?.addEventListener("scroll", handleScroll);

        return () => {
            scrollItem.current?.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <div>
            <div className={style.button_block}>
                <button
                    className={globalStyle.blueButton}
                    onClick={() => {
                        dispatch(setTooltipZindex(2));
                        dispatch(setModalVisibility(true));
                    }}
                >
                    Посмотреть составленный портфель
                </button>
            </div>
            <ModalWindowPotral>
                <div className={style.stocklist} ref={scrollItem}>
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

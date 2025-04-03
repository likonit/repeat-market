import { createStockList } from "@/store/currenciesSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import * as style from "@/styles/Struct/Visualization/section.module.css";
import smoothScrollTo from "@/scripts/helpers/dom/scrollToElement";
import { setErrorText, setErrorVisibility } from "@/store/modalSlice";

export default function StructButton({
    setVisualizationVisible,
}: {
    setVisualizationVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const { input, fields } = useSelector(
        (store: RootState) => store.inputSlice
    );
    const dispatch = useDispatch();

    return (
        <div className={style.struct__button}>
            <button
                onClick={() => {
                    if (input < 5) {
                        dispatch(setErrorVisibility(true));
                        dispatch(setErrorText("Минимальный бюджет - 5$."));
                        return;
                    }
                    dispatch(
                        createStockList({
                            fields,
                            budget: input,
                        })
                    );
                    setVisualizationVisible(true);

                    setTimeout(() => {
                        const element =
                            document.getElementById("visualization");
                        if (element)
                            smoothScrollTo(element, {
                                correction: -100,
                                duration: 300,
                            });
                    }, 50);
                }}
            >
                Составить портфель
            </button>
        </div>
    );
}

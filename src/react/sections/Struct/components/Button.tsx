import { createStockList } from "@/store/currenciesSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

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
        <button
            onClick={() => {
                dispatch(
                    createStockList({
                        fields,
                        budget: input,
                    })
                );
                setVisualizationVisible(true);
            }}
        >
            Составить портфель
        </button>
    );
}

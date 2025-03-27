import { CheckBoxInfo } from "@/react/types";
import { changeFieldsValue } from "@/store/inputSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
export default function StructCheckboxBlock({
    info,
    index,
}: {
    info: CheckBoxInfo;
    index: 0 | 1 | 2;
}) {
    const checked = useSelector(
        (store: RootState) => store.inputSlice.fields[index]
    );
    const dispatch = useDispatch();

    return (
        <div>
            <label>
                {info.name}
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => {
                        dispatch(changeFieldsValue({ index, value: !checked }));
                    }}
                ></input>
            </label>
        </div>
    );
}

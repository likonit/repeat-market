import { CheckBoxInfo } from "@/react/types";
import StructCheckboxBlock from "./CheckboxBlock";
import { useDispatch } from "react-redux";
import { changeInput } from "@/store/inputSlice";
import StructButton from "./Button";

export default function StructInputBlock({
    setVisualizationVisible,
}: {
    setVisualizationVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const dispatch = useDispatch();
    const checkBoxes: CheckBoxInfo[] = [
        {
            name: "Не учитывать мемкоины",
            checked: true,
        },
        {
            name: "Не учитывать стейблкоины",
            checked: true,
        },
        {
            name: "Только монеты с Bybit earn (стейкинг, ончейн и т.д.)",
            checked: false,
        },
    ];

    return (
        <div>
            <h3>Сколько $ вы готовы вложить?</h3>
            <input
                type="number"
                placeholder="$$$"
                onChange={(event) => {
                    dispatch(changeInput(event.currentTarget.value));
                }}
            />
            <div>
                {checkBoxes.map((item, i) => {
                    return (
                        <StructCheckboxBlock
                            key={i}
                            info={item}
                            index={i as 0 | 1 | 2}
                        ></StructCheckboxBlock>
                    );
                })}
            </div>
            <StructButton
                setVisualizationVisible={setVisualizationVisible}
            ></StructButton>
        </div>
    );
}

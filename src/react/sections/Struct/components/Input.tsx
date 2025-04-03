import { CheckBoxInfo } from "@/react/types";
import StructCheckboxBlock from "./CheckboxBlock";
import { useDispatch } from "react-redux";
import { changeInput } from "@/store/inputSlice";
import StructButton from "./Button";
import * as style from "@/styles/Struct/Visualization/section.module.css";

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
        name: "Только монеты с Bybit Earn (стейкинг, ончейн и т.д.)",
        checked: false,
    },
];

export default function StructInputBlock({
    setVisualizationVisible,
}: {
    setVisualizationVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const dispatch = useDispatch();

    return (
        <div className={style.visualizationBlock}>
            <div className={style.visualizationBlock__container}>
                <div className={style.visualizationBlock__container__block}>
                    <h3>
                        Какую сумму вы готовы вложить? <span>(в USD)</span>
                    </h3>
                    <input
                        className={style.visualizationBlock__usdInput}
                        type="number"
                        placeholder="Введите сумму"
                        onChange={(event) => {
                            dispatch(changeInput(event.currentTarget.value));
                        }}
                    />
                </div>
                <div className={style.visualizationBlock__container__block}>
                    <h3>Отфильтруйте монеты</h3>
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
                </div>
            </div>
            <StructButton
                setVisualizationVisible={setVisualizationVisible}
            ></StructButton>
        </div>
    );
}

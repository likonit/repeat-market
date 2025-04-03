import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as style from "@/styles/Modal/error.module.css";
import { setErrorVisibility } from "@/store/modalSlice";

export default function ErrorPopup() {
    const { errorVisible, errorMessage } = useSelector(
        (store: RootState) => store.modalSlice
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (!errorVisible) return;
        setTimeout(() => {
            dispatch(setErrorVisibility(false));
        }, 2500);
    }, [errorVisible]);

    return (
        <div
            className={
                errorVisible
                    ? style.errorModal_active
                    : style.errorModal_noactive
            }
        >
            <div>{errorMessage}</div>
        </div>
    );
}

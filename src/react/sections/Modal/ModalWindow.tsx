import { useEffect, useRef } from "react";
import * as style from "@/styles/Modal/modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { changeModalVisibility } from "@/store/modalSlice";

export default function ModalWindow() {
    const { visible } = useSelector((store: RootState) => store.modalSlice);
    const insideTarget = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    console.log(visible);

    useEffect(() => {
        function handleEscape(event: KeyboardEvent) {
            if (!visible) return;
            if (event.key === "Escape") {
                dispatch(changeModalVisibility());
            }
        }

        function handleOutsideClick(event: MouseEvent) {
            if (!visible) return;
            if (
                insideTarget.current &&
                !insideTarget.current.contains(event.target as Node)
            ) {
                dispatch(changeModalVisibility());
            }
        }

        container.current?.addEventListener("click", handleOutsideClick);
        document.addEventListener("keydown", handleEscape);

        return () => {
            container.current?.removeEventListener("click", handleOutsideClick);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [visible]);

    return (
        <div
            className={style.modalWindowContainer}
            style={!visible ? { display: "none" } : {}}
            ref={container}
        >
            <div
                className={style.modalWindowContainer__action}
                id="modalWindow"
                ref={insideTarget}
            ></div>
        </div>
    );
}

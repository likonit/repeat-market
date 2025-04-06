import { useSelector } from "react-redux";
import About from "../sections/About/About";
import Header from "../sections/Header/Header";
import ModalWindow from "../sections/Modal/ModalWindow";
import Principles from "../sections/Principles/Principles";
import Struct from "../sections/Struct/Struct";
import { RootState } from "@/store/store";
import Tooltip from "../sections/Tooltip/Tooltip";
import * as style from "@/styles/bg.module.css";
import "@/styles/index.module.css";
import Footer from "../sections/Footer";
import ErrorPopup from "../sections/Modal/Error/ErrorPopup";
import { useEffect } from "react";

export default function App() {
    const isVisibleOverflow = useSelector(
        (store: RootState) => store.modalSlice.visible
    );

    document.getElementsByTagName("body")[0].style.overflowY = isVisibleOverflow
        ? "hidden"
        : "auto";

    useEffect(() => {
        const rootElement = document.documentElement;

        function onResizeEvent() {
            const activeEl = document.activeElement;
            const isInputFocused =
                activeEl &&
                (activeEl.tagName === "INPUT" ||
                    activeEl.getAttribute("contenteditable") === "true");

            if (!isInputFocused) {
                const value = window.visualViewport
                    ? window.visualViewport.height * 0.01
                    : window.innerHeight * 0.01;
                rootElement.style.setProperty("--vh", value + "px");
            }
        }

        onResizeEvent();
    }, []);

    return (
        <>
            <div className={style.bg_header_about}>
                <Header></Header>
                <About></About>
                <Principles></Principles>
            </div>
            <div className={style.bg_main}>
                <Struct></Struct>
                <Footer></Footer>
            </div>
            <ModalWindow></ModalWindow>
            <Tooltip></Tooltip>
            <ErrorPopup></ErrorPopup>
        </>
    );
}

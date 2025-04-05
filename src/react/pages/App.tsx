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
            rootElement.style.setProperty(
                "--vh",
                window.innerHeight * 0.01 + "px"
            );
        }

        onResizeEvent();

        // window.addEventListener("resize", onResizeEvent);

        // return () => {
        //     window.removeEventListener("resize", onResizeEvent);
        // };
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

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
import { useEffect } from "react";

export default function App() {
    const isVisibleOverflow = useSelector(
        (store: RootState) => store.modalSlice.visible
    );

    document.getElementsByTagName("body")[0].style.overflowY = isVisibleOverflow
        ? "hidden"
        : "auto";

    // useEffect(() => {
    //     const hash = window.location.hash.slice(1);
    //     if (hash) {
    //         const element = document.getElementById(hash);
    //         if (element) {
    //             element.scrollIntoView({
    //                 behavior: "smooth",
    //                 block: hash == "visualization" ? "nearest" : "center",
    //             });
    //         }
    //     }
    // }, []);

    return (
        <>
            <div className={style.bg_header_about}>
                <Header></Header>
                <About></About>
                <Principles></Principles>
            </div>
            <div className={style.bg_main}>
                <Struct></Struct>
            </div>
            <ModalWindow></ModalWindow>
            <Tooltip></Tooltip>
        </>
    );
}

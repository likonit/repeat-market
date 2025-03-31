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

export default function App() {
    const isVisibleOverflow = useSelector(
        (store: RootState) => store.modalSlice.visible
    );

    document.getElementsByTagName("body")[0].style.overflowY = isVisibleOverflow
        ? "hidden"
        : "auto";
    return (
        <>
            <div className={style.bg_header_about}>
                <Header></Header>
                <About></About>
            </div>
            <div className={style.bg_main}>
                <Principles></Principles>
                <Struct></Struct>
            </div>
            <ModalWindow></ModalWindow>
            <Tooltip></Tooltip>
        </>
    );
}

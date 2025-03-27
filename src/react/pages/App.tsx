import { useSelector } from "react-redux";
import About from "../sections/About/About";
import Header from "../sections/Header/Header";
import ModalWindow from "../sections/Modal/ModalWindow";
import Principles from "../sections/Principles/Principles";
import Struct from "../sections/Struct/Struct";
import { RootState } from "@/store/store";
import Tooltip from "../sections/Tooltip/Tooltip";

export default function App() {
    const isVisibleOverflow = useSelector(
        (store: RootState) => store.modalSlice.visible
    );

    document.getElementsByTagName("body")[0].style.overflowY = isVisibleOverflow
        ? "hidden"
        : "auto";
    return (
        <>
            <Header></Header>
            <About></About>
            <Principles></Principles>
            {/* <Coins></Coins> */}
            <Struct></Struct>
            <ModalWindow></ModalWindow>
            <Tooltip></Tooltip>
        </>
    );
}

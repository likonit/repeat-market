import About from "../sections/About/About";
import Coins from "../sections/Coins/Coins";
import Header from "../sections/Header/Header";
import Principles from "../sections/Principles/Principles";
import Struct from "../sections/Struct/Struct";

export default function App() {
    return (
        <>
            <Header></Header>
            <About></About>
            <Principles></Principles>
            {/* <Coins></Coins> */}
            <Struct></Struct>
        </>
    );
}

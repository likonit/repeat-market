import { CoinRowInfo } from "@/react/types";
import ChangeCoinPrice from "./ChangePrice";

export default function CoinColumn({ info }: { info: CoinRowInfo }) {
    return (
        <div>
            <div>
                <span>{info.id}</span>
            </div>
            <div>
                {/* <img src={info.imageLink} alt={info.name + " image"}></img> */}
            </div>
            <div>{info.name}</div>
            <div>{info.price}</div>
            <ChangeCoinPrice percent={info.changePercent}></ChangeCoinPrice>
        </div>
    );
}

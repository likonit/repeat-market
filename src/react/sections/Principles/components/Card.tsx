import { PrinciplesCardInfo } from "@/react/types";

export default function PrinciplesCard({ info }: { info: PrinciplesCardInfo }) {
    return (
        <div>
            <h3>{info.header}</h3>
            <p>{info.text}</p>
            <div>{info.icon}</div>
        </div>
    );
}

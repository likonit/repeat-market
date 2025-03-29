import * as style from "@/styles/Struct/Stock/hoverblock.module.css";

export default function CoinCardAPRHoverBlockRow({
    paragraphName,
    paragraphText,
    isMini,
}: {
    paragraphName: string | undefined;
    paragraphText: string;
    isMini: boolean;
}) {
    return (
        <div
            className={
                isMini
                    ? style.hoverblockAPRInfo__rowMini
                    : style.hoverblockAPRInfo__row
            }
        >
            {paragraphName ? <strong>{paragraphName}: </strong> : <></>}
            {paragraphText}
        </div>
    );
}

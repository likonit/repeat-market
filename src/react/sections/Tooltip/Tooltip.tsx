import { MOBILE_START_WIDTH } from "@/scripts/constants/cssConstants";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Tooltip() {
    const { visible, correction, zIndex } = useSelector(
        (store: RootState) => store.tooltipSlice
    );
    const [pos, setPos] = useState({ x: 0, y: 0 });

    let lastTimeChecked = new Date().getTime();

    useEffect(() => {
        function handleMouseClick(event: MouseEvent) {
            setPos({ x: event.clientX, y: event.clientY });
        }

        function handleMouseMove(event: MouseEvent) {
            requestAnimationFrame(() => {
                setPos({ x: event.clientX, y: event.clientY });
            });
        }

        if (window.innerWidth >= MOBILE_START_WIDTH)
            document.addEventListener("mousemove", handleMouseMove);
        else {
            window.addEventListener("click", handleMouseClick);
        }

        return () => {
            if (window.innerWidth >= MOBILE_START_WIDTH)
                document.removeEventListener("mousemove", handleMouseMove);
            else {
                window.removeEventListener("click", handleMouseClick);
            }
        };
    }, [lastTimeChecked, visible]);
    return (
        <div
            id="tooltip"
            style={
                visible
                    ? {
                          position: "fixed",
                          top: pos.y + correction.y + "px",
                          left: pos.x + correction.x + "px",
                          zIndex,
                          pointerEvents: "none",
                      }
                    : { display: "none" }
            }
        ></div>
    );
}

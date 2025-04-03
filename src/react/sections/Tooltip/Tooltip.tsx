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
        const FPS_visible = 1000 / 120;
        const FPS_invisible = 1000 / 30;

        function handleMouseClick(event: MouseEvent) {
            setPos({ x: event.clientX, y: event.clientY });
        }

        function handleMouseMove(event: MouseEvent) {
            if (
                new Date().getTime() - lastTimeChecked >
                (visible ? FPS_visible : FPS_invisible)
            ) {
                lastTimeChecked = new Date().getTime();
                setPos({ x: event.clientX, y: event.clientY });
            }
        }

        if (window.innerWidth >= MOBILE_START_WIDTH)
            document.addEventListener("mousemove", handleMouseMove);
        else {
            document.addEventListener("click", handleMouseClick);
        }

        return () => {
            if (window.innerWidth >= MOBILE_START_WIDTH)
                document.removeEventListener("mousemove", handleMouseMove);
            else {
                document.removeEventListener("click", handleMouseClick);
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

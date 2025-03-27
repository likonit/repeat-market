import { RootState } from "@/store/store";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function Tooltip() {
    const { visible, correction } = useSelector(
        (store: RootState) => store.tooltipSlice
    );
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const FPS = 1000 / 90;

    let lastTimeChecked = new Date().getTime();

    console.log(visible);

    useEffect(() => {
        function handleMouseMove(event: MouseEvent) {
            // if (!visible) return;
            if (new Date().getTime() - lastTimeChecked > FPS) {
                lastTimeChecked = new Date().getTime();
                setPos({ x: event.clientX, y: event.clientY });
            }
        }

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
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
                          zIndex: -3,
                      }
                    : { display: "none" }
            }
        ></div>
    );
}

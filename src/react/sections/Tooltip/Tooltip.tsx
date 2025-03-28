import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Tooltip() {
    const { visible, correction, zIndex } = useSelector(
        (store: RootState) => store.tooltipSlice
    );
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const FPS = 1000 / 120;

    let lastTimeChecked = new Date().getTime();

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
                          zIndex,
                          pointerEvents: "none",
                      }
                    : { display: "none" }
            }
        ></div>
    );
}

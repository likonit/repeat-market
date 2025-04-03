import { MOBILE_START_WIDTH } from "@/scripts/constants/cssConstants";
import {
    setCorrection,
    setTooltipVisibility,
    setTooltipZindex,
} from "@/store/tooltipSlice";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

export default function TooltipContainer({
    children,
    zIndex,
    mouseInAction,
    mouseOutAction,
}: {
    children: React.ReactElement;
    zIndex: number;
    mouseInAction: (...args: any) => any;
    mouseOutAction: (...args: any) => any;
}) {
    const target = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();

    // что-то типа троттлинга.
    useEffect(() => {
        dispatch(setTooltipZindex(zIndex));

        function handleMouseIn() {
            dispatch(setTooltipVisibility(true));
            mouseInAction(true);
        }

        function handleMouseLeave() {
            dispatch(setTooltipVisibility(false));
            mouseOutAction(false);
        }

        target.current?.addEventListener("mouseenter", handleMouseIn);
        target.current?.addEventListener("mouseleave", handleMouseLeave);

        if (window.innerWidth <= MOBILE_START_WIDTH) {
            window.addEventListener("scroll", handleMouseLeave);
        }
        return () => {
            target.current?.removeEventListener("mouseenter", handleMouseIn);
            target.current?.removeEventListener("mouseleave", handleMouseLeave);

            if (window.innerWidth <= MOBILE_START_WIDTH) {
                window.removeEventListener("scroll", handleMouseLeave);
            }
        };
    }, []);

    return <span ref={target}>{children}</span>;
}

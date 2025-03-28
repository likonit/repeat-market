import {
    setCorrection,
    setTooltipVisibility,
    setTooltipZindex,
} from "@/store/tooltipSlice";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

export default function TooltipContainer({
    children,
    stylesInfo,
    mouseInAction,
    mouseOutAction,
}: {
    children: React.ReactElement;
    stylesInfo: { x: number; y: number; zIndex: number };
    mouseInAction: (...args: any) => any;
    mouseOutAction: (...args: any) => any;
}) {
    const target = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();
    // что-то типа троттлинга.
    useEffect(() => {
        dispatch(setCorrection({ x: stylesInfo.x, y: stylesInfo.y }));
        dispatch(setTooltipZindex(stylesInfo.zIndex));

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

        return () => {
            target.current?.removeEventListener("mouseenter", handleMouseIn);
            target.current?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return <div ref={target}>{children}</div>;
}

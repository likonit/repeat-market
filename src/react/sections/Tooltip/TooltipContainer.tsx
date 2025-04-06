import useThrottle from "@/react/hooks/useThrottle";
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
    const throttle = useThrottle();

    useEffect(() => {
        dispatch(setTooltipZindex(zIndex));

        function handleMouseIn() {
            dispatch(setTooltipVisibility(true));
            mouseInAction();
        }

        function handleScroll() {
            throttle(handleMouseLeave);
        }

        function handleMouseLeave() {
            dispatch(setTooltipVisibility(false));
            mouseOutAction();
        }

        function handleClickOutside(event: MouseEvent) {
            if (target.current && target.current.firstChild != event.target) {
                mouseOutAction();
            } else {
                mouseInAction();
            }
        }

        if (window.innerWidth <= MOBILE_START_WIDTH) {
            window.addEventListener("scroll", handleScroll);
            target.current?.addEventListener("click", handleMouseIn);
            document.addEventListener("click", handleClickOutside);
        } else {
            target.current?.addEventListener("mouseenter", handleMouseIn);
            target.current?.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (window.innerWidth <= MOBILE_START_WIDTH) {
                window.removeEventListener("scroll", handleScroll);
                target.current?.removeEventListener("click", handleMouseIn);
                document.removeEventListener("click", handleClickOutside);
            } else {
                target.current?.removeEventListener(
                    "mouseenter",
                    handleMouseIn
                );
                target.current?.removeEventListener(
                    "mouseleave",
                    handleMouseLeave
                );
                target.current?.removeEventListener("click", handleMouseIn);
            }
        };
    }, []);

    return <span ref={target}>{children}</span>;
}

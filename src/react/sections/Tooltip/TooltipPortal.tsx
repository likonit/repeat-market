import { RootState } from "@/store/store";
import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

export default function TooltipPotral({
    children,
}: {
    children: React.ReactElement;
}) {
    const { visible } = useSelector((store: RootState) => store.tooltipSlice);
    const container = document.getElementById("tooltip");
    return visible
        ? container
            ? createPortal(children, container)
            : null
        : null;
}

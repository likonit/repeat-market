import { RootState } from "@/store/store";
import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

export default function ModalWindowPotral({
    children,
}: {
    children: React.ReactElement;
}) {
    const { visible } = useSelector((store: RootState) => store.modalSlice);
    const container = document.getElementById("modalWindow");
    return visible
        ? container
            ? createPortal(children, container)
            : null
        : null;
}

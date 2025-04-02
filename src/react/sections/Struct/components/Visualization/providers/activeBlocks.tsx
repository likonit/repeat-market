import { createContext, useState } from "react";
import React from "react";

export interface ActiveBlock {
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
}
export const ActiveBlockContext = createContext<ActiveBlock | undefined>(
    undefined
);

export default function ActiveBlockProvider({
    children,
}: {
    children: React.ReactElement;
}) {
    const [index, setIndex] = useState<number>(-1);
    return (
        <ActiveBlockContext.Provider value={{ index, setIndex }}>
            {children}
        </ActiveBlockContext.Provider>
    );
}

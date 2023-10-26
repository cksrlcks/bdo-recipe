"use client";
import React from "react";
import { SWRConfig } from "swr";
export default function SWRConfigContext({ children }) {
    return (
        <SWRConfig
            value={{
                fetcher: (resource) => fetch(resource).then((res) => res.json()),
            }}
        >
            {children}
        </SWRConfig>
    );
}

"use client";
import React from "react";
import { ItemProvider } from "./ItemContext";

export default function Provider({ children }) {
    return <ItemProvider>{children}</ItemProvider>;
}

import { createContext, useState } from "react";

export const NameContext = createContext({});

export function NameContextProvider({children}){
    const [name, setName] = useState(null);
    
}
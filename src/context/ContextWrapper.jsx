import {Provider} from "./index";
import React, {useEffect, useState} from "react";

export const ContextWrapper = ({ children }) => {
    const [lists, setLists] = useState(JSON.parse(localStorage.getItem('lists') || '{}'));
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(lists))
    }, [lists])
    return (
        <Provider value={{lists, setLists}}>
            {children}
        </Provider>
)}


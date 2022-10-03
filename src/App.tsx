import React from "react";
import ToDo from "./to-do/components";
import {FC} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Weather from "./weather";
import Links from "./ links";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Links />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/to-do" element={<ToDo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

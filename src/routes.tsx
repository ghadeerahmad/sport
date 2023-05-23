import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import('./pages/Home.tsx'));


export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>

    )
}
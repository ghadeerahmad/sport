import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import('./pages/Home.tsx'));
const HomeFixtures = React.lazy(() => import('./pages/fixtures/HomeFixtures.tsx'));

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<HomeFixtures />} />
        </Routes>

    )
}
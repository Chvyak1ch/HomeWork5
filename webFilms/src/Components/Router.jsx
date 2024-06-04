import React from "react";
import ListFilms from "../List/ListFilms";
import InfoToFilm from "./InfoToFilm";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import FindPageFilm from "./FindPageFilm";


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<ListFilms />} path="/" />
            <Route element={<InfoToFilm />} path="/films/:id"/>
            <Route element={<FindPageFilm />} path="/find"/>
        </Routes>
    </BrowserRouter>

)

export default Router;
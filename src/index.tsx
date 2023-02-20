import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainMenu} from "./view/pages/MainMenu/MainMenu";
import {store} from "./model/store";
import {Provider} from "react-redux";
import GameCollection from "./view/pages/GameCollection/GameCollection";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<MainMenu/>}></Route>
                    <Route path={"/game_collection"} element={<GameCollection/>}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// CR: убрать ";" во всем проекте
// CR: Перенести компоненты в отдельную папку в /src, чтобы отделить логику дизайн системы и периспользуемых компонентов
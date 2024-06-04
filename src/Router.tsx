import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import LoginPage from "./pages/login/Login";

const Router = ()=>{

    return(
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="*" element={<h1>not found</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
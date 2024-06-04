import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import LoginPage from "./pages/login/Login";
import Footer from "./components/Footer";

const Router = ()=>{

    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="*" element={<h1>not found</h1>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;
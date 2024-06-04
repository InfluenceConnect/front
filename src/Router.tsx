import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import LoginPage from "./pages/login/Login";
import Footer from "./components/Footer";
import AccessibilityBar from "./components/AccessibilityBar";
import RegisterNicheCompany from "./pages/company/register/RegisterNiche";

const Router = ()=>{

    return(
        <BrowserRouter>
            <AccessibilityBar/>
            <Header />
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/resgisterNicheCompany" element={<RegisterNicheCompany/>}/>
                <Route path="*" element={<h1>not found</h1>}/>
                
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;
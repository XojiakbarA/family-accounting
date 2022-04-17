import { CssBaseline } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Page404 from "./pages/404"
import Dashboard from "./pages/Dashboard"
import FamilyMembers from "./pages/FamilyMembers"

const App = () => {

    return (
        <>
            <CssBaseline/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="family-members" element={<FamilyMembers/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </>
    )
}

export default App
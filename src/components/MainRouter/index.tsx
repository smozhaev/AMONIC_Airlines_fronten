import { Route, Routes } from "react-router-dom";
import WelcomePage from "../../pages/Welcome";
import Login from "../../pages/Login";
import PrivateRoute from "../PrivateRoute";
import AdminMenu from "../../pages/AdminMenu";
import ActivityTable from "../../pages/ActivitiTable";

const MainRouter = () => {
    return (
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route element={ <PrivateRoute /> }>
            <Route path="/admin_menu" element={<AdminMenu />} />
          </Route>
          <Route element={ <PrivateRoute /> }>
            <Route path="/menu" element={<ActivityTable />} />
          </Route>
        </Routes>
    );
}

export default MainRouter;
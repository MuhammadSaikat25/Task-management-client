import { Outlet } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav";

const Dashboard = () => {
    return (
        <div>
            <DashboardNav></DashboardNav>
          <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;
import Navbar from "./navbar";
import NavbarItem from "./navbarItem";
import People from "./People.svg"
import SideNavbar from "./sidenavbar";

const Dashboard = () => {
    return (
      <div>
        {/* <NavbarItem  icon={People} name="Home"  href="/"/> */}
        {/* <Navbar/> */}
        <SideNavbar/>
        <h1>Welcome to the Dashboard</h1>
        <p>This is the /dashboard route.</p>
      </div>
    );
  };
  
  export default Dashboard;
  
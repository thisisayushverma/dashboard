import Navbar from "./navbar";
import NavbarItem from "./navbarItem";
import People from "./People.svg"
import SideNavbar from "./sidenavbar";
import TrackerHori from "./trackerHori"

const Dashboard = () => {
    return (
      <div>
        {/* <NavbarItem  icon={People} name="Home"  href="/"/> */}
        {/* <Navbar/> */}
        {/* <SideNavbar/> */}
        <TrackerHori imageSrc="https://placehold.co/49x32" name="Food Safety" value={75}/>
        <h1>Welcome to the Dashboard</h1>
        <p>This is the /dashboard route.</p>
      </div>
    );
  };
  
  export default Dashboard;
  
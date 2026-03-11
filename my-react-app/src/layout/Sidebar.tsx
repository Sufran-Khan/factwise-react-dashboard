import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  
  return (
    <div style={{
      width: "70px",
      height: "100vh",
      background: "#4B1D73",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "20px"
    }}>

      <div style={{
        width: 40,
        height: 40,
        background: "white",
        borderRadius: 8,
        marginBottom: 30
      }} />

    <div style={{
        padding: "-5px"
    }}>
         <div>
        <SidebarItem label="Home" to="/" active={location.pathname === "/"} />
        {/* <SidebarItem label="Pipeline" to="/pipeline" active={location.pathname === "/pipeline"} /> */}
        {/* <SidebarItem label="Tasks" to="/tasks" active={location.pathname === "/tasks"} /> */}
        {/* <SidebarItem label="Notifications" to="/notifications" active={location.pathname === "/notifications"} /> */}
        <SidebarItem label="Reports" to="/reporting" active={location.pathname === "/reporting"} />
      </div>
    </div>

      

    </div>
  )
}

function SidebarItem({ label, to, active }: any) {
  return (
    <Link
      to={to}
      style={{ textDecoration: "none", color: "white", width: "100%" }}
    >
      <div
        style={{
          padding: "14px 0",
          width: "100%",
          textAlign: "center",
          background: active ? "#6A2EA6" : "transparent",
          border: active ? "1px solid white" : "",
          borderRadius: "8px",
          fontSize: 12
        }}
      >
        {label}
      </div>
    </Link>
  )
}
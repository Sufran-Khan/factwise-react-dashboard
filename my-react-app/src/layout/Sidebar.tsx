export default function Sidebar() {
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

      <SidebarItem label="Menu" />
      <SidebarItem label="Pipeline" active />
      <SidebarItem label="Tasks" />
      <SidebarItem label="Notifications" />
      <SidebarItem label="Reporting" />

    </div>
  )
}

function SidebarItem({ label, active }: any) {
  return (
    <div
      style={{
        padding: "14px 0",
        width: "100%",
        textAlign: "center",
        background: active ? "#6A2EA6" : "transparent",
        fontSize: 12
      }}
    >
      {label}
    </div>
  )
}
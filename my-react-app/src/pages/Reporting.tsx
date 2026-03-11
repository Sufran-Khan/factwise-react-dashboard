import Sidebar from "../layout/Sidebar"
import Header from "../layout/Header"
import DashboardStats from "../components/DashboardStats"
import { employees } from "../data/employees"

export default function Reporting() {
  return (
    <div style={{ display: "flex", background: "#F4F4F8" }}>

      <Sidebar />

      <div style={{ flex: 1, margin: "15px" }}>

        <div
      style={{
        height: 70,
        background: "white",
        display: "flex",
        alignItems: "center",
        padding: "0 30px",
        borderBottom: "1px solid #eee",
        borderRadius: "8px",
        marginBottom: "20px",
        border: "2px solid black",

      }}
    >
      <h2 style={{ margin: 0, color: "black",  }}>Factwise Employee Reports</h2>
    </div>

        {/* <div style={{ padding: "20px", background: "white", borderRadius: "6px", color: "black" }}> */}
          {/* <h2>Reports</h2> */}

          <DashboardStats employees={employees} />

        {/* </div> */}

      </div>

    </div>
  )
}
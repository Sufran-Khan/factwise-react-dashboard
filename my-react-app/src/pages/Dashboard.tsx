import DashboardStats from "../components/DashboardStats"
import EmployeeGrid from "../components/EmployeeGrid"
import { employees } from "../data/employees"



function Dashboard() {

  return (
    <div style={{ padding: "24px", background: "black"}}>
      <h2 style={{ marginBottom: "20px" }}>
        Employee Management Dashboard
      </h2>

      <DashboardStats employees={employees} />

      <EmployeeGrid employees={employees} />
    </div>
  )
}

export default Dashboard
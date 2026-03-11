import type { Employee } from "../types/employee.ts"

interface Props {
  employees: Employee[]
}

const cardStyle: React.CSSProperties = {
  padding: "16px",
  background: "rgb(75, 29, 115)",
  borderRadius: "6px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  minWidth: "160px",
  color: "white",
  textAlign: "center",
}

function DashboardStats({ employees }: Props) {

  const totalEmployees = employees.length

  const activeEmployees = employees.filter(e => e.isActive).length

  const avgRating =
    employees.reduce((sum, e) => sum + e.performanceRating, 0) /
    employees.length

  const totalProjects = employees.reduce(
    (sum, e) => sum + e.projectsCompleted,
    0
  )

  return (
    <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
      <div style={cardStyle}>
        <h4>Total Employees</h4>
        <p>{totalEmployees}</p>
      </div>

      <div style={cardStyle}>
        <h4>Active Employees</h4>
        <p>{activeEmployees}</p>
      </div>

      <div style={cardStyle}>
        <h4>Avg Performance</h4>
        <p>{avgRating.toFixed(1)}</p>
      </div>

      <div style={cardStyle}>
        <h4>Total Projects</h4>
        <p>{totalProjects}</p>
      </div>
    </div>
  )
}

export default DashboardStats
import Sidebar from "../layout/Sidebar"
import Header from "../layout/Header"
import EmployeeGrid from "../components/EmployeeGrid"
import GridToolbar from "../components/GridToolbar"
import { employees } from "../data/employees"

import { useState } from "react"

export default function Dashboard() {

  const [search, setSearch] = useState("")

  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ flex: 1, background: "#f7f7fb" }}>

        <Header />

        <div style={{ padding: 30 }}>

          <GridToolbar onSearch={setSearch} />

          <EmployeeGrid
            employees={employees}
            search={search}
          />

        </div>

      </div>

    </div>
  )
}
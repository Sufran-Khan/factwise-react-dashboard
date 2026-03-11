import Sidebar from "../layout/Sidebar"
import Header from "../layout/Header"
import EmployeeGrid from "../components/EmployeeGrid"
import GridToolbar from "../components/GridToolbar"
import { employees } from "../data/employees"

import { useState, useRef } from "react"

export default function Dashboard() {

  const [search, setSearch] = useState("")

  const gridRef = useRef<any>(null)

  const handleExport = () => {
    gridRef.current?.exportToExcel()
  }

  return (
    <div style={{ display: "flex", background: "#F4F4F8" }}>

      <Sidebar />

      <div style={{ flex: 1, background: "#F4F4F8", margin: "15px" }}>

        <Header />

        <div style={{ padding: "15px", background: "white", borderRadius: "6px" }}>

          <GridToolbar
            onSearch={setSearch}
            onExport={handleExport}
          />

          <EmployeeGrid
            ref={gridRef}
            employees={employees}
            search={search}
          />

        </div>

      </div>

    </div>
  )
}
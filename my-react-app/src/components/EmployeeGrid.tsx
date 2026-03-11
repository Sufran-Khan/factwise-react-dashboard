import { AgGridReact } from "ag-grid-react"
import { useRef, forwardRef, useImperativeHandle } from "react"
import type { Employee } from "../types/employee"
import type { ColDef, ICellRendererParams, ValueFormatterParams, ValueGetterParams } from "ag-grid-community"
import { ModuleRegistry } from "ag-grid-community"
import { ExcelExportModule } from "ag-grid-enterprise"

ModuleRegistry.registerModules([ExcelExportModule])

type Props = {
  employees: Employee[]
  search: string
}

const EmployeeGrid = forwardRef<any, Props>(({ employees, search }, ref) => {

  const gridRef = useRef<any>(null)

  const exportToExcel = () => {
    gridRef.current?.api.exportDataAsExcel({
      fileName: "employees.xlsx"
    })
  }

  useImperativeHandle(ref, () => ({
    exportToExcel
  }))

  const columnDefs: ColDef<Employee>[] = [
    { field: "id", width: 90 },

    {
      headerName: "Name",
      valueGetter: (p: ValueGetterParams<Employee>) =>
        `${p.data?.firstName} ${p.data?.lastName}`,
    },

    { field: "department" },
    { field: "position" },

    {
      field: "salary",
      valueFormatter: (p: ValueFormatterParams<Employee>) =>
        `$${p.value?.toLocaleString()}`
    },

    { field: "location" },

    {
      field: "performanceRating",
      headerName: "Rating"
    },

    {
      field: "projectsCompleted",
      headerName: "Projects"
    },

    {
      field: "isActive",
      headerName: "Status",
      cellRenderer: (p: ICellRendererParams<Employee>) =>
        p.value ? "🟢 Active" : "🔴 Inactive"
    }
  ]

  const defaultColDef: ColDef<Employee> = {
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true
  }

  return (
    <div className="ag-theme-alpine" style={{ height: 500 }}>
      <AgGridReact
        ref={gridRef}
        rowData={employees}
        quickFilterText={search}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 50, 100]}
      />
    </div>
  )
})

export default EmployeeGrid
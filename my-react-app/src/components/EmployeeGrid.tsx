import { AgGridReact } from "ag-grid-react"
import { useMemo, useRef } from "react"
import type { Employee } from "../types/employee"
import type { ColDef, ICellRendererParams, ValueFormatterParams, ValueGetterParams } from "ag-grid-community"

type Props = {
    employees: Employee[]
}

// export default function EmployeeGrid({ employees }: Props) {
export default function EmployeeGrid({ employees, search }: any) {

    const gridRef = useRef<any>(null)

    const columnDefs: ColDef<Employee>[] = [

        { field: "id", width: 90 },

        {
            headerName: "Name",
            valueGetter: (p: ValueGetterParams<Employee>) =>
                `${p.data?.firstName} ${p.data?.lastName}`,
            sortable: true,
            filter: true
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
}
import { useState } from "react"

export default function GridToolbar({ onSearch }: any) {

  const [value, setValue] = useState("")

  const handleChange = (e: any) => {
    setValue(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 15
    }}>

      <div style={{ display: "flex", gap: 20 }}>
        <button>Columns</button>
        <button>Filters</button>
        <button>Density</button>
        <button>Export</button>
      </div>

      <input
        placeholder="Search..."
        value={value}
        onChange={handleChange}
        style={{
          padding: "8px 12px",
          borderRadius: 6,
          border: "1px solid #ddd",
          width: 220
        }}
      />

    </div>
  )
}
import { useState } from "react"

type Props = {
  onSearch: (value: string) => void
  onExport: () => void
}

export default function GridToolbar({ onSearch, onExport }: Props) {

  const [value, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setValue(val)
    onSearch(val)
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 15
      }}
    >

      <input
        placeholder="Search..."
        value={value}
        onChange={handleChange}
        style={{
          padding: "8px 12px",
          borderRadius: 6,
          border: "1px solid #ddd",
          width: 220,
          marginRight: "20px",
          background: "#4B1D73",
          color: "white"
        }}
      />

      <div style={{ display: "flex", gap: 20 }}>
        <button
          onClick={onExport}
          style={{
            padding: "8px 16px",
            borderRadius: 6,
            border: "none",
            background: "#4B1D73",
            color: "white",
            cursor: "pointer"
          }}
        >
          Export
        </button>
      </div>

    </div>
  )
}
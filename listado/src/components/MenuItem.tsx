import { ArrowBack, ArrowBackIos } from "@mui/icons-material"
import { useEffect, useLayoutEffect, useRef } from "react"
import Menu from "../models/Menu"


function MenuItem({ menu }: { menu: Menu }) {
  const { title, link, selected } = menu
  const ref = useRef<HTMLDivElement>(null!)
  useLayoutEffect(() => {
    ref.current.focus()
  }, [])
  useEffect(() => {
    if (ref.current)
      if (selected) {
        console.log("", title, ": ", selected)
        ref.current.focus()
        console.log("focus: ", ref.current.focus())
      }
  }, [selected])
  return (
    <div
      ref={ref}
      className={selected ? "selected" : "unselected"}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}
      onFocus={() => console.log(title)}
    >
      {selected ? <ArrowBackIos /> : ""}
      <div style={{
        display: "flex",
        fontSize: selected ? "15px" : "10px"
      }}>
        {title}
      </div>
    </div>
  )
}

export default MenuItem
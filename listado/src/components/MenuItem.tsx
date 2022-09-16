import { ArrowBack, ArrowBackIos } from "@mui/icons-material"
import Menu from "../models/Menu"


function MenuItem({ menu }: { menu: Menu }) {
  const { title, link, selected } = menu

  return (
    <div
      className={selected ? "selected" : "unselected"}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}>
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
import { Paper, SxProps } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../models/Menu";
import MenuItem from "./MenuItem";

function Menus({ style, menus }: { style?: SxProps, menus: Menu[] }) {
  const [selected, setSelected] = useState(-1);

  const handleKey = (e: KeyboardEvent) => {
    let { keyCode } = e;
    console.log(keyCode)
    switch (keyCode) {
      case 40: //abajo
        setSelected(actual => actual > menus.length ? 0 : actual + 1)
        break;
      case 38: //arriba
        setSelected(actual => actual <= 0 ? menus.length - 1 : actual - 1)
        break;
      case 13:
        menus[selected].function()
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKey)

    return () => {
      window.removeEventListener("keydown", handleKey)
    }
  })

  return (
    <Paper sx={{ margin: 2, padding: 2, ...style }}>
      <h4>Menus</h4>
      {menus.map((menu, index) => {
        return <MenuItem
          menu={{
            title: menu.title,
            function: menu.function,
          }}
          selected={index == selected}
        />
      })}
    </Paper>
  )
}

export default Menus;
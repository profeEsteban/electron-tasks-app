import { useState } from "react";
import MenuItem from "../components/Menu/MenuItem";

function Home() {
  const menus = [
    "Inicio",
    "Intermedio",
    "Medio",
    "Final",
  ]
  const [menuSelected, setMenuSelected] = useState(5)

  return (
    <div>
      <h1>Bienvenido</h1>
      <div onClick={e => setMenuSelected(p =>
        p >= menus.length - 1 ? 0 : p + 1
      )}>
        {menus.map((menu, indexMenu) => <MenuItem selected={indexMenu === menuSelected} value={menu} />)}
      </div>
    </div>
  )
}

export default Home;
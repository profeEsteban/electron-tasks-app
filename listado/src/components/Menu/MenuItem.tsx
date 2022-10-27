type MenuItemProps = {
  value: string
  selected: boolean
}

function MenuItem({value, selected}: MenuItemProps){

  return (
    <h4>{selected ? ">" : ""} {value}</h4>
  )
}

export default MenuItem;
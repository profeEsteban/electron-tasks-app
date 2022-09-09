import { Backpack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/titlebar.css'

interface TitleBarProps {
  title: string
}

function TitleBar({ title }: TitleBarProps) {
  const navigate = useNavigate()

  return (
    <div id="nav" className="topBar focus">
      <div className="titleBar">
        <IconButton sx={{ color: "#FFFFFF"}} onClick={e => navigate(-1)}>
          <Backpack color="inherit" />
        </IconButton>
        <img src="icons/icon_top_bar.png" alt="" />
        <div className="title">
          {title}
        </div>
      </div>
      <div className="titleBarBtns">
        <button id="minimizeBtn" className="topBtn minimizeBtn"></button>
        <button id="maxResBtn" className="topBtn maximizeBtn"></button>
        <button id="closeBtn" className="topBtn closeBtn"></button>
      </div>
    </div>
  )
}

export default TitleBar;
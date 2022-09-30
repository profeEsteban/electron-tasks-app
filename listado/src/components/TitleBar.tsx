import { ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/titlebar.css'
const { ipcRenderer } = window.require("electron")

interface TitleBarProps {
  title: string
}

function TitleBar({ title }: TitleBarProps) {
  const [isMaximized, setIsMaximized] = useState(false)
  ipcRenderer.on("isMaximized", () => {
    setIsMaximized(true)
  })
  ipcRenderer.on("isRestored", () => {
    setIsMaximized(false)
  })

  const navigate = useNavigate()

  return (
    <div id="nav" className="topBar focus">
      <div className="titleBar">
        <IconButton sx={{ color: "#FFFFFF" }} onClick={e => navigate(-1)}>
          <ArrowBack color="inherit" />
        </IconButton>
        <img src="icons/icon_top_bar.png" alt="" />
        <div className="title">
          {title}
        </div>
      </div>
      <div className="titleBarBtns">
        <button
          title="minimize"
          onClick={e => ipcRenderer.send('minimizeApp')}
          id="minimizeBtn"
          className="topBtn minimizeBtn" />

        <button
          title={isMaximized ? "Restore":"Maximize"}
          onClick={e => ipcRenderer.send('maximizeRestoreApp')}
          id="maxResBtn"
          className={isMaximized ? "topBtn maximizeBtn" : "topBtn restoreBtn"} />

        <button
          title="close"
          onClick={e => ipcRenderer.send('closeApp')}
          id="closeBtn"
          className="topBtn closeBtn" />
      </div>
    </div>
  )
}

export default TitleBar;
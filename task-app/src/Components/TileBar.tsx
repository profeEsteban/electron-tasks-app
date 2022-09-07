import { useState } from "react"
import "./TileBar.css"
const ipcRenderer = window.require('electron').ipcRenderer

function TileBar() {
  const [isLeftMenuAactive, setIsLeftMenuAactive] = useState(false)
  const [isMaximizedApp, setIsMaximizedApp] = useState(false)
  const [isFocus, setIsFocus] = useState(true)

  function minimize() {
    ipcRenderer.send('minimizeApp')
  }
  function maxRes() {
    ipcRenderer.send('maximizeRestoreApp')
  }
  function close() {
    ipcRenderer.send('closeApp')
  }
  function showHideMenu() {
    ipcRenderer.send('showHideMenu')
    setIsLeftMenuAactive(prev => !prev)
  }


  // Escuchamos el proceso de la aplicación cuando nos dice que se maximiza o se restaura.
  ipcRenderer.on("isMaximized", () => {
    setIsMaximizedApp(true)
  })
  ipcRenderer.on("isRestored", () => {
    setIsMaximizedApp(false)
  })

  // Escuchamos el proceso de la aplicación cuando nos dice que 
  // se hizo un focus o un blur.
  ipcRenderer.on("isFocus", () => {
    setIsFocus(true)
  })
  ipcRenderer.on("isBlur", () => {
    setIsFocus(false)
  })





  return (
    <div className="topBar">
      <div className={isFocus ? "titleBar" : "titleBar blur"}>
        <button
          style={{
            transform: "rotateX(90deg)"
          }}
          onClick={e => showHideMenu()} id="showHideMenus" className="toggleButton"></button>
        <img src="icons/icon_top_bar.png" alt="" />
        <div className="title">
          Lista de tareas con electron
        </div>
      </div>
      <div className="titleBarBtns">
        <button onClick={e => minimize()} id="minimizeBtn" className="topBtn minimizeBtn"></button>
        <button
          id="maxResBtn"
          title={isMaximizedApp ? 'Restore' : 'Maximize'}
          className={isMaximizedApp ? "topBtn restoreBtn" : "topBtn maximizeBtn"}
          onClick={e => maxRes()}
        ></button>
          <button onClick={e => close()} id="closeBtn" className="topBtn closeBtn"></button>
      </div>
    </div>
  )

}

export default TileBar;
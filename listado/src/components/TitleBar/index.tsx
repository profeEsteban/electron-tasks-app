import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './TitleBar.module.css'
const ipcRenderer = window.require("electron").ipcRenderer

function TitleBar() {
  const navigate = useNavigate()
  const [isMaximized, setIsMaximized] = useState(false)
  const [isBlur, setIsBlur] = useState(false)

  // Escuchamos el proceso de la aplicación cuando nos dice que se maximiza o se restaura.
  ipcRenderer.on("isMaximized", () => {
    setIsMaximized(true)
  })
  ipcRenderer.on("isRestored", () => {
    setIsMaximized(false)
  })

  // Escuchamos el proceso de la aplicación cuando nos dice que se maximiza o se restaura.
  ipcRenderer.on("isFocus", () => {
    setIsBlur(false)
  })
  ipcRenderer.on("isInactive", () => {
    setIsBlur(true)
  })



  return (
    <div className={[style.topBar, isBlur ? style.inactive : ""].join(" ")}>
      <div className={style.titleBar}>
        {/* <button className={style.toggleButton}></button> */}
        <button onClick={e => navigate(-1)}>{"<"}</button>
        <img src="/icons/icon_top_bar.png" alt="" />
        <div className={style.title}>
          Lista de tareas con electron
        </div>
      </div>
      <div className={style.titleBarBtns}>
        <button onClick={e => ipcRenderer.send('minimizeApp')}
          className={`${style.topBtn} ${style.minimizeBtn}`}></button>
        <button
          title={isMaximized ? 'Restore' : 'Maximize'}
          onClick={e => ipcRenderer.send('maximizeRestoreApp')}
          className={[
            style.topBtn,
            isMaximized ? style.maximizeBtn : style.restoreBtn
          ].join(" ")}></button>
        <button onClick={e => ipcRenderer.send('closeApp')}
          className={style.topBtn + " " + style.closeBtn}></button>
      </div>
    </div>
  )
}

export default TitleBar;
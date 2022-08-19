import style from './TitleBar.module.css'


function TitleBar() {

  return (
    <div id="navBar" className={style.topBar}>
      <div className={style.titleBar}>
        <button id="showHideMenus" className={style.toggleButton}></button>
        <img src="icons/icon_top_bar.png" alt="" />
          <div className={style.title}>
            Lista de tareas con electron
          </div>
      </div>
      <div className={style.titleBarBtns}>
        <button id="minimizeBtn" className={`${style.topBtn} ${style.minimizeBtn}`}></button>
        <button id="maxResBtn" className={style.topBtn+" "+style.maximizeBtn}></button>
        <button id="closeBtn" className={style.topBtn+" "+style.closeBtn}></button>
      </div>
    </div>
  )
}

export default TitleBar;
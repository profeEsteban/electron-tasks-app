const { ipcRenderer } = require("electron")
const ipc = ipcRenderer

var isLeftMenuAactive = false

minimizeBtn.addEventListener('click', () => {
  ipc.send('minimizeApp')
})
maxResBtn.addEventListener('click', () => {
  ipc.send('maximizeRestoreApp')
})
closeBtn.addEventListener('click', () => {
  ipc.send('closeApp')
})


function changeMaxResBtn(isMaximizedApp) {
  if (isMaximizedApp) {
    maxResBtn.title = 'Restore'
    maxResBtn.classList.remove("maximizeBtn")
    maxResBtn.classList.add("restoreBtn")
  } else {
    maxResBtn.title = 'Maximize'
    maxResBtn.classList.remove("restoreBtn")
    maxResBtn.classList.add("maximizeBtn") 
  }
}

ipc.on("isMaximized", () => {
  changeMaxResBtn(true)
})
ipc.on("isRestored", () => {
  changeMaxResBtn(false)
})


showHideMenus.addEventListener('click', () => {
  if (isLeftMenuAactive) {
    mySidebar.style.width = '0px'
    isLeftMenuAactive = false
  } else {
    mySidebar.style.width = '280px'
    isLeftMenuAactive = true
  }
})


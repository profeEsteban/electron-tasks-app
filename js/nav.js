const { ipcRenderer } = require("electron")

var isLeftMenuAactive = false

var tileBar = null;

var minimizeBtn = null;
var maxResBtn = null;
var closeBtn = null;
var showHideMenus = null;


// Aquí traemos el HTML del nav y lo incrustamos:
fetch('components/nav.html')
  .then(archivo => archivo.text())
  .then(htmlBar => {
    // Elemento base es el script
    let oldElement = document.querySelector("script#replace_with_navbar");
    // Elemento nuevo es un div donde irá el html del nav
    let elementBar = document.createElement("div");
    elementBar.innerHTML = htmlBar;
    // Remplazamos el base por el nuevo
    oldElement.parentNode.replaceChild(elementBar, oldElement);


    // Buscamos los elementos.
    tileBar = document.querySelector("div.topBar");
    minimizeBtn = document.getElementById("minimizeBtn");
    maxResBtn = document.getElementById("maxResBtn");
    closeBtn = document.getElementById("closeBtn");
    showHideMenus = document.getElementById("showHideMenus");


    // Añadimos los eventos para cada clic enviando desde
    // el render al proceso un evento especifico segun el boton.
    minimizeBtn.addEventListener('click', () => {
      ipcRenderer.send('minimizeApp')
    })
    maxResBtn.addEventListener('click', () => {
      ipcRenderer.send('maximizeRestoreApp')
    })
    closeBtn.addEventListener('click', () => {
      ipcRenderer.send('closeApp')
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
  })


// Funcion para cambiar el icono de maximizar y restaurar.
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

function changeFocusTilebar(isFocus) {
  if (isFocus) {
    tileBar.classList.remove("blur")
  } else {
    tileBar.classList.add("blur")
  }
}


// Escuchamos el proceso de la aplicación cuando nos dice que se maximiza o se restaura.
ipcRenderer.on("isMaximized", () => {
  changeMaxResBtn(true)
})
ipcRenderer.on("isRestored", () => {
  changeMaxResBtn(false)
})

// Escuchamos el proceso de la aplicación cuando nos dice que 
// se hizo un focus o un blur.
ipcRenderer.on("isFocus", () => {
  changeFocusTilebar(true)
})
ipcRenderer.on("isBlur", () => {
  changeFocusTilebar(false)
})
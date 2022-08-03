const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const electronReload = require('electron-reload')

require("./database")
const { findTasks, saveTask } = require("./database")

electronReload(__dirname, {
  // electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  electron: path.join(__dirname, "node_modules", "electron", "dist", "electron.exe"),
  hardResetMethod: 'exit'
});

function createWindow() {
  const myWindow = new BrowserWindow({
    width: 360,
    height: 780,
    minWidth: 360,
    minHeight: 600,
    x: 1010,
    y: 0,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // myWindow.loadFile('index.html')
  // myWindow.loadUrl(`file://${__dirname}/index.html`);
  myWindow.loadFile(`${__dirname}/index.html`);
  myWindow.openDevTools();
  
  ipcMain.on('minimizeApp', () => {
    myWindow.minimize()
  })

  ipcMain.on('maximizeRestoreApp', () => {
    if (myWindow.isMaximized()) myWindow.unmaximize()
    else myWindow.maximize()
  })

  ipcMain.on('closeApp', () => {
    myWindow.close()
  })


  myWindow.on("maximize", () => {
    myWindow.webContents.send("isMaximized")
  })
  myWindow.on("unmaximize", () => {
    myWindow.webContents.send("isRestored")
  })

  myWindow.on("focus", () => {
    myWindow.webContents.send("isFocus")
  })
  myWindow.on("blur", () => {
    myWindow.webContents.send("isBlur")
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  // if (process.platform !== 'darwin') app.quit()
  if (process.platform !== 'darwin') app.exit()
})


ipcMain.on("get-tasks", (e) => {
  findTasks().then((tasks) => {
    // console.log("TAREAS: \n",tasks);

    // console.log("/////////////////////////////")
    // console.log("FOR COMUN:")
    for (let index = 0; index < tasks.length; index++) {
      const task = tasks[index];
      // console.log("Tarea: ", index, " Titulo: ", task.title)
    }

    // console.log("")
    // console.log("")
    // console.log("/////////////////////////////")
    // console.log("FOR EACH:")
    tasks.forEach((task, index) => {
      // console.log("Tarea: ", index, " Titulo: ", task.title)
    });

    // console.log("")
    // console.log("")
    // console.log("/////////////////////////////")
    // console.log("MAP:")
    let nuevoArray = tasks.map(task => task._doc)
    // console.log("nuevoArray: ",nuevoArray)


    e.reply("tasks", nuevoArray)
  })
})


ipcMain.on("save-task", (e, tarea) => {
  // console.log("SAVE TAREA: ", tarea);
  saveTask(tarea).then(r => {
    findTasks().then((tasks) => {
      let nuevoArray = tasks.map(task => task._doc)
      e.reply("tasks", nuevoArray)
    })
  })
})

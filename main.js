'use strict';

const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const { env } = require('process');
// const electronReload = require('electron-reload')

require("./database");
const { TasksFind, TaskDelete } = require("./database");

// electronReload(__dirname, {
//   // electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
//   electron: path.join(__dirname, "node_modules", "electron", "dist", "electron.exe"),
//   hardResetMethod: 'exit',
//   forceHardReset: true
// });

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
  // myWindow.loadFile(`${__dirname}/index.html`);
  myWindow.loadURL("http://localhost:3000")
  // myWindow.openDevTools()

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
    myWindow.webContents.send("isInactive")
  })


}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


ipcMain.on("getTasks", (e) => {
  TasksFind().then(tasksQuery => {
    console.log(tasksQuery);
    let tasks = tasksQuery.map(e => e._doc)
    e.reply("tasks", tasks)
  })
})

ipcMain.on("delete-task", (e, idTask) => {
  console.log("BORRAR: ", idTask);

  TaskDelete(idTask).then(r => {
    console.log(r)
    console.log("CORRECTO")

    e.reply("deleted-task", idTask)
  }).catch(e => {
    console.log("ERROR: ", e)
  })
})


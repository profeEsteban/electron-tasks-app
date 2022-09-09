const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
// const electronReload = require('electron-reload')

const { TaskFind, TaskNew } = require("./database")

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
  myWindow.loadURL("http://localhost:3000");
  // myWindow.loadFile(`${__dirname}/index.html`);

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
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on("get-all-tasks", (event) => {
  TaskFind().then(tasksQuery => {
    console.log("TAREAS: ", tasksQuery)
    // let tasks = [];
    // tasksQuery.forEach(task => {
    //   tasks.push(task._doc);
    // });
    // for (let index = 0; index < tasksQuery.length; index++) {
    //   tasks.push(tasksQuery[index]._doc);
    // }
    const tasks = tasksQuery.map(task => task._doc)
    const result = {
      tasks: tasks
    }
    event.reply("tasks", result)
  }).catch(error => {
    console.log("ERROR: ", error)
    const result = {
      error,
    }
    event.reply("tasks", result)
  })
})

ipcMain.on("create-new-task", (event, newTask) => {
  TaskNew(newTask).then(newTaskResult => {
    console.log("TAREA CREADA: ", newTaskResult)

    const result = {
      newTask: newTaskResult._doc
    }
    event.reply("created-new-task", result)
  }).catch(error => {
    console.log("TAREA NO CREADA: ", error)
    const result = {
      error,
    }
    event.reply("created-new-task", result)
  })
})

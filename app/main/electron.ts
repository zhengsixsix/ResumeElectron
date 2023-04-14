const path = require("path");
const { app, BrowserWindow, shell, ipcMain } = require("electron");
function isDev() {
  // 👉 还记得我们配置中通过 webpack.DefinePlugin 定义的构建变量吗
  return process.env.NODE_ENV === "development";
}

function createWindow() {
  // 创建窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      contextIsolation: false,
      nodeIntegration: true, // 注入node模块
    },
  });
  if (isDev()) {
    // 👇 在开发环境下，我们加载的是运行在 700 端口的 React
    mainWindow.loadURL(`http://192.168.1.99:7000`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, "../dist/index.html")}`);
  }
  // 监听来自渲染进程的消息
  ipcMain.handle('jumpFun', async (event: any, arg: string) => {
    shell.openExternal(arg)
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

const { app, BrowserWindow } = require('electron');
require('./server');
const path = require('path')

let mainWindow;

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    // O servidor Express já é iniciado em server.js ao ser requerido.
});

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
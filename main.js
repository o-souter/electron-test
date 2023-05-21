console.log("Starting App");
const { app, BrowserWindow } = require('electron') //Modules setup

const createWindow = () => { //Method to  the window for the app
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow() //Make the window
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit() //End the app process when all windows are closed
})
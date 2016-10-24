import Electron from 'electron'

const { app, BrowserWindow } = Electron

app.on('ready', () => {
    let window = new BrowserWindow({ show: false, width: 920, height : 540 })
    
    window.loadURL(`file:///${__dirname}/index.html`)

    window.webContents.on('did-finish-load', () => {
        window.show();
        window.focus();
    })

    window.on('close', () => window = null)
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

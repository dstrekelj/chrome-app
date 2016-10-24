// Dependency imports
import { app, BrowserWindow } from 'electron'

/**
 * Application entry point. Creates new browser window and
 * sets it up to open the index HTML file loading the app
 * script.
 */

app.on('ready', () => {
    let window = new BrowserWindow({ show: false, width: 920, height : 600 })
    window.setResizable(false);
    
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

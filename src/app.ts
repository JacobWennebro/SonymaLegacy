import electron, { BrowserWindow, app } from 'electron'
import url from 'url'
import path from 'path'

import YAML from 'yaml'
import fs from 'fs'
import Keyv from 'keyv'

let mainWindow: BrowserWindow;

const db = new Keyv();

db.on('error', err => console.log('Connection Error', err));

// Listen for app when ready
app.on('ready', async () => {
    // Assign window to mainWindow
    mainWindow = new BrowserWindow({
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.setMenuBarVisibility(false);
    mainWindow.setMenu(null);
    mainWindow.removeMenu();

    mainWindow.loadURL(url.format({
        pathname: path.resolve(__dirname,'../visual/index.html'),
        protocol: 'file',
        slashes: true
    }));
});
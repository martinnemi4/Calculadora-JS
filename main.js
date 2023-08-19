function appendValue(value) {
    document.getElementById('result').value += value;
  }
  
  function calculate() {
    let result = document.getElementById('result').value;
    try {
      let answer = eval(result);
      document.getElementById('result').value = answer;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }
  
  function clearDisplay() {
    document.getElementById('result').value = '';
  }
  
  
  const { app, BrowserWindow } = require('electron');
  const path = require('path');
  const url = require('url');
  
  let mainWindow;
  
  function createWindow() {
    mainWindow = new BrowserWindow({
      width: 380,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    });
  
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'calculator.html'),
      protocol: 'file:',
      slashes: true
    }));
  
    mainWindow.on('closed', function () {
      mainWindow = null;
    });
  }
  
  app.on('ready', createWindow);
  
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  
  app.on('activate', function () {
    if (mainWindow === null) {
      createWindow();
    }
  });
  
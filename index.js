const {app, BrowserWindow, Menu, dialog, shell } = require('electron');

app.on('ready',() => {
	let myWindow=new BrowserWindow({
		titleBarStyle: 'hidden',
		width:1024,
		height:768,
		webPreferences:{
			nodeIntegration:false,
		},
	});
	var menu = Menu.buildFromTemplate([
{
          label: 'Home',
		click(){myWindow.loadFile('index.html');}
      },

      {
          label: 'About',
		click(){const options = {
    type: 'info',
    buttons: [],
    defaultId: 2,
    title: 'About',
    message: 'CHAT APP',
    detail: 'Version 1.0.2\n\nA websocket based Chat Application\n\n           Managed and Created by IL Coder\n                   Powered by PIESOCKET.COM\n\n   Desktop App Created using ElectronJS Framework\n',
  }; dialog.showMessageBox(null,options)}
      },
{
          label: 'Contact Us',
		click(){shell.openExternal('https://sites.google.com/view/ilcoder/feedback')}
      },
	{ label:'Exit',
	click(){app.quit()}}
  ])
  Menu.setApplicationMenu(menu);
	myWindow.loadFile('index.html');
});

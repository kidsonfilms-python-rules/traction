const { app, BrowserWindow } = require('electron')// hghjghjghjghjghjghjghjhjgh
fs = require('fs')
WINDOW = {
    constructor: function(width, height) {
        this.width = width;
        this. height = height;
        
        
    },
    create: function() {
        this.window = new BrowserWindow({
            width: this.width,
            height: this.height,
            title: this.name
            
        })
          
        browserWIN.loadFile(home.filePath)

        
    },
    getWindow: () => {
        return this.browserWIN
    },
    filePath: './src/home/veiw/index.html',

    setFilePath: (newFilePath) => {
        try {
            if (fs.existsSync(filePath)) {
                this.filePath = newFilePath
            } else {
              console.log(`File: ${newFilePath} does not exist`)
            }
          } catch(err) {
            console.error(`Error \n\n\n ${err.message} \n\n\n`)
          }
        this.filePath = newFilePath
    },

    name: "Traction Window",

    setName: (newName) => {
        this.name = newName
        this.window.name = this.name
    }

}

function createWindow(width, height) {
    win = WINDOW.constructor(width, height)
    return win
}
module.exports = {
    createWindow, createWindow()
}


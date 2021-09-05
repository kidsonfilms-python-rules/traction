const win = require('../main');

editor = {
    create: () => {
        win.browserWIN.loadFile('./src/editor/veiw/index.html'); // Loading HTML
        // win.browserWIN.show(); // Show

    },
    filePath: "./src/editor/veiw/index.html"
}

module.exports = editor; // Exporting for stuff
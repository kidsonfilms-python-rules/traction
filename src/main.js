// const { app, BrowserWindow } = require('electron')// hghjghjghjghjghjghjghjhjgh
var config = require("./config.js");
// const browser = require("./browser/browser");
const editor = require("./editor/editor")
const window = require("./util/window")
const { app, BrowserWindow } = require('electron')// hghjghjghjghjghjghjghjhjgh

win = window.createWindow()
app.on("ready", win.create(width, height))

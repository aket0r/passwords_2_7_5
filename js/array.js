const fs = require("fs");
const os = require("os");
const path = require("path");
let player = null;
let passwords = [];
let logList = [];
let timeout = null;
let timeAnimation = null;
let count = 4;
let removeBtns, passwordsList, settingsCfg, saveRecorder = null, accesInit, accesInitTime = +localStorage.getItem("isLockedCounter") || 60;
let time = {
    h: 0,
    m: 0,
    s: 0
}
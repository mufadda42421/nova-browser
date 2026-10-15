
const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("nova", {
  name: "NOVA Browser",
  version: "1.0.0"
});

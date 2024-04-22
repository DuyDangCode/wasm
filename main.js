const util = require('util')
const fs = require('node:fs')

const wasmBuffer = fs.readFileSync('./squarer.wasm')
WebAssembly.instantiate(wasmBuffer).then((wasmModule) => {
  // Exported function live under instance.exports
  const squarer = wasmModule.instance.exports._Z7squareri
  console.log(squarer(1000))
})

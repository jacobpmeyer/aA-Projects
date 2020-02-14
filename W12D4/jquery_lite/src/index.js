const DOMNodeCollection = require("./dom_node_collection")

const documentReadyCallbacks = [];
window.$l = function (arg) {
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg])
  } else if (typeof arg === "function") {
    documentReadyCallbacks.push(arg);
  } else {
    return document.querySelectorAll(arg);
  }
}
document.addEventListener("DOMContentLoaded", () => {
    documentReadyCallbacks.forEach ((func) => func());
})
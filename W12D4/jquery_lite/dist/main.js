/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nclass DOMNodeCollection {\n    constructor(l_array) {\n        this.l_array = l_array;\n    }\n\n    html(str) {\n      if (str !== undefined) {\n        this.forEach((node) => {\n          node.innerHTML = str\n        });\n      } else {\n        return this[0].innerHTML;\n      }\n    }\n\n    \n    empty() {\n        this.html('');\n    }\n\n    append(arg) {\n      this.forEach((node) => {\n        node.innerHTML = node.innerHTML + \" \" + arg;\n      });\n    }\n\n    attr(key, val) {\n      if (!val) {\n        return this[0].getAttribute(key);\n      } else {\n        this.forEach((node) => {\n          node.setAttribute(key, val);\n        })\n      }\n    }\n\n    addClass (newClass) {\n     this.forEach( (node) => {\n       node.classList.add(newClass);\n     });\n    }\n\n  removeClass(oldClass) {\n    this.forEach((node) => {\n      node.classList.remove(oldClass);\n    });\n  }\n\n  children() {\n    let childrenNodes = []\n    this.forEach((node) => {\n      const nodeChildren = Array.from(node.children)\n      childrenNodes = childrenNodes.concat(nodeChildren)\n    })\n    return new DOMNodeCollection(childrenNodes)\n  };\n\n  parent() {\n    let parentNodes = []\n    this.forEach((node) => {\n      const nodeParents = Array.from(node.parentNode)\n      parentNodes.concat(nodeParents)\n    });\n    return new DOMNodeCollection(parentNodes)\n  }\n\n  find (selector) {\n    const selected = [];\n    this.forEach ( (node) => {\n      const matches = Array.from(node.querySelectorAll(selector));\n      selected.concat(matches);\n    });\n    return new DOMNodeCollection(selected);\n  }\n\n  remove () {\n    this.forEach ((node) => {\n      node.remove();\n    })\n  }\n\n  on (eventName, callback) {\n    this.forEach ((node) => {\n      const newEvent = node.addEventListener (eventName, callback);\n      node.attr(eventName, newEvent);\n    })\n  }\n\n  off (eventName) {\n    this.forEach ((node) => {\n      node.removeEventListener(eventName, callback)\n    })\n  }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\")\n\nconst documentReadyCallbacks = [];\nwindow.$l = function (arg) {\n  if (arg instanceof HTMLElement) {\n    return new DOMNodeCollection([arg])\n  } else if (typeof arg === \"function\") {\n    documentReadyCallbacks.push(arg);\n  } else {\n    return document.querySelectorAll(arg);\n  }\n}\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    documentReadyCallbacks.forEach ((func) => func());\n})\n\n//# sourceURL=webpack:///./src/index.js?");

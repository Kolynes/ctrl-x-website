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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            callToAction: false,
            scrolled: false,
            showJoinForm: false,
            windows: 0,
            joining: false,
            name: "",
            email: "",
            phone: "",
            webDev: false,
            mobileDev: false,
            digitalMarketing: false,
            contentDev: false,
            reference: "",
            friend: "",
            showSnackbar: false,
            snackbarMessage: {},
            jumbo: 1,
            showDrawer: false
        };
    },

    methods: {
        join: function join() {
            var _this = this;

            if (this.$refs.form3.validate()) {
                this.joining = true;
                var content = new FormData();
                content.append("name", this.name);
                content.append("email", this.email);
                content.append("phone", this.phone);
                var skills = "";
                if (this.webDev) skills += "Web Development, ";
                if (this.mobileDev) skills += "Mobile App Development, ";
                if (this.digitalMarketing) skills += "Digital Marketing, ";
                if (this.contentDev) skills += "Content Development, ";
                content.append("skills", skills);
                content.append("reference", this.reference);
                content.append("friend", this.friend);
                this.$http.request({
                    url: "join/",
                    method: "POST",
                    content: content
                }).then(function (response) {
                    response = response.json();
                    _this.joining = false;
                    if (response.status) {
                        _this.windows = 2;
                    }
                }).catch(function (reason) {
                    console.log(reason);
                    _this.joining = false;
                    _this.snackbarMessage = { icon: "warning", iconColor: "red", message: "Failed to process the request. Please try again later" };
                    _this.showSnackbar = true;
                });
            }
        },
        next: function next(key) {
            if (this.$refs["form" + key].validate()) {
                this.windows++;
            }
        }
    },
    computed: {
        scroller: function scroller() {
            return scrollY == 0 ? "transparent" : "indigo";
        }
    },
    watch: {
        showJoinForm: function showJoinForm(newValue) {
            if (!newValue) {
                this.windows = 0;
                for (var i in [0, 1]) {
                    this.$refs["form" + i].reset();
                }
            }
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        twttr.widgets.createTweet("1172969819647463425", document.querySelector("#tweet-one"));
        twttr.widgets.createTweet("1172929997587255299", document.querySelector("#tweet-two"));
        document.addEventListener("scroll", function (event) {
            return _this2.scrolled = scrollY > 0;
        });
        new WOW({ offset: 50 }).init();
        setInterval(function () {
            if (_this2.jumbo == 3) {
                _this2.jumbo = 1;
            } else {
                _this2.jumbo++;
            }
        }, 10000);
    }
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js____default.a); 

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(17).default
var update = add("ded7510e", content, false, {"url":false});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"url\":false}!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/index.js?{}!./Index.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"url\":false}!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/index.js?{}!./Index.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cookies = function () {
    function Cookies() {
        _classCallCheck(this, Cookies);

        this.load();
    }

    _createClass(Cookies, [{
        key: "get",
        value: function get(cookie) {
            this.load();
            return this.cookieObject[cookie];
        }
    }, {
        key: "set",
        value: function set(cookie, value) {
            this.cookieObject[cookie] = value;
            document.cookie = cookie + "=" + value;
            this.load();
        }
    }, {
        key: "load",
        value: function load() {
            this.cookieString = document.cookie;
            var temp = this.cookieString.split("; ");
            this.cookieObject = {};
            for (var i in temp) {
                i = temp[i];

                var _i$split = i.split("="),
                    _i$split2 = _slicedToArray(_i$split, 2),
                    name = _i$split2[0],
                    value = _i$split2[1];

                this.cookieObject[name] = value;
            }
        }
    }, {
        key: "clear",
        value: function clear() {}
    }]);

    return Cookies;
}();

exports.default = Cookies;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Http = function () {
    function Http(global) {
        _classCallCheck(this, Http);

        this.headers = global.headers;
        this.base = global.base || "";
        if (this.base.length > 0) {
            if (this.base.lastIndexOf("/") != this.base.length - 1) {
                this.base += "/";
            }
        }
    }

    _createClass(Http, [{
        key: "createXHR",
        value: function createXHR(method, url) {
            var xhr = null;
            try {
                xhr = new XMLHttpRequest();
            } catch (e) {}
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (e) {}
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (e) {}
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {}
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
            if (xhr) {
                xhr.open(method || "GET", "" + (this.base + url));
                xhr.xml = function () {
                    return xhr.responseXML;
                };
                xhr.json = function () {
                    return JSON.parse(xhr.responseText);
                };
                xhr.aborted = function () {
                    return reject("Request aborted");
                };
                for (var header in this.headers) {
                    xhr.setRequestHeader(header, this.headers[header].constructor == Function ? this.headers[header]() : this.headers[header]);
                }
            }
            return xhr;
        }
    }, {
        key: "request",
        value: function request(requestObject) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                var xhr = _this.createXHR(requestObject.method, requestObject.url);
                for (var header in requestObject.headers) {
                    xhr.setRequestHeader(header, requestObject.headers[header].constructor == Function ? requestObject.headers[header]() : requestObject.headers[header]);
                }
                if (!requestObject.cors) {
                    xhr.setRequestHeader("cache-control", "no-cache");
                }
                xhr.timeout = requestObject.timeout || 15000;
                xhr.ontimeout = function () {
                    xhr.abort();
                    return reject("The connection timed out. Please try again.");
                };
                xhr.onerror = function (e) {
                    console.error(e);
                    return reject("An Error occured!" + e);
                };
                try {
                    xhr.send(requestObject.content);
                } catch (e) {
                    console.error(e);
                    reject("Request failed! " + e);
                }
                xhr.onload = function () {
                    return resolve(xhr);
                };
            });
        }
    }]);

    return Http;
}();

exports.default = Http;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (value) {
    if ((value || "").length == 0) {
        return "Email required!";
    } else if (!/^[a-zA-Z0-9]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z0-9]{2,}$/.test(value || "")) {
        return "invalid email";
    } else {
        return true;
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  return (/(^\+234(8|7|9){1}[0-9]{9}$)|(^0(8|7|9){1}[0-9]{9}$)/.test(value) || "Invalid phone number"
  );
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  return (value || "").length > 0 || "This field is required";
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Index_vue_vue_type_template_id_82b7485c___ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Index_vue_vue_type_script_lang_js___ = __webpack_require__(1);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__Index_vue_vue_type_script_lang_js___) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__Index_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Index_vue_vue_type_style_index_0_lang_scss___ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(16);






/* normalize component */

var component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Index_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__Index_vue_vue_type_template_id_82b7485c___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Index_vue_vue_type_template_id_82b7485c___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/home/kolynes/Workspace/CtrlX/CtrlXApp/CtrlXVue/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('82b7485c', component.options)
    } else {
      api.reload('82b7485c', component.options)
    }
    module.hot.accept("./Index.vue?vue&type=template&id=82b7485c&", function () {
      api.rerender('82b7485c', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/components/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Index = __webpack_require__(8);

var _Index2 = _interopRequireDefault(_Index);

var _emailRule = __webpack_require__(5);

var _emailRule2 = _interopRequireDefault(_emailRule);

var _nigerianPhoneRule = __webpack_require__(6);

var _nigerianPhoneRule2 = _interopRequireDefault(_nigerianPhoneRule);

var _requiredRule = __webpack_require__(7);

var _requiredRule2 = _interopRequireDefault(_requiredRule);

var _http = __webpack_require__(4);

var _http2 = _interopRequireDefault(_http);

var _cookies = __webpack_require__(3);

var _cookies2 = _interopRequireDefault(_cookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(Vuetify);
Vue.prototype.$emailRule = _emailRule2.default;
Vue.prototype.$nigerianPhoneRule = _nigerianPhoneRule2.default;
Vue.prototype.$requiredRule = _requiredRule2.default;
Vue.prototype.$cookies = new _cookies2.default();
Vue.prototype.$http = new _http2.default({
    headers: {
        "X-CSRFToken": function XCSRFToken() {
            return Vue.prototype.$cookies.get("csrftoken");
        }
    }
});

var vueApp = new Vue({
    el: "#vue-app",
    render: function render(h) {
        return h(_Index2.default);
    }
});

vueApp.$vuetify.theme.primary = "#3041ad";
vueApp.$vuetify.theme.secondary = "#ffeb3b";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "\n.jumbotron {\n  min-height: 70vh;\n  position: relative;\n}\n.jumbotron .backdrop {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-size: cover;\n    filter: blur(3px);\n    z-index: 0;\n}\n.jumbotron .backdrop#one {\n      background-image: url(\"/static/CtrlXApp/images/building.jpg\");\n}\n.jumbotron .backdrop#two {\n      background-image: url(\"/static/CtrlXApp/images/hub4.png\");\n}\n.jumbotron .backdrop#three {\n      background-image: url(\"/static/CtrlXApp/images/community1.png\");\n}\n.jumbotron > * {\n    position: relative;\n    min-height: inherit;\n    background: rgba(0, 0, 0, 0.6);\n}\n.underline {\n  height: 10px;\n  width: 300px;\n  margin: 10px 0;\n  animation: underline-animation 4s;\n}\n#about {\n  text-align: justify;\n}\n@keyframes underline-animation {\nfrom {\n    width: 0px;\n}\nto {\n    width: 300px;\n}\n}\na {\n  text-decoration: none;\n}\n", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_82b7485c___ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_82b7485c___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_82b7485c___["b"]; });


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_scss___ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_scss____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_scss___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_index_js_ref_3_0_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_scss____default.a); 

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { staticClass: "v-app overflow-y-hidden" },
    [
      _c(
        "v-toolbar",
        {
          attrs: {
            app: "",
            color: _vm.scrolled ? "rgba(0,0,0,0.7)" : "transparent",
            flat: !_vm.scrolled,
            dark: ""
          }
        },
        [
          _vm.scrolled
            ? _c("v-avatar", { attrs: { size: "50" } }, [
                _c("img", {
                  attrs: { src: "/static/CtrlXApp/images/logo.png" }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          !_vm.$vuetify.breakpoint.smAndDown
            ? _c(
                "div",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "" },
                      on: {
                        click: function($event) {
                          _vm.$vuetify.goTo("#about")
                        }
                      }
                    },
                    [_vm._v("about")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "" },
                      on: {
                        click: function($event) {
                          _vm.$vuetify.goTo("#project-x")
                        }
                      }
                    },
                    [_vm._v("Project-x")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "" },
                      on: {
                        click: function($event) {
                          _vm.$vuetify.goTo("#services")
                        }
                      }
                    },
                    [_vm._v("services")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "" },
                      on: {
                        click: function($event) {
                          _vm.$vuetify.goTo("#pricing")
                        }
                      }
                    },
                    [_vm._v("pricing")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "" },
                      on: {
                        click: function($event) {
                          _vm.callToAction = true
                        }
                      }
                    },
                    [_vm._v("contact us")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "" },
                      on: {
                        click: function($event) {
                          _vm.showJoinForm = true
                        }
                      }
                    },
                    [_vm._v("join us")]
                  )
                ],
                1
              )
            : _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      _vm.showDrawer = true
                    }
                  }
                },
                [_c("v-icon", [_vm._v("menu")])],
                1
              )
        ],
        1
      ),
      _vm._v(" "),
      _vm.$vuetify.breakpoint.smAndDown
        ? _c(
            "v-navigation-drawer",
            {
              attrs: { right: "", app: "", dark: "" },
              model: {
                value: _vm.showDrawer,
                callback: function($$v) {
                  _vm.showDrawer = $$v
                },
                expression: "showDrawer"
              }
            },
            [
              _c("center", [
                _c("img", {
                  staticClass: "wow bounceIn",
                  staticStyle: { width: "150px" },
                  attrs: { src: "/static/CtrlXApp/images/logo.png" }
                })
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-list",
                [
                  _c(
                    "v-list-tile",
                    {
                      on: {
                        click: function($event) {
                          _vm.$vuetify.goTo("#about")
                          _vm.showDrawer = false
                        }
                      }
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("info")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-content", [_c("span", [_vm._v("ABOUT")])])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    {
                      on: {
                        click: function($event) {
                          _vm.$vuetify.goTo("#project-x")
                          _vm.showDrawer = false
                        }
                      }
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [
                          _c(
                            "v-avatar",
                            { attrs: { size: "25" } },
                            [
                              _c("v-img", {
                                attrs: {
                                  src:
                                    "/static/CtrlXApp/images/project-x-letter.png"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-content", [
                        _c("span", [_vm._v("PROJECT-X")])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    {
                      on: {
                        click: function($event) {
                          _vm.$vuetify.goTo("#services")
                          _vm.showDrawer = false
                        }
                      }
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("fas fa-briefcase")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-content", [
                        _c("span", [_vm._v("SERVICES")])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    {
                      on: {
                        click: function($event) {
                          _vm.$vuetify.goTo("#pricing")
                          _vm.showDrawer = false
                        }
                      }
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("attach_money")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-content", [
                        _c("span", [_vm._v("PRICING")])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    {
                      on: {
                        click: function($event) {
                          _vm.callToAction = true
                          _vm.showDrawer = false
                        }
                      }
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("phone")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-content", [
                        _c("span", [_vm._v("CONTACT US")])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    {
                      on: {
                        click: function($event) {
                          _vm.showJoinForm = true
                          _vm.showDrawer = false
                        }
                      }
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("arrow_forward")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-content", [
                        _c("span", [_vm._v("JOIN US")])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "jumbotron" },
        [
          _c("v-fade-transition", [
            _vm.jumbo == 1
              ? _c("div", { staticClass: "backdrop", attrs: { id: "one" } })
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("v-fade-transition", [
            _vm.jumbo == 2
              ? _c("div", { staticClass: "backdrop", attrs: { id: "two" } })
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("v-fade-transition", [
            _vm.jumbo == 3
              ? _c("div", { staticClass: "backdrop", attrs: { id: "three" } })
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "v-layout",
            {
              staticClass: "py-5",
              attrs: { row: "", wrap: "", "align-center": "" }
            },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "", sm6: "" } },
                [
                  _c(
                    "center",
                    {},
                    [
                      _c("img", {
                        staticClass: "wow bounceInDown",
                        staticStyle: { width: "300px", height: "281.34px" },
                        attrs: { src: "/static/CtrlXApp/images/logo.png" }
                      }),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticStyle: {
                            "font-family": "monospace",
                            color: "white"
                          }
                        },
                        [_c("b", [_vm._v("Empower . Collaborate . Progress")])]
                      ),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass:
                            "font-weight-bold primary wow slideInLeft",
                          attrs: { round: "" },
                          on: {
                            click: function($event) {
                              _vm.callToAction = true
                            }
                          }
                        },
                        [_vm._v("Make an inquiry")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass:
                            "font-weight-bold secondary black--text wow slideInRight",
                          attrs: { round: "" },
                          on: {
                            click: function($event) {
                              _vm.showJoinForm = true
                            }
                          }
                        },
                        [_vm._v("join ctrl-x hub")]
                      ),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "primary white--text wow flip",
                          attrs: {
                            icon: "",
                            href: "https://facebook.com/ctrlxhub"
                          }
                        },
                        [
                          _c("v-icon", { attrs: { color: "#fff" } }, [
                            _vm._v("fab fa-facebook-f")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "secondary white--text wow flip",
                          attrs: {
                            icon: "",
                            href: "https://twitter.com/ctrlxhub"
                          }
                        },
                        [
                          _c("v-icon", { attrs: { color: "#000" } }, [
                            _vm._v("fab fa-twitter")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              !_vm.$vuetify.breakpoint.xs
                ? _c(
                    "v-flex",
                    {
                      staticClass: "white--text",
                      attrs: { xs12: "", sm6: "" }
                    },
                    [
                      _c(
                        "v-scroll-y-transition",
                        { staticStyle: { position: "absolute" } },
                        [
                          _vm.jumbo == 1
                            ? _c(
                                "div",
                                { staticStyle: { "max-width": "500px" } },
                                [
                                  _c("h2", { staticClass: "display-1" }, [
                                    _vm._v("Uninterrupted Power Supply")
                                  ]),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass: "underline yellow"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "subheading" }, [
                                    _vm._v("Work for 10 hours a day nonstop!")
                                  ])
                                ]
                              )
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-scroll-y-transition",
                        { staticStyle: { position: "absolute" } },
                        [
                          _vm.jumbo == 2
                            ? _c(
                                "div",
                                { staticStyle: { "max-width": "500px" } },
                                [
                                  _c("h2", { staticClass: "display-1" }, [
                                    _vm._v("Comfortable Working Space")
                                  ]),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass: "underline yellow"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "subheading" }, [
                                    _vm._v(
                                      "Nothing else beats that comfortable yet engaging feeling of an office"
                                    )
                                  ])
                                ]
                              )
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-scroll-y-transition",
                        { staticStyle: { position: "absolute" } },
                        [
                          _vm.jumbo == 3
                            ? _c(
                                "div",
                                { staticStyle: { "max-width": "500px" } },
                                [
                                  _c("h2", { staticClass: "display-1" }, [
                                    _vm._v("A Great Community")
                                  ]),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass: "underline yellow"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "subheading" }, [
                                    _vm._v(
                                      "You get to meet new people from similar and different fields, collaborate and build something new!"
                                    )
                                  ])
                                ]
                              )
                            : _vm._e()
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "v-fab-transition",
            [
              _vm.scrolled
                ? _c(
                    "v-btn",
                    {
                      attrs: {
                        fab: "",
                        bottom: "",
                        left: "",
                        fixed: "",
                        color: "secondary black--text"
                      },
                      on: {
                        click: function($event) {
                          _vm.$vuetify.goTo(0)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("keyboard_arrow_up")])],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("v-fab-transition", [
            _c(
              "a",
              { attrs: { href: "https://m.me/ctrlxhub" } },
              [
                _c(
                  "v-btn",
                  {
                    attrs: {
                      fab: "",
                      bottom: "",
                      right: "",
                      fixed: "",
                      color: "blue white--text"
                    }
                  },
                  [_c("v-icon", [_vm._v("fab fa-facebook-messenger")])],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "v-container",
            { attrs: { "grid-list-xl": "" } },
            [
              _c(
                "v-layout",
                {
                  attrs: {
                    wrap: "",
                    id: "about",
                    "align-center": "",
                    "justify-space-around": ""
                  }
                },
                [
                  _c("v-flex", { attrs: { xs12: "", sm6: "" } }, [
                    _c("h1", [_vm._v("Who we are")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "underline primary wow" }),
                    _vm._v(" "),
                    _c("p", { staticClass: "body-1" }, [
                      _vm._v(
                        '\n                        Ctrl-X Hub (pronounced "control ex hub") is a place that provides creatives and techies a conducive and collaborative working environment.\n                    '
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "body-1" }, [
                      _vm._v(
                        "\n                        Being an initiative of "
                      ),
                      _c("a", { attrs: { href: "https://uzucorp.com" } }, [
                        _vm._v("The Uzu Corporation")
                      ]),
                      _vm._v(
                        ", Ctrl-X Hub's primary aim is to uplift the tech community here in Owerri and Nigeria in general by providing tech enthusiasts and creatives (graphics designers and media personnel) with the basic necessities needed to boost productivity.\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "body-1" }, [
                      _vm._v(
                        "\n                        We have succeeded in creating a physical meeting point that has brought like minded individuals together\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    {
                      staticClass: "wow fadeInDown",
                      staticStyle: { height: "300px" },
                      attrs: {
                        xs12: "",
                        sm6: "",
                        "d-flex": "",
                        "align-center": ""
                      }
                    },
                    [
                      !_vm.$vuetify.breakpoint.xs
                        ? _c("v-flex", { attrs: { xs1: "" } })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm10: "" } },
                        [
                          _c(
                            "v-fab-transition",
                            [
                              _vm.jumbo == 1
                                ? _c("v-img", {
                                    key: 1,
                                    attrs: {
                                      src:
                                        "/static/CtrlXApp/images/coworking.svg"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.jumbo == 2
                                ? _c("v-img", {
                                    key: 2,
                                    attrs: {
                                      src:
                                        "/static/CtrlXApp/images/developer-activity.svg"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.jumbo == 3
                                ? _c("v-img", {
                                    key: 3,
                                    attrs: {
                                      src:
                                        "/static/CtrlXApp/images/work-time.svg"
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      !_vm.$vuetify.breakpoint.xs
                        ? _c("v-flex", { attrs: { xs1: "" } })
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-layout",
                {
                  staticClass: "mt-4",
                  attrs: { wrap: "", id: "project-x", "align-center": "" }
                },
                [
                  _vm.$vuetify.breakpoint.xs
                    ? _c("v-flex", { attrs: { xs12: "" } }, [
                        _c("h1", [
                          _vm._v(
                            "We are building a network of digitally empowered people"
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "underline primary wow" })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    {
                      staticClass: "wow fadeInDown",
                      attrs: { xs12: "", sm6: "" }
                    },
                    [
                      _c("v-img", {
                        attrs: {
                          src: "/static/CtrlXApp/images/project-x-logo.png"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm6: "" } },
                    [
                      _vm.$vuetify.breakpoint.smAndUp
                        ? [
                            _c("h1", [
                              _vm._v(
                                "We are building a network of digitally empowered people"
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "underline primary wow" })
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _c("p", { staticClass: "body-1" }, [
                        _vm._v(
                          "\n                        Project-X is an initiative tailored to groom newbies in various digital skills. These include\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "body-1" }, [
                        _c("li", [_vm._v("Web Development")]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Mobile Development")]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Digital Marketing")]),
                        _vm._v(" "),
                        _c("li", [_vm._v("UI/UX Engineering")])
                      ]),
                      _c("br"),
                      _vm._v(" "),
                      _c("p", { staticClass: "body-1" }, [
                        _vm._v(
                          "\n                        This initiative is not just about imparting skills, but also fostering a network of self-employed people. \n                    "
                        )
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-layout",
                { attrs: { wrap: "" } },
                [
                  _c(
                    "v-flex",
                    { staticClass: "wow fadeIn", attrs: { xs12: "", sm6: "" } },
                    [
                      _c("h2", [_vm._v("Testimonies")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "underline grey darken-4 wow" }),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "The impact of Project-X on our community has been massive. It has set them on a path to great things. We say thank you to all those who gave a positive feedback."
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "Project-X vows to continue to make such great impacts to the tech community"
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-img", {
                        attrs: { src: "/static/CtrlXApp/images/workshop1.png" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-flex", { attrs: { xs12: "", sm6: "", md3: "" } }, [
                    _c("div", {
                      staticClass: "tweet",
                      attrs: { id: "tweet-one" }
                    })
                  ]),
                  _vm._v(" "),
                  !_vm.$vuetify.breakpoint.sm
                    ? _c("v-flex", { attrs: { xs12: "", md3: "" } }, [
                        _c("div", {
                          staticClass: "tweet",
                          attrs: { id: "tweet-two" }
                        })
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "h2",
                {
                  staticClass: "mt-4",
                  staticStyle: { "font-style": "italic" },
                  attrs: { id: "services" }
                },
                [_vm._v("Our Services")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "underline yellow wow" }),
              _vm._v(" "),
              _c(
                "v-layout",
                { staticClass: "wow fadeIn", attrs: { wrap: "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm6: "", lg3: "" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "center",
                                [
                                  _c(
                                    "v-avatar",
                                    { attrs: { size: "200", tile: "" } },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "/static/CtrlXApp/images/new-ideas.svg"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("h3", [
                                    _vm._v("Uninterrupted Power Supply")
                                  ]),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(
                                      "Consistent power, 10 hours a day, 6 days a week!"
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm6: "", lg3: "" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "center",
                                [
                                  _c(
                                    "v-avatar",
                                    { attrs: { size: "200", tile: "" } },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "/static/CtrlXApp/images/developer-activity-2.svg"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("h3", [
                                    _vm._v("Comfortable working space")
                                  ]),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(
                                      "No destractions. Just relax and do your thing!"
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm6: "", lg3: "" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "center",
                                [
                                  _c(
                                    "v-avatar",
                                    { attrs: { size: "200", tile: "" } },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "/static/CtrlXApp/images/code-typing.svg"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("h3", [
                                    _vm._v("Training and Tech Skillups")
                                  ]),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(
                                      "Tech is the new thing. Learn a skill today!"
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm6: "", lg3: "" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "center",
                                [
                                  _c(
                                    "v-avatar",
                                    { attrs: { size: "200", tile: "" } },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "/static/CtrlXApp/images/conference-speaker.svg"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("h3", [
                                    _vm._v("Events and Conference Hall")
                                  ]),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(
                                      "Host a conference or event at an affordable price!"
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "h2",
                {
                  staticClass: "mt-5",
                  staticStyle: { "font-style": "italic" },
                  attrs: { id: "pricing" }
                },
                [_vm._v("Pricing")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "underline primary wow" }),
              _vm._v(" "),
              _c(
                "v-layout",
                { attrs: { wrap: "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm6: "", lg3: "" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "wow fadeIn",
                          attrs: { color: "primary white--text" }
                        },
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "center",
                                [
                                  _c("v-img", {
                                    attrs: {
                                      src: "/static/CtrlXApp/images/naira1.png",
                                      width: "40"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-avatar",
                                    { attrs: { tile: "", size: "100" } },
                                    [
                                      _c("h2", { staticClass: "display-2" }, [
                                        _vm._v("300")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("h3", [_vm._v("Daily Plan")])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm6: "", lg3: "" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "wow fadeIn",
                          attrs: { color: "secondary" }
                        },
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "center",
                                [
                                  _c("v-img", {
                                    attrs: {
                                      src: "/static/CtrlXApp/images/naira1.png",
                                      width: "40"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-avatar",
                                    { attrs: { tile: "", size: "100" } },
                                    [
                                      _c("h2", { staticClass: "display-2" }, [
                                        _vm._v("1800")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("h3", [_vm._v("Weekly Plan")])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm6: "", lg3: "" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "wow fadeIn",
                          attrs: { color: "grey darken-4 white--text" }
                        },
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "center",
                                [
                                  _c("v-img", {
                                    attrs: {
                                      src: "/static/CtrlXApp/images/naira1.png",
                                      width: "40"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-avatar",
                                    { attrs: { tile: "", size: "100" } },
                                    [
                                      _c("h2", { staticClass: "display-2" }, [
                                        _vm._v("3200")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("h3", [_vm._v("2-Week Plan")])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm6: "", lg3: "" } },
                    [
                      _c(
                        "v-card",
                        { staticClass: "wow fadeIn" },
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "center",
                                [
                                  _c("v-img", {
                                    attrs: {
                                      src: "/static/CtrlXApp/images/naira1.png",
                                      width: "40"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-avatar",
                                    { attrs: { tile: "", size: "100" } },
                                    [
                                      _c("h2", { staticClass: "display-2" }, [
                                        _vm._v("6000")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("h3", [_vm._v("Monthly Plan")])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("h2", { staticClass: "mt-5" }, [
                _vm._v(
                  "We have gained the trust for a number of brands and startups"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "underline grey darken-4 wow" }),
              _vm._v(" "),
              _c(
                "v-layout",
                {
                  staticClass: "fadeIn wow",
                  attrs: { "justify-center": "", "align-center": "" }
                },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm2: "" } },
                    [
                      _c("v-img", {
                        attrs: { src: "/static/CtrlXApp/images/xyz.jpeg" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm2: "" } },
                    [
                      _c("v-img", {
                        attrs: { src: "/static/CtrlXApp/images/records.png" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm2: "" } },
                    [
                      _c("v-img", {
                        attrs: { src: "/static/CtrlXApp/images/tefemblack.png" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm2: "" } },
                    [
                      _c("v-img", {
                        attrs: { src: "/static/CtrlXApp/images/nimbbly.png" }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-footer",
        { attrs: { height: "auto" } },
        [
          _c(
            "v-card",
            {
              staticClass: "pb-5 pt-4",
              staticStyle: { width: "100%" },
              attrs: { color: "#111", flat: "" }
            },
            [
              _c(
                "v-card-text",
                { staticClass: "white--text text-xs-center" },
                [
                  _c(
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", "d-flex": "", sm4: "" } },
                        [
                          _c(
                            "div",
                            { staticClass: "text-xs-left" },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass:
                                    "primary wow slideInLeft font-weight-bold",
                                  attrs: { small: "", round: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.callToAction = true
                                    }
                                  }
                                },
                                [_vm._v("Make an inquiry")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass:
                                    "secondary black--text wow slideInRight font-weight-bold",
                                  attrs: { small: "", round: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.showJoinForm = true
                                    }
                                  }
                                },
                                [_vm._v("join ctrl-x hub")]
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "primary white--text wow flip",
                                  attrs: {
                                    icon: "",
                                    href: "https://facebook.com/ctrlxhub"
                                  }
                                },
                                [
                                  _c("v-icon", { attrs: { color: "#fff" } }, [
                                    _vm._v("fab fa-facebook-f")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "white--text",
                                  attrs: {
                                    href: "https://facebook.com/ctrlxhub"
                                  }
                                },
                                [_vm._v("facebook.com/ctrlxhub")]
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "secondary white--text wow flip",
                                  attrs: {
                                    icon: "",
                                    href: "https://twitter.com/ctrlxhub"
                                  }
                                },
                                [
                                  _c("v-icon", { attrs: { color: "#000" } }, [
                                    _vm._v("fab fa-twitter")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "white--text",
                                  attrs: {
                                    href: "https://twitter.com/ctrlxhub"
                                  }
                                },
                                [_vm._v("twitter.com/ctrlxhub")]
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _vm.$vuetify.breakpoint.xs
                                ? [
                                    _c(
                                      "v-list",
                                      {
                                        staticStyle: {
                                          background: "transparent"
                                        },
                                        attrs: { dark: "" }
                                      },
                                      [
                                        _c(
                                          "v-list-tile",
                                          {
                                            on: {
                                              click: function($event) {
                                                _vm.$vuetify.goTo("#about")
                                                _vm.showDrawer = false
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-list-tile-action",
                                              [_c("v-icon", [_vm._v("info")])],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("v-list-tile-content", [
                                              _c("span", [_vm._v("ABOUT")])
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-tile",
                                          {
                                            on: {
                                              click: function($event) {
                                                _vm.$vuetify.goTo("#project-x")
                                                _vm.showDrawer = false
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-list-tile-action",
                                              [
                                                _c(
                                                  "v-avatar",
                                                  { attrs: { size: "25" } },
                                                  [
                                                    _c("v-img", {
                                                      attrs: {
                                                        src:
                                                          "/static/CtrlXApp/images/project-x-letter.png"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("v-list-tile-content", [
                                              _c("span", [_vm._v("PROJECT-X")])
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-tile",
                                          {
                                            on: {
                                              click: function($event) {
                                                _vm.$vuetify.goTo("#services")
                                                _vm.showDrawer = false
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-list-tile-action",
                                              [
                                                _c("v-icon", [
                                                  _vm._v("fas fa-briefcase")
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("v-list-tile-content", [
                                              _c("span", [_vm._v("SERVICES")])
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-tile",
                                          {
                                            on: {
                                              click: function($event) {
                                                _vm.$vuetify.goTo("#pricing")
                                                _vm.showDrawer = false
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-list-tile-action",
                                              [
                                                _c("v-icon", [
                                                  _vm._v("attach_money")
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("v-list-tile-content", [
                                              _c("span", [_vm._v("PRICING")])
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-tile",
                                          {
                                            on: {
                                              click: function($event) {
                                                _vm.callToAction = true
                                                _vm.showDrawer = false
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-list-tile-action",
                                              [_c("v-icon", [_vm._v("phone")])],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("v-list-tile-content", [
                                              _c("span", [_vm._v("CONTACT US")])
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-tile",
                                          {
                                            on: {
                                              click: function($event) {
                                                _vm.showJoinForm = true
                                                _vm.showDrawer = false
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-list-tile-action",
                                              [
                                                _c("v-icon", [
                                                  _vm._v("arrow_forward")
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("v-list-tile-content", [
                                              _c("span", [_vm._v("JOIN US")])
                                            ])
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("iframe", {
                                      staticClass: "mb-3",
                                      staticStyle: {
                                        border: "0",
                                        width: "100%"
                                      },
                                      attrs: {
                                        src:
                                          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15889.005274672933!2d6.9975476!3d5.3786015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x175ac80138a1fa59!2sCtrl-X%20Hub!5e0!3m2!1sen!2sng!4v1570587514068!5m2!1sen!2sng",
                                        height: "450",
                                        frameborder: "0",
                                        allowfullscreen: ""
                                      }
                                    })
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "h3",
                                { staticClass: "body-2 text-xs-center" },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "white--text",
                                      attrs: { href: "https://www.uzucorp.com" }
                                    },
                                    [
                                      _c("em", [
                                        _c("img", {
                                          staticStyle: { width: "150px" },
                                          attrs: {
                                            src:
                                              "/static/CtrlXApp/images/uzucorpwhitetrans.png"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v("Rapidly developed by uzucorp")
                                        ])
                                      ])
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "h3",
                                { staticClass: "body-2 text-xs-center" },
                                [_c("em", [_vm._v("Ctrl-X Hub © 2019")])]
                              )
                            ],
                            2
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.$vuetify.breakpoint.smAndUp
                        ? [
                            _c(
                              "v-flex",
                              { attrs: { xs12: "", sm4: "" } },
                              [
                                _c(
                                  "v-list",
                                  {
                                    staticStyle: { background: "transparent" },
                                    attrs: { dark: "" }
                                  },
                                  [
                                    _c(
                                      "v-list-tile",
                                      {
                                        on: {
                                          click: function($event) {
                                            _vm.$vuetify.goTo("#about")
                                            _vm.showDrawer = false
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "v-list-tile-action",
                                          [_c("v-icon", [_vm._v("info")])],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("v-list-tile-content", [
                                          _c("span", [_vm._v("ABOUT")])
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile",
                                      {
                                        on: {
                                          click: function($event) {
                                            _vm.$vuetify.goTo("#project-x")
                                            _vm.showDrawer = false
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "v-list-tile-action",
                                          [
                                            _c(
                                              "v-avatar",
                                              { attrs: { size: "25" } },
                                              [
                                                _c("v-img", {
                                                  attrs: {
                                                    src:
                                                      "/static/CtrlXApp/images/project-x-letter.png"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("v-list-tile-content", [
                                          _c("span", [_vm._v("PROJECT-X")])
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile",
                                      {
                                        on: {
                                          click: function($event) {
                                            _vm.$vuetify.goTo("#services")
                                            _vm.showDrawer = false
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "v-list-tile-action",
                                          [
                                            _c("v-icon", [
                                              _vm._v("fas fa-briefcase")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("v-list-tile-content", [
                                          _c("span", [_vm._v("SERVICES")])
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile",
                                      {
                                        on: {
                                          click: function($event) {
                                            _vm.$vuetify.goTo("#pricing")
                                            _vm.showDrawer = false
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "v-list-tile-action",
                                          [
                                            _c("v-icon", [
                                              _vm._v("attach_money")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("v-list-tile-content", [
                                          _c("span", [_vm._v("PRICING")])
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile",
                                      {
                                        on: {
                                          click: function($event) {
                                            _vm.callToAction = true
                                            _vm.showDrawer = false
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "v-list-tile-action",
                                          [_c("v-icon", [_vm._v("phone")])],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("v-list-tile-content", [
                                          _c("span", [_vm._v("CONTACT US")])
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile",
                                      {
                                        on: {
                                          click: function($event) {
                                            _vm.showJoinForm = true
                                            _vm.showDrawer = false
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "v-list-tile-action",
                                          [
                                            _c("v-icon", [
                                              _vm._v("arrow_forward")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("v-list-tile-content", [
                                          _c("span", [_vm._v("JOIN US")])
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              { attrs: { xs12: "", "d-flex": "", sm4: "" } },
                              [
                                _c("iframe", {
                                  staticStyle: { border: "0" },
                                  attrs: {
                                    src:
                                      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15889.005274672933!2d6.9975476!3d5.3786015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x175ac80138a1fa59!2sCtrl-X%20Hub!5e0!3m2!1sen!2sng!4v1570587514068!5m2!1sen!2sng",
                                    width: "600",
                                    height: "450",
                                    frameborder: "0",
                                    allowfullscreen: ""
                                  }
                                })
                              ]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "350" },
          model: {
            value: _vm.callToAction,
            callback: function($$v) {
              _vm.callToAction = $$v
            },
            expression: "callToAction"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-list",
                    [
                      _c(
                        "v-list-tile",
                        { attrs: { ripple: "", href: "tel:+2348147689572" } },
                        [
                          _c(
                            "v-avatar",
                            [
                              _c("v-icon", { attrs: { color: "success" } }, [
                                _vm._v("phone")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("span", [_vm._v("Phone 1: +2348147689572")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { attrs: { inset: "" } }),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        { attrs: { ripple: "", href: "tel:+2348115716657" } },
                        [
                          _c(
                            "v-avatar",
                            [
                              _c("v-icon", { attrs: { color: "yellow" } }, [
                                _vm._v("phone")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("span", [_vm._v("Phone 2: +2348115716657")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { attrs: { inset: "" } }),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        { attrs: { href: "https://m.me/ctrlxhub" } },
                        [
                          _c(
                            "v-avatar",
                            [
                              _c("v-icon", { attrs: { color: "blue" } }, [
                                _vm._v("fab fa-facebook-messenger")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("span", [_vm._v(" Reach us on Messenger")])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", width: "300" },
          model: {
            value: _vm.showJoinForm,
            callback: function($$v) {
              _vm.showJoinForm = $$v
            },
            expression: "showJoinForm"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-layout",
                    { attrs: { "align-center": "" } },
                    [
                      _c("h2", { staticClass: "subheading font-weight-bold" }, [
                        _vm._v("Join us")
                      ]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticStyle: { float: "right" },
                          attrs: { icon: "" },
                          on: {
                            click: function($event) {
                              _vm.showJoinForm = false
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("close")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-window",
                    {
                      attrs: { touchless: "" },
                      model: {
                        value: _vm.windows,
                        callback: function($$v) {
                          _vm.windows = $$v
                        },
                        expression: "windows"
                      }
                    },
                    [
                      _c(
                        "v-window-item",
                        { key: 0 },
                        [
                          _c(
                            "v-form",
                            {
                              ref: "form0",
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  _vm.next(0)
                                }
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  rules: [_vm.$requiredRule],
                                  label: "Full Name",
                                  "prepend-icon": "person_outline"
                                },
                                model: {
                                  value: _vm.name,
                                  callback: function($$v) {
                                    _vm.name = $$v
                                  },
                                  expression: "name"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  rules: [_vm.$requiredRule, _vm.$emailRule],
                                  label: "Email",
                                  "prepend-icon": "mail_outline"
                                },
                                model: {
                                  value: _vm.email,
                                  callback: function($$v) {
                                    _vm.email = $$v
                                  },
                                  expression: "email"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  rules: [
                                    _vm.$requiredRule,
                                    _vm.$nigerianPhoneRule
                                  ],
                                  label: "Phone",
                                  "prepend-icon": "phone"
                                },
                                model: {
                                  value: _vm.phone,
                                  callback: function($$v) {
                                    _vm.phone = $$v
                                  },
                                  expression: "phone"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    small: "",
                                    round: "",
                                    type: "submit"
                                  }
                                },
                                [_vm._v("Next")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-window-item",
                        { key: 1 },
                        [
                          _c(
                            "v-form",
                            {
                              ref: "form3",
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.join($event)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            What skills do you have interest in?\n                            "
                              ),
                              _c("v-checkbox", {
                                attrs: { label: "Web Development" },
                                model: {
                                  value: _vm.webDev,
                                  callback: function($$v) {
                                    _vm.webDev = $$v
                                  },
                                  expression: "webDev"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-checkbox", {
                                attrs: { label: "Mobile App Development" },
                                model: {
                                  value: _vm.mobileDev,
                                  callback: function($$v) {
                                    _vm.mobileDev = $$v
                                  },
                                  expression: "mobileDev"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-checkbox", {
                                attrs: { label: "Digital Marketing" },
                                model: {
                                  value: _vm.digitalMarketing,
                                  callback: function($$v) {
                                    _vm.digitalMarketing = $$v
                                  },
                                  expression: "digitalMarketing"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-checkbox", {
                                attrs: { label: "Content Development" },
                                model: {
                                  value: _vm.contentDev,
                                  callback: function($$v) {
                                    _vm.contentDev = $$v
                                  },
                                  expression: "contentDev"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-select",
                                {
                                  attrs: {
                                    rules: [_vm.$requiredRule],
                                    label: "How did you get to know about us?",
                                    items: [
                                      "Social Media",
                                      "From a friend",
                                      "A poster, ticket or banner"
                                    ]
                                  },
                                  model: {
                                    value: _vm.reference,
                                    callback: function($$v) {
                                      _vm.reference = $$v
                                    },
                                    expression: "reference"
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "font-weight-bold title",
                                      attrs: { slot: "prepend" },
                                      slot: "prepend"
                                    },
                                    [_vm._v("?")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm.reference == "From a friend"
                                ? _c("v-text-field", {
                                    attrs: {
                                      rules: [_vm.$requiredRule],
                                      label: "Your Friend's Name",
                                      "prepend-icon": "person_outline"
                                    },
                                    model: {
                                      value: _vm.friend,
                                      callback: function($$v) {
                                        _vm.friend = $$v
                                      },
                                      expression: "friend"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    small: "",
                                    round: "",
                                    type: "submit",
                                    loading: _vm.joining
                                  }
                                },
                                [_vm._v("Go")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-window-item",
                        { key: 2 },
                        [
                          _c(
                            "center",
                            [
                              _c(
                                "v-avatar",
                                { staticClass: "primary mb-2" },
                                [
                                  _c("v-icon", { attrs: { dark: "" } }, [
                                    _vm._v("done")
                                  ])
                                ],
                                1
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("span", { staticClass: "title" }, [
                                _vm._v("Welcome to Ctrl-X Hub")
                              ]),
                              _c("br"),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(
                                  "You will recieve an email from us shortly"
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-progress-linear", {
                    attrs: {
                      value: (_vm.windows / 2) * 100,
                      indeterminate: _vm.joining
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { bottom: "", right: _vm.$vuetify.breakpoint.smAndUp },
          model: {
            value: _vm.showSnackbar,
            callback: function($$v) {
              _vm.showSnackbar = $$v
            },
            expression: "showSnackbar"
          }
        },
        [
          _c(
            "span",
            [
              _c(
                "v-icon",
                {
                  staticClass: "ml-2",
                  attrs: { color: _vm.snackbarMessage.iconColor }
                },
                [_vm._v(_vm._s(_vm.snackbarMessage.icon))]
              ),
              _vm._v(
                "\n            " +
                  _vm._s(_vm.snackbarMessage.message) +
                  "\n        "
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  _vm.showSnackbar = false
                }
              }
            },
            [_c("v-icon", [_vm._v("close")])],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__listToStyles__);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = __WEBPACK_IMPORTED_MODULE_0__listToStyles___default()(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = __WEBPACK_IMPORTED_MODULE_0__listToStyles___default()(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })
/******/ ]);
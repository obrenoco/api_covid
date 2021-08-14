"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/data";
exports.ids = ["pages/api/data"];
exports.modules = {

/***/ "./pages/api/data.js":
/*!***************************!*\
  !*** ./pages/api/data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction handler(req, res) {\n  const authorization = process.env.API_AUTHORIZATION;\n  const cookie = process.env.API_COOKIE;\n  const options = {\n    method: \"GET\",\n    url: \"https://imunizacao-es.saude.gov.br/_search\",\n    headers: {\n      cookie: cookie,\n      Authorization: authorization\n    }\n  };\n  axios__WEBPACK_IMPORTED_MODULE_0___default().request(options).then(function (response) {\n    let data = response.data;\n    res.status(200).json(data);\n  }).catch(function (error) {\n    console.error(error);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVlLFNBQVNDLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUEyQjtBQUN4QyxRQUFNQyxhQUFhLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxpQkFBbEM7QUFDQSxRQUFNQyxNQUFNLEdBQUdILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxVQUEzQjtBQUNBLFFBQU1DLE9BQU8sR0FBRztBQUNkQyxJQUFBQSxNQUFNLEVBQUUsS0FETTtBQUVkQyxJQUFBQSxHQUFHLEVBQUUsNENBRlM7QUFHZEMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BMLE1BQUFBLE1BQU0sRUFBRUEsTUFERDtBQUVQTSxNQUFBQSxhQUFhLEVBQUVWO0FBRlI7QUFISyxHQUFoQjtBQVNBSixFQUFBQSxvREFBQSxDQUNXVSxPQURYLEVBRUdNLElBRkgsQ0FFUSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3hCLFFBQUlDLElBQUksR0FBR0QsUUFBUSxDQUFDQyxJQUFwQjtBQUNBZixJQUFBQSxHQUFHLENBQUNnQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJGLElBQXJCO0FBQ0QsR0FMSCxFQU1HRyxLQU5ILENBTVMsVUFBVUMsS0FBVixFQUFpQjtBQUN0QkMsSUFBQUEsT0FBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7QUFDRCxHQVJIO0FBU0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZGF0YS5qcz9mMDU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBhdXRob3JpemF0aW9uID0gcHJvY2Vzcy5lbnYuQVBJX0FVVEhPUklaQVRJT047XG4gIGNvbnN0IGNvb2tpZSA9IHByb2Nlc3MuZW52LkFQSV9DT09LSUU7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIHVybDogXCJodHRwczovL2ltdW5pemFjYW8tZXMuc2F1ZGUuZ292LmJyL19zZWFyY2hcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBjb29raWU6IGNvb2tpZSxcbiAgICAgIEF1dGhvcml6YXRpb246IGF1dGhvcml6YXRpb24sXG4gICAgfSxcbiAgfTtcblxuICBheGlvc1xuICAgIC5yZXF1ZXN0KG9wdGlvbnMpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImF1dGhvcml6YXRpb24iLCJwcm9jZXNzIiwiZW52IiwiQVBJX0FVVEhPUklaQVRJT04iLCJjb29raWUiLCJBUElfQ09PS0lFIiwib3B0aW9ucyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/data.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/data.js"));
module.exports = __webpack_exports__;

})();
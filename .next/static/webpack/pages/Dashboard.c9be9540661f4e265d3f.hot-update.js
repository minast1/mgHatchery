"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Dashboard",{

/***/ "./lib/supabaseStore.ts":
/*!******************************!*\
  !*** ./lib/supabaseStore.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataStore\": function() { return /* binding */ dataStore; }\n/* harmony export */ });\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar dataStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.default)(function (set, get) {\n  return {\n    data: [],\n    setData: function setData(item) {\n      return set(function (state) {\n        return {\n          data: [].concat((0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.data), (0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(item))\n        };\n      });\n    },\n    updateData: function updateData(items) {\n      return set(function (state) {\n        return {\n          data: (0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(items)\n        };\n      });\n    } //find a way to override the dataa in  the store\n\n  };\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3VwYWJhc2VTdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBZ0NPLElBQU1DLFNBQVMsR0FBR0QsZ0RBQU0sQ0FBcUIsVUFBQ0UsR0FBRCxFQUFLQyxHQUFMO0FBQUEsU0FBYztBQUM3REMsSUFBQUEsSUFBSSxFQUFFLEVBRHVEO0FBRTlEQyxJQUFBQSxPQUFPLEVBQUUsaUJBQUNDLElBQUQ7QUFBQSxhQUFVSixHQUFHLENBQUMsVUFBQUssS0FBSztBQUFBLGVBQUs7QUFBRUgsVUFBQUEsSUFBSSx5TEFBTUcsS0FBSyxDQUFDSCxJQUFaLGdMQUFxQkUsSUFBckI7QUFBTixTQUFMO0FBQUEsT0FBTixDQUFiO0FBQUEsS0FGcUQ7QUFHOURFLElBQUFBLFVBQVUsRUFBRSxvQkFBQ0MsS0FBRDtBQUFBLGFBQVdQLEdBQUcsQ0FBQyxVQUFBSyxLQUFLO0FBQUEsZUFBSztBQUFDSCxVQUFBQSxJQUFJLEVBQUUsNktBQUlLLEtBQU47QUFBTCxTQUFMO0FBQUEsT0FBTixDQUFkO0FBQUEsS0FIa0QsQ0FJOUQ7O0FBSjhELEdBQWQ7QUFBQSxDQUFyQixDQUF4QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvc3VwYWJhc2VTdG9yZS50cz8yNTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlIGZyb20gJ3p1c3RhbmQnXG5cblxuXG5leHBvcnQgdHlwZSBJbnZvaWNlSXRlbSA9IHtcbiAgICBhbW91bnQ6IG51bWJlclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgICBxdWFudGl0eTogbnVtYmVyXG4gICAgcmF0ZTogbnVtYmVyXG59XG5cbmV4cG9ydCAgdHlwZSBJbnZvaWNlID0ge1xuICAgIGlkPzogbnVtYmVyXG4gICAgYWRkcmVzczogc3RyaW5nXG4gICAgaW52b2ljZV9pZDogc3RyaW5nXG4gICAgYW1vdW50OiBudW1iZXJcbiAgICBkYXRlOiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBwaG9uZTogbnVtYmVyXG4gICAgSXRlbTogSW52b2ljZUl0ZW1bXSBcbn1cblxuXG5cbmV4cG9ydCBpbnRlcmZhY2Ugc3VwYWJhc2VTdG9yZVN0YXRle1xuICAgIGRhdGE6IEludm9pY2VbXSB8IFtdXG4gICAgc2V0RGF0YTogKGl0ZW06IEludm9pY2VbXSkgPT4gdm9pZFxuICAgIHVwZGF0ZURhdGE6IChpdGVtczogSW52b2ljZVtdKSA9PiB2b2lkXG59XG5cblxuXG5leHBvcnQgY29uc3QgZGF0YVN0b3JlPSAgY3JlYXRlPHN1cGFiYXNlU3RvcmVTdGF0ZT4oKHNldCxnZXQpID0+ICh7XG4gICAgIGRhdGE6IFtdLFxuICAgIHNldERhdGE6IChpdGVtKSA9PiBzZXQoc3RhdGUgPT4gKHsgZGF0YTogWy4uLnN0YXRlLmRhdGEsIC4uLml0ZW1dIH0pKSxcbiAgICB1cGRhdGVEYXRhOiAoaXRlbXMpID0+IHNldChzdGF0ZSA9PiAoe2RhdGE6IFsuLi5pdGVtc119KSlcbiAgICAvL2ZpbmQgYSB3YXkgdG8gb3ZlcnJpZGUgdGhlIGRhdGFhIGluICB0aGUgc3RvcmVcbn0pKSJdLCJuYW1lcyI6WyJjcmVhdGUiLCJkYXRhU3RvcmUiLCJzZXQiLCJnZXQiLCJkYXRhIiwic2V0RGF0YSIsIml0ZW0iLCJzdGF0ZSIsInVwZGF0ZURhdGEiLCJpdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/supabaseStore.ts\n");

/***/ })

});
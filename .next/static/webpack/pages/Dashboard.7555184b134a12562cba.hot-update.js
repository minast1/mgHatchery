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

/***/ "./lib/invoiceStore.ts":
/*!*****************************!*\
  !*** ./lib/invoiceStore.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useInvoiceStore\": function() { return /* binding */ useInvoiceStore; }\n/* harmony export */ });\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar useInvoiceStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.default)(function (set, get) {\n  return {\n    items: [],\n    setItems: function setItems(goods) {\n      return set(function (state) {\n        return {\n          items: [].concat((0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.items), [goods])\n        };\n      });\n    },\n    resetItems: function resetItems() {\n      return set(function (state) {\n        return {\n          items: []\n        };\n      });\n    }\n  };\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaW52b2ljZVN0b3JlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFpQk8sSUFBTUMsZUFBZSxHQUFJRCxnREFBTSxDQUFlLFVBQUNFLEdBQUQsRUFBTUMsR0FBTjtBQUFBLFNBQWU7QUFFaEVDLElBQUFBLEtBQUssRUFBRSxFQUZ5RDtBQUdoRUMsSUFBQUEsUUFBUSxFQUFFLGtCQUFDQyxLQUFEO0FBQUEsYUFBV0osR0FBRyxDQUFDLFVBQUFLLEtBQUs7QUFBQSxlQUFLO0FBQUVILFVBQUFBLEtBQUsseUxBQU1HLEtBQUssQ0FBQ0gsS0FBWixJQUFtQkUsS0FBbkI7QUFBUCxTQUFMO0FBQUEsT0FBTixDQUFkO0FBQUEsS0FIc0Q7QUFJaEVFLElBQUFBLFVBQVUsRUFBRTtBQUFBLGFBQU1OLEdBQUcsQ0FBQyxVQUFBSyxLQUFLO0FBQUEsZUFBSztBQUFDSCxVQUFBQSxLQUFLLEVBQUU7QUFBUixTQUFMO0FBQUEsT0FBTixDQUFUO0FBQUE7QUFKb0QsR0FBZjtBQUFBLENBQWYsQ0FBL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2ludm9pY2VTdG9yZS50cz83NGY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNyZWF0ZSBmcm9tICd6dXN0YW5kJ1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuL3N1cGFiYXNlQ2xpZW50JztcbmltcG9ydCBjcmVhdGVDb250ZXh0IGZyb20gJ3p1c3RhbmQvY29udGV4dCdcbmltcG9ydCB7IEF1dGhTZXNzaW9uIH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJ1xuaW1wb3J0IHsgTWF0ZXJpYWxVaVBpY2tlcnNEYXRlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3BpY2tlcnMvdHlwaW5ncy9kYXRlJztcblxuZXhwb3J0IHR5cGUgb2JqID0geyBkZXNjcmlwdGlvbjogc3RyaW5nOyByYXRlOiBudW1iZXI7IHF1YW50aXR5OiBudW1iZXI7IGFtb3VudD86IG51bWJlciB9XG5cblxuZXhwb3J0IGludGVyZmFjZSBpbnZvaWNlU3RhdGUge1xuICAgXG4gICAgaXRlbXM6IHsgZGVzY3JpcHRpb246IHN0cmluZywgcmF0ZTogbnVtYmVyLCBxdWFudGl0eTogbnVtYmVyLCB9W10gfCBbXVxuICAgIHNldEl0ZW1zOiAoZ29vZHM6IG9iaikgPT4gdm9pZFxuICAgIHJlc2V0SXRlbXM6ICgpID0+IHZvaWRcblxufVxuXG5leHBvcnQgY29uc3QgdXNlSW52b2ljZVN0b3JlID0gIGNyZWF0ZTxpbnZvaWNlU3RhdGU+KChzZXQsIGdldCkgPT4gKHtcbiAgIFxuICAgIGl0ZW1zOiBbXSxcbiAgICBzZXRJdGVtczogKGdvb2RzKSA9PiBzZXQoc3RhdGUgPT4gKHsgaXRlbXM6IFsuLi5zdGF0ZS5pdGVtcywgZ29vZHNdIH0pKSxcbiAgICByZXNldEl0ZW1zOiAoKSA9PiBzZXQoc3RhdGUgPT4gKHtpdGVtczogW119KSlcblxufSkpIFxuIl0sIm5hbWVzIjpbImNyZWF0ZSIsInVzZUludm9pY2VTdG9yZSIsInNldCIsImdldCIsIml0ZW1zIiwic2V0SXRlbXMiLCJnb29kcyIsInN0YXRlIiwicmVzZXRJdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/invoiceStore.ts\n");

/***/ })

});
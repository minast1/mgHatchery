"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Dashboard/[id]",{

/***/ "./pages/Dashboard/[id].tsx":
/*!**********************************!*\
  !*** ./pages/Dashboard/[id].tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _lib_sessionStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/sessionStore */ \"./lib/sessionStore.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Invoice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Invoice */ \"./components/Invoice.tsx\");\n/* harmony import */ var _lib_supabaseStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/supabaseStore */ \"./lib/supabaseStore.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/lukatoni/Repositories/NextProjects/invoice-creator/pages/Dashboard/[id].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.makeStyles)(function (theme) {\n  return {\n    root: {\n      display: 'flex',\n      backgroundColor: 'white' // height: '100vh'\n\n    }\n  };\n});\nvar __N_SSG = true;\nfunction Dashboard(_ref) {\n  _s();\n\n  var data = _ref.data;\n  var classes = useStyles();\n  var session = (0,_lib_sessionStore__WEBPACK_IMPORTED_MODULE_4__.useStore)(function (state) {\n    return state.Usession;\n  });\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  var setData = (0,_lib_supabaseStore__WEBPACK_IMPORTED_MODULE_7__.dataStore)(function (state) {\n    return state.setIPData;\n  });\n  var params = router.query;\n  var invoiceId = params.id;\n\n  var fetchInvoice = /*#__PURE__*/function () {\n    var _ref2 = (0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(id) {\n      return _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchInvoice(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(); //console.log(data);\n\n  /* React.useEffect(() => {\n       if (invoiceId)  fetchInvoice(invoiceId)\n   }, [invoiceId]);\n    */\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: classes.root,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Invoice__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Dashboard, \"j8YmmpObduFc2tgNBsgruoGe7mQ=\", false, function () {\n  return [useStyles, _lib_sessionStore__WEBPACK_IMPORTED_MODULE_4__.useStore, next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];\n});\n\n_c = Dashboard;\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EYXNoYm9hcmQvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNTSxTQUFTLEdBQUdMLG9FQUFVLENBQUMsVUFBQ00sS0FBRDtBQUFBLFNBQVk7QUFDdkNDLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxPQUFPLEVBQUUsTUFETDtBQUVKQyxNQUFBQSxlQUFlLEVBQUUsT0FGYixDQUdMOztBQUhLO0FBRGlDLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQWtCZSxTQUFTQyxTQUFULE9BQXNDO0FBQUE7O0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUNuRCxNQUFNQyxPQUFPLEdBQUdQLFNBQVMsRUFBekI7QUFDQSxNQUFNUSxPQUFPLEdBQUdaLDJEQUFRLENBQUMsVUFBQWEsS0FBSztBQUFBLFdBQUtBLEtBQUssQ0FBQ0MsUUFBWDtBQUFBLEdBQU4sQ0FBeEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdkLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTWUsT0FBTyxHQUFHYiw2REFBUyxDQUFDLFVBQUFVLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNJLFNBQVY7QUFBQSxHQUFOLENBQXpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHSCxNQUFNLENBQUNJLEtBQXRCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRixNQUFNLENBQUNHLEVBQXpCOztBQUNBLE1BQU1DLFlBQVk7QUFBQSx3V0FBRyxpQkFBT0QsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpDLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEIsQ0FQbUQsQ0FXbEQ7O0FBQ0Y7QUFDRDtBQUNBO0FBQ0E7OztBQUNFLHNCQUNFO0FBQUssYUFBUyxFQUFFWCxPQUFPLENBQUNMLElBQXhCO0FBQUEsMkJBQ0UsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztHQXJCdUJHO1VBQ05MLFdBQ0FKLHlEQUNEQzs7O0tBSE9RIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0Rhc2hib2FyZC9baWRdLnRzeD84YTI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBHZXRTdGF0aWNQcm9wc0NvbnRleHQsIEdldFN0YXRpY1BhdGhzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnLi4vLi4vbGliL3Nlc3Npb25TdG9yZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBJbnZvaWNlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW52b2ljZSc7XG5pbXBvcnQgeyBkYXRhU3RvcmUsIEludm9pY2VJdGVtfSBmcm9tICcuLi8uLi9saWIvc3VwYWJhc2VTdG9yZSc7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uLy4uL2xpYi9zdXBhYmFzZUNsaWVudCc7XG5cblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAvLyBoZWlnaHQ6ICcxMDB2aCdcbiAgfSxcbn0pKTtcblxudHlwZSBJbnYgPSB7XG4gICBpZDogbnVtYmVyXG4gICAgYWRkcmVzczogc3RyaW5nXG4gICAgaW52b2ljZV9pZDogc3RyaW5nXG4gICAgYW1vdW50OiBudW1iZXJcbiAgICBkYXRlOiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBwaG9uZTogbnVtYmVyXG4gICAgSXRlbTogSW52b2ljZUl0ZW1bXSAgXG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoe2RhdGF9OntkYXRhOkludn0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBzZXNzaW9uID0gdXNlU3RvcmUoc3RhdGUgPT4gIHN0YXRlLlVzZXNzaW9uIClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3Qgc2V0RGF0YSA9IGRhdGFTdG9yZShzdGF0ZSA9PiBzdGF0ZS5zZXRJUERhdGEpXG4gIGNvbnN0IHBhcmFtcyA9IHJvdXRlci5xdWVyeVxuICBjb25zdCBpbnZvaWNlSWQgPSBwYXJhbXMuaWQgYXMgc3RyaW5nXG4gIGNvbnN0IGZldGNoSW52b2ljZSA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gICAgLy9mZXRjaCB0aGUgaW52b2ljZSB3aXRoIGlkID0gcGFyYW1zXG4gICAgXG4gIH1cbiAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gLyogUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChpbnZvaWNlSWQpICBmZXRjaEludm9pY2UoaW52b2ljZUlkKVxuICB9LCBbaW52b2ljZUlkXSk7XG4gICAqL1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEludm9pY2UvPlxuICAgIDwvZGl2PlxuICApIFxufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczpHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgICAgXG5sZXQgeyBkYXRhOiBJbnZvaWNlfSA9IGF3YWl0IHN1cGFiYXNlXG4gIC5mcm9tKCdJbnZvaWNlJylcbiAgLnNlbGVjdCgnKicpXG5cbiAgY29uc3QgcGF0aHMgPSBJbnZvaWNlPy5tYXAoKGl0ZW0pID0+ICh7XG4gIHBhcmFtczoge2lkIDogaXRlbS5pZC50b1N0cmluZygpfVxufSkpXG5cbiAgcmV0dXJuIHtwYXRocywgZmFsbGJhY2s6ZmFsc2UgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoe3BhcmFtc30pID0+IHtcbiAgXG4gICAgLy9jb25zb2xlLmxvZyhjb250ZXh0LnBhcmFtcz8uaWQpO1xuICBjb25zdCB7IGRhdGE6SW52b2ljZSB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKCdJbnZvaWNlJylcbiAgICAgIC5zZWxlY3QoYFxuICAgaWQsIGRhdGUsIGludm9pY2VfaWQsIG5hbWUsIGFkZHJlc3MsIHBob25lLCBhbW91bnQsXG4gICBJdGVtIChcbiAgICAgIGRlc2NyaXB0aW9uLCBxdWFudGl0eSwgcmF0ZSwgYW1vdW50KWApLmVxKCdpZCcsIHBhcmFtcz8uaWQpO1xuICAgIFxuICAgLy8gSW52b2ljZSAmJiBzZXREYXRhKEludm9pY2UpXG4gICAgICAvL3NldCBpdCB0byBzdGF0ZVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm90ZWN0ZWQ6IHRydWUsXG4gICAgICBkYXRhOiBJbnZvaWNlXG4gICAgfVxuICB9XG59XG4gIFxuICBcbiAgICJdLCJuYW1lcyI6WyJSZWFjdCIsIm1ha2VTdHlsZXMiLCJ1c2VTdG9yZSIsInVzZVJvdXRlciIsIkludm9pY2UiLCJkYXRhU3RvcmUiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwiRGFzaGJvYXJkIiwiZGF0YSIsImNsYXNzZXMiLCJzZXNzaW9uIiwic3RhdGUiLCJVc2Vzc2lvbiIsInJvdXRlciIsInNldERhdGEiLCJzZXRJUERhdGEiLCJwYXJhbXMiLCJxdWVyeSIsImludm9pY2VJZCIsImlkIiwiZmV0Y2hJbnZvaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Dashboard/[id].tsx\n");

/***/ })

});
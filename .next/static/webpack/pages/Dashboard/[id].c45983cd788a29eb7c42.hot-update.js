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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _lib_sessionStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/sessionStore */ \"./lib/sessionStore.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Invoice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Invoice */ \"./components/Invoice.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/lukatoni/Repositories/NextProjects/invoice-creator/pages/Dashboard/[id].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(function (theme) {\n  return {\n    root: {\n      display: 'flex',\n      backgroundColor: 'white' // height: '100vh'\n\n    }\n  };\n});\nvar __N_SSG = true;\nfunction Dashboard(_ref) {\n  _s();\n\n  var data = _ref.data;\n  var classes = useStyles();\n  var session = (0,_lib_sessionStore__WEBPACK_IMPORTED_MODULE_4__.useStore)(function (state) {\n    return state.Usession;\n  });\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  var params = router.query;\n  var invoiceId = params.id;\n\n  var fetchInvoice = /*#__PURE__*/function () {\n    var _ref2 = (0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(id) {\n      return _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchInvoice(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  console.log(data);\n  /* React.useEffect(() => {\n       if (invoiceId)  fetchInvoice(invoiceId)\n   }, [invoiceId]);\n    */\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: classes.root,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Invoice__WEBPACK_IMPORTED_MODULE_6__.default, {\n      invoiceData: data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Dashboard, \"j8YmmpObduFc2tgNBsgruoGe7mQ=\", false, function () {\n  return [useStyles, _lib_sessionStore__WEBPACK_IMPORTED_MODULE_4__.useStore, next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];\n});\n\n_c = Dashboard;\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EYXNoYm9hcmQvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQSxJQUFNSyxTQUFTLEdBQUdKLG9FQUFVLENBQUMsVUFBQ0ssS0FBRDtBQUFBLFNBQVk7QUFDdkNDLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxPQUFPLEVBQUUsTUFETDtBQUVKQyxNQUFBQSxlQUFlLEVBQUUsT0FGYixDQUdMOztBQUhLO0FBRGlDLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQWtCZSxTQUFTQyxTQUFULE9BQXNDO0FBQUE7O0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUNuRCxNQUFNQyxPQUFPLEdBQUdQLFNBQVMsRUFBekI7QUFDQSxNQUFNUSxPQUFPLEdBQUdYLDJEQUFRLENBQUMsVUFBQVksS0FBSztBQUFBLFdBQUtBLEtBQUssQ0FBQ0MsUUFBWDtBQUFBLEdBQU4sQ0FBeEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdiLHNEQUFTLEVBQXhCO0FBRUEsTUFBTWMsTUFBTSxHQUFHRCxNQUFNLENBQUNFLEtBQXRCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRixNQUFNLENBQUNHLEVBQXpCOztBQUNBLE1BQU1DLFlBQVk7QUFBQSx3V0FBRyxpQkFBT0QsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpDLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBSUNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWixJQUFaO0FBQ0Y7QUFDRDtBQUNBO0FBQ0E7O0FBQ0Usc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLE9BQU8sQ0FBQ0wsSUFBeEI7QUFBQSwyQkFDRSw4REFBQyx3REFBRDtBQUFTLGlCQUFXLEVBQUdJO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7R0FyQnVCRDtVQUNOTCxXQUNBSCx5REFDREM7OztLQUhPTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9EYXNoYm9hcmQvW2lkXS50c3g/OGEyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUHJvcHNDb250ZXh0LCBHZXRTdGF0aWNQYXRocyB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJy4uLy4uL2xpYi9zZXNzaW9uU3RvcmUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSW52b2ljZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ludm9pY2UnO1xuaW1wb3J0IHsgZGF0YVN0b3JlLCBJbnZvaWNlSXRlbX0gZnJvbSAnLi4vLi4vbGliL3N1cGFiYXNlU3RvcmUnO1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi8uLi9saWIvc3VwYWJhc2VDbGllbnQnO1xuXG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgLy8gaGVpZ2h0OiAnMTAwdmgnXG4gIH0sXG59KSk7XG5cbmV4cG9ydCB0eXBlIEludiA9IHtcbiAgIGlkOiBudW1iZXJcbiAgICBhZGRyZXNzOiBzdHJpbmdcbiAgICBpbnZvaWNlX2lkOiBzdHJpbmdcbiAgICBhbW91bnQ6IG51bWJlclxuICAgIGRhdGU6IHN0cmluZ1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIHBob25lOiBudW1iZXJcbiAgICBJdGVtOiBJbnZvaWNlSXRlbVtdICBcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCh7ZGF0YX06e2RhdGE6SW52fSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHNlc3Npb24gPSB1c2VTdG9yZShzdGF0ZSA9PiAgc3RhdGUuVXNlc3Npb24gKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuIFxuICBjb25zdCBwYXJhbXMgPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgaW52b2ljZUlkID0gcGFyYW1zLmlkIGFzIHN0cmluZ1xuICBjb25zdCBmZXRjaEludm9pY2UgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICAgIC8vZmV0Y2ggdGhlIGludm9pY2Ugd2l0aCBpZCA9IHBhcmFtc1xuICAgIFxuICB9XG4gICBjb25zb2xlLmxvZyhkYXRhKTtcbiAvKiBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKGludm9pY2VJZCkgIGZldGNoSW52b2ljZShpbnZvaWNlSWQpXG4gIH0sIFtpbnZvaWNlSWRdKTtcbiAgICovXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8SW52b2ljZSBpbnZvaWNlRGF0YT17IGRhdGF9Lz5cbiAgICA8L2Rpdj5cbiAgKSBcbn1cblxudHlwZSBQYXRocyA9IHtcbiAgcGFyYW1zOiB7XG4gICAgaWQ6c3RyaW5nXG4gIH1cbn1bXVxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOkdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICAgICBcbiAgICAgIGxldCB7IGRhdGE6IEludm9pY2V9ID0gYXdhaXQgc3VwYWJhc2VcbiAgLmZyb20oJ0ludm9pY2UnKVxuICAuc2VsZWN0KCcqJylcblxuICBjb25zdCBwYXRocyA9IEludm9pY2U/Lm1hcCgoaXRlbSkgPT4gKHtcbiAgcGFyYW1zOiB7aWQgOiBpdGVtLmlkLnRvU3RyaW5nKCl9XG59KSkgYXMgUGF0aHNcblxuICByZXR1cm4ge3BhdGhzLCBmYWxsYmFjazpmYWxzZSB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7cGFyYW1zfSkgPT4ge1xuICAgXG4gICAgLy9jb25zb2xlLmxvZyhjb250ZXh0LnBhcmFtcz8uaWQpO1xuICBjb25zdCB7IGRhdGE6SW52b2ljZSB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKCdJbnZvaWNlJylcbiAgICAgIC5zZWxlY3QoYFxuICAgaWQsIGRhdGUsIGludm9pY2VfaWQsIG5hbWUsIGFkZHJlc3MsIHBob25lLCBhbW91bnQsXG4gICBJdGVtIChcbiAgICAgIGRlc2NyaXB0aW9uLCBxdWFudGl0eSwgcmF0ZSwgYW1vdW50KWApLmVxKCdpZCcsIHBhcmFtcz8uaWQpO1xuICAgICAgLy9zZXQgaXQgdG8gc3RhdGVcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvdGVjdGVkOiB0cnVlLFxuICAgICAgZGF0YTogSW52b2ljZVxuICAgIH1cbiAgfVxufVxuICBcbiAgXG4gICAiXSwibmFtZXMiOlsiUmVhY3QiLCJtYWtlU3R5bGVzIiwidXNlU3RvcmUiLCJ1c2VSb3V0ZXIiLCJJbnZvaWNlIiwidXNlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsIkRhc2hib2FyZCIsImRhdGEiLCJjbGFzc2VzIiwic2Vzc2lvbiIsInN0YXRlIiwiVXNlc3Npb24iLCJyb3V0ZXIiLCJwYXJhbXMiLCJxdWVyeSIsImludm9pY2VJZCIsImlkIiwiZmV0Y2hJbnZvaWNlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Dashboard/[id].tsx\n");

/***/ })

});
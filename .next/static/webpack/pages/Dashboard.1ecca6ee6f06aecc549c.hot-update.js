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

/***/ "./components/InvoiceTable.tsx":
/*!*************************************!*\
  !*** ./components/InvoiceTable.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CollapsibleTable; }\n/* harmony export */ });\n/* harmony import */ var _material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TableFooter */ \"./node_modules/@material-ui/core/esm/TableFooter/index.js\");\n/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TablePagination */ \"./node_modules/@material-ui/core/esm/TablePagination/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/index.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/index.js\");\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableContainer */ \"./node_modules/@material-ui/core/esm/TableContainer/index.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/index.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _lib_supabaseStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/supabaseStore */ \"./lib/supabaseStore.ts\");\n/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Row */ \"./components/Row.tsx\");\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/supabaseClient */ \"./lib/supabaseClient.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/lukatoni/Repositories/NextProjects/invoice-creator/components/InvoiceTable.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction CollapsibleTable() {\n  _s();\n\n  var _this = this;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState(0),\n      _React$useState2 = (0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_React$useState, 2),\n      page = _React$useState2[0],\n      setPage = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default().useState(10),\n      _React$useState4 = (0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_React$useState3, 2),\n      rowsPerPage = _React$useState4[0],\n      setRowsPerPage = _React$useState4[1];\n\n  var data = (0,_lib_supabaseStore__WEBPACK_IMPORTED_MODULE_5__.dataStore)(function (state) {\n    return state.data;\n  });\n  var setData = (0,_lib_supabaseStore__WEBPACK_IMPORTED_MODULE_5__.dataStore)(function (state) {\n    return state.setData;\n  });\n  var updateData = (0,_lib_supabaseStore__WEBPACK_IMPORTED_MODULE_5__.dataStore)(function (state) {\n    return state.updateData;\n  });\n\n  var handleChangePage = function handleChangePage(event, newPage) {\n    setPage(newPage);\n  };\n\n  var fetchInvoices = /*#__PURE__*/function () {\n    var _ref = (0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var _yield$supabase$from$, Invoice;\n\n      return _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_7__.supabase.from('Invoice').select(\"\\n         id, date, invoice_id, name, address, phone, amount,\\n         Item (\\n         description, quantity, rate, amount)\").order('id', {\n                ascending: false\n              });\n\n            case 2:\n              _yield$supabase$from$ = _context.sent;\n              Invoice = _yield$supabase$from$.data;\n              if (Invoice) updateData(Invoice);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchInvoices() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(function () {\n    var mySubscription = _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_7__.supabase.from('Item').on('*', function () {\n      return fetchInvoices();\n    }).subscribe();\n    return function () {\n      _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_7__.supabase.removeSubscription(mySubscription);\n    };\n  }, []); // console.log(data);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_8__.default, {\n    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__.default,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10__.default, {\n      \"aria-label\": \"collapsible table\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__.default, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__.default, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {\n            children: \"ITEMS\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {\n            align: \"left\",\n            children: \"DATE\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {\n            align: \"left\",\n            children: \"CUST. NAME\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {\n            align: \"left\",\n            children: \"CONTACT\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {\n            align: \"left\",\n            children: \"AMOUNT\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {\n            align: \"center\",\n            children: \"STATUS\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 14\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__.default, {\n            align: \"right\",\n            children: \"ACTIONS\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this), data.map(function (el) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_6__.default, {\n          invoiceItem: el\n        }, el.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 15\n        }, _this);\n      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_14__.default, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__.default, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_15__.default, {\n            rowsPerPage: rowsPerPage,\n            count: -1,\n            page: page,\n            onPageChange: handleChangePage\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 14\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CollapsibleTable, \"aJbDr3A8N4Phpx/uUbVgQ/Ku+To=\");\n\n_c = CollapsibleTable;\n\nvar _c;\n\n$RefreshReg$(_c, \"CollapsibleTable\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLGlFQUFEO0FBQVcsaUJBQUssRUFBQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSCxlQVFFLDhEQUFDLGlFQUFEO0FBQVcsaUJBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFlTVUsSUFBSSxDQUFDa0IsR0FBTCxDQUFTLFVBQUFDLEVBQUU7QUFBQSw0QkFDVCw4REFBQyx5Q0FBRDtBQUFpQixxQkFBVyxFQUFHQTtBQUEvQixXQUFVQSxFQUFFLENBQUNDLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVgsQ0FmTixlQW1CRTtBQUFBLCtCQUNFLDhEQUFDLGdFQUFEO0FBQUEsaUNBQ0c7QUFDTCx1QkFBVyxFQUFFdEIsV0FEUjtBQUVMLGlCQUFLLEVBQUUsQ0FBQyxDQUZIO0FBR0wsZ0JBQUksRUFBRUYsSUFIRDtBQUlMLHdCQUFZLEVBQUdRO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1DRDs7R0FqRXlCVjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnZvaWNlVGFibGUudHN4PzYxNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCB7ICBUYWJsZUZvb3RlciwgVGFibGVQYWdpbmF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgZGF0YVN0b3JlIH0gZnJvbSAnLi4vbGliL3N1cGFiYXNlU3RvcmUnO1xuaW1wb3J0IFJvdyBmcm9tICcuL1Jvdyc7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uL2xpYi9zdXBhYmFzZUNsaWVudCc7XG5cblxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2xsYXBzaWJsZVRhYmxlKCkge1xuIFxuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDApXG4gICAgY29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxMCk7XG4gICAgY29uc3QgZGF0YSA9IGRhdGFTdG9yZShzdGF0ZSA9PiBzdGF0ZS5kYXRhKTtcbiAgICBjb25zdCBzZXREYXRhID0gZGF0YVN0b3JlKHN0YXRlID0+IHN0YXRlLnNldERhdGEpO1xuICAgICBjb25zdCB1cGRhdGVEYXRhID0gZGF0YVN0b3JlKHN0YXRlID0+IHN0YXRlLnVwZGF0ZURhdGEpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4gfCBudWxsLCBuZXdQYWdlOiBudW1iZXIpID0+IHtcbiAgICBzZXRQYWdlKG5ld1BhZ2UpO1xuICB9O1xuIFxuICAgY29uc3QgZmV0Y2hJbnZvaWNlcyA9IGFzeW5jICgpID0+e1xuICAgICAgIGNvbnN0IHsgZGF0YTogSW52b2ljZSB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgIC5mcm9tKCdJbnZvaWNlJylcbiAgICAgICAgIC5zZWxlY3QoYFxuICAgICAgICAgaWQsIGRhdGUsIGludm9pY2VfaWQsIG5hbWUsIGFkZHJlc3MsIHBob25lLCBhbW91bnQsXG4gICAgICAgICBJdGVtIChcbiAgICAgICAgIGRlc2NyaXB0aW9uLCBxdWFudGl0eSwgcmF0ZSwgYW1vdW50KWApLm9yZGVyKCdpZCcse2FzY2VuZGluZzpmYWxzZX0pO1xuICAgICAgIFxuICAgICAgICBpZihJbnZvaWNlKSB1cGRhdGVEYXRhKEludm9pY2UpXG4gICB9XG4gICAgXG4gICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIFxuICAgICBjb25zdCBteVN1YnNjcmlwdGlvbiA9IHN1cGFiYXNlLmZyb20oJ0l0ZW0nKS5vbignKicsICgpID0+IGZldGNoSW52b2ljZXMoKSkuc3Vic2NyaWJlKClcbiAgICAgcmV0dXJuICgpID0+IHsgc3VwYWJhc2UucmVtb3ZlU3Vic2NyaXB0aW9uKG15U3Vic2NyaXB0aW9uKSB9XG4gICB9LCBbXSk7XG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgPFRhYmxlIGFyaWEtbGFiZWw9XCJjb2xsYXBzaWJsZSB0YWJsZVwiPlxuICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+SVRFTVM8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImxlZnRcIj5EQVRFPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwibGVmdFwiPkNVU1QuIE5BTUU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+Q09OVEFDVDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImxlZnRcIj5BTU9VTlQ8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+U1RBVFVTPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5BQ1RJT05TPC9UYWJsZUNlbGw+XG4gICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgIFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGEubWFwKGVsID0+IChcbiAgICAgICAgICAgICAgPFJvdyBrZXk9e2VsLmlkfSBpbnZvaWNlSXRlbT17IGVsIH0vPlxuICAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8VGFibGVGb290ZXI+XG4gICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgIDxUYWJsZVBhZ2luYXRpb25cbiAgICAgICAgcm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxuICAgICAgICBjb3VudD17LTF9XG4gICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgIG9uUGFnZUNoYW5nZT17IGhhbmRsZUNoYW5nZVBhZ2V9XG4gICAgICAvPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICA8L1RhYmxlRm9vdGVyPlxuICAgICAgPC9UYWJsZT5cbiAgICAgXG4gICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhYmxlIiwiVGFibGVDZWxsIiwiVGFibGVDb250YWluZXIiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlBhcGVyIiwiZGF0YVN0b3JlIiwiUm93Iiwic3VwYWJhc2UiLCJDb2xsYXBzaWJsZVRhYmxlIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsInJvd3NQZXJQYWdlIiwic2V0Um93c1BlclBhZ2UiLCJkYXRhIiwic3RhdGUiLCJzZXREYXRhIiwidXBkYXRlRGF0YSIsImhhbmRsZUNoYW5nZVBhZ2UiLCJldmVudCIsIm5ld1BhZ2UiLCJmZXRjaEludm9pY2VzIiwiZnJvbSIsInNlbGVjdCIsIm9yZGVyIiwiYXNjZW5kaW5nIiwiSW52b2ljZSIsInVzZUVmZmVjdCIsIm15U3Vic2NyaXB0aW9uIiwib24iLCJzdWJzY3JpYmUiLCJyZW1vdmVTdWJzY3JpcHRpb24iLCJtYXAiLCJlbCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/InvoiceTable.tsx\n");

/***/ })

});
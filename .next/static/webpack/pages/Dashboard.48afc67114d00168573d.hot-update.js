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

/***/ "./components/Main.tsx":
/*!*****************************!*\
  !*** ./components/Main.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Box */ \"./node_modules/@material-ui/core/esm/Box/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _InvoiceTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InvoiceTable */ \"./components/InvoiceTable.tsx\");\n/* harmony import */ var _Generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Generator */ \"./components/Generator.tsx\");\n/* harmony import */ var material_ui_search_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui-search-bar */ \"./node_modules/material-ui-search-bar/lib/index.js\");\n/* harmony import */ var _lib_supabaseStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/supabaseStore */ \"./lib/supabaseStore.ts\");\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/supabaseClient */ \"./lib/supabaseClient.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/lukatoni/Repositories/NextProjects/invoice-creator/components/Main.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__.makeStyles)(function (theme) {\n  var _searchForm;\n\n  return {\n    iconButton: {\n      padding: 10\n    },\n    input: {\n      marginLeft: theme.spacing(1),\n      flex: 1\n    },\n    searchForm: (_searchForm = {\n      // padding: '2px 4px',\n      // display: 'flex',\n      // alignItems: 'center',\n      '&:hover, &:focus': {\n        border: '1px solid blue'\n      }\n    }, (0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_searchForm, theme.breakpoints.down('md'), {\n      width: 300 ///\n\n    }), (0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_searchForm, \"width\", 500), (0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_searchForm, \"marginBottom\", 20), _searchForm),\n    focused: {}\n  };\n});\n\nvar Main = function Main() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      invoice = _useState[0],\n      addInvoice = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),\n      searchData = _useState2[0],\n      changeData = _useState2[1];\n\n  var originalData = (0,_lib_supabaseStore__WEBPACK_IMPORTED_MODULE_8__.dataStore)(function (state) {\n    return state.data;\n  });\n  var updateData = (0,_lib_supabaseStore__WEBPACK_IMPORTED_MODULE_8__.dataStore)(function (state) {\n    return state.updateData;\n  });\n  var copyOfOriginalData = originalData;\n  console.log({\n    'original': copyOfOriginalData\n  });\n\n  var queryInvoiceData = /*#__PURE__*/function () {\n    var _ref = (0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(queryText) {\n      var _yield$supabase$from$, Invoice;\n\n      return _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_9__.supabase.from('Invoice').select(\"\\n         id, date, invoice_id, name, address, phone, amount,\\n         Item (\\n         description, quantity, rate, amount)\").textSearch('name', \"\".concat(queryText));\n\n            case 2:\n              _yield$supabase$from$ = _context.sent;\n              Invoice = _yield$supabase$from$.data;\n              if (Invoice) updateData(Invoice); //update the table data with results\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function queryInvoiceData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var resetTableToOriginalState = function resetTableToOriginalState() {\n    changeData(\"\");\n    console.log({\n      'onReset': copyOfOriginalData\n    });\n    updateData(copyOfOriginalData);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {\n    container: true,\n    spacing: 3,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {\n      item: true,\n      xs: 12,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {\n        display: \"flex\",\n        justifyContent: \"flex-end\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__.default, {\n          variant: \"contained\",\n          color: \"primary\",\n          onClick: function onClick() {\n            return addInvoice(!invoice);\n          },\n          children: \"add invoice\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 15\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }, _this), invoice && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {\n      item: true,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Generator__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 23\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {\n      item: true,\n      xs: 12,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14__.default, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15__.default, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(material_ui_search_bar__WEBPACK_IMPORTED_MODULE_7__.default, {\n            className: classes.searchForm,\n            value: searchData,\n            onChange: function onChange(newValue) {\n              return queryInvoiceData(newValue);\n            },\n            onCancelSearch: function onCancelSearch() {\n              return resetTableToOriginalState;\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InvoiceTable__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 19\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 15\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Main, \"DoFOIc0hT+lzTWiuqo6lT3rK9lU=\", false, function () {\n  return [useStyles];\n});\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQWhCO0FBQTRCLGVBQUssRUFBQyxTQUFsQztBQUE0QyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1QLFVBQVUsQ0FBQyxDQUFDRCxPQUFGLENBQWhCO0FBQUEsV0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURILEVBUUVBLE9BQU8saUJBQUk7QUFBTSxVQUFJLE1BQVY7QUFBQSw2QkFDWiw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJiLGVBWUc7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFBLDZCQUNFO0FBQUEsK0JBQ0Y7QUFBQSxrQ0FDRSw4REFBQywyREFBRDtBQUNFLHFCQUFTLEVBQUVELE9BQU8sQ0FBQ1AsVUFEckI7QUFFRSxpQkFBSyxFQUFFVSxVQUZUO0FBR0Usb0JBQVEsRUFBRSxrQkFBQ2dCLFFBQUQ7QUFBQSxxQkFBY1AsZ0JBQWdCLENBQUNPLFFBQUQsQ0FBOUI7QUFBQSxhQUhaO0FBSUUsMEJBQWMsRUFBRTtBQUFBLHFCQUFPRCx5QkFBUDtBQUFBO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFPTSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREw7QUE2QkgsQ0ExREQ7O0dBQU1uQjtVQUNZZDs7O0tBRFpjO0FBNEROLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFpbi50c3g/ZmQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBDYXJkLCBDYXJkQ29udGVudCwgR3JpZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IEludm9pY2VUYWJsZSBmcm9tICcuL0ludm9pY2VUYWJsZSc7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcbmltcG9ydCBHZW5lcmF0b3IgZnJvbSAnLi9HZW5lcmF0b3InO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ21hdGVyaWFsLXVpLXNlYXJjaC1iYXInO1xuaW1wb3J0IHsgZGF0YVN0b3JlLCBJbnZvaWNlIH0gZnJvbSAnLi4vbGliL3N1cGFiYXNlU3RvcmUnO1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi9saWIvc3VwYWJhc2VDbGllbnQnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuXG4gIGljb25CdXR0b246IHsgcGFkZGluZzogMTAgfSxcbiAgaW5wdXQ6IHtcbiAgICBcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIGZsZXg6IDEgLFxuICB9LFxuICBzZWFyY2hGb3JtOiB7XG4gICAvLyBwYWRkaW5nOiAnMnB4IDRweCcsXG4gICAvLyBkaXNwbGF5OiAnZmxleCcsXG4gICAvLyBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAnJjpob3ZlciwgJjpmb2N1cyc6IHtcbiAgICAgICBib3JkZXI6JzFweCBzb2xpZCBibHVlJ1xuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG4gICAgICB3aWR0aDogMzAwLFxuICAgICAvLy9cbiAgICB9LFxuICAgIHdpZHRoOiA1MDAsXG4gICAgLy9oZWlnaHQ6IDQyLFxuICAgLy8gYm9yZGVyOiAnMXB4IHNvbGlkIGRhcmtncmF5JyxcbiAgIC8vIGJvcmRlclJhZGl1czogNSxcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICB9LFxuICBmb2N1c2VkOiB7fVxuICBcbn0pKTtcblxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtpbnZvaWNlLCBhZGRJbnZvaWNlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaERhdGEsIGNoYW5nZURhdGFdID0gdXNlU3RhdGU8c3RyaW5nPignJylcbiAgY29uc3Qgb3JpZ2luYWxEYXRhID0gZGF0YVN0b3JlKHN0YXRlID0+IHN0YXRlLmRhdGEpO1xuICBjb25zdCB1cGRhdGVEYXRhID0gZGF0YVN0b3JlKHN0YXRlID0+IHN0YXRlLnVwZGF0ZURhdGEpO1xuICBsZXQgY29weU9mT3JpZ2luYWxEYXRhOkludm9pY2VbXSA9IG9yaWdpbmFsRGF0YVxuIFxuICBjb25zb2xlLmxvZyh7ICdvcmlnaW5hbCc6IGNvcHlPZk9yaWdpbmFsRGF0YSB9KTtcbiAgY29uc3QgcXVlcnlJbnZvaWNlRGF0YSA9IGFzeW5jIChxdWVyeVRleHQ6c3RyaW5nKSA9PiB7XG4gICAgICAgIFxuICAgIGxldCB7IGRhdGE6IEludm9pY2UgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAuZnJvbSgnSW52b2ljZScpXG4gICAgICAuc2VsZWN0KGBcbiAgICAgICAgIGlkLCBkYXRlLCBpbnZvaWNlX2lkLCBuYW1lLCBhZGRyZXNzLCBwaG9uZSwgYW1vdW50LFxuICAgICAgICAgSXRlbSAoXG4gICAgICAgICBkZXNjcmlwdGlvbiwgcXVhbnRpdHksIHJhdGUsIGFtb3VudClgKVxuICAgICAgLnRleHRTZWFyY2goJ25hbWUnLCBgJHtxdWVyeVRleHR9YCk7XG4gICAgaWYgKEludm9pY2UpIHVwZGF0ZURhdGEoSW52b2ljZSk7XG5cbiAgICAvL3VwZGF0ZSB0aGUgdGFibGUgZGF0YSB3aXRoIHJlc3VsdHNcbiAgfVxuXG4gIGNvbnN0IHJlc2V0VGFibGVUb09yaWdpbmFsU3RhdGUgPSAoKSA9PiB7XG4gICAgY2hhbmdlRGF0YShcIlwiKTtcbiAgICBjb25zb2xlLmxvZyh7ICdvblJlc2V0JzogY29weU9mT3JpZ2luYWxEYXRhIH0pO1xuICAgICAgIHVwZGF0ZURhdGEoY29weU9mT3JpZ2luYWxEYXRhKVxuICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGFkZEludm9pY2UoIWludm9pY2UpfT5hZGQgaW52b2ljZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgXG4gICAgICAgIHtcbiAgICAgICAgICAgaW52b2ljZSAmJiA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxHZW5lcmF0b3IgLz5cbiAgICAgICAgPC9HcmlkPn1cbiAgICAgICAgXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8U2VhcmNoQmFyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEZvcm19XG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaERhdGF9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhuZXdWYWx1ZSkgPT4gcXVlcnlJbnZvaWNlRGF0YShuZXdWYWx1ZSl9XG4gICAgICAgICAgICAgICAgb25DYW5jZWxTZWFyY2g9eygpID0+ICByZXNldFRhYmxlVG9PcmlnaW5hbFN0YXRlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEludm9pY2VUYWJsZS8+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtYWtlU3R5bGVzIiwiSW52b2ljZVRhYmxlIiwiR2VuZXJhdG9yIiwidXNlU3RhdGUiLCJTZWFyY2hCYXIiLCJkYXRhU3RvcmUiLCJzdXBhYmFzZSIsInVzZVN0eWxlcyIsInRoZW1lIiwiaWNvbkJ1dHRvbiIsInBhZGRpbmciLCJpbnB1dCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwiZmxleCIsInNlYXJjaEZvcm0iLCJib3JkZXIiLCJicmVha3BvaW50cyIsImRvd24iLCJ3aWR0aCIsImZvY3VzZWQiLCJNYWluIiwiY2xhc3NlcyIsImludm9pY2UiLCJhZGRJbnZvaWNlIiwic2VhcmNoRGF0YSIsImNoYW5nZURhdGEiLCJvcmlnaW5hbERhdGEiLCJzdGF0ZSIsImRhdGEiLCJ1cGRhdGVEYXRhIiwiY29weU9mT3JpZ2luYWxEYXRhIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5SW52b2ljZURhdGEiLCJxdWVyeVRleHQiLCJmcm9tIiwic2VsZWN0IiwidGV4dFNlYXJjaCIsIkludm9pY2UiLCJyZXNldFRhYmxlVG9PcmlnaW5hbFN0YXRlIiwibmV3VmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Main.tsx\n");

/***/ })

});
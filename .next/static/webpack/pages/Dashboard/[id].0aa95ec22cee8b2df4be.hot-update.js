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

/***/ "./components/SpanningTable.tsx":
/*!**************************************!*\
  !*** ./components/SpanningTable.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpanningTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/index.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/esm/TableBody/index.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/index.js\");\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableContainer */ \"./node_modules/@material-ui/core/esm/TableContainer/index.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/index.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/lukatoni/Repositories/NextProjects/invoice-creator/components/SpanningTable.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar TAX_RATE = 0.07;\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({\n  table: {\n    minWidth: 700\n  },\n  font: {\n    fontWeight: 'bold',\n    fontSize: 14\n  },\n  balancefont: {\n    fontWeight: 'bold',\n    fontSize: 16\n  }\n});\n\nfunction ccyFormat(num) {\n  return \"\".concat(num === null || num === void 0 ? void 0 : num.toFixed(2));\n}\n\nfunction priceRow(qty, unit) {\n  return qty * unit;\n}\n\nfunction createRow(desc, qty, unit) {\n  var price = priceRow(qty, unit);\n  return {\n    desc: desc,\n    qty: qty,\n    unit: unit,\n    price: price\n  };\n}\n\nfunction subtotal(items) {\n  return items === null || items === void 0 ? void 0 : items.map(function (_ref) {\n    var amount = _ref.amount;\n    return amount;\n  }).reduce(function (accumulator, currentValue) {\n    return accumulator + currentValue;\n  });\n}\n\nfunction SpanningTable(_ref2) {\n  _s();\n\n  var _this = this;\n\n  var invoiceItems = _ref2.invoiceItems,\n      amount = _ref2.amount;\n  var classes = useStyles();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__.default, {\n      className: classes.table,\n      \"aria-label\": \"spanning table\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__.default, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__.default, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {\n            children: \"ITEM DESCRIPTION\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {\n            align: \"right\",\n            children: \"RATE\\u20B5\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {\n            align: \"right\",\n            children: \"QTY\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {\n            align: \"right\",\n            children: \"AMOUNT(\\u20B5)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__.default, {\n        children: [invoiceItems === null || invoiceItems === void 0 ? void 0 : invoiceItems.map(function (row, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__.default, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {\n              children: row.description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {\n              align: \"right\",\n              children: row.rate\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {\n              align: \"right\",\n              children: row.quantity\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {\n              align: \"right\",\n              children: ccyFormat(row.amount)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 15\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, _this);\n        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__.default, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {\n            rowSpan: 3\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {\n            colSpan: 2,\n            align: \"right\",\n            classes: {\n              root: classes.font\n            },\n            children: \"TOTAL\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {\n            align: \"right\",\n            children: [\"\\u20B5 \", ccyFormat(subtotal(invoiceItems)), \"\\u20B5\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__.default, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {\n            align: \"right\",\n            classes: {\n              root: classes.font\n            },\n            style: {\n              borderBottomColor: '#42a5f5'\n            },\n            children: \"PAID\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {\n            align: \"right\",\n            style: {\n              borderBottomColor: '#42a5f5'\n            },\n            children: [\"\\u20B5 \", ccyFormat(amount)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__.default, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {\n            colSpan: 2,\n            align: \"right\",\n            classes: {\n              root: classes.balancefont\n            },\n            children: \"BALANCE DUE GH\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {\n            align: \"right\",\n            classes: {\n              root: classes.balancefont\n            },\n            children: [\"\\u20B5 \", ccyFormat(subtotal(invoiceItems) - amount)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SpanningTable, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = SpanningTable;\n\nvar _c;\n\n$RefreshReg$(_c, \"SpanningTable\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlDRDs7R0E1Q3VCSTtVQUNOdkI7OztLQURNdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGFubmluZ1RhYmxlLnRzeD80YTgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCB7IEludm9pY2VJdGVtIH0gZnJvbSAnLi4vbGliL3N1cGFiYXNlU3RvcmUnO1xuXG5cbmNvbnN0IFRBWF9SQVRFID0gMC4wNztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHRhYmxlOiB7XG4gICAgbWluV2lkdGg6IDcwMCxcbiAgfSxcbiAgZm9udDoge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTRcbiAgfSxcbiAgYmFsYW5jZWZvbnQ6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE2XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjY3lGb3JtYXQobnVtOiBudW1iZXIpIHtcbiAgcmV0dXJuIGAke251bT8udG9GaXhlZCgyKX1gO1xufVxuXG5mdW5jdGlvbiBwcmljZVJvdyhxdHk6IG51bWJlciwgdW5pdDogbnVtYmVyKSB7XG4gIHJldHVybiBxdHkgKiB1bml0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3coZGVzYzogc3RyaW5nLCBxdHk6IG51bWJlciwgdW5pdDogbnVtYmVyKSB7XG4gIGNvbnN0IHByaWNlID0gcHJpY2VSb3cocXR5LCB1bml0KTtcbiAgcmV0dXJuIHsgZGVzYywgcXR5LCB1bml0LCBwcmljZSB9O1xufVxuXG5cbmZ1bmN0aW9uIHN1YnRvdGFsKGl0ZW1zOiBJbnZvaWNlSXRlbVtdKSB7XG4gIHJldHVybiBpdGVtcz8ubWFwKCh7IGFtb3VudCB9KSA9PiBhbW91bnQpLnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSkgPT4gYWNjdW11bGF0b3IgKyBjdXJyZW50VmFsdWUpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwYW5uaW5nVGFibGUoe2ludm9pY2VJdGVtcywgYW1vdW50fToge2ludm9pY2VJdGVtczpJbnZvaWNlSXRlbVtdLCBhbW91bnQ6bnVtYmVyfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVDb250YWluZXI+XG4gICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwic3Bhbm5pbmcgdGFibGVcIj5cblxuICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+SVRFTSBERVNDUklQVElPTjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+UkFUReKCtTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+UVRZPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5BTU9VTlQo4oK1KTwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgIHtpbnZvaWNlSXRlbXM/Lm1hcCgocm93LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFRhYmxlUm93IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cuZGVzY3JpcHRpb259PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cucmF0ZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5xdWFudGl0eX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e2NjeUZvcm1hdChyb3cuYW1vdW50KX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCByb3dTcGFuPXszfSAvPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXsyfSBhbGlnbj1cInJpZ2h0XCIgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLmZvbnQgfX0+VE9UQUw8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPuKCtSB7Y2N5Rm9ybWF0KHN1YnRvdGFsKGludm9pY2VJdGVtcykpfeKCtTwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgPFRhYmxlQ2VsbD48L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5mb250IH19IHN0eWxlPXt7IGJvcmRlckJvdHRvbUNvbG9yOiAnIzQyYTVmNScgfX0+UEFJRDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3R5bGU9e3sgYm9yZGVyQm90dG9tQ29sb3I6ICcjNDJhNWY1JyB9fT7igrUge2NjeUZvcm1hdChhbW91bnQpfTwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXsyfSBhbGlnbj1cInJpZ2h0XCIgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLmJhbGFuY2Vmb250IH19PkJBTEFOQ0UgRFVFIEdIPC9UYWJsZUNlbGw+XG5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5iYWxhbmNlZm9udCB9fT7igrUge2NjeUZvcm1hdChzdWJ0b3RhbChpbnZvaWNlSXRlbXMpIC1hbW91bnQpfTwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgIDwvVGFibGVCb2R5PlxuXG4gICAgICA8L1RhYmxlPlxuICAgIDwvVGFibGVDb250YWluZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtYWtlU3R5bGVzIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUNvbnRhaW5lciIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiVEFYX1JBVEUiLCJ1c2VTdHlsZXMiLCJ0YWJsZSIsIm1pbldpZHRoIiwiZm9udCIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImJhbGFuY2Vmb250IiwiY2N5Rm9ybWF0IiwibnVtIiwidG9GaXhlZCIsInByaWNlUm93IiwicXR5IiwidW5pdCIsImNyZWF0ZVJvdyIsImRlc2MiLCJwcmljZSIsInN1YnRvdGFsIiwiaXRlbXMiLCJtYXAiLCJhbW91bnQiLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsImN1cnJlbnRWYWx1ZSIsIlNwYW5uaW5nVGFibGUiLCJpbnZvaWNlSXRlbXMiLCJjbGFzc2VzIiwicm93IiwiaW5kZXgiLCJkZXNjcmlwdGlvbiIsInJhdGUiLCJxdWFudGl0eSIsInJvb3QiLCJib3JkZXJCb3R0b21Db2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SpanningTable.tsx\n");

/***/ })

});
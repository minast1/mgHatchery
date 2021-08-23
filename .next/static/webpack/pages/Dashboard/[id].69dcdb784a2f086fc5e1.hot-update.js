"use strict";
self["webpackHotUpdate_N_E"]("pages/Dashboard/[id]",{

/***/ "./components/SpanningTable.tsx":
/*!**************************************!*\
  !*** ./components/SpanningTable.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SpanningTable; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/lukatoni/DockerProjects/NextProjects/invoice-creator/components/SpanningTable.tsx",
    _s = $RefreshSig$();









var TAX_RATE = 0.07;
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
  table: {
    minWidth: 700
  },
  font: {
    fontWeight: 'bold',
    fontSize: 14
  },
  balancefont: {
    fontWeight: 'bold',
    fontSize: 16
  }
});

function ccyFormat(num) {
  return "".concat(num.toFixed(2));
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  var price = priceRow(qty, unit);
  return {
    desc: desc,
    qty: qty,
    unit: unit,
    price: price
  };
}

function subtotal(items) {
  return items.map(function (_ref) {
    var price = _ref.price;
    return price;
  }).reduce(function (sum, i) {
    return sum + i;
  }, 0);
}

var rows = [createRow('Paperclips (Box)', 100, 1.15), createRow('Paper (Case)', 10, 45.99), createRow('Waste Basket', 2, 17.99)];
var invoiceSubtotal = subtotal(rows);
var invoiceTaxes = TAX_RATE * invoiceSubtotal;
var invoiceTotal = invoiceTaxes + invoiceSubtotal;
function SpanningTable() {
  _s();

  var _this = this;

  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__.default, {
      className: classes.table,
      "aria-label": "spanning table",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            children: "DESCRIPTION"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            align: "right",
            children: "RATE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            align: "right",
            children: "QTY"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            align: "right",
            children: "AMOUNT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__.default, {
        children: [rows.map(function (row) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__.default, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
              children: row.desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
              align: "right",
              children: row.qty
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
              align: "right",
              children: row.unit
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
              align: "right",
              children: ccyFormat(row.price)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, _this)]
          }, row.desc, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this);
        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            rowSpan: 3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            colSpan: 2,
            align: "right",
            classes: {
              root: classes.font
            },
            children: "TOTAL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            align: "right",
            children: ccyFormat(invoiceSubtotal)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            align: "right",
            classes: {
              root: classes.font
            },
            style: {
              borderBottomColor: '#42a5f5'
            },
            children: "PAID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            align: "right",
            style: {
              borderBottomColor: '#42a5f5'
            },
            children: ccyFormat(invoiceTaxes)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            colSpan: 2,
            align: "right",
            classes: {
              root: classes.balancefont
            },
            children: "BALANCE DUE GHC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            align: "right",
            children: ccyFormat(invoiceTotal)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

_s(SpanningTable, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = SpanningTable;

var _c;

$RefreshReg$(_c, "SpanningTable");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRGFzaGJvYXJkL1tpZF0uNjlkY2RiNzg0YTJmMDg2ZmM1ZTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTVEsUUFBUSxHQUFHLElBQWpCO0FBRUEsSUFBTUMsU0FBUyxHQUFHUixvRUFBVSxDQUFDO0FBQzNCUyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsUUFBUSxFQUFFO0FBREwsR0FEb0I7QUFJM0JDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxVQUFVLEVBQUUsTUFEUjtBQUVKQyxJQUFBQSxRQUFRLEVBQUU7QUFGTixHQUpxQjtBQVEzQkMsRUFBQUEsV0FBVyxFQUFFO0FBQ1hGLElBQUFBLFVBQVUsRUFBRSxNQUREO0FBRVhDLElBQUFBLFFBQVEsRUFBRTtBQUZDO0FBUmMsQ0FBRCxDQUE1Qjs7QUFjQSxTQUFTRSxTQUFULENBQW1CQyxHQUFuQixFQUFnQztBQUM5QixtQkFBVUEsR0FBRyxDQUFDQyxPQUFKLENBQVksQ0FBWixDQUFWO0FBQ0Q7O0FBRUQsU0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBK0JDLElBQS9CLEVBQTZDO0FBQzNDLFNBQU9ELEdBQUcsR0FBR0MsSUFBYjtBQUNEOztBQUVELFNBQVNDLFNBQVQsQ0FBbUJDLElBQW5CLEVBQWlDSCxHQUFqQyxFQUE4Q0MsSUFBOUMsRUFBNEQ7QUFDMUQsTUFBTUcsS0FBSyxHQUFHTCxRQUFRLENBQUNDLEdBQUQsRUFBTUMsSUFBTixDQUF0QjtBQUNBLFNBQU87QUFBRUUsSUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFILElBQUFBLEdBQUcsRUFBSEEsR0FBUjtBQUFhQyxJQUFBQSxJQUFJLEVBQUpBLElBQWI7QUFBbUJHLElBQUFBLEtBQUssRUFBTEE7QUFBbkIsR0FBUDtBQUNEOztBQVNELFNBQVNDLFFB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O0FBQUE7QUFBQSxrQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlDRDs7R0E1Q3VCQztVQUNOMUI7OztLQURNMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGFubmluZ1RhYmxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IHsgQm94LCBHcmlkLCBUYWJsZUZvb3RlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuY29uc3QgVEFYX1JBVEUgPSAwLjA3O1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgdGFibGU6IHtcbiAgICBtaW5XaWR0aDogNzAwLFxuICB9LFxuICBmb250OiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNFxuICB9LFxuICBiYWxhbmNlZm9udDoge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTZcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNjeUZvcm1hdChudW06IG51bWJlcikge1xuICByZXR1cm4gYCR7bnVtLnRvRml4ZWQoMil9YDtcbn1cblxuZnVuY3Rpb24gcHJpY2VSb3cocXR5OiBudW1iZXIsIHVuaXQ6IG51bWJlcikge1xuICByZXR1cm4gcXR5ICogdW5pdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm93KGRlc2M6IHN0cmluZywgcXR5OiBudW1iZXIsIHVuaXQ6IG51bWJlcikge1xuICBjb25zdCBwcmljZSA9IHByaWNlUm93KHF0eSwgdW5pdCk7XG4gIHJldHVybiB7IGRlc2MsIHF0eSwgdW5pdCwgcHJpY2UgfTtcbn1cblxuaW50ZXJmYWNlIFJvdyB7XG4gIGRlc2M6IHN0cmluZztcbiAgcXR5OiBudW1iZXI7XG4gIHVuaXQ6IG51bWJlcjtcbiAgcHJpY2U6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gc3VidG90YWwoaXRlbXM6IFJvd1tdKSB7XG4gIHJldHVybiBpdGVtcy5tYXAoKHsgcHJpY2UgfSkgPT4gcHJpY2UpLnJlZHVjZSgoc3VtLCBpKSA9PiBzdW0gKyBpLCAwKTtcbn1cblxuY29uc3Qgcm93cyA9IFtcbiAgY3JlYXRlUm93KCdQYXBlcmNsaXBzIChCb3gpJywgMTAwLCAxLjE1KSxcbiAgY3JlYXRlUm93KCdQYXBlciAoQ2FzZSknLCAxMCwgNDUuOTkpLFxuICBjcmVhdGVSb3coJ1dhc3RlIEJhc2tldCcsIDIsIDE3Ljk5KSxcbl07XG5cbmNvbnN0IGludm9pY2VTdWJ0b3RhbCA9IHN1YnRvdGFsKHJvd3MpO1xuY29uc3QgaW52b2ljZVRheGVzID0gVEFYX1JBVEUgKiBpbnZvaWNlU3VidG90YWw7XG5jb25zdCBpbnZvaWNlVG90YWwgPSBpbnZvaWNlVGF4ZXMgKyBpbnZvaWNlU3VidG90YWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwYW5uaW5nVGFibGUoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxUYWJsZUNvbnRhaW5lcj5cbiAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IGFyaWEtbGFiZWw9XCJzcGFubmluZyB0YWJsZVwiPlxuXG4gICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5ERVNDUklQVElPTjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+UkFURTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+UVRZPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5BTU9VTlQ8L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93LmRlc2N9PlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cuZGVzY308L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5xdHl9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cudW5pdH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e2NjeUZvcm1hdChyb3cucHJpY2UpfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICA8VGFibGVDZWxsIHJvd1NwYW49ezN9IC8+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezJ9IGFsaWduPVwicmlnaHRcIiBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMuZm9udCB9fT5UT1RBTDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e2NjeUZvcm1hdChpbnZvaWNlU3VidG90YWwpfTwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgPFRhYmxlQ2VsbD48L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5mb250IH19IHN0eWxlPXt7IGJvcmRlckJvdHRvbUNvbG9yOiAnIzQyYTVmNScgfX0+UEFJRDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3R5bGU9e3sgYm9yZGVyQm90dG9tQ29sb3I6ICcjNDJhNWY1JyB9fT57Y2N5Rm9ybWF0KGludm9pY2VUYXhlcyl9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezJ9IGFsaWduPVwicmlnaHRcIiBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMuYmFsYW5jZWZvbnQgfX0+QkFMQU5DRSBEVUUgR0hDPC9UYWJsZUNlbGw+XG5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntjY3lGb3JtYXQoaW52b2ljZVRvdGFsKX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICA8L1RhYmxlQm9keT5cblxuICAgICAgPC9UYWJsZT5cbiAgICA8L1RhYmxlQ29udGFpbmVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWFrZVN0eWxlcyIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVDb250YWluZXIiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlRBWF9SQVRFIiwidXNlU3R5bGVzIiwidGFibGUiLCJtaW5XaWR0aCIsImZvbnQiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJiYWxhbmNlZm9udCIsImNjeUZvcm1hdCIsIm51bSIsInRvRml4ZWQiLCJwcmljZVJvdyIsInF0eSIsInVuaXQiLCJjcmVhdGVSb3ciLCJkZXNjIiwicHJpY2UiLCJzdWJ0b3RhbCIsIml0ZW1zIiwibWFwIiwicmVkdWNlIiwic3VtIiwiaSIsInJvd3MiLCJpbnZvaWNlU3VidG90YWwiLCJpbnZvaWNlVGF4ZXMiLCJpbnZvaWNlVG90YWwiLCJTcGFubmluZ1RhYmxlIiwiY2xhc3NlcyIsInJvdyIsInJvb3QiLCJib3JkZXJCb3R0b21Db2xvciJdLCJzb3VyY2VSb290IjoiIn0=
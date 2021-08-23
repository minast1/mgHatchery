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
            classes: {
              root: classes.balancefont
            },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRGFzaGJvYXJkL1tpZF0uNmQ2YjFiZmE0YmRiNzFmOWJhZjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTVEsUUFBUSxHQUFHLElBQWpCO0FBRUEsSUFBTUMsU0FBUyxHQUFHUixvRUFBVSxDQUFDO0FBQzNCUyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsUUFBUSxFQUFFO0FBREwsR0FEb0I7QUFJM0JDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxVQUFVLEVBQUUsTUFEUjtBQUVKQyxJQUFBQSxRQUFRLEVBQUU7QUFGTixHQUpxQjtBQVEzQkMsRUFBQUEsV0FBVyxFQUFFO0FBQ1hGLElBQUFBLFVBQVUsRUFBRSxNQUREO0FBRVhDLElBQUFBLFFBQVEsRUFBRTtBQUZDO0FBUmMsQ0FBRCxDQUE1Qjs7QUFjQSxTQUFTRSxTQUFULENBQW1CQyxHQUFuQixFQUFnQztBQUM5QixtQkFBVUEsR0FBRyxDQUFDQyxPQUFKLENBQVksQ0FBWixDQUFWO0FBQ0Q7O0FBRUQsU0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBK0JDLElBQS9CLEVBQTZDO0FBQzNDLFNBQU9ELEdBQUcsR0FBR0MsSUFBYjtBQUNEOztBQUVELFNBQVNDLFNBQVQsQ0FBbUJDLElBQW5CLEVBQWlDSCxHQUFqQyxFQUE4Q0MsSUFBOUMsRUFBNEQ7QUFDMUQsTUFBTUcsS0FBSyxHQUFHTCxRQUFRLENBQUNDLEdBQUQsRUFBTUMsSUFBTixDQUF0QjtBQUNBLFNBQU87QUFBRUUsSUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFILElBQUFBLEdBQUcsRUFBSEEsR0FBUjtBQUFhQyxJQUFBQSxJQUFJLEVBQUpBLElBQWI7QUFBbUJHLElBQUFBLEtBQUssRUFBTEE7QUFBbkIsR0FBUDtBQUNEOztBQVNELFNBQVNDLFFB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LENBQUNyQjtBQUFoQixhQUFsQztBQUFBLHNCQUFrRUMsU0FBUyxDQUFDa0IsWUFBRDtBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUNEOztHQTVDdUJDO1VBQ04xQjs7O0tBRE0wQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NwYW5uaW5nVGFibGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgeyBCb3gsIEdyaWQsIFRhYmxlRm9vdGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5jb25zdCBUQVhfUkFURSA9IDAuMDc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICB0YWJsZToge1xuICAgIG1pbldpZHRoOiA3MDAsXG4gIH0sXG4gIGZvbnQ6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE0XG4gIH0sXG4gIGJhbGFuY2Vmb250OiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNlxuICB9XG59KTtcblxuZnVuY3Rpb24gY2N5Rm9ybWF0KG51bTogbnVtYmVyKSB7XG4gIHJldHVybiBgJHtudW0udG9GaXhlZCgyKX1gO1xufVxuXG5mdW5jdGlvbiBwcmljZVJvdyhxdHk6IG51bWJlciwgdW5pdDogbnVtYmVyKSB7XG4gIHJldHVybiBxdHkgKiB1bml0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3coZGVzYzogc3RyaW5nLCBxdHk6IG51bWJlciwgdW5pdDogbnVtYmVyKSB7XG4gIGNvbnN0IHByaWNlID0gcHJpY2VSb3cocXR5LCB1bml0KTtcbiAgcmV0dXJuIHsgZGVzYywgcXR5LCB1bml0LCBwcmljZSB9O1xufVxuXG5pbnRlcmZhY2UgUm93IHtcbiAgZGVzYzogc3RyaW5nO1xuICBxdHk6IG51bWJlcjtcbiAgdW5pdDogbnVtYmVyO1xuICBwcmljZTogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBzdWJ0b3RhbChpdGVtczogUm93W10pIHtcbiAgcmV0dXJuIGl0ZW1zLm1hcCgoeyBwcmljZSB9KSA9PiBwcmljZSkucmVkdWNlKChzdW0sIGkpID0+IHN1bSArIGksIDApO1xufVxuXG5jb25zdCByb3dzID0gW1xuICBjcmVhdGVSb3coJ1BhcGVyY2xpcHMgKEJveCknLCAxMDAsIDEuMTUpLFxuICBjcmVhdGVSb3coJ1BhcGVyIChDYXNlKScsIDEwLCA0NS45OSksXG4gIGNyZWF0ZVJvdygnV2FzdGUgQmFza2V0JywgMiwgMTcuOTkpLFxuXTtcblxuY29uc3QgaW52b2ljZVN1YnRvdGFsID0gc3VidG90YWwocm93cyk7XG5jb25zdCBpbnZvaWNlVGF4ZXMgPSBUQVhfUkFURSAqIGludm9pY2VTdWJ0b3RhbDtcbmNvbnN0IGludm9pY2VUb3RhbCA9IGludm9pY2VUYXhlcyArIGludm9pY2VTdWJ0b3RhbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Bhbm5pbmdUYWJsZSgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQ29udGFpbmVyPlxuICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cInNwYW5uaW5nIHRhYmxlXCI+XG5cbiAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICA8VGFibGVDZWxsPkRFU0NSSVBUSU9OPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5SQVRFPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5RVFk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkFNT1VOVDwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgIHtyb3dzLm1hcCgocm93KSA9PiAoXG4gICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cuZGVzY30+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5kZXNjfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LnF0eX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy51bml0fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57Y2N5Rm9ybWF0KHJvdy5wcmljZSl9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgcm93U3Bhbj17M30gLz5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Mn0gYWxpZ249XCJyaWdodFwiIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5mb250IH19PlRPVEFMPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57Y2N5Rm9ybWF0KGludm9pY2VTdWJ0b3RhbCl9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICA8VGFibGVDZWxsPjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLmZvbnQgfX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tQ29sb3I6ICcjNDJhNWY1JyB9fT5QQUlEPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzdHlsZT17eyBib3JkZXJCb3R0b21Db2xvcjogJyM0MmE1ZjUnIH19PntjY3lGb3JtYXQoaW52b2ljZVRheGVzKX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Mn0gYWxpZ249XCJyaWdodFwiIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5iYWxhbmNlZm9udCB9fT5CQUxBTkNFIERVRSBHSEM8L1RhYmxlQ2VsbD5cblxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLmJhbGFuY2Vmb250IH19PntjY3lGb3JtYXQoaW52b2ljZVRvdGFsKX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICA8L1RhYmxlQm9keT5cblxuICAgICAgPC9UYWJsZT5cbiAgICA8L1RhYmxlQ29udGFpbmVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWFrZVN0eWxlcyIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVDb250YWluZXIiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlRBWF9SQVRFIiwidXNlU3R5bGVzIiwidGFibGUiLCJtaW5XaWR0aCIsImZvbnQiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJiYWxhbmNlZm9udCIsImNjeUZvcm1hdCIsIm51bSIsInRvRml4ZWQiLCJwcmljZVJvdyIsInF0eSIsInVuaXQiLCJjcmVhdGVSb3ciLCJkZXNjIiwicHJpY2UiLCJzdWJ0b3RhbCIsIml0ZW1zIiwibWFwIiwicmVkdWNlIiwic3VtIiwiaSIsInJvd3MiLCJpbnZvaWNlU3VidG90YWwiLCJpbnZvaWNlVGF4ZXMiLCJpbnZvaWNlVG90YWwiLCJTcGFubmluZ1RhYmxlIiwiY2xhc3NlcyIsInJvdyIsInJvb3QiLCJib3JkZXJCb3R0b21Db2xvciJdLCJzb3VyY2VSb290IjoiIn0=
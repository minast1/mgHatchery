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
            lineNumber: 67,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            align: "right",
            children: "RATE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            align: "right",
            children: "QTY"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            align: "right",
            children: "AMOUNT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__.default, {
        children: [rows.map(function (row) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__.default, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
              children: row.desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
              align: "right",
              children: row.qty
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
              align: "right",
              children: row.unit
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
              align: "right",
              children: ccyFormat(row.price)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this)]
          }, row.desc, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this);
        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            rowSpan: 3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
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
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            align: "right",
            children: ccyFormat(invoiceSubtotal)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            align: "right",
            classes: {
              root: classes.font
            },
            children: "PAID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            align: "right",
            children: ccyFormat(invoiceTaxes)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            colSpan: 2,
            align: "right",
            classes: {
              root: classes.font
            },
            children: "BALANCE DUE GHC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__.default, {
            align: "right",
            children: ccyFormat(invoiceTotal)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRGFzaGJvYXJkL1tpZF0uNDg4Mjc2OWQzMTMxMTQ3OGY2MWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTVEsUUFBUSxHQUFHLElBQWpCO0FBRUEsSUFBTUMsU0FBUyxHQUFHUixvRUFBVSxDQUFDO0FBQzNCUyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsUUFBUSxFQUFFO0FBREwsR0FEb0I7QUFJM0JDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxVQUFVLEVBQUUsTUFEUjtBQUVKQyxJQUFBQSxRQUFRLEVBQUU7QUFGTjtBQUpxQixDQUFELENBQTVCOztBQVVBLFNBQVNDLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQWdDO0FBQzlCLG1CQUFVQSxHQUFHLENBQUNDLE9BQUosQ0FBWSxDQUFaLENBQVY7QUFDRDs7QUFFRCxTQUFTQyxRQUFULENBQWtCQyxHQUFsQixFQUErQkMsSUFBL0IsRUFBNkM7QUFDM0MsU0FBT0QsR0FBRyxHQUFHQyxJQUFiO0FBQ0Q7O0FBRUQsU0FBU0MsU0FBVCxDQUFtQkMsSUFBbkIsRUFBaUNILEdBQWpDLEVBQThDQyxJQUE5QyxFQUE0RDtBQUMxRCxNQUFNRyxLQUFLLEdBQUdMLFFBQVEsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLENBQXRCO0FBQ0EsU0FBTztBQUFFRSxJQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUUgsSUFBQUEsR0FBRyxFQUFIQSxHQUFSO0FBQWFDLElBQUFBLElBQUksRUFBSkEsSUFBYjtBQUFtQkcsSUFBQUEsS0FBSyxFQUFMQTtBQUFuQixHQUFQO0FBQ0Q7O0FBU0QsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBZ0M7QUFDOUIsU0FBT0EsS0FBSyxDQUFDQyxHQUFOLENBQVU7QUFBQSxRQUFHSCxLQUFILFFBQUdBLEtBQUg7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X0UvLi9jb21wb25lbnRzL1NwYW5uaW5nVGFibGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgeyBCb3gsIEdyaWQsIFRhYmxlRm9vdGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5jb25zdCBUQVhfUkFURSA9IDAuMDc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICB0YWJsZToge1xuICAgIG1pbldpZHRoOiA3MDAsXG4gIH0sXG4gIGZvbnQ6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE0XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjY3lGb3JtYXQobnVtOiBudW1iZXIpIHtcbiAgcmV0dXJuIGAke251bS50b0ZpeGVkKDIpfWA7XG59XG5cbmZ1bmN0aW9uIHByaWNlUm93KHF0eTogbnVtYmVyLCB1bml0OiBudW1iZXIpIHtcbiAgcmV0dXJuIHF0eSAqIHVuaXQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdyhkZXNjOiBzdHJpbmcsIHF0eTogbnVtYmVyLCB1bml0OiBudW1iZXIpIHtcbiAgY29uc3QgcHJpY2UgPSBwcmljZVJvdyhxdHksIHVuaXQpO1xuICByZXR1cm4geyBkZXNjLCBxdHksIHVuaXQsIHByaWNlIH07XG59XG5cbmludGVyZmFjZSBSb3cge1xuICBkZXNjOiBzdHJpbmc7XG4gIHF0eTogbnVtYmVyO1xuICB1bml0OiBudW1iZXI7XG4gIHByaWNlOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIHN1YnRvdGFsKGl0ZW1zOiBSb3dbXSkge1xuICByZXR1cm4gaXRlbXMubWFwKCh7IHByaWNlIH0pID0+IHByaWNlKS5yZWR1Y2UoKHN1bSwgaSkgPT4gc3VtICsgaSwgMCk7XG59XG5cbmNvbnN0IHJvd3MgPSBbXG4gIGNyZWF0ZVJvdygnUGFwZXJjbGlwcyAoQm94KScsIDEwMCwgMS4xNSksXG4gIGNyZWF0ZVJvdygnUGFwZXIgKENhc2UpJywgMTAsIDQ1Ljk5KSxcbiAgY3JlYXRlUm93KCdXYXN0ZSBCYXNrZXQnLCAyLCAxNy45OSksXG5dO1xuXG5jb25zdCBpbnZvaWNlU3VidG90YWwgPSBzdWJ0b3RhbChyb3dzKTtcbmNvbnN0IGludm9pY2VUYXhlcyA9IFRBWF9SQVRFICogaW52b2ljZVN1YnRvdGFsO1xuY29uc3QgaW52b2ljZVRvdGFsID0gaW52b2ljZVRheGVzICsgaW52b2ljZVN1YnRvdGFsO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGFubmluZ1RhYmxlKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVDb250YWluZXI+XG4gICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwic3Bhbm5pbmcgdGFibGVcIj5cblxuICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+REVTQ1JJUFRJT048L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlJBVEU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlFUWTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+QU1PVU5UPC9UYWJsZUNlbGw+XG4gICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAge3Jvd3MubWFwKChyb3cpID0+IChcbiAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5kZXNjfT5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LmRlc2N9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cucXR5fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LnVuaXR9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntjY3lGb3JtYXQocm93LnByaWNlKX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCByb3dTcGFuPXszfSAvPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXsyfSBhbGlnbj1cInJpZ2h0XCIgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLmZvbnQgfX0+VE9UQUw8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntjY3lGb3JtYXQoaW52b2ljZVN1YnRvdGFsKX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMuZm9udCB9fT5QQUlEPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57Y2N5Rm9ybWF0KGludm9pY2VUYXhlcyl9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezJ9IGFsaWduPVwicmlnaHRcIiBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMuZm9udCB9fT5CQUxBTkNFIERVRSBHSEM8L1RhYmxlQ2VsbD5cblxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e2NjeUZvcm1hdChpbnZvaWNlVG90YWwpfTwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgIDwvVGFibGVCb2R5PlxuXG4gICAgICA8L1RhYmxlPlxuICAgIDwvVGFibGVDb250YWluZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtYWtlU3R5bGVzIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUNvbnRhaW5lciIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiVEFYX1JBVEUiLCJ1c2VTdHlsZXMiLCJ0YWJsZSIsIm1pbldpZHRoIiwiZm9udCIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImNjeUZvcm1hdCIsIm51bSIsInRvRml4ZWQiLCJwcmljZVJvdyIsInF0eSIsInVuaXQiLCJjcmVhdGVSb3ciLCJkZXNjIiwicHJpY2UiLCJzdWJ0b3RhbCIsIml0ZW1zIiwibWFwIiwicmVkdWNlIiwic3VtIiwiaSIsInJvd3MiLCJpbnZvaWNlU3VidG90YWwiLCJpbnZvaWNlVGF4ZXMiLCJpbnZvaWNlVG90YWwiLCJTcGFubmluZ1RhYmxlIiwiY2xhc3NlcyIsInJvdyIsInJvb3QiXSwic291cmNlUm9vdCI6IiJ9
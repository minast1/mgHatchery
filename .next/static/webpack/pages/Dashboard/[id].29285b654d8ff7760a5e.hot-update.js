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
            style: {
              borderBottomColor: 'blue'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRGFzaGJvYXJkL1tpZF0uMjkyODViNjU0ZDhmZjc3NjBhNWUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTVEsUUFBUSxHQUFHLElBQWpCO0FBRUEsSUFBTUMsU0FBUyxHQUFHUixvRUFBVSxDQUFDO0FBQzNCUyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsUUFBUSxFQUFFO0FBREwsR0FEb0I7QUFJM0JDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxVQUFVLEVBQUUsTUFEUjtBQUVKQyxJQUFBQSxRQUFRLEVBQUU7QUFGTjtBQUpxQixDQUFELENBQTVCOztBQVVBLFNBQVNDLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQWdDO0FBQzlCLG1CQUFVQSxHQUFHLENBQUNDLE9BQUosQ0FBWSxDQUFaLENBQVY7QUFDRDs7QUFFRCxTQUFTQyxRQUFULENBQWtCQyxHQUFsQixFQUErQkMsSUFBL0IsRUFBNkM7QUFDM0MsU0FBT0QsR0FBRyxHQUFHQyxJQUFiO0FBQ0Q7O0FBRUQsU0FBU0MsU0FBVCxDQUFtQkMsSUFBbkIsRUFBaUNILEdBQWpDLEVBQThDQyxJQUE5QyxFQUE0RDtBQUMxRCxNQUFNRyxLQUFLLEdBQUdMLFFBQVEsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLENBQXRCO0FBQ0EsU0FBTztBQUFFRSxJQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUUgsSUFBQUEsR0FBRyxFQUFIQSxHQUFSO0FBQWFDLElBQUFBLElBQUksRUFBSkEsSUFBYjtBQUFtQkcsSUFBQUEsS0FBSyxFQUFMQTtBQUFuQixHQUFQO0FBQ0Q7O0FBU0QsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBZ0M7QUFDOUIsU0FBT0EsS0FBSyxDQUFDQyxHQUFOLENBQVU7QUFBQSxRQUFHSCxLQUFILFFBQUdBLEtBQUg7QUFBQSxXQUFlQSxLQUFmO0FBQUEsR0FBVixFQUFnQ0ksTUFBaEMsQ0FBdUMsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOO0FBQUEsV0FBWUQsR0FBRyxHQUFHQyxDQUFsQjtBQUFBLEdBQXZDLEVBQTRELENBQTVELENBQVA7QUFDRDs7QUFFRCxJQUFNQyxJQUFJLEdBQUcsQ0FDWFQsU0FBUyxDQUFDLGtCQUFELEVBQXFCLEdBQXJCLEVBQTBCLElBQTFCLENBREUsRUFFWEEsU0FBUyxDQUFDLGNBQUQsRUFBaUIsRUFBakIsRUFBcUIsS0FBckIsQ0FGRSxFQUdYQSxTQUFTLENBQUMsY0FBRCxFQUFpQixDQUFqQixFQUFvQixLQUFwQixDQUhFLENBQWI7QUFNQSxJQUFNVSxlQUFlLEdBQUdQLFFBQVEsQ0FBQ00sSUFBRCxDQUFoQztBQUNBLElBQU1FLFlBQVksR0FBR3hCLFFBQVEsR0FBR3VCLGVBQWhDO0FBQ0EsSUFBTUUsWUFBWSxHQUFHRCxZQUFZLEdBQUdELGVBQXBDO0FBRWUsU0FBU0csYUFBVCxHQUF5QjtBQUFBOztBQUFBOztBQUN0QyxNQUFNQyxPQUFPLEdBQUcxQixTQUFTLEVBQXpCO0FBRUEsc0JBQ0UsOERBQUMscUVBQUQ7QUFBQSwyQkFDRSw4REFBQyw0REFBRDtBQUFPLGVBQVMsRUFBRTBCLE9BQU8sQ0FBQ3pCLEtBQTFCO0FBQWlDLG9CQUFXLGdCQUE1QztBQUFBLDhCQUVFLDhEQUFDLGdFQUFEO0FBQUEsK0JBQ0UsOERBQUMsK0RBQUQ7QUFBQSxrQ0FDRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLDhEQUFDLGdFQUFEO0FBQVcsaUJBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFLDhEQUFDLGdFQUFEO0FBQVcsaUJBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRixlQUlFLDhEQUFDLGdFQUFEO0FBQVcsaUJBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFVRSw4REFBQyxnRUFBRDtBQUFBLG1CQUNHb0IsSUFBSSxDQUFDSixHQUFMLENBQVMsVUFBQ1UsR0FBRDtBQUFBLDhCQUNSLDhEQUFDLCtEQUFEO0FBQUEsb0NBQ0UsOERBQUMsZ0VBQUQ7QUFBQSx3QkFBWUEsR0FBRyxDQUFDZDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsZ0VBQUQ7QUFBVyxtQkFBSyxFQUFDLE9BQWpCO0FBQUEsd0JBQTBCYyxHQUFHLENBQUNqQjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0UsOERBQUMsZ0VBQUQ7QUFBVyxtQkFBSyxFQUFDLE9BQWpCO0FBQUEsd0JBQTBCaUIsR0FBRyxDQUFDaEI7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQUlFLDhEQUFDLGdFQUFEO0FBQVcsbUJBQUssRUFBQyxPQUFqQjtBQUFBLHdCQUEwQkwsU0FBUyxDQUFDcUIsR0FBRyxDQUFDYixLQUFMO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQSxhQUFlYSxHQUFHLENBQUNkLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFULENBREgsZUFTRSw4REFBQywrREFBRDtBQUFBLGtDQUNFLDhEQUFDLGdFQUFEO0FBQVcsbUJBQU8sRUFBRTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUsOERBQUMsZ0VBQUQ7QUFBVyxtQkFBTyxFQUFFLENBQXBCO0FBQXVCLGlCQUFLLEVBQUMsT0FBN0I7QUFBcUMsbUJBQU8sRUFBRTtBQUFFZSxjQUFBQSxJQUFJLEVBQUVGLE9BQU8sQ0FBQ3ZCO0FBQWhCLGFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBR0UsOERBQUMsZ0VBQUQ7QUFBVyxpQkFBSyxFQUFDLE9BQWpCO0FBQUEsc0JBQTBCRyxTQUFTLENBQUNnQixlQUFEO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGLGVBY0UsOERBQUMsK0RBQUQ7QUFBQSxrQ0FDRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUsOERBQUMsZ0VBQUQ7QUFBVyxpQkFBSyxFQUFDLE9BQWpCO0FBQXlCLG1CQUFPLEVBQUU7QUFBRU0sY0FBQUEsSUFBSSxFQUFFRixPQUFPLENBQUN2QjtBQUFoQixhQUFsQztBQUEwRCxpQkFBSyxFQUFFO0FBQUUwQixjQUFBQSxpQkFBaUIsRUFBRTtBQUFyQixhQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFLDhEQUFDLGdFQUFEO0FBQVcsaUJBQUssRUFBQyxPQUFqQjtBQUFBLHNCQUEwQnZCLFNBQVMsQ0FBQ2lCLFlBQUQ7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEYsZUFtQkUsOERBQUMsK0RBQUQ7QUFBQSxrQ0FDRSw4REFBQyxnRUFBRDtBQUFXLG1CQUFPLEVBQUUsQ0FBcEI7QUFBdUIsaUJBQUssRUFBQyxPQUE3QjtBQUFxQyxtQkFBTyxFQUFFO0FBQUVLLGNBQUFBLElBQUksRUFBRUYsT0FBTyxDQUFDdkI7QUFBaEIsYUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFHRSw4REFBQyxnRUFBRDtBQUFXLGlCQUFLLEVBQUMsT0FBakI7QUFBQSxzQkFBMEJHLFNBQVMsQ0FBQ2tCLFlBQUQ7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlDRDs7R0E1Q3VCQztVQUNOekI7OztLQURNeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGFubmluZ1RhYmxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IHsgQm94LCBHcmlkLCBUYWJsZUZvb3RlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuY29uc3QgVEFYX1JBVEUgPSAwLjA3O1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgdGFibGU6IHtcbiAgICBtaW5XaWR0aDogNzAwLFxuICB9LFxuICBmb250OiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNFxuICB9XG59KTtcblxuZnVuY3Rpb24gY2N5Rm9ybWF0KG51bTogbnVtYmVyKSB7XG4gIHJldHVybiBgJHtudW0udG9GaXhlZCgyKX1gO1xufVxuXG5mdW5jdGlvbiBwcmljZVJvdyhxdHk6IG51bWJlciwgdW5pdDogbnVtYmVyKSB7XG4gIHJldHVybiBxdHkgKiB1bml0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3coZGVzYzogc3RyaW5nLCBxdHk6IG51bWJlciwgdW5pdDogbnVtYmVyKSB7XG4gIGNvbnN0IHByaWNlID0gcHJpY2VSb3cocXR5LCB1bml0KTtcbiAgcmV0dXJuIHsgZGVzYywgcXR5LCB1bml0LCBwcmljZSB9O1xufVxuXG5pbnRlcmZhY2UgUm93IHtcbiAgZGVzYzogc3RyaW5nO1xuICBxdHk6IG51bWJlcjtcbiAgdW5pdDogbnVtYmVyO1xuICBwcmljZTogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBzdWJ0b3RhbChpdGVtczogUm93W10pIHtcbiAgcmV0dXJuIGl0ZW1zLm1hcCgoeyBwcmljZSB9KSA9PiBwcmljZSkucmVkdWNlKChzdW0sIGkpID0+IHN1bSArIGksIDApO1xufVxuXG5jb25zdCByb3dzID0gW1xuICBjcmVhdGVSb3coJ1BhcGVyY2xpcHMgKEJveCknLCAxMDAsIDEuMTUpLFxuICBjcmVhdGVSb3coJ1BhcGVyIChDYXNlKScsIDEwLCA0NS45OSksXG4gIGNyZWF0ZVJvdygnV2FzdGUgQmFza2V0JywgMiwgMTcuOTkpLFxuXTtcblxuY29uc3QgaW52b2ljZVN1YnRvdGFsID0gc3VidG90YWwocm93cyk7XG5jb25zdCBpbnZvaWNlVGF4ZXMgPSBUQVhfUkFURSAqIGludm9pY2VTdWJ0b3RhbDtcbmNvbnN0IGludm9pY2VUb3RhbCA9IGludm9pY2VUYXhlcyArIGludm9pY2VTdWJ0b3RhbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Bhbm5pbmdUYWJsZSgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQ29udGFpbmVyPlxuICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cInNwYW5uaW5nIHRhYmxlXCI+XG5cbiAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICA8VGFibGVDZWxsPkRFU0NSSVBUSU9OPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5SQVRFPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5RVFk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkFNT1VOVDwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgIHtyb3dzLm1hcCgocm93KSA9PiAoXG4gICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cuZGVzY30+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5kZXNjfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LnF0eX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy51bml0fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57Y2N5Rm9ybWF0KHJvdy5wcmljZSl9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgcm93U3Bhbj17M30gLz5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Mn0gYWxpZ249XCJyaWdodFwiIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5mb250IH19PlRPVEFMPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57Y2N5Rm9ybWF0KGludm9pY2VTdWJ0b3RhbCl9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICA8VGFibGVDZWxsPjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLmZvbnQgfX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tQ29sb3I6ICdibHVlJyB9fT5QQUlEPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57Y2N5Rm9ybWF0KGludm9pY2VUYXhlcyl9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezJ9IGFsaWduPVwicmlnaHRcIiBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMuZm9udCB9fT5CQUxBTkNFIERVRSBHSEM8L1RhYmxlQ2VsbD5cblxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e2NjeUZvcm1hdChpbnZvaWNlVG90YWwpfTwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgIDwvVGFibGVCb2R5PlxuXG4gICAgICA8L1RhYmxlPlxuICAgIDwvVGFibGVDb250YWluZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtYWtlU3R5bGVzIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUNvbnRhaW5lciIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiVEFYX1JBVEUiLCJ1c2VTdHlsZXMiLCJ0YWJsZSIsIm1pbldpZHRoIiwiZm9udCIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImNjeUZvcm1hdCIsIm51bSIsInRvRml4ZWQiLCJwcmljZVJvdyIsInF0eSIsInVuaXQiLCJjcmVhdGVSb3ciLCJkZXNjIiwicHJpY2UiLCJzdWJ0b3RhbCIsIml0ZW1zIiwibWFwIiwicmVkdWNlIiwic3VtIiwiaSIsInJvd3MiLCJpbnZvaWNlU3VidG90YWwiLCJpbnZvaWNlVGF4ZXMiLCJpbnZvaWNlVG90YWwiLCJTcGFubmluZ1RhYmxlIiwiY2xhc3NlcyIsInJvdyIsInJvb3QiLCJib3JkZXJCb3R0b21Db2xvciJdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
self["webpackHotUpdate_N_E"]("pages/Dashboard/[id]",{

/***/ "./components/Invoice.tsx":
/*!********************************!*\
  !*** ./components/Invoice.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-pdf/renderer */ "./node_modules/@react-pdf/renderer/lib/react-pdf.browser.es.js");
/* harmony import */ var _public_MGlogo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/MGlogo.jpg */ "./public/MGlogo.jpg");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SpanningTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpanningTable */ "./components/SpanningTable.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "/home/lukatoni/DockerProjects/NextProjects/invoice-creator/components/Invoice.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(function (theme) {
  return {
    divider: {
      background: 'black',
      height: 2
    }
  };
});
var styles = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__.StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    //backgroundColor: '#E4E4E4',
    padding: 30
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  secondColumn: {
    flexDirection: 'column',
    paddingLeft: 50,
    flexGrow: 1
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

var Invoice = function Invoice() {
  _s();

  var classes = useStyles();
  var today = new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date('2014-08-18T21:1:54')),
      _React$useState2 = (0,_home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      selectedDate = _React$useState2[0],
      setSelectedDate = _React$useState2[1];

  var handleDateChange = function handleDateChange(date) {
    setSelectedDate(date);
  }; //console.log(logo);


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__.default, {
    maxWidth: false,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
      container: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
        item: true,
        xs: 12,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__.default, {
          display: "flex",
          alignItems: "flex-start",
          mt: 5,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__.default, {
            pr: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
              src: _public_MGlogo_jpg__WEBPACK_IMPORTED_MODULE_4__.default,
              alt: "logo",
              width: 200,
              height: 190,
              layout: "intrinsic"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__.default, {
            flexDirection: "column",
            flexGrow: 1,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "subtitle1",
              gutterBottom: true,
              style: {
                fontWeight: 'bold',
                paddingBottom: 15
              },
              children: "MG - HATCHERY"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "subtitle1",
              style: {
                fontWeight: 'bold'
              },
              children: "BN080742012"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "body2",
              children: "P.O.BOX MD 176, MADINA - ACCRA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "body2",
              children: "GPS:GM-003-0515 AGBOTUI AVE. MADINA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "body2",
              children: "0302507486, 0266245495"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "body2",
              children: "mgventures1@outlook.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__.default, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "subtitle2",
              style: {
                paddingBottom: 10
              },
              children: "INVOICE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "body2",
              style: {
                paddingBottom: 10
              },
              children: "INVOOO4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "body2",
              style: {
                fontWeight: 'bold'
              },
              children: "DATE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "body2",
              children: "02/03/2021"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "body2",
              style: {
                fontWeight: 'bold'
              },
              children: "DUE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "body2",
              gutterBottom: true,
              children: "On Reciept"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "body2",
              style: {
                fontWeight: 'bold'
              },
              children: "BALANCE DUE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "body2",
              style: {
                paddingBottom: 30
              },
              children: "GHC 0.00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__.default, {
          classes: {
            root: classes.divider
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
        item: true,
        xs: 12,
        container: true,
        direction: "column",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
          item: true,
          xs: 4,
          style: {
            paddingTop: 20
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
            gutterBottom: true,
            variant: "body2",
            style: {
              fontWeight: 'bold'
            },
            children: "BILL TO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
            variant: "body2",
            style: {
              fontWeight: 'bold'
            },
            gutterBottom: true,
            children: " NII ANANG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
            variant: "body2",
            gutterBottom: true,
            children: "Amanfro"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
            variant: "body2",
            gutterBottom: true,
            children: "Accra"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
            variant: "body2",
            gutterBottom: true,
            children: "0543307585"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__.default, {
          variant: "fullWidth",
          light: true,
          style: {
            height: 2
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
        item: true,
        xs: 12,
        style: {
          paddingTop: 20
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpanningTable__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
        item: true,
        style: {
          height: 100
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, _this);
};

_s(Invoice, "bgsNgmpJXAkUfdIC3Kt1TdeZSkc=", false, function () {
  return [useStyles];
});

_c = Invoice;
/* harmony default export */ __webpack_exports__["default"] = (Invoice);

var _c;

$RefreshReg$(_c, "Invoice");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRGFzaGJvYXJkL1tpZF0uMmYzYTkwNTEzZTA4ZDc5NmE5NjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1NLFNBQVMsR0FBR0wsb0VBQVUsQ0FBQyxVQUFDTSxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLFVBQVUsRUFBRSxPQURMO0FBRVBDLE1BQUFBLE1BQU0sRUFBRTtBQUZEO0FBRDhCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBT0EsSUFBTUMsTUFBTSxHQUFHVCxrRUFBQSxDQUFrQjtBQUMvQlcsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLE9BQU8sRUFBRSxNQURMO0FBRUpDLElBQUFBLGFBQWEsRUFBRSxRQUZYO0FBR0o7QUFDQUMsSUFBQUEsT0FBTyxFQUFFO0FBSkwsR0FEeUI7QUFPL0JDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxNQUFNLEVBQUUsRUFERDtBQUVQRixJQUFBQSxPQUFPLEVBQUUsRUFGRjtBQUdQRyxJQUFBQSxRQUFRLEVBQUU7QUFISCxHQVBzQjtBQWEvQkMsRUFBQUEsWUFBWSxFQUFFO0FBQ1pMLElBQUFBLGFBQWEsRUFBRSxRQURIO0FBRVpNLElBQUFBLFdBQVcsRUFBRSxFQUZEO0FBR1pGLElBQUFBLFFBQVEsRUFBRTtBQUhFLEdBYmlCO0FBa0IvQkcsRUFBQUEsTUFBTSxFQUFFO0FBQ05QLElBQUFBLGFBQWEsRUFBRSxLQURUO0FBRU5RLElBQUFBLFVBQVUsRUFBRTtBQUZOO0FBbEJ1QixDQUFsQixDQUFmOztBQXlCQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLE9BQU8sR0FBR25CLFNBQVMsRUFBekI7QUFDQSxNQUFNb0IsS0FBSyxH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YztVQUNZbEI7OztLQURaa0I7QUE0Rk4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnZvaWNlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBEaXZpZGVyLCBHcmlkLCBJbnB1dEJhc2UsIFRleHRGaWVsZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IERvY3VtZW50LCBQYWdlLCBUZXh0LCBWaWV3LCBTdHlsZVNoZWV0IH0gZnJvbSAnQHJlYWN0LXBkZi9yZW5kZXJlcic7XG5pbXBvcnQgJ2RhdGUtZm5zJ1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vcHVibGljL01HbG9nby5qcGcnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgU3Bhbm5pbmdUYWJsZSBmcm9tICcuL1NwYW5uaW5nVGFibGUnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgZGl2aWRlcjoge1xuICAgIGJhY2tncm91bmQ6ICdibGFjaycsXG4gICAgaGVpZ2h0OiAyXG4gIH1cbn0pKTtcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBwYWdlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIC8vYmFja2dyb3VuZENvbG9yOiAnI0U0RTRFNCcsXG4gICAgcGFkZGluZzogMzBcbiAgfSxcbiAgc2VjdGlvbjoge1xuICAgIG1hcmdpbjogMTAsXG4gICAgcGFkZGluZzogMTAsXG4gICAgZmxleEdyb3c6IDEsXG5cbiAgfSxcbiAgc2Vjb25kQ29sdW1uOiB7XG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgcGFkZGluZ0xlZnQ6IDUwLFxuICAgIGZsZXhHcm93OiAxXG4gIH0sXG4gIHRvcFJvdzoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxuXG59KTtcblxuY29uc3QgSW52b2ljZSA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS5nZXREYXRlKCkgKyBcIi1cIiArIChuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxKSArIFwiLVwiICsgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBbc2VsZWN0ZWREYXRlLCBzZXRTZWxlY3RlZERhdGVdID0gUmVhY3QudXNlU3RhdGU8RGF0ZSB8IG51bGw+KG5ldyBEYXRlKCcyMDE0LTA4LTE4VDIxOjE6NTQnKSk7XG4gIGNvbnN0IGhhbmRsZURhdGVDaGFuZ2UgPSAoZGF0ZTogRGF0ZSB8IG51bGwpID0+IHtcbiAgICBzZXRTZWxlY3RlZERhdGUoZGF0ZSlcbiAgfVxuICAvL2NvbnNvbGUubG9nKGxvZ28pO1xuICByZXR1cm4gKFxuXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD17ZmFsc2V9PlxuICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgbXQ9ezV9PlxuICAgICAgICAgICAgPEJveCBwcj17NH0+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ299IGFsdD1cImxvZ29cIiB3aWR0aD17MjAwfSBoZWlnaHQ9ezE5MH0gbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZmxleEdyb3c9ezF9ID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGd1dHRlckJvdHRvbSBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIHBhZGRpbmdCb3R0b206IDE1IH19PlxuICAgICAgICAgICAgICAgIE1HIC0gSEFUQ0hFUllcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlxuICAgICAgICAgICAgICAgIEJOMDgwNzQyMDEyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgPlxuICAgICAgICAgICAgICAgIFAuTy5CT1ggTUQgMTc2LCBNQURJTkEgLSBBQ0NSQVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICAgIEdQUzpHTS0wMDMtMDUxNVxuICAgICAgICAgICAgICAgIEFHQk9UVUkgQVZFLiBNQURJTkFcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgICAgICAwMzAyNTA3NDg2LCAwMjY2MjQ1NDk1XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICAgICAgbWd2ZW50dXJlczFAb3V0bG9vay5jb21cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMTAgfX0+XG4gICAgICAgICAgICAgICAgSU5WT0lDRVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDEwIH19PlxuICAgICAgICAgICAgICAgIElOVk9PTzRcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XG4gICAgICAgICAgICAgICAgREFURVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICAgIDAyLzAzLzIwMjFcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0gPlxuICAgICAgICAgICAgICAgIERVRVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgICBPbiBSZWNpZXB0XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19ID5cbiAgICAgICAgICAgICAgICBCQUxBTkNFIERVRVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDMwIH19PlxuICAgICAgICAgICAgICAgIEdIQyAwLjAwXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxEaXZpZGVyIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5kaXZpZGVyIH19IC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBzdHlsZT17eyBwYWRkaW5nVG9wOiAyMCB9fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiYm9keTJcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0gPkJJTEwgVE88L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0gZ3V0dGVyQm90dG9tPiBOSUkgQU5BTkc8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgIEFtYW5mcm9cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgQWNjcmFcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgMDU0MzMwNzU4NVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwiZnVsbFdpZHRoXCIgbGlnaHQgc3R5bGU9e3sgaGVpZ2h0OiAyIH19IC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDIwIH19PlxuICAgICAgICAgIDxTcGFubmluZ1RhYmxlIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSBzdHlsZT17eyBoZWlnaHQ6IDEwMCB9fT48L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW52b2ljZVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWFrZVN0eWxlcyIsIlN0eWxlU2hlZXQiLCJsb2dvIiwiSW1hZ2UiLCJTcGFubmluZ1RhYmxlIiwidXNlU3R5bGVzIiwidGhlbWUiLCJkaXZpZGVyIiwiYmFja2dyb3VuZCIsImhlaWdodCIsInN0eWxlcyIsImNyZWF0ZSIsInBhZ2UiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInBhZGRpbmciLCJzZWN0aW9uIiwibWFyZ2luIiwiZmxleEdyb3ciLCJzZWNvbmRDb2x1bW4iLCJwYWRkaW5nTGVmdCIsInRvcFJvdyIsImFsaWduSXRlbXMiLCJJbnZvaWNlIiwiY2xhc3NlcyIsInRvZGF5IiwiRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwidXNlU3RhdGUiLCJzZWxlY3RlZERhdGUiLCJzZXRTZWxlY3RlZERhdGUiLCJoYW5kbGVEYXRlQ2hhbmdlIiwiZGF0ZSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nQm90dG9tIiwicm9vdCIsInBhZGRpbmdUb3AiXSwic291cmNlUm9vdCI6IiJ9
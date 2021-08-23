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
              width: 220,
              height: 230,
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
              variant: "h6",
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
              variant: "h6",
              style: {
                fontWeight: 'bold'
              },
              children: "BN080742012"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "subtitle1",
              children: "P.O.BOX MD 176, MADINA - ACCRA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "subtitle1",
              children: "GPS:GM-003-0515 AGBOTUI AVE. MADINA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "subtitle1",
              children: "0302507486, 0266245495"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "subtitle1",
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
              variant: "subtitle1",
              style: {
                fontWeight: 'bold',
                paddingBottom: 10
              },
              children: "INVOICE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "subtitle2",
              style: {
                paddingBottom: 10
              },
              children: "INVOOO4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "subtitle1",
              style: {
                fontWeight: 'bold'
              },
              children: "DATE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "subtitle2",
              children: "02/03/2021"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "subtitle1",
              style: {
                fontWeight: 'bold'
              },
              children: "DUE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "subtitle2",
              gutterBottom: true,
              children: "On Reciept"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "subtitle1",
              style: {
                fontWeight: 'bold'
              },
              children: "BALANCE DUE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "subtitle2",
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
          variant: "fullWidth",
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
            variant: "subtitle1",
            style: {
              fontWeight: 'bold'
            },
            children: "BILL TO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
            variant: "subtitle12",
            gutterBottom: true,
            children: " NII ANANG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
            variant: "subtitle2",
            gutterBottom: true,
            children: "Amanfro"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
            variant: "subtitle2",
            gutterBottom: true,
            children: "Accra"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
            variant: "subtitle2",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRGFzaGJvYXJkL1tpZF0uNzg3NWNmOGQ2ZmQyMjFmMTI4NmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1NLFNBQVMsR0FBR0wsb0VBQVUsQ0FBQyxVQUFDTSxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLFVBQVUsRUFBRSxPQURMO0FBRVBDLE1BQUFBLE1BQU0sRUFBRTtBQUZEO0FBRDhCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBT0EsSUFBTUMsTUFBTSxHQUFHVCxrRUFBQSxDQUFrQjtBQUMvQlcsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLE9BQU8sRUFBRSxNQURMO0FBRUpDLElBQUFBLGFBQWEsRUFBRSxRQUZYO0FBR0o7QUFDQUMsSUFBQUEsT0FBTyxFQUFFO0FBSkwsR0FEeUI7QUFPL0JDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxNQUFNLEVBQUUsRUFERDtBQUVQRixJQUFBQSxPQUFPLEVBQUUsRUFGRjtBQUdQRyxJQUFBQSxRQUFRLEVBQUU7QUFISCxHQVBzQjtBQWEvQkMsRUFBQUEsWUFBWSxFQUFFO0FBQ1pMLElBQUFBLGFBQWEsRUFBRSxRQURIO0FBRVpNLElBQUFBLFdBQVcsRUFBRSxFQUZEO0FBR1pGLElBQUFBLFFBQVEsRUFBRTtBQUhFLEdBYmlCO0FBa0IvQkcsRUFBQUEsTUFBTSxFQUFFO0FBQ05QLElBQUFBLGFBQWEsRUFBRSxLQURUO0FBRU5RLElBQUFBLFVBQVUsRUFBRTtBQUZOO0FBbEJ1QixDQUFsQixDQUFmOztBQXlCQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLE9BQU8sR0FBR25CLFNBQVMsRUFBekI7QUFDQSxNQUFNb0IsS0FBSyxH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QU1jO1VBQ1lsQjs7O0tBRFprQjtBQTRGTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ludm9pY2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIERpdmlkZXIsIEdyaWQsIElucHV0QmFzZSwgVGV4dEZpZWxkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgRG9jdW1lbnQsIFBhZ2UsIFRleHQsIFZpZXcsIFN0eWxlU2hlZXQgfSBmcm9tICdAcmVhY3QtcGRmL3JlbmRlcmVyJztcbmltcG9ydCAnZGF0ZS1mbnMnXG5pbXBvcnQgbG9nbyBmcm9tICcuLi9wdWJsaWMvTUdsb2dvLmpwZydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBTcGFubmluZ1RhYmxlIGZyb20gJy4vU3Bhbm5pbmdUYWJsZSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBkaXZpZGVyOiB7XG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICBoZWlnaHQ6IDJcbiAgfVxufSkpO1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIHBhZ2U6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgLy9iYWNrZ3JvdW5kQ29sb3I6ICcjRTRFNEU0JyxcbiAgICBwYWRkaW5nOiAzMFxuICB9LFxuICBzZWN0aW9uOiB7XG4gICAgbWFyZ2luOiAxMCxcbiAgICBwYWRkaW5nOiAxMCxcbiAgICBmbGV4R3JvdzogMSxcblxuICB9LFxuICBzZWNvbmRDb2x1bW46IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwYWRkaW5nTGVmdDogNTAsXG4gICAgZmxleEdyb3c6IDFcbiAgfSxcbiAgdG9wUm93OiB7XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIH0sXG5cbn0pO1xuXG5jb25zdCBJbnZvaWNlID0gKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldERhdGUoKSArIFwiLVwiICsgKG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEpICsgXCItXCIgKyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IFtzZWxlY3RlZERhdGUsIHNldFNlbGVjdGVkRGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxEYXRlIHwgbnVsbD4obmV3IERhdGUoJzIwMTQtMDgtMThUMjE6MTo1NCcpKTtcbiAgY29uc3QgaGFuZGxlRGF0ZUNoYW5nZSA9IChkYXRlOiBEYXRlIHwgbnVsbCkgPT4ge1xuICAgIHNldFNlbGVjdGVkRGF0ZShkYXRlKVxuICB9XG4gIC8vY29uc29sZS5sb2cobG9nbyk7XG4gIHJldHVybiAoXG5cbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPXtmYWxzZX0+XG4gICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBtdD17NX0+XG4gICAgICAgICAgICA8Qm94IHByPXs0fT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17bG9nb30gYWx0PVwibG9nb1wiIHdpZHRoPXsyMjB9IGhlaWdodD17MjMwfSBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBmbGV4R3Jvdz17MX0gPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBndXR0ZXJCb3R0b20gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBwYWRkaW5nQm90dG9tOiAxNSB9fT5cbiAgICAgICAgICAgICAgICBNRyAtIEhBVENIRVJZXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlxuICAgICAgICAgICAgICAgIEJOMDgwNzQyMDEyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiID5cbiAgICAgICAgICAgICAgICBQLk8uQk9YIE1EIDE3NiwgTUFESU5BIC0gQUNDUkFcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+XG4gICAgICAgICAgICAgICAgR1BTOkdNLTAwMy0wNTE1XG4gICAgICAgICAgICAgICAgQUdCT1RVSSBBVkUuIE1BRElOQVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cbiAgICAgICAgICAgICAgICAwMzAyNTA3NDg2LCAwMjY2MjQ1NDk1XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlxuICAgICAgICAgICAgICAgIG1ndmVudHVyZXMxQG91dGxvb2suY29tXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgcGFkZGluZ0JvdHRvbTogMTAgfX0+XG4gICAgICAgICAgICAgICAgSU5WT0lDRVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAxMCB9fT5cbiAgICAgICAgICAgICAgICBJTlZPT080XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fSA+XG4gICAgICAgICAgICAgICAgREFURVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cbiAgICAgICAgICAgICAgICAwMi8wMy8yMDIxXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fSA+XG4gICAgICAgICAgICAgICAgRFVFXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgICBPbiBSZWNpZXB0XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fSA+XG4gICAgICAgICAgICAgICAgQkFMQU5DRSBEVUVcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMzAgfX0+XG4gICAgICAgICAgICAgICAgR0hDIDAuMDBcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPERpdmlkZXIgdmFyaWFudD1cImZ1bGxXaWR0aFwiIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5kaXZpZGVyIH19IC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBzdHlsZT17eyBwYWRkaW5nVG9wOiAyMCB9fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwic3VidGl0bGUxXCIgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19ID5CSUxMIFRPPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMTJcIiBndXR0ZXJCb3R0b20+IE5JSSBBTkFORzwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgIEFtYW5mcm9cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgIEFjY3JhXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICAwNTQzMzA3NTg1XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxEaXZpZGVyIHZhcmlhbnQ9XCJmdWxsV2lkdGhcIiBsaWdodCBzdHlsZT17eyBoZWlnaHQ6IDIgfX0gLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3sgcGFkZGluZ1RvcDogMjAgfX0+XG4gICAgICAgICAgPFNwYW5uaW5nVGFibGUgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHN0eWxlPXt7IGhlaWdodDogMTAwIH19PjwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnZvaWNlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtYWtlU3R5bGVzIiwiU3R5bGVTaGVldCIsImxvZ28iLCJJbWFnZSIsIlNwYW5uaW5nVGFibGUiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsImRpdmlkZXIiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0Iiwic3R5bGVzIiwiY3JlYXRlIiwicGFnZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZyIsInNlY3Rpb24iLCJtYXJnaW4iLCJmbGV4R3JvdyIsInNlY29uZENvbHVtbiIsInBhZGRpbmdMZWZ0IiwidG9wUm93IiwiYWxpZ25JdGVtcyIsIkludm9pY2UiLCJjbGFzc2VzIiwidG9kYXkiLCJEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkRGF0ZSIsInNldFNlbGVjdGVkRGF0ZSIsImhhbmRsZURhdGVDaGFuZ2UiLCJkYXRlIiwiZm9udFdlaWdodCIsInBhZGRpbmdCb3R0b20iLCJyb290IiwicGFkZGluZ1RvcCJdLCJzb3VyY2VSb290IjoiIn0=
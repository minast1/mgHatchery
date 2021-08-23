"use strict";
self["webpackHotUpdate_N_E"]("pages/Dashboard",{

/***/ "./components/Row.tsx":
/*!****************************!*\
  !*** ./components/Row.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "./node_modules/@material-ui/icons/KeyboardArrowDown.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowUp */ "./node_modules/@material-ui/icons/KeyboardArrowUp.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _lib_supabaseStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/supabaseStore */ "./lib/supabaseStore.ts");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_ErrorOutlineOutlined__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ErrorOutlineOutlined */ "./node_modules/@material-ui/icons/ErrorOutlineOutlined.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Print__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Print */ "./node_modules/@material-ui/icons/Print.js");
/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/supabaseClient */ "./lib/supabaseClient.ts");
/* module decorator */ module = __webpack_require__.hmd(module);

















var _jsxFileName = "/home/lukatoni/DockerProjects/NextProjects/invoice-creator/components/Row.tsx",
    _s = $RefreshSig$();











var useRowStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.makeStyles)({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  }
  /* delete: {
    // "&:hover": { backgroundColor: "red" },
     //"&:focus": { backgroundColor: "red" }}*/

});

function Row(_ref) {
  _s();

  var _this = this;

  var invoiceItem = _ref.invoiceItem;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default().useState(false),
      _React$useState2 = (0,_home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var classes = useRowStyles();

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default().useState(0),
      _React$useState4 = (0,_home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState3, 2),
      balance = _React$useState4[0],
      setBalance = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]),
      _React$useState6 = (0,_home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState5, 2),
      amts = _React$useState6[0],
      setArray = _React$useState6[1];

  var updateData = (0,_lib_supabaseStore__WEBPACK_IMPORTED_MODULE_6__.dataStore)(function (state) {
    return state.updateData;
  });

  function getBalance(invoice) {
    var arrayOfAmounts = [0]; //const { Item , amount } = invoice;

    invoice.Item.forEach(function (_ref2) {
      var amount = _ref2.amount;
      arrayOfAmounts = [].concat((0,_home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(arrayOfAmounts), [amount]);
    });
    setArray(arrayOfAmounts);

    var reducer = function reducer(accumulator, currentValue) {
      return accumulator + currentValue;
    };

    var total = arrayOfAmounts.reduce(reducer);
    var balance = total - invoice.amount;
    return balance;
  }

  function ccyFormat(num) {
    return "".concat(num.toFixed(2));
  }

  react__WEBPACK_IMPORTED_MODULE_5___default().useEffect(function () {
    var bal = getBalance(invoiceItem);
    setBalance(bal);
  }, []);

  var deleteInvoiceWithItems = /*#__PURE__*/function () {
    var _ref3 = (0,_home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(invoiceId) {
      return _home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_7__.supabase.from('Invoice')["delete"]().match({
                id: invoiceId
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function deleteInvoiceWithItems(_x) {
      return _ref3.apply(this, arguments);
    };
  }(); ///console.log(amts);


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__.default, {
      className: classes.root,
      hover: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__.default, {
          "aria-label": "expand row",
          size: "small",
          onClick: function onClick() {
            return setOpen(!open);
          },
          children: open ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 21
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 47
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
        component: "th",
        scope: "row",
        children: invoiceItem.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
        align: "left",
        children: ccyFormat(invoiceItem.amount)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
        align: "left",
        children: invoiceItem.phone
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
        align: "left",
        children: balance === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_14__.default, {
          style: {
            backgroundColor: 'green'
          },
          size: "small",
          label: "Transaction Complete",
          color: "secondary",
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_15__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_14__.default, {
          style: {
            backgroundColor: 'red'
          },
          size: "small",
          label: "Pending Balance",
          color: "secondary",
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ErrorOutlineOutlined__WEBPACK_IMPORTED_MODULE_16__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 18
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
        align: "left",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17__.default, {
          container: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17__.default, {
            item: true,
            xs: 6,
            sm: 12,
            md: 6,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__.default, {
              href: "/Dashboard/".concat(encodeURIComponent(invoiceItem.id)),
              "aria-label": "print",
              size: "small",
              onClick: function onClick(event) {},
              color: "primary",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Print__WEBPACK_IMPORTED_MODULE_18__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17__.default, {
            item: true,
            xs: 6,
            sm: 12,
            md: 6,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__.default, {
              "aria-label": "delete",
              size: "small",
              onClick: function onClick(event) {
                return deleteInvoiceWithItems(invoiceItem.id);
              },
              style: {
                color: 'red'
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_19__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
        style: {
          paddingBottom: 0,
          paddingTop: 0
        },
        colSpan: 6,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_20__.default, {
          "in": open,
          timeout: "auto",
          unmountOnExit: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_21__.default, {
            margin: 1,
            bgcolor: "#f5f5f5",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__.default, {
              variant: "subtitle1",
              style: {
                fontWeight: 'bold',
                paddingLeft: 15
              },
              gutterBottom: true,
              component: "div",
              children: "Tansaction date: ".concat(invoiceItem.date)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_23__.default, {
              size: "small",
              "aria-label": "purchases",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_24__.default, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__.default, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                    children: "Description"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                    children: "Rate (GH\u20B5)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                    align: "right",
                    children: "Quantity"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                    align: "right",
                    children: "Total price (\u20B5)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_25__.default, {
                children: invoiceItem.Item.map(function (itemRow, index) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__.default, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                      component: "th",
                      scope: "row",
                      children: itemRow.description
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                      children: "".concat(ccyFormat(itemRow.rate), "GH\u20B5")
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                      align: "right",
                      children: itemRow.quantity
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                      align: "right",
                      children: ccyFormat(itemRow.amount)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
                      columnNumber: 23
                    }, _this)]
                  }, index, true, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

_s(Row, "0ripveoqQbK+BCcc/Ks5J+vZfkg=", false, function () {
  return [useRowStyles];
});

_c = Row;
/* harmony default export */ __webpack_exports__["default"] = (Row);

var _c;

$RefreshReg$(_c, "Row");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRGFzaGJvYXJkLmI4ZGNmNThiMjgxOWJmNGQ3MDlkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNVSxZQUFZLEdBQUdMLG9FQUFVLENBQUM7QUFDOUJNLEVBQUFBLElBQUksRUFBRTtBQUNKLGFBQVM7QUFDUEMsTUFBQUEsWUFBWSxFQUFFO0FBRFA7QUFETDtBQU1OO0FBQ0Y7QUFDQTs7QUFUZ0MsQ0FBRCxDQUEvQjs7QUFjQSxTQUFTQyxHQUFULE9BQXdEO0FBQUE7O0FBQUE7O0FBQUEsTUFBekNDLFdBQXlDLFFBQXpDQSxXQUF5Qzs7QUFBQSx3QkFDOUJkLHFEQUFBLENBQWUsS0FBZixDQUQ4QjtBQUFBO0FBQUEsTUFDL0NnQixJQUQrQztBQUFBLE1BQ3pDQyxPQUR5Qzs7QUFFdEQsTUFBTUMsT0FBTyxHQUFHUixZQUFZLEVBQTVCOztBQUZzRCx5QkFHeEJWLHFEQUFBLENBQWUsQ0FBZixDQUh3QjtBQUFBO0FBQUEsTUFHL0NtQixPQUgrQztBQUFBLE1BR3RDQyxVQUhzQzs7QUFBQSx5QkFJN0JwQixxREFBQSxDQUF5QixFQUF6QixDQUo2QjtBQUFBO0FBQUEsTUFJL0NxQixJQUorQztBQUFBLE1BSXpDQyxRQUp5Qzs7QUFLdEQsTUFBTUMsVUFBVSxHQUFHbkIsNkRBQVMsQ0FBQyxVQUFBb0IsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0QsVUFBVjtBQUFBLEdBQU4sQ0FBNUI7O0FBR0EsV0FBU0UsVUFBVCxDQUFvQkMsT0FBcEIsRUFBOEM7QUFDNUMsUUFBSUMsY0FBd0IsR0FBRyxDQUFDLENBQUQsQ0FBL0IsQ0FENEMsQ0FFNUM7O0FBQ0FELElBQUFBLE9BQU8sQ0FBQ0UsSUFBUixDQUFhQyxPQUFiLENB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QUFBO0FBQUEsc0JBREYsZUFTRTtBQUFBLDBCQUNHMUMsV0FBVyxDQUFDYyxJQUFaLENBQWlCNkIsR0FBakIsQ0FBcUIsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsc0NBQ3BCO0FBQUEsNENBQ0U7QUFBVywrQkFBUyxFQUFDLElBQXJCO0FBQTBCLDJCQUFLLEVBQUMsS0FBaEM7QUFBQSxnQ0FDR0QsT0FBTyxDQUFDRTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFJRTtBQUFBLDBDQUFleEIsU0FBUyxDQUFDc0IsT0FBTyxDQUFDRyxJQUFULENBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKRixlQUtFO0FBQVcsMkJBQUssRUFBQyxPQUFqQjtBQUFBLGdDQUEwQkgsT0FBTyxDQUFDSTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUxGLGVBTUU7QUFBVywyQkFBSyxFQUFDLE9BQWpCO0FBQUEsZ0NBQ0cxQixTQUFTLENBQUNzQixPQUFPLENBQUM1QixNQUFUO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFORjtBQUFBLHFCQUFlNkIsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURvQjtBQUFBLGlCQUFyQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdHRDs7R0F0SVE5QztVQUVTSDs7O0tBRlRHO0FBd0lULCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUm93LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uQnV0dG9uLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVSb3csIEJ1dHRvbiwgQ2hpcCwgQ29sbGFwc2UsIEJveCwgVGFibGUsIFRhYmxlSGVhZCwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEtleWJvYXJkQXJyb3dEb3duSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd0Rvd24nO1xuaW1wb3J0IEtleWJvYXJkQXJyb3dVcEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dVcCc7XG5pbXBvcnQgRG9uZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RvbmUnO1xuaW1wb3J0IHsgZGF0YVN0b3JlLCBJbnZvaWNlLCBJbnZvaWNlSXRlbSB9IGZyb20gJy4uL2xpYi9zdXBhYmFzZVN0b3JlJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEVycm9yT3V0bGluZU91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXJyb3JPdXRsaW5lT3V0bGluZWQnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XG5pbXBvcnQgUHJpbnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QcmludCc7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uL2xpYi9zdXBhYmFzZUNsaWVudCc7XG5cbmNvbnN0IHVzZVJvd1N0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgJyYgPiAqJzoge1xuICAgICAgYm9yZGVyQm90dG9tOiAndW5zZXQnLFxuICAgIH0sXG5cbiAgfSxcbiAgLyogZGVsZXRlOiB7XG4gICAgLy8gXCImOmhvdmVyXCI6IHsgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiIH0sXG4gICAgIC8vXCImOmZvY3VzXCI6IHsgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiIH19Ki9cbn0pO1xuXG5cblxuZnVuY3Rpb24gUm93KHsgaW52b2ljZUl0ZW0gfTogeyBpbnZvaWNlSXRlbTogSW52b2ljZSB9KSB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVJvd1N0eWxlcygpO1xuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2FtdHMsIHNldEFycmF5XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcltdPihbXSk7XG4gIGNvbnN0IHVwZGF0ZURhdGEgPSBkYXRhU3RvcmUoc3RhdGUgPT4gc3RhdGUudXBkYXRlRGF0YSk7XG5cblxuICBmdW5jdGlvbiBnZXRCYWxhbmNlKGludm9pY2U6IEludm9pY2UpOiBudW1iZXIge1xuICAgIGxldCBhcnJheU9mQW1vdW50czogbnVtYmVyW10gPSBbMF07XG4gICAgLy9jb25zdCB7IEl0ZW0gLCBhbW91bnQgfSA9IGludm9pY2U7XG4gICAgaW52b2ljZS5JdGVtLmZvckVhY2goKHsgYW1vdW50IH0pID0+IHtcbiAgICAgIGFycmF5T2ZBbW91bnRzID0gWy4uLmFycmF5T2ZBbW91bnRzLCBhbW91bnRdXG5cbiAgICB9KVxuICAgIHNldEFycmF5KGFycmF5T2ZBbW91bnRzKVxuICAgIGNvbnN0IHJlZHVjZXIgPSAoYWNjdW11bGF0b3I6IG51bWJlciwgY3VycmVudFZhbHVlOiBudW1iZXIpID0+IGFjY3VtdWxhdG9yICsgY3VycmVudFZhbHVlO1xuICAgIGNvbnN0IHRvdGFsID0gYXJyYXlPZkFtb3VudHMucmVkdWNlKHJlZHVjZXIpXG4gICAgY29uc3QgYmFsYW5jZTogbnVtYmVyID0gdG90YWwgLSBpbnZvaWNlLmFtb3VudFxuICAgIHJldHVybiBiYWxhbmNlXG4gIH1cblxuICBmdW5jdGlvbiBjY3lGb3JtYXQobnVtOiBudW1iZXIpIHtcbiAgICByZXR1cm4gYCR7bnVtLnRvRml4ZWQoMil9YDtcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYmFsID0gZ2V0QmFsYW5jZShpbnZvaWNlSXRlbSlcbiAgICBzZXRCYWxhbmNlKGJhbClcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGRlbGV0ZUludm9pY2VXaXRoSXRlbXMgPSBhc3luYyAoaW52b2ljZUlkOiBudW1iZXIpID0+IHtcbiAgICAvL0RlbGV0ZSBpdGVtcyB3aXRoIHRoZSBnaXZlbiBJZC4gXG4gICAgYXdhaXQgc3VwYWJhc2UuZnJvbSgnSW52b2ljZScpLmRlbGV0ZSgpLm1hdGNoKHsgaWQ6IGludm9pY2VJZCB9KVxuICAgIC8vRGVsZXRlIEludm9pY2Ugd2l0aCB0aGUgZ2l2ZW4gSWQgOiBUaGlzIHN0ZXAgaXMgdGFrZW4gY2FyZSBvZiBieSBjYXNjYWRlIGZlYXR1cmVcbiAgICAvL1VwZGF0ZSBpdGVtcyBpbiB0aGUgdGFibGVcbiAgfVxuICAvLy9jb25zb2xlLmxvZyhhbXRzKTtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8VGFibGVSb3cgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGhvdmVyPlxuICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJleHBhbmQgcm93XCIgc2l6ZT1cInNtYWxsXCIgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9PlxuICAgICAgICAgICAge29wZW4gPyA8S2V5Ym9hcmRBcnJvd1VwSWNvbiAvPiA6IDxLZXlib2FyZEFycm93RG93bkljb24gLz59XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgICAgICAge2ludm9pY2VJdGVtLm5hbWV9XG4gICAgICAgIDwvVGFibGVDZWxsPlxuXG4gICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+e2NjeUZvcm1hdChpbnZvaWNlSXRlbS5hbW91bnQpfTwvVGFibGVDZWxsPlxuICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwibGVmdFwiPntpbnZvaWNlSXRlbS5waG9uZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImxlZnRcIj57XG4gICAgICAgICAgYmFsYW5jZSA9PT0gMCA/XG4gICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbicgfX1cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJUcmFuc2FjdGlvbiBDb21wbGV0ZVwiXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgaWNvbj17PERvbmVJY29uIC8+fVxuICAgICAgICAgICAgLz4gOiA8Q2hpcFxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnIH19XG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGVuZGluZyBCYWxhbmNlXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBpY29uPXs8RXJyb3JPdXRsaW5lT3V0bGluZWRJY29uIC8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgfTwvVGFibGVDZWxsPlxuICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwibGVmdFwiPntcbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17MTJ9IG1kPXs2fT5cbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBocmVmPXtgL0Rhc2hib2FyZC8ke2VuY29kZVVSSUNvbXBvbmVudChpbnZvaWNlSXRlbS5pZCl9YH1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwicHJpbnRcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UHJpbnRJY29uIC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJkZWxldGVcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBkZWxldGVJbnZvaWNlV2l0aEl0ZW1zKGludm9pY2VJdGVtLmlkKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgfTwvVGFibGVDZWxsPlxuICAgICAgPC9UYWJsZVJvdz5cbiAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAwLCBwYWRkaW5nVG9wOiAwIH19IGNvbFNwYW49ezZ9PlxuICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbn0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxuICAgICAgICAgICAgPEJveCBtYXJnaW49ezF9IGJnY29sb3I9XCIjZjVmNWY1XCI+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIHBhZGRpbmdMZWZ0OiAxNSB9fSBndXR0ZXJCb3R0b20gY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICAgICAge2BUYW5zYWN0aW9uIGRhdGU6ICR7aW52b2ljZUl0ZW0uZGF0ZX1gfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUYWJsZSBzaXplPVwic21hbGxcIiBhcmlhLWxhYmVsPVwicHVyY2hhc2VzXCI+XG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5EZXNjcmlwdGlvbjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlJhdGUgKEdI4oK1KTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5RdWFudGl0eTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5Ub3RhbCBwcmljZSAo4oK1KTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICAgICAge2ludm9pY2VJdGVtLkl0ZW0ubWFwKChpdGVtUm93LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbVJvdy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntgJHtjY3lGb3JtYXQoaXRlbVJvdy5yYXRlKX1HSOKCtWB9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e2l0ZW1Sb3cucXVhbnRpdHl9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2N5Rm9ybWF0KGl0ZW1Sb3cuYW1vdW50KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICA8L1RhYmxlUm93PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm93XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJLZXlib2FyZEFycm93RG93bkljb24iLCJLZXlib2FyZEFycm93VXBJY29uIiwiRG9uZUljb24iLCJkYXRhU3RvcmUiLCJtYWtlU3R5bGVzIiwiRXJyb3JPdXRsaW5lT3V0bGluZWRJY29uIiwiRGVsZXRlSWNvbiIsIlByaW50SWNvbiIsInN1cGFiYXNlIiwidXNlUm93U3R5bGVzIiwicm9vdCIsImJvcmRlckJvdHRvbSIsIlJvdyIsImludm9pY2VJdGVtIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImNsYXNzZXMiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImFtdHMiLCJzZXRBcnJheSIsInVwZGF0ZURhdGEiLCJzdGF0ZSIsImdldEJhbGFuY2UiLCJpbnZvaWNlIiwiYXJyYXlPZkFtb3VudHMiLCJJdGVtIiwiZm9yRWFjaCIsImFtb3VudCIsInJlZHVjZXIiLCJhY2N1bXVsYXRvciIsImN1cnJlbnRWYWx1ZSIsInRvdGFsIiwicmVkdWNlIiwiY2N5Rm9ybWF0IiwibnVtIiwidG9GaXhlZCIsInVzZUVmZmVjdCIsImJhbCIsImRlbGV0ZUludm9pY2VXaXRoSXRlbXMiLCJpbnZvaWNlSWQiLCJmcm9tIiwibWF0Y2giLCJpZCIsIm5hbWUiLCJwaG9uZSIsImJhY2tncm91bmRDb2xvciIsImVuY29kZVVSSUNvbXBvbmVudCIsImV2ZW50IiwiY29sb3IiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsImZvbnRXZWlnaHQiLCJwYWRkaW5nTGVmdCIsImRhdGUiLCJtYXAiLCJpdGVtUm93IiwiaW5kZXgiLCJkZXNjcmlwdGlvbiIsInJhdGUiLCJxdWFudGl0eSJdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
self["webpackHotUpdate_N_E"]("pages/Dashboard",{

/***/ "./pages/Dashboard/index.tsx":
/*!***********************************!*\
  !*** ./pages/Dashboard/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Dashboard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_Copyright__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Copyright */ "./components/Copyright.tsx");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Main */ "./components/Main.tsx");
/* harmony import */ var _lib_supabaseStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/supabaseStore */ "./lib/supabaseStore.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/lukatoni/DockerProjects/NextProjects/invoice-creator/pages/Dashboard/index.tsx",
    _s = $RefreshSig$();









var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(function (theme) {
  var _searchForm;

  return {
    root: {
      display: 'flex'
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto'
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    },
    searchForm: (_searchForm = {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center'
    }, (0,_home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_searchForm, theme.breakpoints.down('md'), {
      width: 300
    }), (0,_home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_searchForm, "width", 500), (0,_home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_searchForm, "border", '1px solid lightgray'), (0,_home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_searchForm, "borderRadius", 10), _searchForm),
    iconButton: {
      padding: 10
    },
    input: {
      "& input:focus $searchForm": {
        border: '1px solid yellow'
      },
      marginLeft: theme.spacing(1),
      flex: 1
    }
  };
});
var __N_SSG = true;
function Dashboard(_ref) {
  _s();

  var data = _ref.data;
  var classes = useStyles();
  var setData = (0,_lib_supabaseStore__WEBPACK_IMPORTED_MODULE_6__.dataStore)(function (state) {
    return state.setData;
  });
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
    data && setData(data);
  }, []); //console.log(data);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: classes.content,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.appBarSpacer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__.default, {
        maxWidth: "lg",
        className: classes.container,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__.default, {
          pt: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Copyright__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

_s(Dashboard, "OAQf9SHEQQsOOZKjohcuI3tGtQ0=", false, function () {
  return [useStyles];
});

_c = Dashboard;

var _c;

$RefreshReg$(_c, "Dashboard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRGFzaGJvYXJkLjA4NWM2ZjA1ZDE4NzM2NDkyNWU0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUdBLElBQU1RLFNBQVMsR0FBR1Asb0VBQVUsQ0FBQyxVQUFDUSxLQUFEO0FBQUE7O0FBQUEsU0FBWTtBQUN2Q0MsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLE9BQU8sRUFBRTtBQURMLEtBRGlDO0FBSXZDQyxJQUFBQSxPQUFPLEVBQUU7QUFDUEMsTUFBQUEsUUFBUSxFQUFFLENBREg7QUFFUEMsTUFBQUEsTUFBTSxFQUFFLE9BRkQ7QUFHUEMsTUFBQUEsUUFBUSxFQUFFO0FBSEgsS0FKOEI7QUFTdkNDLElBQUFBLFlBQVksRUFBRVAsS0FBSyxDQUFDUSxNQUFOLENBQWFDLE9BVFk7QUFVdkNDLElBQUFBLFNBQVMsRUFBRTtBQUNUQyxNQUFBQSxVQUFVLEVBQUVYLEtBQUssQ0FBQ1ksT0FBTixDQUFjLENBQWQsQ0FESDtBQUVUQyxNQUFBQSxhQUFhLEVBQUViLEtBQUssQ0FBQ1ksT0FBTixDQUFjLENBQWQ7QUFGTixLQVY0QjtBQWN2Q0UsSUFBQUEsVUFBVTtBQUNSQyxNQUFBQSxPQUFPLEVBQUUsU0FERDtBQUVSYixNQUFBQSxPQUFPLEVBQUUsTUFGRDtBQUdSYyxNQUFBQSxVQUFVLEVBQUU7QUFISixnTUFJUGhCLEtBQUssQ0FBQ2lCLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBSk8sRUFJd0I7QUFDOUJDLE1BQUFBLEtBQUssRUFBRTtBQUR1QixLQUp4QixxTUFPRCxHQVBDLHNNQVFBLHFCQVJBLDRNQVNNLEVBVE4sZUFkNkI7QUF5QnZDQyxJQUFBQSxVQUFVLEVBQUU7QUFBRUwsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0F6QjJCO0FBMEJ2Q00sSUFBQUEsS0FBSyxFQUFFO0FBRUwsbUNBQTZCO0FBQzNCQyxRQUFBQSxNQUFNLEVBQUU7QUFEbUIsT0FGeEI7QUFLTEMsTUFBQUEsVUFBVSxFQUFFdkIsS0FBSyxDQUFDWSxPQUFOLENBQWMsQ0FBZCxDQUxQO0FBTUxZLE1BQUFBLElBQUksRUFBRTtBQU5EO0FBMUJnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFxQ2UsU0FBU0MsU0FBVCxPQUF1RDtBQUFBOztBQUFBLE1BQWxDQyxJQUFrQyxRQUFsQ0EsSUFBa0M7QUFDcEUsTUFBTUMsT0FBTyxHQUFHNUIsU0FBUyxFQUF6QjtBQUNBLE1BQU02QixPQUFPLEdBQUc5Qiw2REFBUyxDQUFDLFVBQUErQixLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRCxPQUFWO0FBQUEsR0FBTixDQUF6QjtBQUVBckMsRUFBQUEsc0RBQUEsQ0FBZ0IsWUFBTTtBQUNwQm1DLElBQUFBLElBQUksSUFBSUUsT0FBTyxDQUFDRixJQUFELENBQWY7QUFDRCxHQUZELEVBRUcsRUFGSCxFQUpvRSxDQU9wRTs7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsT0FBTyxDQUFDMUIsSUFBeEI7QUFBQSw0QkFDRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFNLGVBQVMsRUFBRTBCLE9BQU8sQ0FBQ3hCLE9BQXpCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFd0IsT0FBTyxDQUFDcEI7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsZ0VBQUQ7QUFBVyxnQkFBUSxFQUFDLElBQXBCO0FBQXlCLGlCQUFTLEVBQUVvQixPQUFPLENBQUNqQixTQUE1QztBQUFBLGdDQUNFLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQywwREFBRDtBQUFLLFlBQUUsRUFBRSxDQUFUO0FBQUEsaUNBQ0UsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDs7R0F0QnVCZTtVQUNOMUI7OztLQURNMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGFzaGJvYXJkL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUHJvcHNDb250ZXh0IH0gZnJvbSAnbmV4dCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQ29weXJpZ2h0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29weXJpZ2h0JztcbmltcG9ydCBNYWluIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFpbic7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uLy4uL2xpYi9zdXBhYmFzZUNsaWVudCc7XG5pbXBvcnQgeyBkYXRhU3RvcmUsIEludm9pY2UsIHN1cGFiYXNlU3RvcmVTdGF0ZSB9IGZyb20gJy4uLy4uL2xpYi9zdXBhYmFzZVN0b3JlJztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICB9LFxuICBhcHBCYXJTcGFjZXI6IHRoZW1lLm1peGlucy50b29sYmFyLFxuICBjb250YWluZXI6IHtcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXG4gIH0sXG4gIHNlYXJjaEZvcm06IHtcbiAgICBwYWRkaW5nOiAnMnB4IDRweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xuICAgICAgd2lkdGg6IDMwMFxuICAgIH0sXG4gICAgd2lkdGg6IDUwMCxcbiAgICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5JyxcbiAgICBib3JkZXJSYWRpdXM6IDEwXG4gIH0sXG4gIGljb25CdXR0b246IHsgcGFkZGluZzogMTAgfSxcbiAgaW5wdXQ6IHtcblxuICAgIFwiJiBpbnB1dDpmb2N1cyAkc2VhcmNoRm9ybVwiOiB7XG4gICAgICBib3JkZXI6ICcxcHggc29saWQgeWVsbG93J1xuICAgIH0sXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcbiAgICBmbGV4OiAxLFxuICB9XG59KSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKHsgZGF0YSB9OiB7IGRhdGE6IEludm9pY2VbXSB8IFtdIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBzZXREYXRhID0gZGF0YVN0b3JlKHN0YXRlID0+IHN0YXRlLnNldERhdGEpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGF0YSAmJiBzZXREYXRhKGRhdGEpXG4gIH0sIFtdKTtcbiAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxMYXlvdXQgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyU3BhY2VyfSAvPlxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxCb3ggcHQ9ezR9PlxuICAgICAgICAgICAgPENvcHlyaWdodCAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChcbiAgY29udGV4dDogR2V0U3RhdGljUHJvcHNDb250ZXh0XG4pID0+IHtcblxuICBsZXQgeyBkYXRhOiBJbnZvaWNlLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgnSW52b2ljZScpXG4gICAgLnNlbGVjdChgXG4gICBpZCwgZGF0ZSwgaW52b2ljZV9pZCwgbmFtZSwgYWRkcmVzcywgcGhvbmUsIGFtb3VudCxcbiAgIEl0ZW0gKFxuICAgICAgZGVzY3JpcHRpb24sIHF1YW50aXR5LCByYXRlLCBhbW91bnQpYCkub3JkZXIoJ2lkJywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8qIHJldHVybiB7XG4gICAgICB0cnVlLy8gbm90Rm91bmQ6IHRydWUsIFxuICAgICB9Ki9cbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm90ZWN0ZWQ6IHRydWUsXG4gICAgICBkYXRhOiBJbnZvaWNlXG4gICAgfVxuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1ha2VTdHlsZXMiLCJCb3giLCJDb250YWluZXIiLCJMYXlvdXQiLCJDb3B5cmlnaHQiLCJNYWluIiwiZGF0YVN0b3JlIiwidXNlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImNvbnRlbnQiLCJmbGV4R3JvdyIsImhlaWdodCIsIm92ZXJmbG93IiwiYXBwQmFyU3BhY2VyIiwibWl4aW5zIiwidG9vbGJhciIsImNvbnRhaW5lciIsInBhZGRpbmdUb3AiLCJzcGFjaW5nIiwicGFkZGluZ0JvdHRvbSIsInNlYXJjaEZvcm0iLCJwYWRkaW5nIiwiYWxpZ25JdGVtcyIsImJyZWFrcG9pbnRzIiwiZG93biIsIndpZHRoIiwiaWNvbkJ1dHRvbiIsImlucHV0IiwiYm9yZGVyIiwibWFyZ2luTGVmdCIsImZsZXgiLCJEYXNoYm9hcmQiLCJkYXRhIiwiY2xhc3NlcyIsInNldERhdGEiLCJzdGF0ZSIsInVzZUVmZmVjdCJdLCJzb3VyY2VSb290IjoiIn0=
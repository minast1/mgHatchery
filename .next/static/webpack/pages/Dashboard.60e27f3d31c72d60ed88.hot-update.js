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
    }), (0,_home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_searchForm, "width", 500), (0,_home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_searchForm, "border", '1px solid lightgray'), (0,_home_lukatoni_DockerProjects_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_searchForm, "borderRadius", 5), _searchForm),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRGFzaGJvYXJkLjYwZTI3ZjNkMzFjNzJkNjBlZDg4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUdBLElBQU1RLFNBQVMsR0FBR1Asb0VBQVUsQ0FBQyxVQUFDUSxLQUFEO0FBQUE7O0FBQUEsU0FBWTtBQUN2Q0MsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLE9BQU8sRUFBRTtBQURMLEtBRGlDO0FBSXZDQyxJQUFBQSxPQUFPLEVBQUU7QUFDUEMsTUFBQUEsUUFBUSxFQUFFLENBREg7QUFFUEMsTUFBQUEsTUFBTSxFQUFFLE9BRkQ7QUFHUEMsTUFBQUEsUUFBUSxFQUFFO0FBSEgsS0FKOEI7QUFTdkNDLElBQUFBLFlBQVksRUFBRVAsS0FBSyxDQUFDUSxNQUFOLENBQWFDLE9BVFk7QUFVdkNDLElBQUFBLFNBQVMsRUFBRTtBQUNUQyxNQUFBQSxVQUFVLEVBQUVYLEtBQUssQ0FBQ1ksT0FBTixDQUFjLENBQWQsQ0FESDtBQUVUQyxNQUFBQSxhQUFhLEVBQUViLEtBQUssQ0FBQ1ksT0FBTixDQUFjLENBQWQ7QUFGTixLQVY0QjtBQWN2Q0UsSUFBQUEsVUFBVTtBQUNSQyxNQUFBQSxPQUFPLEVBQUUsU0FERDtBQUVSYixNQUFBQSxPQUFPLEVBQUUsTUFGRDtBQUdSYyxNQUFBQSxVQUFVLEVBQUU7QUFISixnTUFJUGhCLEtBQUssQ0FBQ2lCLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBSk8sRUFJd0I7QUFDOUJDLE1BQUFBLEtBQUssRUFBRTtBQUR1QixLQUp4QixxTUFPRCxHQVBDLHNNQVFBLHFCQVJBLDRNQVNNLENBVE4sZUFkNkI7QUF5QnZDQyxJQUFBQSxVQUFVLEVBQUU7QUFBRUwsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0F6QjJCO0FBMEJ2Q00sSUFBQUEsS0FBSyxFQUFFO0FBRUwsbUNBQTZCO0FBQzNCQyxRQUFBQSxNQUFNLEVBQUU7QUFEbUIsT0FGeEI7QUFLTEMsTUFBQUEsVUFBVSxFQUFFdkIsS0FBSyxDQUFDWSxPQUFOLENBQWMsQ0FBZCxDQUxQO0FBTUxZLE1BQUFBLElBQUksRUFBRTtBQU5EO0FBMUJnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFxQ2UsU0FBU0MsU0FBVCxPQUF1RDtBQUFBOztBQUFBLE1BQWxDQyxJQUFrQyxRQUFsQ0EsSUFBa0M7QUFDcEUsTUFBTUMsT0FBTyxHQUFHNUIsU0FBUyxFQUF6QjtBQUNBLE1BQU02QixPQUFPLEdBQUc5Qiw2REFBUyxDQUFDLFVBQUErQixLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRCxPQUFWO0FBQUEsR0FBTixDQUF6QjtBQUVBckMsRUFBQUEsc0RBQUEsQ0FBZ0IsWUFBTTtBQUNwQm1DLElBQUFBLElBQUksSUFBSUUsT0FBTyxDQUFDRixJQUFELENBQWY7QUFDRCxHQUZELEVBRUcsRUFGSCxFQUpvRSxDQU9wRTs7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsT0FBTyxDQUFDMUIsSUFBeEI7QUFBQSw0QkFDRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFNLGVBQVMsRUFBRTBCLE9BQU8sQ0FBQ3hCLE9BQXpCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFd0IsT0FBTyxDQUFDcEI7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsZ0VBQUQ7QUFBVyxnQkFBUSxFQUFDLElBQXBCO0FBQXlCLGlCQUFTLEVBQUVvQixPQUFPLENBQUNqQixTQUE1QztBQUFBLGdDQUNFLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQywwREFBRDtBQUFLLFlBQUUsRUFBRSxDQUFUO0FBQUEsaUNBQ0UsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDs7R0F0QnVCZTtVQUNOMUI7OztLQURNMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGFzaGJvYXJkL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUHJvcHNDb250ZXh0IH0gZnJvbSAnbmV4dCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQ29weXJpZ2h0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29weXJpZ2h0JztcbmltcG9ydCBNYWluIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFpbic7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uLy4uL2xpYi9zdXBhYmFzZUNsaWVudCc7XG5pbXBvcnQgeyBkYXRhU3RvcmUsIEludm9pY2UsIHN1cGFiYXNlU3RvcmVTdGF0ZSB9IGZyb20gJy4uLy4uL2xpYi9zdXBhYmFzZVN0b3JlJztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICB9LFxuICBhcHBCYXJTcGFjZXI6IHRoZW1lLm1peGlucy50b29sYmFyLFxuICBjb250YWluZXI6IHtcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXG4gIH0sXG4gIHNlYXJjaEZvcm06IHtcbiAgICBwYWRkaW5nOiAnMnB4IDRweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xuICAgICAgd2lkdGg6IDMwMFxuICAgIH0sXG4gICAgd2lkdGg6IDUwMCxcbiAgICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5JyxcbiAgICBib3JkZXJSYWRpdXM6IDVcbiAgfSxcbiAgaWNvbkJ1dHRvbjogeyBwYWRkaW5nOiAxMCB9LFxuICBpbnB1dDoge1xuXG4gICAgXCImIGlucHV0OmZvY3VzICRzZWFyY2hGb3JtXCI6IHtcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB5ZWxsb3cnXG4gICAgfSxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIGZsZXg6IDEsXG4gIH1cbn0pKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoeyBkYXRhIH06IHsgZGF0YTogSW52b2ljZVtdIHwgW10gfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHNldERhdGEgPSBkYXRhU3RvcmUoc3RhdGUgPT4gc3RhdGUuc2V0RGF0YSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBkYXRhICYmIHNldERhdGEoZGF0YSlcbiAgfSwgW10pO1xuICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPExheW91dCAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJTcGFjZXJ9IC8+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPEJveCBwdD17NH0+XG4gICAgICAgICAgICA8Q29weXJpZ2h0IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKFxuICBjb250ZXh0OiBHZXRTdGF0aWNQcm9wc0NvbnRleHRcbikgPT4ge1xuXG4gIGxldCB7IGRhdGE6IEludm9pY2UsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKCdJbnZvaWNlJylcbiAgICAuc2VsZWN0KGBcbiAgIGlkLCBkYXRlLCBpbnZvaWNlX2lkLCBuYW1lLCBhZGRyZXNzLCBwaG9uZSwgYW1vdW50LFxuICAgSXRlbSAoXG4gICAgICBkZXNjcmlwdGlvbiwgcXVhbnRpdHksIHJhdGUsIGFtb3VudClgKS5vcmRlcignaWQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLyogcmV0dXJuIHtcbiAgICAgIHRydWUvLyBub3RGb3VuZDogdHJ1ZSwgXG4gICAgIH0qL1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb3RlY3RlZDogdHJ1ZSxcbiAgICAgIGRhdGE6IEludm9pY2VcbiAgICB9XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWFrZVN0eWxlcyIsIkJveCIsIkNvbnRhaW5lciIsIkxheW91dCIsIkNvcHlyaWdodCIsIk1haW4iLCJkYXRhU3RvcmUiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiY29udGVudCIsImZsZXhHcm93IiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJhcHBCYXJTcGFjZXIiLCJtaXhpbnMiLCJ0b29sYmFyIiwiY29udGFpbmVyIiwicGFkZGluZ1RvcCIsInNwYWNpbmciLCJwYWRkaW5nQm90dG9tIiwic2VhcmNoRm9ybSIsInBhZGRpbmciLCJhbGlnbkl0ZW1zIiwiYnJlYWtwb2ludHMiLCJkb3duIiwid2lkdGgiLCJpY29uQnV0dG9uIiwiaW5wdXQiLCJib3JkZXIiLCJtYXJnaW5MZWZ0IiwiZmxleCIsIkRhc2hib2FyZCIsImRhdGEiLCJjbGFzc2VzIiwic2V0RGF0YSIsInN0YXRlIiwidXNlRWZmZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==
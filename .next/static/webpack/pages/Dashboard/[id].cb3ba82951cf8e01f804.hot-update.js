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

/***/ "./pages/Dashboard/[id].tsx":
/*!**********************************!*\
  !*** ./pages/Dashboard/[id].tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _lib_sessionStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/sessionStore */ \"./lib/sessionStore.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Invoice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Invoice */ \"./components/Invoice.tsx\");\n/* harmony import */ var _lib_supabaseStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/supabaseStore */ \"./lib/supabaseStore.ts\");\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/supabaseClient */ \"./lib/supabaseClient.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/home/lukatoni/Repositories/NextProjects/invoice-creator/pages/Dashboard/[id].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__.makeStyles)(function (theme) {\n  var _searchForm;\n\n  return {\n    root: {\n      display: 'flex',\n      backgroundColor: 'white' // height: '100vh'\n\n    },\n    content: {\n      flexGrow: 1,\n      height: '100vh',\n      overflow: 'auto'\n    },\n    appBarSpacer: theme.mixins.toolbar,\n    container: {// paddingTop: theme.spacing(4),\n      //paddingBottom: theme.spacing(4),\n    },\n    searchForm: (_searchForm = {\n      padding: '2px 4px',\n      display: 'flex',\n      alignItems: 'center'\n    }, (0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_searchForm, theme.breakpoints.down('md'), {\n      width: 300\n    }), (0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_searchForm, \"width\", 500), (0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_searchForm, \"border\", '1px solid lightgray'), (0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_searchForm, \"borderRadius\", 5), _searchForm),\n    iconButton: {\n      padding: 10\n    },\n    input: {\n      \"& input:focus $searchForm\": {\n        border: '1px solid yellow'\n      },\n      marginLeft: theme.spacing(1),\n      flex: 1\n    }\n  };\n});\nfunction Dashboard() {\n  _s();\n\n  var classes = useStyles();\n  var session = (0,_lib_sessionStore__WEBPACK_IMPORTED_MODULE_5__.useStore)(function (state) {\n    return state.Usession;\n  });\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n  var setData = (0,_lib_supabaseStore__WEBPACK_IMPORTED_MODULE_8__.dataStore)(function (state) {\n    return state.setIPData;\n  });\n  var params = router.query;\n  var id = Number(params.id);\n\n  var fetchInvoice = /*#__PURE__*/function () {\n    var _ref = (0,_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var _yield$supabase$from$, Invoice;\n\n      return _home_lukatoni_Repositories_NextProjects_invoice_creator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_9__.supabase.from('Invoice').select(\"\\n   id, date, invoice_id, name, address, phone, amount,\\n   Item (\\n      description, quantity, rate, amount)\").filter('id', 'eq', id);\n\n            case 2:\n              _yield$supabase$from$ = _context.sent;\n              Invoice = _yield$supabase$from$.data;\n              Invoice && setData(Invoice); //set it to state\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchInvoice() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(function () {\n    fetchInvoice;\n  }, []);\n  return session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: classes.root,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Invoice__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 94,\n    columnNumber: 5\n  }, this) : null;\n}\n\n_s(Dashboard, \"FbnybfAeyo2fKQW+o61SvCAhT7I=\", false, function () {\n  return [useStyles, _lib_sessionStore__WEBPACK_IMPORTED_MODULE_5__.useStore, next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];\n});\n\n_c = Dashboard;\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEI7QUFBQSwyQkFDRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURZLEdBSVYsSUFKSjtBQUtEOztHQTdCdUJ1QjtVQUNOekIsV0FDQUwseURBQ0RDOzs7S0FITzZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0Rhc2hib2FyZC9baWRdLnRzeD84YTI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBHZXRTdGF0aWNQcm9wc0NvbnRleHQgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi8uLi9saWIvc2Vzc2lvblN0b3JlJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQ29weXJpZ2h0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29weXJpZ2h0JztcbmltcG9ydCBNYWluIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFpbic7XG5pbXBvcnQgSW52b2ljZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ludm9pY2UnO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2Vzc2lvbiB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcbmltcG9ydCB7IGRhdGFTdG9yZSwgSW52b2ljZUl0ZW19IGZyb20gJy4uLy4uL2xpYi9zdXBhYmFzZVN0b3JlJztcbmltcG9ydCB7IFBERlZpZXdlciB9IGZyb20gJ0ByZWFjdC1wZGYvcmVuZGVyZXInO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vcHVibGljL2xvZ28ucG5nJ1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi8uLi9saWIvc3VwYWJhc2VDbGllbnQnO1xuXG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgLy8gaGVpZ2h0OiAnMTAwdmgnXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgfSxcbiAgYXBwQmFyU3BhY2VyOiB0aGVtZS5taXhpbnMudG9vbGJhcixcbiAgY29udGFpbmVyOiB7XG4gICAvLyBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIC8vcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcbiAgfSxcbiAgc2VhcmNoRm9ybToge1xuICAgIHBhZGRpbmc6ICcycHggNHB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG4gICAgICB3aWR0aDogMzAwIFxuICAgIH0sXG4gICAgd2lkdGg6IDUwMCxcbiAgICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5JyxcbiAgICBib3JkZXJSYWRpdXMgOiA1XG4gIH0sXG4gIGljb25CdXR0b246IHsgcGFkZGluZzogMTAgfSxcbiAgaW5wdXQ6IHtcbiAgXG4gICAgXCImIGlucHV0OmZvY3VzICRzZWFyY2hGb3JtXCI6IHtcbiAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgeWVsbG93J1xuICAgICAgIH0sXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcbiAgICBmbGV4OiAxICxcbiAgfVxufSkpO1xuXG50eXBlIEludiA9IHtcbiAgIGlkOiBudW1iZXJcbiAgICBhZGRyZXNzOiBzdHJpbmdcbiAgICBpbnZvaWNlX2lkOiBzdHJpbmdcbiAgICBhbW91bnQ6IG51bWJlclxuICAgIGRhdGU6IHN0cmluZ1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIHBob25lOiBudW1iZXJcbiAgICBJdGVtOiBJbnZvaWNlSXRlbVtdICBcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBzZXNzaW9uID0gdXNlU3RvcmUoc3RhdGUgPT4gIHN0YXRlLlVzZXNzaW9uIClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3Qgc2V0RGF0YSA9IGRhdGFTdG9yZShzdGF0ZSA9PiBzdGF0ZS5zZXRJUERhdGEpXG4gIGNvbnN0IHBhcmFtcyA9IHJvdXRlci5xdWVyeVxuICBjb25zdCBpZCAgPSBOdW1iZXIocGFyYW1zLmlkKVxuICBjb25zdCBmZXRjaEludm9pY2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAvL2ZldGNoIHRoZSBpbnZvaWNlIHdpdGggaWQgPSBwYXJhbXNcbiAgICBjb25zdCB7IGRhdGE6SW52b2ljZSB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKCdJbnZvaWNlJylcbiAgICAgIC5zZWxlY3QoYFxuICAgaWQsIGRhdGUsIGludm9pY2VfaWQsIG5hbWUsIGFkZHJlc3MsIHBob25lLCBhbW91bnQsXG4gICBJdGVtIChcbiAgICAgIGRlc2NyaXB0aW9uLCBxdWFudGl0eSwgcmF0ZSwgYW1vdW50KWApLmZpbHRlcignaWQnLCAnZXEnLCBpZCk7XG4gICAgXG4gICAgSW52b2ljZSAmJiBzZXREYXRhKEludm9pY2UpXG4gICAgICAvL3NldCBpdCB0byBzdGF0ZVxuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICBmZXRjaEludm9pY2VcbiAgfSwgW10pO1xuICAgXG4gIHJldHVybiBzZXNzaW9uID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEludm9pY2UvPlxuICAgIDwvZGl2PlxuICApIDogbnVsbFxufVxuXG5cbiAgICJdLCJuYW1lcyI6WyJSZWFjdCIsIm1ha2VTdHlsZXMiLCJ1c2VTdG9yZSIsInVzZVJvdXRlciIsIkludm9pY2UiLCJkYXRhU3RvcmUiLCJzdXBhYmFzZSIsInVzZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb250ZW50IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJvdmVyZmxvdyIsImFwcEJhclNwYWNlciIsIm1peGlucyIsInRvb2xiYXIiLCJjb250YWluZXIiLCJzZWFyY2hGb3JtIiwicGFkZGluZyIsImFsaWduSXRlbXMiLCJicmVha3BvaW50cyIsImRvd24iLCJ3aWR0aCIsImljb25CdXR0b24iLCJpbnB1dCIsImJvcmRlciIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwiZmxleCIsIkRhc2hib2FyZCIsImNsYXNzZXMiLCJzZXNzaW9uIiwic3RhdGUiLCJVc2Vzc2lvbiIsInJvdXRlciIsInNldERhdGEiLCJzZXRJUERhdGEiLCJwYXJhbXMiLCJxdWVyeSIsImlkIiwiTnVtYmVyIiwiZmV0Y2hJbnZvaWNlIiwiZnJvbSIsInNlbGVjdCIsImZpbHRlciIsImRhdGEiLCJ1c2VFZmZlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Dashboard/[id].tsx\n");

/***/ })

});
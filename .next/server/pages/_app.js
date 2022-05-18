/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/api.tsx":
/*!*********************!*\
  !*** ./lib/api.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"WithGraphQL\": () => (/* binding */ WithGraphQL),\n/* harmony export */   \"getStrapiURL\": () => (/* binding */ getStrapiURL),\n/* harmony export */   \"getStrapiMedia\": () => (/* binding */ getStrapiMedia)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/link/context */ \"@apollo/client/link/context\");\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/rkolyadko/richiProjects/welikan/lib/api.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst APP_API = \"http://localhost:1337\" || 0;\nconst httpLink = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.createHttpLink)({\n  uri: `${APP_API}/graphql`\n});\nconst authLink = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__.setContext)((_, {\n  headers\n}) => {\n  const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get('token');\n  return {\n    headers: _objectSpread(_objectSpread({}, headers), {}, {\n      authorization: token ? `Bearer ${token}` : \"\"\n    })\n  };\n});\nconst defaultOptions = {\n  watchQuery: {\n    fetchPolicy: 'no-cache',\n    errorPolicy: 'ignore'\n  },\n  query: {\n    fetchPolicy: 'no-cache',\n    errorPolicy: 'all'\n  }\n};\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n  link: authLink.concat(httpLink),\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache(),\n  defaultOptions\n});\nconst WithGraphQL = ({\n  children\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n    client: client,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 10\n  }, undefined);\n};\nconst getStrapiURL = (path = \"\") => {\n  return `${\"http://localhost:1337\" || 0}${path}`;\n};\nconst getStrapiMedia = media => {\n  var _media$url;\n\n  const imageUrl = media !== null && media !== void 0 && (_media$url = media.url) !== null && _media$url !== void 0 && _media$url.startsWith(\"/\") ? getStrapiURL(media.url) : media === null || media === void 0 ? void 0 : media.url;\n  return imageUrl;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsTUFBTU8sT0FBTyxHQUFHQyx1QkFBQSxJQUF1QixDQUF2QztBQUVBLE1BQU1FLFFBQVEsR0FBR1IsOERBQWMsQ0FBQztBQUM5QlMsRUFBQUEsR0FBRyxFQUFHLEdBQUVKLE9BQVE7QUFEYyxDQUFELENBQS9CO0FBSUEsTUFBTUssUUFBUSxHQUFHUCx1RUFBVSxDQUFDLENBQUNRLENBQUQsRUFBSTtBQUFFQyxFQUFBQTtBQUFGLENBQUosS0FBb0I7QUFDOUMsUUFBTUMsS0FBSyxHQUFHVCxvREFBQSxDQUFZLE9BQVosQ0FBZDtBQUVBLFNBQU87QUFDTFEsSUFBQUEsT0FBTyxrQ0FDRkEsT0FERTtBQUVMRyxNQUFBQSxhQUFhLEVBQUVGLEtBQUssR0FBSSxVQUFTQSxLQUFNLEVBQW5CLEdBQXVCO0FBRnRDO0FBREYsR0FBUDtBQU1ELENBVDBCLENBQTNCO0FBV0EsTUFBTUcsY0FBOEIsR0FBRztBQUNyQ0MsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFdBQVcsRUFBRSxVQURIO0FBRVZDLElBQUFBLFdBQVcsRUFBRTtBQUZILEdBRHlCO0FBS3JDQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEYsSUFBQUEsV0FBVyxFQUFFLFVBRFI7QUFFTEMsSUFBQUEsV0FBVyxFQUFFO0FBRlI7QUFMOEIsQ0FBdkM7QUFZTyxNQUFNRSxNQUFNLEdBQUcsSUFBSXRCLHdEQUFKLENBQWlCO0FBQ3JDdUIsRUFBQUEsSUFBSSxFQUFFWixRQUFRLENBQUNhLE1BQVQsQ0FBZ0JmLFFBQWhCLENBRCtCO0FBRXJDZ0IsRUFBQUEsS0FBSyxFQUFFLElBQUl0Qix5REFBSixFQUY4QjtBQUdyQ2MsRUFBQUE7QUFIcUMsQ0FBakIsQ0FBZjtBQVFBLE1BQU1TLFdBQW9DLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBa0I7QUFDcEUsc0JBQU8sOERBQUMsMERBQUQ7QUFBZ0IsVUFBTSxFQUFFTCxNQUF4QjtBQUFBLGNBQWtDSztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTUMsWUFBWSxHQUFHLENBQUNDLElBQUksR0FBRyxFQUFSLEtBQWU7QUFDekMsU0FBUSxHQUNOdEIsdUJBQUEsSUFBdUIsQ0FDeEIsR0FBRXNCLElBQUssRUFGUjtBQUdELENBSk07QUFNQSxNQUFNQyxjQUFjLEdBQUlDLEtBQUQsSUFBa0I7QUFBQTs7QUFDOUMsUUFBTUMsUUFBUSxHQUFHRCxLQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLGtCQUFBQSxLQUFLLENBQUVFLEdBQVAsa0RBQVlDLFVBQVosQ0FBdUIsR0FBdkIsSUFDYk4sWUFBWSxDQUFDRyxLQUFLLENBQUNFLEdBQVAsQ0FEQyxHQUViRixLQUZhLGFBRWJBLEtBRmEsdUJBRWJBLEtBQUssQ0FBRUUsR0FGWDtBQUdBLFNBQU9ELFFBQVA7QUFDRCxDQUxNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VsaWthbi8uL2xpYi9hcGkudHN4P2U4NDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIGNyZWF0ZUh0dHBMaW5rLCBBcG9sbG9Qcm92aWRlciwgSW5NZW1vcnlDYWNoZSwgSHR0cExpbmssIERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnQGFwb2xsby9jbGllbnQvbGluay9jb250ZXh0JztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmludGVyZmFjZSBBcG9sbG9Qcm92aWRlclByb3BzIHtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYSB7XG4gIHVybDogc3RyaW5nO1xufVxuXG5jb25zdCBBUFBfQVBJID0gcHJvY2Vzcy5lbnYuQVBQX0FQSSB8fCAnaHR0cDovL3dlbGlrYW4tc3RyYXBpLmhhcmRhcnQuY3onO1xuXG5jb25zdCBodHRwTGluayA9IGNyZWF0ZUh0dHBMaW5rKHtcbiAgdXJpOiBgJHtBUFBfQVBJfS9ncmFwaHFsYCxcbn0pO1xuXG5jb25zdCBhdXRoTGluayA9IHNldENvbnRleHQoKF8sIHsgaGVhZGVycyB9KSA9PiB7XG4gIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJyk7XG5cbiAgcmV0dXJuIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAuLi5oZWFkZXJzLFxuICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6IFwiXCIsXG4gICAgfVxuICB9XG59KTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnM6IERlZmF1bHRPcHRpb25zID0ge1xuICB3YXRjaFF1ZXJ5OiB7XG4gICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgZXJyb3JQb2xpY3k6ICdpZ25vcmUnLFxuICB9LFxuICBxdWVyeToge1xuICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgIGVycm9yUG9saWN5OiAnYWxsJyxcbiAgfSxcbn1cblxuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIGxpbms6IGF1dGhMaW5rLmNvbmNhdChodHRwTGluayksXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICBkZWZhdWx0T3B0aW9uc1xufSk7XG5cblxuXG5leHBvcnQgY29uc3QgV2l0aEdyYXBoUUw6IEZDPEFwb2xsb1Byb3ZpZGVyUHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT57IGNoaWxkcmVuIH08L0Fwb2xsb1Byb3ZpZGVyPjtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdHJhcGlVUkwgPSAocGF0aCA9IFwiXCIpID0+IHtcbiAgcmV0dXJuIGAke1xuICAgIHByb2Nlc3MuZW52LkFQUF9BUEkgfHwgXCJodHRwOi8vd2VsaWthbi1zdHJhcGkuaGFyZGFydC5jelwiXG4gIH0ke3BhdGh9YDtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0cmFwaU1lZGlhID0gKG1lZGlhOiBNZWRpYSkgPT4ge1xuICBjb25zdCBpbWFnZVVybCA9IG1lZGlhPy51cmw/LnN0YXJ0c1dpdGgoXCIvXCIpXG4gICAgPyBnZXRTdHJhcGlVUkwobWVkaWEudXJsKVxuICAgIDogbWVkaWE/LnVybDtcbiAgcmV0dXJuIGltYWdlVXJsO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwb2xsb0NsaWVudCIsImNyZWF0ZUh0dHBMaW5rIiwiQXBvbGxvUHJvdmlkZXIiLCJJbk1lbW9yeUNhY2hlIiwic2V0Q29udGV4dCIsIkNvb2tpZXMiLCJBUFBfQVBJIiwicHJvY2VzcyIsImVudiIsImh0dHBMaW5rIiwidXJpIiwiYXV0aExpbmsiLCJfIiwiaGVhZGVycyIsInRva2VuIiwiZ2V0IiwiYXV0aG9yaXphdGlvbiIsImRlZmF1bHRPcHRpb25zIiwid2F0Y2hRdWVyeSIsImZldGNoUG9saWN5IiwiZXJyb3JQb2xpY3kiLCJxdWVyeSIsImNsaWVudCIsImxpbmsiLCJjb25jYXQiLCJjYWNoZSIsIldpdGhHcmFwaFFMIiwiY2hpbGRyZW4iLCJnZXRTdHJhcGlVUkwiLCJwYXRoIiwiZ2V0U3RyYXBpTWVkaWEiLCJtZWRpYSIsImltYWdlVXJsIiwidXJsIiwic3RhcnRzV2l0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/api.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit */ \"uikit\");\n/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uikit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_input_range_lib_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-input-range/lib/css/index.css */ \"./node_modules/react-input-range/lib/css/index.css\");\n/* harmony import */ var react_input_range_lib_css_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_input_range_lib_css_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/rkolyadko/richiProjects/welikan/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_lib_api__WEBPACK_IMPORTED_MODULE_3__.WithGraphQL, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 23\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFmLEVBQW1EO0FBQ2pELHNCQUFPLDhEQUFDLGlEQUFEO0FBQUEsMkJBQWEsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBQ0QsaUVBQWVGLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWxpa2FuLy4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgJ3Vpa2l0J1xuaW1wb3J0IFwicmVhY3QtaW5wdXQtcmFuZ2UvbGliL2Nzcy9pbmRleC5jc3NcIlxuaW1wb3J0IFwiLi4vc3R5bGVzL21haW4uc2Nzc1wiXG5pbXBvcnQgeyBXaXRoR3JhcGhRTCB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIDxXaXRoR3JhcGhRTD48Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+PC9XaXRoR3JhcGhRTD5cbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiV2l0aEdyYXBoUUwiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/react-input-range/lib/css/index.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-input-range/lib/css/index.css ***!
  \**********************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/context":
/*!**********************************************!*\
  !*** external "@apollo/client/link/context" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "uikit":
/*!************************!*\
  !*** external "uikit" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("uikit");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
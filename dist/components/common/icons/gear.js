"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("./base"));

// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var Gear =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Gear, _Component);

  function Gear() {
    (0, _classCallCheck2["default"])(this, Gear);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Gear).apply(this, arguments));
  }

  (0, _createClass2["default"])(Gear, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_base["default"], this.props, _react["default"].createElement("g", null, _react["default"].createElement("path", {
        d: "M39.1740741,58 L26.2185185,58 L25.9240741,52.012963 C24.9425926,51.7185185 24.0592593,51.3259259 23.1759259,50.9333333 L18.562963,54.7611111 L9.63148148,45.8296296 L13.6555556,41.2166667 C13.262963,40.3333333 12.8703704,39.45 12.5759259,38.5666667 L6.49074074,38.2722222 L6.49074074,25.3166667 L12.6740741,25.0222222 C12.9685185,24.0407407 13.3611111,23.1574074 13.7537037,22.3722222 L9.72962963,17.7592593 L18.6611111,8.82777778 L23.2740741,12.7537037 C24.0592593,12.3611111 24.9425926,11.8703704 26.0222222,11.5759259 L26.3166667,5.58888889 L39.1740741,5.58888889 L39.4685185,11.4777778 C40.45,11.7722222 41.3333333,12.1648148 42.412963,12.7537037 L46.7314815,8.92592593 L55.662963,17.8574074 L51.9333333,22.1759259 C52.4240741,23.2555556 52.8166667,24.237037 53.2092593,25.1203704 L58.9018519,25.4148148 L58.9018519,38.2722222 L53.2092593,38.5666667 C52.9148148,39.5481481 52.4240741,40.6277778 51.9333333,41.6092593 L55.5648148,45.9277778 L46.6333333,54.8592593 L42.3148148,51.0314815 C41.2351852,51.5222222 40.3518519,51.9148148 39.3703704,52.3074074 L39.1740741,58 Z M30.1444444,53.9759259 L35.3462963,53.9759259 L35.6407407,49.0685185 L37.112963,48.6759259 C38.5851852,48.2833333 40.0574074,47.6944444 41.8240741,46.712963 L43.1,46.0259259 L46.7314815,49.2648148 L50.362963,45.6333333 L47.2222222,42.0018519 L48.0074074,40.7259259 C48.7925926,39.3518519 49.4796296,37.6833333 49.8722222,36.112963 L50.2648148,34.6407407 L55.0740741,34.3462963 L55.0740741,29.1444444 L50.1666667,28.85 L49.7740741,27.3777778 C49.3814815,25.9055556 48.7925926,24.4333333 47.8111111,22.6666667 L47.1240741,21.4888889 L50.1666667,17.8574074 L46.5351852,14.2259259 L42.9037037,17.4648148 L41.7259259,16.7777778 C39.9592593,15.7962963 38.487037,15.2074074 37.0148148,14.8148148 L35.5425926,14.4222222 L35.2481481,9.51481481 L30.0462963,9.51481481 L29.7518519,14.6185185 L28.2796296,15.0111111 C26.9055556,15.4037037 25.6296296,15.8944444 23.9611111,16.8759259 L22.6851852,17.6611111 L18.7592593,14.2259259 L15.1277778,17.8574074 L18.562963,21.7833333 L17.7777778,23.0592593 C17.0907407,24.237037 16.5018519,25.7092593 16.0111111,27.4759259 L15.6185185,28.85 L10.4166667,29.1444444 L10.4166667,34.3462963 L15.6185185,34.6407407 L16.0111111,36.112963 C16.4037037,37.7814815 16.9925926,39.1555556 17.7777778,40.4314815 L18.562963,41.7074074 L15.1277778,45.6333333 L18.7592593,49.2648148 L22.6851852,46.0259259 L23.9611111,46.8111111 C25.3351852,47.5962963 26.6111111,48.1851852 28.2796296,48.5777778 L29.7518519,48.9703704 L30.1444444,53.9759259 Z"
      }), _react["default"].createElement("path", {
        d: "M32.8068966,45.2275862 C25.2758621,45.2275862 19.1931034,39.2413793 19.1931034,31.9034483 C19.1931034,24.3724138 25.2758621,18.2896552 32.8068966,18.2896552 C40.337931,18.2896552 46.1310345,24.2758621 46.1310345,31.9034483 C46.2275862,39.2413793 40.1448276,45.2275862 32.8068966,45.2275862 Z M32.8068966,22.6344828 C27.6896552,22.6344828 23.537931,26.7862069 23.537931,31.9034483 C23.537931,36.9241379 27.6896552,40.9793103 32.8068966,40.9793103 C37.8275862,40.9793103 41.8827586,36.9241379 41.8827586,31.9034483 C41.8827586,26.6896552 37.9241379,22.6344828 32.8068966,22.6344828 Z"
      })));
    }
  }]);
  return Gear;
}(_react.Component);

exports["default"] = Gear;
(0, _defineProperty2["default"])(Gear, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Gear, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-gear'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9nZWFyLmpzIl0sIm5hbWVzIjpbIkdlYXIiLCJwcm9wcyIsIkNvbXBvbmVudCIsImhlaWdodCIsIlByb3BUeXBlcyIsInN0cmluZyIsInByZWRlZmluZWRDbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQXRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQU1xQkEsSTs7Ozs7Ozs7Ozs7OzZCQVVWO0FBQ1AsYUFDRSxnQ0FBQyxnQkFBRCxFQUFVLEtBQUtDLEtBQWYsRUFDRSwyQ0FDRTtBQUFNLFFBQUEsQ0FBQyxFQUFDO0FBQVIsUUFERixFQUVFO0FBQU0sUUFBQSxDQUFDLEVBQUM7QUFBUixRQUZGLENBREYsQ0FERjtBQVFEOzs7RUFuQitCQyxnQjs7O2lDQUFiRixJLGVBQ0E7QUFDakI7QUFDQUcsRUFBQUEsTUFBTSxFQUFFQyxzQkFBVUM7QUFGRCxDO2lDQURBTCxJLGtCQUtHO0FBQ3BCRyxFQUFBQSxNQUFNLEVBQUUsTUFEWTtBQUVwQkcsRUFBQUEsbUJBQW1CLEVBQUU7QUFGRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBpY29uLCBleC4gJzE2cHgnICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiAnMTZweCcsXG4gICAgcHJlZGVmaW5lZENsYXNzTmFtZTogJ2RhdGEtZXgtaWNvbnMtZ2VhcidcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNlIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPGc+XG4gICAgICAgICAgPHBhdGggZD1cIk0zOS4xNzQwNzQxLDU4IEwyNi4yMTg1MTg1LDU4IEwyNS45MjQwNzQxLDUyLjAxMjk2MyBDMjQuOTQyNTkyNiw1MS43MTg1MTg1IDI0LjA1OTI1OTMsNTEuMzI1OTI1OSAyMy4xNzU5MjU5LDUwLjkzMzMzMzMgTDE4LjU2Mjk2Myw1NC43NjExMTExIEw5LjYzMTQ4MTQ4LDQ1LjgyOTYyOTYgTDEzLjY1NTU1NTYsNDEuMjE2NjY2NyBDMTMuMjYyOTYzLDQwLjMzMzMzMzMgMTIuODcwMzcwNCwzOS40NSAxMi41NzU5MjU5LDM4LjU2NjY2NjcgTDYuNDkwNzQwNzQsMzguMjcyMjIyMiBMNi40OTA3NDA3NCwyNS4zMTY2NjY3IEwxMi42NzQwNzQxLDI1LjAyMjIyMjIgQzEyLjk2ODUxODUsMjQuMDQwNzQwNyAxMy4zNjExMTExLDIzLjE1NzQwNzQgMTMuNzUzNzAzNywyMi4zNzIyMjIyIEw5LjcyOTYyOTYzLDE3Ljc1OTI1OTMgTDE4LjY2MTExMTEsOC44Mjc3Nzc3OCBMMjMuMjc0MDc0MSwxMi43NTM3MDM3IEMyNC4wNTkyNTkzLDEyLjM2MTExMTEgMjQuOTQyNTkyNiwxMS44NzAzNzA0IDI2LjAyMjIyMjIsMTEuNTc1OTI1OSBMMjYuMzE2NjY2Nyw1LjU4ODg4ODg5IEwzOS4xNzQwNzQxLDUuNTg4ODg4ODkgTDM5LjQ2ODUxODUsMTEuNDc3Nzc3OCBDNDAuNDUsMTEuNzcyMjIyMiA0MS4zMzMzMzMzLDEyLjE2NDgxNDggNDIuNDEyOTYzLDEyLjc1MzcwMzcgTDQ2LjczMTQ4MTUsOC45MjU5MjU5MyBMNTUuNjYyOTYzLDE3Ljg1NzQwNzQgTDUxLjkzMzMzMzMsMjIuMTc1OTI1OSBDNTIuNDI0MDc0MSwyMy4yNTU1NTU2IDUyLjgxNjY2NjcsMjQuMjM3MDM3IDUzLjIwOTI1OTMsMjUuMTIwMzcwNCBMNTguOTAxODUxOSwyNS40MTQ4MTQ4IEw1OC45MDE4NTE5LDM4LjI3MjIyMjIgTDUzLjIwOTI1OTMsMzguNTY2NjY2NyBDNTIuOTE0ODE0OCwzOS41NDgxNDgxIDUyLjQyNDA3NDEsNDAuNjI3Nzc3OCA1MS45MzMzMzMzLDQxLjYwOTI1OTMgTDU1LjU2NDgxNDgsNDUuOTI3Nzc3OCBMNDYuNjMzMzMzMyw1NC44NTkyNTkzIEw0Mi4zMTQ4MTQ4LDUxLjAzMTQ4MTUgQzQxLjIzNTE4NTIsNTEuNTIyMjIyMiA0MC4zNTE4NTE5LDUxLjkxNDgxNDggMzkuMzcwMzcwNCw1Mi4zMDc0MDc0IEwzOS4xNzQwNzQxLDU4IFogTTMwLjE0NDQ0NDQsNTMuOTc1OTI1OSBMMzUuMzQ2Mjk2Myw1My45NzU5MjU5IEwzNS42NDA3NDA3LDQ5LjA2ODUxODUgTDM3LjExMjk2Myw0OC42NzU5MjU5IEMzOC41ODUxODUyLDQ4LjI4MzMzMzMgNDAuMDU3NDA3NCw0Ny42OTQ0NDQ0IDQxLjgyNDA3NDEsNDYuNzEyOTYzIEw0My4xLDQ2LjAyNTkyNTkgTDQ2LjczMTQ4MTUsNDkuMjY0ODE0OCBMNTAuMzYyOTYzLDQ1LjYzMzMzMzMgTDQ3LjIyMjIyMjIsNDIuMDAxODUxOSBMNDguMDA3NDA3NCw0MC43MjU5MjU5IEM0OC43OTI1OTI2LDM5LjM1MTg1MTkgNDkuNDc5NjI5NiwzNy42ODMzMzMzIDQ5Ljg3MjIyMjIsMzYuMTEyOTYzIEw1MC4yNjQ4MTQ4LDM0LjY0MDc0MDcgTDU1LjA3NDA3NDEsMzQuMzQ2Mjk2MyBMNTUuMDc0MDc0MSwyOS4xNDQ0NDQ0IEw1MC4xNjY2NjY3LDI4Ljg1IEw0OS43NzQwNzQxLDI3LjM3Nzc3NzggQzQ5LjM4MTQ4MTUsMjUuOTA1NTU1NiA0OC43OTI1OTI2LDI0LjQzMzMzMzMgNDcuODExMTExMSwyMi42NjY2NjY3IEw0Ny4xMjQwNzQxLDIxLjQ4ODg4ODkgTDUwLjE2NjY2NjcsMTcuODU3NDA3NCBMNDYuNTM1MTg1MiwxNC4yMjU5MjU5IEw0Mi45MDM3MDM3LDE3LjQ2NDgxNDggTDQxLjcyNTkyNTksMTYuNzc3Nzc3OCBDMzkuOTU5MjU5MywxNS43OTYyOTYzIDM4LjQ4NzAzNywxNS4yMDc0MDc0IDM3LjAxNDgxNDgsMTQuODE0ODE0OCBMMzUuNTQyNTkyNiwxNC40MjIyMjIyIEwzNS4yNDgxNDgxLDkuNTE0ODE0ODEgTDMwLjA0NjI5NjMsOS41MTQ4MTQ4MSBMMjkuNzUxODUxOSwxNC42MTg1MTg1IEwyOC4yNzk2Mjk2LDE1LjAxMTExMTEgQzI2LjkwNTU1NTYsMTUuNDAzNzAzNyAyNS42Mjk2Mjk2LDE1Ljg5NDQ0NDQgMjMuOTYxMTExMSwxNi44NzU5MjU5IEwyMi42ODUxODUyLDE3LjY2MTExMTEgTDE4Ljc1OTI1OTMsMTQuMjI1OTI1OSBMMTUuMTI3Nzc3OCwxNy44NTc0MDc0IEwxOC41NjI5NjMsMjEuNzgzMzMzMyBMMTcuNzc3Nzc3OCwyMy4wNTkyNTkzIEMxNy4wOTA3NDA3LDI0LjIzNzAzNyAxNi41MDE4NTE5LDI1LjcwOTI1OTMgMTYuMDExMTExMSwyNy40NzU5MjU5IEwxNS42MTg1MTg1LDI4Ljg1IEwxMC40MTY2NjY3LDI5LjE0NDQ0NDQgTDEwLjQxNjY2NjcsMzQuMzQ2Mjk2MyBMMTUuNjE4NTE4NSwzNC42NDA3NDA3IEwxNi4wMTExMTExLDM2LjExMjk2MyBDMTYuNDAzNzAzNywzNy43ODE0ODE1IDE2Ljk5MjU5MjYsMzkuMTU1NTU1NiAxNy43Nzc3Nzc4LDQwLjQzMTQ4MTUgTDE4LjU2Mjk2Myw0MS43MDc0MDc0IEwxNS4xMjc3Nzc4LDQ1LjYzMzMzMzMgTDE4Ljc1OTI1OTMsNDkuMjY0ODE0OCBMMjIuNjg1MTg1Miw0Ni4wMjU5MjU5IEwyMy45NjExMTExLDQ2LjgxMTExMTEgQzI1LjMzNTE4NTIsNDcuNTk2Mjk2MyAyNi42MTExMTExLDQ4LjE4NTE4NTIgMjguMjc5NjI5Niw0OC41Nzc3Nzc4IEwyOS43NTE4NTE5LDQ4Ljk3MDM3MDQgTDMwLjE0NDQ0NDQsNTMuOTc1OTI1OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTMyLjgwNjg5NjYsNDUuMjI3NTg2MiBDMjUuMjc1ODYyMSw0NS4yMjc1ODYyIDE5LjE5MzEwMzQsMzkuMjQxMzc5MyAxOS4xOTMxMDM0LDMxLjkwMzQ0ODMgQzE5LjE5MzEwMzQsMjQuMzcyNDEzOCAyNS4yNzU4NjIxLDE4LjI4OTY1NTIgMzIuODA2ODk2NiwxOC4yODk2NTUyIEM0MC4zMzc5MzEsMTguMjg5NjU1MiA0Ni4xMzEwMzQ1LDI0LjI3NTg2MjEgNDYuMTMxMDM0NSwzMS45MDM0NDgzIEM0Ni4yMjc1ODYyLDM5LjI0MTM3OTMgNDAuMTQ0ODI3Niw0NS4yMjc1ODYyIDMyLjgwNjg5NjYsNDUuMjI3NTg2MiBaIE0zMi44MDY4OTY2LDIyLjYzNDQ4MjggQzI3LjY4OTY1NTIsMjIuNjM0NDgyOCAyMy41Mzc5MzEsMjYuNzg2MjA2OSAyMy41Mzc5MzEsMzEuOTAzNDQ4MyBDMjMuNTM3OTMxLDM2LjkyNDEzNzkgMjcuNjg5NjU1Miw0MC45NzkzMTAzIDMyLjgwNjg5NjYsNDAuOTc5MzEwMyBDMzcuODI3NTg2Miw0MC45NzkzMTAzIDQxLjg4Mjc1ODYsMzYuOTI0MTM3OSA0MS44ODI3NTg2LDMxLjkwMzQ0ODMgQzQxLjg4Mjc1ODYsMjYuNjg5NjU1MiAzNy45MjQxMzc5LDIyLjYzNDQ4MjggMzIuODA2ODk2NiwyMi42MzQ0ODI4IFpcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L0Jhc2U+XG4gICAgKTtcbiAgfVxufVxuIl19
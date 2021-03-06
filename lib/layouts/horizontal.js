"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimePickerLayoutHorizontal = function (_Component) {
    _inherits(DateTimePickerLayoutHorizontal, _Component);

    function DateTimePickerLayoutHorizontal() {
        _classCallCheck(this, DateTimePickerLayoutHorizontal);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(DateTimePickerLayoutHorizontal).apply(this, arguments));
    }

    _createClass(DateTimePickerLayoutHorizontal, [{
        key: "render",
        value: function render() {
            var _props = this.props;
            var datePicker = _props.datePicker;
            var timePicker = _props.timePicker;


            return _react2.default.createElement(
                "div",
                { className: "row" },
                datePicker,
                timePicker
            );
        }
    }]);

    return DateTimePickerLayoutHorizontal;
}(_react.Component);

DateTimePickerLayoutHorizontal.propTypes = {
    datePicker: _react2.default.PropTypes.node,
    timePicker: _react2.default.PropTypes.node
};
exports.default = DateTimePickerLayoutHorizontal;
//# sourceMappingURL=horizontal.js.map
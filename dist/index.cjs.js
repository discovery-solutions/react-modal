'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var React = require('react');
var _extends = require('@babel/runtime/helpers/extends');
var _typeof = require('@babel/runtime/helpers/typeof');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);
var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);

var FilePlatform = /*#__PURE__*/function () {
  function FilePlatform() {
    _classCallCheck__default['default'](this, FilePlatform);
  }

  _createClass__default['default'](FilePlatform, null, [{
    key: "get",
    value: function get() {
      try {
        if (typeof navigator.product === "string" && navigator.product.toLowerCase().search("react") > -1) return "native";
        return "web";
      } catch (e1) {
        return "desktop";
      }
    }
  }, {
    key: "select",
    value: function select(config) {
      var platform = FilePlatform.get();
      var data = config[platform] || config["default"];
      var options = {
        // eslint-ignore-next-line
        "string": function string() {
          return require(data);
        },
        "object": function object() {
          return data;
        },
        "function": function _function() {
          return data();
        }
      };

      try {
        return options[_typeof__default['default'](data)]();
      } catch (e) {
        return undefined;
      }
    }
  }]);

  return FilePlatform;
}();

var styles = FilePlatform.select({
  "native": "./native.js",
  web: function web() {
    return require("./web.js");
  },
  "default": function _default() {
    return require("./web.js");
  }
});

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Modal$1 = function Modal(_ref) {
  var _content, _content$props;

  var active = _ref.active;
      _ref.show;
      var data = _ref.data,
      children = _ref.children,
      closeModal = _ref.closeModal,
      style = _ref.style;
  var content = null;
  var Container = styles.Container,
      Overlay = styles.Overlay;
      styles.Card;
  if (typeof active !== "string") return null;

  if (Array.isArray(children)) {
    // eslint-disable-next-line
    var _iterator = _createForOfIteratorHelper(children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;
        if (child.props.name === active) content = child;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    if (children.props.name === active) content = children;
  }

  if (!content) return null;
  var Component = (_content = content) === null || _content === void 0 ? void 0 : (_content$props = _content.props) === null || _content$props === void 0 ? void 0 : _content$props.component;
  return /*#__PURE__*/React__default['default'].createElement(Container, {
    show: true,
    style: style
  }, /*#__PURE__*/React__default['default'].createElement(Overlay, {
    onClick: closeModal
  }), typeof Component === "function" ? /*#__PURE__*/React__default['default'].createElement(Component, _extends__default['default']({
    closeModal: closeModal
  }, data)) : /*#__PURE__*/React__default['default'].cloneElement(content, _objectSpread$1(_objectSpread$1({}, data), {}, {
    closeModal: closeModal
  })));
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
global.octal_dev_modal_Context = /*#__PURE__*/React__default['default'].createContext();

var modalReducer = function modalReducer(state, action) {
  switch (action.type) {
    case "updateModal":
      {
        return {
          active: action.active,
          data: action.data
        };
      }

    default:
      {
        return new Error("Unhandled action type: " + action.type);
      }
  }
};

var ModalProvider = function ModalProvider(_ref) {
  var children = _ref.children,
      _ref$active = _ref.active,
      active = _ref$active === void 0 ? null : _ref$active,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      rest = _objectWithoutProperties__default['default'](_ref, ["children", "active", "data"]);

  var _React$useReducer = React__default['default'].useReducer(modalReducer, {
    active: active,
    data: data
  }),
      _React$useReducer2 = _slicedToArray__default['default'](_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  global.OctalDev_updateModal = function (active) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return dispatch({
      type: "updateModal",
      active: active,
      data: data
    });
  };

  var closeModal = function closeModal() {
    return global.OctalDev_updateModal(null);
  };

  return /*#__PURE__*/React__default['default'].createElement(global.octal_dev_modal_Context.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, /*#__PURE__*/React__default['default'].createElement(Modal$1, _objectSpread(_objectSpread(_objectSpread({}, state), rest), {}, {
    closeModal: closeModal
  }), children));
};
var Modal = function Modal(_ref2) {
  _ref2.name;
      _ref2.component;
  return null;
};
var showModal = function showModal(name, data) {
  return global.OctalDev_updateModal(name, data);
};

exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.showModal = showModal;

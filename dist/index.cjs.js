'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var React = require('react');
var _extends = require('@babel/runtime/helpers/extends');
var _taggedTemplateLiteral = require('@babel/runtime/helpers/taggedTemplateLiteral');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _taggedTemplateLiteral__default = /*#__PURE__*/_interopDefaultLegacy(_taggedTemplateLiteral);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var fadeIn = styled.keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral__default['default'](["\n  from {\n      opacity: 0;\n  }\n  to {\n      opacity: 1;\n  }\n"])));
var fadeOut = styled.keyframes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral__default['default'](["\n    from {\n        opacity: 1;\n    }\n    to {\n        opacity: 0;\n    }\n"])));
var Container = styled__default['default'].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral__default['default'](["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 99;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    animation: ", " 0.3s;\n    animation-direction: forward;\n"])), function (_ref) {
  var show = _ref.show;
  return show ? fadeIn : fadeOut;
});
var Overlay = styled__default['default'].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral__default['default'](["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #000;\n    opacity: 0.8;\n    backdrop-filter: blur(3px);\n    transition: all 0.3s;\n\n    :hover {\n        cursor: pointer;\n    }\n"])));
var Card = styled__default['default'].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral__default['default'](["\n    padding: 20px;\n    background: #FFF;\n    border-radius: 8px;\n    z-index: 1;\n"])));

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
  }), /*#__PURE__*/React__default['default'].createElement(Card, null, typeof Component === "function" ? /*#__PURE__*/React__default['default'].createElement(Component, _extends__default['default']({
    closeModal: closeModal
  }, data)) : /*#__PURE__*/React__default['default'].cloneElement(content, _objectSpread$1(_objectSpread$1({}, data), {}, {
    closeModal: closeModal
  }))));
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

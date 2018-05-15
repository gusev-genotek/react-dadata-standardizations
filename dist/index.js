module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(11)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(14)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleKeyPress = __webpack_require__(26);

Object.defineProperty(exports, 'handleKeyPress', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_handleKeyPress).default;
  }
});

var _TabHandler = __webpack_require__(27);

Object.defineProperty(exports, 'TabHandler', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TabHandler).default;
  }
});

var _EnterHandler = __webpack_require__(28);

Object.defineProperty(exports, 'EnterHandler', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_EnterHandler).default;
  }
});

var _EscapeHandler = __webpack_require__(29);

Object.defineProperty(exports, 'EscapeHandler', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_EscapeHandler).default;
  }
});

var _ArrowUpHandler = __webpack_require__(30);

Object.defineProperty(exports, 'ArrowUpHandler', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ArrowUpHandler).default;
  }
});

var _ArrowDownHandler = __webpack_require__(31);

Object.defineProperty(exports, 'ArrowDownHandler', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ArrowDownHandler).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(3);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _headers = __webpack_require__(34);

Object.defineProperty(exports, 'headersFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_headers).default;
  }
});

var _request = __webpack_require__(35);

Object.defineProperty(exports, 'requestFactoryFactory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_request).default;
  }
});

var _requestBody = __webpack_require__(36);

Object.defineProperty(exports, 'buildRequestBody', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_requestBody).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(15);

var _SuggestionsList = __webpack_require__(20);

var _SuggestionsList2 = _interopRequireDefault(_SuggestionsList);

var _QueryInput = __webpack_require__(25);

var _QueryInput2 = _interopRequireDefault(_QueryInput);

var _handlers = __webpack_require__(6);

var _FetchApi = __webpack_require__(32);

var _FetchApi2 = _interopRequireDefault(_FetchApi);

var _helpers = __webpack_require__(8);

var _index = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DadataStandardizations = function (_Component) {
  _inherits(DadataStandardizations, _Component);

  function DadataStandardizations(props) {
    _classCallCheck(this, DadataStandardizations);

    var _this = _possibleConstructorReturn(this, (DadataStandardizations.__proto__ || Object.getPrototypeOf(DadataStandardizations)).call(this, props));

    _initialiseProps.call(_this);

    var apiUrl = props.apiUrl,
        token = props.token,
        service = props.service,
        geolocation = props.geolocation;

    _this.api = new _FetchApi2.default(apiUrl, token, service, geolocation);
    _this.handleKeyPress = _handlers.handleKeyPress.bind(_this);

    _this.state = {
      _startValidation: false,
      _isValid: false,
      _value: _this.props.value,
      query: '',
      standardizations: [],
      selected: -1,
      loading: false,
      success: false,
      error: false,
      showSuggestions: false
    };
    return _this;
  }

  _createClass(DadataStandardizations, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.value) {
        this.setValue(this.props.value);
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ query: this.props.query });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        query: nextProps.query,
        standardizations: [],
        showSuggestions: false,
        success: false
      });
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      var _this2 = this;

      this.setState({
        _value: value
      }, function () {
        _this2.validateInput();
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state._value;
    }
  }, {
    key: 'validateInput',
    value: function validateInput() {
      var _this3 = this;

      var value = this.getValue();
      var validates = [];

      this.setState({
        _isValid: _.every(validates, Boolean)
      }, function () {
        _this3.props.validate();
      });
    }
  }, {
    key: 'changeValue',
    value: function changeValue(event) {
      this.setValue(event.currentTarget.value);
      this.props.onChange(event);
    }
  }, {
    key: 'changedValue',
    value: function changedValue(event) {
      if (!this.state._startValidation) {
        this.setState({
          _startValidation: true
        });
      }
      this.props.onBlur();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          loading = _state.loading,
          query = _state.query,
          showSuggestions = _state.showSuggestions,
          standardizations = _state.standardizations,
          selected = _state.selected;

      var errorClass = this.state._startValidation ? this.state._isValid ? '' : ' error' : '';
      var errorMessage = this.props.errorMessage;
      var inputValue = this.getValue() ? this.getValue() : this.props.value;

      return _react2.default.createElement(
        'div',
        { className: 'suggestions-wrapper' + errorClass },
        _react2.default.createElement(
          'div',
          { className: 'suggestions-container' },
          _react2.default.createElement(_QueryInput2.default, {
            onChange: this.handleChange,
            placeholder: this.props.placeholder,
            loading: loading,
            query: query,
            onMouseDown: this.makeListVisible,
            onKeyPress: this.handleKeyPress,
            onBlur: this.handleBlur,
            onFocus: this.handleFocus
          }),
          _react2.default.createElement(_SuggestionsList2.default, {
            standardizations: standardizations,
            hint: this.props.hint,
            visible: showSuggestions,
            onSelect: this.handleSelect,
            selected: selected,
            suggestionsFormatter: this.suggestionsFormatter,
            searchWords: this.searchWords,
            highlighting: this.props.highlighting,
            subtextFormatter: this.subtextFormatter
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'errorMessage' },
          errorMessage
        )
      );
    }
  }]);

  return DadataStandardizations;
}(_react.Component);

DadataStandardizations.propTypes = {
  token: _propTypes2.default.string.isRequired,
  count: _propTypes2.default.number.isRequired,
  //deferRequestBy: PropTypes.number.isRequired, // doesn't work with fetch Api
  hint: _propTypes2.default.string.isRequired,
  minChars: _propTypes2.default.number.isRequired,
  geolocation: _propTypes2.default.bool.isRequired,
  query: _propTypes2.default.string.isRequired,
  service: _propTypes2.default.string.isRequired,
  highlighting: _propTypes2.default.bool.isRequired,
  specialRequestOptions: _propTypes2.default.object,
  placeholder: _propTypes2.default.string,

  validate: _propTypes2.default.func,
  errorMessage: _propTypes2.default.any,

  //handlers:
  onSelect: _propTypes2.default.func.isRequired,
  onChange: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  suggestionsFormatter: _propTypes2.default.func,
  selectedSuggestionFormatter: _propTypes2.default.func
};
DadataStandardizations.defaultProps = {
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  token: '',
  count: 10,
  //deferRequestBy: 300,
  minChars: 3,
  geolocation: true,
  hint: 'Выберите вариант ниже или продолжите ввод',
  query: '',
  service: 'address',
  highlighting: true
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.fetchData = function (query) {
    _this4.setState({
      loading: true,
      success: false
    });

    var requestBody = (0, _helpers.buildRequestBody)(query, _this4.props);

    _this4.api.standardizations(requestBody).then(function (standardizations) {
      _this4.setState({
        standardizations: standardizations,
        loading: false,
        error: false,
        success: true,
        showSuggestions: true
      });
    }).catch(function (e) {
      return _this4.handleError(e);
    });
  };

  this.searchWords = function () {
    var query = _this4.state.query;

    var searchWords = query.split(/[^-А-Яа-яЁё\d\w]+/);
    var service = _this4.props.service;

    if (service === _FetchApi2.default.ADDRESS) {
      return searchWords.filter(function (word) {
        return !_index.SHORT_TYPES.includes(word);
      });
    }
    return searchWords;
  };

  this.handleChange = function (e) {
    var query = e.target.value;
    _this4.setState({
      query: query,
      selected: -1
    });

    var minChars = _this4.props.minChars;

    if (query.length >= minChars) {
      _this4.fetchData(query);
    } else {
      _this4.setState({
        standardizations: [],
        showSuggestions: false,
        success: false
      });
    }

    var onChange = _this4.props.onChange;

    if (onChange) {
      onChange(query);
    }

    _this4.changeValue(e);
  };

  this.handleBlur = function (e) {
    _this4.makeListInvisible();
    var onBlur = _this4.props.onBlur;

    if (onBlur) {
      onBlur();
    }

    console.log(_this4.state);

    _this4.changedValue(e);
  };

  this.handleError = function (e) {
    _this4.setState({
      error: true,
      loading: false,
      success: false
    });
    var onError = _this4.props.onError;

    if (onError) {
      onError(e);
    }
  };

  this.selectSuggestion = function (index) {
    _this4.setState(function (_ref) {
      var standardizations = _ref.standardizations;

      var selectedSuggestion = standardizations[index];
      var query = _this4.selectedSuggestionFormatter(selectedSuggestion);
      return {
        selected: index,
        query: query
      };
    });
  };

  this.handleSelect = function (index) {
    return function () {
      var selected = _this4.state.selected;

      if (index !== selected) {
        _this4.selectSuggestion(index);
      }
      var selectedSuggestion = _this4.state.standardizations[index];
      var onSelect = _this4.props.onSelect;

      onSelect(selectedSuggestion);
    };
  };

  this.formatter = function (suggestion, name) {
    var customFormatter = _this4.props[name];

    if (customFormatter) {
      return customFormatter(suggestion);
    }
    return suggestion.result;
  };

  this.suggestionsFormatter = function (suggestion) {
    return _this4.formatter(suggestion, 'suggestionsFormatter');
  };

  this.selectedSuggestionFormatter = function (suggestion) {
    return _this4.formatter(suggestion, 'selectedSuggestionFormatter');
  };

  this.subtextFormatter = function (suggestion) {
    var service = _this4.props.service;

    if (service === 'party') {
      return '\u0418\u041D\u041D ' + suggestion.data.inn;
    }
    return null;
  };

  this.makeListVisible = function () {
    var _state2 = _this4.state,
        showSuggestions = _state2.showSuggestions,
        standardizations = _state2.standardizations;

    if (showSuggestions) {
      return;
    }
    _this4.setState({ showSuggestions: !!standardizations.length });
  };

  this.handleFocus = function () {
    var _state3 = _this4.state,
        query = _state3.query,
        success = _state3.success,
        standardizations = _state3.standardizations,
        selected = _state3.selected,
        error = _state3.error;
    var minChars = _this4.props.minChars;


    if (!!standardizations.length && selected === -1) {
      _this4.makeListVisible();
    } else if (query.length >= minChars && !success && !error) {
      _this4.fetchData(query);
    }
  };

  this.makeListInvisible = function () {
    var showSuggestions = _this4.state.showSuggestions;

    if (!showSuggestions) {
      return;
    }
    _this4.setState({ showSuggestions: false });
  };
};

exports.default = DadataStandardizations;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(3);
var invariant = __webpack_require__(4);
var warning = __webpack_require__(7);
var assign = __webpack_require__(12);

var ReactPropTypesSecret = __webpack_require__(5);
var checkPropTypes = __webpack_require__(13);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(4);
  var warning = __webpack_require__(7);
  var ReactPropTypesSecret = __webpack_require__(5);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(3);
var invariant = __webpack_require__(4);
var ReactPropTypesSecret = __webpack_require__(5);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(18)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-2!../../node_modules/less-loader/dist/cjs.js!./styles.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-2!../../node_modules/less-loader/dist/cjs.js!./styles.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".suggestions-nowrap{white-space:nowrap}.suggestions-input{-ms-box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}.suggestions-input.loading{background:hsla(0,0%,100%,.75) url(\"data:image/gif;base64,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\") 50% 50% no-repeat;background-position-x:100%}.suggestions-input::-ms-clear{display:none}.suggestions-wrapper{width:100%;display:inline-block;position:relative;margin:0;padding:0;vertical-align:top;min-height:1px;-webkit-text-size-adjust:100%}.suggestions-suggestions{background:#fff;border:1px solid #999;-ms-box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:default;z-index:9999;-webkit-text-size-adjust:100%}.suggestions-suggestions strong{font-weight:400;color:#39f}.suggestions-suggestions.suggestions-mobile{border-style:none}.suggestions-suggestions.suggestions-mobile .suggestions-suggestion{border-bottom:1px solid #ddd}.suggestions-suggestion{padding:4px;overflow:hidden}.suggestions-suggestion:hover{background:#f7f7f7}.suggestions-selected,.suggestions-selected:hover{background:#f0f0f0}.suggestions-hint{padding:4px;white-space:nowrap;overflow:hidden;color:#777;font-size:85%}.suggestions-constraints{list-style:none!important;margin:0!important;padding:0!important;position:absolute!important;white-space:nowrap!important}.suggestions-constraints:empty{display:none!important}.suggestions-constraints li{background:#f8f8f8;border:1px solid #ccc;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;cursor:default;display:inline-block;margin:0 4px 0 0;padding:0 .5em}.suggestions-constraints li .suggestions-remove{height:1em;width:1em;display:inline-block;margin:0 0 0 .25em;background:transparent url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48Zz48cGF0aCBkPSdtMjAsMjBtMTAsMGwyMCwyMGwyMCwtMjBsMTAsMTBsLTIwLDIwbDIwLDIwbC0xMCwxMGwtMjAsLTIwbC0yMCwyMGwtMTAsLTEwbDIwLC0yMGwtMjAsLTIwbDEwLC0xMCcgZmlsbD0nIzk5OScvPjwvZz48L3N2Zz4=\") 50% 50% no-repeat;background-size:contain;cursor:pointer;opacity:.8}.suggestions-constraints li .suggestions-remove:hover{opacity:1}.suggestions-constraints li span{vertical-align:middle}.suggestions-subtext{color:#777;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.suggestions-subtext_inline{display:inline-block;min-width:6em;vertical-align:bottom;margin:0 .5em 0 0}.suggestions-subtext-delimiter{display:inline-block;width:2px}.suggestions-subtext_label{margin:0 0 0 .25em;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;padding:0 3px;background:#f5f5f5;font-size:85%}.suggestions-value[data-suggestion-status=LIQUIDATED]{position:relative}.suggestions-value[data-suggestion-status=LIQUIDATED]:after{position:absolute;left:0;right:0;top:50%;border-top:1px solid rgba(0,0,0,.4);content:\"\"}", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(19);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 19 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Suggestion = __webpack_require__(21);

var _Suggestion2 = _interopRequireDefault(_Suggestion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuggestionsList = function SuggestionsList(props) {
  var standardizations = props.standardizations,
      visible = props.visible,
      selected = props.selected;


  if (!!standardizations.length && visible) {
    return _react2.default.createElement(
      'div',
      { className: 'suggestions-wrapper' },
      _react2.default.createElement(
        'div',
        { className: 'suggestions-suggestions' },
        _react2.default.createElement(
          'div',
          { className: 'suggestions-hint' },
          props.hint
        ),
        standardizations.map(function (standardization, index) {
          return _react2.default.createElement(_Suggestion2.default, {
            key: index /* @todo our planet needs something better than this */
            , index: index,
            selected: index === selected,
            onSelect: props.onSelect(index),
            searchWords: props.highlighting ? props.searchWords() : [],
            highlighting: props.highlighting,
            value: props.suggestionsFormatter(standardization),
            subtext: props.subtextFormatter(standardization)
          });
        })
      )
    );
  }
  return null;
};

SuggestionsList.propTypes = {
  standardizations: _propTypes2.default.array.isRequired,
  hint: _propTypes2.default.string.isRequired,
  visible: _propTypes2.default.bool.isRequired,
  suggestionsFormatter: _propTypes2.default.func.isRequired,
  subtextFormatter: _propTypes2.default.func.isRequired,
  searchWords: _propTypes2.default.func.isRequired,
  highlighting: _propTypes2.default.bool.isRequired
};
SuggestionsList.defaultProps = {};

exports.default = SuggestionsList;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SuggestionValue = __webpack_require__(22);

var _SuggestionValue2 = _interopRequireDefault(_SuggestionValue);

var _SuggestionSubtext = __webpack_require__(24);

var _SuggestionSubtext2 = _interopRequireDefault(_SuggestionSubtext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Suggestion = function (_Component) {
  _inherits(Suggestion, _Component);

  function Suggestion() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Suggestion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Suggestion.__proto__ || Object.getPrototypeOf(Suggestion)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hover: false
    }, _this.handleHover = function () {
      return _this.setHover(true);
    }, _this.handleBlur = function () {
      return _this.setHover(false);
    }, _this.setHover = function (hover) {
      _this.setState({ hover: hover });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Suggestion, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          selected = _props.selected,
          highlighting = _props.highlighting,
          searchWords = _props.searchWords,
          subtext = _props.subtext,
          value = _props.value;

      var selectedClass = selected || this.state.hover ? ' suggestions-selected' : '';
      return _react2.default.createElement(
        'div',
        {
          className: 'suggestions-suggestion' + selectedClass,
          onMouseEnter: this.handleHover,
          onMouseLeave: this.handleBlur,
          onMouseDown: this.props.onSelect
        },
        _react2.default.createElement(_SuggestionValue2.default, { highlighting: highlighting, searchWords: searchWords, value: value }),
        _react2.default.createElement(
          _SuggestionSubtext2.default,
          null,
          subtext
        )
      );
    }
  }]);

  return Suggestion;
}(_react.Component);

Suggestion.propTypes = {
  selected: _propTypes2.default.bool.isRequired,
  value: _propTypes2.default.string.isRequired,
  searchWords: _propTypes2.default.array.isRequired,
  highlighting: _propTypes2.default.bool.isRequired
};
Suggestion.defaultProps = {};

exports.default = Suggestion;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHighlightWords = __webpack_require__(23);

var _reactHighlightWords2 = _interopRequireDefault(_reactHighlightWords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuggestionValue = function SuggestionValue(_ref) {
  var highlighting = _ref.highlighting,
      searchWords = _ref.searchWords,
      value = _ref.value;

  return _react2.default.createElement(
    'span',
    { className: 'suggestions-value' },
    highlighting ? _react2.default.createElement(_reactHighlightWords2.default
    //highlightClassName=''
    , { searchWords: searchWords,
      autoEscape: true,
      textToHighlight: value
    }) : value
  );
};

SuggestionValue.propTypes = {
  highlighting: _propTypes2.default.bool.isRequired,
  searchWords: _propTypes2.default.array,
  value: _propTypes2.default.string.isRequired
};
SuggestionValue.defaultProps = {
  highlighting: true
};

exports.default = SuggestionValue;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Highlighter = __webpack_require__(2);
	
	var _Highlighter2 = _interopRequireDefault(_Highlighter);

	exports['default'] = _Highlighter2['default'];
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = Highlighter;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _highlightWordsCore = __webpack_require__(3);
	
	var _propTypes = __webpack_require__(4);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(14);
	
	var _react2 = _interopRequireDefault(_react);
	
	Highlighter.propTypes = {
	  activeClassName: _propTypes2['default'].string,
	  activeIndex: _propTypes2['default'].number,
	  activeStyle: _propTypes2['default'].object,
	  autoEscape: _propTypes2['default'].bool,
	  className: _propTypes2['default'].string,
	  highlightClassName: _propTypes2['default'].string,
	  highlightStyle: _propTypes2['default'].object,
	  highlightTag: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func, _propTypes2['default'].string]),
	  sanitize: _propTypes2['default'].func,
	  searchWords: _propTypes2['default'].arrayOf(_propTypes2['default'].string).isRequired,
	  textToHighlight: _propTypes2['default'].string.isRequired,
	  unhighlightClassName: _propTypes2['default'].string,
	  unhighlightStyle: _propTypes2['default'].object
	};
	
	/**
	 * Highlights all occurrences of search terms (searchText) within a string (textToHighlight).
	 * This function returns an array of strings and <span>s (wrapping highlighted words).
	 */
	
	function Highlighter(_ref) {
	  var _ref$activeClassName = _ref.activeClassName;
	  var activeClassName = _ref$activeClassName === undefined ? '' : _ref$activeClassName;
	  var _ref$activeIndex = _ref.activeIndex;
	  var activeIndex = _ref$activeIndex === undefined ? -1 : _ref$activeIndex;
	  var activeStyle = _ref.activeStyle;
	  var autoEscape = _ref.autoEscape;
	  var _ref$caseSensitive = _ref.caseSensitive;
	  var caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive;
	  var className = _ref.className;
	  var _ref$highlightClassName = _ref.highlightClassName;
	  var highlightClassName = _ref$highlightClassName === undefined ? '' : _ref$highlightClassName;
	  var _ref$highlightStyle = _ref.highlightStyle;
	  var highlightStyle = _ref$highlightStyle === undefined ? {} : _ref$highlightStyle;
	  var _ref$highlightTag = _ref.highlightTag;
	  var highlightTag = _ref$highlightTag === undefined ? 'mark' : _ref$highlightTag;
	  var sanitize = _ref.sanitize;
	  var searchWords = _ref.searchWords;
	  var textToHighlight = _ref.textToHighlight;
	  var _ref$unhighlightClassName = _ref.unhighlightClassName;
	  var unhighlightClassName = _ref$unhighlightClassName === undefined ? '' : _ref$unhighlightClassName;
	  var unhighlightStyle = _ref.unhighlightStyle;
	
	  var chunks = (0, _highlightWordsCore.findAll)({
	    autoEscape: autoEscape,
	    caseSensitive: caseSensitive,
	    sanitize: sanitize,
	    searchWords: searchWords,
	    textToHighlight: textToHighlight
	  });
	  var HighlightTag = highlightTag;
	  var highlightCount = -1;
	  var highlightClassNames = '';
	  var highlightStyles = undefined;
	
	  return _react2['default'].createElement(
	    'span',
	    { className: className },
	    chunks.map(function (chunk, index) {
	      var text = textToHighlight.substr(chunk.start, chunk.end - chunk.start);
	
	      if (chunk.highlight) {
	        highlightCount++;
	
	        var isActive = highlightCount === +activeIndex;
	
	        highlightClassNames = highlightClassName + ' ' + (isActive ? activeClassName : '');
	        highlightStyles = isActive === true && activeStyle != null ? Object.assign({}, highlightStyle, activeStyle) : highlightStyle;
	
	        return _react2['default'].createElement(
	          HighlightTag,
	          {
	            className: highlightClassNames,
	            key: index,
	            style: highlightStyles
	          },
	          text
	        );
	      } else {
	        return _react2['default'].createElement(
	          'span',
	          {
	            className: unhighlightClassName,
	            key: index,
	            style: unhighlightStyle
	          },
	          text
	        );
	      }
	    })
	  );
	}
	
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ (function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(1);
	
	
	/***/ }),
	/* 1 */
	/***/ (function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(2);
		
		Object.defineProperty(exports, 'combineChunks', {
		  enumerable: true,
		  get: function get() {
		    return _utils.combineChunks;
		  }
		});
		Object.defineProperty(exports, 'fillInChunks', {
		  enumerable: true,
		  get: function get() {
		    return _utils.fillInChunks;
		  }
		});
		Object.defineProperty(exports, 'findAll', {
		  enumerable: true,
		  get: function get() {
		    return _utils.findAll;
		  }
		});
		Object.defineProperty(exports, 'findChunks', {
		  enumerable: true,
		  get: function get() {
		    return _utils.findChunks;
		  }
		});
	
	/***/ }),
	/* 2 */
	/***/ (function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		/**
		 * Creates an array of chunk objects representing both higlightable and non highlightable pieces of text that match each search word.
		 * @return Array of "chunks" (where a Chunk is { start:number, end:number, highlight:boolean })
		 */
		var findAll = exports.findAll = function findAll(_ref) {
		  var autoEscape = _ref.autoEscape,
		      _ref$caseSensitive = _ref.caseSensitive,
		      caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
		      sanitize = _ref.sanitize,
		      searchWords = _ref.searchWords,
		      textToHighlight = _ref.textToHighlight;
		  return fillInChunks({
		    chunksToHighlight: combineChunks({
		      chunks: findChunks({
		        autoEscape: autoEscape,
		        caseSensitive: caseSensitive,
		        sanitize: sanitize,
		        searchWords: searchWords,
		        textToHighlight: textToHighlight
		      })
		    }),
		    totalLength: textToHighlight.length
		  });
		};
		
		/**
		 * Takes an array of {start:number, end:number} objects and combines chunks that overlap into single chunks.
		 * @return {start:number, end:number}[]
		 */
		var combineChunks = exports.combineChunks = function combineChunks(_ref2) {
		  var chunks = _ref2.chunks;
		
		  chunks = chunks.sort(function (first, second) {
		    return first.start - second.start;
		  }).reduce(function (processedChunks, nextChunk) {
		    // First chunk just goes straight in the array...
		    if (processedChunks.length === 0) {
		      return [nextChunk];
		    } else {
		      // ... subsequent chunks get checked to see if they overlap...
		      var prevChunk = processedChunks.pop();
		      if (nextChunk.start <= prevChunk.end) {
		        // It may be the case that prevChunk completely surrounds nextChunk, so take the
		        // largest of the end indeces.
		        var endIndex = Math.max(prevChunk.end, nextChunk.end);
		        processedChunks.push({ start: prevChunk.start, end: endIndex });
		      } else {
		        processedChunks.push(prevChunk, nextChunk);
		      }
		      return processedChunks;
		    }
		  }, []);
		
		  return chunks;
		};
		
		/**
		 * Examine text for any matches.
		 * If we find matches, add them to the returned array as a "chunk" object ({start:number, end:number}).
		 * @return {start:number, end:number}[]
		 */
		var findChunks = exports.findChunks = function findChunks(_ref3) {
		  var autoEscape = _ref3.autoEscape,
		      caseSensitive = _ref3.caseSensitive,
		      _ref3$sanitize = _ref3.sanitize,
		      sanitize = _ref3$sanitize === undefined ? identity : _ref3$sanitize,
		      searchWords = _ref3.searchWords,
		      textToHighlight = _ref3.textToHighlight;
		
		  textToHighlight = sanitize(textToHighlight);
		
		  return searchWords.filter(function (searchWord) {
		    return searchWord;
		  }) // Remove empty words
		  .reduce(function (chunks, searchWord) {
		    searchWord = sanitize(searchWord);
		
		    if (autoEscape) {
		      searchWord = escapeRegExpFn(searchWord);
		    }
		
		    var regex = new RegExp(searchWord, caseSensitive ? 'g' : 'gi');
		
		    var match = void 0;
		    while (match = regex.exec(textToHighlight)) {
		      chunks.push({
		        start: match.index,
		        end: regex.lastIndex
		      });
		    }
		
		    return chunks;
		  }, []);
		};
		
		/**
		 * Given a set of chunks to highlight, create an additional set of chunks
		 * to represent the bits of text between the highlighted text.
		 * @param chunksToHighlight {start:number, end:number}[]
		 * @param totalLength number
		 * @return {start:number, end:number, highlight:boolean}[]
		 */
		var fillInChunks = exports.fillInChunks = function fillInChunks(_ref4) {
		  var chunksToHighlight = _ref4.chunksToHighlight,
		      totalLength = _ref4.totalLength;
		
		  var allChunks = [];
		  var append = function append(start, end, highlight) {
		    if (end - start > 0) {
		      allChunks.push({
		        start: start,
		        end: end,
		        highlight: highlight
		      });
		    }
		  };
		
		  if (chunksToHighlight.length === 0) {
		    append(0, totalLength, false);
		  } else {
		    var lastIndex = 0;
		    chunksToHighlight.forEach(function (chunk) {
		      append(lastIndex, chunk.start, false);
		      append(chunk.start, chunk.end, true);
		      lastIndex = chunk.end;
		    });
		    append(lastIndex, totalLength, false);
		  }
		  return allChunks;
		};
		
		function identity(value) {
		  return value;
		}
		
		function escapeRegExpFn(str) {
		  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
		}
	
	/***/ })
	/******/ ]);
	//# sourceMappingURL=index.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(6)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(13)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(7);
	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(9);
	var assign = __webpack_require__(10);
	
	var ReactPropTypesSecret = __webpack_require__(11);
	var checkPropTypes = __webpack_require__(12);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(7);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(8);
	  var warning = __webpack_require__(9);
	  var ReactPropTypesSecret = __webpack_require__(11);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(7);
	var invariant = __webpack_require__(8);
	var ReactPropTypesSecret = __webpack_require__(11);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __webpack_require__(0);

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuggestionSubtext = function SuggestionSubtext(_ref) {
  var children = _ref.children;

  return children ? _react2.default.createElement(
    'div',
    { className: 'suggestions-subtext' },
    children
  ) : null;
};

SuggestionSubtext.propTypes = {
  children: _propTypes2.default.string
};
SuggestionSubtext.defaultProps = {};

exports.default = SuggestionSubtext;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QueryInput = function QueryInput(props) {
  var loading = props.loading;

  var className = 'suggestions-input' + (loading ? ' loading' : '');
  return _react2.default.createElement('input', {
    type: 'text',
    className: className,
    placeholder: props.placeholder,
    onChange: props.onChange,
    value: props.query,
    onMouseDown: props.onMouseDown,
    onKeyPress: props.onKeyPress,
    onKeyDown: props.onKeyPress,
    onBlur: props.onBlur,
    onFocus: props.onFocus
  });
};

QueryInput.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  onBlur: _propTypes2.default.func.isRequired,
  onMouseDown: _propTypes2.default.func.isRequired,
  onKeyPress: _propTypes2.default.func.isRequired,
  loading: _propTypes2.default.bool.isRequired,
  query: _propTypes2.default.string.isRequired,
  placeholder: _propTypes2.default.string.isRequired
};

QueryInput.defaultProps = {
  loading: false,
  placeholder: ''
};

exports.default = QueryInput;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(6);

function handleKeyPress(e) {

  if (e.shiftKey || e.ctrlKey || e.altKey) {
    return;
  }

  var handlers = [new _index.ArrowUpHandler(e, this), new _index.ArrowDownHandler(e, this), new _index.EnterHandler(e, this), new _index.TabHandler(e, this), new _index.EscapeHandler(e, this)];

  handlers.map(function (handler) {
    if (handler.KEY_CODE === e.which) {
      handler.handle();
    }
  });
}

exports.default = handleKeyPress;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(6);

function TabHandler(e, context) {

  var KEY_CODE = 9;
  var handle = function handle() {
    var showSuggestions = context.state.showSuggestions;

    if (showSuggestions) {
      var enterHandler = new _index.EnterHandler(e, context);
      enterHandler.handle();
    }
  };

  return {
    KEY_CODE: KEY_CODE,
    handle: handle
  };
}

exports.default = TabHandler;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function EnterHandler(e, context) {

  var KEY_CODE = 13;

  var handle = function handle() {
    var _context$state = context.state,
        selected = _context$state.selected,
        suggestions = _context$state.suggestions;

    e.preventDefault();
    if (selected !== -1) {
      context.handleSelect(selected)();
      context.makeListInvisible();
    } else if (!!suggestions.length) {
      var query = context.state.query;

      var trimmedQuery = query.trim();
      var index = suggestions.findIndex(function (_ref) {
        var value = _ref.value;

        return value === trimmedQuery;
      });
      if (index !== -1) {
        context.handleSelect(index)();
        context.makeListInvisible();
      }
    }
  };

  return {
    KEY_CODE: KEY_CODE,
    handle: handle
  };
}

exports.default = EnterHandler;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function EscapeHandler(e, context) {
  var KEY_CODE = 27;
  var handle = function handle() {
    e.preventDefault();
    context.makeListInvisible();
  };
  return {
    KEY_CODE: KEY_CODE,
    handle: handle
  };
}

exports.default = EscapeHandler;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function ArrowUpHandler(e, context) {
  var KEY_CODE = 38;
  var handle = function handle() {
    e.preventDefault();
    var _context$state = context.state,
        selected = _context$state.selected,
        suggestions = _context$state.suggestions,
        showSuggestions = _context$state.showSuggestions;

    if (!showSuggestions) {
      return;
    }
    var maxSuggestionIndex = suggestions.length - 1;
    var newSelected = selected > 0 ? selected - 1 : maxSuggestionIndex;
    context.selectSuggestion(newSelected);
  };

  return {
    KEY_CODE: KEY_CODE,
    handle: handle
  };
}

exports.default = ArrowUpHandler;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function ArrowDownHandler(e, context) {

  var KEY_CODE = 40;

  var handle = function handle() {
    e.preventDefault();
    var _context$state = context.state,
        selected = _context$state.selected,
        suggestions = _context$state.suggestions,
        showSuggestions = _context$state.showSuggestions;


    if (!showSuggestions && !!suggestions.length) {
      context.makeListVisible();
      return;
    }

    if (!showSuggestions) {
      return;
    }

    var maxSuggestionIndex = suggestions.length - 1;
    var newSelected = selected < maxSuggestionIndex ? selected + 1 : 0;
    context.selectSuggestion(newSelected);
  };

  return {
    KEY_CODE: KEY_CODE,
    handle: handle
  };
}

exports.default = ArrowDownHandler;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Api2 = __webpack_require__(33);

var _Api3 = _interopRequireDefault(_Api2);

var _helpers = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FetchApi = function (_Api) {
  _inherits(FetchApi, _Api);

  function FetchApi(apiUrl, token, service) {
    var location = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    _classCallCheck(this, FetchApi);

    var _this = _possibleConstructorReturn(this, (FetchApi.__proto__ || Object.getPrototypeOf(FetchApi)).call(this, token));

    _this.detectAddress = function () {
      var endpoint = _Api3.default.apiUrl + '/detectAddressByIp';
      var request = _this.requestFactory(endpoint, 'GET');

      fetch(request).then(function (response) {
        return response.json();
      }).then(function (response) {
        return response.location.data;
      }).then(function (data) {
        return data ? data.kladr_id : null;
      }).then(function (kladr_id) {
        if (kladr_id) {
          _this.locations_boost = [].concat(_toConsumableArray(_this.locations_boost), [{ kladr_id: kladr_id }]);
        }
      }).catch(function () {
        return null;
      }); // just die
    };

    _this.standardizations = function (body) {
      if (!!_this.locations_boost.length) {
        body.locations_boost = _this.locations_boost;
      }
      var formData = new FormData();
      formData.append('query', body.query);

      return fetch(_this.endpoint, { method: 'POST', body: formData }).then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      });
    };

    _this.headers = (0, _helpers.headersFactory)(token);
    _this.requestFactory = (0, _helpers.requestFactoryFactory)(_this.headers);
    // this.endpoint = `${apiUrl}/${service}`;
    _this.endpoint = '' + apiUrl;
    if (location && service.toLowerCase() === _Api3.default.ADDRESS) {
      _this.detectAddress();
    }
    return _this;
  }

  return FetchApi;
}(_Api3.default);

exports.default = FetchApi;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = function Api(token) {
  _classCallCheck(this, Api);

  this.locations_boost = [];
  this.token = token;
};

Api.FIO = 'fio';
Api.ADDRESS = 'address';
Api.ORGANISATION = 'party';
Api.BANK = 'bank';
Api.EMAIL = 'email';
Api.NAME = 'name';
exports.default = Api;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var headers = function headers(token) {
  return new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Token ' + token
  });
};

exports.default = headers;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var requestFactoryFactory = function requestFactoryFactory(headers) {
  return function (endpoint, method) {
    var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var params = {
      endpoint: endpoint,
      method: method,
      headers: headers
    };
    if (body) {
      params.body = JSON.stringify(body);
    }
    return new Request(endpoint, params);
  };
};

exports.default = requestFactoryFactory;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var requestBody = function requestBody(query, _ref) {
  var count = _ref.count,
      _ref$specialRequestOp = _ref.specialRequestOptions,
      specialRequestOptions = _ref$specialRequestOp === undefined ? {} : _ref$specialRequestOp;

  return _extends({
    query: query,
    count: count
  }, specialRequestOptions);
};

exports.default = requestBody;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shortTypes = __webpack_require__(38);

Object.defineProperty(exports, 'SHORT_TYPES', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_shortTypes).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['аобл', 'респ', 'вл', 'г', 'гск', 'д', 'двлд', 'днп', 'дор', 'дп', 'жт', 'им', 'к', 'кв', 'кв-л', 'км', 'комн', 'кп', 'лпх', 'м', 'мкр', 'наб', 'нп', 'обл', 'оф', 'п', 'пгт', 'пер', 'пл', 'платф', 'рзд', 'рп', 'р-н', 'с', 'сл', 'снт', 'ст', 'стр', 'тер', 'туп', 'ул', 'х', 'ш'];

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGYyNzQ0ODBiOThlYzJhYTdiNzUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5sZXNzPzcwYWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMubGVzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3VnZ2VzdGlvbnNMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N1Z2dlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3VnZ2VzdGlvblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1oaWdobGlnaHQtd29yZHMvZGlzdC9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N1Z2dlc3Rpb25TdWJ0ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1F1ZXJ5SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXJzL2hhbmRsZUtleVByZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9UYWJIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9FbnRlckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXJzL0VzY2FwZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXJzL0Fycm93VXBIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9BcnJvd0Rvd25IYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvRmV0Y2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9oZWxwZXJzL2hlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9oZWxwZXJzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9oZWxwZXJzL3JlcXVlc3RCb2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9zaG9ydFR5cGVzLmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJEYWRhdGFTdGFuZGFyZGl6YXRpb25zIiwicHJvcHMiLCJhcGlVcmwiLCJ0b2tlbiIsInNlcnZpY2UiLCJnZW9sb2NhdGlvbiIsImFwaSIsImhhbmRsZUtleVByZXNzIiwiYmluZCIsInN0YXRlIiwiX3N0YXJ0VmFsaWRhdGlvbiIsIl9pc1ZhbGlkIiwiX3ZhbHVlIiwidmFsdWUiLCJxdWVyeSIsInN0YW5kYXJkaXphdGlvbnMiLCJzZWxlY3RlZCIsImxvYWRpbmciLCJzdWNjZXNzIiwiZXJyb3IiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRWYWx1ZSIsInNldFN0YXRlIiwibmV4dFByb3BzIiwidmFsaWRhdGVJbnB1dCIsImdldFZhbHVlIiwidmFsaWRhdGVzIiwiXyIsImV2ZXJ5IiwiQm9vbGVhbiIsInZhbGlkYXRlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0Iiwib25DaGFuZ2UiLCJvbkJsdXIiLCJlcnJvckNsYXNzIiwiZXJyb3JNZXNzYWdlIiwiaW5wdXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsInBsYWNlaG9sZGVyIiwibWFrZUxpc3RWaXNpYmxlIiwiaGFuZGxlQmx1ciIsImhhbmRsZUZvY3VzIiwiaGludCIsImhhbmRsZVNlbGVjdCIsInN1Z2dlc3Rpb25zRm9ybWF0dGVyIiwic2VhcmNoV29yZHMiLCJoaWdobGlnaHRpbmciLCJzdWJ0ZXh0Rm9ybWF0dGVyIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImNvdW50IiwibnVtYmVyIiwibWluQ2hhcnMiLCJib29sIiwic3BlY2lhbFJlcXVlc3RPcHRpb25zIiwib2JqZWN0IiwiZnVuYyIsImFueSIsIm9uU2VsZWN0Iiwib25FcnJvciIsInNlbGVjdGVkU3VnZ2VzdGlvbkZvcm1hdHRlciIsImRlZmF1bHRQcm9wcyIsImZldGNoRGF0YSIsInJlcXVlc3RCb2R5IiwidGhlbiIsImNhdGNoIiwiaGFuZGxlRXJyb3IiLCJlIiwic3BsaXQiLCJBRERSRVNTIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJ3b3JkIiwidGFyZ2V0IiwibGVuZ3RoIiwiY2hhbmdlVmFsdWUiLCJtYWtlTGlzdEludmlzaWJsZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VkVmFsdWUiLCJzZWxlY3RTdWdnZXN0aW9uIiwiaW5kZXgiLCJzZWxlY3RlZFN1Z2dlc3Rpb24iLCJmb3JtYXR0ZXIiLCJzdWdnZXN0aW9uIiwibmFtZSIsImN1c3RvbUZvcm1hdHRlciIsInJlc3VsdCIsImRhdGEiLCJpbm4iLCJTdWdnZXN0aW9uc0xpc3QiLCJ2aXNpYmxlIiwibWFwIiwic3RhbmRhcmRpemF0aW9uIiwiYXJyYXkiLCJTdWdnZXN0aW9uIiwiaG92ZXIiLCJoYW5kbGVIb3ZlciIsInNldEhvdmVyIiwic3VidGV4dCIsInNlbGVjdGVkQ2xhc3MiLCJTdWdnZXN0aW9uVmFsdWUiLCJTdWdnZXN0aW9uU3VidGV4dCIsImNoaWxkcmVuIiwiUXVlcnlJbnB1dCIsImNsYXNzTmFtZSIsIm9uTW91c2VEb3duIiwib25LZXlQcmVzcyIsIm9uRm9jdXMiLCJzaGlmdEtleSIsImN0cmxLZXkiLCJhbHRLZXkiLCJoYW5kbGVycyIsImhhbmRsZXIiLCJLRVlfQ09ERSIsIndoaWNoIiwiaGFuZGxlIiwiVGFiSGFuZGxlciIsImNvbnRleHQiLCJlbnRlckhhbmRsZXIiLCJFbnRlckhhbmRsZXIiLCJzdWdnZXN0aW9ucyIsInByZXZlbnREZWZhdWx0IiwidHJpbW1lZFF1ZXJ5IiwidHJpbSIsImZpbmRJbmRleCIsIkVzY2FwZUhhbmRsZXIiLCJBcnJvd1VwSGFuZGxlciIsIm1heFN1Z2dlc3Rpb25JbmRleCIsIm5ld1NlbGVjdGVkIiwiQXJyb3dEb3duSGFuZGxlciIsIkZldGNoQXBpIiwibG9jYXRpb24iLCJkZXRlY3RBZGRyZXNzIiwiZW5kcG9pbnQiLCJyZXF1ZXN0IiwicmVxdWVzdEZhY3RvcnkiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImtsYWRyX2lkIiwibG9jYXRpb25zX2Jvb3N0IiwiYm9keSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJtZXRob2QiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImhlYWRlcnMiLCJ0b0xvd2VyQ2FzZSIsIkFwaSIsIkZJTyIsIk9SR0FOSVNBVElPTiIsIkJBTksiLCJFTUFJTCIsIk5BTUUiLCJIZWFkZXJzIiwicmVxdWVzdEZhY3RvcnlGYWN0b3J5IiwicGFyYW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsIlJlcXVlc3QiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsa0M7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7O0FDdkx0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7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Q0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM1V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFD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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLDhCQUE4QjtBQUM5QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsS0FBSztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiwyQkFBMkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGdDQUFnQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkI7O0FBRTdCLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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YWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNGYyNzQ0ODBiOThlYzJhYTdiNzUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7IGRlZmF1bHQgYXMgaGFuZGxlS2V5UHJlc3MgfSBmcm9tICcuL2hhbmRsZUtleVByZXNzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJIYW5kbGVyIH0gZnJvbSAnLi9UYWJIYW5kbGVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbnRlckhhbmRsZXIgfSBmcm9tICcuL0VudGVySGFuZGxlcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXNjYXBlSGFuZGxlciB9IGZyb20gJy4vRXNjYXBlSGFuZGxlcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXJyb3dVcEhhbmRsZXIgfSBmcm9tICcuL0Fycm93VXBIYW5kbGVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBBcnJvd0Rvd25IYW5kbGVyIH0gZnJvbSAnLi9BcnJvd0Rvd25IYW5kbGVyJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hhbmRsZXJzL2luZGV4LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7IGRlZmF1bHQgYXMgaGVhZGVyc0ZhY3RvcnkgfSBmcm9tICcuL2hlYWRlcnMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlcXVlc3RGYWN0b3J5RmFjdG9yeSB9IGZyb20gXCIuL3JlcXVlc3RcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBidWlsZFJlcXVlc3RCb2R5IH0gZnJvbSAnLi9yZXF1ZXN0Qm9keSc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwaS9oZWxwZXJzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMubGVzcyc7XHJcblxyXG5pbXBvcnQgU3VnZ2VzdGlvbnNMaXN0IGZyb20gJy4vY29tcG9uZW50cy9TdWdnZXN0aW9uc0xpc3QnO1xyXG5pbXBvcnQgUXVlcnlJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvUXVlcnlJbnB1dCc7XHJcblxyXG5pbXBvcnQgeyBoYW5kbGVLZXlQcmVzcyB9IGZyb20gJy4vaGFuZGxlcnMnO1xyXG5cclxuaW1wb3J0IEFwaSBmcm9tICcuL2FwaS9GZXRjaEFwaSc7XHJcbmltcG9ydCB7IGJ1aWxkUmVxdWVzdEJvZHkgfSBmcm9tIFwiLi9hcGkvaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBTSE9SVF9UWVBFUyB9IGZyb20gXCIuL2NvbnN0YW50cy9pbmRleFwiO1xyXG5cclxuY2xhc3MgRGFkYXRhU3RhbmRhcmRpemF0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICB0b2tlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIC8vZGVmZXJSZXF1ZXN0Qnk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCwgLy8gZG9lc24ndCB3b3JrIHdpdGggZmV0Y2ggQXBpXHJcbiAgICBoaW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBtaW5DaGFyczogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgZ2VvbG9jYXRpb246IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICBxdWVyeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgc2VydmljZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaGlnaGxpZ2h0aW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgc3BlY2lhbFJlcXVlc3RPcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG5cdFx0dmFsaWRhdGU6IFByb3BUeXBlcy5mdW5jLFxyXG5cdFx0ZXJyb3JNZXNzYWdlOiBQcm9wVHlwZXMuYW55LFxyXG5cclxuICAgIC8vaGFuZGxlcnM6XHJcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uRXJyb3I6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIHN1Z2dlc3Rpb25zRm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIHNlbGVjdGVkU3VnZ2VzdGlvbkZvcm1hdHRlcjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuXHRcdG9uQ2hhbmdlOiAoKSA9PiB7fSxcclxuXHRcdG9uQmx1cjogKCkgPT4ge30sXHJcbiAgICB0b2tlbjogJycsXHJcbiAgICBjb3VudDogMTAsXHJcbiAgICAvL2RlZmVyUmVxdWVzdEJ5OiAzMDAsXHJcbiAgICBtaW5DaGFyczogMyxcclxuICAgIGdlb2xvY2F0aW9uOiB0cnVlLFxyXG4gICAgaGludDogJ9CS0YvQsdC10YDQuNGC0LUg0LLQsNGA0LjQsNC90YIg0L3QuNC20LUg0LjQu9C4INC/0YDQvtC00L7Qu9C20LjRgtC1INCy0LLQvtC0JyxcclxuICAgIHF1ZXJ5OiAnJyxcclxuICAgIHNlcnZpY2U6ICdhZGRyZXNzJyxcclxuICAgIGhpZ2hsaWdodGluZzogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgY29uc3Qge2FwaVVybCwgdG9rZW4sIHNlcnZpY2UsIGdlb2xvY2F0aW9ufSA9IHByb3BzO1xyXG4gICAgdGhpcy5hcGkgPSBuZXcgQXBpKGFwaVVybCwgdG9rZW4sIHNlcnZpY2UsIGdlb2xvY2F0aW9uKTtcclxuICAgIHRoaXMuaGFuZGxlS2V5UHJlc3MgPSBoYW5kbGVLZXlQcmVzcy5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdF9zdGFydFZhbGlkYXRpb246IGZhbHNlLFxyXG5cdFx0XHRfaXNWYWxpZDogZmFsc2UsXHJcblx0XHRcdF92YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcclxuXHRcdFx0cXVlcnk6ICcnLFxyXG5cdFx0XHRzdGFuZGFyZGl6YXRpb25zOiBbXSxcclxuXHRcdFx0c2VsZWN0ZWQ6IC0xLFxyXG5cdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0c3VjY2VzczogZmFsc2UsXHJcblx0XHRcdGVycm9yOiBmYWxzZSxcclxuXHRcdFx0c2hvd1N1Z2dlc3Rpb25zOiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRpZih0aGlzLnByb3BzLnZhbHVlKSB7XHJcblx0XHRcdHRoaXMuc2V0VmFsdWUodGhpcy5wcm9wcy52YWx1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcXVlcnk6IHRoaXMucHJvcHMucXVlcnkgfSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHF1ZXJ5OiBuZXh0UHJvcHMucXVlcnksXHJcbiAgICAgIHN0YW5kYXJkaXphdGlvbnM6IFtdLFxyXG4gICAgICBzaG93U3VnZ2VzdGlvbnM6IGZhbHNlLFxyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmV0Y2hEYXRhID0gKHF1ZXJ5KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IGJ1aWxkUmVxdWVzdEJvZHkocXVlcnksIHRoaXMucHJvcHMpO1xyXG5cclxuICAgIHRoaXMuYXBpLnN0YW5kYXJkaXphdGlvbnMocmVxdWVzdEJvZHkpXHJcbiAgICAgIC50aGVuKHN0YW5kYXJkaXphdGlvbnMgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgc3RhbmRhcmRpemF0aW9ucyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgIHNob3dTdWdnZXN0aW9uczogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4gdGhpcy5oYW5kbGVFcnJvcihlKSk7XHJcbiAgfTtcclxuXHJcbiAgc2VhcmNoV29yZHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3Qgc2VhcmNoV29yZHMgPSBxdWVyeS5zcGxpdCgvW14t0JAt0K/QsC3Rj9CB0ZFcXGRcXHddKy8pO1xyXG4gICAgY29uc3QgeyBzZXJ2aWNlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKHNlcnZpY2UgPT09IEFwaS5BRERSRVNTKSB7XHJcbiAgICAgIHJldHVybiBzZWFyY2hXb3Jkcy5maWx0ZXIod29yZCA9PiAhU0hPUlRfVFlQRVMuaW5jbHVkZXMod29yZCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlYXJjaFdvcmRzO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBxdWVyeSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHF1ZXJ5LFxyXG4gICAgICBzZWxlY3RlZDogLTFcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgbWluQ2hhcnMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAocXVlcnkubGVuZ3RoID49IG1pbkNoYXJzKSB7XHJcbiAgICAgIHRoaXMuZmV0Y2hEYXRhKHF1ZXJ5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHN0YW5kYXJkaXphdGlvbnM6IFtdLFxyXG4gICAgICAgIHNob3dTdWdnZXN0aW9uczogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgb25DaGFuZ2UocXVlcnkpO1xyXG4gICAgfVxyXG5cclxuXHRcdHRoaXMuY2hhbmdlVmFsdWUoZSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQmx1ciA9IChlKSA9PiB7XHJcbiAgICB0aGlzLm1ha2VMaXN0SW52aXNpYmxlKCk7XHJcbiAgICBjb25zdCB7IG9uQmx1ciB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmIChvbkJsdXIpIHtcclxuICAgICAgb25CbHVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuXHJcblx0XHR0aGlzLmNoYW5nZWRWYWx1ZShlKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVFcnJvciA9IChlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBvbkVycm9yIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKG9uRXJyb3IpIHtcclxuICAgICAgb25FcnJvcihlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzZWxlY3RTdWdnZXN0aW9uID0gKGluZGV4KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKCh7c3RhbmRhcmRpemF0aW9uc30pID0+IHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRTdWdnZXN0aW9uID0gc3RhbmRhcmRpemF0aW9uc1tpbmRleF07XHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5zZWxlY3RlZFN1Z2dlc3Rpb25Gb3JtYXR0ZXIoc2VsZWN0ZWRTdWdnZXN0aW9uKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZWxlY3RlZDogaW5kZXgsXHJcbiAgICAgICAgcXVlcnlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2VsZWN0ID0gKGluZGV4KSA9PiAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgaWYgKGluZGV4ICE9PSBzZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdFN1Z2dlc3Rpb24oaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VsZWN0ZWRTdWdnZXN0aW9uID0gdGhpcy5zdGF0ZS5zdGFuZGFyZGl6YXRpb25zW2luZGV4XTtcclxuICAgIGNvbnN0IHsgb25TZWxlY3QgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBvblNlbGVjdChzZWxlY3RlZFN1Z2dlc3Rpb24pXHJcbiAgfTtcclxuXHJcbiAgZm9ybWF0dGVyID0gKHN1Z2dlc3Rpb24sIG5hbWUpID0+IHtcclxuICAgIGNvbnN0IHsgW25hbWVdOiBjdXN0b21Gb3JtYXR0ZXIgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAoY3VzdG9tRm9ybWF0dGVyKSB7XHJcbiAgICAgIHJldHVybiBjdXN0b21Gb3JtYXR0ZXIoc3VnZ2VzdGlvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VnZ2VzdGlvbi5yZXN1bHQ7XHJcbiAgfTtcclxuXHJcbiAgc3VnZ2VzdGlvbnNGb3JtYXR0ZXIgPSAoc3VnZ2VzdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0dGVyKHN1Z2dlc3Rpb24sICdzdWdnZXN0aW9uc0Zvcm1hdHRlcicpXHJcbiAgfTtcclxuXHJcbiAgc2VsZWN0ZWRTdWdnZXN0aW9uRm9ybWF0dGVyID0gKHN1Z2dlc3Rpb24pID0+IHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdHRlcihzdWdnZXN0aW9uLCAnc2VsZWN0ZWRTdWdnZXN0aW9uRm9ybWF0dGVyJylcclxuICB9O1xyXG5cclxuICBzdWJ0ZXh0Rm9ybWF0dGVyID0gKHN1Z2dlc3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHsgc2VydmljZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmIChzZXJ2aWNlID09PSAncGFydHknKSB7XHJcbiAgICAgIHJldHVybiBg0JjQndCdICR7c3VnZ2VzdGlvbi5kYXRhLmlubn1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuXHJcbiAgbWFrZUxpc3RWaXNpYmxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBzaG93U3VnZ2VzdGlvbnMsIHN0YW5kYXJkaXphdGlvbnMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBpZiAoc2hvd1N1Z2dlc3Rpb25zKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1N1Z2dlc3Rpb25zOiAhIXN0YW5kYXJkaXphdGlvbnMubGVuZ3RofSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHF1ZXJ5LCBzdWNjZXNzLCBzdGFuZGFyZGl6YXRpb25zLCBzZWxlY3RlZCwgZXJyb3IgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCB7IG1pbkNoYXJzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGlmICghIXN0YW5kYXJkaXphdGlvbnMubGVuZ3RoICYmIHNlbGVjdGVkID09PSAtMSkge1xyXG4gICAgICB0aGlzLm1ha2VMaXN0VmlzaWJsZSgpO1xyXG4gICAgfSBlbHNlIGlmIChxdWVyeS5sZW5ndGggPj0gbWluQ2hhcnMgJiYgIXN1Y2Nlc3MgJiYgIWVycm9yKSB7XHJcbiAgICAgIHRoaXMuZmV0Y2hEYXRhKHF1ZXJ5KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBtYWtlTGlzdEludmlzaWJsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgc2hvd1N1Z2dlc3Rpb25zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgaWYgKCFzaG93U3VnZ2VzdGlvbnMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1N1Z2dlc3Rpb25zOiBmYWxzZX0pO1xyXG4gIH07XHJcblxyXG5cdHNldFZhbHVlKHZhbHVlKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0X3ZhbHVlOiB2YWx1ZSxcclxuXHRcdH0sICgpID0+IHtcclxuXHRcdFx0dGhpcy52YWxpZGF0ZUlucHV0KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldFZhbHVlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuX3ZhbHVlO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGVJbnB1dCgpIHtcclxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG5cdFx0Y29uc3QgdmFsaWRhdGVzID0gW107XHJcblxyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdF9pc1ZhbGlkOiBfLmV2ZXJ5KHZhbGlkYXRlcywgQm9vbGVhbiksXHJcblx0XHR9LCAoKSA9PiB7XHJcblx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGUoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlVmFsdWUoZXZlbnQpIHtcclxuXHRcdHRoaXMuc2V0VmFsdWUoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcclxuXHR9XHJcblx0Y2hhbmdlZFZhbHVlKGV2ZW50KSB7XHJcblx0XHRpZiAoIXRoaXMuc3RhdGUuX3N0YXJ0VmFsaWRhdGlvbikge1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRfc3RhcnRWYWxpZGF0aW9uOiB0cnVlLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdHRoaXMucHJvcHMub25CbHVyKCk7XHJcblx0fVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7bG9hZGluZywgcXVlcnksIHNob3dTdWdnZXN0aW9ucywgc3RhbmRhcmRpemF0aW9ucywgc2VsZWN0ZWR9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdGNvbnN0IGVycm9yQ2xhc3MgPSB0aGlzLnN0YXRlLl9zdGFydFZhbGlkYXRpb24gPyAodGhpcy5zdGF0ZS5faXNWYWxpZCA/ICcnIDogJyBlcnJvcicpIDogJyc7XHJcblx0XHRjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLnByb3BzLmVycm9yTWVzc2FnZTtcclxuXHRcdGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLmdldFZhbHVlKCkgPyB0aGlzLmdldFZhbHVlKCkgOiB0aGlzLnByb3BzLnZhbHVlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3VnZ2VzdGlvbnMtd3JhcHBlcicgKyBlcnJvckNsYXNzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Z2dlc3Rpb25zLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPFF1ZXJ5SW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsgdGhpcy5wcm9wcy5wbGFjZWhvbGRlciB9XHJcbiAgICAgICAgICAgIGxvYWRpbmc9eyBsb2FkaW5nIH1cclxuICAgICAgICAgICAgcXVlcnk9eyBxdWVyeSB9XHJcbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsgdGhpcy5tYWtlTGlzdFZpc2libGUgfVxyXG4gICAgICAgICAgICBvbktleVByZXNzPXsgdGhpcy5oYW5kbGVLZXlQcmVzcyB9XHJcbiAgICAgICAgICAgIG9uQmx1cj17IHRoaXMuaGFuZGxlQmx1ciB9XHJcbiAgICAgICAgICAgIG9uRm9jdXM9eyB0aGlzLmhhbmRsZUZvY3VzIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U3VnZ2VzdGlvbnNMaXN0XHJcbiAgICAgICAgICAgIHN0YW5kYXJkaXphdGlvbnM9eyBzdGFuZGFyZGl6YXRpb25zIH1cclxuICAgICAgICAgICAgaGludD17IHRoaXMucHJvcHMuaGludCB9XHJcbiAgICAgICAgICAgIHZpc2libGU9eyBzaG93U3VnZ2VzdGlvbnMgfVxyXG4gICAgICAgICAgICBvblNlbGVjdD17dGhpcy5oYW5kbGVTZWxlY3R9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICAgICAgc3VnZ2VzdGlvbnNGb3JtYXR0ZXI9e3RoaXMuc3VnZ2VzdGlvbnNGb3JtYXR0ZXJ9XHJcbiAgICAgICAgICAgIHNlYXJjaFdvcmRzPXsgdGhpcy5zZWFyY2hXb3JkcyB9XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodGluZyA9IHsgdGhpcy5wcm9wcy5oaWdobGlnaHRpbmcgfVxyXG4gICAgICAgICAgICBzdWJ0ZXh0Rm9ybWF0dGVyID0geyB0aGlzLnN1YnRleHRGb3JtYXR0ZXIgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntlcnJvck1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhZGF0YVN0YW5kYXJkaXphdGlvbnM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICBpbnZhcmlhbnQoXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgd2FybmluZyhcbiAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCVzYCBwcm9wIG9uIGAlc2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nLFxuICAgICAgICAgICAgICBwcm9wRnVsbE5hbWUsXG4gICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIHByb3BWYWx1ZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAocHJvcFZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2FybmluZyhcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAlcyBhdCBpbmRleCAlcy4nLFxuICAgICAgICAgIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSxcbiAgICAgICAgICBpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuICB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ3RoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAlc2AuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pO1xuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICB3YXJuaW5nKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ZhaWxlZCAlcyB0eXBlOiAlcyVzJywgbG9jYXRpb24sIGVycm9yLm1lc3NhZ2UsIHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW1cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMubGVzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmxlc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9zdHlsZXMubGVzc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3VnZ2VzdGlvbnMtbm93cmFwe3doaXRlLXNwYWNlOm5vd3JhcH0uc3VnZ2VzdGlvbnMtaW5wdXR7LW1zLWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MTAwJX0uc3VnZ2VzdGlvbnMtaW5wdXQubG9hZGluZ3tiYWNrZ3JvdW5kOmhzbGEoMCwwJSwxMDAlLC43NSkgdXJsKFxcXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhFQUFRQUtVQUFCd2FISXlPak16S3pPVG01TFN5dEZ4YVhIUjJkSnllbk56YTNQVDI5THkrdklTR2hFUkdSSlNXbE5UUzFPenU3THk2dkdSbVpIeCtmS1NtcE9UaTVQeisvTVRHeERReU5KU1NsTXpPek96cTdMUzJ0SHg2Zk56ZTNQejYvTVRDeEl5S2pFeEtUSnlhbk5UVzFQVHk5R3hxYkt5cXJQLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ0gvQzA1RlZGTkRRVkJGTWk0d0F3RUFBQUFoK1FRSkNRQW5BQ3dBQUFBQUVBQVFBQUFHazhDVGNIZ1NIWWpJVThkQU9vRkFwd2ZEa2ZRWUpxY0ZkQkZLRUNsZVM0bUNhU0F1bTFNaUl3UUZIQldUUnRnSnhDOFhZWUlnZ1NRbEFCd1BSQU9EU0IwalF4WUtFQjlKUWlVRkJRYUxDbzZQRVpJR1F5UmVTQ1JOUXg0WkJJbElEZ1FPSGtJUUVCUVZJNTRrSXhVVUczNVJxeFFFSkJrT0pBUURKeDZHUWg0YmlRSnNHUkNyU0EvTko4ckRHOFdQSTZaSVFRQWgrUVFKQ1FBckFDd0FBQUFBRUFBUUFJVUVBZ1NFZ29URXdzVGs0dVNrb3FSRVJrUmtZbVRVMHRUMDh2U1VscFMwc3JSc2Jtd2NIaHlNaW96TXlzenM2dXlzcXF4Y1hsemMydHo4K3Z4TVRreWNucHk4dXJ4MGRuUWNHaHlFaG9URXhzVGs1dVNrcHFSTVNreHNhbXpVMXRUMDl2U2NtcHkwdHJSMGNuUTBNalNNam96TXpzenM3dXlzcnF6YzN0ejgvdnovLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFHazhDVmNMaUNvSWpJMWFBRVdvVkNxMU5Fa3B3MFJLc0VOR0ZvRGgrVGxTbXdJWEFHSGNFS2RCQVNDQitWNVNRY1ZGU0tRa2NJRW9RMFNTVWtHUWhFSjRWSUF5bERIeVlPYlVrckZ4NGVBUjhPSnBCSms1VkRDRjVFRXBvckV5WUtIMGtqQUF0MEt4WVdBeW9mWGdoeEJCZ01RaWRoQXdvSW1RZ0tBeXNJZ0VNVElxaVlZaFpoU0NmTks4dklyWkVySDZoSlFRQWgrUVFKQ1FBa0FDd0FBQUFBRUFBUUFJVUVBZ1NFaG9URXhzVGs1dVJNVGt5a3BxVFUxdFJzYW16MDl2UzB0clIwZG5TY21wek16c3pzN3V6YzN0dzBNalJjWGx5MHNyVDgvdnk4dnJ4OGZud2NHaHlVa3BUTXlzenM2dXlzcXF6YzJ0eDBjblQ4K3Z5OHVyeDhlbnlrb3FUVTB0VDA4dlRrNHVSa1ptVC8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFHa0VDU2NFaEtkSWhJMHFDQUlHVXlwSkRDa2VSOEJFN29SOEVoTnJxYVJTTVNFWTB1SklSQjJPbUlKSUtRY0pDUlRDQVFJWWVSV0NNWEJBdHlReUZOU0NJaVF3WU1GeUJKUWdFZUhoWUdGd3lPandFS2s0U0dSQTUrZWd3Um9VTVVGUjROYkc0U0JvWWFHeElaRHc5Q1h5UWlFU0dYREFBRmFReEVISDBrbGlRSEZaNUREUjFkeGhnVldJOUNCcVZEUVFBaCtRUUpDUUFtQUN3QUFBQUFFQUFRQUlVY0doeU1qb3pNeXN4VVZsVGs1dVNzcnF4MGNuVDA5dlM4dnJ6YzN0eUVnb1NjbnB4RVJrVFUwdFRzN3V5MHRyUmtabVI4Zm56OC92ekV4c1NNaW95a3BxUTBNalNVbHBUTXpzeGNXbHpzNnV5MHNyUjBkblQ4K3Z6RXdzVGs0dVNFaG9STVNrelUxdFQwOHZTOHVyeXNxcXovLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUdqa0NUY0dpYUNJaElrNFBVTVpFUXBoSGxrK3c4R2s3b0p0QWNPcHFFelFneElVU3doNFNRUlBwSVJBZWhoaVNaY0RqQ0R1WWhTcFlnSlNORUkzRklHbFJDSWhnQ1dFa21GeFFVQ3lJQ0dJMUprQ0FMUTRSSkgycERlaHQ5U0JRV0lJSk9iVytGQ1FvU0R5RU1RbDhtSDJJUUVDSUFCU1lIbHlaV2ZRTVpKaHdXaFVSTFRjUktGaGlPUXdaNFNVRUFJZmtFQ1FrQUtRQXNBQUFBQUJBQUVBQ0ZCQUlFaElLRXhNTEU1T0xrUkVaRXBLS2taR1prMU5MVTlQTDB0TEswZEhaMFhGNWNuSnFjek1yTTdPcnNiRzVzM05yYy9Qcjh2THE4TkRJMGpJNk1URTVNcks2c0hCb2NoSWFFeE1iRTVPYmtURXBNcEtha2JHcHMxTmJVOVBiMHRMYTBmSDU4WkdKa3pNN003TzdzZEhKMDNON2MvUDc4dkw2OC8vLy9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQnBEQWxIQ1k4bmlJeUJSSkVrazFScWxQd1pHTWdBNU9xSURUSEpLYW1nUmlkSEF3anBHQlVDSVpuRHdmSVNsek9sQW93c2dJZEVSS1FnbHhRd2lDUkE1VVFoNGpEVmhKS1FVTURCWWVUNDFKa0pLRGhVTURKa1I2Q1gxRURCVU1DR3R0SnlXZUtRTVVKeWdMSW5KTkJRQUhKUW9RRXlBcEVhSXBDQmNQS1FZZEtSZ2JtMElaRjFUR1NnU1dqaUVCamtFQUlma0VDUWtBSmdBc0FBQUFBQkFBRUFDRkJBSUVoSUtFeE1MRTVPTGtwS0trVEU1TTFOTFU5UEwwbEpLVVpHWmt0TEswek1yTTdPcnMzTnJjL1ByOG5KcWNkSFowTkRJMGpJNk1yS3FzWEY1Y0hCb2NoSWFFeE1iRTVPYmtwS2FrMU5iVTlQYjBsSmFVYkdwc3ZMcTh6TTdNN083czNON2MvUDc4bko2Y2ZIcDhaR0prLy8vL0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCcFJBazNCbzBtaUlTQlBJNHpBdFBpYUhCNVNVR3B6UUQ1TUlhb1lVaDQ4QnBNQkV6U2FQQnlQU2JJUUhqYWhCeUFnZEg4VVJlWGtJM2tNSGdFUUhWRUlhSHd0WFNTWUtFeE1lR2srTFNRb1prRU1HRFVrWWFFSU1IUUFRU1JNSkdRZENGUlVaRGdFaFFoZ2pJZ3NRb3lZWGJ4TVZHaFlXQXdVQ0podXZReHNSb3hBa0pnZ2xnME1MRVZUSlNoU2JqRUlTQ0l4QkFDSDVCQWtKQUNrQUxBQUFBQUFRQUJBQWhSd2FISXlPak16S3pGeGFYS3l1ck9UbTVIUjJkSnllbkx5K3ZQVDI5TnplM0RRMk5JU0NoSlNXbE5UUzFHeHFiTFMydE96dTdLeXFyTVRHeFB6Ky9FUkdSSXlLakRReU5KU1NsTXpPekdSbVpMU3l0T3pxN0h4NmZLU2lwTVRDeFB6Ni9PVGk1SVNHaEp5YW5OVFcxSFJ5ZEx5NnZQVHk5RXhLVFAvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWFUd0pSd21DS1JpTWhVeEFSS0NUSXBrQ21TQkVFY1RtaUdTWXcwQzV0VHhuSGFoS0xVbE1rVW9wQVN3aE9KRW9LWWhLQU01SWgwWEp0REozQklKeWRESlFNREQwbENId2dtRTRnREdvd3BqZ2dUUXlRS1NSRUZYUjBBREVrUURCdURGeGNTRkFGbktSeXJEaFlCUWdKd0d3c0tHQTBoR2dJcENhNUNDUlVXS1NMR0hnYUFSQTRWaHNncEp3YWNsU2tqQjR4QkFDSDVCQWtKQUNnQUxBQUFBQUFRQUJBQWhRUUNCSVNDaE1UR3hLU2lwT1RtNUVSR1JMU3l0R3hxYkpTU2xOVFcxUFQyOUl5S2pNek96S3lxck96dTdGeGVYTHk2dkhSMmREUXlORXhPVEp5YW5PVGk1UHorL0h4K2ZCd2FISVNHaE16S3pLU21wT3pxN0V4S1RMUzJ0TnphM1B6Ni9JeU9qTlRTMUt5dXJQVHk5THkrdkh4NmZKeWVuUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWFUUUpSd2lFb2tpRWlVQXdKQ2FSZ29FTVNSQkhsRVRpaURTUlFvVUJVRGlTRWlHU3BSS2dxRDJWZ1NYeFFwWWFsNElFTE9BUkJKaXE1TlF5SWZTU1FrUXdFSEIzMUpLQ0lNR2drWGlveCtrRWRDSDJoSURtcENEaGtTQ0VrQ0ZGNUNIUjBlRmljRW54QVdId01iUWlKZkpSTVZBd01FRjFnZ3JrTUtEeFFvQ0Njb0JpR0JSQWtQaHhURkNndWJqU2dOSTQxQkFDSDVCQWtKQUNvQUxBQUFBQUFRQUJBQWhRUUNCSVNDaE1UQ3hPVGk1S1NpcEV4T1ROVFMxUFR5OUxTeXRHUm1aSlNXbEhSeWRDd3VMTXpLek96cTdLeXFyTnphM1B6Ni9MeTZ2SXlPakZ4ZVhKeWVuSHg2ZkJ3YUhJU0doTVRHeE9UbTVLU21wTlRXMVBUMjlMUzJ0R3h1Ykp5YW5IUjJkRFF5Tk16T3pPenU3S3l1ck56ZTNQeisvTHkrdkdSaVpQLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWFSUUpWd3FPSndpRWhWNXVKUU5VYXFpSVNVUEZ3K1R1aElFaUUyT2lvQ3dEQXlIQkNES0ZYRkVKVk9DNVB3d0RrTlBCSWh5WElKSkEwZUJsMURISEpJQndkREV4WVdHRWxDWkEwY2l5R09qd1pQUjBJbUdsV0pRd2NLQlJWSkhBaUNRaFFwS0NjUFRTb2tEWFo0UWh4ZEdRa2FDQWdrSUJCcVJCMExHeW9QRHlvb0c0TkVKaUdKeGlvZEc2K1BLclJKUVFBaCtRUUpDUUFuQUN3QUFBQUFFQUFRQUlVY0doeU1qb3pNeXN6azV1UlVWbFNzcnF4MGNuVGMydHowOXZTOHZyeUVnb1NjbnB4RVJrVFUwdFRzN3V5MHRyUmtabVI4ZW56azR1VDgvdnpFeHNTTWlveWtwcVEwTWpTVWxwVE16c3pzNnV4Y1dseTBzclIwZG5UYzN0ejgrdnpFd3NTRWhvUk1Ta3pVMXRUMDh2Uzh1cnlzcXF6Ly8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUdrTUNUY0hneWRJaklrK0RpT0JFMnAwK3BpVVJjSWs1b3B2UWhOaEFuRTJBRWdaQTRneWlWSVhwTUZCNGhZalNSbEVwQ1IrZ1NTRFk0R1YxREJ4SkpDQ1JEQ3hVVkdFbENEUmtDSTRxTWppY05BaGtqUXhJYVNTUlVRaVFXRUFWSkl4d05naDBHQWhOVG9uUVNEM2duSG1BWkNnTWdJQTRjaFJPaFVSVVBKeVVKbDF4SkVoVmd4eWNJc0pZbkZBS09RUUFoK1FRSkNRQXBBQ3dBQUFBQUVBQVFBSVVFQWdTRWdvVEV4c1RrNXVSRVJrU2tvcVJrWm1UVTF0U1VscFQwOXZTMHNyUmNYbHgwZG5TTWlvek16c3pzN3V6YzN0dzBOalJNVGt5c3FxeDBjblNjbnB6OC92eTh1cndjR2h5RWhvVE15c3pzNnV4TVNreWtwcVJzYW16YzJ0eWNtcHo4K3Z4a1ltUjhmbnlNam96VTB0VDA4dlRrNHVTOHZyei8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBR2o4Q1VjSmdLQklqSVZJbGdTaGs4cVExR2tFd1FHazZvQVpNZ0hrSXBSZVJEWVpRQW5aVGxJVnlJVUJiU1NmaGhXRTZYaTlDRTRGU1NKUW9PWUVNUUEwa21YVUlUSUNCcFNVb09HZ2VNanBCS0dnNEhRd05zU0NhZVFna0tBWHBJZ1NXRURTUU9GaHFlSmdkM2VVSW5ZQjhnRHlVbER3cUhJYUVwSVJWVUdob3BEaGVFUkFNZFlKbkNGOEdBbTBsQkFDSDVCQWtKQUNnQUxBQUFBQUFRQUJBQWhRUUNCSVNDaE1UQ3hPVGk1S1NpcEV4T1ROVFMxUFR5OUxTeXRHUm1aSlNTbEhSeWRCd2VITXpLek96cTdLeXFyTnphM1B6Ni9JeU9qTHk2dkp5YW5IeDZmQndhSElTR2hNVEd4T1RtNUtTbXBGeGVYTlRXMVBUMjlHeHViSFIyZERReU5Nek96T3p1N0t5dXJOemUzUHorL0x5K3ZKeWVuUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWFXUUpSd2lKSW9pRWdVWjNOQWZTb29FU2lVN0d3b1R1Z0gxQ0dTSXFoSllSQzRjQ3dqMUtFaFhId2FKVXBHU0FxVUNCYUc4RUJJUEpJTEFCNE9SQU9FU0J3Y1F4TVBEd2hKUWlHU0hBZ2pHbytRQmlFTmlrSWlUVWdIb0VJZEFoUVlTWlFHWUNnRUdoQWxIRjFxSENVREV4TkNEbDBEQ0FjaEJnY0ljeEVpUkNVVEJpZ05WQ0VUckVRaUUxMmJLQkVUeHBCQ2laQkJBRHM9XFxcIikgNTAlIDUwJSBuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbi14OjEwMCV9LnN1Z2dlc3Rpb25zLWlucHV0OjotbXMtY2xlYXJ7ZGlzcGxheTpub25lfS5zdWdnZXN0aW9ucy13cmFwcGVye3dpZHRoOjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjA7cGFkZGluZzowO3ZlcnRpY2FsLWFsaWduOnRvcDttaW4taGVpZ2h0OjFweDstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJX0uc3VnZ2VzdGlvbnMtc3VnZ2VzdGlvbnN7YmFja2dyb3VuZDojZmZmO2JvcmRlcjoxcHggc29saWQgIzk5OTstbXMtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtjdXJzb3I6ZGVmYXVsdDt6LWluZGV4Ojk5OTk7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCV9LnN1Z2dlc3Rpb25zLXN1Z2dlc3Rpb25zIHN0cm9uZ3tmb250LXdlaWdodDo0MDA7Y29sb3I6IzM5Zn0uc3VnZ2VzdGlvbnMtc3VnZ2VzdGlvbnMuc3VnZ2VzdGlvbnMtbW9iaWxle2JvcmRlci1zdHlsZTpub25lfS5zdWdnZXN0aW9ucy1zdWdnZXN0aW9ucy5zdWdnZXN0aW9ucy1tb2JpbGUgLnN1Z2dlc3Rpb25zLXN1Z2dlc3Rpb257Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZH0uc3VnZ2VzdGlvbnMtc3VnZ2VzdGlvbntwYWRkaW5nOjRweDtvdmVyZmxvdzpoaWRkZW59LnN1Z2dlc3Rpb25zLXN1Z2dlc3Rpb246aG92ZXJ7YmFja2dyb3VuZDojZjdmN2Y3fS5zdWdnZXN0aW9ucy1zZWxlY3RlZCwuc3VnZ2VzdGlvbnMtc2VsZWN0ZWQ6aG92ZXJ7YmFja2dyb3VuZDojZjBmMGYwfS5zdWdnZXN0aW9ucy1oaW50e3BhZGRpbmc6NHB4O3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47Y29sb3I6Izc3Nztmb250LXNpemU6ODUlfS5zdWdnZXN0aW9ucy1jb25zdHJhaW50c3tsaXN0LXN0eWxlOm5vbmUhaW1wb3J0YW50O21hcmdpbjowIWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDt3aGl0ZS1zcGFjZTpub3dyYXAhaW1wb3J0YW50fS5zdWdnZXN0aW9ucy1jb25zdHJhaW50czplbXB0eXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS5zdWdnZXN0aW9ucy1jb25zdHJhaW50cyBsaXtiYWNrZ3JvdW5kOiNmOGY4Zjg7Ym9yZGVyOjFweCBzb2xpZCAjY2NjOy13ZWJraXQtYm9yZGVyLXJhZGl1czozcHg7LW1vei1ib3JkZXItcmFkaXVzOjNweDtib3JkZXItcmFkaXVzOjNweDtjdXJzb3I6ZGVmYXVsdDtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW46MCA0cHggMCAwO3BhZGRpbmc6MCAuNWVtfS5zdWdnZXN0aW9ucy1jb25zdHJhaW50cyBsaSAuc3VnZ2VzdGlvbnMtcmVtb3Zle2hlaWdodDoxZW07d2lkdGg6MWVtO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjowIDAgMCAuMjVlbTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBuTVRBd0p5Qm9aV2xuYUhROUp6RXdNQ2NnZUcxc2JuTTlKMmgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5KejQ4Wno0OGNHRjBhQ0JrUFNkdE1qQXNNakJ0TVRBc01Hd3lNQ3d5TUd3eU1Dd3RNakJzTVRBc01UQnNMVEl3TERJd2JESXdMREl3YkMweE1Dd3hNR3d0TWpBc0xUSXdiQzB5TUN3eU1Hd3RNVEFzTFRFd2JESXdMQzB5TUd3dE1qQXNMVEl3YkRFd0xDMHhNQ2NnWm1sc2JEMG5Jems1T1NjdlBqd3ZaejQ4TDNOMlp6ND1cXFwiKSA1MCUgNTAlIG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtjdXJzb3I6cG9pbnRlcjtvcGFjaXR5Oi44fS5zdWdnZXN0aW9ucy1jb25zdHJhaW50cyBsaSAuc3VnZ2VzdGlvbnMtcmVtb3ZlOmhvdmVye29wYWNpdHk6MX0uc3VnZ2VzdGlvbnMtY29uc3RyYWludHMgbGkgc3Bhbnt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnN1Z2dlc3Rpb25zLXN1YnRleHR7Y29sb3I6Izc3Nzt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9LnN1Z2dlc3Rpb25zLXN1YnRleHRfaW5saW5le2Rpc3BsYXk6aW5saW5lLWJsb2NrO21pbi13aWR0aDo2ZW07dmVydGljYWwtYWxpZ246Ym90dG9tO21hcmdpbjowIC41ZW0gMCAwfS5zdWdnZXN0aW9ucy1zdWJ0ZXh0LWRlbGltaXRlcntkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoycHh9LnN1Z2dlc3Rpb25zLXN1YnRleHRfbGFiZWx7bWFyZ2luOjAgMCAwIC4yNWVtOy13ZWJraXQtYm9yZGVyLXJhZGl1czozcHg7LW1vei1ib3JkZXItcmFkaXVzOjNweDtib3JkZXItcmFkaXVzOjNweDtwYWRkaW5nOjAgM3B4O2JhY2tncm91bmQ6I2Y1ZjVmNTtmb250LXNpemU6ODUlfS5zdWdnZXN0aW9ucy12YWx1ZVtkYXRhLXN1Z2dlc3Rpb24tc3RhdHVzPUxJUVVJREFURURde3Bvc2l0aW9uOnJlbGF0aXZlfS5zdWdnZXN0aW9ucy12YWx1ZVtkYXRhLXN1Z2dlc3Rpb24tc3RhdHVzPUxJUVVJREFURURdOmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtyaWdodDowO3RvcDo1MCU7Ym9yZGVyLXRvcDoxcHggc29saWQgcmdiYSgwLDAsMCwuNCk7Y29udGVudDpcXFwiXFxcIn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyPz9yZWYtLTEtMiEuL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9zdHlsZXMvc3R5bGVzLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAoc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgU3VnZ2VzdGlvbiBmcm9tICcuL1N1Z2dlc3Rpb24nO1xyXG5cclxuY29uc3QgU3VnZ2VzdGlvbnNMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzdGFuZGFyZGl6YXRpb25zLCB2aXNpYmxlLCBzZWxlY3RlZCB9ID0gcHJvcHM7XHJcblxyXG4gIGlmICghIXN0YW5kYXJkaXphdGlvbnMubGVuZ3RoICYmIHZpc2libGUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VnZ2VzdGlvbnMtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VnZ2VzdGlvbnMtc3VnZ2VzdGlvbnNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VnZ2VzdGlvbnMtaGludFwiPntwcm9wcy5oaW50fTwvZGl2PlxyXG4gICAgICAgICAge3N0YW5kYXJkaXphdGlvbnMubWFwKChzdGFuZGFyZGl6YXRpb24sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICA8U3VnZ2VzdGlvblxyXG4gICAgICAgICAgICAgIGtleT17IGluZGV4IH0gIC8qIEB0b2RvIG91ciBwbGFuZXQgbmVlZHMgc29tZXRoaW5nIGJldHRlciB0aGFuIHRoaXMgKi9cclxuICAgICAgICAgICAgICBpbmRleD17IGluZGV4IH1cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17IGluZGV4ID09PSBzZWxlY3RlZCB9XHJcbiAgICAgICAgICAgICAgb25TZWxlY3Q9eyBwcm9wcy5vblNlbGVjdChpbmRleCkgfVxyXG4gICAgICAgICAgICAgIHNlYXJjaFdvcmRzID0geyBwcm9wcy5oaWdobGlnaHRpbmcgPyBwcm9wcy5zZWFyY2hXb3JkcygpIDogW10gfVxyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodGluZyA9IHsgcHJvcHMuaGlnaGxpZ2h0aW5nIH1cclxuICAgICAgICAgICAgICB2YWx1ZSA9IHsgcHJvcHMuc3VnZ2VzdGlvbnNGb3JtYXR0ZXIoc3RhbmRhcmRpemF0aW9uKSB9XHJcbiAgICAgICAgICAgICAgc3VidGV4dCA9IHsgcHJvcHMuc3VidGV4dEZvcm1hdHRlcihzdGFuZGFyZGl6YXRpb24pIH1cclxuICAgICAgICAgICAgLz4pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5TdWdnZXN0aW9uc0xpc3QucHJvcFR5cGVzID0ge1xyXG4gIHN0YW5kYXJkaXphdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIGhpbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIHN1Z2dlc3Rpb25zRm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHN1YnRleHRGb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgc2VhcmNoV29yZHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgaGlnaGxpZ2h0aW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG59O1xyXG5TdWdnZXN0aW9uc0xpc3QuZGVmYXVsdFByb3BzID0ge1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VnZ2VzdGlvbnNMaXN0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TdWdnZXN0aW9uc0xpc3QuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgU3VnZ2VzdGlvblZhbHVlIGZyb20gJy4vU3VnZ2VzdGlvblZhbHVlJztcclxuaW1wb3J0IFN1Z2dlc3Rpb25TdWJ0ZXh0IGZyb20gJy4vU3VnZ2VzdGlvblN1YnRleHQnO1xyXG5cclxuY2xhc3MgU3VnZ2VzdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgaG92ZXI6IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUhvdmVyID0gKCkgPT4gdGhpcy5zZXRIb3Zlcih0cnVlKTtcclxuICBoYW5kbGVCbHVyID0gKCkgPT4gdGhpcy5zZXRIb3ZlcihmYWxzZSk7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgc2VsZWN0ZWQsIGhpZ2hsaWdodGluZywgc2VhcmNoV29yZHMsIHN1YnRleHQsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRDbGFzcyA9IHNlbGVjdGVkIHx8IHRoaXMuc3RhdGUuaG92ZXIgPyAnIHN1Z2dlc3Rpb25zLXNlbGVjdGVkJyA6ICcnO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17IGBzdWdnZXN0aW9ucy1zdWdnZXN0aW9uJHtzZWxlY3RlZENsYXNzfWAgfVxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17IHRoaXMuaGFuZGxlSG92ZXIgfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17IHRoaXMuaGFuZGxlQmx1ciB9XHJcbiAgICAgICAgb25Nb3VzZURvd249eyB0aGlzLnByb3BzLm9uU2VsZWN0IH1cclxuICAgICAgPlxyXG4gICAgICAgIDxTdWdnZXN0aW9uVmFsdWVcclxuICAgICAgICAgIHsuLi57IGhpZ2hsaWdodGluZywgc2VhcmNoV29yZHMsIHZhbHVlIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8U3VnZ2VzdGlvblN1YnRleHQ+eyBzdWJ0ZXh0IH08L1N1Z2dlc3Rpb25TdWJ0ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9O1xyXG5cclxuICBzZXRIb3ZlciA9IChob3ZlcikgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcblN1Z2dlc3Rpb24ucHJvcFR5cGVzID0ge1xyXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc2VhcmNoV29yZHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIGhpZ2hsaWdodGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufTtcclxuU3VnZ2VzdGlvbi5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1Z2dlc3Rpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1N1Z2dlc3Rpb24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGlnaGxpZ2h0ZXIgZnJvbSAncmVhY3QtaGlnaGxpZ2h0LXdvcmRzJztcclxuXHJcbmNvbnN0IFN1Z2dlc3Rpb25WYWx1ZSA9ICh7aGlnaGxpZ2h0aW5nLCBzZWFyY2hXb3JkcywgdmFsdWV9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Z2dlc3Rpb25zLXZhbHVlXCI+XHJcbiAgICAgIHtcclxuICAgICAgICBoaWdobGlnaHRpbmcgPyA8SGlnaGxpZ2h0ZXJcclxuICAgICAgICAgIC8vaGlnaGxpZ2h0Q2xhc3NOYW1lPScnXHJcbiAgICAgICAgICBzZWFyY2hXb3Jkcz17IHNlYXJjaFdvcmRzIH1cclxuICAgICAgICAgIGF1dG9Fc2NhcGU9eyB0cnVlIH1cclxuICAgICAgICAgIHRleHRUb0hpZ2hsaWdodD17IHZhbHVlIH1cclxuICAgICAgICAvPiA6IHZhbHVlXHJcbiAgICAgIH1cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG5cclxuU3VnZ2VzdGlvblZhbHVlLnByb3BUeXBlcyA9IHtcclxuICBoaWdobGlnaHRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgc2VhcmNoV29yZHM6IFByb3BUeXBlcy5hcnJheSxcclxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5TdWdnZXN0aW9uVmFsdWUuZGVmYXVsdFByb3BzID0ge1xyXG4gIGhpZ2hsaWdodGluZzogdHJ1ZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1Z2dlc3Rpb25WYWx1ZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU3VnZ2VzdGlvblZhbHVlLmpzIiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblx0XG5cdHZhciBfSGlnaGxpZ2h0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0dmFyIF9IaWdobGlnaHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9IaWdobGlnaHRlcik7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gX0hpZ2hsaWdodGVyMlsnZGVmYXVsdCddO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzWydkZWZhdWx0J10gPSBIaWdobGlnaHRlcjtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblx0XG5cdHZhciBfaGlnaGxpZ2h0V29yZHNDb3JlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0XG5cdHZhciBfcHJvcFR5cGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblx0XG5cdHZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cdFxuXHR2YXIgX3JlYWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cdFxuXHR2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblx0XG5cdEhpZ2hsaWdodGVyLnByb3BUeXBlcyA9IHtcblx0ICBhY3RpdmVDbGFzc05hbWU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nLFxuXHQgIGFjdGl2ZUluZGV4OiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlcixcblx0ICBhY3RpdmVTdHlsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3QsXG5cdCAgYXV0b0VzY2FwZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5ib29sLFxuXHQgIGNsYXNzTmFtZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmcsXG5cdCAgaGlnaGxpZ2h0Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLnN0cmluZyxcblx0ICBoaWdobGlnaHRTdHlsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3QsXG5cdCAgaGlnaGxpZ2h0VGFnOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9uZU9mVHlwZShbX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5ub2RlLCBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmMsIF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nXSksXG5cdCAgc2FuaXRpemU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuYyxcblx0ICBzZWFyY2hXb3JkczogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5hcnJheU9mKF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nKS5pc1JlcXVpcmVkLFxuXHQgIHRleHRUb0hpZ2hsaWdodDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmcuaXNSZXF1aXJlZCxcblx0ICB1bmhpZ2hsaWdodENsYXNzTmFtZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmcsXG5cdCAgdW5oaWdobGlnaHRTdHlsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3Rcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBIaWdobGlnaHRzIGFsbCBvY2N1cnJlbmNlcyBvZiBzZWFyY2ggdGVybXMgKHNlYXJjaFRleHQpIHdpdGhpbiBhIHN0cmluZyAodGV4dFRvSGlnaGxpZ2h0KS5cblx0ICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGFuIGFycmF5IG9mIHN0cmluZ3MgYW5kIDxzcGFuPnMgKHdyYXBwaW5nIGhpZ2hsaWdodGVkIHdvcmRzKS5cblx0ICovXG5cdFxuXHRmdW5jdGlvbiBIaWdobGlnaHRlcihfcmVmKSB7XG5cdCAgdmFyIF9yZWYkYWN0aXZlQ2xhc3NOYW1lID0gX3JlZi5hY3RpdmVDbGFzc05hbWU7XG5cdCAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYkYWN0aXZlQ2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYkYWN0aXZlQ2xhc3NOYW1lO1xuXHQgIHZhciBfcmVmJGFjdGl2ZUluZGV4ID0gX3JlZi5hY3RpdmVJbmRleDtcblx0ICB2YXIgYWN0aXZlSW5kZXggPSBfcmVmJGFjdGl2ZUluZGV4ID09PSB1bmRlZmluZWQgPyAtMSA6IF9yZWYkYWN0aXZlSW5kZXg7XG5cdCAgdmFyIGFjdGl2ZVN0eWxlID0gX3JlZi5hY3RpdmVTdHlsZTtcblx0ICB2YXIgYXV0b0VzY2FwZSA9IF9yZWYuYXV0b0VzY2FwZTtcblx0ICB2YXIgX3JlZiRjYXNlU2Vuc2l0aXZlID0gX3JlZi5jYXNlU2Vuc2l0aXZlO1xuXHQgIHZhciBjYXNlU2Vuc2l0aXZlID0gX3JlZiRjYXNlU2Vuc2l0aXZlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkY2FzZVNlbnNpdGl2ZTtcblx0ICB2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWU7XG5cdCAgdmFyIF9yZWYkaGlnaGxpZ2h0Q2xhc3NOYW1lID0gX3JlZi5oaWdobGlnaHRDbGFzc05hbWU7XG5cdCAgdmFyIGhpZ2hsaWdodENsYXNzTmFtZSA9IF9yZWYkaGlnaGxpZ2h0Q2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYkaGlnaGxpZ2h0Q2xhc3NOYW1lO1xuXHQgIHZhciBfcmVmJGhpZ2hsaWdodFN0eWxlID0gX3JlZi5oaWdobGlnaHRTdHlsZTtcblx0ICB2YXIgaGlnaGxpZ2h0U3R5bGUgPSBfcmVmJGhpZ2hsaWdodFN0eWxlID09PSB1bmRlZmluZWQgPyB7fSA6IF9yZWYkaGlnaGxpZ2h0U3R5bGU7XG5cdCAgdmFyIF9yZWYkaGlnaGxpZ2h0VGFnID0gX3JlZi5oaWdobGlnaHRUYWc7XG5cdCAgdmFyIGhpZ2hsaWdodFRhZyA9IF9yZWYkaGlnaGxpZ2h0VGFnID09PSB1bmRlZmluZWQgPyAnbWFyaycgOiBfcmVmJGhpZ2hsaWdodFRhZztcblx0ICB2YXIgc2FuaXRpemUgPSBfcmVmLnNhbml0aXplO1xuXHQgIHZhciBzZWFyY2hXb3JkcyA9IF9yZWYuc2VhcmNoV29yZHM7XG5cdCAgdmFyIHRleHRUb0hpZ2hsaWdodCA9IF9yZWYudGV4dFRvSGlnaGxpZ2h0O1xuXHQgIHZhciBfcmVmJHVuaGlnaGxpZ2h0Q2xhc3NOYW1lID0gX3JlZi51bmhpZ2hsaWdodENsYXNzTmFtZTtcblx0ICB2YXIgdW5oaWdobGlnaHRDbGFzc05hbWUgPSBfcmVmJHVuaGlnaGxpZ2h0Q2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYkdW5oaWdobGlnaHRDbGFzc05hbWU7XG5cdCAgdmFyIHVuaGlnaGxpZ2h0U3R5bGUgPSBfcmVmLnVuaGlnaGxpZ2h0U3R5bGU7XG5cdFxuXHQgIHZhciBjaHVua3MgPSAoMCwgX2hpZ2hsaWdodFdvcmRzQ29yZS5maW5kQWxsKSh7XG5cdCAgICBhdXRvRXNjYXBlOiBhdXRvRXNjYXBlLFxuXHQgICAgY2FzZVNlbnNpdGl2ZTogY2FzZVNlbnNpdGl2ZSxcblx0ICAgIHNhbml0aXplOiBzYW5pdGl6ZSxcblx0ICAgIHNlYXJjaFdvcmRzOiBzZWFyY2hXb3Jkcyxcblx0ICAgIHRleHRUb0hpZ2hsaWdodDogdGV4dFRvSGlnaGxpZ2h0XG5cdCAgfSk7XG5cdCAgdmFyIEhpZ2hsaWdodFRhZyA9IGhpZ2hsaWdodFRhZztcblx0ICB2YXIgaGlnaGxpZ2h0Q291bnQgPSAtMTtcblx0ICB2YXIgaGlnaGxpZ2h0Q2xhc3NOYW1lcyA9ICcnO1xuXHQgIHZhciBoaWdobGlnaHRTdHlsZXMgPSB1bmRlZmluZWQ7XG5cdFxuXHQgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcblx0ICAgICdzcGFuJyxcblx0ICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0ICAgIGNodW5rcy5tYXAoZnVuY3Rpb24gKGNodW5rLCBpbmRleCkge1xuXHQgICAgICB2YXIgdGV4dCA9IHRleHRUb0hpZ2hsaWdodC5zdWJzdHIoY2h1bmsuc3RhcnQsIGNodW5rLmVuZCAtIGNodW5rLnN0YXJ0KTtcblx0XG5cdCAgICAgIGlmIChjaHVuay5oaWdobGlnaHQpIHtcblx0ICAgICAgICBoaWdobGlnaHRDb3VudCsrO1xuXHRcblx0ICAgICAgICB2YXIgaXNBY3RpdmUgPSBoaWdobGlnaHRDb3VudCA9PT0gK2FjdGl2ZUluZGV4O1xuXHRcblx0ICAgICAgICBoaWdobGlnaHRDbGFzc05hbWVzID0gaGlnaGxpZ2h0Q2xhc3NOYW1lICsgJyAnICsgKGlzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogJycpO1xuXHQgICAgICAgIGhpZ2hsaWdodFN0eWxlcyA9IGlzQWN0aXZlID09PSB0cnVlICYmIGFjdGl2ZVN0eWxlICE9IG51bGwgPyBPYmplY3QuYXNzaWduKHt9LCBoaWdobGlnaHRTdHlsZSwgYWN0aXZlU3R5bGUpIDogaGlnaGxpZ2h0U3R5bGU7XG5cdFxuXHQgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcblx0ICAgICAgICAgIEhpZ2hsaWdodFRhZyxcblx0ICAgICAgICAgIHtcblx0ICAgICAgICAgICAgY2xhc3NOYW1lOiBoaWdobGlnaHRDbGFzc05hbWVzLFxuXHQgICAgICAgICAgICBrZXk6IGluZGV4LFxuXHQgICAgICAgICAgICBzdHlsZTogaGlnaGxpZ2h0U3R5bGVzXG5cdCAgICAgICAgICB9LFxuXHQgICAgICAgICAgdGV4dFxuXHQgICAgICAgICk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuXHQgICAgICAgICAgJ3NwYW4nLFxuXHQgICAgICAgICAge1xuXHQgICAgICAgICAgICBjbGFzc05hbWU6IHVuaGlnaGxpZ2h0Q2xhc3NOYW1lLFxuXHQgICAgICAgICAgICBrZXk6IGluZGV4LFxuXHQgICAgICAgICAgICBzdHlsZTogdW5oaWdobGlnaHRTdHlsZVxuXHQgICAgICAgICAgfSxcblx0ICAgICAgICAgIHRleHRcblx0ICAgICAgICApO1xuXHQgICAgICB9XG5cdCAgICB9KVxuXHQgICk7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9XG5cdC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcblx0LyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG5cdC8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblx0LyoqKioqKi9cblx0LyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuXHQvKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0LyoqKioqKi9cblx0LyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHQvKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG5cdC8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXHQvKioqKioqL1xuXHQvKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0LyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcblx0LyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG5cdC8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcblx0LyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuXHQvKioqKioqLyBcdFx0fTtcblx0LyoqKioqKi9cblx0LyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHQvKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdC8qKioqKiovXG5cdC8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdC8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblx0LyoqKioqKi9cblx0LyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdC8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG5cdC8qKioqKiovIFx0fVxuXHQvKioqKioqL1xuXHQvKioqKioqL1xuXHQvKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5cdC8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblx0LyoqKioqKi9cblx0LyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuXHQvKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cdC8qKioqKiovXG5cdC8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cblx0LyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXHQvKioqKioqL1xuXHQvKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuXHQvKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXHQvKioqKioqLyB9KVxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXHQvKioqKioqLyAoW1xuXHQvKiAwICovXG5cdC8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblx0XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0XG5cdC8qKiovIH0pLFxuXHQvKiAxICovXG5cdC8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblx0XG5cdFx0J3VzZSBzdHJpY3QnO1xuXHRcdFxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHRcdCAgdmFsdWU6IHRydWVcblx0XHR9KTtcblx0XHRcblx0XHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XHRcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NvbWJpbmVDaHVua3MnLCB7XG5cdFx0ICBlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdFx0ICAgIHJldHVybiBfdXRpbHMuY29tYmluZUNodW5rcztcblx0XHQgIH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2ZpbGxJbkNodW5rcycsIHtcblx0XHQgIGVudW1lcmFibGU6IHRydWUsXG5cdFx0ICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0XHQgICAgcmV0dXJuIF91dGlscy5maWxsSW5DaHVua3M7XG5cdFx0ICB9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdmaW5kQWxsJywge1xuXHRcdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0XHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHRcdCAgICByZXR1cm4gX3V0aWxzLmZpbmRBbGw7XG5cdFx0ICB9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdmaW5kQ2h1bmtzJywge1xuXHRcdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0XHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHRcdCAgICByZXR1cm4gX3V0aWxzLmZpbmRDaHVua3M7XG5cdFx0ICB9XG5cdFx0fSk7XG5cdFxuXHQvKioqLyB9KSxcblx0LyogMiAqL1xuXHQvKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cdFxuXHRcdCd1c2Ugc3RyaWN0Jztcblx0XHRcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0XHQgIHZhbHVlOiB0cnVlXG5cdFx0fSk7XG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyBhbiBhcnJheSBvZiBjaHVuayBvYmplY3RzIHJlcHJlc2VudGluZyBib3RoIGhpZ2xpZ2h0YWJsZSBhbmQgbm9uIGhpZ2hsaWdodGFibGUgcGllY2VzIG9mIHRleHQgdGhhdCBtYXRjaCBlYWNoIHNlYXJjaCB3b3JkLlxuXHRcdCAqIEByZXR1cm4gQXJyYXkgb2YgXCJjaHVua3NcIiAod2hlcmUgYSBDaHVuayBpcyB7IHN0YXJ0Om51bWJlciwgZW5kOm51bWJlciwgaGlnaGxpZ2h0OmJvb2xlYW4gfSlcblx0XHQgKi9cblx0XHR2YXIgZmluZEFsbCA9IGV4cG9ydHMuZmluZEFsbCA9IGZ1bmN0aW9uIGZpbmRBbGwoX3JlZikge1xuXHRcdCAgdmFyIGF1dG9Fc2NhcGUgPSBfcmVmLmF1dG9Fc2NhcGUsXG5cdFx0ICAgICAgX3JlZiRjYXNlU2Vuc2l0aXZlID0gX3JlZi5jYXNlU2Vuc2l0aXZlLFxuXHRcdCAgICAgIGNhc2VTZW5zaXRpdmUgPSBfcmVmJGNhc2VTZW5zaXRpdmUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRjYXNlU2Vuc2l0aXZlLFxuXHRcdCAgICAgIHNhbml0aXplID0gX3JlZi5zYW5pdGl6ZSxcblx0XHQgICAgICBzZWFyY2hXb3JkcyA9IF9yZWYuc2VhcmNoV29yZHMsXG5cdFx0ICAgICAgdGV4dFRvSGlnaGxpZ2h0ID0gX3JlZi50ZXh0VG9IaWdobGlnaHQ7XG5cdFx0ICByZXR1cm4gZmlsbEluQ2h1bmtzKHtcblx0XHQgICAgY2h1bmtzVG9IaWdobGlnaHQ6IGNvbWJpbmVDaHVua3Moe1xuXHRcdCAgICAgIGNodW5rczogZmluZENodW5rcyh7XG5cdFx0ICAgICAgICBhdXRvRXNjYXBlOiBhdXRvRXNjYXBlLFxuXHRcdCAgICAgICAgY2FzZVNlbnNpdGl2ZTogY2FzZVNlbnNpdGl2ZSxcblx0XHQgICAgICAgIHNhbml0aXplOiBzYW5pdGl6ZSxcblx0XHQgICAgICAgIHNlYXJjaFdvcmRzOiBzZWFyY2hXb3Jkcyxcblx0XHQgICAgICAgIHRleHRUb0hpZ2hsaWdodDogdGV4dFRvSGlnaGxpZ2h0XG5cdFx0ICAgICAgfSlcblx0XHQgICAgfSksXG5cdFx0ICAgIHRvdGFsTGVuZ3RoOiB0ZXh0VG9IaWdobGlnaHQubGVuZ3RoXG5cdFx0ICB9KTtcblx0XHR9O1xuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFRha2VzIGFuIGFycmF5IG9mIHtzdGFydDpudW1iZXIsIGVuZDpudW1iZXJ9IG9iamVjdHMgYW5kIGNvbWJpbmVzIGNodW5rcyB0aGF0IG92ZXJsYXAgaW50byBzaW5nbGUgY2h1bmtzLlxuXHRcdCAqIEByZXR1cm4ge3N0YXJ0Om51bWJlciwgZW5kOm51bWJlcn1bXVxuXHRcdCAqL1xuXHRcdHZhciBjb21iaW5lQ2h1bmtzID0gZXhwb3J0cy5jb21iaW5lQ2h1bmtzID0gZnVuY3Rpb24gY29tYmluZUNodW5rcyhfcmVmMikge1xuXHRcdCAgdmFyIGNodW5rcyA9IF9yZWYyLmNodW5rcztcblx0XHRcblx0XHQgIGNodW5rcyA9IGNodW5rcy5zb3J0KGZ1bmN0aW9uIChmaXJzdCwgc2Vjb25kKSB7XG5cdFx0ICAgIHJldHVybiBmaXJzdC5zdGFydCAtIHNlY29uZC5zdGFydDtcblx0XHQgIH0pLnJlZHVjZShmdW5jdGlvbiAocHJvY2Vzc2VkQ2h1bmtzLCBuZXh0Q2h1bmspIHtcblx0XHQgICAgLy8gRmlyc3QgY2h1bmsganVzdCBnb2VzIHN0cmFpZ2h0IGluIHRoZSBhcnJheS4uLlxuXHRcdCAgICBpZiAocHJvY2Vzc2VkQ2h1bmtzLmxlbmd0aCA9PT0gMCkge1xuXHRcdCAgICAgIHJldHVybiBbbmV4dENodW5rXTtcblx0XHQgICAgfSBlbHNlIHtcblx0XHQgICAgICAvLyAuLi4gc3Vic2VxdWVudCBjaHVua3MgZ2V0IGNoZWNrZWQgdG8gc2VlIGlmIHRoZXkgb3ZlcmxhcC4uLlxuXHRcdCAgICAgIHZhciBwcmV2Q2h1bmsgPSBwcm9jZXNzZWRDaHVua3MucG9wKCk7XG5cdFx0ICAgICAgaWYgKG5leHRDaHVuay5zdGFydCA8PSBwcmV2Q2h1bmsuZW5kKSB7XG5cdFx0ICAgICAgICAvLyBJdCBtYXkgYmUgdGhlIGNhc2UgdGhhdCBwcmV2Q2h1bmsgY29tcGxldGVseSBzdXJyb3VuZHMgbmV4dENodW5rLCBzbyB0YWtlIHRoZVxuXHRcdCAgICAgICAgLy8gbGFyZ2VzdCBvZiB0aGUgZW5kIGluZGVjZXMuXG5cdFx0ICAgICAgICB2YXIgZW5kSW5kZXggPSBNYXRoLm1heChwcmV2Q2h1bmsuZW5kLCBuZXh0Q2h1bmsuZW5kKTtcblx0XHQgICAgICAgIHByb2Nlc3NlZENodW5rcy5wdXNoKHsgc3RhcnQ6IHByZXZDaHVuay5zdGFydCwgZW5kOiBlbmRJbmRleCB9KTtcblx0XHQgICAgICB9IGVsc2Uge1xuXHRcdCAgICAgICAgcHJvY2Vzc2VkQ2h1bmtzLnB1c2gocHJldkNodW5rLCBuZXh0Q2h1bmspO1xuXHRcdCAgICAgIH1cblx0XHQgICAgICByZXR1cm4gcHJvY2Vzc2VkQ2h1bmtzO1xuXHRcdCAgICB9XG5cdFx0ICB9LCBbXSk7XG5cdFx0XG5cdFx0ICByZXR1cm4gY2h1bmtzO1xuXHRcdH07XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogRXhhbWluZSB0ZXh0IGZvciBhbnkgbWF0Y2hlcy5cblx0XHQgKiBJZiB3ZSBmaW5kIG1hdGNoZXMsIGFkZCB0aGVtIHRvIHRoZSByZXR1cm5lZCBhcnJheSBhcyBhIFwiY2h1bmtcIiBvYmplY3QgKHtzdGFydDpudW1iZXIsIGVuZDpudW1iZXJ9KS5cblx0XHQgKiBAcmV0dXJuIHtzdGFydDpudW1iZXIsIGVuZDpudW1iZXJ9W11cblx0XHQgKi9cblx0XHR2YXIgZmluZENodW5rcyA9IGV4cG9ydHMuZmluZENodW5rcyA9IGZ1bmN0aW9uIGZpbmRDaHVua3MoX3JlZjMpIHtcblx0XHQgIHZhciBhdXRvRXNjYXBlID0gX3JlZjMuYXV0b0VzY2FwZSxcblx0XHQgICAgICBjYXNlU2Vuc2l0aXZlID0gX3JlZjMuY2FzZVNlbnNpdGl2ZSxcblx0XHQgICAgICBfcmVmMyRzYW5pdGl6ZSA9IF9yZWYzLnNhbml0aXplLFxuXHRcdCAgICAgIHNhbml0aXplID0gX3JlZjMkc2FuaXRpemUgPT09IHVuZGVmaW5lZCA/IGlkZW50aXR5IDogX3JlZjMkc2FuaXRpemUsXG5cdFx0ICAgICAgc2VhcmNoV29yZHMgPSBfcmVmMy5zZWFyY2hXb3Jkcyxcblx0XHQgICAgICB0ZXh0VG9IaWdobGlnaHQgPSBfcmVmMy50ZXh0VG9IaWdobGlnaHQ7XG5cdFx0XG5cdFx0ICB0ZXh0VG9IaWdobGlnaHQgPSBzYW5pdGl6ZSh0ZXh0VG9IaWdobGlnaHQpO1xuXHRcdFxuXHRcdCAgcmV0dXJuIHNlYXJjaFdvcmRzLmZpbHRlcihmdW5jdGlvbiAoc2VhcmNoV29yZCkge1xuXHRcdCAgICByZXR1cm4gc2VhcmNoV29yZDtcblx0XHQgIH0pIC8vIFJlbW92ZSBlbXB0eSB3b3Jkc1xuXHRcdCAgLnJlZHVjZShmdW5jdGlvbiAoY2h1bmtzLCBzZWFyY2hXb3JkKSB7XG5cdFx0ICAgIHNlYXJjaFdvcmQgPSBzYW5pdGl6ZShzZWFyY2hXb3JkKTtcblx0XHRcblx0XHQgICAgaWYgKGF1dG9Fc2NhcGUpIHtcblx0XHQgICAgICBzZWFyY2hXb3JkID0gZXNjYXBlUmVnRXhwRm4oc2VhcmNoV29yZCk7XG5cdFx0ICAgIH1cblx0XHRcblx0XHQgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChzZWFyY2hXb3JkLCBjYXNlU2Vuc2l0aXZlID8gJ2cnIDogJ2dpJyk7XG5cdFx0XG5cdFx0ICAgIHZhciBtYXRjaCA9IHZvaWQgMDtcblx0XHQgICAgd2hpbGUgKG1hdGNoID0gcmVnZXguZXhlYyh0ZXh0VG9IaWdobGlnaHQpKSB7XG5cdFx0ICAgICAgY2h1bmtzLnB1c2goe1xuXHRcdCAgICAgICAgc3RhcnQ6IG1hdGNoLmluZGV4LFxuXHRcdCAgICAgICAgZW5kOiByZWdleC5sYXN0SW5kZXhcblx0XHQgICAgICB9KTtcblx0XHQgICAgfVxuXHRcdFxuXHRcdCAgICByZXR1cm4gY2h1bmtzO1xuXHRcdCAgfSwgW10pO1xuXHRcdH07XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogR2l2ZW4gYSBzZXQgb2YgY2h1bmtzIHRvIGhpZ2hsaWdodCwgY3JlYXRlIGFuIGFkZGl0aW9uYWwgc2V0IG9mIGNodW5rc1xuXHRcdCAqIHRvIHJlcHJlc2VudCB0aGUgYml0cyBvZiB0ZXh0IGJldHdlZW4gdGhlIGhpZ2hsaWdodGVkIHRleHQuXG5cdFx0ICogQHBhcmFtIGNodW5rc1RvSGlnaGxpZ2h0IHtzdGFydDpudW1iZXIsIGVuZDpudW1iZXJ9W11cblx0XHQgKiBAcGFyYW0gdG90YWxMZW5ndGggbnVtYmVyXG5cdFx0ICogQHJldHVybiB7c3RhcnQ6bnVtYmVyLCBlbmQ6bnVtYmVyLCBoaWdobGlnaHQ6Ym9vbGVhbn1bXVxuXHRcdCAqL1xuXHRcdHZhciBmaWxsSW5DaHVua3MgPSBleHBvcnRzLmZpbGxJbkNodW5rcyA9IGZ1bmN0aW9uIGZpbGxJbkNodW5rcyhfcmVmNCkge1xuXHRcdCAgdmFyIGNodW5rc1RvSGlnaGxpZ2h0ID0gX3JlZjQuY2h1bmtzVG9IaWdobGlnaHQsXG5cdFx0ICAgICAgdG90YWxMZW5ndGggPSBfcmVmNC50b3RhbExlbmd0aDtcblx0XHRcblx0XHQgIHZhciBhbGxDaHVua3MgPSBbXTtcblx0XHQgIHZhciBhcHBlbmQgPSBmdW5jdGlvbiBhcHBlbmQoc3RhcnQsIGVuZCwgaGlnaGxpZ2h0KSB7XG5cdFx0ICAgIGlmIChlbmQgLSBzdGFydCA+IDApIHtcblx0XHQgICAgICBhbGxDaHVua3MucHVzaCh7XG5cdFx0ICAgICAgICBzdGFydDogc3RhcnQsXG5cdFx0ICAgICAgICBlbmQ6IGVuZCxcblx0XHQgICAgICAgIGhpZ2hsaWdodDogaGlnaGxpZ2h0XG5cdFx0ICAgICAgfSk7XG5cdFx0ICAgIH1cblx0XHQgIH07XG5cdFx0XG5cdFx0ICBpZiAoY2h1bmtzVG9IaWdobGlnaHQubGVuZ3RoID09PSAwKSB7XG5cdFx0ICAgIGFwcGVuZCgwLCB0b3RhbExlbmd0aCwgZmFsc2UpO1xuXHRcdCAgfSBlbHNlIHtcblx0XHQgICAgdmFyIGxhc3RJbmRleCA9IDA7XG5cdFx0ICAgIGNodW5rc1RvSGlnaGxpZ2h0LmZvckVhY2goZnVuY3Rpb24gKGNodW5rKSB7XG5cdFx0ICAgICAgYXBwZW5kKGxhc3RJbmRleCwgY2h1bmsuc3RhcnQsIGZhbHNlKTtcblx0XHQgICAgICBhcHBlbmQoY2h1bmsuc3RhcnQsIGNodW5rLmVuZCwgdHJ1ZSk7XG5cdFx0ICAgICAgbGFzdEluZGV4ID0gY2h1bmsuZW5kO1xuXHRcdCAgICB9KTtcblx0XHQgICAgYXBwZW5kKGxhc3RJbmRleCwgdG90YWxMZW5ndGgsIGZhbHNlKTtcblx0XHQgIH1cblx0XHQgIHJldHVybiBhbGxDaHVua3M7XG5cdFx0fTtcblx0XHRcblx0XHRmdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuXHRcdCAgcmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XHRcblx0XHRmdW5jdGlvbiBlc2NhcGVSZWdFeHBGbihzdHIpIHtcblx0XHQgIHJldHVybiBzdHIucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csICdcXFxcJCYnKTtcblx0XHR9XG5cdFxuXHQvKioqLyB9KVxuXHQvKioqKioqLyBdKTtcblx0Ly8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7LyoqXG5cdCAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuXHQgKlxuXHQgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcblx0ICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXHQgKi9cblx0XG5cdGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG5cdCAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG5cdCAgICBTeW1ib2wuZm9yICYmXG5cdCAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG5cdCAgICAweGVhYzc7XG5cdFxuXHQgIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuXHQgICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG5cdCAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuXHQgICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcblx0ICB9O1xuXHRcblx0ICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cblx0ICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG5cdCAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuXHQgIG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG5cdH0gZWxzZSB7XG5cdCAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cblx0ICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG5cdCAgbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKSgpO1xuXHR9XG5cdFxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyg1KSkpXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXHR2YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cdFxuXHQvLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcblx0Ly8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG5cdC8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcblx0Ly8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblx0XG5cdHZhciBjYWNoZWRTZXRUaW1lb3V0O1xuXHR2YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXHRcblx0ZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xuXHR9XG5cdGZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcblx0fVxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgdHJ5IHtcblx0ICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG5cdCAgICAgICAgfVxuXHQgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuXHQgICAgfVxuXHQgICAgdHJ5IHtcblx0ICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcblx0ICAgICAgICB9XG5cdCAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcblx0ICAgIH1cblx0fSAoKSlcblx0ZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcblx0ICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG5cdCAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG5cdCAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcblx0ICAgIH1cblx0ICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG5cdCAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcblx0ICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcblx0ICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuXHQgICAgfVxuXHQgICAgdHJ5IHtcblx0ICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG5cdCAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcblx0ICAgIH0gY2F0Y2goZSl7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG5cdCAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcblx0ICAgICAgICB9IGNhdGNoKGUpe1xuXHQgICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuXHQgICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHRcblx0XG5cdH1cblx0ZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuXHQgICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG5cdCAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG5cdCAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuXHQgICAgfVxuXHQgICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuXHQgICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG5cdCAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuXHQgICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcblx0ICAgIH1cblx0ICAgIHRyeSB7XG5cdCAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuXHQgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcblx0ICAgIH0gY2F0Y2ggKGUpe1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcblx0ICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG5cdCAgICAgICAgfSBjYXRjaCAoZSl7XG5cdCAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuXHQgICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG5cdCAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0XG5cdFxuXHRcblx0fVxuXHR2YXIgcXVldWUgPSBbXTtcblx0dmFyIGRyYWluaW5nID0gZmFsc2U7XG5cdHZhciBjdXJyZW50UXVldWU7XG5cdHZhciBxdWV1ZUluZGV4ID0gLTE7XG5cdFxuXHRmdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG5cdCAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBkcmFpbmluZyA9IGZhbHNlO1xuXHQgICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcblx0ICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG5cdCAgICB9XG5cdCAgICBpZiAocXVldWUubGVuZ3RoKSB7XG5cdCAgICAgICAgZHJhaW5RdWV1ZSgpO1xuXHQgICAgfVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuXHQgICAgaWYgKGRyYWluaW5nKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG5cdCAgICBkcmFpbmluZyA9IHRydWU7XG5cdFxuXHQgICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcblx0ICAgIHdoaWxlKGxlbikge1xuXHQgICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuXHQgICAgICAgIHF1ZXVlID0gW107XG5cdCAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuXHQgICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG5cdCAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuXHQgICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcblx0ICAgIH1cblx0ICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG5cdCAgICBkcmFpbmluZyA9IGZhbHNlO1xuXHQgICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHR9XG5cdFxuXHRwcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuXHQgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuXHQgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcblx0ICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG5cdCAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcblx0ICAgIH1cblx0fTtcblx0XG5cdC8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcblx0ZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG5cdCAgICB0aGlzLmZ1biA9IGZ1bjtcblx0ICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcblx0fVxuXHRJdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcblx0fTtcblx0cHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcblx0cHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcblx0cHJvY2Vzcy5lbnYgPSB7fTtcblx0cHJvY2Vzcy5hcmd2ID0gW107XG5cdHByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xuXHRwcm9jZXNzLnZlcnNpb25zID0ge307XG5cdFxuXHRmdW5jdGlvbiBub29wKCkge31cblx0XG5cdHByb2Nlc3Mub24gPSBub29wO1xuXHRwcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcblx0cHJvY2Vzcy5vbmNlID0gbm9vcDtcblx0cHJvY2Vzcy5vZmYgPSBub29wO1xuXHRwcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcblx0cHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xuXHRwcm9jZXNzLmVtaXQgPSBub29wO1xuXHRwcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5cdHByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cdFxuXHRwcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cdFxuXHRwcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xuXHR9O1xuXHRcblx0cHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcblx0cHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG5cdH07XG5cdHByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHByb2Nlc3MpIHsvKipcblx0ICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG5cdCAqXG5cdCAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuXHQgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cdCAqL1xuXHRcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIGVtcHR5RnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHR2YXIgaW52YXJpYW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblx0dmFyIHdhcm5pbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgYXNzaWduID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cdFxuXHR2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0dmFyIGNoZWNrUHJvcFR5cGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG5cdCAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuXHQgIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcblx0ICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblx0XG5cdCAgLyoqXG5cdCAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuXHQgICAqXG5cdCAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG5cdCAgICpcblx0ICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuXHQgICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuXHQgICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcblx0ICAgKiAgICAgICAuLi5cblx0ICAgKiAgICAgfVxuXHQgICAqXG5cdCAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG5cdCAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuXHQgICAqL1xuXHQgIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuXHQgICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcblx0ICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICByZXR1cm4gaXRlcmF0b3JGbjtcblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIC8qKlxuXHQgICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG5cdCAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcblx0ICAgKlxuXHQgICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcblx0ICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdCAgICogICAgIHByb3BUeXBlczoge1xuXHQgICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cblx0ICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuXHQgICAqXG5cdCAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuXHQgICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcblx0ICAgKlxuXHQgICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuXHQgICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcblx0ICAgKiAgICAgfSxcblx0ICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cblx0ICAgKiAgIH0pO1xuXHQgICAqXG5cdCAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuXHQgICAqXG5cdCAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG5cdCAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG5cdCAgICpcblx0ICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG5cdCAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuXHQgICAqXG5cdCAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdCAgICogICAgcHJvcFR5cGVzOiB7XG5cdCAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG5cdCAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcblx0ICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG5cdCAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcblx0ICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuXHQgICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcblx0ICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcblx0ICAgKiAgICAgICAgICApO1xuXHQgICAqICAgICAgICB9XG5cdCAgICogICAgICB9XG5cdCAgICogICAgfSxcblx0ICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cblx0ICAgKiAgfSk7XG5cdCAgICpcblx0ICAgKiBAaW50ZXJuYWxcblx0ICAgKi9cblx0XG5cdCAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+Jztcblx0XG5cdCAgLy8gSW1wb3J0YW50IVxuXHQgIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cblx0ICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG5cdCAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG5cdCAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuXHQgICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG5cdCAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcblx0ICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuXHQgICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG5cdCAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblx0XG5cdCAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG5cdCAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG5cdCAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcblx0ICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG5cdCAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuXHQgICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG5cdCAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuXHQgICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuXHQgICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG5cdCAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcblx0ICB9O1xuXHRcblx0ICAvKipcblx0ICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG5cdCAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG5cdCAgICovXG5cdCAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXHQgIGZ1bmN0aW9uIGlzKHgsIHkpIHtcblx0ICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cblx0ICAgIGlmICh4ID09PSB5KSB7XG5cdCAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuXHQgICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuXHQgICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuXHQgICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuXHQgICAgfVxuXHQgIH1cblx0ICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblx0XG5cdCAgLyoqXG5cdCAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuXHQgICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG5cdCAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuXHQgICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcblx0ICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG5cdCAgICovXG5cdCAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG5cdCAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHQgICAgdGhpcy5zdGFjayA9ICcnO1xuXHQgIH1cblx0ICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG5cdCAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cdFxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG5cdCAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuXHQgICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcblx0ICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcblx0ICAgIH1cblx0ICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuXHQgICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG5cdCAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblx0XG5cdCAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG5cdCAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcblx0ICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuXHQgICAgICAgICAgaW52YXJpYW50KFxuXHQgICAgICAgICAgICBmYWxzZSxcblx0ICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuXHQgICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcblx0ICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG5cdCAgICAgICAgICApO1xuXHQgICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuXHQgICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuXHQgICAgICAgICAgaWYgKFxuXHQgICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG5cdCAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuXHQgICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcblx0ICAgICAgICAgICkge1xuXHQgICAgICAgICAgICB3YXJuaW5nKFxuXHQgICAgICAgICAgICAgIGZhbHNlLFxuXHQgICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcblx0ICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJXNgIHByb3Agb24gYCVzYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuXHQgICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG5cdCAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG5cdCAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLicsXG5cdCAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuXHQgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcblx0ICAgICAgICAgICAgKTtcblx0ICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcblx0ICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG5cdCAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcblx0ICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBudWxsO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG5cdCAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblx0XG5cdCAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcblx0ICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcblx0ICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcblx0ICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cblx0ICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG5cdCAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblx0XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuXHQgICAgICB9XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG5cdCAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG5cdCAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0ICAgICAgICAgIHJldHVybiBlcnJvcjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuXHQgICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuXHQgICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG5cdCAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcblx0ICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcblx0ICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcblx0ICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuXHQgICAgfVxuXHRcblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG5cdCAgICAgICAgICByZXR1cm4gbnVsbDtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG5cdCAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuXHQgICAgICB9XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG5cdCAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuXHQgICAgICB9XG5cdCAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcblx0ICAgICAgICBpZiAocHJvcFZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0ICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG5cdCAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZXJyb3I7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuXHQgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG5cdCAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuXHQgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG5cdCAgICB9XG5cdFxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcblx0ICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgd2FybmluZyhcblx0ICAgICAgICAgIGZhbHNlLFxuXHQgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcblx0ICAgICAgICAgICdyZWNlaXZlZCAlcyBhdCBpbmRleCAlcy4nLFxuXHQgICAgICAgICAgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpLFxuXHQgICAgICAgICAgaVxuXHQgICAgICAgICk7XG5cdCAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcblx0ICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG5cdCAgICAgICAgICByZXR1cm4gbnVsbDtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcblx0ICAgICAgfVxuXHQgICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuXHQgICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuXHQgICAgICAgIGlmICghY2hlY2tlcikge1xuXHQgICAgICAgICAgY29udGludWU7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcblx0ICAgICAgICBpZiAoZXJyb3IpIHtcblx0ICAgICAgICAgIHJldHVybiBlcnJvcjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcblx0ICAgICAgfVxuXHQgICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuXHQgICAgICAvLyBwcm9wcy5cblx0ICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG5cdCAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG5cdCAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG5cdCAgICAgICAgaWYgKCFjaGVja2VyKSB7XG5cdCAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG5cdCAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcblx0ICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcblx0ICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG5cdCAgICAgICAgICApO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG5cdCAgICAgICAgaWYgKGVycm9yKSB7XG5cdCAgICAgICAgICByZXR1cm4gZXJyb3I7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHRcblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG5cdCAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcblx0ICAgICAgY2FzZSAnbnVtYmVyJzpcblx0ICAgICAgY2FzZSAnc3RyaW5nJzpcblx0ICAgICAgY2FzZSAndW5kZWZpbmVkJzpcblx0ICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgY2FzZSAnYm9vbGVhbic6XG5cdCAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG5cdCAgICAgIGNhc2UgJ29iamVjdCc6XG5cdCAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuXHQgICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcblx0ICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG5cdCAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcblx0ICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuXHQgICAgICAgICAgdmFyIHN0ZXA7XG5cdCAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcblx0ICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuXHQgICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cblx0ICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuXHQgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG5cdCAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcblx0ICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgZGVmYXVsdDpcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG5cdCAgICAvLyBOYXRpdmUgU3ltYm9sLlxuXHQgICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuXHQgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH1cblx0XG5cdCAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuXHQgICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuXHQgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH1cblx0XG5cdCAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG5cdCAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcblx0ICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICB9XG5cdFxuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblx0XG5cdCAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuXHQgIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuXHQgICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcblx0ICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcblx0ICAgICAgcmV0dXJuICdhcnJheSc7XG5cdCAgICB9XG5cdCAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG5cdCAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cblx0ICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG5cdCAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuXHQgICAgICByZXR1cm4gJ29iamVjdCc7XG5cdCAgICB9XG5cdCAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcblx0ICAgICAgcmV0dXJuICdzeW1ib2wnO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHByb3BUeXBlO1xuXHQgIH1cblx0XG5cdCAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuXHQgIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuXHQgIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuXHQgICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuXHQgICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG5cdCAgICB9XG5cdCAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuXHQgICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuXHQgICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuXHQgICAgICAgIHJldHVybiAnZGF0ZSc7XG5cdCAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG5cdCAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXR1cm4gcHJvcFR5cGU7XG5cdCAgfVxuXHRcblx0ICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG5cdCAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcblx0ICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcblx0ICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuXHQgICAgc3dpdGNoICh0eXBlKSB7XG5cdCAgICAgIGNhc2UgJ2FycmF5Jzpcblx0ICAgICAgY2FzZSAnb2JqZWN0Jzpcblx0ICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuXHQgICAgICBjYXNlICdib29sZWFuJzpcblx0ICAgICAgY2FzZSAnZGF0ZSc6XG5cdCAgICAgIGNhc2UgJ3JlZ2V4cCc6XG5cdCAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuXHQgICAgICBkZWZhdWx0OlxuXHQgICAgICAgIHJldHVybiB0eXBlO1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cblx0ICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG5cdCAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcblx0ICAgICAgcmV0dXJuIEFOT05ZTU9VUztcblx0ICAgIH1cblx0ICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcblx0ICB9XG5cdFxuXHQgIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG5cdCAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cdFxuXHQgIHJldHVybiBSZWFjdFByb3BUeXBlcztcblx0fTtcblx0XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKSlcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFxuXHQvKipcblx0ICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG5cdCAqXG5cdCAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuXHQgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cdCAqXG5cdCAqIFxuXHQgKi9cblx0XG5cdGZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuXHQgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gYXJnO1xuXHQgIH07XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuXHQgKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuXHQgKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuXHQgKi9cblx0dmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cdFxuXHRlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5cdGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcblx0ZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcblx0ZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcblx0ZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG5cdCAgcmV0dXJuIHRoaXM7XG5cdH07XG5cdGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcblx0ICByZXR1cm4gYXJnO1xuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24ocHJvY2Vzcykgey8qKlxuXHQgKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cblx0ICpcblx0ICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG5cdCAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblx0ICpcblx0ICovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuXHQgKlxuXHQgKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuXHQgKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcblx0ICogZXhwZWN0aW5nLlxuXHQgKlxuXHQgKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuXHQgKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG5cdCAqL1xuXHRcblx0dmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblx0XG5cdGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG5cdCAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcblx0ICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG5cdCAgICB9XG5cdCAgfTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG5cdCAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblx0XG5cdCAgaWYgKCFjb25kaXRpb24pIHtcblx0ICAgIHZhciBlcnJvcjtcblx0ICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG5cdCAgICAgIHZhciBhcmdJbmRleCA9IDA7XG5cdCAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG5cdCAgICAgIH0pKTtcblx0ICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcblx0ICAgIH1cblx0XG5cdCAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG5cdCAgICB0aHJvdyBlcnJvcjtcblx0ICB9XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyg1KSkpXG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7LyoqXG5cdCAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuXHQgKlxuXHQgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcblx0ICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXHQgKlxuXHQgKi9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciBlbXB0eUZ1bmN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblx0XG5cdC8qKlxuXHQgKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG5cdCAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcblx0ICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcblx0ICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG5cdCAqL1xuXHRcblx0dmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXHRcblx0aWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcblx0ICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuXHQgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdCAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuXHQgICAgfVxuXHRcblx0ICAgIHZhciBhcmdJbmRleCA9IDA7XG5cdCAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG5cdCAgICB9KTtcblx0ICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcblx0ICAgIH1cblx0ICAgIHRyeSB7XG5cdCAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cblx0ICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG5cdCAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG5cdCAgICB9IGNhdGNoICh4KSB7fVxuXHQgIH07XG5cdFxuXHQgIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG5cdCAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcblx0ICAgIH1cblx0XG5cdCAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG5cdCAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cblx0ICAgIH1cblx0XG5cdCAgICBpZiAoIWNvbmRpdGlvbikge1xuXHQgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG5cdCAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcblx0ICAgIH1cblx0ICB9O1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKSlcblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qXG5cdG9iamVjdC1hc3NpZ25cblx0KGMpIFNpbmRyZSBTb3JodXNcblx0QGxpY2Vuc2UgTUlUXG5cdCovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cdHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXHR2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXHR2YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cdFxuXHRmdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0XHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHRcdH1cblx0XG5cdFx0cmV0dXJuIE9iamVjdCh2YWwpO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXHRcblx0XHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdFx0dmFyIHRlc3QyID0ge307XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcblx0XHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0XHR9KTtcblx0XHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdFx0dmFyIGZyb207XG5cdFx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0XHR2YXIgc3ltYm9scztcblx0XG5cdFx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblx0XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcblx0XHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XG5cdFx0cmV0dXJuIHRvO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG5cdCAqXG5cdCAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuXHQgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cdCAqL1xuXHRcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7LyoqXG5cdCAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuXHQgKlxuXHQgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcblx0ICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXHQgKi9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG5cdCAgdmFyIGludmFyaWFudCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cdCAgdmFyIHdhcm5pbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHQgIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXHQgIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cblx0ICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG5cdCAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRmdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG5cdCAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcblx0ICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcblx0ICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG5cdCAgICAgICAgdmFyIGVycm9yO1xuXHQgICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG5cdCAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuXHQgICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG5cdCAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG5cdCAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ3RoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAlc2AuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pO1xuXHQgICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcblx0ICAgICAgICB9IGNhdGNoIChleCkge1xuXHQgICAgICAgICAgZXJyb3IgPSBleDtcblx0ICAgICAgICB9XG5cdCAgICAgICAgd2FybmluZyghZXJyb3IgfHwgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciwgJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yKTtcblx0ICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuXHQgICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG5cdCAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuXHQgICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblx0XG5cdCAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblx0XG5cdCAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH1cblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcblx0XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKSlcblxuLyoqKi8gfSksXG4vKiAxMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qKlxuXHQgKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cblx0ICpcblx0ICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG5cdCAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblx0ICovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgZW1wdHlGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cdHZhciBpbnZhcmlhbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXHR2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdCAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuXHQgICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcblx0ICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBpbnZhcmlhbnQoXG5cdCAgICAgIGZhbHNlLFxuXHQgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG5cdCAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcblx0ICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG5cdCAgICApO1xuXHQgIH07XG5cdCAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcblx0ICBmdW5jdGlvbiBnZXRTaGltKCkge1xuXHQgICAgcmV0dXJuIHNoaW07XG5cdCAgfTtcblx0ICAvLyBJbXBvcnRhbnQhXG5cdCAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG5cdCAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuXHQgICAgYXJyYXk6IHNoaW0sXG5cdCAgICBib29sOiBzaGltLFxuXHQgICAgZnVuYzogc2hpbSxcblx0ICAgIG51bWJlcjogc2hpbSxcblx0ICAgIG9iamVjdDogc2hpbSxcblx0ICAgIHN0cmluZzogc2hpbSxcblx0ICAgIHN5bWJvbDogc2hpbSxcblx0XG5cdCAgICBhbnk6IHNoaW0sXG5cdCAgICBhcnJheU9mOiBnZXRTaGltLFxuXHQgICAgZWxlbWVudDogc2hpbSxcblx0ICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG5cdCAgICBub2RlOiBzaGltLFxuXHQgICAgb2JqZWN0T2Y6IGdldFNoaW0sXG5cdCAgICBvbmVPZjogZ2V0U2hpbSxcblx0ICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcblx0ICAgIHNoYXBlOiBnZXRTaGltLFxuXHQgICAgZXhhY3Q6IGdldFNoaW1cblx0ICB9O1xuXHRcblx0ICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG5cdCAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cdFxuXHQgIHJldHVybiBSZWFjdFByb3BUeXBlcztcblx0fTtcblxuXG4vKioqLyB9KSxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtaGlnaGxpZ2h0LXdvcmRzL2Rpc3QvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IFN1Z2dlc3Rpb25TdWJ0ZXh0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICByZXR1cm4gY2hpbGRyZW4gPyA8ZGl2IGNsYXNzTmFtZT1cInN1Z2dlc3Rpb25zLXN1YnRleHRcIj57Y2hpbGRyZW59PC9kaXY+IDogbnVsbDtcclxufTtcclxuXHJcblxyXG5TdWdnZXN0aW9uU3VidGV4dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuU3VnZ2VzdGlvblN1YnRleHQuZGVmYXVsdFByb3BzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0aW9uU3VidGV4dDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU3VnZ2VzdGlvblN1YnRleHQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgUXVlcnlJbnB1dCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge2xvYWRpbmd9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSBgc3VnZ2VzdGlvbnMtaW5wdXQke2xvYWRpbmcgPyAnIGxvYWRpbmcnIDogJycgfWA7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cclxuICAgICAgICBwbGFjZWhvbGRlciA9IHsgcHJvcHMucGxhY2Vob2xkZXIgfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsgcHJvcHMub25DaGFuZ2UgfVxyXG4gICAgICAgIHZhbHVlPXsgcHJvcHMucXVlcnkgfVxyXG4gICAgICAgIG9uTW91c2VEb3duPXsgcHJvcHMub25Nb3VzZURvd24gfVxyXG4gICAgICAgIG9uS2V5UHJlc3M9eyBwcm9wcy5vbktleVByZXNzIH1cclxuICAgICAgICBvbktleURvd249eyBwcm9wcy5vbktleVByZXNzIH1cclxuICAgICAgICBvbkJsdXI9eyBwcm9wcy5vbkJsdXIgfVxyXG4gICAgICAgIG9uRm9jdXM9eyBwcm9wcy5vbkZvY3VzIH1cclxuICAgICAgLz5cclxuICAgICk7XHJcbn07XHJcblxyXG5RdWVyeUlucHV0LnByb3BUeXBlcyA9IHtcclxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgb25Nb3VzZURvd246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgb25LZXlQcmVzczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIHF1ZXJ5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcblF1ZXJ5SW5wdXQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIHBsYWNlaG9sZGVyOiAnJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXJ5SW5wdXQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1F1ZXJ5SW5wdXQuanMiLCJpbXBvcnQge1xyXG4gIEVudGVySGFuZGxlcixcclxuICBUYWJIYW5kbGVyLFxyXG4gIEVzY2FwZUhhbmRsZXIsXHJcbiAgQXJyb3dVcEhhbmRsZXIsXHJcbiAgQXJyb3dEb3duSGFuZGxlcixcclxufSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZSkge1xyXG5cclxuICBpZiAoZS5zaGlmdEtleSB8fCBlLmN0cmxLZXkgfHwgZS5hbHRLZXkpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZXJzID0gW1xyXG4gICAgbmV3IEFycm93VXBIYW5kbGVyKGUsIHRoaXMpLFxyXG4gICAgbmV3IEFycm93RG93bkhhbmRsZXIoZSwgdGhpcyksXHJcbiAgICBuZXcgRW50ZXJIYW5kbGVyKGUsIHRoaXMpLFxyXG4gICAgbmV3IFRhYkhhbmRsZXIoZSwgdGhpcyksXHJcbiAgICBuZXcgRXNjYXBlSGFuZGxlcihlLCB0aGlzKSxcclxuICBdO1xyXG5cclxuICBoYW5kbGVycy5tYXAoaGFuZGxlciA9PiB7XHJcbiAgICBpZiAoaGFuZGxlci5LRVlfQ09ERSA9PT0gZS53aGljaCkge1xyXG4gICAgICBoYW5kbGVyLmhhbmRsZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlS2V5UHJlc3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hhbmRsZXJzL2hhbmRsZUtleVByZXNzLmpzIiwiaW1wb3J0IHsgRW50ZXJIYW5kbGVyIH0gZnJvbSBcIi4vaW5kZXhcIlxyXG5cclxuZnVuY3Rpb24gVGFiSGFuZGxlcihlLCBjb250ZXh0KSB7XHJcblxyXG4gIGNvbnN0IEtFWV9DT0RFID0gOTtcclxuICBjb25zdCBoYW5kbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7c2hvd1N1Z2dlc3Rpb25zfSA9IGNvbnRleHQuc3RhdGU7XHJcbiAgICBpZiAoc2hvd1N1Z2dlc3Rpb25zKSB7XHJcbiAgICAgIGNvbnN0IGVudGVySGFuZGxlciA9IG5ldyBFbnRlckhhbmRsZXIoZSwgY29udGV4dCk7XHJcbiAgICAgIGVudGVySGFuZGxlci5oYW5kbGUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgS0VZX0NPREU6IEtFWV9DT0RFLFxyXG4gICAgaGFuZGxlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJIYW5kbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oYW5kbGVycy9UYWJIYW5kbGVyLmpzIiwiZnVuY3Rpb24gRW50ZXJIYW5kbGVyKGUsIGNvbnRleHQpIHtcclxuXHJcbiAgY29uc3QgS0VZX0NPREUgPSAxMztcclxuXHJcbiAgY29uc3QgaGFuZGxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBzZWxlY3RlZCwgc3VnZ2VzdGlvbnMgfSA9IGNvbnRleHQuc3RhdGU7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoc2VsZWN0ZWQgIT09IC0xKSB7XHJcbiAgICAgIGNvbnRleHQuaGFuZGxlU2VsZWN0KHNlbGVjdGVkKSgpO1xyXG4gICAgICBjb250ZXh0Lm1ha2VMaXN0SW52aXNpYmxlKCk7XHJcbiAgICB9IGVsc2UgaWYgKCEhc3VnZ2VzdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHsgcXVlcnkgfSA9IGNvbnRleHQuc3RhdGU7XHJcbiAgICAgIGNvbnN0IHRyaW1tZWRRdWVyeSA9IHF1ZXJ5LnRyaW0oKTtcclxuICAgICAgY29uc3QgaW5kZXggPSBzdWdnZXN0aW9ucy5maW5kSW5kZXgoKHt2YWx1ZX0pID0+IHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHRyaW1tZWRRdWVyeTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBjb250ZXh0LmhhbmRsZVNlbGVjdChpbmRleCkoKTtcclxuICAgICAgICBjb250ZXh0Lm1ha2VMaXN0SW52aXNpYmxlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgS0VZX0NPREU6IEtFWV9DT0RFLFxyXG4gICAgaGFuZGxlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnRlckhhbmRsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hhbmRsZXJzL0VudGVySGFuZGxlci5qcyIsImZ1bmN0aW9uIEVzY2FwZUhhbmRsZXIoZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IEtFWV9DT0RFID0gMjc7XHJcbiAgY29uc3QgaGFuZGxlID0gKCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29udGV4dC5tYWtlTGlzdEludmlzaWJsZSgpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHtcclxuICAgIEtFWV9DT0RFOiBLRVlfQ09ERSxcclxuICAgIGhhbmRsZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXNjYXBlSGFuZGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlcnMvRXNjYXBlSGFuZGxlci5qcyIsImZ1bmN0aW9uIEFycm93VXBIYW5kbGVyKGUsIGNvbnRleHQpIHtcclxuICBjb25zdCBLRVlfQ09ERSA9IDM4O1xyXG4gIGNvbnN0IGhhbmRsZSA9ICgpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHtzZWxlY3RlZCwgc3VnZ2VzdGlvbnMsIHNob3dTdWdnZXN0aW9uc30gPSBjb250ZXh0LnN0YXRlO1xyXG4gICAgaWYgKCFzaG93U3VnZ2VzdGlvbnMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWF4U3VnZ2VzdGlvbkluZGV4ID0gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IG5ld1NlbGVjdGVkID0gc2VsZWN0ZWQgPiAwID8gc2VsZWN0ZWQgLSAxIDogbWF4U3VnZ2VzdGlvbkluZGV4O1xyXG4gICAgY29udGV4dC5zZWxlY3RTdWdnZXN0aW9uKG5ld1NlbGVjdGVkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgS0VZX0NPREU6IEtFWV9DT0RFLFxyXG4gICAgaGFuZGxlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnJvd1VwSGFuZGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlcnMvQXJyb3dVcEhhbmRsZXIuanMiLCJmdW5jdGlvbiBBcnJvd0Rvd25IYW5kbGVyKGUsIGNvbnRleHQpIHtcclxuXHJcbiAgY29uc3QgS0VZX0NPREUgPSA0MDtcclxuXHJcbiAgY29uc3QgaGFuZGxlID0gKCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qge3NlbGVjdGVkLCBzdWdnZXN0aW9ucywgc2hvd1N1Z2dlc3Rpb25zfSA9IGNvbnRleHQuc3RhdGU7XHJcblxyXG4gICAgaWYgKCFzaG93U3VnZ2VzdGlvbnMgJiYgISFzdWdnZXN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgY29udGV4dC5tYWtlTGlzdFZpc2libGUoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghc2hvd1N1Z2dlc3Rpb25zKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYXhTdWdnZXN0aW9uSW5kZXggPSBzdWdnZXN0aW9ucy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBzZWxlY3RlZCA8IG1heFN1Z2dlc3Rpb25JbmRleCA/IHNlbGVjdGVkICsgMSA6IDA7XHJcbiAgICBjb250ZXh0LnNlbGVjdFN1Z2dlc3Rpb24obmV3U2VsZWN0ZWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBLRVlfQ09ERTogS0VZX0NPREUsXHJcbiAgICBoYW5kbGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFycm93RG93bkhhbmRsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hhbmRsZXJzL0Fycm93RG93bkhhbmRsZXIuanMiLCJpbXBvcnQgQXBpIGZyb20gJy4vQXBpJztcclxuaW1wb3J0IHsgaGVhZGVyc0ZhY3RvcnksIHJlcXVlc3RGYWN0b3J5RmFjdG9yeSB9IGZyb20gJy4vaGVscGVycyc7XHJcblxyXG5jbGFzcyBGZXRjaEFwaSBleHRlbmRzIEFwaSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFwaVVybCwgdG9rZW4sIHNlcnZpY2UsIGxvY2F0aW9uID0gdHJ1ZSkge1xyXG4gICAgc3VwZXIodG9rZW4pO1xyXG4gICAgdGhpcy5oZWFkZXJzID0gaGVhZGVyc0ZhY3RvcnkodG9rZW4pO1xyXG4gICAgdGhpcy5yZXF1ZXN0RmFjdG9yeSA9IHJlcXVlc3RGYWN0b3J5RmFjdG9yeSh0aGlzLmhlYWRlcnMpO1xyXG4gICAgLy8gdGhpcy5lbmRwb2ludCA9IGAke2FwaVVybH0vJHtzZXJ2aWNlfWA7XHJcbiAgICB0aGlzLmVuZHBvaW50ID0gYCR7YXBpVXJsfWA7XHJcbiAgICBpZiAobG9jYXRpb24gJiYgc2VydmljZS50b0xvd2VyQ2FzZSgpID09PSBBcGkuQUREUkVTUykge1xyXG4gICAgICB0aGlzLmRldGVjdEFkZHJlc3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRldGVjdEFkZHJlc3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke0FwaS5hcGlVcmx9L2RldGVjdEFkZHJlc3NCeUlwYDtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLnJlcXVlc3RGYWN0b3J5KGVuZHBvaW50LCAnR0VUJyk7XHJcblxyXG4gICAgZmV0Y2gocmVxdWVzdClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5sb2NhdGlvbi5kYXRhKVxyXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEgPyBkYXRhLmtsYWRyX2lkIDogbnVsbClcclxuICAgICAgLnRoZW4oa2xhZHJfaWQgPT4ge1xyXG4gICAgICAgIGlmIChrbGFkcl9pZCkge1xyXG4gICAgICAgICAgdGhpcy5sb2NhdGlvbnNfYm9vc3QgPSBbLi4udGhpcy5sb2NhdGlvbnNfYm9vc3QsIHtrbGFkcl9pZH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4gbnVsbCk7IC8vIGp1c3QgZGllXHJcbiAgfTtcclxuXHJcbiAgc3RhbmRhcmRpemF0aW9ucyA9IChib2R5KSA9PiB7XHJcbiAgICBpZiAoISF0aGlzLmxvY2F0aW9uc19ib29zdC5sZW5ndGgpIHtcclxuICAgICAgYm9keS5sb2NhdGlvbnNfYm9vc3QgPSB0aGlzLmxvY2F0aW9uc19ib29zdDtcclxuICAgIH1cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3F1ZXJ5JywgYm9keS5xdWVyeSk7XHJcblxyXG4gICAgIHJldHVybiBmZXRjaCh0aGlzLmVuZHBvaW50LCB7bWV0aG9kOiAnUE9TVCcsYm9keTpmb3JtRGF0YX0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZXRjaEFwaTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwaS9GZXRjaEFwaS5qcyIsImNsYXNzIEFwaSB7XHJcbiAgc3RhdGljIEZJTyA9ICdmaW8nO1xyXG4gIHN0YXRpYyBBRERSRVNTID0gJ2FkZHJlc3MnO1xyXG4gIHN0YXRpYyBPUkdBTklTQVRJT04gPSAncGFydHknO1xyXG4gIHN0YXRpYyBCQU5LID0gJ2JhbmsnO1xyXG4gIHN0YXRpYyBFTUFJTCA9ICdlbWFpbCc7XHJcbiAgc3RhdGljIE5BTUUgPSAnbmFtZSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRva2VuKSB7XHJcbiAgICB0aGlzLmxvY2F0aW9uc19ib29zdCA9IFtdO1xyXG4gICAgdGhpcy50b2tlbiA9IHRva2VuO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBpL0FwaS5qcyIsImNvbnN0IGhlYWRlcnMgPSAodG9rZW4pID0+IHtcclxuICByZXR1cm4gbmV3IEhlYWRlcnMoe1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAnQXV0aG9yaXphdGlvbic6IGBUb2tlbiAke3Rva2VufWAsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcGkvaGVscGVycy9oZWFkZXJzLmpzIiwiY29uc3QgcmVxdWVzdEZhY3RvcnlGYWN0b3J5ID0gKGhlYWRlcnMpID0+IChlbmRwb2ludCwgbWV0aG9kLCBib2R5ID0gbnVsbCkgPT4ge1xyXG4gIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgIGVuZHBvaW50LFxyXG4gICAgbWV0aG9kLFxyXG4gICAgaGVhZGVyc1xyXG4gIH07XHJcbiAgaWYgKGJvZHkpIHtcclxuICAgIHBhcmFtcy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgfVxyXG4gIHJldHVybiBuZXcgUmVxdWVzdChlbmRwb2ludCwgcGFyYW1zKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RGYWN0b3J5RmFjdG9yeTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBpL2hlbHBlcnMvcmVxdWVzdC5qcyIsImNvbnN0IHJlcXVlc3RCb2R5ID0gKHF1ZXJ5LCB7IGNvdW50LCBzcGVjaWFsUmVxdWVzdE9wdGlvbnMgPSB7fSB9KSA9PiB7XHJcbiAgcmV0dXJuICh7XHJcbiAgICBxdWVyeSxcclxuICAgIGNvdW50LFxyXG4gICAgLi4uc3BlY2lhbFJlcXVlc3RPcHRpb25zXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0Qm9keTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBpL2hlbHBlcnMvcmVxdWVzdEJvZHkuanMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIFNIT1JUX1RZUEVTIH0gZnJvbSAnLi9zaG9ydFR5cGVzJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uc3RhbnRzL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgWyfQsNC+0LHQuycsICfRgNC10YHQvycsICfQstC7JywgJ9CzJywgJ9Cz0YHQuicsICfQtCcsICfQtNCy0LvQtCcsICfQtNC90L8nLCAn0LTQvtGAJywgJ9C00L8nLCAn0LbRgicsICfQuNC8JywgJ9C6JywgJ9C60LInLCAn0LrQsi3QuycsICfQutC8JywgJ9C60L7QvNC9JywgJ9C60L8nLCAn0LvQv9GFJywgJ9C8JywgJ9C80LrRgCcsICfQvdCw0LEnLCAn0L3QvycsICfQvtCx0LsnLCAn0L7RhCcsICfQvycsICfQv9Cz0YInLCAn0L/QtdGAJywgJ9C/0LsnLCAn0L/Qu9Cw0YLRhCcsICfRgNC30LQnLCAn0YDQvycsICfRgC3QvScsICfRgScsICfRgdC7JywgJ9GB0L3RgicsICfRgdGCJywgJ9GB0YLRgCcsICfRgtC10YAnLCAn0YLRg9C/JywgJ9GD0LsnLCAn0YUnLCAn0YgnXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uc3RhbnRzL3Nob3J0VHlwZXMuanMiXSwic291cmNlUm9vdCI6IiJ9
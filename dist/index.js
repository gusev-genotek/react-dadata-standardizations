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
        geolocation = props.geolocation,
        autocomplete = props.autocomplete;

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
        //this is not called by some obscure reason
        //https://github.com/facebook/react/issues/6320
        //therefore we validate input outside asynchronously
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
      var errorMessage = this.state._isValid ? '' : this.props.errorMessage;
      var inputValue = this.getValue() ? this.getValue() : this.props.value;
      var autocomplete = this.props.autocomplete;

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
            onFocus: this.handleFocus,
            autocomplete: autocomplete
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
  apiUrl: _propTypes2.default.string.isRequired,
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
  autocomplete: _propTypes2.default.string,

  validate: _propTypes2.default.func,
  errorMessage: _propTypes2.default.string,

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
  highlighting: true,
  autocomplete: 'off'
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
    _this4.validateInput();
  };

  this.handleBlur = function (e) {
    _this4.makeListInvisible();
    var onBlur = _this4.props.onBlur;

    if (onBlur) {
      onBlur();
    }

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
  value: _propTypes2.default.string,
  searchWords: _propTypes2.default.array.isRequired,
  highlighting: _propTypes2.default.bool.isRequired
};
Suggestion.defaultProps = { value: undefined };

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
    className: className,
    placeholder: props.placeholder,
    onChange: props.onChange,
    value: props.query,
    onMouseDown: props.onMouseDown,
    onKeyPress: props.onKeyPress,
    onKeyDown: props.onKeyPress,
    onBlur: props.onBlur,
    onFocus: props.onFocus,
    autoComplete: props.autocomplete,
    name: 'ccname'
  });
};

QueryInput.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  onBlur: _propTypes2.default.func.isRequired,
  onMouseDown: _propTypes2.default.func.isRequired,
  onKeyPress: _propTypes2.default.func.isRequired,
  loading: _propTypes2.default.bool.isRequired,
  query: _propTypes2.default.string.isRequired,
  placeholder: _propTypes2.default.string.isRequired,
  autocomplete: _propTypes2.default.string
};

QueryInput.defaultProps = {
  loading: false,
  placeholder: '',
  autocomplete: 'off'
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
    } else if (!!suggestions && !!suggestions.length) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjU1MDU3YmMxZjdhM2YwMGI2MDQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5sZXNzPzcwYWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMubGVzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3VnZ2VzdGlvbnNMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N1Z2dlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3VnZ2VzdGlvblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1oaWdobGlnaHQtd29yZHMvZGlzdC9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N1Z2dlc3Rpb25TdWJ0ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1F1ZXJ5SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXJzL2hhbmRsZUtleVByZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9UYWJIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9FbnRlckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXJzL0VzY2FwZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXJzL0Fycm93VXBIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9BcnJvd0Rvd25IYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvRmV0Y2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9oZWxwZXJzL2hlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9oZWxwZXJzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9oZWxwZXJzL3JlcXVlc3RCb2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9zaG9ydFR5cGVzLmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJEYWRhdGFTdGFuZGFyZGl6YXRpb25zIiwicHJvcHMiLCJhcGlVcmwiLCJ0b2tlbiIsInNlcnZpY2UiLCJnZW9sb2NhdGlvbiIsImF1dG9jb21wbGV0ZSIsImFwaSIsImhhbmRsZUtleVByZXNzIiwiYmluZCIsInN0YXRlIiwiX3N0YXJ0VmFsaWRhdGlvbiIsIl9pc1ZhbGlkIiwiX3ZhbHVlIiwidmFsdWUiLCJxdWVyeSIsInN0YW5kYXJkaXphdGlvbnMiLCJzZWxlY3RlZCIsImxvYWRpbmciLCJzdWNjZXNzIiwiZXJyb3IiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRWYWx1ZSIsInNldFN0YXRlIiwibmV4dFByb3BzIiwidmFsaWRhdGVJbnB1dCIsImdldFZhbHVlIiwidmFsaWRhdGVzIiwiXyIsImV2ZXJ5IiwiQm9vbGVhbiIsInZhbGlkYXRlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0Iiwib25DaGFuZ2UiLCJvbkJsdXIiLCJlcnJvckNsYXNzIiwiZXJyb3JNZXNzYWdlIiwiaW5wdXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsInBsYWNlaG9sZGVyIiwibWFrZUxpc3RWaXNpYmxlIiwiaGFuZGxlQmx1ciIsImhhbmRsZUZvY3VzIiwiaGludCIsImhhbmRsZVNlbGVjdCIsInN1Z2dlc3Rpb25zRm9ybWF0dGVyIiwic2VhcmNoV29yZHMiLCJoaWdobGlnaHRpbmciLCJzdWJ0ZXh0Rm9ybWF0dGVyIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImNvdW50IiwibnVtYmVyIiwibWluQ2hhcnMiLCJib29sIiwic3BlY2lhbFJlcXVlc3RPcHRpb25zIiwib2JqZWN0IiwiZnVuYyIsIm9uU2VsZWN0Iiwib25FcnJvciIsInNlbGVjdGVkU3VnZ2VzdGlvbkZvcm1hdHRlciIsImRlZmF1bHRQcm9wcyIsImZldGNoRGF0YSIsInJlcXVlc3RCb2R5IiwidGhlbiIsImNhdGNoIiwiaGFuZGxlRXJyb3IiLCJlIiwic3BsaXQiLCJBRERSRVNTIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJ3b3JkIiwidGFyZ2V0IiwibGVuZ3RoIiwiY2hhbmdlVmFsdWUiLCJtYWtlTGlzdEludmlzaWJsZSIsImNoYW5nZWRWYWx1ZSIsInNlbGVjdFN1Z2dlc3Rpb24iLCJpbmRleCIsInNlbGVjdGVkU3VnZ2VzdGlvbiIsImZvcm1hdHRlciIsInN1Z2dlc3Rpb24iLCJuYW1lIiwicmVzdWx0IiwiZGF0YSIsImlubiIsIlN1Z2dlc3Rpb25zTGlzdCIsInZpc2libGUiLCJtYXAiLCJzdGFuZGFyZGl6YXRpb24iLCJhcnJheSIsIlN1Z2dlc3Rpb24iLCJob3ZlciIsImhhbmRsZUhvdmVyIiwic2V0SG92ZXIiLCJzdWJ0ZXh0Iiwic2VsZWN0ZWRDbGFzcyIsInVuZGVmaW5lZCIsIlN1Z2dlc3Rpb25WYWx1ZSIsIlN1Z2dlc3Rpb25TdWJ0ZXh0IiwiY2hpbGRyZW4iLCJRdWVyeUlucHV0IiwiY2xhc3NOYW1lIiwib25Nb3VzZURvd24iLCJvbktleVByZXNzIiwib25Gb2N1cyIsInNoaWZ0S2V5IiwiY3RybEtleSIsImFsdEtleSIsImhhbmRsZXJzIiwiaGFuZGxlciIsIktFWV9DT0RFIiwid2hpY2giLCJoYW5kbGUiLCJUYWJIYW5kbGVyIiwiY29udGV4dCIsImVudGVySGFuZGxlciIsIkVudGVySGFuZGxlciIsInN1Z2dlc3Rpb25zIiwicHJldmVudERlZmF1bHQiLCJ0cmltbWVkUXVlcnkiLCJ0cmltIiwiZmluZEluZGV4IiwiRXNjYXBlSGFuZGxlciIsIkFycm93VXBIYW5kbGVyIiwibWF4U3VnZ2VzdGlvbkluZGV4IiwibmV3U2VsZWN0ZWQiLCJBcnJvd0Rvd25IYW5kbGVyIiwiRmV0Y2hBcGkiLCJsb2NhdGlvbiIsImRldGVjdEFkZHJlc3MiLCJlbmRwb2ludCIsInJlcXVlc3QiLCJyZXF1ZXN0RmFjdG9yeSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwia2xhZHJfaWQiLCJsb2NhdGlvbnNfYm9vc3QiLCJib2R5IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1ldGhvZCIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiaGVhZGVycyIsInRvTG93ZXJDYXNlIiwiQXBpIiwiRklPIiwiT1JHQU5JU0FUSU9OIiwiQkFOSyIsIkVNQUlMIiwiTkFNRSIsIkhlYWRlcnMiLCJyZXF1ZXN0RmFjdG9yeUZhY3RvcnkiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwiUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxrQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7QUN2THRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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OztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM3aEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDNVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFVBQVU7OztBQUd2QyxPQUFPO0FBQ1A7QUFDQTs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLDhCQUE4QjtBQUM5QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsS0FBSztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiwyQkFBMkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGdDQUFnQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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dE0sRUFBNk0sSUFBN00sRUFBbU4sS0FBbk4sRUFBME4sR0FBMU4sRUFBK04sSUFBL04sRUFBcU8sS0FBck8sRUFBNE8sSUFBNU8sRUFBa1AsS0FBbFAsRUFBeVAsS0FBelAsRUFBZ1EsS0FBaFEsRUFBdVEsSUFBdlEsRUFBNlEsR0FBN1EsRUFBa1IsR0FBbFIsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGY1NTA1N2JjMWY3YTNmMDBiNjA0IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGhhbmRsZUtleVByZXNzIH0gZnJvbSAnLi9oYW5kbGVLZXlQcmVzcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRhYkhhbmRsZXIgfSBmcm9tICcuL1RhYkhhbmRsZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbnRlckhhbmRsZXIgfSBmcm9tICcuL0VudGVySGFuZGxlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVzY2FwZUhhbmRsZXIgfSBmcm9tICcuL0VzY2FwZUhhbmRsZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBcnJvd1VwSGFuZGxlciB9IGZyb20gJy4vQXJyb3dVcEhhbmRsZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBcnJvd0Rvd25IYW5kbGVyIH0gZnJvbSAnLi9BcnJvd0Rvd25IYW5kbGVyJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oYW5kbGVycy9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGhlYWRlcnNGYWN0b3J5IH0gZnJvbSAnLi9oZWFkZXJzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVxdWVzdEZhY3RvcnlGYWN0b3J5IH0gZnJvbSBcIi4vcmVxdWVzdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBidWlsZFJlcXVlc3RCb2R5IH0gZnJvbSAnLi9yZXF1ZXN0Qm9keSc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwaS9oZWxwZXJzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5sZXNzJztcblxuaW1wb3J0IFN1Z2dlc3Rpb25zTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvU3VnZ2VzdGlvbnNMaXN0JztcbmltcG9ydCBRdWVyeUlucHV0IGZyb20gJy4vY29tcG9uZW50cy9RdWVyeUlucHV0JztcblxuaW1wb3J0IHsgaGFuZGxlS2V5UHJlc3MgfSBmcm9tICcuL2hhbmRsZXJzJztcblxuaW1wb3J0IEFwaSBmcm9tICcuL2FwaS9GZXRjaEFwaSc7XG5pbXBvcnQgeyBidWlsZFJlcXVlc3RCb2R5IH0gZnJvbSBcIi4vYXBpL2hlbHBlcnNcIjtcbmltcG9ydCB7IFNIT1JUX1RZUEVTIH0gZnJvbSBcIi4vY29uc3RhbnRzL2luZGV4XCI7XG5cbmNsYXNzIERhZGF0YVN0YW5kYXJkaXphdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYXBpVXJsOlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0b2tlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgLy9kZWZlclJlcXVlc3RCeTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLCAvLyBkb2Vzbid0IHdvcmsgd2l0aCBmZXRjaCBBcGlcbiAgICBoaW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbWluQ2hhcnM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBnZW9sb2NhdGlvbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBxdWVyeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHNlcnZpY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBoaWdobGlnaHRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgc3BlY2lhbFJlcXVlc3RPcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGF1dG9jb21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuXHRcdHZhbGlkYXRlOiBQcm9wVHlwZXMuZnVuYyxcblx0XHRlcnJvck1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvL2hhbmRsZXJzOlxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkVycm9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHN1Z2dlc3Rpb25zRm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzZWxlY3RlZFN1Z2dlc3Rpb25Gb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cdFx0b25DaGFuZ2U6ICgpID0+IHt9LFxuXHRcdG9uQmx1cjogKCkgPT4ge30sXG4gICAgdG9rZW46ICcnLFxuICAgIGNvdW50OiAxMCxcbiAgICAvL2RlZmVyUmVxdWVzdEJ5OiAzMDAsXG4gICAgbWluQ2hhcnM6IDMsXG4gICAgZ2VvbG9jYXRpb246IHRydWUsXG4gICAgaGludDogJ9CS0YvQsdC10YDQuNGC0LUg0LLQsNGA0LjQsNC90YIg0L3QuNC20LUg0LjQu9C4INC/0YDQvtC00L7Qu9C20LjRgtC1INCy0LLQvtC0JyxcbiAgICBxdWVyeTogJycsXG4gICAgc2VydmljZTogJ2FkZHJlc3MnLFxuICAgIGhpZ2hsaWdodGluZzogdHJ1ZSxcbiAgICBhdXRvY29tcGxldGU6ICdvZmYnXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qge2FwaVVybCwgdG9rZW4sIHNlcnZpY2UsIGdlb2xvY2F0aW9uLCBhdXRvY29tcGxldGV9ID0gcHJvcHM7XG4gICAgdGhpcy5hcGkgPSBuZXcgQXBpKGFwaVVybCwgdG9rZW4sIHNlcnZpY2UsIGdlb2xvY2F0aW9uKTtcbiAgICB0aGlzLmhhbmRsZUtleVByZXNzID0gaGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRfc3RhcnRWYWxpZGF0aW9uOiBmYWxzZSxcblx0XHRcdF9pc1ZhbGlkOiBmYWxzZSxcblx0XHRcdF92YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcblx0XHRcdHF1ZXJ5OiAnJyxcblx0XHRcdHN0YW5kYXJkaXphdGlvbnM6IFtdLFxuXHRcdFx0c2VsZWN0ZWQ6IC0xLFxuXHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHRzdWNjZXNzOiBmYWxzZSxcblx0XHRcdGVycm9yOiBmYWxzZSxcblx0XHRcdHNob3dTdWdnZXN0aW9uczogZmFsc2VcbiAgICB9XG4gIH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRpZih0aGlzLnByb3BzLnZhbHVlKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlKHRoaXMucHJvcHMudmFsdWUpO1xuXHRcdH1cblx0fVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcXVlcnk6IHRoaXMucHJvcHMucXVlcnkgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcXVlcnk6IG5leHRQcm9wcy5xdWVyeSxcbiAgICAgIHN0YW5kYXJkaXphdGlvbnM6IFtdLFxuICAgICAgc2hvd1N1Z2dlc3Rpb25zOiBmYWxzZSxcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgZmV0Y2hEYXRhID0gKHF1ZXJ5KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IGJ1aWxkUmVxdWVzdEJvZHkocXVlcnksIHRoaXMucHJvcHMpO1xuXG4gICAgdGhpcy5hcGkuc3RhbmRhcmRpemF0aW9ucyhyZXF1ZXN0Qm9keSlcbiAgICAgIC50aGVuKHN0YW5kYXJkaXphdGlvbnMgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzdGFuZGFyZGl6YXRpb25zLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgIHNob3dTdWdnZXN0aW9uczogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGUgPT4gdGhpcy5oYW5kbGVFcnJvcihlKSk7XG4gIH07XG5cbiAgc2VhcmNoV29yZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzZWFyY2hXb3JkcyA9IHF1ZXJ5LnNwbGl0KC9bXi3QkC3Qr9CwLdGP0IHRkVxcZFxcd10rLyk7XG4gICAgY29uc3QgeyBzZXJ2aWNlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzZXJ2aWNlID09PSBBcGkuQUREUkVTUykge1xuICAgICAgcmV0dXJuIHNlYXJjaFdvcmRzLmZpbHRlcih3b3JkID0+ICFTSE9SVF9UWVBFUy5pbmNsdWRlcyh3b3JkKSk7XG4gICAgfVxuICAgIHJldHVybiBzZWFyY2hXb3JkcztcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBxdWVyeSxcbiAgICAgIHNlbGVjdGVkOiAtMVxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBtaW5DaGFycyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocXVlcnkubGVuZ3RoID49IG1pbkNoYXJzKSB7XG4gICAgICB0aGlzLmZldGNoRGF0YShxdWVyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdGFuZGFyZGl6YXRpb25zOiBbXSxcbiAgICAgICAgc2hvd1N1Z2dlc3Rpb25zOiBmYWxzZSxcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UocXVlcnkpO1xuICAgIH1cblxuXHRcdHRoaXMuY2hhbmdlVmFsdWUoZSk7XG4gICAgdGhpcy52YWxpZGF0ZUlucHV0KCk7XG4gIH07XG5cbiAgaGFuZGxlQmx1ciA9IChlKSA9PiB7XG4gICAgdGhpcy5tYWtlTGlzdEludmlzaWJsZSgpO1xuICAgIGNvbnN0IHsgb25CbHVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChvbkJsdXIpIHtcbiAgICAgIG9uQmx1cigpO1xuICAgIH1cblxuXHRcdHRoaXMuY2hhbmdlZFZhbHVlKGUpO1xuICB9O1xuXG4gIGhhbmRsZUVycm9yID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IG9uRXJyb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgIG9uRXJyb3IoZSk7XG4gICAgfVxuICB9O1xuXG4gIHNlbGVjdFN1Z2dlc3Rpb24gPSAoaW5kZXgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKCh7c3RhbmRhcmRpemF0aW9uc30pID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkU3VnZ2VzdGlvbiA9IHN0YW5kYXJkaXphdGlvbnNbaW5kZXhdO1xuICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLnNlbGVjdGVkU3VnZ2VzdGlvbkZvcm1hdHRlcihzZWxlY3RlZFN1Z2dlc3Rpb24pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0ZWQ6IGluZGV4LFxuICAgICAgICBxdWVyeVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNlbGVjdCA9IChpbmRleCkgPT4gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKGluZGV4ICE9PSBzZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3RTdWdnZXN0aW9uKGluZGV4KTtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0ZWRTdWdnZXN0aW9uID0gdGhpcy5zdGF0ZS5zdGFuZGFyZGl6YXRpb25zW2luZGV4XTtcbiAgICBjb25zdCB7IG9uU2VsZWN0IH0gPSB0aGlzLnByb3BzO1xuICAgIG9uU2VsZWN0KHNlbGVjdGVkU3VnZ2VzdGlvbilcbiAgfTtcblxuICBmb3JtYXR0ZXIgPSAoc3VnZ2VzdGlvbiwgbmFtZSkgPT4ge1xuICAgIHJldHVybiBzdWdnZXN0aW9uLnJlc3VsdDtcbiAgfTtcblxuICBzdWdnZXN0aW9uc0Zvcm1hdHRlciA9IChzdWdnZXN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0dGVyKHN1Z2dlc3Rpb24sICdzdWdnZXN0aW9uc0Zvcm1hdHRlcicpXG4gIH07XG5cbiAgc2VsZWN0ZWRTdWdnZXN0aW9uRm9ybWF0dGVyID0gKHN1Z2dlc3Rpb24pID0+IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZXIoc3VnZ2VzdGlvbiwgJ3NlbGVjdGVkU3VnZ2VzdGlvbkZvcm1hdHRlcicpXG4gIH07XG5cbiAgc3VidGV4dEZvcm1hdHRlciA9IChzdWdnZXN0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBzZXJ2aWNlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzZXJ2aWNlID09PSAncGFydHknKSB7XG4gICAgICByZXR1cm4gYNCY0J3QnSAke3N1Z2dlc3Rpb24uZGF0YS5pbm59YDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgbWFrZUxpc3RWaXNpYmxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2hvd1N1Z2dlc3Rpb25zLCBzdGFuZGFyZGl6YXRpb25zIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChzaG93U3VnZ2VzdGlvbnMpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtzaG93U3VnZ2VzdGlvbnM6ICEhc3RhbmRhcmRpemF0aW9ucy5sZW5ndGh9KTtcbiAgfTtcblxuICBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHF1ZXJ5LCBzdWNjZXNzLCBzdGFuZGFyZGl6YXRpb25zLCBzZWxlY3RlZCwgZXJyb3IgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBtaW5DaGFycyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghIXN0YW5kYXJkaXphdGlvbnMubGVuZ3RoICYmIHNlbGVjdGVkID09PSAtMSkge1xuICAgICAgdGhpcy5tYWtlTGlzdFZpc2libGUoKTtcbiAgICB9IGVsc2UgaWYgKHF1ZXJ5Lmxlbmd0aCA+PSBtaW5DaGFycyAmJiAhc3VjY2VzcyAmJiAhZXJyb3IpIHtcbiAgICAgIHRoaXMuZmV0Y2hEYXRhKHF1ZXJ5KTtcbiAgICB9XG4gIH07XG5cbiAgbWFrZUxpc3RJbnZpc2libGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93U3VnZ2VzdGlvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKCFzaG93U3VnZ2VzdGlvbnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1N1Z2dlc3Rpb25zOiBmYWxzZX0pO1xuICB9O1xuXG5cdHNldFZhbHVlKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRfdmFsdWU6IHZhbHVlLFxuXHRcdH0sICgpID0+IHtcbiAgICAgIC8vdGhpcyBpcyBub3QgY2FsbGVkIGJ5IHNvbWUgb2JzY3VyZSByZWFzb25cbiAgICAgIC8vaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy82MzIwXG4gICAgICAvL3RoZXJlZm9yZSB3ZSB2YWxpZGF0ZSBpbnB1dCBvdXRzaWRlIGFzeW5jaHJvbm91c2x5XG5cdFx0XHR0aGlzLnZhbGlkYXRlSW5wdXQoKTtcblx0XHR9KTtcblx0fVxuXG5cdGdldFZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLl92YWx1ZTtcblx0fVxuXG5cdHZhbGlkYXRlSW5wdXQoKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cdFx0Y29uc3QgdmFsaWRhdGVzID0gW107XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdF9pc1ZhbGlkOiBfLmV2ZXJ5KHZhbGlkYXRlcywgQm9vbGVhbiksXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y2hhbmdlVmFsdWUoZXZlbnQpIHtcblx0XHR0aGlzLnNldFZhbHVlKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuXHR9XG5cdGNoYW5nZWRWYWx1ZShldmVudCkge1xuXHRcdGlmICghdGhpcy5zdGF0ZS5fc3RhcnRWYWxpZGF0aW9uKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0X3N0YXJ0VmFsaWRhdGlvbjogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uQmx1cigpO1xuXHR9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtsb2FkaW5nLCBxdWVyeSwgc2hvd1N1Z2dlc3Rpb25zLCBzdGFuZGFyZGl6YXRpb25zLCBzZWxlY3RlZH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IGVycm9yQ2xhc3MgPSB0aGlzLnN0YXRlLl9zdGFydFZhbGlkYXRpb24gPyAodGhpcy5zdGF0ZS5faXNWYWxpZCA/ICcnIDogJyBlcnJvcicpIDogJyc7XG5cdFx0Y29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy5zdGF0ZS5faXNWYWxpZCA/ICcnIDogdGhpcy5wcm9wcy5lcnJvck1lc3NhZ2U7XG5cdFx0Y29uc3QgaW5wdXRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSA/IHRoaXMuZ2V0VmFsdWUoKSA6IHRoaXMucHJvcHMudmFsdWU7XG4gICAgY29uc3QgYXV0b2NvbXBsZXRlID0gdGhpcy5wcm9wcy5hdXRvY29tcGxldGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eydzdWdnZXN0aW9ucy13cmFwcGVyJyArIGVycm9yQ2xhc3N9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Z2dlc3Rpb25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxRdWVyeUlucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlIH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsgdGhpcy5wcm9wcy5wbGFjZWhvbGRlciB9XG4gICAgICAgICAgICBsb2FkaW5nPXsgbG9hZGluZyB9XG4gICAgICAgICAgICBxdWVyeT17IHF1ZXJ5IH1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsgdGhpcy5tYWtlTGlzdFZpc2libGUgfVxuICAgICAgICAgICAgb25LZXlQcmVzcz17IHRoaXMuaGFuZGxlS2V5UHJlc3MgfVxuICAgICAgICAgICAgb25CbHVyPXsgdGhpcy5oYW5kbGVCbHVyIH1cbiAgICAgICAgICAgIG9uRm9jdXM9eyB0aGlzLmhhbmRsZUZvY3VzIH1cbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZT17IGF1dG9jb21wbGV0ZSB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U3VnZ2VzdGlvbnNMaXN0XG4gICAgICAgICAgICBzdGFuZGFyZGl6YXRpb25zPXsgc3RhbmRhcmRpemF0aW9ucyB9XG4gICAgICAgICAgICBoaW50PXsgdGhpcy5wcm9wcy5oaW50IH1cbiAgICAgICAgICAgIHZpc2libGU9eyBzaG93U3VnZ2VzdGlvbnMgfVxuICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuaGFuZGxlU2VsZWN0fVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgc3VnZ2VzdGlvbnNGb3JtYXR0ZXI9e3RoaXMuc3VnZ2VzdGlvbnNGb3JtYXR0ZXJ9XG4gICAgICAgICAgICBzZWFyY2hXb3Jkcz17IHRoaXMuc2VhcmNoV29yZHMgfVxuICAgICAgICAgICAgaGlnaGxpZ2h0aW5nID0geyB0aGlzLnByb3BzLmhpZ2hsaWdodGluZyB9XG4gICAgICAgICAgICBzdWJ0ZXh0Rm9ybWF0dGVyID0geyB0aGlzLnN1YnRleHRGb3JtYXR0ZXIgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntlcnJvck1lc3NhZ2V9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhZGF0YVN0YW5kYXJkaXphdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJyxcbiAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJXMgYXQgaW5kZXggJXMuJyxcbiAgICAgICAgICBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlciksXG4gICAgICAgICAgaVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbiAgdmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAodHlwZVNwZWNzLmhhc093blByb3BlcnR5KHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaW52YXJpYW50KHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSA9PT0gJ2Z1bmN0aW9uJywgJyVzOiAlcyB0eXBlIGAlc2AgaXMgaW52YWxpZDsgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gJyArICd0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJXNgLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKTtcbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgd2FybmluZyghZXJyb3IgfHwgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciwgJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yKTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHdhcm5pbmcoZmFsc2UsICdGYWlsZWQgJXMgdHlwZTogJXMlcycsIGxvY2F0aW9uLCBlcnJvci5tZXNzYWdlLCBzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmxlc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5sZXNzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvc3R5bGVzLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN1Z2dlc3Rpb25zLW5vd3JhcHt3aGl0ZS1zcGFjZTpub3dyYXB9LnN1Z2dlc3Rpb25zLWlucHV0ey1tcy1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjEwMCV9LnN1Z2dlc3Rpb25zLWlucHV0LmxvYWRpbmd7YmFja2dyb3VuZDpoc2xhKDAsMCUsMTAwJSwuNzUpIHVybChcXFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoRUFBUUFLVUFBQndhSEl5T2pNekt6T1RtNUxTeXRGeGFYSFIyZEp5ZW5OemEzUFQyOUx5K3ZJU0doRVJHUkpTV2xOVFMxT3p1N0x5NnZHUm1aSHgrZktTbXBPVGk1UHorL01UR3hEUXlOSlNTbE16T3pPenE3TFMydEh4NmZOemUzUHo2L01UQ3hJeUtqRXhLVEp5YW5OVFcxUFR5OUd4cWJLeXFyUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNIL0MwNUZWRk5EUVZCRk1pNHdBd0VBQUFBaCtRUUpDUUFuQUN3QUFBQUFFQUFRQUFBR2s4Q1RjSGdTSFlqSVU4ZEFPb0ZBcHdmRGtmUVlKcWNGZEJGS0VDbGVTNG1DYVNBdW0xTWlJd1FGSEJXVFJ0Z0p4QzhYWVlJZ2dTUWxBQndQUkFPRFNCMGpReFlLRUI5SlFpVUZCUWFMQ282UEVaSUdReVJlU0NSTlF4NFpCSWxJRGdRT0hrSVFFQlFWSTU0a0l4VVVHMzVScXhRRUpCa09KQVFESng2R1FoNGJpUUpzR1JDclNBL05KOHJERzhXUEk2WklRUUFoK1FRSkNRQXJBQ3dBQUFBQUVBQVFBSVVFQWdTRWdvVEV3c1RrNHVTa29xUkVSa1JrWW1UVTB0VDA4dlNVbHBTMHNyUnNibXdjSGh5TWlvek15c3pzNnV5c3FxeGNYbHpjMnR6OCt2eE1Ua3ljbnB5OHVyeDBkblFjR2h5RWhvVEV4c1RrNXVTa3BxUk1Ta3hzYW16VTF0VDA5dlNjbXB5MHRyUjBjblEwTWpTTWpvek16c3pzN3V5c3JxemMzdHo4L3Z6Ly8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBR2s4Q1ZjTGlDb0lqSTFhQUVXb1ZDcTFORWtwdzBSS3NFTkdGb0RoK1RsU213SVhBR0hjRUtkQkFTQ0IrVjVTUWNWRlNLUWtjSUVvUTBTU1VrR1FoRUo0VklBeWxESHlZT2JVa3JGeDRlQVI4T0pwQkprNVZEQ0Y1RUVwb3JFeVlLSDBrakFBdDBLeFlXQXlvZlhnaHhCQmdNUWlkaEF3b0ltUWdLQXlzSWdFTVRJcWlZWWhaaFNDZk5LOHZJclpFckg2aEpRUUFoK1FRSkNRQWtBQ3dBQUFBQUVBQVFBSVVFQWdTRWhvVEV4c1RrNXVSTVRreWtwcVRVMXRSc2FtejA5dlMwdHJSMGRuU2NtcHpNenN6czd1emMzdHcwTWpSY1hseTBzclQ4L3Z5OHZyeDhmbndjR2h5VWtwVE15c3pzNnV5c3FxemMydHgwY25UOCt2eTh1cng4ZW55a29xVFUwdFQwOHZUazR1UmtabVQvLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBR2tFQ1NjRWhLZEloSTBxQ0FJR1V5cEpEQ2tlUjhCRTdvUjhFaE5ycWFSU01TRVkwdUpJUkIyT21JSklLUWNKQ1JUQ0FRSVllUldDTVhCQXR5UXlGTlNDSWlRd1lNRnlCSlFnRWVIaFlHRnd5T2p3RUtrNFNHUkE1K2Vnd1JvVU1VRlI0TmJHNFNCb1lhR3hJWkR3OUNYeVFpRVNHWERBQUZhUXhFSEgwa2xpUUhGWjVERFIxZHhoZ1ZXSTlDQnFWRFFRQWgrUVFKQ1FBbUFDd0FBQUFBRUFBUUFJVWNHaHlNam96TXlzeFVWbFRrNXVTc3JxeDBjblQwOXZTOHZyemMzdHlFZ29TY25weEVSa1RVMHRUczd1eTB0clJrWm1SOGZuejgvdnpFeHNTTWlveWtwcVEwTWpTVWxwVE16c3hjV2x6czZ1eTBzclIwZG5UOCt2ekV3c1RrNHVTRWhvUk1Ta3pVMXRUMDh2Uzh1cnlzcXF6Ly8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFHamtDVGNHaWFDSWhJazRQVU1aRVFwaEhsayt3OEdrN29KdEFjT3BxRXpRZ3hJVVN3aDRTUVJQcElSQWVoaGlTWmNEakNEdVloU3BZZ0pTTkVJM0ZJR2xSQ0loZ0NXRWttRnhRVUN5SUNHSTFKa0NBTFE0UkpIMnBEZWh0OVNCUVdJSUpPYlcrRkNRb1NEeUVNUWw4bUgySVFFQ0lBQlNZSGx5WldmUU1aSmh3V2hVUkxUY1JLRmhpT1F3WjRTVUVBSWZrRUNRa0FLUUFzQUFBQUFCQUFFQUNGQkFJRWhJS0V4TUxFNU9Ma1JFWkVwS0trWkdaazFOTFU5UEwwdExLMGRIWjBYRjVjbkpxY3pNck03T3JzYkc1czNOcmMvUHI4dkxxOE5ESTBqSTZNVEU1TXJLNnNIQm9jaElhRXhNYkU1T2JrVEVwTXBLYWtiR3BzMU5iVTlQYjB0TGEwZkg1OFpHSmt6TTdNN083c2RISjAzTjdjL1A3OHZMNjgvLy8vQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJwREFsSENZOG5pSXlCUkpFa2sxUnFsUHdaR01nQTVPcUlEVEhKS2FtZ1JpZEhBd2pwR0JVQ0labkR3ZklTbHpPbEFvd3NnSWRFUktRZ2x4UXdpQ1JBNVVRaDRqRFZoSktRVU1EQlllVDQxSmtKS0RoVU1ESmtSNkNYMUVEQlVNQ0d0dEp5V2VLUU1VSnlnTEluSk5CUUFISlFvUUV5QXBFYUlwQ0JjUEtRWWRLUmdibTBJWkYxVEdTZ1NXamlFQmprRUFJZmtFQ1FrQUpnQXNBQUFBQUJBQUVBQ0ZCQUlFaElLRXhNTEU1T0xrcEtLa1RFNU0xTkxVOVBMMGxKS1VaR1prdExLMHpNck03T3JzM05yYy9QcjhuSnFjZEhaME5ESTBqSTZNcktxc1hGNWNIQm9jaElhRXhNYkU1T2JrcEthazFOYlU5UGIwbEphVWJHcHN2THE4ek03TTdPN3MzTjdjL1A3OG5KNmNmSHA4WkdKay8vLy9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQnBSQWszQm8wbWlJU0JQSTR6QXRQaWFIQjVTVUdwelFENU1JYW9ZVWg0OEJwTUJFelNhUEJ5UFNiSVFIamFoQnlBZ2RIOFVSZVhrSTNrTUhnRVFIVkVJYUh3dFhTU1lLRXhNZUdrK0xTUW9aa0VNR0RVa1lhRUlNSFFBUVNSTUpHUWRDRlJVWkRnRWhRaGdqSWdzUW95WVhieE1WR2hZV0F3VUNKaHV2UXhzUm94QWtKZ2dsZzBNTEVWVEpTaFNiakVJU0NJeEJBQ0g1QkFrSkFDa0FMQUFBQUFBUUFCQUFoUndhSEl5T2pNekt6RnhhWEt5dXJPVG01SFIyZEp5ZW5MeSt2UFQyOU56ZTNEUTJOSVNDaEpTV2xOVFMxR3hxYkxTMnRPenU3S3lxck1UR3hQeisvRVJHUkl5S2pEUXlOSlNTbE16T3pHUm1aTFN5dE96cTdIeDZmS1NpcE1UQ3hQejYvT1RpNUlTR2hKeWFuTlRXMUhSeWRMeTZ2UFR5OUV4S1RQLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFhVHdKUndtQ0tSaU1oVXhBUktDVElwa0NtU0JFRWNUbWlHU1l3MEM1dFR4bkhhaEtMVWxNa1VvcEFTd2hPSkVvS1loS0FNNUloMFhKdERKM0JJSnlkREpRTUREMGxDSHdnbUU0Z0RHb3dwamdnVFF5UUtTUkVGWFIwQURFa1FEQnVERnhjU0ZBRm5LUnlyRGhZQlFnSndHd3NLR0EwaEdnSXBDYTVDQ1JVV0tTTEdIZ2FBUkE0VmhzZ3BKd2FjbFNrakI0eEJBQ0g1QkFrSkFDZ0FMQUFBQUFBUUFCQUFoUVFDQklTQ2hNVEd4S1NpcE9UbTVFUkdSTFN5dEd4cWJKU1NsTlRXMVBUMjlJeUtqTXpPekt5cXJPenU3RnhlWEx5NnZIUjJkRFF5TkV4T1RKeWFuT1RpNVB6Ky9IeCtmQndhSElTR2hNekt6S1NtcE96cTdFeEtUTFMydE56YTNQejYvSXlPak5UUzFLeXVyUFR5OUx5K3ZIeDZmSnllblAvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFhVFFKUndpRW9raUVpVUF3SkNhUmdvRU1TUkJIbEVUaWlEU1JRb1VCVURpU0VpR1NwUktncUQyVmdTWHhRcFlhbDRJRUxPQVJCSmlxNU5ReUlmU1NRa1F3RUhCMzFKS0NJTUdna1hpb3gra0VkQ0gyaElEbXBDRGhrU0NFa0NGRjVDSFIwZUZpY0VueEFXSHdNYlFpSmZKUk1WQXdNRUYxZ2dya01LRHhRb0NDY29CaUdCUkFrUGh4VEZDZ3VialNnTkk0MUJBQ0g1QkFrSkFDb0FMQUFBQUFBUUFCQUFoUVFDQklTQ2hNVEN4T1RpNUtTaXBFeE9UTlRTMVBUeTlMU3l0R1JtWkpTV2xIUnlkQ3d1TE16S3pPenE3S3lxck56YTNQejYvTHk2dkl5T2pGeGVYSnllbkh4NmZCd2FISVNHaE1UR3hPVG01S1NtcE5UVzFQVDI5TFMydEd4dWJKeWFuSFIyZERReU5Nek96T3p1N0t5dXJOemUzUHorL0x5K3ZHUmlaUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFhUlFKVndxT0p3aUVoVjV1SlFOVWFxaUlTVVBGdytUdWhJRWlFMk9pb0N3REF5SEJDREtGWEZFSlZPQzVQd3dEa05QQkloeVhJSkpBMGVCbDFESEhKSUJ3ZERFeFlXR0VsQ1pBMGNpeUdPandaUFIwSW1HbFdKUXdjS0JSVkpIQWlDUWhRcEtDY1BUU29rRFhaNFFoeGRHUWthQ0Fna0lCQnFSQjBMR3lvUER5b29HNE5FSmlHSnhpb2RHNitQS3JSSlFRQWgrUVFKQ1FBbkFDd0FBQUFBRUFBUUFJVWNHaHlNam96TXlzems1dVJVVmxTc3JxeDBjblRjMnR6MDl2Uzh2cnlFZ29TY25weEVSa1RVMHRUczd1eTB0clJrWm1SOGVuems0dVQ4L3Z6RXhzU01pb3lrcHFRME1qU1VscFRNenN6czZ1eGNXbHkwc3JSMGRuVGMzdHo4K3Z6RXdzU0Vob1JNU2t6VTF0VDA4dlM4dXJ5c3Fxei8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFHa01DVGNIZ3lkSWpJaytEaU9CRTJwMCtwaVVSY0lrNW9wdlFoTmhBbkUyQUVnWkE0Z3lpVklYcE1GQjRoWWpTUmxFcENSK2dTU0RZNEdWMURCeEpKQ0NSREN4VVZHRWxDRFJrQ0k0cU1qaWNOQWhralF4SWFTU1JVUWlRV0VBVkpJeHdOZ2gwR0FoTlRvblFTRDNnbkhtQVpDZ01nSUE0Y2hST2hVUlVQSnlVSmwxeEpFaFZneHljSXNKWW5GQUtPUVFBaCtRUUpDUUFwQUN3QUFBQUFFQUFRQUlVRUFnU0Vnb1RFeHNUazV1UkVSa1Nrb3FSa1ptVFUxdFNVbHBUMDl2UzBzclJjWGx4MGRuU01pb3pNenN6czd1emMzdHcwTmpSTVRreXNxcXgwY25TY25wejgvdnk4dXJ3Y0doeUVob1RNeXN6czZ1eE1Ta3lrcHFSc2FtemMydHljbXB6OCt2eGtZbVI4Zm55TWpvelUwdFQwOHZUazR1Uzh2cnovLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUdqOENVY0pnS0JJaklWSWxnU2hrOHFRMUdrRXdRR2s2b0FaTWdIa0lwUmVSRFlaUUFuWlRsSVZ5SVVCYlNTZmhoV0U2WGk5Q0U0RlNTSlFvT1lFTVFBMGttWFVJVElDQnBTVW9PR2dlTWpwQktHZzRIUXdOc1NDYWVRZ2tLQVhwSWdTV0VEU1FPRmhxZUpnZDNlVUluWUI4Z0R5VWxEd3FISWFFcElSVlVHaG9wRGhlRVJBTWRZSm5DRjhHQW0wbEJBQ0g1QkFrSkFDZ0FMQUFBQUFBUUFCQUFoUVFDQklTQ2hNVEN4T1RpNUtTaXBFeE9UTlRTMVBUeTlMU3l0R1JtWkpTU2xIUnlkQndlSE16S3pPenE3S3lxck56YTNQejYvSXlPakx5NnZKeWFuSHg2ZkJ3YUhJU0doTVRHeE9UbTVLU21wRnhlWE5UVzFQVDI5R3h1YkhSMmREUXlOTXpPek96dTdLeXVyTnplM1B6Ky9MeSt2SnllblAvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFhV1FKUndpSklvaUVnVVozTkFmU29vRVNpVTdHd29UdWdIMUNHU0lxaEpZUkM0Y0N3ajFLRWhYSHdhSlVwR1NBcVVDQmFHOEVCSVBKSUxBQjRPUkFPRVNCd2NReE1QRHdoSlFpR1NIQWdqR28rUUJpRU5pa0lpVFVnSG9FSWRBaFFZU1pRR1lDZ0VHaEFsSEYxcUhDVURFeE5DRGwwRENBY2hCZ2NJY3hFaVJDVVRCaWdOVkNFVHJFUWlFMTJiS0JFVHhwQkNpWkJCQURzPVxcXCIpIDUwJSA1MCUgbm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb24teDoxMDAlfS5zdWdnZXN0aW9ucy1pbnB1dDo6LW1zLWNsZWFye2Rpc3BsYXk6bm9uZX0uc3VnZ2VzdGlvbnMtd3JhcHBlcnt3aWR0aDoxMDAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowO3BhZGRpbmc6MDt2ZXJ0aWNhbC1hbGlnbjp0b3A7bWluLWhlaWdodDoxcHg7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCV9LnN1Z2dlc3Rpb25zLXN1Z2dlc3Rpb25ze2JhY2tncm91bmQ6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICM5OTk7LW1zLWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y3Vyc29yOmRlZmF1bHQ7ei1pbmRleDo5OTk5Oy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlfS5zdWdnZXN0aW9ucy1zdWdnZXN0aW9ucyBzdHJvbmd7Zm9udC13ZWlnaHQ6NDAwO2NvbG9yOiMzOWZ9LnN1Z2dlc3Rpb25zLXN1Z2dlc3Rpb25zLnN1Z2dlc3Rpb25zLW1vYmlsZXtib3JkZXItc3R5bGU6bm9uZX0uc3VnZ2VzdGlvbnMtc3VnZ2VzdGlvbnMuc3VnZ2VzdGlvbnMtbW9iaWxlIC5zdWdnZXN0aW9ucy1zdWdnZXN0aW9ue2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGR9LnN1Z2dlc3Rpb25zLXN1Z2dlc3Rpb257cGFkZGluZzo0cHg7b3ZlcmZsb3c6aGlkZGVufS5zdWdnZXN0aW9ucy1zdWdnZXN0aW9uOmhvdmVye2JhY2tncm91bmQ6I2Y3ZjdmN30uc3VnZ2VzdGlvbnMtc2VsZWN0ZWQsLnN1Z2dlc3Rpb25zLXNlbGVjdGVkOmhvdmVye2JhY2tncm91bmQ6I2YwZjBmMH0uc3VnZ2VzdGlvbnMtaGludHtwYWRkaW5nOjRweDt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO2NvbG9yOiM3Nzc7Zm9udC1zaXplOjg1JX0uc3VnZ2VzdGlvbnMtY29uc3RyYWludHN7bGlzdC1zdHlsZTpub25lIWltcG9ydGFudDttYXJnaW46MCFpbXBvcnRhbnQ7cGFkZGluZzowIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7d2hpdGUtc3BhY2U6bm93cmFwIWltcG9ydGFudH0uc3VnZ2VzdGlvbnMtY29uc3RyYWludHM6ZW1wdHl7ZGlzcGxheTpub25lIWltcG9ydGFudH0uc3VnZ2VzdGlvbnMtY29uc3RyYWludHMgbGl7YmFja2dyb3VuZDojZjhmOGY4O2JvcmRlcjoxcHggc29saWQgI2NjYzstd2Via2l0LWJvcmRlci1yYWRpdXM6M3B4Oy1tb3otYm9yZGVyLXJhZGl1czozcHg7Ym9yZGVyLXJhZGl1czozcHg7Y3Vyc29yOmRlZmF1bHQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjAgNHB4IDAgMDtwYWRkaW5nOjAgLjVlbX0uc3VnZ2VzdGlvbnMtY29uc3RyYWludHMgbGkgLnN1Z2dlc3Rpb25zLXJlbW92ZXtoZWlnaHQ6MWVtO3dpZHRoOjFlbTtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW46MCAwIDAgLjI1ZW07YmFja2dyb3VuZDp0cmFuc3BhcmVudCB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwbk1UQXdKeUJvWldsbmFIUTlKekV3TUNjZ2VHMXNibk05SjJoMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSno0OFp6NDhjR0YwYUNCa1BTZHRNakFzTWpCdE1UQXNNR3d5TUN3eU1Hd3lNQ3d0TWpCc01UQXNNVEJzTFRJd0xESXdiREl3TERJd2JDMHhNQ3d4TUd3dE1qQXNMVEl3YkMweU1Dd3lNR3d0TVRBc0xURXdiREl3TEMweU1Hd3RNakFzTFRJd2JERXdMQzB4TUNjZ1ptbHNiRDBuSXprNU9TY3ZQand2Wno0OEwzTjJaejQ9XFxcIikgNTAlIDUwJSBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvbnRhaW47Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTouOH0uc3VnZ2VzdGlvbnMtY29uc3RyYWludHMgbGkgLnN1Z2dlc3Rpb25zLXJlbW92ZTpob3ZlcntvcGFjaXR5OjF9LnN1Z2dlc3Rpb25zLWNvbnN0cmFpbnRzIGxpIHNwYW57dmVydGljYWwtYWxpZ246bWlkZGxlfS5zdWdnZXN0aW9ucy1zdWJ0ZXh0e2NvbG9yOiM3Nzc7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfS5zdWdnZXN0aW9ucy1zdWJ0ZXh0X2lubGluZXtkaXNwbGF5OmlubGluZS1ibG9jazttaW4td2lkdGg6NmVtO3ZlcnRpY2FsLWFsaWduOmJvdHRvbTttYXJnaW46MCAuNWVtIDAgMH0uc3VnZ2VzdGlvbnMtc3VidGV4dC1kZWxpbWl0ZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MnB4fS5zdWdnZXN0aW9ucy1zdWJ0ZXh0X2xhYmVse21hcmdpbjowIDAgMCAuMjVlbTstd2Via2l0LWJvcmRlci1yYWRpdXM6M3B4Oy1tb3otYm9yZGVyLXJhZGl1czozcHg7Ym9yZGVyLXJhZGl1czozcHg7cGFkZGluZzowIDNweDtiYWNrZ3JvdW5kOiNmNWY1ZjU7Zm9udC1zaXplOjg1JX0uc3VnZ2VzdGlvbnMtdmFsdWVbZGF0YS1zdWdnZXN0aW9uLXN0YXR1cz1MSVFVSURBVEVEXXtwb3NpdGlvbjpyZWxhdGl2ZX0uc3VnZ2VzdGlvbnMtdmFsdWVbZGF0YS1zdWdnZXN0aW9uLXN0YXR1cz1MSVFVSURBVEVEXTphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7cmlnaHQ6MDt0b3A6NTAlO2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjQpO2NvbnRlbnQ6XFxcIlxcXCJ9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj8/cmVmLS0xLTIhLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcmMvc3R5bGVzL3N0eWxlcy5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFN1Z2dlc3Rpb24gZnJvbSAnLi9TdWdnZXN0aW9uJztcblxuY29uc3QgU3VnZ2VzdGlvbnNMaXN0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc3RhbmRhcmRpemF0aW9ucywgdmlzaWJsZSwgc2VsZWN0ZWQgfSA9IHByb3BzO1xuXG4gIGlmICghIXN0YW5kYXJkaXphdGlvbnMubGVuZ3RoICYmIHZpc2libGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWdnZXN0aW9ucy13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VnZ2VzdGlvbnMtc3VnZ2VzdGlvbnNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Z2dlc3Rpb25zLWhpbnRcIj57cHJvcHMuaGludH08L2Rpdj5cbiAgICAgICAgICB7c3RhbmRhcmRpemF0aW9ucy5tYXAoKHN0YW5kYXJkaXphdGlvbiwgaW5kZXgpID0+XG4gICAgICAgICAgICA8U3VnZ2VzdGlvblxuICAgICAgICAgICAgICBrZXk9eyBpbmRleCB9ICAvKiBAdG9kbyBvdXIgcGxhbmV0IG5lZWRzIHNvbWV0aGluZyBiZXR0ZXIgdGhhbiB0aGlzICovXG4gICAgICAgICAgICAgIGluZGV4PXsgaW5kZXggfVxuICAgICAgICAgICAgICBzZWxlY3RlZD17IGluZGV4ID09PSBzZWxlY3RlZCB9XG4gICAgICAgICAgICAgIG9uU2VsZWN0PXsgcHJvcHMub25TZWxlY3QoaW5kZXgpIH1cbiAgICAgICAgICAgICAgc2VhcmNoV29yZHMgPSB7IHByb3BzLmhpZ2hsaWdodGluZyA/IHByb3BzLnNlYXJjaFdvcmRzKCkgOiBbXSB9XG4gICAgICAgICAgICAgIGhpZ2hsaWdodGluZyA9IHsgcHJvcHMuaGlnaGxpZ2h0aW5nIH1cbiAgICAgICAgICAgICAgdmFsdWUgPSB7IHByb3BzLnN1Z2dlc3Rpb25zRm9ybWF0dGVyKHN0YW5kYXJkaXphdGlvbikgfVxuICAgICAgICAgICAgICBzdWJ0ZXh0ID0geyBwcm9wcy5zdWJ0ZXh0Rm9ybWF0dGVyKHN0YW5kYXJkaXphdGlvbikgfVxuICAgICAgICAgICAgLz4pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5TdWdnZXN0aW9uc0xpc3QucHJvcFR5cGVzID0ge1xuICBzdGFuZGFyZGl6YXRpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgaGludDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBzdWdnZXN0aW9uc0Zvcm1hdHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3VidGV4dEZvcm1hdHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VhcmNoV29yZHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhpZ2hsaWdodGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbn07XG5TdWdnZXN0aW9uc0xpc3QuZGVmYXVsdFByb3BzID0ge1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VnZ2VzdGlvbnNMaXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU3VnZ2VzdGlvbnNMaXN0LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU3VnZ2VzdGlvblZhbHVlIGZyb20gJy4vU3VnZ2VzdGlvblZhbHVlJztcbmltcG9ydCBTdWdnZXN0aW9uU3VidGV4dCBmcm9tICcuL1N1Z2dlc3Rpb25TdWJ0ZXh0JztcblxuY2xhc3MgU3VnZ2VzdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7XG4gICAgaG92ZXI6IGZhbHNlLFxuICB9O1xuXG4gIGhhbmRsZUhvdmVyID0gKCkgPT4gdGhpcy5zZXRIb3Zlcih0cnVlKTtcbiAgaGFuZGxlQmx1ciA9ICgpID0+IHRoaXMuc2V0SG92ZXIoZmFsc2UpO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkLCBoaWdobGlnaHRpbmcsIHNlYXJjaFdvcmRzLCBzdWJ0ZXh0LCB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzZWxlY3RlZENsYXNzID0gc2VsZWN0ZWQgfHwgdGhpcy5zdGF0ZS5ob3ZlciA/ICcgc3VnZ2VzdGlvbnMtc2VsZWN0ZWQnIDogJyc7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXsgYHN1Z2dlc3Rpb25zLXN1Z2dlc3Rpb24ke3NlbGVjdGVkQ2xhc3N9YCB9XG4gICAgICAgIG9uTW91c2VFbnRlcj17IHRoaXMuaGFuZGxlSG92ZXIgfVxuICAgICAgICBvbk1vdXNlTGVhdmU9eyB0aGlzLmhhbmRsZUJsdXIgfVxuICAgICAgICBvbk1vdXNlRG93bj17IHRoaXMucHJvcHMub25TZWxlY3QgfVxuICAgICAgPlxuICAgICAgICA8U3VnZ2VzdGlvblZhbHVlXG4gICAgICAgICAgey4uLnsgaGlnaGxpZ2h0aW5nLCBzZWFyY2hXb3JkcywgdmFsdWUgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPFN1Z2dlc3Rpb25TdWJ0ZXh0Pnsgc3VidGV4dCB9PC9TdWdnZXN0aW9uU3VidGV4dD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfTtcblxuICBzZXRIb3ZlciA9IChob3ZlcikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBob3ZlciB9KTtcbiAgfTtcbn1cblxuU3VnZ2VzdGlvbi5wcm9wVHlwZXMgPSB7XG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VhcmNoV29yZHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBoaWdobGlnaHRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG59O1xuU3VnZ2VzdGlvbi5kZWZhdWx0UHJvcHMgPSB7dmFsdWU6IHVuZGVmaW5lZH07XG5cbmV4cG9ydCBkZWZhdWx0IFN1Z2dlc3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TdWdnZXN0aW9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSGlnaGxpZ2h0ZXIgZnJvbSAncmVhY3QtaGlnaGxpZ2h0LXdvcmRzJztcblxuY29uc3QgU3VnZ2VzdGlvblZhbHVlID0gKHtoaWdobGlnaHRpbmcsIHNlYXJjaFdvcmRzLCB2YWx1ZX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWdnZXN0aW9ucy12YWx1ZVwiPlxuICAgICAge1xuICAgICAgICBoaWdobGlnaHRpbmcgPyA8SGlnaGxpZ2h0ZXJcbiAgICAgICAgICAvL2hpZ2hsaWdodENsYXNzTmFtZT0nJ1xuICAgICAgICAgIHNlYXJjaFdvcmRzPXsgc2VhcmNoV29yZHMgfVxuICAgICAgICAgIGF1dG9Fc2NhcGU9eyB0cnVlIH1cbiAgICAgICAgICB0ZXh0VG9IaWdobGlnaHQ9eyB2YWx1ZSB9XG4gICAgICAgIC8+IDogdmFsdWVcbiAgICAgIH1cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5TdWdnZXN0aW9uVmFsdWUucHJvcFR5cGVzID0ge1xuICBoaWdobGlnaHRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHNlYXJjaFdvcmRzOiBQcm9wVHlwZXMuYXJyYXksXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuU3VnZ2VzdGlvblZhbHVlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGlnaGxpZ2h0aW5nOiB0cnVlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VnZ2VzdGlvblZhbHVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU3VnZ2VzdGlvblZhbHVlLmpzIiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblx0XG5cdHZhciBfSGlnaGxpZ2h0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0dmFyIF9IaWdobGlnaHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9IaWdobGlnaHRlcik7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gX0hpZ2hsaWdodGVyMlsnZGVmYXVsdCddO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzWydkZWZhdWx0J10gPSBIaWdobGlnaHRlcjtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblx0XG5cdHZhciBfaGlnaGxpZ2h0V29yZHNDb3JlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0XG5cdHZhciBfcHJvcFR5cGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblx0XG5cdHZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cdFxuXHR2YXIgX3JlYWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cdFxuXHR2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblx0XG5cdEhpZ2hsaWdodGVyLnByb3BUeXBlcyA9IHtcblx0ICBhY3RpdmVDbGFzc05hbWU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nLFxuXHQgIGFjdGl2ZUluZGV4OiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlcixcblx0ICBhY3RpdmVTdHlsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3QsXG5cdCAgYXV0b0VzY2FwZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5ib29sLFxuXHQgIGNsYXNzTmFtZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmcsXG5cdCAgaGlnaGxpZ2h0Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLnN0cmluZyxcblx0ICBoaWdobGlnaHRTdHlsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3QsXG5cdCAgaGlnaGxpZ2h0VGFnOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9uZU9mVHlwZShbX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5ub2RlLCBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmMsIF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nXSksXG5cdCAgc2FuaXRpemU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuYyxcblx0ICBzZWFyY2hXb3JkczogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5hcnJheU9mKF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nKS5pc1JlcXVpcmVkLFxuXHQgIHRleHRUb0hpZ2hsaWdodDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmcuaXNSZXF1aXJlZCxcblx0ICB1bmhpZ2hsaWdodENsYXNzTmFtZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmcsXG5cdCAgdW5oaWdobGlnaHRTdHlsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3Rcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBIaWdobGlnaHRzIGFsbCBvY2N1cnJlbmNlcyBvZiBzZWFyY2ggdGVybXMgKHNlYXJjaFRleHQpIHdpdGhpbiBhIHN0cmluZyAodGV4dFRvSGlnaGxpZ2h0KS5cblx0ICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGFuIGFycmF5IG9mIHN0cmluZ3MgYW5kIDxzcGFuPnMgKHdyYXBwaW5nIGhpZ2hsaWdodGVkIHdvcmRzKS5cblx0ICovXG5cdFxuXHRmdW5jdGlvbiBIaWdobGlnaHRlcihfcmVmKSB7XG5cdCAgdmFyIF9yZWYkYWN0aXZlQ2xhc3NOYW1lID0gX3JlZi5hY3RpdmVDbGFzc05hbWU7XG5cdCAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYkYWN0aXZlQ2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYkYWN0aXZlQ2xhc3NOYW1lO1xuXHQgIHZhciBfcmVmJGFjdGl2ZUluZGV4ID0gX3JlZi5hY3RpdmVJbmRleDtcblx0ICB2YXIgYWN0aXZlSW5kZXggPSBfcmVmJGFjdGl2ZUluZGV4ID09PSB1bmRlZmluZWQgPyAtMSA6IF9yZWYkYWN0aXZlSW5kZXg7XG5cdCAgdmFyIGFjdGl2ZVN0eWxlID0gX3JlZi5hY3RpdmVTdHlsZTtcblx0ICB2YXIgYXV0b0VzY2FwZSA9IF9yZWYuYXV0b0VzY2FwZTtcblx0ICB2YXIgX3JlZiRjYXNlU2Vuc2l0aXZlID0gX3JlZi5jYXNlU2Vuc2l0aXZlO1xuXHQgIHZhciBjYXNlU2Vuc2l0aXZlID0gX3JlZiRjYXNlU2Vuc2l0aXZlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkY2FzZVNlbnNpdGl2ZTtcblx0ICB2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWU7XG5cdCAgdmFyIF9yZWYkaGlnaGxpZ2h0Q2xhc3NOYW1lID0gX3JlZi5oaWdobGlnaHRDbGFzc05hbWU7XG5cdCAgdmFyIGhpZ2hsaWdodENsYXNzTmFtZSA9IF9yZWYkaGlnaGxpZ2h0Q2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYkaGlnaGxpZ2h0Q2xhc3NOYW1lO1xuXHQgIHZhciBfcmVmJGhpZ2hsaWdodFN0eWxlID0gX3JlZi5oaWdobGlnaHRTdHlsZTtcblx0ICB2YXIgaGlnaGxpZ2h0U3R5bGUgPSBfcmVmJGhpZ2hsaWdodFN0eWxlID09PSB1bmRlZmluZWQgPyB7fSA6IF9yZWYkaGlnaGxpZ2h0U3R5bGU7XG5cdCAgdmFyIF9yZWYkaGlnaGxpZ2h0VGFnID0gX3JlZi5oaWdobGlnaHRUYWc7XG5cdCAgdmFyIGhpZ2hsaWdodFRhZyA9IF9yZWYkaGlnaGxpZ2h0VGFnID09PSB1bmRlZmluZWQgPyAnbWFyaycgOiBfcmVmJGhpZ2hsaWdodFRhZztcblx0ICB2YXIgc2FuaXRpemUgPSBfcmVmLnNhbml0aXplO1xuXHQgIHZhciBzZWFyY2hXb3JkcyA9IF9yZWYuc2VhcmNoV29yZHM7XG5cdCAgdmFyIHRleHRUb0hpZ2hsaWdodCA9IF9yZWYudGV4dFRvSGlnaGxpZ2h0O1xuXHQgIHZhciBfcmVmJHVuaGlnaGxpZ2h0Q2xhc3NOYW1lID0gX3JlZi51bmhpZ2hsaWdodENsYXNzTmFtZTtcblx0ICB2YXIgdW5oaWdobGlnaHRDbGFzc05hbWUgPSBfcmVmJHVuaGlnaGxpZ2h0Q2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYkdW5oaWdobGlnaHRDbGFzc05hbWU7XG5cdCAgdmFyIHVuaGlnaGxpZ2h0U3R5bGUgPSBfcmVmLnVuaGlnaGxpZ2h0U3R5bGU7XG5cdFxuXHQgIHZhciBjaHVua3MgPSAoMCwgX2hpZ2hsaWdodFdvcmRzQ29yZS5maW5kQWxsKSh7XG5cdCAgICBhdXRvRXNjYXBlOiBhdXRvRXNjYXBlLFxuXHQgICAgY2FzZVNlbnNpdGl2ZTogY2FzZVNlbnNpdGl2ZSxcblx0ICAgIHNhbml0aXplOiBzYW5pdGl6ZSxcblx0ICAgIHNlYXJjaFdvcmRzOiBzZWFyY2hXb3Jkcyxcblx0ICAgIHRleHRUb0hpZ2hsaWdodDogdGV4dFRvSGlnaGxpZ2h0XG5cdCAgfSk7XG5cdCAgdmFyIEhpZ2hsaWdodFRhZyA9IGhpZ2hsaWdodFRhZztcblx0ICB2YXIgaGlnaGxpZ2h0Q291bnQgPSAtMTtcblx0ICB2YXIgaGlnaGxpZ2h0Q2xhc3NOYW1lcyA9ICcnO1xuXHQgIHZhciBoaWdobGlnaHRTdHlsZXMgPSB1bmRlZmluZWQ7XG5cdFxuXHQgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcblx0ICAgICdzcGFuJyxcblx0ICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0ICAgIGNodW5rcy5tYXAoZnVuY3Rpb24gKGNodW5rLCBpbmRleCkge1xuXHQgICAgICB2YXIgdGV4dCA9IHRleHRUb0hpZ2hsaWdodC5zdWJzdHIoY2h1bmsuc3RhcnQsIGNodW5rLmVuZCAtIGNodW5rLnN0YXJ0KTtcblx0XG5cdCAgICAgIGlmIChjaHVuay5oaWdobGlnaHQpIHtcblx0ICAgICAgICBoaWdobGlnaHRDb3VudCsrO1xuXHRcblx0ICAgICAgICB2YXIgaXNBY3RpdmUgPSBoaWdobGlnaHRDb3VudCA9PT0gK2FjdGl2ZUluZGV4O1xuXHRcblx0ICAgICAgICBoaWdobGlnaHRDbGFzc05hbWVzID0gaGlnaGxpZ2h0Q2xhc3NOYW1lICsgJyAnICsgKGlzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogJycpO1xuXHQgICAgICAgIGhpZ2hsaWdodFN0eWxlcyA9IGlzQWN0aXZlID09PSB0cnVlICYmIGFjdGl2ZVN0eWxlICE9IG51bGwgPyBPYmplY3QuYXNzaWduKHt9LCBoaWdobGlnaHRTdHlsZSwgYWN0aXZlU3R5bGUpIDogaGlnaGxpZ2h0U3R5bGU7XG5cdFxuXHQgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcblx0ICAgICAgICAgIEhpZ2hsaWdodFRhZyxcblx0ICAgICAgICAgIHtcblx0ICAgICAgICAgICAgY2xhc3NOYW1lOiBoaWdobGlnaHRDbGFzc05hbWVzLFxuXHQgICAgICAgICAgICBrZXk6IGluZGV4LFxuXHQgICAgICAgICAgICBzdHlsZTogaGlnaGxpZ2h0U3R5bGVzXG5cdCAgICAgICAgICB9LFxuXHQgICAgICAgICAgdGV4dFxuXHQgICAgICAgICk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuXHQgICAgICAgICAgJ3NwYW4nLFxuXHQgICAgICAgICAge1xuXHQgICAgICAgICAgICBjbGFzc05hbWU6IHVuaGlnaGxpZ2h0Q2xhc3NOYW1lLFxuXHQgICAgICAgICAgICBrZXk6IGluZGV4LFxuXHQgICAgICAgICAgICBzdHlsZTogdW5oaWdobGlnaHRTdHlsZVxuXHQgICAgICAgICAgfSxcblx0ICAgICAgICAgIHRleHRcblx0ICAgICAgICApO1xuXHQgICAgICB9XG5cdCAgICB9KVxuXHQgICk7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9XG5cdC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcblx0LyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG5cdC8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblx0LyoqKioqKi9cblx0LyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuXHQvKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0LyoqKioqKi9cblx0LyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHQvKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG5cdC8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXHQvKioqKioqL1xuXHQvKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0LyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcblx0LyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG5cdC8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcblx0LyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuXHQvKioqKioqLyBcdFx0fTtcblx0LyoqKioqKi9cblx0LyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHQvKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdC8qKioqKiovXG5cdC8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdC8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblx0LyoqKioqKi9cblx0LyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdC8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG5cdC8qKioqKiovIFx0fVxuXHQvKioqKioqL1xuXHQvKioqKioqL1xuXHQvKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5cdC8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblx0LyoqKioqKi9cblx0LyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuXHQvKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cdC8qKioqKiovXG5cdC8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cblx0LyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXHQvKioqKioqL1xuXHQvKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuXHQvKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXHQvKioqKioqLyB9KVxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXHQvKioqKioqLyAoW1xuXHQvKiAwICovXG5cdC8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblx0XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0XG5cdC8qKiovIH0pLFxuXHQvKiAxICovXG5cdC8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblx0XG5cdFx0J3VzZSBzdHJpY3QnO1xuXHRcdFxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHRcdCAgdmFsdWU6IHRydWVcblx0XHR9KTtcblx0XHRcblx0XHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XHRcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NvbWJpbmVDaHVua3MnLCB7XG5cdFx0ICBlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdFx0ICAgIHJldHVybiBfdXRpbHMuY29tYmluZUNodW5rcztcblx0XHQgIH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2ZpbGxJbkNodW5rcycsIHtcblx0XHQgIGVudW1lcmFibGU6IHRydWUsXG5cdFx0ICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0XHQgICAgcmV0dXJuIF91dGlscy5maWxsSW5DaHVua3M7XG5cdFx0ICB9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdmaW5kQWxsJywge1xuXHRcdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0XHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHRcdCAgICByZXR1cm4gX3V0aWxzLmZpbmRBbGw7XG5cdFx0ICB9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdmaW5kQ2h1bmtzJywge1xuXHRcdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0XHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHRcdCAgICByZXR1cm4gX3V0aWxzLmZpbmRDaHVua3M7XG5cdFx0ICB9XG5cdFx0fSk7XG5cdFxuXHQvKioqLyB9KSxcblx0LyogMiAqL1xuXHQvKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cdFxuXHRcdCd1c2Ugc3RyaWN0Jztcblx0XHRcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0XHQgIHZhbHVlOiB0cnVlXG5cdFx0fSk7XG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyBhbiBhcnJheSBvZiBjaHVuayBvYmplY3RzIHJlcHJlc2VudGluZyBib3RoIGhpZ2xpZ2h0YWJsZSBhbmQgbm9uIGhpZ2hsaWdodGFibGUgcGllY2VzIG9mIHRleHQgdGhhdCBtYXRjaCBlYWNoIHNlYXJjaCB3b3JkLlxuXHRcdCAqIEByZXR1cm4gQXJyYXkgb2YgXCJjaHVua3NcIiAod2hlcmUgYSBDaHVuayBpcyB7IHN0YXJ0Om51bWJlciwgZW5kOm51bWJlciwgaGlnaGxpZ2h0OmJvb2xlYW4gfSlcblx0XHQgKi9cblx0XHR2YXIgZmluZEFsbCA9IGV4cG9ydHMuZmluZEFsbCA9IGZ1bmN0aW9uIGZpbmRBbGwoX3JlZikge1xuXHRcdCAgdmFyIGF1dG9Fc2NhcGUgPSBfcmVmLmF1dG9Fc2NhcGUsXG5cdFx0ICAgICAgX3JlZiRjYXNlU2Vuc2l0aXZlID0gX3JlZi5jYXNlU2Vuc2l0aXZlLFxuXHRcdCAgICAgIGNhc2VTZW5zaXRpdmUgPSBfcmVmJGNhc2VTZW5zaXRpdmUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRjYXNlU2Vuc2l0aXZlLFxuXHRcdCAgICAgIHNhbml0aXplID0gX3JlZi5zYW5pdGl6ZSxcblx0XHQgICAgICBzZWFyY2hXb3JkcyA9IF9yZWYuc2VhcmNoV29yZHMsXG5cdFx0ICAgICAgdGV4dFRvSGlnaGxpZ2h0ID0gX3JlZi50ZXh0VG9IaWdobGlnaHQ7XG5cdFx0ICByZXR1cm4gZmlsbEluQ2h1bmtzKHtcblx0XHQgICAgY2h1bmtzVG9IaWdobGlnaHQ6IGNvbWJpbmVDaHVua3Moe1xuXHRcdCAgICAgIGNodW5rczogZmluZENodW5rcyh7XG5cdFx0ICAgICAgICBhdXRvRXNjYXBlOiBhdXRvRXNjYXBlLFxuXHRcdCAgICAgICAgY2FzZVNlbnNpdGl2ZTogY2FzZVNlbnNpdGl2ZSxcblx0XHQgICAgICAgIHNhbml0aXplOiBzYW5pdGl6ZSxcblx0XHQgICAgICAgIHNlYXJjaFdvcmRzOiBzZWFyY2hXb3Jkcyxcblx0XHQgICAgICAgIHRleHRUb0hpZ2hsaWdodDogdGV4dFRvSGlnaGxpZ2h0XG5cdFx0ICAgICAgfSlcblx0XHQgICAgfSksXG5cdFx0ICAgIHRvdGFsTGVuZ3RoOiB0ZXh0VG9IaWdobGlnaHQubGVuZ3RoXG5cdFx0ICB9KTtcblx0XHR9O1xuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFRha2VzIGFuIGFycmF5IG9mIHtzdGFydDpudW1iZXIsIGVuZDpudW1iZXJ9IG9iamVjdHMgYW5kIGNvbWJpbmVzIGNodW5rcyB0aGF0IG92ZXJsYXAgaW50byBzaW5nbGUgY2h1bmtzLlxuXHRcdCAqIEByZXR1cm4ge3N0YXJ0Om51bWJlciwgZW5kOm51bWJlcn1bXVxuXHRcdCAqL1xuXHRcdHZhciBjb21iaW5lQ2h1bmtzID0gZXhwb3J0cy5jb21iaW5lQ2h1bmtzID0gZnVuY3Rpb24gY29tYmluZUNodW5rcyhfcmVmMikge1xuXHRcdCAgdmFyIGNodW5rcyA9IF9yZWYyLmNodW5rcztcblx0XHRcblx0XHQgIGNodW5rcyA9IGNodW5rcy5zb3J0KGZ1bmN0aW9uIChmaXJzdCwgc2Vjb25kKSB7XG5cdFx0ICAgIHJldHVybiBmaXJzdC5zdGFydCAtIHNlY29uZC5zdGFydDtcblx0XHQgIH0pLnJlZHVjZShmdW5jdGlvbiAocHJvY2Vzc2VkQ2h1bmtzLCBuZXh0Q2h1bmspIHtcblx0XHQgICAgLy8gRmlyc3QgY2h1bmsganVzdCBnb2VzIHN0cmFpZ2h0IGluIHRoZSBhcnJheS4uLlxuXHRcdCAgICBpZiAocHJvY2Vzc2VkQ2h1bmtzLmxlbmd0aCA9PT0gMCkge1xuXHRcdCAgICAgIHJldHVybiBbbmV4dENodW5rXTtcblx0XHQgICAgfSBlbHNlIHtcblx0XHQgICAgICAvLyAuLi4gc3Vic2VxdWVudCBjaHVua3MgZ2V0IGNoZWNrZWQgdG8gc2VlIGlmIHRoZXkgb3ZlcmxhcC4uLlxuXHRcdCAgICAgIHZhciBwcmV2Q2h1bmsgPSBwcm9jZXNzZWRDaHVua3MucG9wKCk7XG5cdFx0ICAgICAgaWYgKG5leHRDaHVuay5zdGFydCA8PSBwcmV2Q2h1bmsuZW5kKSB7XG5cdFx0ICAgICAgICAvLyBJdCBtYXkgYmUgdGhlIGNhc2UgdGhhdCBwcmV2Q2h1bmsgY29tcGxldGVseSBzdXJyb3VuZHMgbmV4dENodW5rLCBzbyB0YWtlIHRoZVxuXHRcdCAgICAgICAgLy8gbGFyZ2VzdCBvZiB0aGUgZW5kIGluZGVjZXMuXG5cdFx0ICAgICAgICB2YXIgZW5kSW5kZXggPSBNYXRoLm1heChwcmV2Q2h1bmsuZW5kLCBuZXh0Q2h1bmsuZW5kKTtcblx0XHQgICAgICAgIHByb2Nlc3NlZENodW5rcy5wdXNoKHsgc3RhcnQ6IHByZXZDaHVuay5zdGFydCwgZW5kOiBlbmRJbmRleCB9KTtcblx0XHQgICAgICB9IGVsc2Uge1xuXHRcdCAgICAgICAgcHJvY2Vzc2VkQ2h1bmtzLnB1c2gocHJldkNodW5rLCBuZXh0Q2h1bmspO1xuXHRcdCAgICAgIH1cblx0XHQgICAgICByZXR1cm4gcHJvY2Vzc2VkQ2h1bmtzO1xuXHRcdCAgICB9XG5cdFx0ICB9LCBbXSk7XG5cdFx0XG5cdFx0ICByZXR1cm4gY2h1bmtzO1xuXHRcdH07XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogRXhhbWluZSB0ZXh0IGZvciBhbnkgbWF0Y2hlcy5cblx0XHQgKiBJZiB3ZSBmaW5kIG1hdGNoZXMsIGFkZCB0aGVtIHRvIHRoZSByZXR1cm5lZCBhcnJheSBhcyBhIFwiY2h1bmtcIiBvYmplY3QgKHtzdGFydDpudW1iZXIsIGVuZDpudW1iZXJ9KS5cblx0XHQgKiBAcmV0dXJuIHtzdGFydDpudW1iZXIsIGVuZDpudW1iZXJ9W11cblx0XHQgKi9cblx0XHR2YXIgZmluZENodW5rcyA9IGV4cG9ydHMuZmluZENodW5rcyA9IGZ1bmN0aW9uIGZpbmRDaHVua3MoX3JlZjMpIHtcblx0XHQgIHZhciBhdXRvRXNjYXBlID0gX3JlZjMuYXV0b0VzY2FwZSxcblx0XHQgICAgICBjYXNlU2Vuc2l0aXZlID0gX3JlZjMuY2FzZVNlbnNpdGl2ZSxcblx0XHQgICAgICBfcmVmMyRzYW5pdGl6ZSA9IF9yZWYzLnNhbml0aXplLFxuXHRcdCAgICAgIHNhbml0aXplID0gX3JlZjMkc2FuaXRpemUgPT09IHVuZGVmaW5lZCA/IGlkZW50aXR5IDogX3JlZjMkc2FuaXRpemUsXG5cdFx0ICAgICAgc2VhcmNoV29yZHMgPSBfcmVmMy5zZWFyY2hXb3Jkcyxcblx0XHQgICAgICB0ZXh0VG9IaWdobGlnaHQgPSBfcmVmMy50ZXh0VG9IaWdobGlnaHQ7XG5cdFx0XG5cdFx0ICB0ZXh0VG9IaWdobGlnaHQgPSBzYW5pdGl6ZSh0ZXh0VG9IaWdobGlnaHQpO1xuXHRcdFxuXHRcdCAgcmV0dXJuIHNlYXJjaFdvcmRzLmZpbHRlcihmdW5jdGlvbiAoc2VhcmNoV29yZCkge1xuXHRcdCAgICByZXR1cm4gc2VhcmNoV29yZDtcblx0XHQgIH0pIC8vIFJlbW92ZSBlbXB0eSB3b3Jkc1xuXHRcdCAgLnJlZHVjZShmdW5jdGlvbiAoY2h1bmtzLCBzZWFyY2hXb3JkKSB7XG5cdFx0ICAgIHNlYXJjaFdvcmQgPSBzYW5pdGl6ZShzZWFyY2hXb3JkKTtcblx0XHRcblx0XHQgICAgaWYgKGF1dG9Fc2NhcGUpIHtcblx0XHQgICAgICBzZWFyY2hXb3JkID0gZXNjYXBlUmVnRXhwRm4oc2VhcmNoV29yZCk7XG5cdFx0ICAgIH1cblx0XHRcblx0XHQgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChzZWFyY2hXb3JkLCBjYXNlU2Vuc2l0aXZlID8gJ2cnIDogJ2dpJyk7XG5cdFx0XG5cdFx0ICAgIHZhciBtYXRjaCA9IHZvaWQgMDtcblx0XHQgICAgd2hpbGUgKG1hdGNoID0gcmVnZXguZXhlYyh0ZXh0VG9IaWdobGlnaHQpKSB7XG5cdFx0ICAgICAgY2h1bmtzLnB1c2goe1xuXHRcdCAgICAgICAgc3RhcnQ6IG1hdGNoLmluZGV4LFxuXHRcdCAgICAgICAgZW5kOiByZWdleC5sYXN0SW5kZXhcblx0XHQgICAgICB9KTtcblx0XHQgICAgfVxuXHRcdFxuXHRcdCAgICByZXR1cm4gY2h1bmtzO1xuXHRcdCAgfSwgW10pO1xuXHRcdH07XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogR2l2ZW4gYSBzZXQgb2YgY2h1bmtzIHRvIGhpZ2hsaWdodCwgY3JlYXRlIGFuIGFkZGl0aW9uYWwgc2V0IG9mIGNodW5rc1xuXHRcdCAqIHRvIHJlcHJlc2VudCB0aGUgYml0cyBvZiB0ZXh0IGJldHdlZW4gdGhlIGhpZ2hsaWdodGVkIHRleHQuXG5cdFx0ICogQHBhcmFtIGNodW5rc1RvSGlnaGxpZ2h0IHtzdGFydDpudW1iZXIsIGVuZDpudW1iZXJ9W11cblx0XHQgKiBAcGFyYW0gdG90YWxMZW5ndGggbnVtYmVyXG5cdFx0ICogQHJldHVybiB7c3RhcnQ6bnVtYmVyLCBlbmQ6bnVtYmVyLCBoaWdobGlnaHQ6Ym9vbGVhbn1bXVxuXHRcdCAqL1xuXHRcdHZhciBmaWxsSW5DaHVua3MgPSBleHBvcnRzLmZpbGxJbkNodW5rcyA9IGZ1bmN0aW9uIGZpbGxJbkNodW5rcyhfcmVmNCkge1xuXHRcdCAgdmFyIGNodW5rc1RvSGlnaGxpZ2h0ID0gX3JlZjQuY2h1bmtzVG9IaWdobGlnaHQsXG5cdFx0ICAgICAgdG90YWxMZW5ndGggPSBfcmVmNC50b3RhbExlbmd0aDtcblx0XHRcblx0XHQgIHZhciBhbGxDaHVua3MgPSBbXTtcblx0XHQgIHZhciBhcHBlbmQgPSBmdW5jdGlvbiBhcHBlbmQoc3RhcnQsIGVuZCwgaGlnaGxpZ2h0KSB7XG5cdFx0ICAgIGlmIChlbmQgLSBzdGFydCA+IDApIHtcblx0XHQgICAgICBhbGxDaHVua3MucHVzaCh7XG5cdFx0ICAgICAgICBzdGFydDogc3RhcnQsXG5cdFx0ICAgICAgICBlbmQ6IGVuZCxcblx0XHQgICAgICAgIGhpZ2hsaWdodDogaGlnaGxpZ2h0XG5cdFx0ICAgICAgfSk7XG5cdFx0ICAgIH1cblx0XHQgIH07XG5cdFx0XG5cdFx0ICBpZiAoY2h1bmtzVG9IaWdobGlnaHQubGVuZ3RoID09PSAwKSB7XG5cdFx0ICAgIGFwcGVuZCgwLCB0b3RhbExlbmd0aCwgZmFsc2UpO1xuXHRcdCAgfSBlbHNlIHtcblx0XHQgICAgdmFyIGxhc3RJbmRleCA9IDA7XG5cdFx0ICAgIGNodW5rc1RvSGlnaGxpZ2h0LmZvckVhY2goZnVuY3Rpb24gKGNodW5rKSB7XG5cdFx0ICAgICAgYXBwZW5kKGxhc3RJbmRleCwgY2h1bmsuc3RhcnQsIGZhbHNlKTtcblx0XHQgICAgICBhcHBlbmQoY2h1bmsuc3RhcnQsIGNodW5rLmVuZCwgdHJ1ZSk7XG5cdFx0ICAgICAgbGFzdEluZGV4ID0gY2h1bmsuZW5kO1xuXHRcdCAgICB9KTtcblx0XHQgICAgYXBwZW5kKGxhc3RJbmRleCwgdG90YWxMZW5ndGgsIGZhbHNlKTtcblx0XHQgIH1cblx0XHQgIHJldHVybiBhbGxDaHVua3M7XG5cdFx0fTtcblx0XHRcblx0XHRmdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuXHRcdCAgcmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XHRcblx0XHRmdW5jdGlvbiBlc2NhcGVSZWdFeHBGbihzdHIpIHtcblx0XHQgIHJldHVybiBzdHIucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csICdcXFxcJCYnKTtcblx0XHR9XG5cdFxuXHQvKioqLyB9KVxuXHQvKioqKioqLyBdKTtcblx0Ly8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7LyoqXG5cdCAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuXHQgKlxuXHQgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcblx0ICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXHQgKi9cblx0XG5cdGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG5cdCAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG5cdCAgICBTeW1ib2wuZm9yICYmXG5cdCAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG5cdCAgICAweGVhYzc7XG5cdFxuXHQgIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuXHQgICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG5cdCAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuXHQgICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcblx0ICB9O1xuXHRcblx0ICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cblx0ICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG5cdCAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuXHQgIG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG5cdH0gZWxzZSB7XG5cdCAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cblx0ICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG5cdCAgbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKSgpO1xuXHR9XG5cdFxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyg1KSkpXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXHR2YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cdFxuXHQvLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcblx0Ly8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG5cdC8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcblx0Ly8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblx0XG5cdHZhciBjYWNoZWRTZXRUaW1lb3V0O1xuXHR2YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXHRcblx0ZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xuXHR9XG5cdGZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcblx0fVxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgdHJ5IHtcblx0ICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG5cdCAgICAgICAgfVxuXHQgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuXHQgICAgfVxuXHQgICAgdHJ5IHtcblx0ICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcblx0ICAgICAgICB9XG5cdCAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcblx0ICAgIH1cblx0fSAoKSlcblx0ZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcblx0ICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG5cdCAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG5cdCAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcblx0ICAgIH1cblx0ICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG5cdCAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcblx0ICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcblx0ICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuXHQgICAgfVxuXHQgICAgdHJ5IHtcblx0ICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG5cdCAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcblx0ICAgIH0gY2F0Y2goZSl7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG5cdCAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcblx0ICAgICAgICB9IGNhdGNoKGUpe1xuXHQgICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuXHQgICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHRcblx0XG5cdH1cblx0ZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuXHQgICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG5cdCAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG5cdCAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuXHQgICAgfVxuXHQgICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuXHQgICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG5cdCAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuXHQgICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcblx0ICAgIH1cblx0ICAgIHRyeSB7XG5cdCAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuXHQgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcblx0ICAgIH0gY2F0Y2ggKGUpe1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcblx0ICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG5cdCAgICAgICAgfSBjYXRjaCAoZSl7XG5cdCAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuXHQgICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG5cdCAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0XG5cdFxuXHRcblx0fVxuXHR2YXIgcXVldWUgPSBbXTtcblx0dmFyIGRyYWluaW5nID0gZmFsc2U7XG5cdHZhciBjdXJyZW50UXVldWU7XG5cdHZhciBxdWV1ZUluZGV4ID0gLTE7XG5cdFxuXHRmdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG5cdCAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBkcmFpbmluZyA9IGZhbHNlO1xuXHQgICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcblx0ICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG5cdCAgICB9XG5cdCAgICBpZiAocXVldWUubGVuZ3RoKSB7XG5cdCAgICAgICAgZHJhaW5RdWV1ZSgpO1xuXHQgICAgfVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuXHQgICAgaWYgKGRyYWluaW5nKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG5cdCAgICBkcmFpbmluZyA9IHRydWU7XG5cdFxuXHQgICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcblx0ICAgIHdoaWxlKGxlbikge1xuXHQgICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuXHQgICAgICAgIHF1ZXVlID0gW107XG5cdCAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuXHQgICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG5cdCAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuXHQgICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcblx0ICAgIH1cblx0ICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG5cdCAgICBkcmFpbmluZyA9IGZhbHNlO1xuXHQgICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHR9XG5cdFxuXHRwcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuXHQgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuXHQgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcblx0ICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG5cdCAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcblx0ICAgIH1cblx0fTtcblx0XG5cdC8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcblx0ZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG5cdCAgICB0aGlzLmZ1biA9IGZ1bjtcblx0ICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcblx0fVxuXHRJdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcblx0fTtcblx0cHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcblx0cHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcblx0cHJvY2Vzcy5lbnYgPSB7fTtcblx0cHJvY2Vzcy5hcmd2ID0gW107XG5cdHByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xuXHRwcm9jZXNzLnZlcnNpb25zID0ge307XG5cdFxuXHRmdW5jdGlvbiBub29wKCkge31cblx0XG5cdHByb2Nlc3Mub24gPSBub29wO1xuXHRwcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcblx0cHJvY2Vzcy5vbmNlID0gbm9vcDtcblx0cHJvY2Vzcy5vZmYgPSBub29wO1xuXHRwcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcblx0cHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xuXHRwcm9jZXNzLmVtaXQgPSBub29wO1xuXHRwcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5cdHByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cdFxuXHRwcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cdFxuXHRwcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xuXHR9O1xuXHRcblx0cHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcblx0cHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG5cdH07XG5cdHByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHByb2Nlc3MpIHsvKipcblx0ICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG5cdCAqXG5cdCAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuXHQgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cdCAqL1xuXHRcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIGVtcHR5RnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHR2YXIgaW52YXJpYW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblx0dmFyIHdhcm5pbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgYXNzaWduID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cdFxuXHR2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0dmFyIGNoZWNrUHJvcFR5cGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG5cdCAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuXHQgIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcblx0ICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblx0XG5cdCAgLyoqXG5cdCAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuXHQgICAqXG5cdCAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG5cdCAgICpcblx0ICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuXHQgICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuXHQgICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcblx0ICAgKiAgICAgICAuLi5cblx0ICAgKiAgICAgfVxuXHQgICAqXG5cdCAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG5cdCAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuXHQgICAqL1xuXHQgIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuXHQgICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcblx0ICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICByZXR1cm4gaXRlcmF0b3JGbjtcblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIC8qKlxuXHQgICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG5cdCAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcblx0ICAgKlxuXHQgICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcblx0ICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdCAgICogICAgIHByb3BUeXBlczoge1xuXHQgICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cblx0ICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuXHQgICAqXG5cdCAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuXHQgICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcblx0ICAgKlxuXHQgICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuXHQgICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcblx0ICAgKiAgICAgfSxcblx0ICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cblx0ICAgKiAgIH0pO1xuXHQgICAqXG5cdCAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuXHQgICAqXG5cdCAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG5cdCAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG5cdCAgICpcblx0ICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG5cdCAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuXHQgICAqXG5cdCAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdCAgICogICAgcHJvcFR5cGVzOiB7XG5cdCAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG5cdCAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcblx0ICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG5cdCAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcblx0ICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuXHQgICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcblx0ICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcblx0ICAgKiAgICAgICAgICApO1xuXHQgICAqICAgICAgICB9XG5cdCAgICogICAgICB9XG5cdCAgICogICAgfSxcblx0ICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cblx0ICAgKiAgfSk7XG5cdCAgICpcblx0ICAgKiBAaW50ZXJuYWxcblx0ICAgKi9cblx0XG5cdCAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+Jztcblx0XG5cdCAgLy8gSW1wb3J0YW50IVxuXHQgIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cblx0ICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG5cdCAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG5cdCAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuXHQgICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG5cdCAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcblx0ICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuXHQgICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG5cdCAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblx0XG5cdCAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG5cdCAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG5cdCAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcblx0ICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG5cdCAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuXHQgICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG5cdCAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuXHQgICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuXHQgICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG5cdCAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcblx0ICB9O1xuXHRcblx0ICAvKipcblx0ICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG5cdCAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG5cdCAgICovXG5cdCAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXHQgIGZ1bmN0aW9uIGlzKHgsIHkpIHtcblx0ICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cblx0ICAgIGlmICh4ID09PSB5KSB7XG5cdCAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuXHQgICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuXHQgICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuXHQgICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuXHQgICAgfVxuXHQgIH1cblx0ICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblx0XG5cdCAgLyoqXG5cdCAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuXHQgICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG5cdCAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuXHQgICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcblx0ICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG5cdCAgICovXG5cdCAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG5cdCAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHQgICAgdGhpcy5zdGFjayA9ICcnO1xuXHQgIH1cblx0ICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG5cdCAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cdFxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG5cdCAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuXHQgICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcblx0ICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcblx0ICAgIH1cblx0ICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuXHQgICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG5cdCAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblx0XG5cdCAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG5cdCAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcblx0ICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuXHQgICAgICAgICAgaW52YXJpYW50KFxuXHQgICAgICAgICAgICBmYWxzZSxcblx0ICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuXHQgICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcblx0ICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG5cdCAgICAgICAgICApO1xuXHQgICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuXHQgICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuXHQgICAgICAgICAgaWYgKFxuXHQgICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG5cdCAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuXHQgICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcblx0ICAgICAgICAgICkge1xuXHQgICAgICAgICAgICB3YXJuaW5nKFxuXHQgICAgICAgICAgICAgIGZhbHNlLFxuXHQgICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcblx0ICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJXNgIHByb3Agb24gYCVzYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuXHQgICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG5cdCAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG5cdCAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLicsXG5cdCAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuXHQgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcblx0ICAgICAgICAgICAgKTtcblx0ICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcblx0ICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG5cdCAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcblx0ICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBudWxsO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG5cdCAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblx0XG5cdCAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcblx0ICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcblx0ICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcblx0ICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cblx0ICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG5cdCAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblx0XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuXHQgICAgICB9XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG5cdCAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG5cdCAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0ICAgICAgICAgIHJldHVybiBlcnJvcjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuXHQgICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuXHQgICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG5cdCAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcblx0ICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcblx0ICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcblx0ICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuXHQgICAgfVxuXHRcblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG5cdCAgICAgICAgICByZXR1cm4gbnVsbDtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG5cdCAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuXHQgICAgICB9XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG5cdCAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuXHQgICAgICB9XG5cdCAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcblx0ICAgICAgICBpZiAocHJvcFZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0ICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG5cdCAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZXJyb3I7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuXHQgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG5cdCAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuXHQgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG5cdCAgICB9XG5cdFxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcblx0ICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgd2FybmluZyhcblx0ICAgICAgICAgIGZhbHNlLFxuXHQgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcblx0ICAgICAgICAgICdyZWNlaXZlZCAlcyBhdCBpbmRleCAlcy4nLFxuXHQgICAgICAgICAgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpLFxuXHQgICAgICAgICAgaVxuXHQgICAgICAgICk7XG5cdCAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcblx0ICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG5cdCAgICAgICAgICByZXR1cm4gbnVsbDtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcblx0ICAgICAgfVxuXHQgICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuXHQgICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuXHQgICAgICAgIGlmICghY2hlY2tlcikge1xuXHQgICAgICAgICAgY29udGludWU7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcblx0ICAgICAgICBpZiAoZXJyb3IpIHtcblx0ICAgICAgICAgIHJldHVybiBlcnJvcjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcblx0ICAgICAgfVxuXHQgICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuXHQgICAgICAvLyBwcm9wcy5cblx0ICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG5cdCAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG5cdCAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG5cdCAgICAgICAgaWYgKCFjaGVja2VyKSB7XG5cdCAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG5cdCAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcblx0ICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcblx0ICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG5cdCAgICAgICAgICApO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG5cdCAgICAgICAgaWYgKGVycm9yKSB7XG5cdCAgICAgICAgICByZXR1cm4gZXJyb3I7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHRcblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG5cdCAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcblx0ICAgICAgY2FzZSAnbnVtYmVyJzpcblx0ICAgICAgY2FzZSAnc3RyaW5nJzpcblx0ICAgICAgY2FzZSAndW5kZWZpbmVkJzpcblx0ICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgY2FzZSAnYm9vbGVhbic6XG5cdCAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG5cdCAgICAgIGNhc2UgJ29iamVjdCc6XG5cdCAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuXHQgICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcblx0ICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG5cdCAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcblx0ICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuXHQgICAgICAgICAgdmFyIHN0ZXA7XG5cdCAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcblx0ICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuXHQgICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cblx0ICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuXHQgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG5cdCAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcblx0ICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgZGVmYXVsdDpcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG5cdCAgICAvLyBOYXRpdmUgU3ltYm9sLlxuXHQgICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuXHQgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH1cblx0XG5cdCAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuXHQgICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuXHQgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH1cblx0XG5cdCAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG5cdCAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcblx0ICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICB9XG5cdFxuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblx0XG5cdCAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuXHQgIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuXHQgICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcblx0ICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcblx0ICAgICAgcmV0dXJuICdhcnJheSc7XG5cdCAgICB9XG5cdCAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG5cdCAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cblx0ICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG5cdCAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuXHQgICAgICByZXR1cm4gJ29iamVjdCc7XG5cdCAgICB9XG5cdCAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcblx0ICAgICAgcmV0dXJuICdzeW1ib2wnO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHByb3BUeXBlO1xuXHQgIH1cblx0XG5cdCAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuXHQgIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuXHQgIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuXHQgICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuXHQgICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG5cdCAgICB9XG5cdCAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuXHQgICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuXHQgICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuXHQgICAgICAgIHJldHVybiAnZGF0ZSc7XG5cdCAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG5cdCAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXR1cm4gcHJvcFR5cGU7XG5cdCAgfVxuXHRcblx0ICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG5cdCAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcblx0ICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcblx0ICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuXHQgICAgc3dpdGNoICh0eXBlKSB7XG5cdCAgICAgIGNhc2UgJ2FycmF5Jzpcblx0ICAgICAgY2FzZSAnb2JqZWN0Jzpcblx0ICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuXHQgICAgICBjYXNlICdib29sZWFuJzpcblx0ICAgICAgY2FzZSAnZGF0ZSc6XG5cdCAgICAgIGNhc2UgJ3JlZ2V4cCc6XG5cdCAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuXHQgICAgICBkZWZhdWx0OlxuXHQgICAgICAgIHJldHVybiB0eXBlO1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cblx0ICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG5cdCAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcblx0ICAgICAgcmV0dXJuIEFOT05ZTU9VUztcblx0ICAgIH1cblx0ICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcblx0ICB9XG5cdFxuXHQgIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG5cdCAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cdFxuXHQgIHJldHVybiBSZWFjdFByb3BUeXBlcztcblx0fTtcblx0XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKSlcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFxuXHQvKipcblx0ICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG5cdCAqXG5cdCAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuXHQgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cdCAqXG5cdCAqIFxuXHQgKi9cblx0XG5cdGZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuXHQgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gYXJnO1xuXHQgIH07XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuXHQgKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuXHQgKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuXHQgKi9cblx0dmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cdFxuXHRlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5cdGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcblx0ZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcblx0ZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcblx0ZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG5cdCAgcmV0dXJuIHRoaXM7XG5cdH07XG5cdGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcblx0ICByZXR1cm4gYXJnO1xuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24ocHJvY2Vzcykgey8qKlxuXHQgKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cblx0ICpcblx0ICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG5cdCAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblx0ICpcblx0ICovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuXHQgKlxuXHQgKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuXHQgKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcblx0ICogZXhwZWN0aW5nLlxuXHQgKlxuXHQgKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuXHQgKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG5cdCAqL1xuXHRcblx0dmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblx0XG5cdGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG5cdCAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcblx0ICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG5cdCAgICB9XG5cdCAgfTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG5cdCAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblx0XG5cdCAgaWYgKCFjb25kaXRpb24pIHtcblx0ICAgIHZhciBlcnJvcjtcblx0ICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG5cdCAgICAgIHZhciBhcmdJbmRleCA9IDA7XG5cdCAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG5cdCAgICAgIH0pKTtcblx0ICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcblx0ICAgIH1cblx0XG5cdCAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG5cdCAgICB0aHJvdyBlcnJvcjtcblx0ICB9XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyg1KSkpXG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7LyoqXG5cdCAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuXHQgKlxuXHQgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcblx0ICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXHQgKlxuXHQgKi9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciBlbXB0eUZ1bmN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblx0XG5cdC8qKlxuXHQgKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG5cdCAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcblx0ICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcblx0ICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG5cdCAqL1xuXHRcblx0dmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXHRcblx0aWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcblx0ICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuXHQgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdCAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuXHQgICAgfVxuXHRcblx0ICAgIHZhciBhcmdJbmRleCA9IDA7XG5cdCAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG5cdCAgICB9KTtcblx0ICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcblx0ICAgIH1cblx0ICAgIHRyeSB7XG5cdCAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cblx0ICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG5cdCAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG5cdCAgICB9IGNhdGNoICh4KSB7fVxuXHQgIH07XG5cdFxuXHQgIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG5cdCAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcblx0ICAgIH1cblx0XG5cdCAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG5cdCAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cblx0ICAgIH1cblx0XG5cdCAgICBpZiAoIWNvbmRpdGlvbikge1xuXHQgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG5cdCAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcblx0ICAgIH1cblx0ICB9O1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKSlcblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qXG5cdG9iamVjdC1hc3NpZ25cblx0KGMpIFNpbmRyZSBTb3JodXNcblx0QGxpY2Vuc2UgTUlUXG5cdCovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cdHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXHR2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXHR2YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cdFxuXHRmdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0XHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHRcdH1cblx0XG5cdFx0cmV0dXJuIE9iamVjdCh2YWwpO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXHRcblx0XHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdFx0dmFyIHRlc3QyID0ge307XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcblx0XHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0XHR9KTtcblx0XHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdFx0dmFyIGZyb207XG5cdFx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0XHR2YXIgc3ltYm9scztcblx0XG5cdFx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblx0XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcblx0XHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XG5cdFx0cmV0dXJuIHRvO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG5cdCAqXG5cdCAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuXHQgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cdCAqL1xuXHRcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7LyoqXG5cdCAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuXHQgKlxuXHQgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcblx0ICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXHQgKi9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG5cdCAgdmFyIGludmFyaWFudCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cdCAgdmFyIHdhcm5pbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHQgIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXHQgIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cblx0ICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG5cdCAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRmdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG5cdCAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcblx0ICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcblx0ICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG5cdCAgICAgICAgdmFyIGVycm9yO1xuXHQgICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG5cdCAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuXHQgICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG5cdCAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG5cdCAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ3RoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAlc2AuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pO1xuXHQgICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcblx0ICAgICAgICB9IGNhdGNoIChleCkge1xuXHQgICAgICAgICAgZXJyb3IgPSBleDtcblx0ICAgICAgICB9XG5cdCAgICAgICAgd2FybmluZyghZXJyb3IgfHwgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciwgJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yKTtcblx0ICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuXHQgICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG5cdCAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuXHQgICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblx0XG5cdCAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblx0XG5cdCAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH1cblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcblx0XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKSlcblxuLyoqKi8gfSksXG4vKiAxMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qKlxuXHQgKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cblx0ICpcblx0ICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG5cdCAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblx0ICovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgZW1wdHlGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cdHZhciBpbnZhcmlhbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXHR2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdCAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuXHQgICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcblx0ICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBpbnZhcmlhbnQoXG5cdCAgICAgIGZhbHNlLFxuXHQgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG5cdCAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcblx0ICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG5cdCAgICApO1xuXHQgIH07XG5cdCAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcblx0ICBmdW5jdGlvbiBnZXRTaGltKCkge1xuXHQgICAgcmV0dXJuIHNoaW07XG5cdCAgfTtcblx0ICAvLyBJbXBvcnRhbnQhXG5cdCAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG5cdCAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuXHQgICAgYXJyYXk6IHNoaW0sXG5cdCAgICBib29sOiBzaGltLFxuXHQgICAgZnVuYzogc2hpbSxcblx0ICAgIG51bWJlcjogc2hpbSxcblx0ICAgIG9iamVjdDogc2hpbSxcblx0ICAgIHN0cmluZzogc2hpbSxcblx0ICAgIHN5bWJvbDogc2hpbSxcblx0XG5cdCAgICBhbnk6IHNoaW0sXG5cdCAgICBhcnJheU9mOiBnZXRTaGltLFxuXHQgICAgZWxlbWVudDogc2hpbSxcblx0ICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG5cdCAgICBub2RlOiBzaGltLFxuXHQgICAgb2JqZWN0T2Y6IGdldFNoaW0sXG5cdCAgICBvbmVPZjogZ2V0U2hpbSxcblx0ICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcblx0ICAgIHNoYXBlOiBnZXRTaGltLFxuXHQgICAgZXhhY3Q6IGdldFNoaW1cblx0ICB9O1xuXHRcblx0ICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG5cdCAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cdFxuXHQgIHJldHVybiBSZWFjdFByb3BUeXBlcztcblx0fTtcblxuXG4vKioqLyB9KSxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtaGlnaGxpZ2h0LXdvcmRzL2Rpc3QvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFN1Z2dlc3Rpb25TdWJ0ZXh0ID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgcmV0dXJuIGNoaWxkcmVuID8gPGRpdiBjbGFzc05hbWU9XCJzdWdnZXN0aW9ucy1zdWJ0ZXh0XCI+e2NoaWxkcmVufTwvZGl2PiA6IG51bGw7XG59O1xuXG5cblN1Z2dlc3Rpb25TdWJ0ZXh0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5zdHJpbmdcbn07XG5TdWdnZXN0aW9uU3VidGV4dC5kZWZhdWx0UHJvcHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgU3VnZ2VzdGlvblN1YnRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TdWdnZXN0aW9uU3VidGV4dC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBRdWVyeUlucHV0ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge2xvYWRpbmd9ID0gcHJvcHM7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gYHN1Z2dlc3Rpb25zLWlucHV0JHtsb2FkaW5nID8gJyBsb2FkaW5nJyA6ICcnIH1gO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuICAgICAgICBwbGFjZWhvbGRlciA9IHsgcHJvcHMucGxhY2Vob2xkZXIgfVxuICAgICAgICBvbkNoYW5nZT17IHByb3BzLm9uQ2hhbmdlIH1cbiAgICAgICAgdmFsdWU9eyBwcm9wcy5xdWVyeSB9XG4gICAgICAgIG9uTW91c2VEb3duPXsgcHJvcHMub25Nb3VzZURvd24gfVxuICAgICAgICBvbktleVByZXNzPXsgcHJvcHMub25LZXlQcmVzcyB9XG4gICAgICAgIG9uS2V5RG93bj17IHByb3BzLm9uS2V5UHJlc3MgfVxuICAgICAgICBvbkJsdXI9eyBwcm9wcy5vbkJsdXIgfVxuICAgICAgICBvbkZvY3VzPXsgcHJvcHMub25Gb2N1cyB9XG4gICAgICAgIGF1dG9Db21wbGV0ZT17cHJvcHMuYXV0b2NvbXBsZXRlfVxuICAgICAgICBuYW1lPSdjY25hbWUnXG4gICAgICAvPlxuICAgICk7XG59O1xuXG5RdWVyeUlucHV0LnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Nb3VzZURvd246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uS2V5UHJlc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHF1ZXJ5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGF1dG9jb21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuUXVlcnlJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGxvYWRpbmc6IGZhbHNlLFxuICBwbGFjZWhvbGRlcjogJycsXG4gIGF1dG9jb21wbGV0ZTogJ29mZidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXJ5SW5wdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9RdWVyeUlucHV0LmpzIiwiaW1wb3J0IHtcbiAgRW50ZXJIYW5kbGVyLFxuICBUYWJIYW5kbGVyLFxuICBFc2NhcGVIYW5kbGVyLFxuICBBcnJvd1VwSGFuZGxlcixcbiAgQXJyb3dEb3duSGFuZGxlcixcbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZSkge1xuXG4gIGlmIChlLnNoaWZ0S2V5IHx8IGUuY3RybEtleSB8fCBlLmFsdEtleSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZXJzID0gW1xuICAgIG5ldyBBcnJvd1VwSGFuZGxlcihlLCB0aGlzKSxcbiAgICBuZXcgQXJyb3dEb3duSGFuZGxlcihlLCB0aGlzKSxcbiAgICBuZXcgRW50ZXJIYW5kbGVyKGUsIHRoaXMpLFxuICAgIG5ldyBUYWJIYW5kbGVyKGUsIHRoaXMpLFxuICAgIG5ldyBFc2NhcGVIYW5kbGVyKGUsIHRoaXMpLFxuICBdO1xuXG4gIGhhbmRsZXJzLm1hcChoYW5kbGVyID0+IHtcbiAgICBpZiAoaGFuZGxlci5LRVlfQ09ERSA9PT0gZS53aGljaCkge1xuICAgICAgaGFuZGxlci5oYW5kbGUoKTtcbiAgICB9XG4gIH0pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUtleVByZXNzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oYW5kbGVycy9oYW5kbGVLZXlQcmVzcy5qcyIsImltcG9ydCB7IEVudGVySGFuZGxlciB9IGZyb20gXCIuL2luZGV4XCJcblxuZnVuY3Rpb24gVGFiSGFuZGxlcihlLCBjb250ZXh0KSB7XG5cbiAgY29uc3QgS0VZX0NPREUgPSA5O1xuICBjb25zdCBoYW5kbGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge3Nob3dTdWdnZXN0aW9uc30gPSBjb250ZXh0LnN0YXRlO1xuICAgIGlmIChzaG93U3VnZ2VzdGlvbnMpIHtcbiAgICAgIGNvbnN0IGVudGVySGFuZGxlciA9IG5ldyBFbnRlckhhbmRsZXIoZSwgY29udGV4dCk7XG4gICAgICBlbnRlckhhbmRsZXIuaGFuZGxlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgS0VZX0NPREU6IEtFWV9DT0RFLFxuICAgIGhhbmRsZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYkhhbmRsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hhbmRsZXJzL1RhYkhhbmRsZXIuanMiLCJmdW5jdGlvbiBFbnRlckhhbmRsZXIoZSwgY29udGV4dCkge1xuXG4gIGNvbnN0IEtFWV9DT0RFID0gMTM7XG5cbiAgY29uc3QgaGFuZGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQsIHN1Z2dlc3Rpb25zIH0gPSBjb250ZXh0LnN0YXRlO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoc2VsZWN0ZWQgIT09IC0xKSB7XG4gICAgICBjb250ZXh0LmhhbmRsZVNlbGVjdChzZWxlY3RlZCkoKTtcbiAgICAgIGNvbnRleHQubWFrZUxpc3RJbnZpc2libGUoKTtcbiAgICB9IGVsc2UgaWYgKCEhc3VnZ2VzdGlvbnMgJiYgISFzdWdnZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHsgcXVlcnkgfSA9IGNvbnRleHQuc3RhdGU7XG4gICAgICBjb25zdCB0cmltbWVkUXVlcnkgPSBxdWVyeS50cmltKCk7XG4gICAgICBjb25zdCBpbmRleCA9IHN1Z2dlc3Rpb25zLmZpbmRJbmRleCgoe3ZhbHVlfSkgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHRyaW1tZWRRdWVyeTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb250ZXh0LmhhbmRsZVNlbGVjdChpbmRleCkoKTtcbiAgICAgICAgY29udGV4dC5tYWtlTGlzdEludmlzaWJsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIEtFWV9DT0RFOiBLRVlfQ09ERSxcbiAgICBoYW5kbGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRlckhhbmRsZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlcnMvRW50ZXJIYW5kbGVyLmpzIiwiZnVuY3Rpb24gRXNjYXBlSGFuZGxlcihlLCBjb250ZXh0KSB7XG4gIGNvbnN0IEtFWV9DT0RFID0gMjc7XG4gIGNvbnN0IGhhbmRsZSA9ICgpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29udGV4dC5tYWtlTGlzdEludmlzaWJsZSgpO1xuICB9O1xuICByZXR1cm4ge1xuICAgIEtFWV9DT0RFOiBLRVlfQ09ERSxcbiAgICBoYW5kbGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFc2NhcGVIYW5kbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oYW5kbGVycy9Fc2NhcGVIYW5kbGVyLmpzIiwiZnVuY3Rpb24gQXJyb3dVcEhhbmRsZXIoZSwgY29udGV4dCkge1xuICBjb25zdCBLRVlfQ09ERSA9IDM4O1xuICBjb25zdCBoYW5kbGUgPSAoKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHtzZWxlY3RlZCwgc3VnZ2VzdGlvbnMsIHNob3dTdWdnZXN0aW9uc30gPSBjb250ZXh0LnN0YXRlO1xuICAgIGlmICghc2hvd1N1Z2dlc3Rpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1heFN1Z2dlc3Rpb25JbmRleCA9IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBzZWxlY3RlZCA+IDAgPyBzZWxlY3RlZCAtIDEgOiBtYXhTdWdnZXN0aW9uSW5kZXg7XG4gICAgY29udGV4dC5zZWxlY3RTdWdnZXN0aW9uKG5ld1NlbGVjdGVkKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIEtFWV9DT0RFOiBLRVlfQ09ERSxcbiAgICBoYW5kbGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJvd1VwSGFuZGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlcnMvQXJyb3dVcEhhbmRsZXIuanMiLCJmdW5jdGlvbiBBcnJvd0Rvd25IYW5kbGVyKGUsIGNvbnRleHQpIHtcblxuICBjb25zdCBLRVlfQ09ERSA9IDQwO1xuXG4gIGNvbnN0IGhhbmRsZSA9ICgpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qge3NlbGVjdGVkLCBzdWdnZXN0aW9ucywgc2hvd1N1Z2dlc3Rpb25zfSA9IGNvbnRleHQuc3RhdGU7XG5cbiAgICBpZiAoIXNob3dTdWdnZXN0aW9ucyAmJiAhIXN1Z2dlc3Rpb25zLmxlbmd0aCkge1xuICAgICAgY29udGV4dC5tYWtlTGlzdFZpc2libGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXNob3dTdWdnZXN0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1heFN1Z2dlc3Rpb25JbmRleCA9IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBzZWxlY3RlZCA8IG1heFN1Z2dlc3Rpb25JbmRleCA/IHNlbGVjdGVkICsgMSA6IDA7XG4gICAgY29udGV4dC5zZWxlY3RTdWdnZXN0aW9uKG5ld1NlbGVjdGVkKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIEtFWV9DT0RFOiBLRVlfQ09ERSxcbiAgICBoYW5kbGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJvd0Rvd25IYW5kbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oYW5kbGVycy9BcnJvd0Rvd25IYW5kbGVyLmpzIiwiaW1wb3J0IEFwaSBmcm9tICcuL0FwaSc7XG5pbXBvcnQgeyBoZWFkZXJzRmFjdG9yeSwgcmVxdWVzdEZhY3RvcnlGYWN0b3J5IH0gZnJvbSAnLi9oZWxwZXJzJztcblxuY2xhc3MgRmV0Y2hBcGkgZXh0ZW5kcyBBcGkge1xuXG4gIGNvbnN0cnVjdG9yKGFwaVVybCwgdG9rZW4sIHNlcnZpY2UsIGxvY2F0aW9uID0gdHJ1ZSkge1xuICAgIHN1cGVyKHRva2VuKTtcbiAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzRmFjdG9yeSh0b2tlbik7XG4gICAgdGhpcy5yZXF1ZXN0RmFjdG9yeSA9IHJlcXVlc3RGYWN0b3J5RmFjdG9yeSh0aGlzLmhlYWRlcnMpO1xuICAgIC8vIHRoaXMuZW5kcG9pbnQgPSBgJHthcGlVcmx9LyR7c2VydmljZX1gO1xuICAgIHRoaXMuZW5kcG9pbnQgPSBgJHthcGlVcmx9YDtcbiAgICBpZiAobG9jYXRpb24gJiYgc2VydmljZS50b0xvd2VyQ2FzZSgpID09PSBBcGkuQUREUkVTUykge1xuICAgICAgdGhpcy5kZXRlY3RBZGRyZXNzKCk7XG4gICAgfVxuICB9XG5cbiAgZGV0ZWN0QWRkcmVzcyA9ICgpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke0FwaS5hcGlVcmx9L2RldGVjdEFkZHJlc3NCeUlwYDtcbiAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5yZXF1ZXN0RmFjdG9yeShlbmRwb2ludCwgJ0dFVCcpO1xuXG4gICAgZmV0Y2gocmVxdWVzdClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmxvY2F0aW9uLmRhdGEpXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEgPyBkYXRhLmtsYWRyX2lkIDogbnVsbClcbiAgICAgIC50aGVuKGtsYWRyX2lkID0+IHtcbiAgICAgICAgaWYgKGtsYWRyX2lkKSB7XG4gICAgICAgICAgdGhpcy5sb2NhdGlvbnNfYm9vc3QgPSBbLi4udGhpcy5sb2NhdGlvbnNfYm9vc3QsIHtrbGFkcl9pZH1dXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4gbnVsbCk7IC8vIGp1c3QgZGllXG4gIH07XG5cbiAgc3RhbmRhcmRpemF0aW9ucyA9IChib2R5KSA9PiB7XG4gICAgaWYgKCEhdGhpcy5sb2NhdGlvbnNfYm9vc3QubGVuZ3RoKSB7XG4gICAgICBib2R5LmxvY2F0aW9uc19ib29zdCA9IHRoaXMubG9jYXRpb25zX2Jvb3N0O1xuICAgIH1cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgncXVlcnknLCBib2R5LnF1ZXJ5KTtcblxuICAgICByZXR1cm4gZmV0Y2godGhpcy5lbmRwb2ludCwge21ldGhvZDogJ1BPU1QnLGJvZHk6Zm9ybURhdGF9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZldGNoQXBpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwaS9GZXRjaEFwaS5qcyIsImNsYXNzIEFwaSB7XG4gIHN0YXRpYyBGSU8gPSAnZmlvJztcbiAgc3RhdGljIEFERFJFU1MgPSAnYWRkcmVzcyc7XG4gIHN0YXRpYyBPUkdBTklTQVRJT04gPSAncGFydHknO1xuICBzdGF0aWMgQkFOSyA9ICdiYW5rJztcbiAgc3RhdGljIEVNQUlMID0gJ2VtYWlsJztcbiAgc3RhdGljIE5BTUUgPSAnbmFtZSc7XG5cbiAgY29uc3RydWN0b3IodG9rZW4pIHtcbiAgICB0aGlzLmxvY2F0aW9uc19ib29zdCA9IFtdO1xuICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBpL0FwaS5qcyIsImNvbnN0IGhlYWRlcnMgPSAodG9rZW4pID0+IHtcbiAgcmV0dXJuIG5ldyBIZWFkZXJzKHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ0F1dGhvcml6YXRpb24nOiBgVG9rZW4gJHt0b2tlbn1gLFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlcnM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwaS9oZWxwZXJzL2hlYWRlcnMuanMiLCJjb25zdCByZXF1ZXN0RmFjdG9yeUZhY3RvcnkgPSAoaGVhZGVycykgPT4gKGVuZHBvaW50LCBtZXRob2QsIGJvZHkgPSBudWxsKSA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBlbmRwb2ludCxcbiAgICBtZXRob2QsXG4gICAgaGVhZGVyc1xuICB9O1xuICBpZiAoYm9keSkge1xuICAgIHBhcmFtcy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KGVuZHBvaW50LCBwYXJhbXMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdEZhY3RvcnlGYWN0b3J5O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcGkvaGVscGVycy9yZXF1ZXN0LmpzIiwiY29uc3QgcmVxdWVzdEJvZHkgPSAocXVlcnksIHsgY291bnQsIHNwZWNpYWxSZXF1ZXN0T3B0aW9ucyA9IHt9IH0pID0+IHtcbiAgcmV0dXJuICh7XG4gICAgcXVlcnksXG4gICAgY291bnQsXG4gICAgLi4uc3BlY2lhbFJlcXVlc3RPcHRpb25zXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdEJvZHk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwaS9oZWxwZXJzL3JlcXVlc3RCb2R5LmpzIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBTSE9SVF9UWVBFUyB9IGZyb20gJy4vc2hvcnRUeXBlcyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnN0YW50cy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IFsn0LDQvtCx0LsnLCAn0YDQtdGB0L8nLCAn0LLQuycsICfQsycsICfQs9GB0LonLCAn0LQnLCAn0LTQstC70LQnLCAn0LTQvdC/JywgJ9C00L7RgCcsICfQtNC/JywgJ9C20YInLCAn0LjQvCcsICfQuicsICfQutCyJywgJ9C60LIt0LsnLCAn0LrQvCcsICfQutC+0LzQvScsICfQutC/JywgJ9C70L/RhScsICfQvCcsICfQvNC60YAnLCAn0L3QsNCxJywgJ9C90L8nLCAn0L7QsdC7JywgJ9C+0YQnLCAn0L8nLCAn0L/Qs9GCJywgJ9C/0LXRgCcsICfQv9C7JywgJ9C/0LvQsNGC0YQnLCAn0YDQt9C0JywgJ9GA0L8nLCAn0YAt0L0nLCAn0YEnLCAn0YHQuycsICfRgdC90YInLCAn0YHRgicsICfRgdGC0YAnLCAn0YLQtdGAJywgJ9GC0YPQvycsICfRg9C7JywgJ9GFJywgJ9GIJ107XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnN0YW50cy9zaG9ydFR5cGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
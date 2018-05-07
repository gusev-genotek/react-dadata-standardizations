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
    return _this;
  }

  _createClass(DadataStandardizations, [{
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
    key: 'render',
    value: function render() {
      var _state = this.state,
          loading = _state.loading,
          query = _state.query,
          showSuggestions = _state.showSuggestions,
          standardizations = _state.standardizations,
          selected = _state.selected;

      return _react2.default.createElement(
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

  //handlers:
  onSelect: _propTypes2.default.func.isRequired,
  onChange: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  suggestionsFormatter: _propTypes2.default.func,
  selectedSuggestionFormatter: _propTypes2.default.func
};
DadataStandardizations.defaultProps = {
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
  var _this2 = this;

  this.state = {
    query: '',
    standardizations: [],
    selected: -1,
    loading: false,
    success: false,
    error: false,
    showSuggestions: false
  };

  this.fetchData = function (query) {
    _this2.setState({
      loading: true,
      success: false
    });

    var requestBody = (0, _helpers.buildRequestBody)(query, _this2.props);

    _this2.api.standardizations(requestBody).then(function (standardizations) {
      _this2.setState({
        standardizations: standardizations,
        loading: false,
        error: false,
        success: true,
        showSuggestions: true
      });
    }).catch(function (e) {
      return _this2.handleError(e);
    });
  };

  this.searchWords = function () {
    var query = _this2.state.query;

    var searchWords = query.split(/[^-А-Яа-яЁё\d\w]+/);
    var service = _this2.props.service;

    if (service === _FetchApi2.default.ADDRESS) {
      return searchWords.filter(function (word) {
        return !_index.SHORT_TYPES.includes(word);
      });
    }
    return searchWords;
  };

  this.handleChange = function (e) {
    var query = e.target.value;
    _this2.setState({
      query: query,
      selected: -1
    });

    var minChars = _this2.props.minChars;

    if (query.length >= minChars) {
      _this2.fetchData(query);
    } else {
      _this2.setState({
        standardizations: [],
        showSuggestions: false,
        success: false
      });
    }

    var onChange = _this2.props.onChange;

    if (onChange) {
      onChange(query);
    }
  };

  this.handleBlur = function () {
    _this2.makeListInvisible();
    var onBlur = _this2.props.onBlur;

    if (onBlur) {
      onBlur();
    }
  };

  this.handleError = function (e) {
    _this2.setState({
      error: true,
      loading: false,
      success: false
    });
    var onError = _this2.props.onError;

    if (onError) {
      onError(e);
    }
  };

  this.selectSuggestion = function (index) {
    _this2.setState(function (_ref) {
      var standardizations = _ref.standardizations;

      var selectedSuggestion = standardizations[index];
      var query = _this2.selectedSuggestionFormatter(selectedSuggestion);
      return {
        selected: index,
        query: query
      };
    });
  };

  this.handleSelect = function (index) {
    return function () {
      var selected = _this2.state.selected;

      if (index !== selected) {
        _this2.selectSuggestion(index);
      }
      var selectedSuggestion = _this2.state.standardizations[index];
      var onSelect = _this2.props.onSelect;

      onSelect(selectedSuggestion);
    };
  };

  this.formatter = function (suggestion, name) {
    var customFormatter = _this2.props[name];

    if (customFormatter) {
      return customFormatter(suggestion);
    }
    return suggestion.result;
  };

  this.suggestionsFormatter = function (suggestion) {
    return _this2.formatter(suggestion, 'suggestionsFormatter');
  };

  this.selectedSuggestionFormatter = function (suggestion) {
    return _this2.formatter(suggestion, 'selectedSuggestionFormatter');
  };

  this.subtextFormatter = function (suggestion) {
    var service = _this2.props.service;

    if (service === 'party') {
      return '\u0418\u041D\u041D ' + suggestion.data.inn;
    }
    return null;
  };

  this.makeListVisible = function () {
    var _state2 = _this2.state,
        showSuggestions = _state2.showSuggestions,
        standardizations = _state2.standardizations;

    if (showSuggestions) {
      return;
    }
    _this2.setState({ showSuggestions: !!standardizations.length });
  };

  this.handleFocus = function () {
    var _state3 = _this2.state,
        query = _state3.query,
        success = _state3.success,
        standardizations = _state3.standardizations,
        selected = _state3.selected,
        error = _state3.error;
    var minChars = _this2.props.minChars;


    if (!!standardizations.length && selected === -1) {
      _this2.makeListVisible();
    } else if (query.length >= minChars && !success && !error) {
      _this2.fetchData(query);
    }
  };

  this.makeListInvisible = function () {
    var showSuggestions = _this2.state.showSuggestions;

    if (!showSuggestions) {
      return;
    }
    _this2.setState({ showSuggestions: false });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTBkYTVmMDU3ODQ3Zjk1ODE4MzMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5sZXNzPzcwYWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMubGVzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3VnZ2VzdGlvbnNMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N1Z2dlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3VnZ2VzdGlvblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1oaWdobGlnaHQtd29yZHMvZGlzdC9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N1Z2dlc3Rpb25TdWJ0ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1F1ZXJ5SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXJzL2hhbmRsZUtleVByZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9UYWJIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9FbnRlckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXJzL0VzY2FwZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXJzL0Fycm93VXBIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9BcnJvd0Rvd25IYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvRmV0Y2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9oZWxwZXJzL2hlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9oZWxwZXJzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9oZWxwZXJzL3JlcXVlc3RCb2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9zaG9ydFR5cGVzLmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJEYWRhdGFTdGFuZGFyZGl6YXRpb25zIiwicHJvcHMiLCJhcGlVcmwiLCJ0b2tlbiIsInNlcnZpY2UiLCJnZW9sb2NhdGlvbiIsImFwaSIsImhhbmRsZUtleVByZXNzIiwiYmluZCIsInNldFN0YXRlIiwicXVlcnkiLCJuZXh0UHJvcHMiLCJzdGFuZGFyZGl6YXRpb25zIiwic2hvd1N1Z2dlc3Rpb25zIiwic3VjY2VzcyIsInN0YXRlIiwibG9hZGluZyIsInNlbGVjdGVkIiwiaGFuZGxlQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJtYWtlTGlzdFZpc2libGUiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRm9jdXMiLCJoaW50IiwiaGFuZGxlU2VsZWN0Iiwic3VnZ2VzdGlvbnNGb3JtYXR0ZXIiLCJzZWFyY2hXb3JkcyIsImhpZ2hsaWdodGluZyIsInN1YnRleHRGb3JtYXR0ZXIiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiY291bnQiLCJudW1iZXIiLCJtaW5DaGFycyIsImJvb2wiLCJzcGVjaWFsUmVxdWVzdE9wdGlvbnMiLCJvYmplY3QiLCJvblNlbGVjdCIsImZ1bmMiLCJvbkNoYW5nZSIsIm9uRXJyb3IiLCJvbkJsdXIiLCJzZWxlY3RlZFN1Z2dlc3Rpb25Gb3JtYXR0ZXIiLCJkZWZhdWx0UHJvcHMiLCJlcnJvciIsImZldGNoRGF0YSIsInJlcXVlc3RCb2R5IiwidGhlbiIsImNhdGNoIiwiaGFuZGxlRXJyb3IiLCJlIiwic3BsaXQiLCJBRERSRVNTIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJ3b3JkIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJtYWtlTGlzdEludmlzaWJsZSIsInNlbGVjdFN1Z2dlc3Rpb24iLCJpbmRleCIsInNlbGVjdGVkU3VnZ2VzdGlvbiIsImZvcm1hdHRlciIsInN1Z2dlc3Rpb24iLCJuYW1lIiwiY3VzdG9tRm9ybWF0dGVyIiwicmVzdWx0IiwiZGF0YSIsImlubiIsIlN1Z2dlc3Rpb25zTGlzdCIsInZpc2libGUiLCJtYXAiLCJzdGFuZGFyZGl6YXRpb24iLCJhcnJheSIsIlN1Z2dlc3Rpb24iLCJob3ZlciIsImhhbmRsZUhvdmVyIiwic2V0SG92ZXIiLCJzdWJ0ZXh0Iiwic2VsZWN0ZWRDbGFzcyIsIlN1Z2dlc3Rpb25WYWx1ZSIsIlN1Z2dlc3Rpb25TdWJ0ZXh0IiwiY2hpbGRyZW4iLCJRdWVyeUlucHV0IiwiY2xhc3NOYW1lIiwib25Nb3VzZURvd24iLCJvbktleVByZXNzIiwib25Gb2N1cyIsInNoaWZ0S2V5IiwiY3RybEtleSIsImFsdEtleSIsImhhbmRsZXJzIiwiaGFuZGxlciIsIktFWV9DT0RFIiwid2hpY2giLCJoYW5kbGUiLCJUYWJIYW5kbGVyIiwiY29udGV4dCIsImVudGVySGFuZGxlciIsIkVudGVySGFuZGxlciIsInN1Z2dlc3Rpb25zIiwicHJldmVudERlZmF1bHQiLCJ0cmltbWVkUXVlcnkiLCJ0cmltIiwiZmluZEluZGV4IiwiRXNjYXBlSGFuZGxlciIsIkFycm93VXBIYW5kbGVyIiwibWF4U3VnZ2VzdGlvbkluZGV4IiwibmV3U2VsZWN0ZWQiLCJBcnJvd0Rvd25IYW5kbGVyIiwiRmV0Y2hBcGkiLCJsb2NhdGlvbiIsImRldGVjdEFkZHJlc3MiLCJlbmRwb2ludCIsInJlcXVlc3QiLCJyZXF1ZXN0RmFjdG9yeSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwia2xhZHJfaWQiLCJsb2NhdGlvbnNfYm9vc3QiLCJib2R5IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1ldGhvZCIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiaGVhZGVycyIsInRvTG93ZXJDYXNlIiwiQXBpIiwiRklPIiwiT1JHQU5JU0FUSU9OIiwiQkFOSyIsIkVNQUlMIiwiTkFNRSIsIkhlYWRlcnMiLCJyZXF1ZXN0RmFjdG9yeUZhY3RvcnkiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwiUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxrQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7QUN2THRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQjs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFE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Ozs7Ozs7QUNqUWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDNVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNdUUsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDdEUsS0FBRCxFQUFXO0FBQUEsTUFDekJXLGdCQUR5QixHQUNlWCxLQURmLENBQ3pCVyxnQkFEeUI7QUFBQSxNQUNQNEQsT0FETyxHQUNldkUsS0FEZixDQUNQdUUsT0FETztBQUFBLE1BQ0V2RCxRQURGLEdBQ2VoQixLQURmLENBQ0VnQixRQURGOzs7QUFHakMsTUFBSSxDQUFDLENBQUNMLGlCQUFpQitDLE1BQW5CLElBQTZCYSxPQUFqQyxFQUEwQztBQUN4QyxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUscUJBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHlCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxrQkFBZjtBQUFtQ3ZFLGdCQUFNc0I7QUFBekMsU0FERjtBQUVHWCx5QkFBaUI2RCxHQUFqQixDQUFxQixVQUFDQyxlQUFELEVBQWtCWixLQUFsQjtBQUFBLGlCQUNwQjtBQUNFLGlCQUFNQSxLQURSLENBQ2lCO0FBRGpCLGNBRUUsT0FBUUEsS0FGVjtBQUdFLHNCQUFXQSxVQUFVN0MsUUFIdkI7QUFJRSxzQkFBV2hCLE1BQU1xQyxRQUFOLENBQWV3QixLQUFmLENBSmI7QUFLRSx5QkFBZ0I3RCxNQUFNMEIsWUFBTixHQUFxQjFCLE1BQU15QixXQUFOLEVBQXJCLEdBQTJDLEVBTDdEO0FBTUUsMEJBQWlCekIsTUFBTTBCLFlBTnpCO0FBT0UsbUJBQVUxQixNQUFNd0Isb0JBQU4sQ0FBMkJpRCxlQUEzQixDQVBaO0FBUUUscUJBQVl6RSxNQUFNMkIsZ0JBQU4sQ0FBdUI4QyxlQUF2QjtBQVJkLFlBRG9CO0FBQUEsU0FBckI7QUFGSDtBQURGLEtBREY7QUFtQkQ7QUFDRCxTQUFPLElBQVA7QUFDRCxDQXpCRDs7QUEyQkFILGdCQUFnQjFDLFNBQWhCLEdBQTRCO0FBQzFCakIsb0JBQWtCLG9CQUFVK0QsS0FBVixDQUFnQjVDLFVBRFI7QUFFMUJSLFFBQU0sb0JBQVVPLE1BQVYsQ0FBaUJDLFVBRkc7QUFHMUJ5QyxXQUFTLG9CQUFVckMsSUFBVixDQUFlSixVQUhFO0FBSTFCTix3QkFBc0Isb0JBQVVjLElBQVYsQ0FBZVIsVUFKWDtBQUsxQkgsb0JBQWtCLG9CQUFVVyxJQUFWLENBQWVSLFVBTFA7QUFNMUJMLGVBQWEsb0JBQVVhLElBQVYsQ0FBZVIsVUFORjtBQU8xQkosZ0JBQWMsb0JBQVVRLElBQVYsQ0FBZUo7QUFQSCxDQUE1QjtBQVNBd0MsZ0JBQWdCM0IsWUFBaEIsR0FBK0IsRUFBL0I7O2tCQUdlMkIsZTs7Ozs7Ozs7Ozs7Ozs7O0FDNUNmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUssVTs7Ozs7Ozs7Ozs7Ozs7OExBRUo3RCxLLEdBQVE7QUFDTjhELGFBQU87QUFERCxLLFFBSVJDLFcsR0FBYztBQUFBLGFBQU0sTUFBS0MsUUFBTCxDQUFjLElBQWQsQ0FBTjtBQUFBLEssUUFDZDFELFUsR0FBYTtBQUFBLGFBQU0sTUFBSzBELFFBQUwsQ0FBYyxLQUFkLENBQU47QUFBQSxLLFFBb0JiQSxRLEdBQVcsVUFBQ0YsS0FBRCxFQUFXO0FBQ3BCLFlBQUtwRSxRQUFMLENBQWMsRUFBRW9FLFlBQUYsRUFBZDtBQUNELEs7Ozs7OzZCQXBCUTtBQUFBLG1CQUN5RCxLQUFLNUUsS0FEOUQ7QUFBQSxVQUNDZ0IsUUFERCxVQUNDQSxRQUREO0FBQUEsVUFDV1UsWUFEWCxVQUNXQSxZQURYO0FBQUEsVUFDeUJELFdBRHpCLFVBQ3lCQSxXQUR6QjtBQUFBLFVBQ3NDc0QsT0FEdEMsVUFDc0NBLE9BRHRDO0FBQUEsVUFDK0N0QixLQUQvQyxVQUMrQ0EsS0FEL0M7O0FBRVAsVUFBTXVCLGdCQUFnQmhFLFlBQVksS0FBS0YsS0FBTCxDQUFXOEQsS0FBdkIsR0FBK0IsdUJBQS9CLEdBQXlELEVBQS9FO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRSxnREFBcUNJLGFBRHZDO0FBRUUsd0JBQWUsS0FBS0gsV0FGdEI7QUFHRSx3QkFBZSxLQUFLekQsVUFIdEI7QUFJRSx1QkFBYyxLQUFLcEIsS0FBTCxDQUFXcUM7QUFKM0I7QUFNRSxpRUFDTSxFQUFFWCwwQkFBRixFQUFnQkQsd0JBQWhCLEVBQTZCZ0MsWUFBN0IsRUFETixDQU5GO0FBU0U7QUFBQTtBQUFBO0FBQXFCc0I7QUFBckI7QUFURixPQURGO0FBYUQ7Ozs7OztBQU9ISixXQUFXL0MsU0FBWCxHQUF1QjtBQUNyQlosWUFBVSxvQkFBVWtCLElBQVYsQ0FBZUosVUFESjtBQUVyQjJCLFNBQU8sb0JBQVU1QixNQUFWLENBQWlCQyxVQUZIO0FBR3JCTCxlQUFhLG9CQUFVaUQsS0FBVixDQUFnQjVDLFVBSFI7QUFJckJKLGdCQUFjLG9CQUFVUSxJQUFWLENBQWVKO0FBSlIsQ0FBdkI7QUFNQTZDLFdBQVdoQyxZQUFYLEdBQTBCLEVBQTFCOztrQkFFZWdDLFU7Ozs7Ozs7Ozs7Ozs7QUM3Q2Y7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNTSxrQkFBa0IsU0FBbEJBLGVBQWtCLE9BQXdDO0FBQUEsTUFBdEN2RCxZQUFzQyxRQUF0Q0EsWUFBc0M7QUFBQSxNQUF4QkQsV0FBd0IsUUFBeEJBLFdBQXdCO0FBQUEsTUFBWGdDLEtBQVcsUUFBWEEsS0FBVzs7QUFDOUQsU0FDRTtBQUFBO0FBQUEsTUFBTSxXQUFVLG1CQUFoQjtBQUVJL0IsbUJBQWU7QUFDYjtBQURhLFFBRWIsYUFBY0QsV0FGRDtBQUdiLGtCQUFhLElBSEE7QUFJYix1QkFBa0JnQztBQUpMLE1BQWYsR0FLS0E7QUFQVCxHQURGO0FBWUQsQ0FiRDs7QUFlQXdCLGdCQUFnQnJELFNBQWhCLEdBQTRCO0FBQzFCRixnQkFBYyxvQkFBVVEsSUFBVixDQUFlSixVQURIO0FBRTFCTCxlQUFhLG9CQUFVaUQsS0FGRztBQUcxQmpCLFNBQU8sb0JBQVU1QixNQUFWLENBQWlCQztBQUhFLENBQTVCO0FBS0FtRCxnQkFBZ0J0QyxZQUFoQixHQUErQjtBQUM3QmpCLGdCQUFjO0FBRGUsQ0FBL0I7O2tCQUlldUQsZTs7Ozs7O0FDNUJmO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRix1Q0FBdUMsdUNBQXVDLGtCQUFrQjs7QUFFaEc7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBLHVDQUF1Qyx1Q0FBdUMsa0JBQWtCOztBQUVoRzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sdUJBQXVCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNGQUFzRjs7QUFFdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxRQUFRO0FBQ1I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxrREFBa0QsOENBQThDO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQsY0FBYyx5QkFBeUI7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx3Q0FBd0M7QUFDeEUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4RUFBOEUseUJBQXlCO0FBQ3ZHLGNBQWMseUJBQXlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix5QkFBeUI7QUFDeEQ7QUFDQSxjQUFjLDRDQUE0QztBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsRUFBRTtBQUNyQzs7QUFFQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCOztBQUU3QixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixVQUFVOzs7QUFHdkMsT0FBTztBQUNQO0FBQ0E7O0FBRUEsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCw4QkFBOEI7QUFDOUIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLEtBQUs7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsMkJBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsZ0NBQWdDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixnQ0FBZ0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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LEVBQW1OLEtBQW5OLEVBQTBOLEdBQTFOLEVBQStOLElBQS9OLEVBQXFPLEtBQXJPLEVBQTRPLElBQTVPLEVBQWtQLEtBQWxQLEVBQXlQLEtBQXpQLEVBQWdRLEtBQWhRLEVBQXVRLElBQXZRLEVBQTZRLEdBQTdRLEVBQWtSLEdBQWxSLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMGRhNWYwNTc4NDdmOTU4MTgzMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBoYW5kbGVLZXlQcmVzcyB9IGZyb20gJy4vaGFuZGxlS2V5UHJlc3MnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJIYW5kbGVyIH0gZnJvbSAnLi9UYWJIYW5kbGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW50ZXJIYW5kbGVyIH0gZnJvbSAnLi9FbnRlckhhbmRsZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFc2NhcGVIYW5kbGVyIH0gZnJvbSAnLi9Fc2NhcGVIYW5kbGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXJyb3dVcEhhbmRsZXIgfSBmcm9tICcuL0Fycm93VXBIYW5kbGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXJyb3dEb3duSGFuZGxlciB9IGZyb20gJy4vQXJyb3dEb3duSGFuZGxlcic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlcnMvaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3dhcm5pbmcuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBoZWFkZXJzRmFjdG9yeSB9IGZyb20gJy4vaGVhZGVycyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlcXVlc3RGYWN0b3J5RmFjdG9yeSB9IGZyb20gXCIuL3JlcXVlc3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYnVpbGRSZXF1ZXN0Qm9keSB9IGZyb20gJy4vcmVxdWVzdEJvZHknO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcGkvaGVscGVycy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMubGVzcyc7XG5cbmltcG9ydCBTdWdnZXN0aW9uc0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL1N1Z2dlc3Rpb25zTGlzdCc7XG5pbXBvcnQgUXVlcnlJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvUXVlcnlJbnB1dCc7XG5cbmltcG9ydCB7IGhhbmRsZUtleVByZXNzIH0gZnJvbSAnLi9oYW5kbGVycyc7XG5cbmltcG9ydCBBcGkgZnJvbSAnLi9hcGkvRmV0Y2hBcGknO1xuaW1wb3J0IHsgYnVpbGRSZXF1ZXN0Qm9keSB9IGZyb20gXCIuL2FwaS9oZWxwZXJzXCI7XG5pbXBvcnQgeyBTSE9SVF9UWVBFUyB9IGZyb20gXCIuL2NvbnN0YW50cy9pbmRleFwiO1xuXG5jbGFzcyBEYWRhdGFTdGFuZGFyZGl6YXRpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRva2VuOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAvL2RlZmVyUmVxdWVzdEJ5OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsIC8vIGRvZXNuJ3Qgd29yayB3aXRoIGZldGNoIEFwaVxuICAgIGhpbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBtaW5DaGFyczogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGdlb2xvY2F0aW9uOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHF1ZXJ5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc2VydmljZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGhpZ2hsaWdodGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBzcGVjaWFsUmVxdWVzdE9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvL2hhbmRsZXJzOlxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkVycm9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHN1Z2dlc3Rpb25zRm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzZWxlY3RlZFN1Z2dlc3Rpb25Gb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdG9rZW46ICcnLFxuICAgIGNvdW50OiAxMCxcbiAgICAvL2RlZmVyUmVxdWVzdEJ5OiAzMDAsXG4gICAgbWluQ2hhcnM6IDMsXG4gICAgZ2VvbG9jYXRpb246IHRydWUsXG4gICAgaGludDogJ9CS0YvQsdC10YDQuNGC0LUg0LLQsNGA0LjQsNC90YIg0L3QuNC20LUg0LjQu9C4INC/0YDQvtC00L7Qu9C20LjRgtC1INCy0LLQvtC0JyxcbiAgICBxdWVyeTogJycsXG4gICAgc2VydmljZTogJ2FkZHJlc3MnLFxuICAgIGhpZ2hsaWdodGluZzogdHJ1ZSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7YXBpVXJsLCB0b2tlbiwgc2VydmljZSwgZ2VvbG9jYXRpb259ID0gcHJvcHM7XG4gICAgdGhpcy5hcGkgPSBuZXcgQXBpKGFwaVVybCwgdG9rZW4sIHNlcnZpY2UsIGdlb2xvY2F0aW9uKTtcbiAgICB0aGlzLmhhbmRsZUtleVByZXNzID0gaGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHF1ZXJ5OiAnJyxcbiAgICBzdGFuZGFyZGl6YXRpb25zOiBbXSxcbiAgICBzZWxlY3RlZDogLTEsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIHNob3dTdWdnZXN0aW9uczogZmFsc2VcbiAgfTtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHF1ZXJ5OiB0aGlzLnByb3BzLnF1ZXJ5IH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHF1ZXJ5OiBuZXh0UHJvcHMucXVlcnksXG4gICAgICBzdGFuZGFyZGl6YXRpb25zOiBbXSxcbiAgICAgIHNob3dTdWdnZXN0aW9uczogZmFsc2UsXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIGZldGNoRGF0YSA9IChxdWVyeSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSBidWlsZFJlcXVlc3RCb2R5KHF1ZXJ5LCB0aGlzLnByb3BzKTtcblxuICAgIHRoaXMuYXBpLnN0YW5kYXJkaXphdGlvbnMocmVxdWVzdEJvZHkpXG4gICAgICAudGhlbihzdGFuZGFyZGl6YXRpb25zID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3RhbmRhcmRpemF0aW9ucyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICBzaG93U3VnZ2VzdGlvbnM6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlID0+IHRoaXMuaGFuZGxlRXJyb3IoZSkpO1xuICB9O1xuXG4gIHNlYXJjaFdvcmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VhcmNoV29yZHMgPSBxdWVyeS5zcGxpdCgvW14t0JAt0K/QsC3Rj9CB0ZFcXGRcXHddKy8pO1xuICAgIGNvbnN0IHsgc2VydmljZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc2VydmljZSA9PT0gQXBpLkFERFJFU1MpIHtcbiAgICAgIHJldHVybiBzZWFyY2hXb3Jkcy5maWx0ZXIod29yZCA9PiAhU0hPUlRfVFlQRVMuaW5jbHVkZXMod29yZCkpO1xuICAgIH1cbiAgICByZXR1cm4gc2VhcmNoV29yZHM7XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBxdWVyeSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcXVlcnksXG4gICAgICBzZWxlY3RlZDogLTFcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgbWluQ2hhcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHF1ZXJ5Lmxlbmd0aCA+PSBtaW5DaGFycykge1xuICAgICAgdGhpcy5mZXRjaERhdGEocXVlcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3RhbmRhcmRpemF0aW9uczogW10sXG4gICAgICAgIHNob3dTdWdnZXN0aW9uczogZmFsc2UsXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKHF1ZXJ5KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICB0aGlzLm1ha2VMaXN0SW52aXNpYmxlKCk7XG4gICAgY29uc3QgeyBvbkJsdXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG9uQmx1cikge1xuICAgICAgb25CbHVyKCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUVycm9yID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IG9uRXJyb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgIG9uRXJyb3IoZSk7XG4gICAgfVxuICB9O1xuXG4gIHNlbGVjdFN1Z2dlc3Rpb24gPSAoaW5kZXgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKCh7c3RhbmRhcmRpemF0aW9uc30pID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkU3VnZ2VzdGlvbiA9IHN0YW5kYXJkaXphdGlvbnNbaW5kZXhdO1xuICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLnNlbGVjdGVkU3VnZ2VzdGlvbkZvcm1hdHRlcihzZWxlY3RlZFN1Z2dlc3Rpb24pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0ZWQ6IGluZGV4LFxuICAgICAgICBxdWVyeVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNlbGVjdCA9IChpbmRleCkgPT4gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKGluZGV4ICE9PSBzZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3RTdWdnZXN0aW9uKGluZGV4KTtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0ZWRTdWdnZXN0aW9uID0gdGhpcy5zdGF0ZS5zdGFuZGFyZGl6YXRpb25zW2luZGV4XTtcbiAgICBjb25zdCB7IG9uU2VsZWN0IH0gPSB0aGlzLnByb3BzO1xuICAgIG9uU2VsZWN0KHNlbGVjdGVkU3VnZ2VzdGlvbilcbiAgfTtcblxuICBmb3JtYXR0ZXIgPSAoc3VnZ2VzdGlvbiwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IHsgW25hbWVdOiBjdXN0b21Gb3JtYXR0ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGN1c3RvbUZvcm1hdHRlcikge1xuICAgICAgcmV0dXJuIGN1c3RvbUZvcm1hdHRlcihzdWdnZXN0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1Z2dlc3Rpb24ucmVzdWx0O1xuICB9O1xuXG4gIHN1Z2dlc3Rpb25zRm9ybWF0dGVyID0gKHN1Z2dlc3Rpb24pID0+IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZXIoc3VnZ2VzdGlvbiwgJ3N1Z2dlc3Rpb25zRm9ybWF0dGVyJylcbiAgfTtcblxuICBzZWxlY3RlZFN1Z2dlc3Rpb25Gb3JtYXR0ZXIgPSAoc3VnZ2VzdGlvbikgPT4ge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdHRlcihzdWdnZXN0aW9uLCAnc2VsZWN0ZWRTdWdnZXN0aW9uRm9ybWF0dGVyJylcbiAgfTtcblxuICBzdWJ0ZXh0Rm9ybWF0dGVyID0gKHN1Z2dlc3Rpb24pID0+IHtcbiAgICBjb25zdCB7IHNlcnZpY2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHNlcnZpY2UgPT09ICdwYXJ0eScpIHtcbiAgICAgIHJldHVybiBg0JjQndCdICR7c3VnZ2VzdGlvbi5kYXRhLmlubn1gO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBtYWtlTGlzdFZpc2libGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93U3VnZ2VzdGlvbnMsIHN0YW5kYXJkaXphdGlvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNob3dTdWdnZXN0aW9ucykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dTdWdnZXN0aW9uczogISFzdGFuZGFyZGl6YXRpb25zLmxlbmd0aH0pO1xuICB9O1xuXG4gIGhhbmRsZUZvY3VzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcnksIHN1Y2Nlc3MsIHN0YW5kYXJkaXphdGlvbnMsIHNlbGVjdGVkLCBlcnJvciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IG1pbkNoYXJzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCEhc3RhbmRhcmRpemF0aW9ucy5sZW5ndGggJiYgc2VsZWN0ZWQgPT09IC0xKSB7XG4gICAgICB0aGlzLm1ha2VMaXN0VmlzaWJsZSgpO1xuICAgIH0gZWxzZSBpZiAocXVlcnkubGVuZ3RoID49IG1pbkNoYXJzICYmICFzdWNjZXNzICYmICFlcnJvcikge1xuICAgICAgdGhpcy5mZXRjaERhdGEocXVlcnkpO1xuICAgIH1cbiAgfTtcblxuICBtYWtlTGlzdEludmlzaWJsZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNob3dTdWdnZXN0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoIXNob3dTdWdnZXN0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtzaG93U3VnZ2VzdGlvbnM6IGZhbHNlfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtsb2FkaW5nLCBxdWVyeSwgc2hvd1N1Z2dlc3Rpb25zLCBzdGFuZGFyZGl6YXRpb25zLCBzZWxlY3RlZH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Z2dlc3Rpb25zLWNvbnRhaW5lclwiPlxuICAgICAgICA8UXVlcnlJbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5oYW5kbGVDaGFuZ2UgfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXsgdGhpcy5wcm9wcy5wbGFjZWhvbGRlciB9XG4gICAgICAgICAgbG9hZGluZz17IGxvYWRpbmcgfVxuICAgICAgICAgIHF1ZXJ5PXsgcXVlcnkgfVxuICAgICAgICAgIG9uTW91c2VEb3duPXsgdGhpcy5tYWtlTGlzdFZpc2libGUgfVxuICAgICAgICAgIG9uS2V5UHJlc3M9eyB0aGlzLmhhbmRsZUtleVByZXNzIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLmhhbmRsZUJsdXIgfVxuICAgICAgICAgIG9uRm9jdXM9eyB0aGlzLmhhbmRsZUZvY3VzIH1cbiAgICAgICAgLz5cblxuICAgICAgICA8U3VnZ2VzdGlvbnNMaXN0XG4gICAgICAgICAgc3RhbmRhcmRpemF0aW9ucz17IHN0YW5kYXJkaXphdGlvbnMgfVxuICAgICAgICAgIGhpbnQ9eyB0aGlzLnByb3BzLmhpbnQgfVxuICAgICAgICAgIHZpc2libGU9eyBzaG93U3VnZ2VzdGlvbnMgfVxuICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLmhhbmRsZVNlbGVjdH1cbiAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgc3VnZ2VzdGlvbnNGb3JtYXR0ZXI9e3RoaXMuc3VnZ2VzdGlvbnNGb3JtYXR0ZXJ9XG4gICAgICAgICAgc2VhcmNoV29yZHM9eyB0aGlzLnNlYXJjaFdvcmRzIH1cbiAgICAgICAgICBoaWdobGlnaHRpbmcgPSB7IHRoaXMucHJvcHMuaGlnaGxpZ2h0aW5nIH1cbiAgICAgICAgICBzdWJ0ZXh0Rm9ybWF0dGVyID0geyB0aGlzLnN1YnRleHRGb3JtYXR0ZXIgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYWRhdGFTdGFuZGFyZGl6YXRpb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIGludmFyaWFudChcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJXNgIHByb3Agb24gYCVzYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLicsXG4gICAgICAgICAgICAgIHByb3BGdWxsTmFtZSxcbiAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICVzIGF0IGluZGV4ICVzLicsXG4gICAgICAgICAgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpLFxuICAgICAgICAgIGlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG4gIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAndGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCVzYC4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSk7XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5sZXNzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMubGVzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3N0eWxlcy5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdWdnZXN0aW9ucy1ub3dyYXB7d2hpdGUtc3BhY2U6bm93cmFwfS5zdWdnZXN0aW9ucy1pbnB1dHstbXMtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMDAlfS5zdWdnZXN0aW9ucy1pbnB1dC5sb2FkaW5ne2JhY2tncm91bmQ6aHNsYSgwLDAlLDEwMCUsLjc1KSB1cmwoXFxcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEVBQVFBS1VBQUJ3YUhJeU9qTXpLek9UbTVMU3l0RnhhWEhSMmRKeWVuTnphM1BUMjlMeSt2SVNHaEVSR1JKU1dsTlRTMU96dTdMeTZ2R1JtWkh4K2ZLU21wT1RpNVB6Ky9NVEd4RFF5TkpTU2xNek96T3pxN0xTMnRIeDZmTnplM1B6Ni9NVEN4SXlLakV4S1RKeWFuTlRXMVBUeTlHeHFiS3lxclAvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDSC9DMDVGVkZORFFWQkZNaTR3QXdFQUFBQWgrUVFKQ1FBbkFDd0FBQUFBRUFBUUFBQUdrOENUY0hnU0hZaklVOGRBT29GQXB3ZkRrZlFZSnFjRmRCRktFQ2xlUzRtQ2FTQXVtMU1pSXdRRkhCV1RSdGdKeEM4WFlZSWdnU1FsQUJ3UFJBT0RTQjBqUXhZS0VCOUpRaVVGQlFhTENvNlBFWklHUXlSZVNDUk5ReDRaQklsSURnUU9Ia0lRRUJRVkk1NGtJeFVVRzM1UnF4UUVKQmtPSkFRREp4NkdRaDRiaVFKc0dSQ3JTQS9OSjhyREc4V1BJNlpJUVFBaCtRUUpDUUFyQUN3QUFBQUFFQUFRQUlVRUFnU0Vnb1RFd3NUazR1U2tvcVJFUmtSa1ltVFUwdFQwOHZTVWxwUzBzclJzYm13Y0hoeU1pb3pNeXN6czZ1eXNxcXhjWGx6YzJ0ejgrdnhNVGt5Y25weTh1cngwZG5RY0doeUVob1RFeHNUazV1U2twcVJNU2t4c2FtelUxdFQwOXZTY21weTB0clIwY25RME1qU01qb3pNenN6czd1eXNycXpjM3R6OC92ei8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUdrOENWY0xpQ29JakkxYUFFV29WQ3ExTkVrcHcwUktzRU5HRm9EaCtUbFNtd0lYQUdIY0VLZEJBU0NCK1Y1U1FjVkZTS1FrY0lFb1EwU1NVa0dRaEVKNFZJQXlsREh5WU9iVWtyRng0ZUFSOE9KcEJKazVWRENGNUVFcG9yRXlZS0gwa2pBQXQwS3hZV0F5b2ZYZ2h4QkJnTVFpZGhBd29JbVFnS0F5c0lnRU1USXFpWVloWmhTQ2ZOSzh2SXJaRXJINmhKUVFBaCtRUUpDUUFrQUN3QUFBQUFFQUFRQUlVRUFnU0Vob1RFeHNUazV1Uk1Ua3lrcHFUVTF0UnNhbXowOXZTMHRyUjBkblNjbXB6TXpzenM3dXpjM3R3ME1qUmNYbHkwc3JUOC92eTh2cng4Zm53Y0doeVVrcFRNeXN6czZ1eXNxcXpjMnR4MGNuVDgrdnk4dXJ4OGVueWtvcVRVMHRUMDh2VGs0dVJrWm1ULy8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUdrRUNTY0VoS2RJaEkwcUNBSUdVeXBKRENrZVI4QkU3b1I4RWhOcnFhUlNNU0VZMHVKSVJCMk9tSUpJS1FjSkNSVENBUUlZZVJXQ01YQkF0eVF5Rk5TQ0lpUXdZTUZ5QkpRZ0VlSGhZR0Z3eU9qd0VLazRTR1JBNStlZ3dSb1VNVUZSNE5iRzRTQm9ZYUd4SVpEdzlDWHlRaUVTR1hEQUFGYVF4RUhIMGtsaVFIRlo1RERSMWR4aGdWV0k5Q0JxVkRRUUFoK1FRSkNRQW1BQ3dBQUFBQUVBQVFBSVVjR2h5TWpvek15c3hVVmxUazV1U3NycXgwY25UMDl2Uzh2cnpjM3R5RWdvU2NucHhFUmtUVTB0VHM3dXkwdHJSa1ptUjhmbno4L3Z6RXhzU01pb3lrcHFRME1qU1VscFRNenN4Y1dsenM2dXkwc3JSMGRuVDgrdnpFd3NUazR1U0Vob1JNU2t6VTF0VDA4dlM4dXJ5c3Fxei8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBR2prQ1RjR2lhQ0loSWs0UFVNWkVRcGhIbGsrdzhHazdvSnRBY09wcUV6UWd4SVVTd2g0U1FSUHBJUkFlaGhpU1pjRGpDRHVZaFNwWWdKU05FSTNGSUdsUkNJaGdDV0VrbUZ4UVVDeUlDR0kxSmtDQUxRNFJKSDJwRGVodDlTQlFXSUlKT2JXK0ZDUW9TRHlFTVFsOG1IMklRRUNJQUJTWUhseVpXZlFNWkpod1doVVJMVGNSS0ZoaU9Rd1o0U1VFQUlma0VDUWtBS1FBc0FBQUFBQkFBRUFDRkJBSUVoSUtFeE1MRTVPTGtSRVpFcEtLa1pHWmsxTkxVOVBMMHRMSzBkSFowWEY1Y25KcWN6TXJNN09yc2JHNXMzTnJjL1ByOHZMcThOREkwakk2TVRFNU1ySzZzSEJvY2hJYUV4TWJFNU9ia1RFcE1wS2FrYkdwczFOYlU5UGIwdExhMGZINThaR0prek03TTdPN3NkSEowM043Yy9QNzh2TDY4Ly8vL0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCcERBbEhDWThuaUl5QlJKRWtrMVJxbFB3WkdNZ0E1T3FJRFRISkthbWdSaWRIQXdqcEdCVUNJWm5Ed2ZJU2x6T2xBb3dzZ0lkRVJLUWdseFF3aUNSQTVVUWg0akRWaEpLUVVNREJZZVQ0MUprSktEaFVNREprUjZDWDFFREJVTUNHdHRKeVdlS1FNVUp5Z0xJbkpOQlFBSEpRb1FFeUFwRWFJcENCY1BLUVlkS1JnYm0wSVpGMVRHU2dTV2ppRUJqa0VBSWZrRUNRa0FKZ0FzQUFBQUFCQUFFQUNGQkFJRWhJS0V4TUxFNU9Ma3BLS2tURTVNMU5MVTlQTDBsSktVWkdaa3RMSzB6TXJNN09yczNOcmMvUHI4bkpxY2RIWjBOREkwakk2TXJLcXNYRjVjSEJvY2hJYUV4TWJFNU9ia3BLYWsxTmJVOVBiMGxKYVViR3BzdkxxOHpNN003TzdzM043Yy9QNzhuSjZjZkhwOFpHSmsvLy8vQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJwUkFrM0JvMG1pSVNCUEk0ekF0UGlhSEI1U1VHcHpRRDVNSWFvWVVoNDhCcE1CRXpTYVBCeVBTYklRSGphaEJ5QWdkSDhVUmVYa0kza01IZ0VRSFZFSWFId3RYU1NZS0V4TWVHaytMU1FvWmtFTUdEVWtZYUVJTUhRQVFTUk1KR1FkQ0ZSVVpEZ0VoUWhnaklnc1FveVlYYnhNVkdoWVdBd1VDSmh1dlF4c1JveEFrSmdnbGcwTUxFVlRKU2hTYmpFSVNDSXhCQUNINUJBa0pBQ2tBTEFBQUFBQVFBQkFBaFJ3YUhJeU9qTXpLekZ4YVhLeXVyT1RtNUhSMmRKeWVuTHkrdlBUMjlOemUzRFEyTklTQ2hKU1dsTlRTMUd4cWJMUzJ0T3p1N0t5cXJNVEd4UHorL0VSR1JJeUtqRFF5TkpTU2xNek96R1JtWkxTeXRPenE3SHg2ZktTaXBNVEN4UHo2L09UaTVJU0doSnlhbk5UVzFIUnlkTHk2dlBUeTlFeEtUUC8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBYVR3SlJ3bUNLUmlNaFV4QVJLQ1RJcGtDbVNCRUVjVG1pR1NZdzBDNXRUeG5IYWhLTFVsTWtVb3BBU3doT0pFb0tZaEtBTTVJaDBYSnRESjNCSUp5ZERKUU1ERDBsQ0h3Z21FNGdER293cGpnZ1RReVFLU1JFRlhSMEFERWtRREJ1REZ4Y1NGQUZuS1J5ckRoWUJRZ0p3R3dzS0dBMGhHZ0lwQ2E1Q0NSVVdLU0xHSGdhQVJBNFZoc2dwSndhY2xTa2pCNHhCQUNINUJBa0pBQ2dBTEFBQUFBQVFBQkFBaFFRQ0JJU0NoTVRHeEtTaXBPVG01RVJHUkxTeXRHeHFiSlNTbE5UVzFQVDI5SXlLak16T3pLeXFyT3p1N0Z4ZVhMeTZ2SFIyZERReU5FeE9USnlhbk9UaTVQeisvSHgrZkJ3YUhJU0doTXpLektTbXBPenE3RXhLVExTMnROemEzUHo2L0l5T2pOVFMxS3l1clBUeTlMeSt2SHg2Zkp5ZW5QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBYVRRSlJ3aUVva2lFaVVBd0pDYVJnb0VNU1JCSGxFVGlpRFNSUW9VQlVEaVNFaUdTcFJLZ3FEMlZnU1h4UXBZYWw0SUVMT0FSQkppcTVOUXlJZlNTUWtRd0VIQjMxSktDSU1HZ2tYaW94K2tFZENIMmhJRG1wQ0Roa1NDRWtDRkY1Q0hSMGVGaWNFbnhBV0h3TWJRaUpmSlJNVkF3TUVGMWdncmtNS0R4UW9DQ2NvQmlHQlJBa1BoeFRGQ2d1YmpTZ05JNDFCQUNINUJBa0pBQ29BTEFBQUFBQVFBQkFBaFFRQ0JJU0NoTVRDeE9UaTVLU2lwRXhPVE5UUzFQVHk5TFN5dEdSbVpKU1dsSFJ5ZEN3dUxNekt6T3pxN0t5cXJOemEzUHo2L0x5NnZJeU9qRnhlWEp5ZW5IeDZmQndhSElTR2hNVEd4T1RtNUtTbXBOVFcxUFQyOUxTMnRHeHViSnlhbkhSMmREUXlOTXpPek96dTdLeXVyTnplM1B6Ky9MeSt2R1JpWlAvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBYVJRSlZ3cU9Kd2lFaFY1dUpRTlVhcWlJU1VQRncrVHVoSUVpRTJPaW9Dd0RBeUhCQ0RLRlhGRUpWT0M1UHd3RGtOUEJJaHlYSUpKQTBlQmwxREhISklCd2RERXhZV0dFbENaQTBjaXlHT2p3WlBSMEltR2xXSlF3Y0tCUlZKSEFpQ1FoUXBLQ2NQVFNva0RYWjRRaHhkR1FrYUNBZ2tJQkJxUkIwTEd5b1BEeW9vRzRORUppR0p4aW9kRzYrUEtyUkpRUUFoK1FRSkNRQW5BQ3dBQUFBQUVBQVFBSVVjR2h5TWpvek15c3prNXVSVVZsU3NycXgwY25UYzJ0ejA5dlM4dnJ5RWdvU2NucHhFUmtUVTB0VHM3dXkwdHJSa1ptUjhlbnprNHVUOC92ekV4c1NNaW95a3BxUTBNalNVbHBUTXpzenM2dXhjV2x5MHNyUjBkblRjM3R6OCt2ekV3c1NFaG9STVNrelUxdFQwOHZTOHVyeXNxcXovLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBR2tNQ1RjSGd5ZElqSWsrRGlPQkUycDArcGlVUmNJazVvcHZRaE5oQW5FMkFFZ1pBNGd5aVZJWHBNRkI0aFlqU1JsRXBDUitnU1NEWTRHVjFEQnhKSkNDUkRDeFVWR0VsQ0RSa0NJNHFNamljTkFoa2pReElhU1NSVVFpUVdFQVZKSXh3TmdoMEdBaE5Ub25RU0QzZ25IbUFaQ2dNZ0lBNGNoUk9oVVJVUEp5VUpsMXhKRWhWZ3h5Y0lzSlluRkFLT1FRQWgrUVFKQ1FBcEFDd0FBQUFBRUFBUUFJVUVBZ1NFZ29URXhzVGs1dVJFUmtTa29xUmtabVRVMXRTVWxwVDA5dlMwc3JSY1hseDBkblNNaW96TXpzenM3dXpjM3R3ME5qUk1Ua3lzcXF4MGNuU2NucHo4L3Z5OHVyd2NHaHlFaG9UTXlzenM2dXhNU2t5a3BxUnNhbXpjMnR5Y21wejgrdnhrWW1SOGZueU1qb3pVMHRUMDh2VGs0dVM4dnJ6Ly8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFHajhDVWNKZ0tCSWpJVklsZ1NoazhxUTFHa0V3UUdrNm9BWk1nSGtJcFJlUkRZWlFBblpUbElWeUlVQmJTU2ZoaFdFNlhpOUNFNEZTU0pRb09ZRU1RQTBrbVhVSVRJQ0JwU1VvT0dnZU1qcEJLR2c0SFF3TnNTQ2FlUWdrS0FYcElnU1dFRFNRT0ZocWVKZ2QzZVVJbllCOGdEeVVsRHdxSElhRXBJUlZVR2hvcERoZUVSQU1kWUpuQ0Y4R0FtMGxCQUNINUJBa0pBQ2dBTEFBQUFBQVFBQkFBaFFRQ0JJU0NoTVRDeE9UaTVLU2lwRXhPVE5UUzFQVHk5TFN5dEdSbVpKU1NsSFJ5ZEJ3ZUhNekt6T3pxN0t5cXJOemEzUHo2L0l5T2pMeTZ2Snlhbkh4NmZCd2FISVNHaE1UR3hPVG01S1NtcEZ4ZVhOVFcxUFQyOUd4dWJIUjJkRFF5Tk16T3pPenU3S3l1ck56ZTNQeisvTHkrdkp5ZW5QLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBYVdRSlJ3aUpJb2lFZ1VaM05BZlNvb0VTaVU3R3dvVHVnSDFDR1NJcWhKWVJDNGNDd2oxS0VoWEh3YUpVcEdTQXFVQ0JhRzhFQklQSklMQUI0T1JBT0VTQndjUXhNUER3aEpRaUdTSEFnakdvK1FCaUVOaWtJaVRVZ0hvRUlkQWhRWVNaUUdZQ2dFR2hBbEhGMXFIQ1VERXhOQ0RsMERDQWNoQmdjSWN4RWlSQ1VUQmlnTlZDRVRyRVFpRTEyYktCRVR4cEJDaVpCQkFEcz1cXFwiKSA1MCUgNTAlIG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6MTAwJX0uc3VnZ2VzdGlvbnMtaW5wdXQ6Oi1tcy1jbGVhcntkaXNwbGF5Om5vbmV9LnN1Z2dlc3Rpb25zLXdyYXBwZXJ7d2lkdGg6MTAwJTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MDtwYWRkaW5nOjA7dmVydGljYWwtYWxpZ246dG9wO21pbi1oZWlnaHQ6MXB4Oy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlfS5zdWdnZXN0aW9ucy1zdWdnZXN0aW9uc3tiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjOTk5Oy1tcy1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2N1cnNvcjpkZWZhdWx0O3otaW5kZXg6OTk5OTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJX0uc3VnZ2VzdGlvbnMtc3VnZ2VzdGlvbnMgc3Ryb25ne2ZvbnQtd2VpZ2h0OjQwMDtjb2xvcjojMzlmfS5zdWdnZXN0aW9ucy1zdWdnZXN0aW9ucy5zdWdnZXN0aW9ucy1tb2JpbGV7Ym9yZGVyLXN0eWxlOm5vbmV9LnN1Z2dlc3Rpb25zLXN1Z2dlc3Rpb25zLnN1Z2dlc3Rpb25zLW1vYmlsZSAuc3VnZ2VzdGlvbnMtc3VnZ2VzdGlvbntib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkfS5zdWdnZXN0aW9ucy1zdWdnZXN0aW9ue3BhZGRpbmc6NHB4O292ZXJmbG93OmhpZGRlbn0uc3VnZ2VzdGlvbnMtc3VnZ2VzdGlvbjpob3ZlcntiYWNrZ3JvdW5kOiNmN2Y3Zjd9LnN1Z2dlc3Rpb25zLXNlbGVjdGVkLC5zdWdnZXN0aW9ucy1zZWxlY3RlZDpob3ZlcntiYWNrZ3JvdW5kOiNmMGYwZjB9LnN1Z2dlc3Rpb25zLWhpbnR7cGFkZGluZzo0cHg7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjtjb2xvcjojNzc3O2ZvbnQtc2l6ZTo4NSV9LnN1Z2dlc3Rpb25zLWNvbnN0cmFpbnRze2xpc3Qtc3R5bGU6bm9uZSFpbXBvcnRhbnQ7bWFyZ2luOjAhaW1wb3J0YW50O3BhZGRpbmc6MCFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50O3doaXRlLXNwYWNlOm5vd3JhcCFpbXBvcnRhbnR9LnN1Z2dlc3Rpb25zLWNvbnN0cmFpbnRzOmVtcHR5e2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LnN1Z2dlc3Rpb25zLWNvbnN0cmFpbnRzIGxpe2JhY2tncm91bmQ6I2Y4ZjhmODtib3JkZXI6MXB4IHNvbGlkICNjY2M7LXdlYmtpdC1ib3JkZXItcmFkaXVzOjNweDstbW96LWJvcmRlci1yYWRpdXM6M3B4O2JvcmRlci1yYWRpdXM6M3B4O2N1cnNvcjpkZWZhdWx0O2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjowIDRweCAwIDA7cGFkZGluZzowIC41ZW19LnN1Z2dlc3Rpb25zLWNvbnN0cmFpbnRzIGxpIC5zdWdnZXN0aW9ucy1yZW1vdmV7aGVpZ2h0OjFlbTt3aWR0aDoxZW07ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjAgMCAwIC4yNWVtO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQgdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMG5NVEF3SnlCb1pXbG5hSFE5SnpFd01DY2dlRzFzYm5NOUoyaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabkp6NDhaejQ4Y0dGMGFDQmtQU2R0TWpBc01qQnRNVEFzTUd3eU1Dd3lNR3d5TUN3dE1qQnNNVEFzTVRCc0xUSXdMREl3YkRJd0xESXdiQzB4TUN3eE1Hd3RNakFzTFRJd2JDMHlNQ3d5TUd3dE1UQXNMVEV3YkRJd0xDMHlNR3d0TWpBc0xUSXdiREV3TEMweE1DY2dabWxzYkQwbkl6azVPU2N2UGp3dlp6NDhMM04yWno0PVxcXCIpIDUwJSA1MCUgbm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb250YWluO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6Ljh9LnN1Z2dlc3Rpb25zLWNvbnN0cmFpbnRzIGxpIC5zdWdnZXN0aW9ucy1yZW1vdmU6aG92ZXJ7b3BhY2l0eToxfS5zdWdnZXN0aW9ucy1jb25zdHJhaW50cyBsaSBzcGFue3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uc3VnZ2VzdGlvbnMtc3VidGV4dHtjb2xvcjojNzc3O3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpc30uc3VnZ2VzdGlvbnMtc3VidGV4dF9pbmxpbmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWluLXdpZHRoOjZlbTt2ZXJ0aWNhbC1hbGlnbjpib3R0b207bWFyZ2luOjAgLjVlbSAwIDB9LnN1Z2dlc3Rpb25zLXN1YnRleHQtZGVsaW1pdGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjJweH0uc3VnZ2VzdGlvbnMtc3VidGV4dF9sYWJlbHttYXJnaW46MCAwIDAgLjI1ZW07LXdlYmtpdC1ib3JkZXItcmFkaXVzOjNweDstbW96LWJvcmRlci1yYWRpdXM6M3B4O2JvcmRlci1yYWRpdXM6M3B4O3BhZGRpbmc6MCAzcHg7YmFja2dyb3VuZDojZjVmNWY1O2ZvbnQtc2l6ZTo4NSV9LnN1Z2dlc3Rpb25zLXZhbHVlW2RhdGEtc3VnZ2VzdGlvbi1zdGF0dXM9TElRVUlEQVRFRF17cG9zaXRpb246cmVsYXRpdmV9LnN1Z2dlc3Rpb25zLXZhbHVlW2RhdGEtc3VnZ2VzdGlvbi1zdGF0dXM9TElRVUlEQVRFRF06YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7dG9wOjUwJTtib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDAsMCwwLC40KTtjb250ZW50OlxcXCJcXFwifVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/P3JlZi0tMS0yIS4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3JjL3N0eWxlcy9zdHlsZXMubGVzc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmIChzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBTdWdnZXN0aW9uIGZyb20gJy4vU3VnZ2VzdGlvbic7XG5cbmNvbnN0IFN1Z2dlc3Rpb25zTGlzdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHN0YW5kYXJkaXphdGlvbnMsIHZpc2libGUsIHNlbGVjdGVkIH0gPSBwcm9wcztcblxuICBpZiAoISFzdGFuZGFyZGl6YXRpb25zLmxlbmd0aCAmJiB2aXNpYmxlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VnZ2VzdGlvbnMtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Z2dlc3Rpb25zLXN1Z2dlc3Rpb25zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWdnZXN0aW9ucy1oaW50XCI+e3Byb3BzLmhpbnR9PC9kaXY+XG4gICAgICAgICAge3N0YW5kYXJkaXphdGlvbnMubWFwKChzdGFuZGFyZGl6YXRpb24sIGluZGV4KSA9PlxuICAgICAgICAgICAgPFN1Z2dlc3Rpb25cbiAgICAgICAgICAgICAga2V5PXsgaW5kZXggfSAgLyogQHRvZG8gb3VyIHBsYW5ldCBuZWVkcyBzb21ldGhpbmcgYmV0dGVyIHRoYW4gdGhpcyAqL1xuICAgICAgICAgICAgICBpbmRleD17IGluZGV4IH1cbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyBpbmRleCA9PT0gc2VsZWN0ZWQgfVxuICAgICAgICAgICAgICBvblNlbGVjdD17IHByb3BzLm9uU2VsZWN0KGluZGV4KSB9XG4gICAgICAgICAgICAgIHNlYXJjaFdvcmRzID0geyBwcm9wcy5oaWdobGlnaHRpbmcgPyBwcm9wcy5zZWFyY2hXb3JkcygpIDogW10gfVxuICAgICAgICAgICAgICBoaWdobGlnaHRpbmcgPSB7IHByb3BzLmhpZ2hsaWdodGluZyB9XG4gICAgICAgICAgICAgIHZhbHVlID0geyBwcm9wcy5zdWdnZXN0aW9uc0Zvcm1hdHRlcihzdGFuZGFyZGl6YXRpb24pIH1cbiAgICAgICAgICAgICAgc3VidGV4dCA9IHsgcHJvcHMuc3VidGV4dEZvcm1hdHRlcihzdGFuZGFyZGl6YXRpb24pIH1cbiAgICAgICAgICAgIC8+KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuU3VnZ2VzdGlvbnNMaXN0LnByb3BUeXBlcyA9IHtcbiAgc3RhbmRhcmRpemF0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGhpbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgc3VnZ2VzdGlvbnNGb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN1YnRleHRGb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlYXJjaFdvcmRzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoaWdobGlnaHRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG59O1xuU3VnZ2VzdGlvbnNMaXN0LmRlZmF1bHRQcm9wcyA9IHtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1Z2dlc3Rpb25zTGlzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1N1Z2dlc3Rpb25zTGlzdC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFN1Z2dlc3Rpb25WYWx1ZSBmcm9tICcuL1N1Z2dlc3Rpb25WYWx1ZSc7XG5pbXBvcnQgU3VnZ2VzdGlvblN1YnRleHQgZnJvbSAnLi9TdWdnZXN0aW9uU3VidGV4dCc7XG5cbmNsYXNzIFN1Z2dlc3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIGhvdmVyOiBmYWxzZSxcbiAgfTtcblxuICBoYW5kbGVIb3ZlciA9ICgpID0+IHRoaXMuc2V0SG92ZXIodHJ1ZSk7XG4gIGhhbmRsZUJsdXIgPSAoKSA9PiB0aGlzLnNldEhvdmVyKGZhbHNlKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZCwgaGlnaGxpZ2h0aW5nLCBzZWFyY2hXb3Jkcywgc3VidGV4dCwgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2VsZWN0ZWRDbGFzcyA9IHNlbGVjdGVkIHx8IHRoaXMuc3RhdGUuaG92ZXIgPyAnIHN1Z2dlc3Rpb25zLXNlbGVjdGVkJyA6ICcnO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17IGBzdWdnZXN0aW9ucy1zdWdnZXN0aW9uJHtzZWxlY3RlZENsYXNzfWAgfVxuICAgICAgICBvbk1vdXNlRW50ZXI9eyB0aGlzLmhhbmRsZUhvdmVyIH1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsgdGhpcy5oYW5kbGVCbHVyIH1cbiAgICAgICAgb25Nb3VzZURvd249eyB0aGlzLnByb3BzLm9uU2VsZWN0IH1cbiAgICAgID5cbiAgICAgICAgPFN1Z2dlc3Rpb25WYWx1ZVxuICAgICAgICAgIHsuLi57IGhpZ2hsaWdodGluZywgc2VhcmNoV29yZHMsIHZhbHVlIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxTdWdnZXN0aW9uU3VidGV4dD57IHN1YnRleHQgfTwvU3VnZ2VzdGlvblN1YnRleHQ+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH07XG5cbiAgc2V0SG92ZXIgPSAoaG92ZXIpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaG92ZXIgfSk7XG4gIH07XG59XG5cblN1Z2dlc3Rpb24ucHJvcFR5cGVzID0ge1xuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2VhcmNoV29yZHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBoaWdobGlnaHRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG59O1xuU3VnZ2VzdGlvbi5kZWZhdWx0UHJvcHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgU3VnZ2VzdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1N1Z2dlc3Rpb24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIaWdobGlnaHRlciBmcm9tICdyZWFjdC1oaWdobGlnaHQtd29yZHMnO1xuXG5jb25zdCBTdWdnZXN0aW9uVmFsdWUgPSAoe2hpZ2hsaWdodGluZywgc2VhcmNoV29yZHMsIHZhbHVlfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Z2dlc3Rpb25zLXZhbHVlXCI+XG4gICAgICB7XG4gICAgICAgIGhpZ2hsaWdodGluZyA/IDxIaWdobGlnaHRlclxuICAgICAgICAgIC8vaGlnaGxpZ2h0Q2xhc3NOYW1lPScnXG4gICAgICAgICAgc2VhcmNoV29yZHM9eyBzZWFyY2hXb3JkcyB9XG4gICAgICAgICAgYXV0b0VzY2FwZT17IHRydWUgfVxuICAgICAgICAgIHRleHRUb0hpZ2hsaWdodD17IHZhbHVlIH1cbiAgICAgICAgLz4gOiB2YWx1ZVxuICAgICAgfVxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cblN1Z2dlc3Rpb25WYWx1ZS5wcm9wVHlwZXMgPSB7XG4gIGhpZ2hsaWdodGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgc2VhcmNoV29yZHM6IFByb3BUeXBlcy5hcnJheSxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5TdWdnZXN0aW9uVmFsdWUuZGVmYXVsdFByb3BzID0ge1xuICBoaWdobGlnaHRpbmc6IHRydWUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0aW9uVmFsdWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TdWdnZXN0aW9uVmFsdWUuanMiLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXHRcblx0dmFyIF9IaWdobGlnaHRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHR2YXIgX0hpZ2hsaWdodGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0hpZ2hsaWdodGVyKTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBfSGlnaGxpZ2h0ZXIyWydkZWZhdWx0J107XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEhpZ2hsaWdodGVyO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXHRcblx0dmFyIF9oaWdobGlnaHRXb3Jkc0NvcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHRcblx0dmFyIF9wcm9wVHlwZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXHRcblx0dmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblx0XG5cdHZhciBfcmVhY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblx0XG5cdHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXHRcblx0SGlnaGxpZ2h0ZXIucHJvcFR5cGVzID0ge1xuXHQgIGFjdGl2ZUNsYXNzTmFtZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmcsXG5cdCAgYWN0aXZlSW5kZXg6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyLFxuXHQgIGFjdGl2ZVN0eWxlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdCxcblx0ICBhdXRvRXNjYXBlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmJvb2wsXG5cdCAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLnN0cmluZyxcblx0ICBoaWdobGlnaHRDbGFzc05hbWU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nLFxuXHQgIGhpZ2hsaWdodFN0eWxlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdCxcblx0ICBoaWdobGlnaHRUYWc6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub25lT2ZUeXBlKFtfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm5vZGUsIF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuYywgX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmddKSxcblx0ICBzYW5pdGl6ZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5mdW5jLFxuXHQgIHNlYXJjaFdvcmRzOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmFycmF5T2YoX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmcpLmlzUmVxdWlyZWQsXG5cdCAgdGV4dFRvSGlnaGxpZ2h0OiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLnN0cmluZy5pc1JlcXVpcmVkLFxuXHQgIHVuaGlnaGxpZ2h0Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLnN0cmluZyxcblx0ICB1bmhpZ2hsaWdodFN0eWxlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdFxuXHR9O1xuXHRcblx0LyoqXG5cdCAqIEhpZ2hsaWdodHMgYWxsIG9jY3VycmVuY2VzIG9mIHNlYXJjaCB0ZXJtcyAoc2VhcmNoVGV4dCkgd2l0aGluIGEgc3RyaW5nICh0ZXh0VG9IaWdobGlnaHQpLlxuXHQgKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYW4gYXJyYXkgb2Ygc3RyaW5ncyBhbmQgPHNwYW4+cyAod3JhcHBpbmcgaGlnaGxpZ2h0ZWQgd29yZHMpLlxuXHQgKi9cblx0XG5cdGZ1bmN0aW9uIEhpZ2hsaWdodGVyKF9yZWYpIHtcblx0ICB2YXIgX3JlZiRhY3RpdmVDbGFzc05hbWUgPSBfcmVmLmFjdGl2ZUNsYXNzTmFtZTtcblx0ICB2YXIgYWN0aXZlQ2xhc3NOYW1lID0gX3JlZiRhY3RpdmVDbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZiRhY3RpdmVDbGFzc05hbWU7XG5cdCAgdmFyIF9yZWYkYWN0aXZlSW5kZXggPSBfcmVmLmFjdGl2ZUluZGV4O1xuXHQgIHZhciBhY3RpdmVJbmRleCA9IF9yZWYkYWN0aXZlSW5kZXggPT09IHVuZGVmaW5lZCA/IC0xIDogX3JlZiRhY3RpdmVJbmRleDtcblx0ICB2YXIgYWN0aXZlU3R5bGUgPSBfcmVmLmFjdGl2ZVN0eWxlO1xuXHQgIHZhciBhdXRvRXNjYXBlID0gX3JlZi5hdXRvRXNjYXBlO1xuXHQgIHZhciBfcmVmJGNhc2VTZW5zaXRpdmUgPSBfcmVmLmNhc2VTZW5zaXRpdmU7XG5cdCAgdmFyIGNhc2VTZW5zaXRpdmUgPSBfcmVmJGNhc2VTZW5zaXRpdmUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRjYXNlU2Vuc2l0aXZlO1xuXHQgIHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZTtcblx0ICB2YXIgX3JlZiRoaWdobGlnaHRDbGFzc05hbWUgPSBfcmVmLmhpZ2hsaWdodENsYXNzTmFtZTtcblx0ICB2YXIgaGlnaGxpZ2h0Q2xhc3NOYW1lID0gX3JlZiRoaWdobGlnaHRDbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZiRoaWdobGlnaHRDbGFzc05hbWU7XG5cdCAgdmFyIF9yZWYkaGlnaGxpZ2h0U3R5bGUgPSBfcmVmLmhpZ2hsaWdodFN0eWxlO1xuXHQgIHZhciBoaWdobGlnaHRTdHlsZSA9IF9yZWYkaGlnaGxpZ2h0U3R5bGUgPT09IHVuZGVmaW5lZCA/IHt9IDogX3JlZiRoaWdobGlnaHRTdHlsZTtcblx0ICB2YXIgX3JlZiRoaWdobGlnaHRUYWcgPSBfcmVmLmhpZ2hsaWdodFRhZztcblx0ICB2YXIgaGlnaGxpZ2h0VGFnID0gX3JlZiRoaWdobGlnaHRUYWcgPT09IHVuZGVmaW5lZCA/ICdtYXJrJyA6IF9yZWYkaGlnaGxpZ2h0VGFnO1xuXHQgIHZhciBzYW5pdGl6ZSA9IF9yZWYuc2FuaXRpemU7XG5cdCAgdmFyIHNlYXJjaFdvcmRzID0gX3JlZi5zZWFyY2hXb3Jkcztcblx0ICB2YXIgdGV4dFRvSGlnaGxpZ2h0ID0gX3JlZi50ZXh0VG9IaWdobGlnaHQ7XG5cdCAgdmFyIF9yZWYkdW5oaWdobGlnaHRDbGFzc05hbWUgPSBfcmVmLnVuaGlnaGxpZ2h0Q2xhc3NOYW1lO1xuXHQgIHZhciB1bmhpZ2hsaWdodENsYXNzTmFtZSA9IF9yZWYkdW5oaWdobGlnaHRDbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZiR1bmhpZ2hsaWdodENsYXNzTmFtZTtcblx0ICB2YXIgdW5oaWdobGlnaHRTdHlsZSA9IF9yZWYudW5oaWdobGlnaHRTdHlsZTtcblx0XG5cdCAgdmFyIGNodW5rcyA9ICgwLCBfaGlnaGxpZ2h0V29yZHNDb3JlLmZpbmRBbGwpKHtcblx0ICAgIGF1dG9Fc2NhcGU6IGF1dG9Fc2NhcGUsXG5cdCAgICBjYXNlU2Vuc2l0aXZlOiBjYXNlU2Vuc2l0aXZlLFxuXHQgICAgc2FuaXRpemU6IHNhbml0aXplLFxuXHQgICAgc2VhcmNoV29yZHM6IHNlYXJjaFdvcmRzLFxuXHQgICAgdGV4dFRvSGlnaGxpZ2h0OiB0ZXh0VG9IaWdobGlnaHRcblx0ICB9KTtcblx0ICB2YXIgSGlnaGxpZ2h0VGFnID0gaGlnaGxpZ2h0VGFnO1xuXHQgIHZhciBoaWdobGlnaHRDb3VudCA9IC0xO1xuXHQgIHZhciBoaWdobGlnaHRDbGFzc05hbWVzID0gJyc7XG5cdCAgdmFyIGhpZ2hsaWdodFN0eWxlcyA9IHVuZGVmaW5lZDtcblx0XG5cdCAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuXHQgICAgJ3NwYW4nLFxuXHQgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHQgICAgY2h1bmtzLm1hcChmdW5jdGlvbiAoY2h1bmssIGluZGV4KSB7XG5cdCAgICAgIHZhciB0ZXh0ID0gdGV4dFRvSGlnaGxpZ2h0LnN1YnN0cihjaHVuay5zdGFydCwgY2h1bmsuZW5kIC0gY2h1bmsuc3RhcnQpO1xuXHRcblx0ICAgICAgaWYgKGNodW5rLmhpZ2hsaWdodCkge1xuXHQgICAgICAgIGhpZ2hsaWdodENvdW50Kys7XG5cdFxuXHQgICAgICAgIHZhciBpc0FjdGl2ZSA9IGhpZ2hsaWdodENvdW50ID09PSArYWN0aXZlSW5kZXg7XG5cdFxuXHQgICAgICAgIGhpZ2hsaWdodENsYXNzTmFtZXMgPSBoaWdobGlnaHRDbGFzc05hbWUgKyAnICcgKyAoaXNBY3RpdmUgPyBhY3RpdmVDbGFzc05hbWUgOiAnJyk7XG5cdCAgICAgICAgaGlnaGxpZ2h0U3R5bGVzID0gaXNBY3RpdmUgPT09IHRydWUgJiYgYWN0aXZlU3R5bGUgIT0gbnVsbCA/IE9iamVjdC5hc3NpZ24oe30sIGhpZ2hsaWdodFN0eWxlLCBhY3RpdmVTdHlsZSkgOiBoaWdobGlnaHRTdHlsZTtcblx0XG5cdCAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuXHQgICAgICAgICAgSGlnaGxpZ2h0VGFnLFxuXHQgICAgICAgICAge1xuXHQgICAgICAgICAgICBjbGFzc05hbWU6IGhpZ2hsaWdodENsYXNzTmFtZXMsXG5cdCAgICAgICAgICAgIGtleTogaW5kZXgsXG5cdCAgICAgICAgICAgIHN0eWxlOiBoaWdobGlnaHRTdHlsZXNcblx0ICAgICAgICAgIH0sXG5cdCAgICAgICAgICB0ZXh0XG5cdCAgICAgICAgKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG5cdCAgICAgICAgICAnc3BhbicsXG5cdCAgICAgICAgICB7XG5cdCAgICAgICAgICAgIGNsYXNzTmFtZTogdW5oaWdobGlnaHRDbGFzc05hbWUsXG5cdCAgICAgICAgICAgIGtleTogaW5kZXgsXG5cdCAgICAgICAgICAgIHN0eWxlOiB1bmhpZ2hsaWdodFN0eWxlXG5cdCAgICAgICAgICB9LFxuXHQgICAgICAgICAgdGV4dFxuXHQgICAgICAgICk7XG5cdCAgICAgIH1cblx0ICAgIH0pXG5cdCAgKTtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID1cblx0LyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuXHQvKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcblx0LyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXHQvKioqKioqL1xuXHQvKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5cdC8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvKioqKioqL1xuXHQvKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdC8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcblx0LyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cdC8qKioqKiovXG5cdC8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHQvKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuXHQvKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcblx0LyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuXHQvKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG5cdC8qKioqKiovIFx0XHR9O1xuXHQvKioqKioqL1xuXHQvKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdC8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0LyoqKioqKi9cblx0LyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0LyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXHQvKioqKioqL1xuXHQvKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0LyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcblx0LyoqKioqKi8gXHR9XG5cdC8qKioqKiovXG5cdC8qKioqKiovXG5cdC8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcblx0LyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXHQvKioqKioqL1xuXHQvKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5cdC8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblx0LyoqKioqKi9cblx0LyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuXHQvKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cdC8qKioqKiovXG5cdC8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5cdC8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cdC8qKioqKiovIH0pXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cdC8qKioqKiovIChbXG5cdC8qIDAgKi9cblx0LyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXHRcblx0XHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHRcblx0LyoqKi8gfSksXG5cdC8qIDEgKi9cblx0LyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXHRcblx0XHQndXNlIHN0cmljdCc7XG5cdFx0XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdFx0ICB2YWx1ZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdFxuXHRcdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcdFxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY29tYmluZUNodW5rcycsIHtcblx0XHQgIGVudW1lcmFibGU6IHRydWUsXG5cdFx0ICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0XHQgICAgcmV0dXJuIF91dGlscy5jb21iaW5lQ2h1bmtzO1xuXHRcdCAgfVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZmlsbEluQ2h1bmtzJywge1xuXHRcdCAgZW51bWVyYWJsZTogdHJ1ZSxcblx0XHQgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHRcdCAgICByZXR1cm4gX3V0aWxzLmZpbGxJbkNodW5rcztcblx0XHQgIH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2ZpbmRBbGwnLCB7XG5cdFx0ICBlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdFx0ICAgIHJldHVybiBfdXRpbHMuZmluZEFsbDtcblx0XHQgIH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2ZpbmRDaHVua3MnLCB7XG5cdFx0ICBlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdCAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdFx0ICAgIHJldHVybiBfdXRpbHMuZmluZENodW5rcztcblx0XHQgIH1cblx0XHR9KTtcblx0XG5cdC8qKiovIH0pLFxuXHQvKiAyICovXG5cdC8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblx0XG5cdFx0J3VzZSBzdHJpY3QnO1xuXHRcdFxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHRcdCAgdmFsdWU6IHRydWVcblx0XHR9KTtcblx0XHQvKipcblx0XHQgKiBDcmVhdGVzIGFuIGFycmF5IG9mIGNodW5rIG9iamVjdHMgcmVwcmVzZW50aW5nIGJvdGggaGlnbGlnaHRhYmxlIGFuZCBub24gaGlnaGxpZ2h0YWJsZSBwaWVjZXMgb2YgdGV4dCB0aGF0IG1hdGNoIGVhY2ggc2VhcmNoIHdvcmQuXG5cdFx0ICogQHJldHVybiBBcnJheSBvZiBcImNodW5rc1wiICh3aGVyZSBhIENodW5rIGlzIHsgc3RhcnQ6bnVtYmVyLCBlbmQ6bnVtYmVyLCBoaWdobGlnaHQ6Ym9vbGVhbiB9KVxuXHRcdCAqL1xuXHRcdHZhciBmaW5kQWxsID0gZXhwb3J0cy5maW5kQWxsID0gZnVuY3Rpb24gZmluZEFsbChfcmVmKSB7XG5cdFx0ICB2YXIgYXV0b0VzY2FwZSA9IF9yZWYuYXV0b0VzY2FwZSxcblx0XHQgICAgICBfcmVmJGNhc2VTZW5zaXRpdmUgPSBfcmVmLmNhc2VTZW5zaXRpdmUsXG5cdFx0ICAgICAgY2FzZVNlbnNpdGl2ZSA9IF9yZWYkY2FzZVNlbnNpdGl2ZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJGNhc2VTZW5zaXRpdmUsXG5cdFx0ICAgICAgc2FuaXRpemUgPSBfcmVmLnNhbml0aXplLFxuXHRcdCAgICAgIHNlYXJjaFdvcmRzID0gX3JlZi5zZWFyY2hXb3Jkcyxcblx0XHQgICAgICB0ZXh0VG9IaWdobGlnaHQgPSBfcmVmLnRleHRUb0hpZ2hsaWdodDtcblx0XHQgIHJldHVybiBmaWxsSW5DaHVua3Moe1xuXHRcdCAgICBjaHVua3NUb0hpZ2hsaWdodDogY29tYmluZUNodW5rcyh7XG5cdFx0ICAgICAgY2h1bmtzOiBmaW5kQ2h1bmtzKHtcblx0XHQgICAgICAgIGF1dG9Fc2NhcGU6IGF1dG9Fc2NhcGUsXG5cdFx0ICAgICAgICBjYXNlU2Vuc2l0aXZlOiBjYXNlU2Vuc2l0aXZlLFxuXHRcdCAgICAgICAgc2FuaXRpemU6IHNhbml0aXplLFxuXHRcdCAgICAgICAgc2VhcmNoV29yZHM6IHNlYXJjaFdvcmRzLFxuXHRcdCAgICAgICAgdGV4dFRvSGlnaGxpZ2h0OiB0ZXh0VG9IaWdobGlnaHRcblx0XHQgICAgICB9KVxuXHRcdCAgICB9KSxcblx0XHQgICAgdG90YWxMZW5ndGg6IHRleHRUb0hpZ2hsaWdodC5sZW5ndGhcblx0XHQgIH0pO1xuXHRcdH07XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogVGFrZXMgYW4gYXJyYXkgb2Yge3N0YXJ0Om51bWJlciwgZW5kOm51bWJlcn0gb2JqZWN0cyBhbmQgY29tYmluZXMgY2h1bmtzIHRoYXQgb3ZlcmxhcCBpbnRvIHNpbmdsZSBjaHVua3MuXG5cdFx0ICogQHJldHVybiB7c3RhcnQ6bnVtYmVyLCBlbmQ6bnVtYmVyfVtdXG5cdFx0ICovXG5cdFx0dmFyIGNvbWJpbmVDaHVua3MgPSBleHBvcnRzLmNvbWJpbmVDaHVua3MgPSBmdW5jdGlvbiBjb21iaW5lQ2h1bmtzKF9yZWYyKSB7XG5cdFx0ICB2YXIgY2h1bmtzID0gX3JlZjIuY2h1bmtzO1xuXHRcdFxuXHRcdCAgY2h1bmtzID0gY2h1bmtzLnNvcnQoZnVuY3Rpb24gKGZpcnN0LCBzZWNvbmQpIHtcblx0XHQgICAgcmV0dXJuIGZpcnN0LnN0YXJ0IC0gc2Vjb25kLnN0YXJ0O1xuXHRcdCAgfSkucmVkdWNlKGZ1bmN0aW9uIChwcm9jZXNzZWRDaHVua3MsIG5leHRDaHVuaykge1xuXHRcdCAgICAvLyBGaXJzdCBjaHVuayBqdXN0IGdvZXMgc3RyYWlnaHQgaW4gdGhlIGFycmF5Li4uXG5cdFx0ICAgIGlmIChwcm9jZXNzZWRDaHVua3MubGVuZ3RoID09PSAwKSB7XG5cdFx0ICAgICAgcmV0dXJuIFtuZXh0Q2h1bmtdO1xuXHRcdCAgICB9IGVsc2Uge1xuXHRcdCAgICAgIC8vIC4uLiBzdWJzZXF1ZW50IGNodW5rcyBnZXQgY2hlY2tlZCB0byBzZWUgaWYgdGhleSBvdmVybGFwLi4uXG5cdFx0ICAgICAgdmFyIHByZXZDaHVuayA9IHByb2Nlc3NlZENodW5rcy5wb3AoKTtcblx0XHQgICAgICBpZiAobmV4dENodW5rLnN0YXJ0IDw9IHByZXZDaHVuay5lbmQpIHtcblx0XHQgICAgICAgIC8vIEl0IG1heSBiZSB0aGUgY2FzZSB0aGF0IHByZXZDaHVuayBjb21wbGV0ZWx5IHN1cnJvdW5kcyBuZXh0Q2h1bmssIHNvIHRha2UgdGhlXG5cdFx0ICAgICAgICAvLyBsYXJnZXN0IG9mIHRoZSBlbmQgaW5kZWNlcy5cblx0XHQgICAgICAgIHZhciBlbmRJbmRleCA9IE1hdGgubWF4KHByZXZDaHVuay5lbmQsIG5leHRDaHVuay5lbmQpO1xuXHRcdCAgICAgICAgcHJvY2Vzc2VkQ2h1bmtzLnB1c2goeyBzdGFydDogcHJldkNodW5rLnN0YXJ0LCBlbmQ6IGVuZEluZGV4IH0pO1xuXHRcdCAgICAgIH0gZWxzZSB7XG5cdFx0ICAgICAgICBwcm9jZXNzZWRDaHVua3MucHVzaChwcmV2Q2h1bmssIG5leHRDaHVuayk7XG5cdFx0ICAgICAgfVxuXHRcdCAgICAgIHJldHVybiBwcm9jZXNzZWRDaHVua3M7XG5cdFx0ICAgIH1cblx0XHQgIH0sIFtdKTtcblx0XHRcblx0XHQgIHJldHVybiBjaHVua3M7XG5cdFx0fTtcblx0XHRcblx0XHQvKipcblx0XHQgKiBFeGFtaW5lIHRleHQgZm9yIGFueSBtYXRjaGVzLlxuXHRcdCAqIElmIHdlIGZpbmQgbWF0Y2hlcywgYWRkIHRoZW0gdG8gdGhlIHJldHVybmVkIGFycmF5IGFzIGEgXCJjaHVua1wiIG9iamVjdCAoe3N0YXJ0Om51bWJlciwgZW5kOm51bWJlcn0pLlxuXHRcdCAqIEByZXR1cm4ge3N0YXJ0Om51bWJlciwgZW5kOm51bWJlcn1bXVxuXHRcdCAqL1xuXHRcdHZhciBmaW5kQ2h1bmtzID0gZXhwb3J0cy5maW5kQ2h1bmtzID0gZnVuY3Rpb24gZmluZENodW5rcyhfcmVmMykge1xuXHRcdCAgdmFyIGF1dG9Fc2NhcGUgPSBfcmVmMy5hdXRvRXNjYXBlLFxuXHRcdCAgICAgIGNhc2VTZW5zaXRpdmUgPSBfcmVmMy5jYXNlU2Vuc2l0aXZlLFxuXHRcdCAgICAgIF9yZWYzJHNhbml0aXplID0gX3JlZjMuc2FuaXRpemUsXG5cdFx0ICAgICAgc2FuaXRpemUgPSBfcmVmMyRzYW5pdGl6ZSA9PT0gdW5kZWZpbmVkID8gaWRlbnRpdHkgOiBfcmVmMyRzYW5pdGl6ZSxcblx0XHQgICAgICBzZWFyY2hXb3JkcyA9IF9yZWYzLnNlYXJjaFdvcmRzLFxuXHRcdCAgICAgIHRleHRUb0hpZ2hsaWdodCA9IF9yZWYzLnRleHRUb0hpZ2hsaWdodDtcblx0XHRcblx0XHQgIHRleHRUb0hpZ2hsaWdodCA9IHNhbml0aXplKHRleHRUb0hpZ2hsaWdodCk7XG5cdFx0XG5cdFx0ICByZXR1cm4gc2VhcmNoV29yZHMuZmlsdGVyKGZ1bmN0aW9uIChzZWFyY2hXb3JkKSB7XG5cdFx0ICAgIHJldHVybiBzZWFyY2hXb3JkO1xuXHRcdCAgfSkgLy8gUmVtb3ZlIGVtcHR5IHdvcmRzXG5cdFx0ICAucmVkdWNlKGZ1bmN0aW9uIChjaHVua3MsIHNlYXJjaFdvcmQpIHtcblx0XHQgICAgc2VhcmNoV29yZCA9IHNhbml0aXplKHNlYXJjaFdvcmQpO1xuXHRcdFxuXHRcdCAgICBpZiAoYXV0b0VzY2FwZSkge1xuXHRcdCAgICAgIHNlYXJjaFdvcmQgPSBlc2NhcGVSZWdFeHBGbihzZWFyY2hXb3JkKTtcblx0XHQgICAgfVxuXHRcdFxuXHRcdCAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKHNlYXJjaFdvcmQsIGNhc2VTZW5zaXRpdmUgPyAnZycgOiAnZ2knKTtcblx0XHRcblx0XHQgICAgdmFyIG1hdGNoID0gdm9pZCAwO1xuXHRcdCAgICB3aGlsZSAobWF0Y2ggPSByZWdleC5leGVjKHRleHRUb0hpZ2hsaWdodCkpIHtcblx0XHQgICAgICBjaHVua3MucHVzaCh7XG5cdFx0ICAgICAgICBzdGFydDogbWF0Y2guaW5kZXgsXG5cdFx0ICAgICAgICBlbmQ6IHJlZ2V4Lmxhc3RJbmRleFxuXHRcdCAgICAgIH0pO1xuXHRcdCAgICB9XG5cdFx0XG5cdFx0ICAgIHJldHVybiBjaHVua3M7XG5cdFx0ICB9LCBbXSk7XG5cdFx0fTtcblx0XHRcblx0XHQvKipcblx0XHQgKiBHaXZlbiBhIHNldCBvZiBjaHVua3MgdG8gaGlnaGxpZ2h0LCBjcmVhdGUgYW4gYWRkaXRpb25hbCBzZXQgb2YgY2h1bmtzXG5cdFx0ICogdG8gcmVwcmVzZW50IHRoZSBiaXRzIG9mIHRleHQgYmV0d2VlbiB0aGUgaGlnaGxpZ2h0ZWQgdGV4dC5cblx0XHQgKiBAcGFyYW0gY2h1bmtzVG9IaWdobGlnaHQge3N0YXJ0Om51bWJlciwgZW5kOm51bWJlcn1bXVxuXHRcdCAqIEBwYXJhbSB0b3RhbExlbmd0aCBudW1iZXJcblx0XHQgKiBAcmV0dXJuIHtzdGFydDpudW1iZXIsIGVuZDpudW1iZXIsIGhpZ2hsaWdodDpib29sZWFufVtdXG5cdFx0ICovXG5cdFx0dmFyIGZpbGxJbkNodW5rcyA9IGV4cG9ydHMuZmlsbEluQ2h1bmtzID0gZnVuY3Rpb24gZmlsbEluQ2h1bmtzKF9yZWY0KSB7XG5cdFx0ICB2YXIgY2h1bmtzVG9IaWdobGlnaHQgPSBfcmVmNC5jaHVua3NUb0hpZ2hsaWdodCxcblx0XHQgICAgICB0b3RhbExlbmd0aCA9IF9yZWY0LnRvdGFsTGVuZ3RoO1xuXHRcdFxuXHRcdCAgdmFyIGFsbENodW5rcyA9IFtdO1xuXHRcdCAgdmFyIGFwcGVuZCA9IGZ1bmN0aW9uIGFwcGVuZChzdGFydCwgZW5kLCBoaWdobGlnaHQpIHtcblx0XHQgICAgaWYgKGVuZCAtIHN0YXJ0ID4gMCkge1xuXHRcdCAgICAgIGFsbENodW5rcy5wdXNoKHtcblx0XHQgICAgICAgIHN0YXJ0OiBzdGFydCxcblx0XHQgICAgICAgIGVuZDogZW5kLFxuXHRcdCAgICAgICAgaGlnaGxpZ2h0OiBoaWdobGlnaHRcblx0XHQgICAgICB9KTtcblx0XHQgICAgfVxuXHRcdCAgfTtcblx0XHRcblx0XHQgIGlmIChjaHVua3NUb0hpZ2hsaWdodC5sZW5ndGggPT09IDApIHtcblx0XHQgICAgYXBwZW5kKDAsIHRvdGFsTGVuZ3RoLCBmYWxzZSk7XG5cdFx0ICB9IGVsc2Uge1xuXHRcdCAgICB2YXIgbGFzdEluZGV4ID0gMDtcblx0XHQgICAgY2h1bmtzVG9IaWdobGlnaHQuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmspIHtcblx0XHQgICAgICBhcHBlbmQobGFzdEluZGV4LCBjaHVuay5zdGFydCwgZmFsc2UpO1xuXHRcdCAgICAgIGFwcGVuZChjaHVuay5zdGFydCwgY2h1bmsuZW5kLCB0cnVlKTtcblx0XHQgICAgICBsYXN0SW5kZXggPSBjaHVuay5lbmQ7XG5cdFx0ICAgIH0pO1xuXHRcdCAgICBhcHBlbmQobGFzdEluZGV4LCB0b3RhbExlbmd0aCwgZmFsc2UpO1xuXHRcdCAgfVxuXHRcdCAgcmV0dXJuIGFsbENodW5rcztcblx0XHR9O1xuXHRcdFxuXHRcdGZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG5cdFx0ICByZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHRcdFxuXHRcdGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cEZuKHN0cikge1xuXHRcdCAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgJ1xcXFwkJicpO1xuXHRcdH1cblx0XG5cdC8qKiovIH0pXG5cdC8qKioqKiovIF0pO1xuXHQvLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHByb2Nlc3MpIHsvKipcblx0ICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG5cdCAqXG5cdCAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuXHQgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cdCAqL1xuXHRcblx0aWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcblx0ICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcblx0ICAgIFN5bWJvbC5mb3IgJiZcblx0ICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcblx0ICAgIDB4ZWFjNztcblx0XG5cdCAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG5cdCAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcblx0ICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG5cdCAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuXHQgIH07XG5cdFxuXHQgIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuXHQgIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2Rcblx0ICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG5cdCAgbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcblx0fSBlbHNlIHtcblx0ICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuXHQgIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2Rcblx0ICBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpKCk7XG5cdH1cblx0XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKSlcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cdHZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblx0XG5cdC8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuXHQvLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcblx0Ly8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuXHQvLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXHRcblx0dmFyIGNhY2hlZFNldFRpbWVvdXQ7XG5cdHZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cdFxuXHRmdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG5cdH1cblx0ZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xuXHR9XG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICB0cnkge1xuXHQgICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcblx0ICAgICAgICB9XG5cdCAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG5cdCAgICB9XG5cdCAgICB0cnkge1xuXHQgICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuXHQgICAgICAgIH1cblx0ICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuXHQgICAgfVxuXHR9ICgpKVxuXHRmdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuXHQgICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcblx0ICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcblx0ICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuXHQgICAgfVxuXHQgICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcblx0ICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuXHQgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuXHQgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG5cdCAgICB9XG5cdCAgICB0cnkge1xuXHQgICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3Ncblx0ICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuXHQgICAgfSBjYXRjaChlKXtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcblx0ICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuXHQgICAgICAgIH0gY2F0Y2goZSl7XG5cdCAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG5cdCAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdFxuXHRcblx0fVxuXHRmdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG5cdCAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcblx0ICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcblx0ICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG5cdCAgICB9XG5cdCAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG5cdCAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcblx0ICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG5cdCAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuXHQgICAgfVxuXHQgICAgdHJ5IHtcblx0ICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG5cdCAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuXHQgICAgfSBjYXRjaCAoZSl7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuXHQgICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcblx0ICAgICAgICB9IGNhdGNoIChlKXtcblx0ICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG5cdCAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcblx0ICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHRcblx0XG5cdFxuXHR9XG5cdHZhciBxdWV1ZSA9IFtdO1xuXHR2YXIgZHJhaW5pbmcgPSBmYWxzZTtcblx0dmFyIGN1cnJlbnRRdWV1ZTtcblx0dmFyIHF1ZXVlSW5kZXggPSAtMTtcblx0XG5cdGZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcblx0ICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGRyYWluaW5nID0gZmFsc2U7XG5cdCAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuXHQgICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcblx0ICAgIH1cblx0ICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcblx0ICAgICAgICBkcmFpblF1ZXVlKCk7XG5cdCAgICB9XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG5cdCAgICBpZiAoZHJhaW5pbmcpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcblx0ICAgIGRyYWluaW5nID0gdHJ1ZTtcblx0XG5cdCAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuXHQgICAgd2hpbGUobGVuKSB7XG5cdCAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG5cdCAgICAgICAgcXVldWUgPSBbXTtcblx0ICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG5cdCAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcblx0ICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG5cdCAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuXHQgICAgfVxuXHQgICAgY3VycmVudFF1ZXVlID0gbnVsbDtcblx0ICAgIGRyYWluaW5nID0gZmFsc2U7XG5cdCAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG5cdH1cblx0XG5cdHByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG5cdCAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG5cdCAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdCAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuXHQgICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcblx0ICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuXHQgICAgfVxuXHR9O1xuXHRcblx0Ly8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuXHRmdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcblx0ICAgIHRoaXMuZnVuID0gZnVuO1xuXHQgICAgdGhpcy5hcnJheSA9IGFycmF5O1xuXHR9XG5cdEl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xuXHR9O1xuXHRwcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xuXHRwcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xuXHRwcm9jZXNzLmVudiA9IHt9O1xuXHRwcm9jZXNzLmFyZ3YgPSBbXTtcblx0cHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5cdHByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblx0XG5cdGZ1bmN0aW9uIG5vb3AoKSB7fVxuXHRcblx0cHJvY2Vzcy5vbiA9IG5vb3A7XG5cdHByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xuXHRwcm9jZXNzLm9uY2UgPSBub29wO1xuXHRwcm9jZXNzLm9mZiA9IG5vb3A7XG5cdHByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xuXHRwcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5cdHByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cdHByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcblx0cHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblx0XG5cdHByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblx0XG5cdHByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG5cdH07XG5cdFxuXHRwcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xuXHRwcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcblx0fTtcblx0cHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24ocHJvY2Vzcykgey8qKlxuXHQgKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cblx0ICpcblx0ICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG5cdCAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblx0ICovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgZW1wdHlGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cdHZhciBpbnZhcmlhbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXHR2YXIgd2FybmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdHZhciBhc3NpZ24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblx0XG5cdHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXHR2YXIgY2hlY2tQcm9wVHlwZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcblx0ICAvKiBnbG9iYWwgU3ltYm9sICovXG5cdCAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuXHQgIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXHRcblx0ICAvKipcblx0ICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG5cdCAgICpcblx0ICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcblx0ICAgKlxuXHQgICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG5cdCAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG5cdCAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuXHQgICAqICAgICAgIC4uLlxuXHQgICAqICAgICB9XG5cdCAgICpcblx0ICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcblx0ICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG5cdCAgICovXG5cdCAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG5cdCAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuXHQgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgLyoqXG5cdCAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcblx0ICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuXHQgICAqXG5cdCAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuXHQgICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ICAgKiAgICAgcHJvcFR5cGVzOiB7XG5cdCAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuXHQgICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG5cdCAgICpcblx0ICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG5cdCAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuXHQgICAqXG5cdCAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG5cdCAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuXHQgICAqICAgICB9LFxuXHQgICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuXHQgICAqICAgfSk7XG5cdCAgICpcblx0ICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG5cdCAgICpcblx0ICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcblx0ICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cblx0ICAgKlxuXHQgICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcblx0ICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG5cdCAgICpcblx0ICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ICAgKiAgICBwcm9wVHlwZXM6IHtcblx0ICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cblx0ICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuXHQgICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXHQgICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcblx0ICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuXHQgICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG5cdCAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuXHQgICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuXHQgICAqICAgICAgICAgICk7XG5cdCAgICogICAgICAgIH1cblx0ICAgKiAgICAgIH1cblx0ICAgKiAgICB9LFxuXHQgICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuXHQgICAqICB9KTtcblx0ICAgKlxuXHQgICAqIEBpbnRlcm5hbFxuXHQgICAqL1xuXHRcblx0ICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXHRcblx0ICAvLyBJbXBvcnRhbnQhXG5cdCAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuXHQgIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcblx0ICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcblx0ICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG5cdCAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcblx0ICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuXHQgICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG5cdCAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcblx0ICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXHRcblx0ICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcblx0ICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcblx0ICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuXHQgICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcblx0ICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG5cdCAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcblx0ICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG5cdCAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG5cdCAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcblx0ICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuXHQgIH07XG5cdFxuXHQgIC8qKlxuXHQgICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cblx0ICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcblx0ICAgKi9cblx0ICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cdCAgZnVuY3Rpb24gaXMoeCwgeSkge1xuXHQgICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuXHQgICAgaWYgKHggPT09IHkpIHtcblx0ICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG5cdCAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG5cdCAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG5cdCAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXHRcblx0ICAvKipcblx0ICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG5cdCAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcblx0ICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG5cdCAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuXHQgICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cblx0ICAgKi9cblx0ICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcblx0ICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdCAgICB0aGlzLnN0YWNrID0gJyc7XG5cdCAgfVxuXHQgIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cblx0ICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblx0XG5cdCAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcblx0ICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG5cdCAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuXHQgICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuXHQgICAgfVxuXHQgICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG5cdCAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcblx0ICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXHRcblx0ICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcblx0ICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuXHQgICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG5cdCAgICAgICAgICBpbnZhcmlhbnQoXG5cdCAgICAgICAgICAgIGZhbHNlLFxuXHQgICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG5cdCAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuXHQgICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcblx0ICAgICAgICAgICk7XG5cdCAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG5cdCAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG5cdCAgICAgICAgICBpZiAoXG5cdCAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcblx0ICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG5cdCAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuXHQgICAgICAgICAgKSB7XG5cdCAgICAgICAgICAgIHdhcm5pbmcoXG5cdCAgICAgICAgICAgICAgZmFsc2UsXG5cdCAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuXHQgICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG5cdCAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcblx0ICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcblx0ICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJyxcblx0ICAgICAgICAgICAgICBwcm9wRnVsbE5hbWUsXG5cdCAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuXHQgICAgICAgICAgICApO1xuXHQgICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuXHQgICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcblx0ICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuXHQgICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcblx0ICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXHRcblx0ICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuXHQgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXHQgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuXHQgICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuXHQgICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuXHQgICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuXHQgICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cblx0ICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXHRcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwpO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG5cdCAgICAgIH1cblx0ICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcblx0ICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcblx0ICAgICAgfVxuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcblx0ICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHQgICAgICAgICAgcmV0dXJuIGVycm9yO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG5cdCAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG5cdCAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcblx0ICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuXHQgICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuXHQgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuXHQgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG5cdCAgICB9XG5cdFxuXHQgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG5cdCAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcblx0ICAgICAgICAgIHJldHVybiBudWxsO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHRcblx0ICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcblx0ICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIHByb3BWYWx1ZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG5cdCAgICAgIH1cblx0ICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblx0ICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblx0ICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG5cdCAgICAgIH1cblx0ICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuXHQgICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHQgICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcblx0ICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBlcnJvcjtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG5cdCAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcblx0ICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG5cdCAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcblx0ICAgIH1cblx0XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuXHQgICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICB3YXJuaW5nKFxuXHQgICAgICAgICAgZmFsc2UsXG5cdCAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuXHQgICAgICAgICAgJ3JlY2VpdmVkICVzIGF0IGluZGV4ICVzLicsXG5cdCAgICAgICAgICBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlciksXG5cdCAgICAgICAgICBpXG5cdCAgICAgICAgKTtcblx0ICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuXHQgICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcblx0ICAgICAgICAgIHJldHVybiBudWxsO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHRcblx0ICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG5cdCAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcblx0ICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuXHQgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXHQgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuXHQgICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuXHQgICAgICB9XG5cdCAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG5cdCAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG5cdCAgICAgICAgaWYgKCFjaGVja2VyKSB7XG5cdCAgICAgICAgICBjb250aW51ZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuXHQgICAgICAgIGlmIChlcnJvcikge1xuXHQgICAgICAgICAgcmV0dXJuIGVycm9yO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcblx0ICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuXHQgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXHQgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuXHQgICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuXHQgICAgICB9XG5cdCAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG5cdCAgICAgIC8vIHByb3BzLlxuXHQgICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcblx0ICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcblx0ICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcblx0ICAgICAgICBpZiAoIWNoZWNrZXIpIHtcblx0ICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcblx0ICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuXHQgICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuXHQgICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcblx0ICAgICAgICAgICk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcblx0ICAgICAgICBpZiAoZXJyb3IpIHtcblx0ICAgICAgICAgIHJldHVybiBlcnJvcjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdFxuXHQgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcblx0ICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuXHQgICAgICBjYXNlICdudW1iZXInOlxuXHQgICAgICBjYXNlICdzdHJpbmcnOlxuXHQgICAgICBjYXNlICd1bmRlZmluZWQnOlxuXHQgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICBjYXNlICdib29sZWFuJzpcblx0ICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcblx0ICAgICAgY2FzZSAnb2JqZWN0Jzpcblx0ICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG5cdCAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuXHQgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcblx0ICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuXHQgICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG5cdCAgICAgICAgICB2YXIgc3RlcDtcblx0ICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuXHQgICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG5cdCAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuXHQgICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG5cdCAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcblx0ICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcblx0ICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuXHQgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICBkZWZhdWx0OlxuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcblx0ICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG5cdCAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG5cdCAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfVxuXHRcblx0ICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG5cdCAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG5cdCAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfVxuXHRcblx0ICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cblx0ICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuXHQgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH1cblx0XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXHRcblx0ICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG5cdCAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG5cdCAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuXHQgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuXHQgICAgICByZXR1cm4gJ2FycmF5Jztcblx0ICAgIH1cblx0ICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcblx0ICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuXHQgICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cblx0ICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG5cdCAgICAgIHJldHVybiAnb2JqZWN0Jztcblx0ICAgIH1cblx0ICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuXHQgICAgICByZXR1cm4gJ3N5bWJvbCc7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gcHJvcFR5cGU7XG5cdCAgfVxuXHRcblx0ICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG5cdCAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG5cdCAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG5cdCAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG5cdCAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcblx0ICAgIH1cblx0ICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG5cdCAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG5cdCAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdCAgICAgICAgcmV0dXJuICdkYXRlJztcblx0ICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcblx0ICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiBwcm9wVHlwZTtcblx0ICB9XG5cdFxuXHQgIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cblx0ICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuXHQgIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuXHQgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG5cdCAgICBzd2l0Y2ggKHR5cGUpIHtcblx0ICAgICAgY2FzZSAnYXJyYXknOlxuXHQgICAgICBjYXNlICdvYmplY3QnOlxuXHQgICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG5cdCAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuXHQgICAgICBjYXNlICdkYXRlJzpcblx0ICAgICAgY2FzZSAncmVnZXhwJzpcblx0ICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG5cdCAgICAgIGRlZmF1bHQ6XG5cdCAgICAgICAgcmV0dXJuIHR5cGU7XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuXHQgIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcblx0ICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuXHQgICAgICByZXR1cm4gQU5PTllNT1VTO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuXHQgIH1cblx0XG5cdCAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcblx0ICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblx0XG5cdCAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xuXHR9O1xuXHRcblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18oNSkpKVxuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0XG5cdC8qKlxuXHQgKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cblx0ICpcblx0ICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG5cdCAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblx0ICpcblx0ICogXG5cdCAqL1xuXHRcblx0ZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBhcmc7XG5cdCAgfTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG5cdCAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG5cdCAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG5cdCAqL1xuXHR2YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblx0XG5cdGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcblx0ZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuXHRlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuXHRlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuXHRlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcblx0ICByZXR1cm4gdGhpcztcblx0fTtcblx0ZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuXHQgIHJldHVybiBhcmc7XG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7LyoqXG5cdCAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuXHQgKlxuXHQgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcblx0ICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXHQgKlxuXHQgKi9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG5cdCAqXG5cdCAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG5cdCAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuXHQgKiBleHBlY3RpbmcuXG5cdCAqXG5cdCAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG5cdCAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cblx0ICovXG5cdFxuXHR2YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXHRcblx0aWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcblx0ICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuXHQgICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcblx0ICAgIH1cblx0ICB9O1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcblx0ICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXHRcblx0ICBpZiAoIWNvbmRpdGlvbikge1xuXHQgICAgdmFyIGVycm9yO1xuXHQgICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcblx0ICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcblx0ICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcblx0ICAgICAgfSkpO1xuXHQgICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuXHQgICAgfVxuXHRcblx0ICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcblx0ICAgIHRocm93IGVycm9yO1xuXHQgIH1cblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKSlcblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHByb2Nlc3MpIHsvKipcblx0ICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG5cdCAqXG5cdCAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuXHQgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cdCAqXG5cdCAqL1xuXHRcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIGVtcHR5RnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHRcblx0LyoqXG5cdCAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cblx0ICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuXHQgKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuXHQgKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cblx0ICovXG5cdFxuXHR2YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cdFxuXHRpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuXHQgIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG5cdCAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG5cdCAgICB9XG5cdFxuXHQgICAgdmFyIGFyZ0luZGV4ID0gMDtcblx0ICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuXHQgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcblx0ICAgIH0pO1xuXHQgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuXHQgICAgfVxuXHQgICAgdHJ5IHtcblx0ICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuXHQgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcblx0ICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG5cdCAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcblx0ICAgIH0gY2F0Y2ggKHgpIHt9XG5cdCAgfTtcblx0XG5cdCAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcblx0ICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuXHQgICAgfVxuXHRcblx0ICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcblx0ICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuXHQgICAgfVxuXHRcblx0ICAgIGlmICghY29uZGl0aW9uKSB7XG5cdCAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcblx0ICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuXHQgICAgfVxuXHQgIH07XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18oNSkpKVxuXG4vKioqLyB9KSxcbi8qIDEwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Lypcblx0b2JqZWN0LWFzc2lnblxuXHQoYykgU2luZHJlIFNvcmh1c1xuXHRAbGljZW5zZSBNSVRcblx0Ki9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0LyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblx0dmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cdHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cdHZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblx0XG5cdGZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRcdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdFx0fVxuXHRcblx0XHRyZXR1cm4gT2JqZWN0KHZhbCk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XG5cdFx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cdFxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XG5cdFx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0XHR9KTtcblx0XHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdFx0dmFyIHRlc3QzID0ge307XG5cdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHRcdH0pO1xuXHRcdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0XHR2YXIgZnJvbTtcblx0XHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHRcdHZhciBzeW1ib2xzO1xuXHRcblx0XHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXHRcblx0XHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFxuXHRcdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcblx0XHRyZXR1cm4gdG87XG5cdH07XG5cblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cblx0ICpcblx0ICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG5cdCAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblx0ICovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG4vKioqLyB9KSxcbi8qIDEyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHByb2Nlc3MpIHsvKipcblx0ICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG5cdCAqXG5cdCAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuXHQgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG5cdCAqL1xuXHRcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0aWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcblx0ICB2YXIgaW52YXJpYW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblx0ICB2YXIgd2FybmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdCAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdCAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuXHR9XG5cdFxuXHQvKipcblx0ICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuXHQgKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cblx0ICpcblx0ICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcblx0ICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cblx0ICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cblx0ICogQHByaXZhdGVcblx0ICovXG5cdGZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcblx0ICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuXHQgICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuXHQgICAgICBpZiAodHlwZVNwZWNzLmhhc093blByb3BlcnR5KHR5cGVTcGVjTmFtZSkpIHtcblx0ICAgICAgICB2YXIgZXJyb3I7XG5cdCAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cblx0ICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG5cdCAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcblx0ICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cblx0ICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAndGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCVzYC4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSk7XG5cdCAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuXHQgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG5cdCAgICAgICAgICBlcnJvciA9IGV4O1xuXHQgICAgICAgIH1cblx0ICAgICAgICB3YXJuaW5nKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpO1xuXHQgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG5cdCAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcblx0ICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG5cdCAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXHRcblx0ICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXHRcblx0ICAgICAgICAgIHdhcm5pbmcoZmFsc2UsICdGYWlsZWQgJXMgdHlwZTogJXMlcycsIGxvY2F0aW9uLCBlcnJvci5tZXNzYWdlLCBzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJyk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuXHRcblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18oNSkpKVxuXG4vKioqLyB9KSxcbi8qIDEzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyoqXG5cdCAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuXHQgKlxuXHQgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcblx0ICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXHQgKi9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciBlbXB0eUZ1bmN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblx0dmFyIGludmFyaWFudCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cdHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0ICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG5cdCAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuXHQgICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIGludmFyaWFudChcblx0ICAgICAgZmFsc2UsXG5cdCAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcblx0ICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuXHQgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcblx0ICAgICk7XG5cdCAgfTtcblx0ICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuXHQgIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG5cdCAgICByZXR1cm4gc2hpbTtcblx0ICB9O1xuXHQgIC8vIEltcG9ydGFudCFcblx0ICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cblx0ICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG5cdCAgICBhcnJheTogc2hpbSxcblx0ICAgIGJvb2w6IHNoaW0sXG5cdCAgICBmdW5jOiBzaGltLFxuXHQgICAgbnVtYmVyOiBzaGltLFxuXHQgICAgb2JqZWN0OiBzaGltLFxuXHQgICAgc3RyaW5nOiBzaGltLFxuXHQgICAgc3ltYm9sOiBzaGltLFxuXHRcblx0ICAgIGFueTogc2hpbSxcblx0ICAgIGFycmF5T2Y6IGdldFNoaW0sXG5cdCAgICBlbGVtZW50OiBzaGltLFxuXHQgICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcblx0ICAgIG5vZGU6IHNoaW0sXG5cdCAgICBvYmplY3RPZjogZ2V0U2hpbSxcblx0ICAgIG9uZU9mOiBnZXRTaGltLFxuXHQgICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuXHQgICAgc2hhcGU6IGdldFNoaW0sXG5cdCAgICBleGFjdDogZ2V0U2hpbVxuXHQgIH07XG5cdFxuXHQgIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcblx0ICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblx0XG5cdCAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuLyogMTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1oaWdobGlnaHQtd29yZHMvZGlzdC9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgU3VnZ2VzdGlvblN1YnRleHQgPSAoe2NoaWxkcmVufSkgPT4ge1xuICByZXR1cm4gY2hpbGRyZW4gPyA8ZGl2IGNsYXNzTmFtZT1cInN1Z2dlc3Rpb25zLXN1YnRleHRcIj57Y2hpbGRyZW59PC9kaXY+IDogbnVsbDtcbn07XG5cblxuU3VnZ2VzdGlvblN1YnRleHQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblN1Z2dlc3Rpb25TdWJ0ZXh0LmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0aW9uU3VidGV4dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1N1Z2dlc3Rpb25TdWJ0ZXh0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFF1ZXJ5SW5wdXQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7bG9hZGluZ30gPSBwcm9wcztcbiAgICBjb25zdCBjbGFzc05hbWUgPSBgc3VnZ2VzdGlvbnMtaW5wdXQke2xvYWRpbmcgPyAnIGxvYWRpbmcnIDogJycgfWA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG4gICAgICAgIHBsYWNlaG9sZGVyID0geyBwcm9wcy5wbGFjZWhvbGRlciB9XG4gICAgICAgIG9uQ2hhbmdlPXsgcHJvcHMub25DaGFuZ2UgfVxuICAgICAgICB2YWx1ZT17IHByb3BzLnF1ZXJ5IH1cbiAgICAgICAgb25Nb3VzZURvd249eyBwcm9wcy5vbk1vdXNlRG93biB9XG4gICAgICAgIG9uS2V5UHJlc3M9eyBwcm9wcy5vbktleVByZXNzIH1cbiAgICAgICAgb25LZXlEb3duPXsgcHJvcHMub25LZXlQcmVzcyB9XG4gICAgICAgIG9uQmx1cj17IHByb3BzLm9uQmx1ciB9XG4gICAgICAgIG9uRm9jdXM9eyBwcm9wcy5vbkZvY3VzIH1cbiAgICAgIC8+XG4gICAgKTtcbn07XG5cblF1ZXJ5SW5wdXQucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbk1vdXNlRG93bjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25LZXlQcmVzczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgcXVlcnk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cblF1ZXJ5SW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBsb2FkaW5nOiBmYWxzZSxcbiAgcGxhY2Vob2xkZXI6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlcnlJbnB1dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1F1ZXJ5SW5wdXQuanMiLCJpbXBvcnQge1xuICBFbnRlckhhbmRsZXIsXG4gIFRhYkhhbmRsZXIsXG4gIEVzY2FwZUhhbmRsZXIsXG4gIEFycm93VXBIYW5kbGVyLFxuICBBcnJvd0Rvd25IYW5kbGVyLFxufSBmcm9tIFwiLi9pbmRleFwiO1xuXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhlKSB7XG5cbiAgaWYgKGUuc2hpZnRLZXkgfHwgZS5jdHJsS2V5IHx8IGUuYWx0S2V5KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlcnMgPSBbXG4gICAgbmV3IEFycm93VXBIYW5kbGVyKGUsIHRoaXMpLFxuICAgIG5ldyBBcnJvd0Rvd25IYW5kbGVyKGUsIHRoaXMpLFxuICAgIG5ldyBFbnRlckhhbmRsZXIoZSwgdGhpcyksXG4gICAgbmV3IFRhYkhhbmRsZXIoZSwgdGhpcyksXG4gICAgbmV3IEVzY2FwZUhhbmRsZXIoZSwgdGhpcyksXG4gIF07XG5cbiAgaGFuZGxlcnMubWFwKGhhbmRsZXIgPT4ge1xuICAgIGlmIChoYW5kbGVyLktFWV9DT0RFID09PSBlLndoaWNoKSB7XG4gICAgICBoYW5kbGVyLmhhbmRsZSgpO1xuICAgIH1cbiAgfSk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlS2V5UHJlc3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hhbmRsZXJzL2hhbmRsZUtleVByZXNzLmpzIiwiaW1wb3J0IHsgRW50ZXJIYW5kbGVyIH0gZnJvbSBcIi4vaW5kZXhcIlxuXG5mdW5jdGlvbiBUYWJIYW5kbGVyKGUsIGNvbnRleHQpIHtcblxuICBjb25zdCBLRVlfQ09ERSA9IDk7XG4gIGNvbnN0IGhhbmRsZSA9ICgpID0+IHtcbiAgICBjb25zdCB7c2hvd1N1Z2dlc3Rpb25zfSA9IGNvbnRleHQuc3RhdGU7XG4gICAgaWYgKHNob3dTdWdnZXN0aW9ucykge1xuICAgICAgY29uc3QgZW50ZXJIYW5kbGVyID0gbmV3IEVudGVySGFuZGxlcihlLCBjb250ZXh0KTtcbiAgICAgIGVudGVySGFuZGxlci5oYW5kbGUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBLRVlfQ09ERTogS0VZX0NPREUsXG4gICAgaGFuZGxlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiSGFuZGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlcnMvVGFiSGFuZGxlci5qcyIsImZ1bmN0aW9uIEVudGVySGFuZGxlcihlLCBjb250ZXh0KSB7XG5cbiAgY29uc3QgS0VZX0NPREUgPSAxMztcblxuICBjb25zdCBoYW5kbGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZCwgc3VnZ2VzdGlvbnMgfSA9IGNvbnRleHQuc3RhdGU7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChzZWxlY3RlZCAhPT0gLTEpIHtcbiAgICAgIGNvbnRleHQuaGFuZGxlU2VsZWN0KHNlbGVjdGVkKSgpO1xuICAgICAgY29udGV4dC5tYWtlTGlzdEludmlzaWJsZSgpO1xuICAgIH0gZWxzZSBpZiAoISFzdWdnZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHsgcXVlcnkgfSA9IGNvbnRleHQuc3RhdGU7XG4gICAgICBjb25zdCB0cmltbWVkUXVlcnkgPSBxdWVyeS50cmltKCk7XG4gICAgICBjb25zdCBpbmRleCA9IHN1Z2dlc3Rpb25zLmZpbmRJbmRleCgoe3ZhbHVlfSkgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHRyaW1tZWRRdWVyeTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb250ZXh0LmhhbmRsZVNlbGVjdChpbmRleCkoKTtcbiAgICAgICAgY29udGV4dC5tYWtlTGlzdEludmlzaWJsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIEtFWV9DT0RFOiBLRVlfQ09ERSxcbiAgICBoYW5kbGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRlckhhbmRsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hhbmRsZXJzL0VudGVySGFuZGxlci5qcyIsImZ1bmN0aW9uIEVzY2FwZUhhbmRsZXIoZSwgY29udGV4dCkge1xuICBjb25zdCBLRVlfQ09ERSA9IDI3O1xuICBjb25zdCBoYW5kbGUgPSAoKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnRleHQubWFrZUxpc3RJbnZpc2libGUoKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBLRVlfQ09ERTogS0VZX0NPREUsXG4gICAgaGFuZGxlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXNjYXBlSGFuZGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlcnMvRXNjYXBlSGFuZGxlci5qcyIsImZ1bmN0aW9uIEFycm93VXBIYW5kbGVyKGUsIGNvbnRleHQpIHtcbiAgY29uc3QgS0VZX0NPREUgPSAzODtcbiAgY29uc3QgaGFuZGxlID0gKCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7c2VsZWN0ZWQsIHN1Z2dlc3Rpb25zLCBzaG93U3VnZ2VzdGlvbnN9ID0gY29udGV4dC5zdGF0ZTtcbiAgICBpZiAoIXNob3dTdWdnZXN0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtYXhTdWdnZXN0aW9uSW5kZXggPSBzdWdnZXN0aW9ucy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG5ld1NlbGVjdGVkID0gc2VsZWN0ZWQgPiAwID8gc2VsZWN0ZWQgLSAxIDogbWF4U3VnZ2VzdGlvbkluZGV4O1xuICAgIGNvbnRleHQuc2VsZWN0U3VnZ2VzdGlvbihuZXdTZWxlY3RlZCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBLRVlfQ09ERTogS0VZX0NPREUsXG4gICAgaGFuZGxlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyb3dVcEhhbmRsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hhbmRsZXJzL0Fycm93VXBIYW5kbGVyLmpzIiwiZnVuY3Rpb24gQXJyb3dEb3duSGFuZGxlcihlLCBjb250ZXh0KSB7XG5cbiAgY29uc3QgS0VZX0NPREUgPSA0MDtcblxuICBjb25zdCBoYW5kbGUgPSAoKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHtzZWxlY3RlZCwgc3VnZ2VzdGlvbnMsIHNob3dTdWdnZXN0aW9uc30gPSBjb250ZXh0LnN0YXRlO1xuXG4gICAgaWYgKCFzaG93U3VnZ2VzdGlvbnMgJiYgISFzdWdnZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGNvbnRleHQubWFrZUxpc3RWaXNpYmxlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFzaG93U3VnZ2VzdGlvbnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXhTdWdnZXN0aW9uSW5kZXggPSBzdWdnZXN0aW9ucy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG5ld1NlbGVjdGVkID0gc2VsZWN0ZWQgPCBtYXhTdWdnZXN0aW9uSW5kZXggPyBzZWxlY3RlZCArIDEgOiAwO1xuICAgIGNvbnRleHQuc2VsZWN0U3VnZ2VzdGlvbihuZXdTZWxlY3RlZCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBLRVlfQ09ERTogS0VZX0NPREUsXG4gICAgaGFuZGxlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyb3dEb3duSGFuZGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlcnMvQXJyb3dEb3duSGFuZGxlci5qcyIsImltcG9ydCBBcGkgZnJvbSAnLi9BcGknO1xuaW1wb3J0IHsgaGVhZGVyc0ZhY3RvcnksIHJlcXVlc3RGYWN0b3J5RmFjdG9yeSB9IGZyb20gJy4vaGVscGVycyc7XG5cbmNsYXNzIEZldGNoQXBpIGV4dGVuZHMgQXBpIHtcblxuICBjb25zdHJ1Y3RvcihhcGlVcmwsIHRva2VuLCBzZXJ2aWNlLCBsb2NhdGlvbiA9IHRydWUpIHtcbiAgICBzdXBlcih0b2tlbik7XG4gICAgdGhpcy5oZWFkZXJzID0gaGVhZGVyc0ZhY3RvcnkodG9rZW4pO1xuICAgIHRoaXMucmVxdWVzdEZhY3RvcnkgPSByZXF1ZXN0RmFjdG9yeUZhY3RvcnkodGhpcy5oZWFkZXJzKTtcbiAgICAvLyB0aGlzLmVuZHBvaW50ID0gYCR7YXBpVXJsfS8ke3NlcnZpY2V9YDtcbiAgICB0aGlzLmVuZHBvaW50ID0gYCR7YXBpVXJsfWA7XG4gICAgaWYgKGxvY2F0aW9uICYmIHNlcnZpY2UudG9Mb3dlckNhc2UoKSA9PT0gQXBpLkFERFJFU1MpIHtcbiAgICAgIHRoaXMuZGV0ZWN0QWRkcmVzcygpO1xuICAgIH1cbiAgfVxuXG4gIGRldGVjdEFkZHJlc3MgPSAoKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtBcGkuYXBpVXJsfS9kZXRlY3RBZGRyZXNzQnlJcGA7XG4gICAgY29uc3QgcmVxdWVzdCA9IHRoaXMucmVxdWVzdEZhY3RvcnkoZW5kcG9pbnQsICdHRVQnKTtcblxuICAgIGZldGNoKHJlcXVlc3QpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5sb2NhdGlvbi5kYXRhKVxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhID8gZGF0YS5rbGFkcl9pZCA6IG51bGwpXG4gICAgICAudGhlbihrbGFkcl9pZCA9PiB7XG4gICAgICAgIGlmIChrbGFkcl9pZCkge1xuICAgICAgICAgIHRoaXMubG9jYXRpb25zX2Jvb3N0ID0gWy4uLnRoaXMubG9jYXRpb25zX2Jvb3N0LCB7a2xhZHJfaWR9XVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IG51bGwpOyAvLyBqdXN0IGRpZVxuICB9O1xuXG4gIHN0YW5kYXJkaXphdGlvbnMgPSAoYm9keSkgPT4ge1xuICAgIGlmICghIXRoaXMubG9jYXRpb25zX2Jvb3N0Lmxlbmd0aCkge1xuICAgICAgYm9keS5sb2NhdGlvbnNfYm9vc3QgPSB0aGlzLmxvY2F0aW9uc19ib29zdDtcbiAgICB9XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3F1ZXJ5JywgYm9keS5xdWVyeSk7XG5cbiAgICAgcmV0dXJuIGZldGNoKHRoaXMuZW5kcG9pbnQsIHttZXRob2Q6ICdQT1NUJyxib2R5OmZvcm1EYXRhfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGZXRjaEFwaTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcGkvRmV0Y2hBcGkuanMiLCJjbGFzcyBBcGkge1xuICBzdGF0aWMgRklPID0gJ2Zpbyc7XG4gIHN0YXRpYyBBRERSRVNTID0gJ2FkZHJlc3MnO1xuICBzdGF0aWMgT1JHQU5JU0FUSU9OID0gJ3BhcnR5JztcbiAgc3RhdGljIEJBTksgPSAnYmFuayc7XG4gIHN0YXRpYyBFTUFJTCA9ICdlbWFpbCc7XG4gIHN0YXRpYyBOQU1FID0gJ25hbWUnO1xuXG4gIGNvbnN0cnVjdG9yKHRva2VuKSB7XG4gICAgdGhpcy5sb2NhdGlvbnNfYm9vc3QgPSBbXTtcbiAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwaS9BcGkuanMiLCJjb25zdCBoZWFkZXJzID0gKHRva2VuKSA9PiB7XG4gIHJldHVybiBuZXcgSGVhZGVycyh7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdBdXRob3JpemF0aW9uJzogYFRva2VuICR7dG9rZW59YCxcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcGkvaGVscGVycy9oZWFkZXJzLmpzIiwiY29uc3QgcmVxdWVzdEZhY3RvcnlGYWN0b3J5ID0gKGhlYWRlcnMpID0+IChlbmRwb2ludCwgbWV0aG9kLCBib2R5ID0gbnVsbCkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgZW5kcG9pbnQsXG4gICAgbWV0aG9kLFxuICAgIGhlYWRlcnNcbiAgfTtcbiAgaWYgKGJvZHkpIHtcbiAgICBwYXJhbXMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICB9XG4gIHJldHVybiBuZXcgUmVxdWVzdChlbmRwb2ludCwgcGFyYW1zKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RGYWN0b3J5RmFjdG9yeTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBpL2hlbHBlcnMvcmVxdWVzdC5qcyIsImNvbnN0IHJlcXVlc3RCb2R5ID0gKHF1ZXJ5LCB7IGNvdW50LCBzcGVjaWFsUmVxdWVzdE9wdGlvbnMgPSB7fSB9KSA9PiB7XG4gIHJldHVybiAoe1xuICAgIHF1ZXJ5LFxuICAgIGNvdW50LFxuICAgIC4uLnNwZWNpYWxSZXF1ZXN0T3B0aW9uc1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RCb2R5O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcGkvaGVscGVycy9yZXF1ZXN0Qm9keS5qcyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU0hPUlRfVFlQRVMgfSBmcm9tICcuL3Nob3J0VHlwZXMnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBbJ9Cw0L7QsdC7JywgJ9GA0LXRgdC/JywgJ9Cy0LsnLCAn0LMnLCAn0LPRgdC6JywgJ9C0JywgJ9C00LLQu9C0JywgJ9C00L3QvycsICfQtNC+0YAnLCAn0LTQvycsICfQttGCJywgJ9C40LwnLCAn0LonLCAn0LrQsicsICfQutCyLdC7JywgJ9C60LwnLCAn0LrQvtC80L0nLCAn0LrQvycsICfQu9C/0YUnLCAn0LwnLCAn0LzQutGAJywgJ9C90LDQsScsICfQvdC/JywgJ9C+0LHQuycsICfQvtGEJywgJ9C/JywgJ9C/0LPRgicsICfQv9C10YAnLCAn0L/QuycsICfQv9C70LDRgtGEJywgJ9GA0LfQtCcsICfRgNC/JywgJ9GALdC9JywgJ9GBJywgJ9GB0LsnLCAn0YHQvdGCJywgJ9GB0YInLCAn0YHRgtGAJywgJ9GC0LXRgCcsICfRgtGD0L8nLCAn0YPQuycsICfRhScsICfRiCddO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25zdGFudHMvc2hvcnRUeXBlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=
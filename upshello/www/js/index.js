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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@aerogear/push/dist/AbstractPushRegistration.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aerogear/push/dist/AbstractPushRegistration.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));
/**
 * Base class for push registration managers.
 */
var AbstractPushRegistration = /** @class */ (function () {
    function AbstractPushRegistration(configuration) {
        if (configuration) {
            this.validationError = this._validateConfig(configuration);
            if (this.validationError) {
                console.warn(this.validationError);
                return;
            }
        }
        else {
            this.validationError = "Push configuration is missing. UPS server registration will not work.";
            console.warn(this.validationError);
            return;
        }
        // configuration is valid
        var pushConfig = configuration;
        this.platformConfig = this.getPlatformConfig(pushConfig);
        this.variantId = this.platformConfig.variantID;
        var token = window.btoa(this.variantId + ":" + this.platformConfig.variantSecret);
        this.httpClient = axios_1.default.create({
            baseURL: pushConfig.url,
            timeout: 5000,
            headers: { "Authorization": "Basic " + token }
        });
        this.init();
    }
    /**
     * Unregister an application form the UPS.
     */
    AbstractPushRegistration.prototype.unregister = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storage, jsonCachedData, postData, deviceToken, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.validationError) {
                            throw new Error(this.validationError);
                        }
                        storage = window.localStorage;
                        jsonCachedData = storage.getItem(AbstractPushRegistration.REGISTRATION_DATA_KEY);
                        deviceToken = "";
                        if (jsonCachedData) {
                            postData = JSON.parse(jsonCachedData);
                            deviceToken = postData.deviceToken;
                        }
                        if (!deviceToken) {
                            throw new Error("Device token should not be empty");
                        }
                        if (!this.httpClient) return [3 /*break*/, 2];
                        endpoint = AbstractPushRegistration.API_PATH + "/" + deviceToken;
                        return [4 /*yield*/, this.httpClient.delete(endpoint, {})];
                    case 1:
                        _a.sent();
                        storage.removeItem(AbstractPushRegistration.REGISTRATION_DATA_KEY);
                        return [3 /*break*/, 3];
                    case 2: 
                    // It should never happend but...
                    throw new Error("Push is not properly configured");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Performs custom validations to the configuration.
     * If this method is overridden it gets automatically called before the standard validations are executed.
     * @param pushConfig The push configuration
     * @return undefined if no errors has been found, a string containing the detail of the error otherwise.
     */
    AbstractPushRegistration.prototype.validateConfig = function (pushConfig) {
        return undefined;
    };
    /**
     * This method is immediately called after all validations has been successfully concluded.
     * Subclasses should override this to perform custom initializations.
     */
    // tslint:disable-next-line: no-empty
    AbstractPushRegistration.prototype.init = function () { };
    /**
     * Performs general validation checks on the configuration.
     * @param pushConfig the configuration
     * @private
     */
    AbstractPushRegistration.prototype._validateConfig = function (pushConfig) {
        if (!pushConfig) {
            return "UnifiedPush server configuration not found";
        }
        if (!pushConfig.url) {
            return "UnifiedPush server URL not found";
        }
        var platformConfig = this.getPlatformConfig(pushConfig);
        if (!platformConfig) {
            return "Platform is not supported by UnifiedPush";
        }
        if (!platformConfig.variantID) {
            return "UnifiedPush VariantId is not defined";
        }
        var variantSecret = platformConfig.variantSecret;
        if (!variantSecret) {
            return "UnifiedPush VariantSecret is not defined";
        }
        return this.validateConfig(pushConfig);
    };
    AbstractPushRegistration.TYPE = "push";
    AbstractPushRegistration.REGISTRATION_DATA_KEY = "UPS_REGISTRATION_DATA";
    AbstractPushRegistration.REGISTRATION_TIMEOUT = 10000;
    AbstractPushRegistration.API_PATH = "rest/registry/device";
    return AbstractPushRegistration;
}());
exports.AbstractPushRegistration = AbstractPushRegistration;
//# sourceMappingURL=AbstractPushRegistration.js.map

/***/ }),

/***/ "./node_modules/@aerogear/push/dist/PushRegistration.js":
/*!**************************************************************!*\
  !*** ./node_modules/@aerogear/push/dist/PushRegistration.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var PushUtils_1 = __webpack_require__(/*! ./PushUtils */ "./node_modules/@aerogear/push/dist/PushUtils.js");
var impl_1 = __webpack_require__(/*! ./impl */ "./node_modules/@aerogear/push/dist/impl/index.js");
/**
 * AeroGear UPS registration SDK
 *
 * Usage:
 * // Initialize SDK first
 * app.init(config);
 * let registration = new PushRegistration();
 * registration.register("myAppleOrFirebaseToken");
 */
var PushRegistration = /** @class */ (function () {
    function PushRegistration(config) {
        if (!PushUtils_1.isNative()) {
            this.delegate = new impl_1.PushRegistrationWebpushImpl(config);
        }
        else {
            this.delegate = new impl_1.PushRegistrationCordovaImpl(config);
        }
    }
    /**
     * Register the callback that will receive the push message
     * @param onMessageReceivedCallback
     */
    PushRegistration.onMessageReceived = function (onMessageReceivedCallback) {
        if (!PushUtils_1.isNative()) {
            impl_1.PushRegistrationWebpushImpl.onMessageReceived(onMessageReceivedCallback);
        }
        else {
            impl_1.PushRegistrationCordovaImpl.onMessageReceived(onMessageReceivedCallback);
        }
    };
    /**
     * Register the application to the UPS.
     * @param options
     */
    PushRegistration.prototype.register = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.delegate.register(options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Unregister the application from the UPS.
     */
    PushRegistration.prototype.unregister = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.delegate.unregister()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return PushRegistration;
}());
exports.PushRegistration = PushRegistration;
//# sourceMappingURL=PushRegistration.js.map

/***/ }),

/***/ "./node_modules/@aerogear/push/dist/PushUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/@aerogear/push/dist/PushUtils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap in the Ripple emulator) nor
 * Cordova `onDeviceReady`, which would normally wait for a callback.
 *
 * @return {boolean} isMobileCordova
 */
exports.isMobileCordova = function () { return (typeof window !== "undefined" &&
    // tslint:disable-next-line:no-string-literal
    !!(window["cordova"] || window["phonegap"] || window["PhoneGap"])); };
/**
 * Detect if device is running in native environment as opposite to browser platform
 *
 * @return {boolean} Is running in native
 */
exports.isNative = function () { return exports.isMobileCordova(); };
exports.isCordovaAndroid = function () { return (window.device && window.device.platform === "Android"); };
exports.isCordovaIOS = function () { return (window.device && window.device.platform === "iOS"); };
//# sourceMappingURL=PushUtils.js.map

/***/ }),

/***/ "./node_modules/@aerogear/push/dist/impl/PushRegistrationCordovaImpl.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@aerogear/push/dist/impl/PushRegistrationCordovaImpl.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractPushRegistration_1 = __webpack_require__(/*! ../AbstractPushRegistration */ "./node_modules/@aerogear/push/dist/AbstractPushRegistration.js");
var PushUtils_1 = __webpack_require__(/*! ../PushUtils */ "./node_modules/@aerogear/push/dist/PushUtils.js");
/**
 * AeroGear UPS registration SDK - Cordova based implementation
 *
 * Usage:

 * let registration = new PushRegistrationCordovaImpl(config);
 * registration.register("myAppleOrFirebaseToken");
 */
var PushRegistrationCordovaImpl = /** @class */ (function (_super) {
    __extends(PushRegistrationCordovaImpl, _super);
    function PushRegistrationCordovaImpl(config) {
        return _super.call(this, config) || this;
    }
    PushRegistrationCordovaImpl.onMessageReceived = function (onMessageReceivedCallback) {
        PushRegistrationCordovaImpl.onMessageReceivedCallback = onMessageReceivedCallback;
    };
    /**
     * Register deviceToken for Android or IOS platforms
     *
     * @param options Push registration options
     */
    PushRegistrationCordovaImpl.prototype.register = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var alias = options.alias, categories = options.categories, timeout = options.timeout;
        if (this.validationError) {
            return Promise.reject(new Error(this.validationError));
        }
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return reject("UnifiedPush registration timeout"); }, (timeout) ? timeout : AbstractPushRegistration_1.AbstractPushRegistration.REGISTRATION_TIMEOUT);
            _this.push.on("registration", function (data) {
                if (_this.httpClient) {
                    var postData_1 = {
                        "deviceToken": data.registrationId,
                        "deviceType": window.device.model,
                        "operatingSystem": window.device.platform,
                        "osVersion": window.device.version,
                        "alias": alias,
                        "categories": categories
                    };
                    return _this.httpClient.post(AbstractPushRegistration_1.AbstractPushRegistration.API_PATH, postData_1)
                        .then(function () {
                        if (PushUtils_1.isCordovaAndroid() && _this.variantId) {
                            _this.subscribeToFirebaseTopic(_this.variantId);
                            if (options.categories) {
                                for (var _i = 0, _a = options.categories; _i < _a.length; _i++) {
                                    var category = _a[_i];
                                    _this.subscribeToFirebaseTopic(category);
                                }
                            }
                        }
                        var storage = window.localStorage;
                        storage.setItem(AbstractPushRegistration_1.AbstractPushRegistration.REGISTRATION_DATA_KEY, JSON.stringify(postData_1));
                        _this.push
                            .on("notification", function (notification) {
                            if (PushRegistrationCordovaImpl.onMessageReceivedCallback) {
                                PushRegistrationCordovaImpl.onMessageReceivedCallback(notification);
                            }
                        });
                        resolve();
                    })
                        .catch(reject);
                }
                else {
                    // It should never happend but...
                    return reject(new Error("Push is not properly configured"));
                }
            });
        });
    };
    /**
     * Unregister device for Android or IOS platforms
     */
    PushRegistrationCordovaImpl.prototype.unregister = function () {
        var _this = this;
        var storage = window.localStorage;
        var jsonCachedData = storage.getItem(AbstractPushRegistration_1.AbstractPushRegistration.REGISTRATION_DATA_KEY);
        return new Promise(function (resolve, reject) {
            _super.prototype.unregister.call(_this).then(function () {
                var postData;
                var categories;
                if (jsonCachedData) {
                    postData = JSON.parse(jsonCachedData);
                    categories = postData.categories;
                }
                if (PushUtils_1.isCordovaAndroid() && _this.variantId) {
                    _this.unsubscribeToFirebaseTopic(_this.variantId);
                    if (categories) {
                        for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
                            var category = categories_1[_i];
                            _this.unsubscribeToFirebaseTopic(category);
                        }
                    }
                }
                resolve();
            }).catch(reject);
        });
    };
    PushRegistrationCordovaImpl.prototype.getPlatformConfig = function (pushConfig) {
        if (PushUtils_1.isCordovaAndroid()) {
            return pushConfig.android;
        }
        else if (PushUtils_1.isCordovaIOS()) {
            return pushConfig.ios;
        }
        return undefined;
    };
    PushRegistrationCordovaImpl.prototype.validateConfig = function () {
        if (!window || !window.device || !window.PushNotification) {
            return "@aerogear/cordova-plugin-aerogear-push plugin not installed.";
        }
        return undefined;
    };
    PushRegistrationCordovaImpl.prototype.init = function () {
        this.push = window.PushNotification.init({
            android: {},
            ios: {
                alert: true,
                badge: true,
                sound: true
            }
        });
    };
    PushRegistrationCordovaImpl.prototype.subscribeToFirebaseTopic = function (topic) {
        this.push.subscribe(topic, function () {
            console.warn("FCM topic: " + topic + " subscribed");
        }, function (e) {
            console.warn("error:", e);
        });
    };
    PushRegistrationCordovaImpl.prototype.unsubscribeToFirebaseTopic = function (topic) {
        this.push.unsubscribe(topic, function () {
            console.warn("FCM topic: " + topic + " unsubscribed");
        }, function (e) {
            console.warn("error:", e);
        });
    };
    return PushRegistrationCordovaImpl;
}(AbstractPushRegistration_1.AbstractPushRegistration));
exports.PushRegistrationCordovaImpl = PushRegistrationCordovaImpl;
//# sourceMappingURL=PushRegistrationCordovaImpl.js.map

/***/ }),

/***/ "./node_modules/@aerogear/push/dist/impl/PushRegistrationWebpushImpl.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@aerogear/push/dist/impl/PushRegistrationWebpushImpl.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractPushRegistration_1 = __webpack_require__(/*! ../AbstractPushRegistration */ "./node_modules/@aerogear/push/dist/AbstractPushRegistration.js");
var Bowser = __importStar(__webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js"));
var DEFAULT_SERVICE_WORKER = "/service-worker.js";
/**
 * AeroGear UPS registration SDK - Webpush implementation
 *
 * Usage:
 * // Initialize SDK first
 * app.init(config);
 * let registration = new PushRegistration();
 * registration.register("myAppleOrFirebaseToken");
 */
var PushRegistrationWebpushImpl = /** @class */ (function (_super) {
    __extends(PushRegistrationWebpushImpl, _super);
    function PushRegistrationWebpushImpl(config) {
        return _super.call(this, config) || this;
        // The config is valid
    }
    PushRegistrationWebpushImpl.onMessageReceived = function (onMessageReceivedCallback) {
        PushRegistrationWebpushImpl.onMessageReceivedCallback = onMessageReceivedCallback;
    };
    PushRegistrationWebpushImpl.prototype.register = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var alias, categories, serviceWorker, subscription, userAgent, postData, storage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alias = options.alias, categories = options.categories, serviceWorker = options.serviceWorker;
                        if (this.validationError) {
                            throw new Error(this.validationError);
                        }
                        if (!this.httpClient) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.subscribeToWebPush(this.platformConfig.appServerKey, serviceWorker)];
                    case 1:
                        subscription = _a.sent();
                        userAgent = Bowser.parse(window.navigator.userAgent);
                        postData = {
                            "deviceToken": window.btoa(JSON.stringify(subscription)),
                            "deviceType": userAgent.browser.name,
                            "operatingSystem": userAgent.os.name,
                            "osVersion": userAgent.os.version,
                            "alias": alias,
                            "categories": categories
                        };
                        return [4 /*yield*/, this.httpClient.post(AbstractPushRegistration_1.AbstractPushRegistration.API_PATH, postData)];
                    case 2:
                        _a.sent();
                        storage = window.localStorage;
                        storage.setItem(AbstractPushRegistration_1.AbstractPushRegistration.REGISTRATION_DATA_KEY, JSON.stringify(postData));
                        navigator.serviceWorker.onmessage = function (event) {
                            if (PushRegistrationWebpushImpl.onMessageReceivedCallback) {
                                PushRegistrationWebpushImpl.onMessageReceivedCallback(event.data);
                            }
                        };
                        return [3 /*break*/, 4];
                    case 3: 
                    // It should never happend but...
                    throw new Error("Push is not properly configured");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PushRegistrationWebpushImpl.prototype.unregister = function () {
        return __awaiter(this, void 0, void 0, function () {
            var registrations, _i, registrations_1, registration;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.unregister.call(this)];
                    case 1:
                        _a.sent();
                        if (!("serviceWorker" in navigator)) return [3 /*break*/, 6];
                        return [4 /*yield*/, navigator.serviceWorker.getRegistrations()];
                    case 2:
                        registrations = _a.sent();
                        _i = 0, registrations_1 = registrations;
                        _a.label = 3;
                    case 3:
                        if (!(_i < registrations_1.length)) return [3 /*break*/, 6];
                        registration = registrations_1[_i];
                        return [4 /*yield*/, registration.unregister()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PushRegistrationWebpushImpl.prototype.getPlatformConfig = function (pushConfig) {
        return pushConfig.webpush;
    };
    PushRegistrationWebpushImpl.prototype.validateConfig = function (pushConfig) {
        var config = this.getPlatformConfig(pushConfig);
        if (!config || !config.appServerKey) {
            return "No appServerKey found in service configuration";
        }
    };
    PushRegistrationWebpushImpl.prototype.waitForServiceWorkerToBeReady = function (reg) {
        var serviceWorker;
        if (reg.installing) {
            serviceWorker = reg.installing;
        }
        else if (reg.waiting) {
            serviceWorker = reg.waiting;
        }
        else if (reg.active) {
            serviceWorker = reg.active;
        }
        return new Promise(function (resolve) {
            if (serviceWorker) {
                if (serviceWorker.state === "activated") {
                    resolve(reg);
                }
                serviceWorker.addEventListener("statechange", function (e) {
                    if (e.target.state === "activated") {
                        resolve(reg);
                    }
                });
            }
        });
    };
    PushRegistrationWebpushImpl.prototype.subscribeToWebPush = function (appServerKey, serviceWorker) {
        if (serviceWorker === void 0) { serviceWorker = DEFAULT_SERVICE_WORKER; }
        return __awaiter(this, void 0, void 0, function () {
            var permission, registration, subscribeOptions, pushSubscription;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!("serviceWorker" in navigator && "PushManager" in window)) return [3 /*break*/, 5];
                        return [4 /*yield*/, window.Notification.requestPermission()];
                    case 1:
                        permission = _a.sent();
                        if (permission !== "granted") {
                            throw new Error("Unable to subscribe to WebPush: no permissions");
                        }
                        return [4 /*yield*/, navigator.serviceWorker.register(serviceWorker)];
                    case 2:
                        registration = _a.sent();
                        return [4 /*yield*/, this.waitForServiceWorkerToBeReady(registration)];
                    case 3:
                        registration = _a.sent();
                        subscribeOptions = {
                            userVisibleOnly: true,
                            applicationServerKey: urlBase64ToUint8Array(appServerKey)
                        };
                        return [4 /*yield*/, registration.pushManager.subscribe(subscribeOptions)];
                    case 4:
                        pushSubscription = _a.sent();
                        return [2 /*return*/, {
                                endpoint: pushSubscription.endpoint,
                                keys: {
                                    p256dh: btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(pushSubscription.getKey("p256dh"))))),
                                    auth: btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(pushSubscription.getKey("auth")))))
                                }
                            }];
                    case 5: throw new Error("Push messages are not supported on the current platform");
                }
            });
        });
    };
    return PushRegistrationWebpushImpl;
}(AbstractPushRegistration_1.AbstractPushRegistration));
exports.PushRegistrationWebpushImpl = PushRegistrationWebpushImpl;
/**
 * urlBase64ToUint8Array
 *
 * @param {string} base64String a public vapid key
 */
function urlBase64ToUint8Array(base64String) {
    var padding = "=".repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, "+")
        .replace(/_/g, "/");
    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);
    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
//# sourceMappingURL=PushRegistrationWebpushImpl.js.map

/***/ }),

/***/ "./node_modules/@aerogear/push/dist/impl/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@aerogear/push/dist/impl/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./PushRegistrationCordovaImpl */ "./node_modules/@aerogear/push/dist/impl/PushRegistrationCordovaImpl.js"));
__export(__webpack_require__(/*! ./PushRegistrationWebpushImpl */ "./node_modules/@aerogear/push/dist/impl/PushRegistrationWebpushImpl.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@aerogear/push/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@aerogear/push/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./PushRegistration */ "./node_modules/@aerogear/push/dist/PushRegistration.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/bowser/es5.js":
/*!************************************!*\
  !*** ./node_modules/bowser/es5.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(18),n=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,i){void 0===i&&(i=!1);var n=e.getVersionPrecision(t),s=e.getVersionPrecision(r),o=Math.max(n,s),a=0,u=e.map([t,r],(function(t){var r=o-e.getVersionPrecision(t),i=t+new Array(r+1).join(".0");return e.map(i.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(i&&(a=o-Math.min(n,s)),o-=1;o>=a;){if(u[0][o]>u[1][o])return 1;if(u[0][o]===u[1][o]){if(o===a)return 0;o-=1}else if(u[0][o]<u[1][o])return-1}},e.map=function(e,t){var r,i=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)i.push(t(e[r]));return i},e.getBrowserAlias=function(e){return i.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return i.BROWSER_MAP[e]||""},e}();t.default=n,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"};t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"};t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(91))&&i.__esModule?i:{default:i},s=r(18);function o(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(){}var t,r,i;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new n.default(e,t)},e.parse=function(e){return new n.default(e).getResult()},t=e,i=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&o(t.prototype,r),i&&o(t,i),e}();t.default=a,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=u(r(92)),n=u(r(93)),s=u(r(94)),o=u(r(95)),a=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=i.default.find((function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=n.default.find((function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=s.default.find((function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=o.default.find((function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return Object.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},i=0,n={},s=0;if(Object.keys(e).forEach((function(t){var o=e[t];"string"==typeof o?(n[t]=o,s+=1):"object"==typeof o&&(r[t]=o,i+=1)})),i>0){var o=Object.keys(r),a=o.find((function(e){return t.isOS(e)}));if(a){var u=this.satisfies(r[a]);if(void 0!==u)return u}var d=o.find((function(e){return t.isPlatform(e)}));if(d){var c=this.satisfies(r[d]);if(void 0!==c)return c}}if(s>0){var f=Object.keys(n).find((function(e){return t.isBrowser(e,!0)}));if(void 0!==f)return this.compareVersion(n[f])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),i=e.toLowerCase(),n=a.default.getBrowserTypeByAlias(i);return t&&n&&(i=n.toLowerCase()),i===r},t.compareVersion=function(e){var t=[0],r=e,i=!1,n=this.getBrowserVersion();if("string"==typeof n)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(i=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(i=!0,r=e.substr(1)),t.indexOf(a.default.compareVersions(n,r,i))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e){return this.isBrowser(e)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(17))&&i.__esModule?i:{default:i};var s=/version\/(\d+(\.?_?\d+)+)/i,o=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=n.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=n.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=n.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=n.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=n.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=n.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=n.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=n.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=n.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=n.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=n.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=n.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=n.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=n.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=n.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=n.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=n.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=n.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=n.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=n.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=n.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=n.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=n.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=n.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:n.default.getFirstMatch(t,e),version:n.default.getSecondMatch(t,e)}}}];t.default=o,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(17))&&i.__esModule?i:{default:i},s=r(18);var o=[{test:[/Roku\/DVP/],describe:function(e){var t=n.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=n.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows/i],describe:function(e){var t=n.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=n.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/macintosh/i],describe:function(e){var t=n.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=n.default.getMacOSVersionName(t),i={name:s.OS_MAP.MacOS,version:t};return r&&(i.versionName=r),i}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=n.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=n.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=n.default.getAndroidVersionName(t),i={name:s.OS_MAP.Android,version:t};return r&&(i.versionName=r),i}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=n.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=n.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||n.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||n.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=n.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=n.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=n.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=o,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(17))&&i.__esModule?i:{default:i},s=r(18);var o=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=n.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:s.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=n.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=o,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(17))&&i.__esModule?i:{default:i},s=r(18);var o=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=n.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=n.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=n.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=n.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=n.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=o,e.exports=t.default}})}));

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aerogear_push__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aerogear/push */ "./node_modules/@aerogear/push/dist/index.js");
/* harmony import */ var _aerogear_push__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aerogear_push__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    this.receivedEvent('deviceready');
  },


  // Update DOM on a Received Event
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    this.registerToUPS();

    _aerogear_push__WEBPACK_IMPORTED_MODULE_0__["PushRegistration"].onMessageReceived((notification => {
      console.log('Received push notification: ', notification.message);
    }));
  },

  registerToUPS: () => {
    console.log('Registering...');
    new _aerogear_push__WEBPACK_IMPORTED_MODULE_0__["PushRegistration"]({
      url: 'http://10.0.2.2:9999/',
      android: {
        senderID: '211412359469',
        variantID: 'e828116a-c71b-44cb-84f1-7d13ce42c9b8',
        variantSecret: 'c07e0a10-b274-45f1-b7f5-01dc653d6e44'
      }
    })
    .register()
    .then(() => {
      console.log('Registered!');
    })
    .catch(error => {
      console.log('Failed: ', error.message, JSON.stringify(error))
    });
  }
};

app.initialize();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhZXJvZ2Vhci9wdXNoL2Rpc3QvQWJzdHJhY3RQdXNoUmVnaXN0cmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYWVyb2dlYXIvcHVzaC9kaXN0L1B1c2hSZWdpc3RyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhZXJvZ2Vhci9wdXNoL2Rpc3QvUHVzaFV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYWVyb2dlYXIvcHVzaC9kaXN0L2ltcGwvUHVzaFJlZ2lzdHJhdGlvbkNvcmRvdmFJbXBsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYWVyb2dlYXIvcHVzaC9kaXN0L2ltcGwvUHVzaFJlZ2lzdHJhdGlvbldlYnB1c2hJbXBsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYWVyb2dlYXIvcHVzaC9kaXN0L2ltcGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhZXJvZ2Vhci9wdXNoL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvd3Nlci9lczUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHVDQUF1Qyx3Q0FBd0M7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEOzs7Ozs7Ozs7Ozs7QUNuUGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxTQUFTLG1CQUFPLENBQUMsNkdBQStCO0FBQ2hELFNBQVMsbUJBQU8sQ0FBQyw2R0FBK0I7QUFDaEQsaUM7Ozs7Ozs7Ozs7OztBQ1BhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsU0FBUyxtQkFBTyxDQUFDLGtGQUFvQjtBQUNyQyxpQzs7Ozs7Ozs7Ozs7QUNOQSxpQkFBaUIsbUJBQU8sQ0FBQyxzREFBYSxFOzs7Ozs7Ozs7Ozs7QUNBekI7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxpRUFBa0I7QUFDdkMsZUFBZSxtQkFBTyxDQUFDLDJFQUF1QjtBQUM5QyxtQkFBbUIsbUJBQU8sQ0FBQyxtRkFBMkI7QUFDdEQsc0JBQXNCLG1CQUFPLENBQUMseUZBQThCO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLHlFQUFxQjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQU8sQ0FBQyx5RUFBc0I7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDN0thOztBQUViLFlBQVksbUJBQU8sQ0FBQyxrREFBUztBQUM3QixXQUFXLG1CQUFPLENBQUMsZ0VBQWdCO0FBQ25DLFlBQVksbUJBQU8sQ0FBQyw0REFBYztBQUNsQyxrQkFBa0IsbUJBQU8sQ0FBQyx3RUFBb0I7QUFDOUMsZUFBZSxtQkFBTyxDQUFDLHdEQUFZOztBQUVuQztBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxrRUFBaUI7QUFDeEMsb0JBQW9CLG1CQUFPLENBQUMsNEVBQXNCO0FBQ2xELGlCQUFpQixtQkFBTyxDQUFDLHNFQUFtQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsb0VBQWtCOztBQUV6Qzs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcERhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2xCYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsMkRBQVU7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3hEYTs7QUFFYjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7QUFDaEMsZUFBZSxtQkFBTyxDQUFDLHlFQUFxQjtBQUM1Qyx5QkFBeUIsbUJBQU8sQ0FBQyxpRkFBc0I7QUFDdkQsc0JBQXNCLG1CQUFPLENBQUMsMkVBQW1CO0FBQ2pELGtCQUFrQixtQkFBTyxDQUFDLG1FQUFlOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7OztBQ3JGYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNuRGE7O0FBRWIsbUJBQW1CLG1CQUFPLENBQUMscUVBQWdCOztBQUUzQztBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakJhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTtBQUNoQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RUFBaUI7QUFDN0MsZUFBZSxtQkFBTyxDQUFDLHVFQUFvQjtBQUMzQyxlQUFlLG1CQUFPLENBQUMseURBQWE7QUFDcEMsb0JBQW9CLG1CQUFPLENBQUMscUZBQTRCO0FBQ3hELGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLHVDQUF1QztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3JGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6Q2E7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLG1EQUFVOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xEYTs7QUFFYixrQkFBa0IsbUJBQU8sQ0FBQyxtRUFBZTs7QUFFekM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4QmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsZUFBZTtBQUMxQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJBLCtDQUFhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxrREFBUztBQUM3QiwwQkFBMEIsbUJBQU8sQ0FBQyw4RkFBK0I7O0FBRWpFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1CQUFPLENBQUMsaUVBQWlCO0FBQ3ZDLEdBQUc7QUFDSDtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxnRUFBZ0I7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sWUFBWTtBQUNuQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUNqR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEM7QUFDMUMsU0FBUzs7QUFFVDtBQUNBLDREQUE0RCx3QkFBd0I7QUFDcEY7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsK0JBQStCLGFBQWEsRUFBRTtBQUM5QztBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDcERhOztBQUViO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDbkVhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxtREFBVTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGVBQWU7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwRGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQmE7O0FBRWIsV0FBVyxtQkFBTyxDQUFDLGdFQUFnQjtBQUNuQyxlQUFlLG1CQUFPLENBQUMsb0RBQVc7O0FBRWxDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyxHQUFHLFNBQVM7QUFDNUMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQztBQUNoQyxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3VUEsZUFBZSxLQUFpRCxvQkFBb0IsU0FBMkcsQ0FBQyxrQkFBa0IsbUJBQW1CLFNBQVMsY0FBYyw0QkFBNEIsWUFBWSxxQkFBcUIsMkRBQTJELHVDQUF1QyxxQ0FBcUMsb0JBQW9CLEVBQUUsaUJBQWlCLDRGQUE0RixlQUFlLHdDQUF3QyxTQUFTLEVBQUUsbUJBQW1CLDhCQUE4QixxREFBcUQsMEJBQTBCLDZDQUE2QyxzQkFBc0IsNkRBQTZELFlBQVksZUFBZSxTQUFTLGlCQUFpQixpQ0FBaUMsaUJBQWlCLFlBQVksVUFBVSxzQkFBc0IsbUJBQW1CLGlEQUFpRCxrQkFBa0IsRUFBRSxtQkFBbUIsYUFBYSxpQ0FBaUMseUJBQXlCLGNBQWMscUNBQXFDLGlCQUFpQiwrQkFBK0IsZ0NBQWdDLGlCQUFpQiwrQkFBK0IsdUNBQXVDLHNCQUFzQixxQ0FBcUMsVUFBVSxvQkFBb0Isb0JBQW9CLDBCQUEwQix3QkFBd0IsMEJBQTBCLDJCQUEyQix1QkFBdUIsdUJBQXVCLHlCQUF5Qix5QkFBeUIsZ0JBQWdCLG1DQUFtQyxnREFBZ0QseUJBQXlCLEdBQUcsb0NBQW9DLHVCQUF1Qiw0QkFBNEIsb0JBQW9CLDZCQUE2Qix5QkFBeUIseUJBQXlCLDJCQUEyQix1QkFBdUIsNEJBQTRCLHVCQUF1Qix5QkFBeUIsZ0JBQWdCLHFDQUFxQyxnREFBZ0QseUJBQXlCLEdBQUcsd1lBQXdZLG1DQUFtQywyQkFBMkIsbUNBQW1DLG1CQUFtQix5R0FBeUcsK0RBQStELHVDQUF1QywwQ0FBMEMsYUFBYSxHQUFHLGdDQUFnQyxLQUFLLEVBQUUsNEJBQTRCLHNCQUFzQixrQkFBa0IsS0FBSyxrQ0FBa0MscUJBQXFCLFdBQVcsNERBQTRELFFBQVEsV0FBVyxxQkFBcUIsU0FBUywrQkFBK0IsZ0NBQWdDLHFDQUFxQyw0QkFBNEIsR0FBRyxHQUFHLGdDQUFnQyxvQkFBb0IsYUFBYSxpR0FBaUcsdUJBQXVCLGd4QkFBZ3hCLGVBQWUsMnZCQUEydkIsaUJBQWlCLDJEQUEyRCxVQUFVLHNPQUFzTyxjQUFjLG1HQUFtRyxvQkFBb0IsYUFBYSxpQ0FBaUMsbUNBQW1DLFVBQVUsU0FBUyxnQkFBZ0IsWUFBWSxXQUFXLEtBQUssV0FBVywrR0FBK0csaUJBQWlCLGNBQWMsVUFBVSxpQ0FBaUMseUZBQXlGLDBCQUEwQixxQkFBcUIsb0NBQW9DLFNBQVMsaUNBQWlDLHNCQUFzQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSw0QkFBNEIsaUJBQWlCLEVBQUUsbUNBQW1DLHdCQUF3Qix5Q0FBeUMsR0FBRyxnQ0FBZ0Msb0JBQW9CLGFBQWEsaUNBQWlDLDJEQUEyRCxjQUFjLDBCQUEwQixXQUFXLGlCQUFpQixnQkFBZ0IsNEZBQTRGLCtCQUErQixzQkFBc0Isa0JBQWtCLDBCQUEwQixnQkFBZ0Isb0JBQW9CLHdCQUF3QiwyQkFBMkIsV0FBVyw2QkFBNkIsa0NBQWtDLDhDQUE4QywyREFBMkQsaUJBQWlCLEdBQUcsd0RBQXdELEdBQUcseUZBQXlGLHlCQUF5QiwrRUFBK0UsOEJBQThCLHFGQUFxRixnQ0FBZ0MsaUNBQWlDLG9CQUFvQixnRUFBZ0Usc0JBQXNCLFdBQVcsd0JBQXdCLGtDQUFrQyw4Q0FBOEMsMkRBQTJELGlCQUFpQixHQUFHLHdEQUF3RCxHQUFHLCtFQUErRSx5QkFBeUIsd0JBQXdCLDJDQUEyQywyQkFBMkIsNEJBQTRCLDBCQUEwQixrRkFBa0YsK0JBQStCLG1CQUFtQiw4QkFBOEIsMkNBQTJDLDRCQUE0QixXQUFXLDhCQUE4QixrQ0FBa0MsOENBQThDLDJEQUEyRCxpQkFBaUIsR0FBRyx3REFBd0QsR0FBRywyRkFBMkYsd0JBQXdCLDRFQUE0RSw2QkFBNkIsbUZBQW1GLDBCQUEwQixXQUFXLDRCQUE0QixrQ0FBa0MsOENBQThDLDJEQUEyRCxpQkFBaUIsR0FBRyx3REFBd0QsR0FBRyx1RkFBdUYsb0JBQW9CLHVGQUF1Rix3QkFBd0IsdUJBQXVCLG9CQUFvQix5QkFBeUIsZUFBZSxTQUFTLEtBQUssdUNBQXVDLFdBQVcsbUVBQW1FLFFBQVEsMkNBQTJDLGlCQUFpQixHQUFHLE1BQU0sMkJBQTJCLHVCQUF1QiwwQkFBMEIsdUJBQXVCLEdBQUcsTUFBTSwyQkFBMkIsd0JBQXdCLFFBQVEsdUNBQXVDLHlCQUF5QixHQUFHLGdEQUFnRCwyQkFBMkIsbUJBQW1CLGlHQUFpRyx1Q0FBdUMsOEJBQThCLDhDQUE4QyxpUEFBaVAsb0JBQW9CLG9EQUFvRCwwQkFBMEIsMERBQTBELHdCQUF3Qix3REFBd0Qsa0JBQWtCLDJEQUEyRCxvQkFBb0IsV0FBVyw4Q0FBOEMsZUFBZSxHQUFHLEdBQUcsR0FBRyxnQ0FBZ0Msb0JBQW9CLGFBQWEsaUNBQWlDLG1DQUFtQyxXQUFXLHVDQUF1Qyx5Q0FBeUMsT0FBTyxpQkFBaUIsdUZBQXVGLDJCQUEyQixFQUFFLHFDQUFxQyxPQUFPLGFBQWEsOEZBQThGLDJCQUEyQixFQUFFLDJDQUEyQyxPQUFPLGFBQWEsdUZBQXVGLDJCQUEyQixFQUFFLDhDQUE4QyxPQUFPLG9DQUFvQyx1R0FBdUcsMkJBQTJCLEVBQUUscUNBQXFDLE9BQU8sMkJBQTJCLDZGQUE2RiwyQkFBMkIsRUFBRSx5Q0FBeUMsT0FBTyxrQkFBa0IsaUdBQWlHLDJCQUEyQixFQUFFLHFDQUFxQyxPQUFPLGFBQWEsNkZBQTZGLDJCQUEyQixFQUFFLHFDQUFxQyxPQUFPLGFBQWEsNkZBQTZGLDJCQUEyQixFQUFFLHFDQUFxQyxPQUFPLG1CQUFtQiw4RkFBOEYsMkJBQTJCLEVBQUUseUNBQXlDLE9BQU8sc0JBQXNCLGtHQUFrRywyQkFBMkIsRUFBRSx5Q0FBeUMsT0FBTyxrQkFBa0Isa0dBQWtHLDJCQUEyQixFQUFFLDZDQUE2QyxPQUFPLGVBQWUsc0dBQXNHLDJCQUEyQixFQUFFLHdDQUF3QyxPQUFPLGdCQUFnQixpR0FBaUcsMkJBQTJCLEVBQUUsc0NBQXNDLE9BQU8sY0FBYywrRkFBK0YsMkJBQTJCLEVBQUUsd0NBQXdDLE9BQU8sZ0JBQWdCLGlHQUFpRywyQkFBMkIsRUFBRSx3Q0FBd0MsT0FBTyxnQkFBZ0IsaUdBQWlHLDJCQUEyQixFQUFFLDhDQUE4QyxPQUFPLGNBQWMsdUdBQXVHLDJCQUEyQixFQUFFLHlDQUF5QyxPQUFPLDZEQUE2RCw4R0FBOEcsMkJBQTJCLEVBQUUsNENBQTRDLE9BQU8seUJBQXlCLCtEQUErRCwyQkFBMkIsRUFBRSx1Q0FBdUMsT0FBTyxzQkFBc0IseURBQXlELDJCQUEyQixFQUFFLDZDQUE2QyxPQUFPLHNCQUFzQixrRUFBa0UsMkJBQTJCLEVBQUUsdUNBQXVDLE9BQU8sZUFBZSwyREFBMkQsMkJBQTJCLEVBQUUseUNBQXlDLE9BQU8saUJBQWlCLDZEQUE2RCwyQkFBMkIsRUFBRSx3Q0FBd0MsT0FBTyxnQkFBZ0IsbUVBQW1FLDJCQUEyQixFQUFFLG9DQUFvQyxPQUFPLG1CQUFtQix3REFBd0QsMkJBQTJCLEVBQUUsdUNBQXVDLE9BQU8saUJBQWlCLDZEQUE2RCwyQkFBMkIsRUFBRSx3Q0FBd0MsT0FBTyxnQkFBZ0IsNERBQTRELDJCQUEyQixFQUFFLGlFQUFpRSxPQUFPLGtCQUFrQixpR0FBaUcsMkJBQTJCLEVBQUUsOENBQThDLE9BQU8scUJBQXFCLHNHQUFzRywyQkFBMkIsRUFBRSxvQ0FBb0MsT0FBTyxZQUFZLDBEQUEwRCwyQkFBMkIsRUFBRSxxQ0FBcUMsT0FBTyxhQUFhLHNHQUFzRywyQkFBMkIsRUFBRSx3Q0FBd0MsT0FBTyxnQkFBZ0IsaUdBQWlHLDJCQUEyQixFQUFFLHVEQUF1RCxPQUFPLGVBQWUsa0ZBQWtGLDJCQUEyQixFQUFFLHdDQUF3QyxPQUFPLGdCQUFnQixpR0FBaUcsMkJBQTJCLEVBQUUsaURBQWlELE9BQU8sY0FBYyx5RUFBeUUsMkJBQTJCLEVBQUUsbUNBQW1DLE9BQU8scUJBQXFCLDJEQUEyRCwyQkFBMkIsRUFBRSxpQkFBaUIsb0RBQW9ELFlBQVksc0JBQXNCLE9BQU8sdUJBQXVCLGdDQUFnQywyQkFBMkIsRUFBRSw2Q0FBNkMsT0FBTyxxQkFBcUIsZ0NBQWdDLDJCQUEyQixFQUFFLGtEQUFrRCxPQUFPLGNBQWMsZ0NBQWdDLDJCQUEyQixFQUFFLGtDQUFrQyxtRUFBbUUsT0FBTywwRUFBMEUsRUFBRSxnQ0FBZ0Msb0JBQW9CLGFBQWEsaUNBQWlDLG1DQUFtQyxVQUFVLFNBQVMsUUFBUSx3Q0FBd0MseURBQXlELE9BQU8sK0JBQStCLEVBQUUsNkNBQTZDLDBFQUEwRSxPQUFPLHVDQUF1QyxFQUFFLHVDQUF1Qyx1R0FBdUcsT0FBTyxnREFBZ0QsRUFBRSx5Q0FBeUMsMEhBQTBILCtCQUErQiwrQkFBK0IsRUFBRSxrREFBa0QsNEZBQTRGLE9BQU8sOEJBQThCLEVBQUUsaUJBQWlCLG9EQUFvRCxZQUFZLHNCQUFzQix1R0FBdUcsaUNBQWlDLCtCQUErQixFQUFFLDhDQUE4Qyx1RUFBdUUscUJBQXFCLHFDQUFxQyxFQUFFLGlFQUFpRSwyS0FBMkssT0FBTyxxQ0FBcUMsRUFBRSxvQ0FBb0Msd0RBQXdELE9BQU8sK0JBQStCLEVBQUUscUNBQXFDLDREQUE0RCxPQUFPLGdDQUFnQyxFQUFFLG9DQUFvQyxPQUFPLHNCQUFzQixFQUFFLGtDQUFrQyxPQUFPLHlCQUF5QixFQUFFLDRDQUE0QyxvRUFBb0UsT0FBTyx1Q0FBdUMsRUFBRSxnQ0FBZ0Msb0JBQW9CLGFBQWEsaUNBQWlDLG1DQUFtQyxVQUFVLFNBQVMsUUFBUSx3Q0FBd0MsT0FBTyw2QkFBNkIsRUFBRSxzQ0FBc0MseURBQXlELDZDQUE2Qyx5QkFBeUIsRUFBRSxxREFBcUQsT0FBTyw2Q0FBNkMsRUFBRSxtQ0FBbUMsT0FBTywwREFBMEQsRUFBRSx5Q0FBeUMsT0FBTyx1RUFBdUUsRUFBRSxtQ0FBbUMsT0FBTyw4Q0FBOEMsRUFBRSw0Q0FBNEMsT0FBTyw4QkFBOEIsRUFBRSxpQkFBaUIsNkRBQTZELGFBQWEsc0JBQXNCLGtEQUFrRCxPQUFPLHFEQUFxRCxFQUFFLDhEQUE4RCxPQUFPLDZDQUE2QyxFQUFFLHVDQUF1QyxPQUFPLDhCQUE4QixFQUFFLGlCQUFpQiwwQ0FBMEMscUJBQXFCLE9BQU8sa0RBQWtELEVBQUUsaUJBQWlCLG9DQUFvQyxxQkFBcUIsT0FBTyw4QkFBOEIsRUFBRSxpQkFBaUIsMkNBQTJDLHFCQUFxQixPQUFPLGlEQUFpRCxFQUFFLGlCQUFpQixxREFBcUQsd0NBQXdDLHFCQUFxQixPQUFPLDhCQUE4QixFQUFFLGlCQUFpQixrQ0FBa0MscUJBQXFCLE9BQU8sOEJBQThCLEVBQUUsaUJBQWlCLGdDQUFnQyxxQkFBcUIsT0FBTyw4Q0FBOEMsRUFBRSxpQkFBaUIsa0NBQWtDLHFCQUFxQixPQUFPLCtCQUErQixFQUFFLGlCQUFpQixnQ0FBZ0MscUJBQXFCLE9BQU8sK0JBQStCLEVBQUUsaUJBQWlCLHdDQUF3QyxxQkFBcUIsT0FBTywwQkFBMEIsRUFBRSxpQkFBaUIsK0JBQStCLHFCQUFxQixPQUFPLDBCQUEwQixFQUFFLGdDQUFnQyxvQkFBb0IsYUFBYSxpQ0FBaUMsbUNBQW1DLFVBQVUsU0FBUyxRQUFRLGlCQUFpQiw4Q0FBOEMsc0JBQXNCLDZCQUE2Qix5QkFBeUIsMkRBQTJELE9BQU8sdUNBQXVDLEVBQUUsdUNBQXVDLE9BQU8sMEJBQTBCLDJEQUEyRCwyQkFBMkIsRUFBRSxpQkFBaUIseUJBQXlCLHNCQUFzQixPQUFPLHlCQUF5QiwwREFBMEQsMkJBQTJCLEVBQUUsaUJBQWlCLCtDQUErQyxhQUFhLHNCQUFzQixPQUFPLHdCQUF3Qix5REFBeUQsMkJBQTJCLEVBQUUsc0RBQXNELE9BQU8sMEJBQTBCLEVBQUUsOENBQThDLE9BQU8seUJBQXlCLDBEQUEwRCwyQkFBMkIsRUFBRSxpQ0FBaUMsRUFBRSxHOzs7Ozs7Ozs7OztBQ0F0L3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5REFBeUQ7QUFDekQseURBQXlEOztBQUV6RDs7QUFFQSxJQUFJLCtEQUFnQjtBQUNwQjtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQSxRQUFRLCtEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGF4aW9zXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImF4aW9zXCIpKTtcbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgcHVzaCByZWdpc3RyYXRpb24gbWFuYWdlcnMuXG4gKi9cbnZhciBBYnN0cmFjdFB1c2hSZWdpc3RyYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWJzdHJhY3RQdXNoUmVnaXN0cmF0aW9uKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yID0gdGhpcy5fdmFsaWRhdGVDb25maWcoY29uZmlndXJhdGlvbik7XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy52YWxpZGF0aW9uRXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yID0gXCJQdXNoIGNvbmZpZ3VyYXRpb24gaXMgbWlzc2luZy4gVVBTIHNlcnZlciByZWdpc3RyYXRpb24gd2lsbCBub3Qgd29yay5cIjtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybih0aGlzLnZhbGlkYXRpb25FcnJvcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uZmlndXJhdGlvbiBpcyB2YWxpZFxuICAgICAgICB2YXIgcHVzaENvbmZpZyA9IGNvbmZpZ3VyYXRpb247XG4gICAgICAgIHRoaXMucGxhdGZvcm1Db25maWcgPSB0aGlzLmdldFBsYXRmb3JtQ29uZmlnKHB1c2hDb25maWcpO1xuICAgICAgICB0aGlzLnZhcmlhbnRJZCA9IHRoaXMucGxhdGZvcm1Db25maWcudmFyaWFudElEO1xuICAgICAgICB2YXIgdG9rZW4gPSB3aW5kb3cuYnRvYSh0aGlzLnZhcmlhbnRJZCArIFwiOlwiICsgdGhpcy5wbGF0Zm9ybUNvbmZpZy52YXJpYW50U2VjcmV0KTtcbiAgICAgICAgdGhpcy5odHRwQ2xpZW50ID0gYXhpb3NfMS5kZWZhdWx0LmNyZWF0ZSh7XG4gICAgICAgICAgICBiYXNlVVJMOiBwdXNoQ29uZmlnLnVybCxcbiAgICAgICAgICAgIHRpbWVvdXQ6IDUwMDAsXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQXV0aG9yaXphdGlvblwiOiBcIkJhc2ljIFwiICsgdG9rZW4gfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXIgYW4gYXBwbGljYXRpb24gZm9ybSB0aGUgVVBTLlxuICAgICAqL1xuICAgIEFic3RyYWN0UHVzaFJlZ2lzdHJhdGlvbi5wcm90b3R5cGUudW5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN0b3JhZ2UsIGpzb25DYWNoZWREYXRhLCBwb3N0RGF0YSwgZGV2aWNlVG9rZW4sIGVuZHBvaW50O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudmFsaWRhdGlvbkVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAganNvbkNhY2hlZERhdGEgPSBzdG9yYWdlLmdldEl0ZW0oQWJzdHJhY3RQdXNoUmVnaXN0cmF0aW9uLlJFR0lTVFJBVElPTl9EQVRBX0tFWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXZpY2VUb2tlbiA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoanNvbkNhY2hlZERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0RGF0YSA9IEpTT04ucGFyc2UoanNvbkNhY2hlZERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldmljZVRva2VuID0gcG9zdERhdGEuZGV2aWNlVG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRldmljZVRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGV2aWNlIHRva2VuIHNob3VsZCBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaHR0cENsaWVudCkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludCA9IEFic3RyYWN0UHVzaFJlZ2lzdHJhdGlvbi5BUElfUEFUSCArIFwiL1wiICsgZGV2aWNlVG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmh0dHBDbGllbnQuZGVsZXRlKGVuZHBvaW50LCB7fSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oQWJzdHJhY3RQdXNoUmVnaXN0cmF0aW9uLlJFR0lTVFJBVElPTl9EQVRBX0tFWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiBcbiAgICAgICAgICAgICAgICAgICAgLy8gSXQgc2hvdWxkIG5ldmVyIGhhcHBlbmQgYnV0Li4uXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlB1c2ggaXMgbm90IHByb3Blcmx5IGNvbmZpZ3VyZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGN1c3RvbSB2YWxpZGF0aW9ucyB0byB0aGUgY29uZmlndXJhdGlvbi5cbiAgICAgKiBJZiB0aGlzIG1ldGhvZCBpcyBvdmVycmlkZGVuIGl0IGdldHMgYXV0b21hdGljYWxseSBjYWxsZWQgYmVmb3JlIHRoZSBzdGFuZGFyZCB2YWxpZGF0aW9ucyBhcmUgZXhlY3V0ZWQuXG4gICAgICogQHBhcmFtIHB1c2hDb25maWcgVGhlIHB1c2ggY29uZmlndXJhdGlvblxuICAgICAqIEByZXR1cm4gdW5kZWZpbmVkIGlmIG5vIGVycm9ycyBoYXMgYmVlbiBmb3VuZCwgYSBzdHJpbmcgY29udGFpbmluZyB0aGUgZGV0YWlsIG9mIHRoZSBlcnJvciBvdGhlcndpc2UuXG4gICAgICovXG4gICAgQWJzdHJhY3RQdXNoUmVnaXN0cmF0aW9uLnByb3RvdHlwZS52YWxpZGF0ZUNvbmZpZyA9IGZ1bmN0aW9uIChwdXNoQ29uZmlnKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbW1lZGlhdGVseSBjYWxsZWQgYWZ0ZXIgYWxsIHZhbGlkYXRpb25zIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBjb25jbHVkZWQuXG4gICAgICogU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyB0byBwZXJmb3JtIGN1c3RvbSBpbml0aWFsaXphdGlvbnMuXG4gICAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1lbXB0eVxuICAgIEFic3RyYWN0UHVzaFJlZ2lzdHJhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBnZW5lcmFsIHZhbGlkYXRpb24gY2hlY2tzIG9uIHRoZSBjb25maWd1cmF0aW9uLlxuICAgICAqIEBwYXJhbSBwdXNoQ29uZmlnIHRoZSBjb25maWd1cmF0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFB1c2hSZWdpc3RyYXRpb24ucHJvdG90eXBlLl92YWxpZGF0ZUNvbmZpZyA9IGZ1bmN0aW9uIChwdXNoQ29uZmlnKSB7XG4gICAgICAgIGlmICghcHVzaENvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuIFwiVW5pZmllZFB1c2ggc2VydmVyIGNvbmZpZ3VyYXRpb24gbm90IGZvdW5kXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwdXNoQ29uZmlnLnVybCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiVW5pZmllZFB1c2ggc2VydmVyIFVSTCBub3QgZm91bmRcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGxhdGZvcm1Db25maWcgPSB0aGlzLmdldFBsYXRmb3JtQ29uZmlnKHB1c2hDb25maWcpO1xuICAgICAgICBpZiAoIXBsYXRmb3JtQ29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJQbGF0Zm9ybSBpcyBub3Qgc3VwcG9ydGVkIGJ5IFVuaWZpZWRQdXNoXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwbGF0Zm9ybUNvbmZpZy52YXJpYW50SUQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlVuaWZpZWRQdXNoIFZhcmlhbnRJZCBpcyBub3QgZGVmaW5lZFwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YXJpYW50U2VjcmV0ID0gcGxhdGZvcm1Db25maWcudmFyaWFudFNlY3JldDtcbiAgICAgICAgaWYgKCF2YXJpYW50U2VjcmV0KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJVbmlmaWVkUHVzaCBWYXJpYW50U2VjcmV0IGlzIG5vdCBkZWZpbmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVDb25maWcocHVzaENvbmZpZyk7XG4gICAgfTtcbiAgICBBYnN0cmFjdFB1c2hSZWdpc3RyYXRpb24uVFlQRSA9IFwicHVzaFwiO1xuICAgIEFic3RyYWN0UHVzaFJlZ2lzdHJhdGlvbi5SRUdJU1RSQVRJT05fREFUQV9LRVkgPSBcIlVQU19SRUdJU1RSQVRJT05fREFUQVwiO1xuICAgIEFic3RyYWN0UHVzaFJlZ2lzdHJhdGlvbi5SRUdJU1RSQVRJT05fVElNRU9VVCA9IDEwMDAwO1xuICAgIEFic3RyYWN0UHVzaFJlZ2lzdHJhdGlvbi5BUElfUEFUSCA9IFwicmVzdC9yZWdpc3RyeS9kZXZpY2VcIjtcbiAgICByZXR1cm4gQWJzdHJhY3RQdXNoUmVnaXN0cmF0aW9uO1xufSgpKTtcbmV4cG9ydHMuQWJzdHJhY3RQdXNoUmVnaXN0cmF0aW9uID0gQWJzdHJhY3RQdXNoUmVnaXN0cmF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWJzdHJhY3RQdXNoUmVnaXN0cmF0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBQdXNoVXRpbHNfMSA9IHJlcXVpcmUoXCIuL1B1c2hVdGlsc1wiKTtcbnZhciBpbXBsXzEgPSByZXF1aXJlKFwiLi9pbXBsXCIpO1xuLyoqXG4gKiBBZXJvR2VhciBVUFMgcmVnaXN0cmF0aW9uIFNES1xuICpcbiAqIFVzYWdlOlxuICogLy8gSW5pdGlhbGl6ZSBTREsgZmlyc3RcbiAqIGFwcC5pbml0KGNvbmZpZyk7XG4gKiBsZXQgcmVnaXN0cmF0aW9uID0gbmV3IFB1c2hSZWdpc3RyYXRpb24oKTtcbiAqIHJlZ2lzdHJhdGlvbi5yZWdpc3RlcihcIm15QXBwbGVPckZpcmViYXNlVG9rZW5cIik7XG4gKi9cbnZhciBQdXNoUmVnaXN0cmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFB1c2hSZWdpc3RyYXRpb24oY29uZmlnKSB7XG4gICAgICAgIGlmICghUHVzaFV0aWxzXzEuaXNOYXRpdmUoKSkge1xuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG5ldyBpbXBsXzEuUHVzaFJlZ2lzdHJhdGlvbldlYnB1c2hJbXBsKGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlID0gbmV3IGltcGxfMS5QdXNoUmVnaXN0cmF0aW9uQ29yZG92YUltcGwoY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIHJlY2VpdmUgdGhlIHB1c2ggbWVzc2FnZVxuICAgICAqIEBwYXJhbSBvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrXG4gICAgICovXG4gICAgUHVzaFJlZ2lzdHJhdGlvbi5vbk1lc3NhZ2VSZWNlaXZlZCA9IGZ1bmN0aW9uIChvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrKSB7XG4gICAgICAgIGlmICghUHVzaFV0aWxzXzEuaXNOYXRpdmUoKSkge1xuICAgICAgICAgICAgaW1wbF8xLlB1c2hSZWdpc3RyYXRpb25XZWJwdXNoSW1wbC5vbk1lc3NhZ2VSZWNlaXZlZChvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGltcGxfMS5QdXNoUmVnaXN0cmF0aW9uQ29yZG92YUltcGwub25NZXNzYWdlUmVjZWl2ZWQob25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIHRoZSBhcHBsaWNhdGlvbiB0byB0aGUgVVBTLlxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgUHVzaFJlZ2lzdHJhdGlvbi5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZGVsZWdhdGUucmVnaXN0ZXIob3B0aW9ucyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlciB0aGUgYXBwbGljYXRpb24gZnJvbSB0aGUgVVBTLlxuICAgICAqL1xuICAgIFB1c2hSZWdpc3RyYXRpb24ucHJvdG90eXBlLnVucmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5kZWxlZ2F0ZS51bnJlZ2lzdGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFB1c2hSZWdpc3RyYXRpb247XG59KCkpO1xuZXhwb3J0cy5QdXNoUmVnaXN0cmF0aW9uID0gUHVzaFJlZ2lzdHJhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVB1c2hSZWdpc3RyYXRpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIERldGVjdCBDb3Jkb3ZhIC8gUGhvbmVHYXAgLyBJb25pYyBmcmFtZXdvcmtzIG9uIGEgbW9iaWxlIGRldmljZS5cbiAqXG4gKiBEZWxpYmVyYXRlbHkgZG9lcyBub3QgcmVseSBvbiBjaGVja2luZyBgZmlsZTovL2AgVVJMcyAoYXMgdGhpcyBmYWlscyBQaG9uZUdhcCBpbiB0aGUgUmlwcGxlIGVtdWxhdG9yKSBub3JcbiAqIENvcmRvdmEgYG9uRGV2aWNlUmVhZHlgLCB3aGljaCB3b3VsZCBub3JtYWxseSB3YWl0IGZvciBhIGNhbGxiYWNrLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGlzTW9iaWxlQ29yZG92YVxuICovXG5leHBvcnRzLmlzTW9iaWxlQ29yZG92YSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gICAgISEod2luZG93W1wiY29yZG92YVwiXSB8fCB3aW5kb3dbXCJwaG9uZWdhcFwiXSB8fCB3aW5kb3dbXCJQaG9uZUdhcFwiXSkpOyB9O1xuLyoqXG4gKiBEZXRlY3QgaWYgZGV2aWNlIGlzIHJ1bm5pbmcgaW4gbmF0aXZlIGVudmlyb25tZW50IGFzIG9wcG9zaXRlIHRvIGJyb3dzZXIgcGxhdGZvcm1cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSBJcyBydW5uaW5nIGluIG5hdGl2ZVxuICovXG5leHBvcnRzLmlzTmF0aXZlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZXhwb3J0cy5pc01vYmlsZUNvcmRvdmEoKTsgfTtcbmV4cG9ydHMuaXNDb3Jkb3ZhQW5kcm9pZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh3aW5kb3cuZGV2aWNlICYmIHdpbmRvdy5kZXZpY2UucGxhdGZvcm0gPT09IFwiQW5kcm9pZFwiKTsgfTtcbmV4cG9ydHMuaXNDb3Jkb3ZhSU9TID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHdpbmRvdy5kZXZpY2UgJiYgd2luZG93LmRldmljZS5wbGF0Zm9ybSA9PT0gXCJpT1NcIik7IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1QdXNoVXRpbHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBYnN0cmFjdFB1c2hSZWdpc3RyYXRpb25fMSA9IHJlcXVpcmUoXCIuLi9BYnN0cmFjdFB1c2hSZWdpc3RyYXRpb25cIik7XG52YXIgUHVzaFV0aWxzXzEgPSByZXF1aXJlKFwiLi4vUHVzaFV0aWxzXCIpO1xuLyoqXG4gKiBBZXJvR2VhciBVUFMgcmVnaXN0cmF0aW9uIFNESyAtIENvcmRvdmEgYmFzZWQgaW1wbGVtZW50YXRpb25cbiAqXG4gKiBVc2FnZTpcblxuICogbGV0IHJlZ2lzdHJhdGlvbiA9IG5ldyBQdXNoUmVnaXN0cmF0aW9uQ29yZG92YUltcGwoY29uZmlnKTtcbiAqIHJlZ2lzdHJhdGlvbi5yZWdpc3RlcihcIm15QXBwbGVPckZpcmViYXNlVG9rZW5cIik7XG4gKi9cbnZhciBQdXNoUmVnaXN0cmF0aW9uQ29yZG92YUltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFB1c2hSZWdpc3RyYXRpb25Db3Jkb3ZhSW1wbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQdXNoUmVnaXN0cmF0aW9uQ29yZG92YUltcGwoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBjb25maWcpIHx8IHRoaXM7XG4gICAgfVxuICAgIFB1c2hSZWdpc3RyYXRpb25Db3Jkb3ZhSW1wbC5vbk1lc3NhZ2VSZWNlaXZlZCA9IGZ1bmN0aW9uIChvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrKSB7XG4gICAgICAgIFB1c2hSZWdpc3RyYXRpb25Db3Jkb3ZhSW1wbC5vbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrID0gb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjaztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGRldmljZVRva2VuIGZvciBBbmRyb2lkIG9yIElPUyBwbGF0Zm9ybXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFB1c2ggcmVnaXN0cmF0aW9uIG9wdGlvbnNcbiAgICAgKi9cbiAgICBQdXNoUmVnaXN0cmF0aW9uQ29yZG92YUltcGwucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdmFyIGFsaWFzID0gb3B0aW9ucy5hbGlhcywgY2F0ZWdvcmllcyA9IG9wdGlvbnMuY2F0ZWdvcmllcywgdGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHRoaXMudmFsaWRhdGlvbkVycm9yKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVqZWN0KFwiVW5pZmllZFB1c2ggcmVnaXN0cmF0aW9uIHRpbWVvdXRcIik7IH0sICh0aW1lb3V0KSA/IHRpbWVvdXQgOiBBYnN0cmFjdFB1c2hSZWdpc3RyYXRpb25fMS5BYnN0cmFjdFB1c2hSZWdpc3RyYXRpb24uUkVHSVNUUkFUSU9OX1RJTUVPVVQpO1xuICAgICAgICAgICAgX3RoaXMucHVzaC5vbihcInJlZ2lzdHJhdGlvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5odHRwQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3N0RGF0YV8xID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXZpY2VUb2tlblwiOiBkYXRhLnJlZ2lzdHJhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXZpY2VUeXBlXCI6IHdpbmRvdy5kZXZpY2UubW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9wZXJhdGluZ1N5c3RlbVwiOiB3aW5kb3cuZGV2aWNlLnBsYXRmb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvc1ZlcnNpb25cIjogd2luZG93LmRldmljZS52ZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBhbGlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5odHRwQ2xpZW50LnBvc3QoQWJzdHJhY3RQdXNoUmVnaXN0cmF0aW9uXzEuQWJzdHJhY3RQdXNoUmVnaXN0cmF0aW9uLkFQSV9QQVRILCBwb3N0RGF0YV8xKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFB1c2hVdGlsc18xLmlzQ29yZG92YUFuZHJvaWQoKSAmJiBfdGhpcy52YXJpYW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmVUb0ZpcmViYXNlVG9waWMoX3RoaXMudmFyaWFudElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jYXRlZ29yaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBvcHRpb25zLmNhdGVnb3JpZXM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnkgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmVUb0ZpcmViYXNlVG9waWMoY2F0ZWdvcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKEFic3RyYWN0UHVzaFJlZ2lzdHJhdGlvbl8xLkFic3RyYWN0UHVzaFJlZ2lzdHJhdGlvbi5SRUdJU1RSQVRJT05fREFUQV9LRVksIEpTT04uc3RyaW5naWZ5KHBvc3REYXRhXzEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnB1c2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAub24oXCJub3RpZmljYXRpb25cIiwgZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChQdXNoUmVnaXN0cmF0aW9uQ29yZG92YUltcGwub25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQdXNoUmVnaXN0cmF0aW9uQ29yZG92YUltcGwub25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjayhub3RpZmljYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJdCBzaG91bGQgbmV2ZXIgaGFwcGVuZCBidXQuLi5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJQdXNoIGlzIG5vdCBwcm9wZXJseSBjb25maWd1cmVkXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVyIGRldmljZSBmb3IgQW5kcm9pZCBvciBJT1MgcGxhdGZvcm1zXG4gICAgICovXG4gICAgUHVzaFJlZ2lzdHJhdGlvbkNvcmRvdmFJbXBsLnByb3RvdHlwZS51bnJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gICAgICAgIHZhciBqc29uQ2FjaGVkRGF0YSA9IHN0b3JhZ2UuZ2V0SXRlbShBYnN0cmFjdFB1c2hSZWdpc3RyYXRpb25fMS5BYnN0cmFjdFB1c2hSZWdpc3RyYXRpb24uUkVHSVNUUkFUSU9OX0RBVEFfS0VZKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUudW5yZWdpc3Rlci5jYWxsKF90aGlzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9zdERhdGE7XG4gICAgICAgICAgICAgICAgdmFyIGNhdGVnb3JpZXM7XG4gICAgICAgICAgICAgICAgaWYgKGpzb25DYWNoZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3REYXRhID0gSlNPTi5wYXJzZShqc29uQ2FjaGVkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMgPSBwb3N0RGF0YS5jYXRlZ29yaWVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoUHVzaFV0aWxzXzEuaXNDb3Jkb3ZhQW5kcm9pZCgpICYmIF90aGlzLnZhcmlhbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy51bnN1YnNjcmliZVRvRmlyZWJhc2VUb3BpYyhfdGhpcy52YXJpYW50SWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjYXRlZ29yaWVzXzEgPSBjYXRlZ29yaWVzOyBfaSA8IGNhdGVnb3JpZXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzXzFbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVuc3Vic2NyaWJlVG9GaXJlYmFzZVRvcGljKGNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFB1c2hSZWdpc3RyYXRpb25Db3Jkb3ZhSW1wbC5wcm90b3R5cGUuZ2V0UGxhdGZvcm1Db25maWcgPSBmdW5jdGlvbiAocHVzaENvbmZpZykge1xuICAgICAgICBpZiAoUHVzaFV0aWxzXzEuaXNDb3Jkb3ZhQW5kcm9pZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHVzaENvbmZpZy5hbmRyb2lkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFB1c2hVdGlsc18xLmlzQ29yZG92YUlPUygpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHVzaENvbmZpZy5pb3M7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFB1c2hSZWdpc3RyYXRpb25Db3Jkb3ZhSW1wbC5wcm90b3R5cGUudmFsaWRhdGVDb25maWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghd2luZG93IHx8ICF3aW5kb3cuZGV2aWNlIHx8ICF3aW5kb3cuUHVzaE5vdGlmaWNhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIFwiQGFlcm9nZWFyL2NvcmRvdmEtcGx1Z2luLWFlcm9nZWFyLXB1c2ggcGx1Z2luIG5vdCBpbnN0YWxsZWQuXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFB1c2hSZWdpc3RyYXRpb25Db3Jkb3ZhSW1wbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wdXNoID0gd2luZG93LlB1c2hOb3RpZmljYXRpb24uaW5pdCh7XG4gICAgICAgICAgICBhbmRyb2lkOiB7fSxcbiAgICAgICAgICAgIGlvczoge1xuICAgICAgICAgICAgICAgIGFsZXJ0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGJhZGdlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNvdW5kOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUHVzaFJlZ2lzdHJhdGlvbkNvcmRvdmFJbXBsLnByb3RvdHlwZS5zdWJzY3JpYmVUb0ZpcmViYXNlVG9waWMgPSBmdW5jdGlvbiAodG9waWMpIHtcbiAgICAgICAgdGhpcy5wdXNoLnN1YnNjcmliZSh0b3BpYywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRkNNIHRvcGljOiBcIiArIHRvcGljICsgXCIgc3Vic2NyaWJlZFwiKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImVycm9yOlwiLCBlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBQdXNoUmVnaXN0cmF0aW9uQ29yZG92YUltcGwucHJvdG90eXBlLnVuc3Vic2NyaWJlVG9GaXJlYmFzZVRvcGljID0gZnVuY3Rpb24gKHRvcGljKSB7XG4gICAgICAgIHRoaXMucHVzaC51bnN1YnNjcmliZSh0b3BpYywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRkNNIHRvcGljOiBcIiArIHRvcGljICsgXCIgdW5zdWJzY3JpYmVkXCIpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiZXJyb3I6XCIsIGUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBQdXNoUmVnaXN0cmF0aW9uQ29yZG92YUltcGw7XG59KEFic3RyYWN0UHVzaFJlZ2lzdHJhdGlvbl8xLkFic3RyYWN0UHVzaFJlZ2lzdHJhdGlvbikpO1xuZXhwb3J0cy5QdXNoUmVnaXN0cmF0aW9uQ29yZG92YUltcGwgPSBQdXNoUmVnaXN0cmF0aW9uQ29yZG92YUltcGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1QdXNoUmVnaXN0cmF0aW9uQ29yZG92YUltcGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWJzdHJhY3RQdXNoUmVnaXN0cmF0aW9uXzEgPSByZXF1aXJlKFwiLi4vQWJzdHJhY3RQdXNoUmVnaXN0cmF0aW9uXCIpO1xudmFyIEJvd3NlciA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiYm93c2VyXCIpKTtcbnZhciBERUZBVUxUX1NFUlZJQ0VfV09SS0VSID0gXCIvc2VydmljZS13b3JrZXIuanNcIjtcbi8qKlxuICogQWVyb0dlYXIgVVBTIHJlZ2lzdHJhdGlvbiBTREsgLSBXZWJwdXNoIGltcGxlbWVudGF0aW9uXG4gKlxuICogVXNhZ2U6XG4gKiAvLyBJbml0aWFsaXplIFNESyBmaXJzdFxuICogYXBwLmluaXQoY29uZmlnKTtcbiAqIGxldCByZWdpc3RyYXRpb24gPSBuZXcgUHVzaFJlZ2lzdHJhdGlvbigpO1xuICogcmVnaXN0cmF0aW9uLnJlZ2lzdGVyKFwibXlBcHBsZU9yRmlyZWJhc2VUb2tlblwiKTtcbiAqL1xudmFyIFB1c2hSZWdpc3RyYXRpb25XZWJwdXNoSW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUHVzaFJlZ2lzdHJhdGlvbldlYnB1c2hJbXBsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFB1c2hSZWdpc3RyYXRpb25XZWJwdXNoSW1wbChjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGNvbmZpZykgfHwgdGhpcztcbiAgICAgICAgLy8gVGhlIGNvbmZpZyBpcyB2YWxpZFxuICAgIH1cbiAgICBQdXNoUmVnaXN0cmF0aW9uV2VicHVzaEltcGwub25NZXNzYWdlUmVjZWl2ZWQgPSBmdW5jdGlvbiAob25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjaykge1xuICAgICAgICBQdXNoUmVnaXN0cmF0aW9uV2VicHVzaEltcGwub25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjayA9IG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s7XG4gICAgfTtcbiAgICBQdXNoUmVnaXN0cmF0aW9uV2VicHVzaEltcGwucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFsaWFzLCBjYXRlZ29yaWVzLCBzZXJ2aWNlV29ya2VyLCBzdWJzY3JpcHRpb24sIHVzZXJBZ2VudCwgcG9zdERhdGEsIHN0b3JhZ2U7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IG9wdGlvbnMuYWxpYXMsIGNhdGVnb3JpZXMgPSBvcHRpb25zLmNhdGVnb3JpZXMsIHNlcnZpY2VXb3JrZXIgPSBvcHRpb25zLnNlcnZpY2VXb3JrZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy52YWxpZGF0aW9uRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmh0dHBDbGllbnQpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zdWJzY3JpYmVUb1dlYlB1c2godGhpcy5wbGF0Zm9ybUNvbmZpZy5hcHBTZXJ2ZXJLZXksIHNlcnZpY2VXb3JrZXIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckFnZW50ID0gQm93c2VyLnBhcnNlKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3REYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGV2aWNlVG9rZW5cIjogd2luZG93LmJ0b2EoSlNPTi5zdHJpbmdpZnkoc3Vic2NyaXB0aW9uKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXZpY2VUeXBlXCI6IHVzZXJBZ2VudC5icm93c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcGVyYXRpbmdTeXN0ZW1cIjogdXNlckFnZW50Lm9zLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvc1ZlcnNpb25cIjogdXNlckFnZW50Lm9zLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBhbGlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuaHR0cENsaWVudC5wb3N0KEFic3RyYWN0UHVzaFJlZ2lzdHJhdGlvbl8xLkFic3RyYWN0UHVzaFJlZ2lzdHJhdGlvbi5BUElfUEFUSCwgcG9zdERhdGEpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oQWJzdHJhY3RQdXNoUmVnaXN0cmF0aW9uXzEuQWJzdHJhY3RQdXNoUmVnaXN0cmF0aW9uLlJFR0lTVFJBVElPTl9EQVRBX0tFWSwgSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChQdXNoUmVnaXN0cmF0aW9uV2VicHVzaEltcGwub25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQdXNoUmVnaXN0cmF0aW9uV2VicHVzaEltcGwub25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjayhldmVudC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogXG4gICAgICAgICAgICAgICAgICAgIC8vIEl0IHNob3VsZCBuZXZlciBoYXBwZW5kIGJ1dC4uLlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQdXNoIGlzIG5vdCBwcm9wZXJseSBjb25maWd1cmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBQdXNoUmVnaXN0cmF0aW9uV2VicHVzaEltcGwucHJvdG90eXBlLnVucmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZWdpc3RyYXRpb25zLCBfaSwgcmVnaXN0cmF0aW9uc18xLCByZWdpc3RyYXRpb247XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIF9zdXBlci5wcm90b3R5cGUudW5yZWdpc3Rlci5jYWxsKHRoaXMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb25zKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25zID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2kgPSAwLCByZWdpc3RyYXRpb25zXzEgPSByZWdpc3RyYXRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfaSA8IHJlZ2lzdHJhdGlvbnNfMS5sZW5ndGgpKSByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbiA9IHJlZ2lzdHJhdGlvbnNfMVtfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZWdpc3RyYXRpb24udW5yZWdpc3RlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA1O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFB1c2hSZWdpc3RyYXRpb25XZWJwdXNoSW1wbC5wcm90b3R5cGUuZ2V0UGxhdGZvcm1Db25maWcgPSBmdW5jdGlvbiAocHVzaENvbmZpZykge1xuICAgICAgICByZXR1cm4gcHVzaENvbmZpZy53ZWJwdXNoO1xuICAgIH07XG4gICAgUHVzaFJlZ2lzdHJhdGlvbldlYnB1c2hJbXBsLnByb3RvdHlwZS52YWxpZGF0ZUNvbmZpZyA9IGZ1bmN0aW9uIChwdXNoQ29uZmlnKSB7XG4gICAgICAgIHZhciBjb25maWcgPSB0aGlzLmdldFBsYXRmb3JtQ29uZmlnKHB1c2hDb25maWcpO1xuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLmFwcFNlcnZlcktleSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiTm8gYXBwU2VydmVyS2V5IGZvdW5kIGluIHNlcnZpY2UgY29uZmlndXJhdGlvblwiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQdXNoUmVnaXN0cmF0aW9uV2VicHVzaEltcGwucHJvdG90eXBlLndhaXRGb3JTZXJ2aWNlV29ya2VyVG9CZVJlYWR5ID0gZnVuY3Rpb24gKHJlZykge1xuICAgICAgICB2YXIgc2VydmljZVdvcmtlcjtcbiAgICAgICAgaWYgKHJlZy5pbnN0YWxsaW5nKSB7XG4gICAgICAgICAgICBzZXJ2aWNlV29ya2VyID0gcmVnLmluc3RhbGxpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVnLndhaXRpbmcpIHtcbiAgICAgICAgICAgIHNlcnZpY2VXb3JrZXIgPSByZWcud2FpdGluZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWcuYWN0aXZlKSB7XG4gICAgICAgICAgICBzZXJ2aWNlV29ya2VyID0gcmVnLmFjdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlV29ya2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlcnZpY2VXb3JrZXIuc3RhdGUgPT09IFwiYWN0aXZhdGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdGF0ZWNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuc3RhdGUgPT09IFwiYWN0aXZhdGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFB1c2hSZWdpc3RyYXRpb25XZWJwdXNoSW1wbC5wcm90b3R5cGUuc3Vic2NyaWJlVG9XZWJQdXNoID0gZnVuY3Rpb24gKGFwcFNlcnZlcktleSwgc2VydmljZVdvcmtlcikge1xuICAgICAgICBpZiAoc2VydmljZVdvcmtlciA9PT0gdm9pZCAwKSB7IHNlcnZpY2VXb3JrZXIgPSBERUZBVUxUX1NFUlZJQ0VfV09SS0VSOyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwZXJtaXNzaW9uLCByZWdpc3RyYXRpb24sIHN1YnNjcmliZU9wdGlvbnMsIHB1c2hTdWJzY3JpcHRpb247XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IgJiYgXCJQdXNoTWFuYWdlclwiIGluIHdpbmRvdykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd2luZG93Lk5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwZXJtaXNzaW9uICE9PSBcImdyYW50ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBzdWJzY3JpYmUgdG8gV2ViUHVzaDogbm8gcGVybWlzc2lvbnNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihzZXJ2aWNlV29ya2VyKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMud2FpdEZvclNlcnZpY2VXb3JrZXJUb0JlUmVhZHkocmVnaXN0cmF0aW9uKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5OiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkoYXBwU2VydmVyS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5zdWJzY3JpYmUoc3Vic2NyaWJlT3B0aW9ucyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXNoU3Vic2NyaXB0aW9uID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IHB1c2hTdWJzY3JpcHRpb24uZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAyNTZkaDogYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIEFycmF5LmZyb20obmV3IFVpbnQ4QXJyYXkocHVzaFN1YnNjcmlwdGlvbi5nZXRLZXkoXCJwMjU2ZGhcIikpKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aDogYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIEFycmF5LmZyb20obmV3IFVpbnQ4QXJyYXkocHVzaFN1YnNjcmlwdGlvbi5nZXRLZXkoXCJhdXRoXCIpKSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogdGhyb3cgbmV3IEVycm9yKFwiUHVzaCBtZXNzYWdlcyBhcmUgbm90IHN1cHBvcnRlZCBvbiB0aGUgY3VycmVudCBwbGF0Zm9ybVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gUHVzaFJlZ2lzdHJhdGlvbldlYnB1c2hJbXBsO1xufShBYnN0cmFjdFB1c2hSZWdpc3RyYXRpb25fMS5BYnN0cmFjdFB1c2hSZWdpc3RyYXRpb24pKTtcbmV4cG9ydHMuUHVzaFJlZ2lzdHJhdGlvbldlYnB1c2hJbXBsID0gUHVzaFJlZ2lzdHJhdGlvbldlYnB1c2hJbXBsO1xuLyoqXG4gKiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZTY0U3RyaW5nIGEgcHVibGljIHZhcGlkIGtleVxuICovXG5mdW5jdGlvbiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nKSB7XG4gICAgdmFyIHBhZGRpbmcgPSBcIj1cIi5yZXBlYXQoKDQgLSBiYXNlNjRTdHJpbmcubGVuZ3RoICUgNCkgJSA0KTtcbiAgICB2YXIgYmFzZTY0ID0gKGJhc2U2NFN0cmluZyArIHBhZGRpbmcpXG4gICAgICAgIC5yZXBsYWNlKC9cXC0vZywgXCIrXCIpXG4gICAgICAgIC5yZXBsYWNlKC9fL2csIFwiL1wiKTtcbiAgICB2YXIgcmF3RGF0YSA9IHdpbmRvdy5hdG9iKGJhc2U2NCk7XG4gICAgdmFyIG91dHB1dEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkocmF3RGF0YS5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3RGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICBvdXRwdXRBcnJheVtpXSA9IHJhd0RhdGEuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dEFycmF5O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UHVzaFJlZ2lzdHJhdGlvbldlYnB1c2hJbXBsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL1B1c2hSZWdpc3RyYXRpb25Db3Jkb3ZhSW1wbFwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9QdXNoUmVnaXN0cmF0aW9uV2VicHVzaEltcGxcIikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIi4vUHVzaFJlZ2lzdHJhdGlvblwiKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZCA/IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKSA6ICdnZXQnO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgdXRpbHMuZm9yRWFjaChbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXSwgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXSwgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChbXG4gICAgJ2Jhc2VVUkwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdtYXhDb250ZW50TGVuZ3RoJyxcbiAgICAndmFsaWRhdGVTdGF0dXMnLCAnbWF4UmVkaXJlY3RzJywgJ2h0dHBBZ2VudCcsICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJyxcbiAgICAnc29ja2V0UGF0aCdcbiAgXSwgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgLy8gT25seSBOb2RlLkpTIGhhcyBhIHByb2Nlc3MgdmFyaWFibGUgdGhhdCBpcyBvZiBbW0NsYXNzXV0gcHJvY2Vzc1xuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBlcXVhbCB0byBtZXJnZSB3aXRoIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQgbm8gcmVmZXJlbmNlXG4gKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXG4gKlxuICogQHNlZSBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZGVlcE1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGRlZXBNZXJnZTogZGVlcE1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuYm93c2VyPXQoKTplLmJvd3Nlcj10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIHIoaSl7aWYodFtpXSlyZXR1cm4gdFtpXS5leHBvcnRzO3ZhciBuPXRbaV09e2k6aSxsOiExLGV4cG9ydHM6e319O3JldHVybiBlW2ldLmNhbGwobi5leHBvcnRzLG4sbi5leHBvcnRzLHIpLG4ubD0hMCxuLmV4cG9ydHN9cmV0dXJuIHIubT1lLHIuYz10LHIuZD1mdW5jdGlvbihlLHQsaSl7ci5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0Oml9KX0sci5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LHIudD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9cihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgaT1PYmplY3QuY3JlYXRlKG51bGwpO2lmKHIucihpKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG4gaW4gZSlyLmQoaSxuLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsbikpO3JldHVybiBpfSxyLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHIuZCh0LFwiYVwiLHQpLHR9LHIubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sci5wPVwiXCIscihyLnM9OTApfSh7MTc6ZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMCx0LmRlZmF1bHQ9dm9pZCAwO3ZhciBpPXIoMTgpLG49ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7fXJldHVybiBlLmdldEZpcnN0TWF0Y2g9ZnVuY3Rpb24oZSx0KXt2YXIgcj10Lm1hdGNoKGUpO3JldHVybiByJiZyLmxlbmd0aD4wJiZyWzFdfHxcIlwifSxlLmdldFNlY29uZE1hdGNoPWZ1bmN0aW9uKGUsdCl7dmFyIHI9dC5tYXRjaChlKTtyZXR1cm4gciYmci5sZW5ndGg+MSYmclsyXXx8XCJcIn0sZS5tYXRjaEFuZFJldHVybkNvbnN0PWZ1bmN0aW9uKGUsdCxyKXtpZihlLnRlc3QodCkpcmV0dXJuIHJ9LGUuZ2V0V2luZG93c1ZlcnNpb25OYW1lPWZ1bmN0aW9uKGUpe3N3aXRjaChlKXtjYXNlXCJOVFwiOnJldHVyblwiTlRcIjtjYXNlXCJYUFwiOnJldHVyblwiWFBcIjtjYXNlXCJOVCA1LjBcIjpyZXR1cm5cIjIwMDBcIjtjYXNlXCJOVCA1LjFcIjpyZXR1cm5cIlhQXCI7Y2FzZVwiTlQgNS4yXCI6cmV0dXJuXCIyMDAzXCI7Y2FzZVwiTlQgNi4wXCI6cmV0dXJuXCJWaXN0YVwiO2Nhc2VcIk5UIDYuMVwiOnJldHVyblwiN1wiO2Nhc2VcIk5UIDYuMlwiOnJldHVyblwiOFwiO2Nhc2VcIk5UIDYuM1wiOnJldHVyblwiOC4xXCI7Y2FzZVwiTlQgMTAuMFwiOnJldHVyblwiMTBcIjtkZWZhdWx0OnJldHVybn19LGUuZ2V0TWFjT1NWZXJzaW9uTmFtZT1mdW5jdGlvbihlKXt2YXIgdD1lLnNwbGl0KFwiLlwiKS5zcGxpY2UoMCwyKS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBwYXJzZUludChlLDEwKXx8MH0pKTtpZih0LnB1c2goMCksMTA9PT10WzBdKXN3aXRjaCh0WzFdKXtjYXNlIDU6cmV0dXJuXCJMZW9wYXJkXCI7Y2FzZSA2OnJldHVyblwiU25vdyBMZW9wYXJkXCI7Y2FzZSA3OnJldHVyblwiTGlvblwiO2Nhc2UgODpyZXR1cm5cIk1vdW50YWluIExpb25cIjtjYXNlIDk6cmV0dXJuXCJNYXZlcmlja3NcIjtjYXNlIDEwOnJldHVyblwiWW9zZW1pdGVcIjtjYXNlIDExOnJldHVyblwiRWwgQ2FwaXRhblwiO2Nhc2UgMTI6cmV0dXJuXCJTaWVycmFcIjtjYXNlIDEzOnJldHVyblwiSGlnaCBTaWVycmFcIjtjYXNlIDE0OnJldHVyblwiTW9qYXZlXCI7Y2FzZSAxNTpyZXR1cm5cIkNhdGFsaW5hXCI7ZGVmYXVsdDpyZXR1cm59fSxlLmdldEFuZHJvaWRWZXJzaW9uTmFtZT1mdW5jdGlvbihlKXt2YXIgdD1lLnNwbGl0KFwiLlwiKS5zcGxpY2UoMCwyKS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBwYXJzZUludChlLDEwKXx8MH0pKTtpZih0LnB1c2goMCksISgxPT09dFswXSYmdFsxXTw1KSlyZXR1cm4gMT09PXRbMF0mJnRbMV08Nj9cIkN1cGNha2VcIjoxPT09dFswXSYmdFsxXT49Nj9cIkRvbnV0XCI6Mj09PXRbMF0mJnRbMV08Mj9cIkVjbGFpclwiOjI9PT10WzBdJiYyPT09dFsxXT9cIkZyb3lvXCI6Mj09PXRbMF0mJnRbMV0+Mj9cIkdpbmdlcmJyZWFkXCI6Mz09PXRbMF0/XCJIb25leWNvbWJcIjo0PT09dFswXSYmdFsxXTwxP1wiSWNlIENyZWFtIFNhbmR3aWNoXCI6ND09PXRbMF0mJnRbMV08ND9cIkplbGx5IEJlYW5cIjo0PT09dFswXSYmdFsxXT49ND9cIktpdEthdFwiOjU9PT10WzBdP1wiTG9sbGlwb3BcIjo2PT09dFswXT9cIk1hcnNobWFsbG93XCI6Nz09PXRbMF0/XCJOb3VnYXRcIjo4PT09dFswXT9cIk9yZW9cIjo5PT09dFswXT9cIlBpZVwiOnZvaWQgMH0sZS5nZXRWZXJzaW9uUHJlY2lzaW9uPWZ1bmN0aW9uKGUpe3JldHVybiBlLnNwbGl0KFwiLlwiKS5sZW5ndGh9LGUuY29tcGFyZVZlcnNpb25zPWZ1bmN0aW9uKHQscixpKXt2b2lkIDA9PT1pJiYoaT0hMSk7dmFyIG49ZS5nZXRWZXJzaW9uUHJlY2lzaW9uKHQpLHM9ZS5nZXRWZXJzaW9uUHJlY2lzaW9uKHIpLG89TWF0aC5tYXgobixzKSxhPTAsdT1lLm1hcChbdCxyXSwoZnVuY3Rpb24odCl7dmFyIHI9by1lLmdldFZlcnNpb25QcmVjaXNpb24odCksaT10K25ldyBBcnJheShyKzEpLmpvaW4oXCIuMFwiKTtyZXR1cm4gZS5tYXAoaS5zcGxpdChcIi5cIiksKGZ1bmN0aW9uKGUpe3JldHVybiBuZXcgQXJyYXkoMjAtZS5sZW5ndGgpLmpvaW4oXCIwXCIpK2V9KSkucmV2ZXJzZSgpfSkpO2ZvcihpJiYoYT1vLU1hdGgubWluKG4scykpLG8tPTE7bz49YTspe2lmKHVbMF1bb10+dVsxXVtvXSlyZXR1cm4gMTtpZih1WzBdW29dPT09dVsxXVtvXSl7aWYobz09PWEpcmV0dXJuIDA7by09MX1lbHNlIGlmKHVbMF1bb108dVsxXVtvXSlyZXR1cm4tMX19LGUubWFwPWZ1bmN0aW9uKGUsdCl7dmFyIHIsaT1bXTtpZihBcnJheS5wcm90b3R5cGUubWFwKXJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoZSx0KTtmb3Iocj0wO3I8ZS5sZW5ndGg7cis9MSlpLnB1c2godChlW3JdKSk7cmV0dXJuIGl9LGUuZ2V0QnJvd3NlckFsaWFzPWZ1bmN0aW9uKGUpe3JldHVybiBpLkJST1dTRVJfQUxJQVNFU19NQVBbZV19LGUuZ2V0QnJvd3NlclR5cGVCeUFsaWFzPWZ1bmN0aW9uKGUpe3JldHVybiBpLkJST1dTRVJfTUFQW2VdfHxcIlwifSxlfSgpO3QuZGVmYXVsdD1uLGUuZXhwb3J0cz10LmRlZmF1bHR9LDE4OmZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITAsdC5FTkdJTkVfTUFQPXQuT1NfTUFQPXQuUExBVEZPUk1TX01BUD10LkJST1dTRVJfTUFQPXQuQlJPV1NFUl9BTElBU0VTX01BUD12b2lkIDA7dC5CUk9XU0VSX0FMSUFTRVNfTUFQPXtcIkFtYXpvbiBTaWxrXCI6XCJhbWF6b25fc2lsa1wiLFwiQW5kcm9pZCBCcm93c2VyXCI6XCJhbmRyb2lkXCIsQmFkYTpcImJhZGFcIixCbGFja0JlcnJ5OlwiYmxhY2tiZXJyeVwiLENocm9tZTpcImNocm9tZVwiLENocm9taXVtOlwiY2hyb21pdW1cIixFcGlwaGFueTpcImVwaXBoYW55XCIsRmlyZWZveDpcImZpcmVmb3hcIixGb2N1czpcImZvY3VzXCIsR2VuZXJpYzpcImdlbmVyaWNcIixcIkdvb2dsZSBTZWFyY2hcIjpcImdvb2dsZV9zZWFyY2hcIixHb29nbGVib3Q6XCJnb29nbGVib3RcIixcIkludGVybmV0IEV4cGxvcmVyXCI6XCJpZVwiLFwiSy1NZWxlb25cIjpcImtfbWVsZW9uXCIsTWF4dGhvbjpcIm1heHRob25cIixcIk1pY3Jvc29mdCBFZGdlXCI6XCJlZGdlXCIsXCJNWiBCcm93c2VyXCI6XCJtelwiLFwiTkFWRVIgV2hhbGUgQnJvd3NlclwiOlwibmF2ZXJcIixPcGVyYTpcIm9wZXJhXCIsXCJPcGVyYSBDb2FzdFwiOlwib3BlcmFfY29hc3RcIixQaGFudG9tSlM6XCJwaGFudG9tanNcIixQdWZmaW46XCJwdWZmaW5cIixRdXBaaWxsYTpcInF1cHppbGxhXCIsUVE6XCJxcVwiLFFRTGl0ZTpcInFxbGl0ZVwiLFNhZmFyaTpcInNhZmFyaVwiLFNhaWxmaXNoOlwic2FpbGZpc2hcIixcIlNhbXN1bmcgSW50ZXJuZXQgZm9yIEFuZHJvaWRcIjpcInNhbXN1bmdfaW50ZXJuZXRcIixTZWFNb25rZXk6XCJzZWFtb25rZXlcIixTbGVpcG5pcjpcInNsZWlwbmlyXCIsU3dpbmc6XCJzd2luZ1wiLFRpemVuOlwidGl6ZW5cIixcIlVDIEJyb3dzZXJcIjpcInVjXCIsVml2YWxkaTpcInZpdmFsZGlcIixcIldlYk9TIEJyb3dzZXJcIjpcIndlYm9zXCIsV2VDaGF0Olwid2VjaGF0XCIsXCJZYW5kZXggQnJvd3NlclwiOlwieWFuZGV4XCIsUm9rdTpcInJva3VcIn07dC5CUk9XU0VSX01BUD17YW1hem9uX3NpbGs6XCJBbWF6b24gU2lsa1wiLGFuZHJvaWQ6XCJBbmRyb2lkIEJyb3dzZXJcIixiYWRhOlwiQmFkYVwiLGJsYWNrYmVycnk6XCJCbGFja0JlcnJ5XCIsY2hyb21lOlwiQ2hyb21lXCIsY2hyb21pdW06XCJDaHJvbWl1bVwiLGVwaXBoYW55OlwiRXBpcGhhbnlcIixmaXJlZm94OlwiRmlyZWZveFwiLGZvY3VzOlwiRm9jdXNcIixnZW5lcmljOlwiR2VuZXJpY1wiLGdvb2dsZWJvdDpcIkdvb2dsZWJvdFwiLGdvb2dsZV9zZWFyY2g6XCJHb29nbGUgU2VhcmNoXCIsaWU6XCJJbnRlcm5ldCBFeHBsb3JlclwiLGtfbWVsZW9uOlwiSy1NZWxlb25cIixtYXh0aG9uOlwiTWF4dGhvblwiLGVkZ2U6XCJNaWNyb3NvZnQgRWRnZVwiLG16OlwiTVogQnJvd3NlclwiLG5hdmVyOlwiTkFWRVIgV2hhbGUgQnJvd3NlclwiLG9wZXJhOlwiT3BlcmFcIixvcGVyYV9jb2FzdDpcIk9wZXJhIENvYXN0XCIscGhhbnRvbWpzOlwiUGhhbnRvbUpTXCIscHVmZmluOlwiUHVmZmluXCIscXVwemlsbGE6XCJRdXBaaWxsYVwiLHFxOlwiUVEgQnJvd3NlclwiLHFxbGl0ZTpcIlFRIEJyb3dzZXIgTGl0ZVwiLHNhZmFyaTpcIlNhZmFyaVwiLHNhaWxmaXNoOlwiU2FpbGZpc2hcIixzYW1zdW5nX2ludGVybmV0OlwiU2Ftc3VuZyBJbnRlcm5ldCBmb3IgQW5kcm9pZFwiLHNlYW1vbmtleTpcIlNlYU1vbmtleVwiLHNsZWlwbmlyOlwiU2xlaXBuaXJcIixzd2luZzpcIlN3aW5nXCIsdGl6ZW46XCJUaXplblwiLHVjOlwiVUMgQnJvd3NlclwiLHZpdmFsZGk6XCJWaXZhbGRpXCIsd2Vib3M6XCJXZWJPUyBCcm93c2VyXCIsd2VjaGF0OlwiV2VDaGF0XCIseWFuZGV4OlwiWWFuZGV4IEJyb3dzZXJcIn07dC5QTEFURk9STVNfTUFQPXt0YWJsZXQ6XCJ0YWJsZXRcIixtb2JpbGU6XCJtb2JpbGVcIixkZXNrdG9wOlwiZGVza3RvcFwiLHR2OlwidHZcIn07dC5PU19NQVA9e1dpbmRvd3NQaG9uZTpcIldpbmRvd3MgUGhvbmVcIixXaW5kb3dzOlwiV2luZG93c1wiLE1hY09TOlwibWFjT1NcIixpT1M6XCJpT1NcIixBbmRyb2lkOlwiQW5kcm9pZFwiLFdlYk9TOlwiV2ViT1NcIixCbGFja0JlcnJ5OlwiQmxhY2tCZXJyeVwiLEJhZGE6XCJCYWRhXCIsVGl6ZW46XCJUaXplblwiLExpbnV4OlwiTGludXhcIixDaHJvbWVPUzpcIkNocm9tZSBPU1wiLFBsYXlTdGF0aW9uNDpcIlBsYXlTdGF0aW9uIDRcIixSb2t1OlwiUm9rdVwifTt0LkVOR0lORV9NQVA9e0VkZ2VIVE1MOlwiRWRnZUhUTUxcIixCbGluazpcIkJsaW5rXCIsVHJpZGVudDpcIlRyaWRlbnRcIixQcmVzdG86XCJQcmVzdG9cIixHZWNrbzpcIkdlY2tvXCIsV2ViS2l0OlwiV2ViS2l0XCJ9fSw5MDpmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwLHQuZGVmYXVsdD12b2lkIDA7dmFyIGksbj0oaT1yKDkxKSkmJmkuX19lc01vZHVsZT9pOntkZWZhdWx0Oml9LHM9cigxOCk7ZnVuY3Rpb24gbyhlLHQpe2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgaT10W3JdO2kuZW51bWVyYWJsZT1pLmVudW1lcmFibGV8fCExLGkuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIGkmJihpLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLmtleSxpKX19dmFyIGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7fXZhciB0LHIsaTtyZXR1cm4gZS5nZXRQYXJzZXI9ZnVuY3Rpb24oZSx0KXtpZih2b2lkIDA9PT10JiYodD0hMSksXCJzdHJpbmdcIiE9dHlwZW9mIGUpdGhyb3cgbmV3IEVycm9yKFwiVXNlckFnZW50IHNob3VsZCBiZSBhIHN0cmluZ1wiKTtyZXR1cm4gbmV3IG4uZGVmYXVsdChlLHQpfSxlLnBhcnNlPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgbi5kZWZhdWx0KGUpLmdldFJlc3VsdCgpfSx0PWUsaT1be2tleTpcIkJST1dTRVJfTUFQXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHMuQlJPV1NFUl9NQVB9fSx7a2V5OlwiRU5HSU5FX01BUFwiLGdldDpmdW5jdGlvbigpe3JldHVybiBzLkVOR0lORV9NQVB9fSx7a2V5OlwiT1NfTUFQXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHMuT1NfTUFQfX0se2tleTpcIlBMQVRGT1JNU19NQVBcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcy5QTEFURk9STVNfTUFQfX1dLChyPW51bGwpJiZvKHQucHJvdG90eXBlLHIpLGkmJm8odCxpKSxlfSgpO3QuZGVmYXVsdD1hLGUuZXhwb3J0cz10LmRlZmF1bHR9LDkxOmZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITAsdC5kZWZhdWx0PXZvaWQgMDt2YXIgaT11KHIoOTIpKSxuPXUocig5MykpLHM9dShyKDk0KSksbz11KHIoOTUpKSxhPXUocigxNykpO2Z1bmN0aW9uIHUoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fXZhciBkPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2lmKHZvaWQgMD09PXQmJih0PSExKSxudWxsPT1lfHxcIlwiPT09ZSl0aHJvdyBuZXcgRXJyb3IoXCJVc2VyQWdlbnQgcGFyYW1ldGVyIGNhbid0IGJlIGVtcHR5XCIpO3RoaXMuX3VhPWUsdGhpcy5wYXJzZWRSZXN1bHQ9e30sITAhPT10JiZ0aGlzLnBhcnNlKCl9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuZ2V0VUE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdWF9LHQudGVzdD1mdW5jdGlvbihlKXtyZXR1cm4gZS50ZXN0KHRoaXMuX3VhKX0sdC5wYXJzZUJyb3dzZXI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMucGFyc2VkUmVzdWx0LmJyb3dzZXI9e307dmFyIHQ9aS5kZWZhdWx0LmZpbmQoKGZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQudGVzdClyZXR1cm4gdC50ZXN0KGUpO2lmKHQudGVzdCBpbnN0YW5jZW9mIEFycmF5KXJldHVybiB0LnRlc3Quc29tZSgoZnVuY3Rpb24odCl7cmV0dXJuIGUudGVzdCh0KX0pKTt0aHJvdyBuZXcgRXJyb3IoXCJCcm93c2VyJ3MgdGVzdCBmdW5jdGlvbiBpcyBub3QgdmFsaWRcIil9KSk7cmV0dXJuIHQmJih0aGlzLnBhcnNlZFJlc3VsdC5icm93c2VyPXQuZGVzY3JpYmUodGhpcy5nZXRVQSgpKSksdGhpcy5wYXJzZWRSZXN1bHQuYnJvd3Nlcn0sdC5nZXRCcm93c2VyPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyc2VkUmVzdWx0LmJyb3dzZXI/dGhpcy5wYXJzZWRSZXN1bHQuYnJvd3Nlcjp0aGlzLnBhcnNlQnJvd3NlcigpfSx0LmdldEJyb3dzZXJOYW1lPWZ1bmN0aW9uKGUpe3JldHVybiBlP1N0cmluZyh0aGlzLmdldEJyb3dzZXIoKS5uYW1lKS50b0xvd2VyQ2FzZSgpfHxcIlwiOnRoaXMuZ2V0QnJvd3NlcigpLm5hbWV8fFwiXCJ9LHQuZ2V0QnJvd3NlclZlcnNpb249ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRCcm93c2VyKCkudmVyc2lvbn0sdC5nZXRPUz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcnNlZFJlc3VsdC5vcz90aGlzLnBhcnNlZFJlc3VsdC5vczp0aGlzLnBhcnNlT1MoKX0sdC5wYXJzZU9TPWZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLnBhcnNlZFJlc3VsdC5vcz17fTt2YXIgdD1uLmRlZmF1bHQuZmluZCgoZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdC50ZXN0KXJldHVybiB0LnRlc3QoZSk7aWYodC50ZXN0IGluc3RhbmNlb2YgQXJyYXkpcmV0dXJuIHQudGVzdC5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4gZS50ZXN0KHQpfSkpO3Rocm93IG5ldyBFcnJvcihcIkJyb3dzZXIncyB0ZXN0IGZ1bmN0aW9uIGlzIG5vdCB2YWxpZFwiKX0pKTtyZXR1cm4gdCYmKHRoaXMucGFyc2VkUmVzdWx0Lm9zPXQuZGVzY3JpYmUodGhpcy5nZXRVQSgpKSksdGhpcy5wYXJzZWRSZXN1bHQub3N9LHQuZ2V0T1NOYW1lPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuZ2V0T1MoKS5uYW1lO3JldHVybiBlP1N0cmluZyh0KS50b0xvd2VyQ2FzZSgpfHxcIlwiOnR8fFwiXCJ9LHQuZ2V0T1NWZXJzaW9uPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0T1MoKS52ZXJzaW9ufSx0LmdldFBsYXRmb3JtPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyc2VkUmVzdWx0LnBsYXRmb3JtP3RoaXMucGFyc2VkUmVzdWx0LnBsYXRmb3JtOnRoaXMucGFyc2VQbGF0Zm9ybSgpfSx0LmdldFBsYXRmb3JtVHlwZT1mdW5jdGlvbihlKXt2b2lkIDA9PT1lJiYoZT0hMSk7dmFyIHQ9dGhpcy5nZXRQbGF0Zm9ybSgpLnR5cGU7cmV0dXJuIGU/U3RyaW5nKHQpLnRvTG93ZXJDYXNlKCl8fFwiXCI6dHx8XCJcIn0sdC5wYXJzZVBsYXRmb3JtPWZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLnBhcnNlZFJlc3VsdC5wbGF0Zm9ybT17fTt2YXIgdD1zLmRlZmF1bHQuZmluZCgoZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdC50ZXN0KXJldHVybiB0LnRlc3QoZSk7aWYodC50ZXN0IGluc3RhbmNlb2YgQXJyYXkpcmV0dXJuIHQudGVzdC5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4gZS50ZXN0KHQpfSkpO3Rocm93IG5ldyBFcnJvcihcIkJyb3dzZXIncyB0ZXN0IGZ1bmN0aW9uIGlzIG5vdCB2YWxpZFwiKX0pKTtyZXR1cm4gdCYmKHRoaXMucGFyc2VkUmVzdWx0LnBsYXRmb3JtPXQuZGVzY3JpYmUodGhpcy5nZXRVQSgpKSksdGhpcy5wYXJzZWRSZXN1bHQucGxhdGZvcm19LHQuZ2V0RW5naW5lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyc2VkUmVzdWx0LmVuZ2luZT90aGlzLnBhcnNlZFJlc3VsdC5lbmdpbmU6dGhpcy5wYXJzZUVuZ2luZSgpfSx0LmdldEVuZ2luZU5hbWU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU/U3RyaW5nKHRoaXMuZ2V0RW5naW5lKCkubmFtZSkudG9Mb3dlckNhc2UoKXx8XCJcIjp0aGlzLmdldEVuZ2luZSgpLm5hbWV8fFwiXCJ9LHQucGFyc2VFbmdpbmU9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMucGFyc2VkUmVzdWx0LmVuZ2luZT17fTt2YXIgdD1vLmRlZmF1bHQuZmluZCgoZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdC50ZXN0KXJldHVybiB0LnRlc3QoZSk7aWYodC50ZXN0IGluc3RhbmNlb2YgQXJyYXkpcmV0dXJuIHQudGVzdC5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4gZS50ZXN0KHQpfSkpO3Rocm93IG5ldyBFcnJvcihcIkJyb3dzZXIncyB0ZXN0IGZ1bmN0aW9uIGlzIG5vdCB2YWxpZFwiKX0pKTtyZXR1cm4gdCYmKHRoaXMucGFyc2VkUmVzdWx0LmVuZ2luZT10LmRlc2NyaWJlKHRoaXMuZ2V0VUEoKSkpLHRoaXMucGFyc2VkUmVzdWx0LmVuZ2luZX0sdC5wYXJzZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcnNlQnJvd3NlcigpLHRoaXMucGFyc2VPUygpLHRoaXMucGFyc2VQbGF0Zm9ybSgpLHRoaXMucGFyc2VFbmdpbmUoKSx0aGlzfSx0LmdldFJlc3VsdD1mdW5jdGlvbigpe3JldHVybiBPYmplY3QuYXNzaWduKHt9LHRoaXMucGFyc2VkUmVzdWx0KX0sdC5zYXRpc2ZpZXM9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPXt9LGk9MCxuPXt9LHM9MDtpZihPYmplY3Qua2V5cyhlKS5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgbz1lW3RdO1wic3RyaW5nXCI9PXR5cGVvZiBvPyhuW3RdPW8scys9MSk6XCJvYmplY3RcIj09dHlwZW9mIG8mJihyW3RdPW8saSs9MSl9KSksaT4wKXt2YXIgbz1PYmplY3Qua2V5cyhyKSxhPW8uZmluZCgoZnVuY3Rpb24oZSl7cmV0dXJuIHQuaXNPUyhlKX0pKTtpZihhKXt2YXIgdT10aGlzLnNhdGlzZmllcyhyW2FdKTtpZih2b2lkIDAhPT11KXJldHVybiB1fXZhciBkPW8uZmluZCgoZnVuY3Rpb24oZSl7cmV0dXJuIHQuaXNQbGF0Zm9ybShlKX0pKTtpZihkKXt2YXIgYz10aGlzLnNhdGlzZmllcyhyW2RdKTtpZih2b2lkIDAhPT1jKXJldHVybiBjfX1pZihzPjApe3ZhciBmPU9iamVjdC5rZXlzKG4pLmZpbmQoKGZ1bmN0aW9uKGUpe3JldHVybiB0LmlzQnJvd3NlcihlLCEwKX0pKTtpZih2b2lkIDAhPT1mKXJldHVybiB0aGlzLmNvbXBhcmVWZXJzaW9uKG5bZl0pfX0sdC5pc0Jyb3dzZXI9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD0hMSk7dmFyIHI9dGhpcy5nZXRCcm93c2VyTmFtZSgpLnRvTG93ZXJDYXNlKCksaT1lLnRvTG93ZXJDYXNlKCksbj1hLmRlZmF1bHQuZ2V0QnJvd3NlclR5cGVCeUFsaWFzKGkpO3JldHVybiB0JiZuJiYoaT1uLnRvTG93ZXJDYXNlKCkpLGk9PT1yfSx0LmNvbXBhcmVWZXJzaW9uPWZ1bmN0aW9uKGUpe3ZhciB0PVswXSxyPWUsaT0hMSxuPXRoaXMuZ2V0QnJvd3NlclZlcnNpb24oKTtpZihcInN0cmluZ1wiPT10eXBlb2YgbilyZXR1cm5cIj5cIj09PWVbMF18fFwiPFwiPT09ZVswXT8ocj1lLnN1YnN0cigxKSxcIj1cIj09PWVbMV0/KGk9ITAscj1lLnN1YnN0cigyKSk6dD1bXSxcIj5cIj09PWVbMF0/dC5wdXNoKDEpOnQucHVzaCgtMSkpOlwiPVwiPT09ZVswXT9yPWUuc3Vic3RyKDEpOlwiflwiPT09ZVswXSYmKGk9ITAscj1lLnN1YnN0cigxKSksdC5pbmRleE9mKGEuZGVmYXVsdC5jb21wYXJlVmVyc2lvbnMobixyLGkpKT4tMX0sdC5pc09TPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmdldE9TTmFtZSghMCk9PT1TdHJpbmcoZSkudG9Mb3dlckNhc2UoKX0sdC5pc1BsYXRmb3JtPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmdldFBsYXRmb3JtVHlwZSghMCk9PT1TdHJpbmcoZSkudG9Mb3dlckNhc2UoKX0sdC5pc0VuZ2luZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5nZXRFbmdpbmVOYW1lKCEwKT09PVN0cmluZyhlKS50b0xvd2VyQ2FzZSgpfSx0LmlzPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmlzQnJvd3NlcihlKXx8dGhpcy5pc09TKGUpfHx0aGlzLmlzUGxhdGZvcm0oZSl9LHQuc29tZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzO3JldHVybiB2b2lkIDA9PT1lJiYoZT1bXSksZS5zb21lKChmdW5jdGlvbihlKXtyZXR1cm4gdC5pcyhlKX0pKX0sZX0oKTt0LmRlZmF1bHQ9ZCxlLmV4cG9ydHM9dC5kZWZhdWx0fSw5MjpmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwLHQuZGVmYXVsdD12b2lkIDA7dmFyIGksbj0oaT1yKDE3KSkmJmkuX19lc01vZHVsZT9pOntkZWZhdWx0Oml9O3ZhciBzPS92ZXJzaW9uXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLG89W3t0ZXN0OlsvZ29vZ2xlYm90L2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiR29vZ2xlYm90XCJ9LHI9bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL2dvb2dsZWJvdFxcLyhcXGQrKFxcLlxcZCspKS9pLGUpfHxuLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL29wZXJhL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiT3BlcmFcIn0scj1uLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpfHxuLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86b3BlcmEpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL29wclxcL3xvcGlvcy9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIk9wZXJhXCJ9LHI9bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/Om9wcnxvcGlvcylbXFxzL10oXFxTKykvaSxlKXx8bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9TYW1zdW5nQnJvd3Nlci9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIlNhbXN1bmcgSW50ZXJuZXQgZm9yIEFuZHJvaWRcIn0scj1uLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpfHxuLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86U2Ftc3VuZ0Jyb3dzZXIpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL1doYWxlL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiTkFWRVIgV2hhbGUgQnJvd3NlclwifSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSl8fG4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzp3aGFsZSlbXFxzL10oXFxkKyg/OlxcLlxcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9NWkJyb3dzZXIvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJNWiBCcm93c2VyXCJ9LHI9bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/Ok1aQnJvd3NlcilbXFxzL10oXFxkKyg/OlxcLlxcZCspKykvaSxlKXx8bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9mb2N1cy9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIkZvY3VzXCJ9LHI9bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/OmZvY3VzKVtcXHMvXShcXGQrKD86XFwuXFxkKykrKS9pLGUpfHxuLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3N3aW5nL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiU3dpbmdcIn0scj1uLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86c3dpbmcpW1xccy9dKFxcZCsoPzpcXC5cXGQrKSspL2ksZSl8fG4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvY29hc3QvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJPcGVyYSBDb2FzdFwifSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSl8fG4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzpjb2FzdClbXFxzL10oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsveWFicm93c2VyL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiWWFuZGV4IEJyb3dzZXJcIn0scj1uLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86eWFicm93c2VyKVtcXHMvXShcXGQrKFxcLj9fP1xcZCspKykvaSxlKXx8bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy91Y2Jyb3dzZXIvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJVQyBCcm93c2VyXCJ9LHI9bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKXx8bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/OnVjYnJvd3NlcilbXFxzL10oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvTWF4dGhvbnxteGlvcy9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIk1heHRob25cIn0scj1uLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpfHxuLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86TWF4dGhvbnxteGlvcylbXFxzL10oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvZXBpcGhhbnkvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJFcGlwaGFueVwifSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSl8fG4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzplcGlwaGFueSlbXFxzL10oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvcHVmZmluL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiUHVmZmluXCJ9LHI9bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKXx8bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/OnB1ZmZpbilbXFxzL10oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0Olsvc2xlaXBuaXIvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJTbGVpcG5pclwifSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSl8fG4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzpzbGVpcG5pcilbXFxzL10oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0Olsvay1tZWxlb24vaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJLLU1lbGVvblwifSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSl8fG4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzprLW1lbGVvbilbXFxzL10oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvbWljcm9tZXNzZW5nZXIvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJXZUNoYXRcIn0scj1uLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86bWljcm9tZXNzZW5nZXIpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpfHxuLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3FxYnJvd3Nlci9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTovcXFicm93c2VybGl0ZS9pLnRlc3QoZSk/XCJRUSBCcm93c2VyIExpdGVcIjpcIlFRIEJyb3dzZXJcIn0scj1uLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86cXFicm93c2VybGl0ZXxxcWJyb3dzZXIpWy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpfHxuLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL21zaWV8dHJpZGVudC9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIkludGVybmV0IEV4cGxvcmVyXCJ9LHI9bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/Om1zaWUgfHJ2OikoXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvXFxzZWRnXFwvL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiTWljcm9zb2Z0IEVkZ2VcIn0scj1uLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvXFxzZWRnXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL2VkZyhbZWFdfGlvcykvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJNaWNyb3NvZnQgRWRnZVwifSxyPW4uZGVmYXVsdC5nZXRTZWNvbmRNYXRjaCgvZWRnKFtlYV18aW9zKVxcLyhcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy92aXZhbGRpL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiVml2YWxkaVwifSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC92aXZhbGRpXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3NlYW1vbmtleS9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIlNlYU1vbmtleVwifSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC9zZWFtb25rZXlcXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0Olsvc2FpbGZpc2gvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJTYWlsZmlzaFwifSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC9zYWlsZmlzaFxccz9icm93c2VyXFwvKFxcZCsoXFwuXFxkKyk/KS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3NpbGsvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJBbWF6b24gU2lsa1wifSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC9zaWxrXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3BoYW50b20vaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJQaGFudG9tSlNcIn0scj1uLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvcGhhbnRvbWpzXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3NsaW1lcmpzL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiU2xpbWVySlNcIn0scj1uLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvc2xpbWVyanNcXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvYmxhY2tiZXJyeXxcXGJiYlxcZCsvaSwvcmltXFxzdGFibGV0L2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiQmxhY2tCZXJyeVwifSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSl8fG4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC9ibGFja2JlcnJ5W1xcZF0rXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbLyh3ZWJ8aHB3KVtvMF1zL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiV2ViT1MgQnJvd3NlclwifSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSl8fG4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC93KD86ZWIpP1tvMF1zYnJvd3NlclxcLyhcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9iYWRhL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiQmFkYVwifSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC9kb2xmaW5cXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvdGl6ZW4vaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJUaXplblwifSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzp0aXplblxccz8pP2Jyb3dzZXJcXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSl8fG4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvcXVwemlsbGEvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJRdXBaaWxsYVwifSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzpxdXB6aWxsYSlbXFxzL10oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSl8fG4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvZmlyZWZveHxpY2V3ZWFzZWx8Znhpb3MvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJGaXJlZm94XCJ9LHI9bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/OmZpcmVmb3h8aWNld2Vhc2VsfGZ4aW9zKVtcXHMvXShcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9jaHJvbWl1bS9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIkNocm9taXVtXCJ9LHI9bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/OmNocm9taXVtKVtcXHMvXShcXGQrKFxcLj9fP1xcZCspKykvaSxlKXx8bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9jaHJvbWV8Y3Jpb3N8Y3Jtby9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIkNocm9tZVwifSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzpjaHJvbWV8Y3Jpb3N8Y3JtbylcXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvR1NBL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiR29vZ2xlIFNlYXJjaFwifSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzpHU0EpXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpmdW5jdGlvbihlKXt2YXIgdD0hZS50ZXN0KC9saWtlIGFuZHJvaWQvaSkscj1lLnRlc3QoL2FuZHJvaWQvaSk7cmV0dXJuIHQmJnJ9LGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiQW5kcm9pZCBCcm93c2VyXCJ9LHI9bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9wbGF5c3RhdGlvbiA0L2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiUGxheVN0YXRpb24gNFwifSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0Olsvc2FmYXJpfGFwcGxld2Via2l0L2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiU2FmYXJpXCJ9LHI9bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy8uKi9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD0tMSE9PWUuc2VhcmNoKFwiXFxcXChcIik/L14oLiopXFwvKC4qKVsgXFx0XVxcKCguKikvOi9eKC4qKVxcLyguKikgLztyZXR1cm57bmFtZTpuLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCh0LGUpLHZlcnNpb246bi5kZWZhdWx0LmdldFNlY29uZE1hdGNoKHQsZSl9fX1dO3QuZGVmYXVsdD1vLGUuZXhwb3J0cz10LmRlZmF1bHR9LDkzOmZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITAsdC5kZWZhdWx0PXZvaWQgMDt2YXIgaSxuPShpPXIoMTcpKSYmaS5fX2VzTW9kdWxlP2k6e2RlZmF1bHQ6aX0scz1yKDE4KTt2YXIgbz1be3Rlc3Q6Wy9Sb2t1XFwvRFZQL10sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL1Jva3VcXC9EVlAtKFxcZCtcXC5cXGQrKS9pLGUpO3JldHVybntuYW1lOnMuT1NfTUFQLlJva3UsdmVyc2lvbjp0fX19LHt0ZXN0Olsvd2luZG93cyBwaG9uZS9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD1uLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvd2luZG93cyBwaG9uZSAoPzpvcyk/XFxzPyhcXGQrKFxcLlxcZCspKikvaSxlKTtyZXR1cm57bmFtZTpzLk9TX01BUC5XaW5kb3dzUGhvbmUsdmVyc2lvbjp0fX19LHt0ZXN0Olsvd2luZG93cy9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD1uLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvV2luZG93cyAoKE5UfFhQKSggXFxkXFxkPy5cXGQpPykvaSxlKSxyPW4uZGVmYXVsdC5nZXRXaW5kb3dzVmVyc2lvbk5hbWUodCk7cmV0dXJue25hbWU6cy5PU19NQVAuV2luZG93cyx2ZXJzaW9uOnQsdmVyc2lvbk5hbWU6cn19fSx7dGVzdDpbL21hY2ludG9zaC9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD1uLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvbWFjIG9zIHggKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpLnJlcGxhY2UoL1tfXFxzXS9nLFwiLlwiKSxyPW4uZGVmYXVsdC5nZXRNYWNPU1ZlcnNpb25OYW1lKHQpLGk9e25hbWU6cy5PU19NQVAuTWFjT1MsdmVyc2lvbjp0fTtyZXR1cm4gciYmKGkudmVyc2lvbk5hbWU9ciksaX19LHt0ZXN0OlsvKGlwb2R8aXBob25lfGlwYWQpL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC9vcyAoXFxkKyhbX1xcc11cXGQrKSopIGxpa2UgbWFjIG9zIHgvaSxlKS5yZXBsYWNlKC9bX1xcc10vZyxcIi5cIik7cmV0dXJue25hbWU6cy5PU19NQVAuaU9TLHZlcnNpb246dH19fSx7dGVzdDpmdW5jdGlvbihlKXt2YXIgdD0hZS50ZXN0KC9saWtlIGFuZHJvaWQvaSkscj1lLnRlc3QoL2FuZHJvaWQvaSk7cmV0dXJuIHQmJnJ9LGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC9hbmRyb2lkW1xccy8tXShcXGQrKFxcLlxcZCspKikvaSxlKSxyPW4uZGVmYXVsdC5nZXRBbmRyb2lkVmVyc2lvbk5hbWUodCksaT17bmFtZTpzLk9TX01BUC5BbmRyb2lkLHZlcnNpb246dH07cmV0dXJuIHImJihpLnZlcnNpb25OYW1lPXIpLGl9fSx7dGVzdDpbLyh3ZWJ8aHB3KVtvMF1zL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzp3ZWJ8aHB3KVtvMF1zXFwvKFxcZCsoXFwuXFxkKykqKS9pLGUpLHI9e25hbWU6cy5PU19NQVAuV2ViT1N9O3JldHVybiB0JiZ0Lmxlbmd0aCYmKHIudmVyc2lvbj10KSxyfX0se3Rlc3Q6Wy9ibGFja2JlcnJ5fFxcYmJiXFxkKy9pLC9yaW1cXHN0YWJsZXQvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL3JpbVxcc3RhYmxldFxcc29zXFxzKFxcZCsoXFwuXFxkKykqKS9pLGUpfHxuLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvYmxhY2tiZXJyeVxcZCtcXC8oXFxkKyhbX1xcc11cXGQrKSopL2ksZSl8fG4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC9cXGJiYihcXGQrKS9pLGUpO3JldHVybntuYW1lOnMuT1NfTUFQLkJsYWNrQmVycnksdmVyc2lvbjp0fX19LHt0ZXN0OlsvYmFkYS9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD1uLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvYmFkYVxcLyhcXGQrKFxcLlxcZCspKikvaSxlKTtyZXR1cm57bmFtZTpzLk9TX01BUC5CYWRhLHZlcnNpb246dH19fSx7dGVzdDpbL3RpemVuL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC90aXplblsvXFxzXShcXGQrKFxcLlxcZCspKikvaSxlKTtyZXR1cm57bmFtZTpzLk9TX01BUC5UaXplbix2ZXJzaW9uOnR9fX0se3Rlc3Q6Wy9saW51eC9pXSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybntuYW1lOnMuT1NfTUFQLkxpbnV4fX19LHt0ZXN0OlsvQ3JPUy9dLGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue25hbWU6cy5PU19NQVAuQ2hyb21lT1N9fX0se3Rlc3Q6Wy9QbGF5U3RhdGlvbiA0L10sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL1BsYXlTdGF0aW9uIDRbL1xcc10oXFxkKyhcXC5cXGQrKSopL2ksZSk7cmV0dXJue25hbWU6cy5PU19NQVAuUGxheVN0YXRpb240LHZlcnNpb246dH19fV07dC5kZWZhdWx0PW8sZS5leHBvcnRzPXQuZGVmYXVsdH0sOTQ6ZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMCx0LmRlZmF1bHQ9dm9pZCAwO3ZhciBpLG49KGk9cigxNykpJiZpLl9fZXNNb2R1bGU/aTp7ZGVmYXVsdDppfSxzPXIoMTgpO3ZhciBvPVt7dGVzdDpbL2dvb2dsZWJvdC9pXSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOlwiYm90XCIsdmVuZG9yOlwiR29vZ2xlXCJ9fX0se3Rlc3Q6Wy9odWF3ZWkvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyhjYW4tbDAxKS9pLGUpJiZcIk5vdmFcIixyPXt0eXBlOnMuUExBVEZPUk1TX01BUC5tb2JpbGUsdmVuZG9yOlwiSHVhd2VpXCJ9O3JldHVybiB0JiYoci5tb2RlbD10KSxyfX0se3Rlc3Q6Wy9uZXh1c1xccyooPzo3fDh8OXwxMCkuKi9pXSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC50YWJsZXQsdmVuZG9yOlwiTmV4dXNcIn19fSx7dGVzdDpbL2lwYWQvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpzLlBMQVRGT1JNU19NQVAudGFibGV0LHZlbmRvcjpcIkFwcGxlXCIsbW9kZWw6XCJpUGFkXCJ9fX0se3Rlc3Q6Wy9rZnR0IGJ1aWxkL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLnRhYmxldCx2ZW5kb3I6XCJBbWF6b25cIixtb2RlbDpcIktpbmRsZSBGaXJlIEhEIDdcIn19fSx7dGVzdDpbL3NpbGsvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpzLlBMQVRGT1JNU19NQVAudGFibGV0LHZlbmRvcjpcIkFtYXpvblwifX19LHt0ZXN0OlsvdGFibGV0KD8hIHBjKS9pXSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC50YWJsZXR9fX0se3Rlc3Q6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS50ZXN0KC9pcG9kfGlwaG9uZS9pKSxyPWUudGVzdCgvbGlrZSAoaXBvZHxpcGhvbmUpL2kpO3JldHVybiB0JiYhcn0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyhpcG9kfGlwaG9uZSkvaSxlKTtyZXR1cm57dHlwZTpzLlBMQVRGT1JNU19NQVAubW9iaWxlLHZlbmRvcjpcIkFwcGxlXCIsbW9kZWw6dH19fSx7dGVzdDpbL25leHVzXFxzKlswLTZdLiovaSwvZ2FsYXh5IG5leHVzL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLm1vYmlsZSx2ZW5kb3I6XCJOZXh1c1wifX19LHt0ZXN0OlsvW14tXW1vYmkvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpzLlBMQVRGT1JNU19NQVAubW9iaWxlfX19LHt0ZXN0OmZ1bmN0aW9uKGUpe3JldHVyblwiYmxhY2tiZXJyeVwiPT09ZS5nZXRCcm93c2VyTmFtZSghMCl9LGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLm1vYmlsZSx2ZW5kb3I6XCJCbGFja0JlcnJ5XCJ9fX0se3Rlc3Q6ZnVuY3Rpb24oZSl7cmV0dXJuXCJiYWRhXCI9PT1lLmdldEJyb3dzZXJOYW1lKCEwKX0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpzLlBMQVRGT1JNU19NQVAubW9iaWxlfX19LHt0ZXN0OmZ1bmN0aW9uKGUpe3JldHVyblwid2luZG93cyBwaG9uZVwiPT09ZS5nZXRCcm93c2VyTmFtZSgpfSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC5tb2JpbGUsdmVuZG9yOlwiTWljcm9zb2Z0XCJ9fX0se3Rlc3Q6ZnVuY3Rpb24oZSl7dmFyIHQ9TnVtYmVyKFN0cmluZyhlLmdldE9TVmVyc2lvbigpKS5zcGxpdChcIi5cIilbMF0pO3JldHVyblwiYW5kcm9pZFwiPT09ZS5nZXRPU05hbWUoITApJiZ0Pj0zfSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC50YWJsZXR9fX0se3Rlc3Q6ZnVuY3Rpb24oZSl7cmV0dXJuXCJhbmRyb2lkXCI9PT1lLmdldE9TTmFtZSghMCl9LGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLm1vYmlsZX19fSx7dGVzdDpmdW5jdGlvbihlKXtyZXR1cm5cIm1hY29zXCI9PT1lLmdldE9TTmFtZSghMCl9LGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLmRlc2t0b3AsdmVuZG9yOlwiQXBwbGVcIn19fSx7dGVzdDpmdW5jdGlvbihlKXtyZXR1cm5cIndpbmRvd3NcIj09PWUuZ2V0T1NOYW1lKCEwKX0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpzLlBMQVRGT1JNU19NQVAuZGVza3RvcH19fSx7dGVzdDpmdW5jdGlvbihlKXtyZXR1cm5cImxpbnV4XCI9PT1lLmdldE9TTmFtZSghMCl9LGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLmRlc2t0b3B9fX0se3Rlc3Q6ZnVuY3Rpb24oZSl7cmV0dXJuXCJwbGF5c3RhdGlvbiA0XCI9PT1lLmdldE9TTmFtZSghMCl9LGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLnR2fX19LHt0ZXN0OmZ1bmN0aW9uKGUpe3JldHVyblwicm9rdVwiPT09ZS5nZXRPU05hbWUoITApfSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC50dn19fV07dC5kZWZhdWx0PW8sZS5leHBvcnRzPXQuZGVmYXVsdH0sOTU6ZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMCx0LmRlZmF1bHQ9dm9pZCAwO3ZhciBpLG49KGk9cigxNykpJiZpLl9fZXNNb2R1bGU/aTp7ZGVmYXVsdDppfSxzPXIoMTgpO3ZhciBvPVt7dGVzdDpmdW5jdGlvbihlKXtyZXR1cm5cIm1pY3Jvc29mdCBlZGdlXCI9PT1lLmdldEJyb3dzZXJOYW1lKCEwKX0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7aWYoL1xcc2VkZ1xcLy9pLnRlc3QoZSkpcmV0dXJue25hbWU6cy5FTkdJTkVfTUFQLkJsaW5rfTt2YXIgdD1uLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvZWRnZVxcLyhcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm57bmFtZTpzLkVOR0lORV9NQVAuRWRnZUhUTUwsdmVyc2lvbjp0fX19LHt0ZXN0OlsvdHJpZGVudC9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpzLkVOR0lORV9NQVAuVHJpZGVudH0scj1uLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvdHJpZGVudFxcLyhcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIGUudGVzdCgvcHJlc3RvL2kpfSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpzLkVOR0lORV9NQVAuUHJlc3RvfSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC9wcmVzdG9cXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OmZ1bmN0aW9uKGUpe3ZhciB0PWUudGVzdCgvZ2Vja28vaSkscj1lLnRlc3QoL2xpa2UgZ2Vja28vaSk7cmV0dXJuIHQmJiFyfSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpzLkVOR0lORV9NQVAuR2Vja299LHI9bi5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL2dlY2tvXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbLyhhcHBsZSk/d2Via2l0XFwvNTM3XFwuMzYvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57bmFtZTpzLkVOR0lORV9NQVAuQmxpbmt9fX0se3Rlc3Q6Wy8oYXBwbGUpP3dlYmtpdC9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpzLkVOR0lORV9NQVAuV2ViS2l0fSxyPW4uZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC93ZWJraXRcXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19XTt0LmRlZmF1bHQ9byxlLmV4cG9ydHM9dC5kZWZhdWx0fX0pfSkpOyIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgIT0gbnVsbCAmJlxuICAgIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IFB1c2hSZWdpc3RyYXRpb24gfSBmcm9tICdAYWVyb2dlYXIvcHVzaCdcblxudmFyIGFwcCA9IHtcbiAgICAvLyBBcHBsaWNhdGlvbiBDb25zdHJ1Y3RvclxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIHRoaXMub25EZXZpY2VSZWFkeS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgfSxcblxuICAvLyBkZXZpY2VyZWFkeSBFdmVudCBIYW5kbGVyXG4gIC8vXG4gIC8vIEJpbmQgYW55IGNvcmRvdmEgZXZlbnRzIGhlcmUuIENvbW1vbiBldmVudHMgYXJlOlxuICAvLyAncGF1c2UnLCAncmVzdW1lJywgZXRjLlxuICBvbkRldmljZVJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlY2VpdmVkRXZlbnQoJ2RldmljZXJlYWR5Jyk7XG4gIH0sXG5cblxuICAvLyBVcGRhdGUgRE9NIG9uIGEgUmVjZWl2ZWQgRXZlbnRcbiAgcmVjZWl2ZWRFdmVudDogZnVuY3Rpb24oaWQpIHtcbiAgICB2YXIgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICB2YXIgbGlzdGVuaW5nRWxlbWVudCA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RlbmluZycpO1xuICAgIHZhciByZWNlaXZlZEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNlaXZlZCcpO1xuXG4gICAgbGlzdGVuaW5nRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKTtcbiAgICByZWNlaXZlZEVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmJsb2NrOycpO1xuXG4gICAgdGhpcy5yZWdpc3RlclRvVVBTKCk7XG5cbiAgICBQdXNoUmVnaXN0cmF0aW9uLm9uTWVzc2FnZVJlY2VpdmVkKChub3RpZmljYXRpb24gPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIHB1c2ggbm90aWZpY2F0aW9uOiAnLCBub3RpZmljYXRpb24ubWVzc2FnZSk7XG4gICAgfSkpO1xuICB9LFxuXG4gIHJlZ2lzdGVyVG9VUFM6ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnUmVnaXN0ZXJpbmcuLi4nKTtcbiAgICBuZXcgUHVzaFJlZ2lzdHJhdGlvbih7XG4gICAgICB1cmw6ICdodHRwOi8vMTAuMC4yLjI6OTk5OS8nLFxuICAgICAgYW5kcm9pZDoge1xuICAgICAgICBzZW5kZXJJRDogJzIxMTQxMjM1OTQ2OScsXG4gICAgICAgIHZhcmlhbnRJRDogJ2U4MjgxMTZhLWM3MWItNDRjYi04NGYxLTdkMTNjZTQyYzliOCcsXG4gICAgICAgIHZhcmlhbnRTZWNyZXQ6ICdjMDdlMGExMC1iMjc0LTQ1ZjEtYjdmNS0wMWRjNjUzZDZlNDQnXG4gICAgICB9XG4gICAgfSlcbiAgICAucmVnaXN0ZXIoKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkIScpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQ6ICcsIGVycm9yLm1lc3NhZ2UsIEpTT04uc3RyaW5naWZ5KGVycm9yKSlcbiAgICB9KTtcbiAgfVxufTtcblxuYXBwLmluaXRpYWxpemUoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
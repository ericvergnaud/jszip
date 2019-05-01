/* global Promise */
'use strict';

// load the global object first:
// - it should be better integrated in the system (unhandledRejection in node)
// - the environment may have a custom Promise implementation (see zone.js)
var ES6Promise = null;
if (typeof Promise !== "undefined") {
    ES6Promise = Promise;
} else {
    ES6Promise = require("lie");
}

var utils_delay = null;
var delay = function(callback, args, self) {
    if(!utils_delay) {
        var utils = require("./utils.js");
        utils_delay = utils.delay;
    }
    utils_delay(callback, args, self);
};

/**
 * Let the user use/change some implementations.
 */
module.exports = {
    Promise: ES6Promise,
    delay: delay
};

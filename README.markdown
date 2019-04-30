JSZip-sync 
==========

JSZip-sync is a fork of JSZip, a library for creating, reading and editing .zip files with Javascript, with a
JSZip [![Build Status](https://api.travis-ci.org/Stuk/jszip.svg?branch=master)](http://travis-ci.org/Stuk/jszip) [![Code Climate](https://codeclimate.com/github/Stuk/jszip/badges/gpa.svg)](https://codeclimate.com/github/Stuk/jszip)
=====

[![Selenium Test Status](https://saucelabs.com/browser-matrix/jszip.svg)](https://saucelabs.com/u/jszip)

A library for creating, reading and editing .zip files with JavaScript, with a
lovely and simple API.

This page is the only documentation for JSZip-sync (and JSZip-sync only).
See https://stuk.github.io/jszip for the complete JSZip documentation.

JSZip-sync adds sync support to the official JSZip which only supports async methods.
Async methods are the recommended way to go when running in a browser UI, where latency is a concern.
However, sync methods can also be useful when dealing with complex business logic and executing in node.js or in a worker.
It is discouraged to use sync methods in the browser UI.

Sync support is enabled by simply wrapping async calls in zip.sync, as follows:

```javascript
var JSZip = require("jszip-sync");
var zip = new JSZip();
var zipped = zip.sync(function() {
    // put some stuff in there
    zip.file("Hello.txt", "Hello World\n");
    var img = zip.folder("images");
    img.file("smile.gif", imgData, {base64: true});
    // call regular async methods
    var data = null;
    zip.generateAsync({type: "arraybuffer", compression: "DEFLATE"})
        .then(function(content) {
            data = content;
            });
    return data;        
});
// now zipped contains zipped data

```


License
-------

JSZip-sync is dual-licensed. You may use it under the MIT license *or* the GPLv3
license. See [LICENSE.markdown](LICENSE.markdown).

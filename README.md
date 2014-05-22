ndpack-image
============
Unpacks a base64 encoded string PNG. This is used for creating `require`-able images.

# Usage

First, take your image and pack it into a module:

```
ndpack-image test.img > test.js
```

Then load the test image:

```javascript
var myimage = require("./test.js")
```

If you want to publish your image on npm, be sure to add ndpack-image as a dependency.

# Install

```
npm install ndpack-image
```

# Credits
(c) 2014 Mikola Lysenko. MIT License
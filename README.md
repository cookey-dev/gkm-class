# GKM
An event based, Global Keyboard and Mouse listener.


Tested on Windows 7 (and Linux), but should work on Mac OS X as well (untested).

[![NPM](https://nodei.co/npm-dl/gkm-class.png)](https://nodei.co/npm/gkm-class/)

## Why?
Node didn't have any global keyboard and mouse listener available at the time.

## Requirements
GKM depends on [JNativeHook](https://github.com/kwhat/jnativehook), which runs on Java. Thus you will need to have a JVM available and more importantly, java availble on your PATH.

In the `lib` folder, you will find `gkm.jar`, which source you can find at https://github.com/tomzx/gkm-java.
You will also find `JNativeHook.jar`, which source you can find at https://github.com/kwhat/jnativehook.

## Getting started
Install gkm via node.js package manager:

    npm i gkm-class

Then require the package in your code.

## **ALWAYS** remember to run `gkm.quit()` when you are done with GKM, otherwise java will continue running.

```javascript
import GKM from 'gkm-class';

const gkm = new GKM();

// Listen to all key events (pressed, released, typed)
gkm.events.on('key.*', function(data) {
    console.log(this.event + ' ' + data);
});

// Listen to all mouse events (click, pressed, released, moved, dragged)
gkm.events.on('mouse.*', function(data) {
	console.log(this.event + ' ' + data);
});

// Close gkm in 10 seconds
setTimeout(() => {
    gkm.quit(); // Close java and remove listeners
}, 10000);
```

## License
The code is licensed under the MIT license (http://opensource.org/licenses/MIT). See license.txt.
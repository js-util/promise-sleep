# Promise Sleep

Returns a promise, which resolve after the specified sleep itme (ms)

# npm install

```.bash
npm install --save @js-util/promise-sleep
```

# Example usage

```.js
// Importing the module
const promiseSleep = require("@js-util/promise-sleep");

// Await sleep in ms
// 1000 ms -> 1 second
await promiseSleep(1000)
```

# Its code

```.js
// Store a reference to the global setTimeout,
// in case it gets replaced (e.g. sinon.useFakeTimers())
const timeoutFunction = setTimeout;

/**
 * @param {Int} timeout in milliseconds to sleep by
 * @return a promise which resolves on timeout, returns no actual value
 */
function promiseSleep(timeout) {
    return new Promise((resolve) => {
        timeoutFunction(resolve, timeout);
    });
}

// Export the function
module.exports = promiseSleep;
```

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
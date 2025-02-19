# Unhandled Exception in Node.js HTTP Server

This repository demonstrates a common error in Node.js where exceptions during request processing are not caught, leading to server crashes or incomplete responses. The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The `bug.js` file showcases an HTTP server that lacks comprehensive error handling.  A simulated error within the request processing logic is not caught, causing the server to crash or send incomplete responses.

## Solution

The `bugSolution.js` file demonstrates the fix. By using a `try...catch` block, potential exceptions during request processing are caught, logged for debugging, and a proper error response is sent to the client.  This prevents server crashes and provides more robust error handling.

## How to Run

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to see the unhandled exception.
4. Run `node bugSolution.js` to see the fixed version.

## Lessons Learned

Always use `try...catch` blocks in request handlers to catch potential errors. Log errors appropriately for debugging, and send informative error responses to clients to improve the user experience and system stability.  Avoid generic 500 errors when possible to give the client more context about the issue.
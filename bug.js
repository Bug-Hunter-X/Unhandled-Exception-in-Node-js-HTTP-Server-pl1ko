const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  try {
    // Simulate an error that could occur during request processing
    const result = someFunctionThatMightThrowAnError();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  } catch (error) {
    // Log the error for debugging
    console.error('Error processing request:', error);

    // Respond to the client with a generic error message
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someFunctionThatMightThrowAnError() {
  // Simulate a potential error
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Simulated error');
  }
  return 'Success';
}